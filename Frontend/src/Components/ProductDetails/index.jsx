import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addToMSAcart } from '../../HelperFunctions/utility.js';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./Single.css";

const ProductDetails = ({ products, banner }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const mergedArray = [...banner, ...products];
  const product = mergedArray.find(product => product.id == id);

  const [desPga, setDesPage] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  let spec = [{}];
  try {
    spec = product.specification.length ? JSON.parse(product.specification) : [{}];
  } catch (e) {
    console.error("Invalid JSON specification", e);
  }
  const headers = Object.keys(spec[0]);

  const handleAddToCart = (product, quantity) => {
    for (let i = 0; i < quantity; i++) {
      addToMSAcart(product);
    }
    navigate("/panier");
  };

  const domainName = process.env.REACT_APP_DOMAIN_NAME;

  return (
    <section className="product-details spad whiteColor">
      <Helmet>
        <title>{`${product.title} - MSA Santé Animale`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.title} - MSA Santé Animale`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.srcSP} />
        <meta property="og:url" content={`${domainName}/product/${product.title}/${product.id}`} />
        <meta property="og:type" content="product.item" />

        {/* Schema.org Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "${product.title}",
            "description": "${product.description}",
            "image": "${product.srcSP}",
            "url": "${domainName}/product/${product.title}/${product.id}",
            "brand": {
              "@type": "Brand",
              "name": "MSA Santé Animale"
            },
            "offers": {
              "@type": "Offer",
              "url": "${domainName}/product/${product.title}/${product.id}",
              "availability": "https://schema.org/${product.in_stock ? "En stock" : "En rupture de stock"}"
            }
          }
        ` }} />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product__details__pic" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="product__details__slider__content">
                <div className="product__details__pic__slider owl-carousel">
                  <img className="product__big__img" src={product.srcSP} alt={product.title} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product__details__text">
              <h3>{product.title} <span>{product.subtitle}</span></h3>
              <p>{product.description.slice(0, 146)} .....</p>
              <div className="product__details__button">
                <div className="quantity">
                  <span>Quantité:</span>
                  <div className="pro-qty">
                    <span className="dec qtybtn" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</span>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="no-spinners"
                    />
                    <span className="inc qtybtn" onClick={() => setQuantity(quantity + 1)}>+</span>
                  </div>
                </div>
                <a className="cart-btn" style={{ cursor: 'pointer' }} onClick={() => handleAddToCart(product, quantity)}>
                  <span className="arrow_carrot-2down"></span> Commander
                </a>
              </div>
              <div className="product__details__widget">
                <ul>
                  <li>
                    <span>Disponibilité:</span>
                    <div className="stock__checkbox">
                      <label htmlFor="stockin">
                        {product.in_stock ? "En stock" : "En rupture de stock"}
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Promotions:</span>
                    <div className="stock__checkbox">
                      <label htmlFor="stockin">
                        {product.promotion ? product.promotionOffer : "Remise selon la quantité commandée."}
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={`nav-link ${desPga ? 'active' : ''}`} onClick={() => setDesPage(true)}>Description</a>
                </li>
                {spec.length > 1 && (
                  <li className="nav-item">
                    <a className={`nav-link ${!desPga ? 'active' : ''}`} onClick={() => setDesPage(false)}>{product.id<100000 ?"Spécification" : "Index"}</a>
                  </li>
                )}
              </ul>
              <div className="tab-content">
                <div className={`tab-pane ${desPga ? 'active' : ''}`}>
                  <h6>Description</h6>
                  <p>{product.description}</p>
                </div>
                {spec.length > 1 && (
                  <div className={`tab-pane ${!desPga ? 'active' : ''}`}>
                    <h6>{product.id<100000 ? "Spécification" : "Index"}</h6>
                    <div className="spec-table-wrapper">
                      <table className="spec-table">
                        <thead className="spec-table-head">
                          <tr className="spec-table-row">
                            {headers.map((header, index) => (
                              <th key={index} className="spec-table-header">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="spec-table-body">
                          {spec.map((item, index) => (
                            <tr key={index} className="spec-table-row">
                              {headers.map((header, idx) => (
                                <td key={idx} className="spec-table-cell">{item[header]}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
