import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { addToMSAcart } from '../../HelperFunctions/utility.js';
import '../../css/templatemo-scholar.css';
import cart from '../../img/products/cart.png';
import SideBar from './sideBar';

const Shop = ({ sideBarOpen, setSideBarOpen, products, setShowModal, selectedCategories, setSelectedCategories, toggle, setToggle}) => {
    const navigate = useNavigate()

    // ******************** filter states *********************
    var filteredProducts = products

    if (selectedCategories.length === 0) {
        filteredProducts = products;
    } else {
        filteredProducts = (products.filter(product => selectedCategories.includes(product.filter)));
    }

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Pagination -------------------------------------------------------------------------------------
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, toggle]);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPagination = () => {
        const pages = [];

        if (totalPages > 1) {
            if (currentPage === 1) {
                pages.push(
                    <a

                        key={1}
                        onClick={(e) => {
                            handleClick(1);
                        }}
                        className="active__page"
                    >
                        1
                    </a>
                );
                if (totalPages > 2) {
                    pages.push(
                        <a

                            key={2}
                            onClick={(e) => {

                                handleClick(2);
                            }}
                            className="not__active__page"
                        >
                            2
                        </a>
                    );
                    pages.push(<span key="dots1" className="pagination-dots">...</span>);
                }
            } else if (currentPage >= 2 && currentPage < totalPages - 1) {
                if (currentPage >= 2) pages.push(<span key="dots2" className="pagination-dots">...</span>);
                pages.push(
                    <a

                        key={currentPage}
                        onClick={(e) => {
                            handleClick(currentPage);
                        }}
                        className="active__page"
                    >
                        {currentPage}
                    </a>
                );
                pages.push(
                    <a

                        key={currentPage + 1}
                        onClick={(e) => {
                            handleClick(currentPage + 1);
                        }}
                        className="not__active__page"
                    >
                        {currentPage + 1}
                    </a>
                );
                if (currentPage < totalPages - 1) pages.push(<span key="dots3" className="pagination-dots">...</span>);
            } else if (currentPage >= totalPages - 1) {
                if (currentPage > 2) pages.push(<span key="dots4" className="pagination-dots">...</span>);
                pages.push(
                    <a

                        key={totalPages - 1}
                        onClick={(e) => {
                            handleClick(totalPages - 1);
                        }}
                        className={currentPage === totalPages - 1 ? "active__page" : "not__active__page"}
                    >
                        {totalPages - 1}
                    </a>
                );
                pages.push(
                    <a

                        key={totalPages}
                        onClick={(e) => {
                            handleClick(totalPages);
                        }}
                        className={currentPage === totalPages ? "active__page" : "not__active__page"}
                    >
                        {totalPages}
                    </a>
                );
            }
        }

        return pages;
    };

    const handleAddToCart = (product) => {
        addToMSAcart(product);
        setShowModal(true)
    };

    const domainName = process.env.REACT_APP_DOMAIN_NAME;
    return (
        <>
            <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} toggle={toggle} setToggle={setToggle} products={products} setCurrentPage = {setCurrentPage}/>
            <section className="section courses whiteColor" id="courses" >
                {!sideBarOpen && <div id="mobile" className="hidden-lg hidden-md" onClick={() => setSideBarOpen(true)}>
                    <i className="fa fa-list-ul" aria-hidden="true"></i>
                </div>}
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 text-center mx-auto wow fadeInUp">
                            <div className="section-heading display-6">
                                <h2>BOUTIQUE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row event_box slider-container">
                        {currentProducts.map((e, i) => (
                            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design" key={i}>
                                <div className="events_item" style={{ marginLeft: '28px', marginRight: "5px" }}>
                                    <div className="thumb">
                                        <a className="full-width-img" onClick={() => navigate(`/product/${e.title}/${e.id}`)}><img src={e.src} alt="product" /></a>
                                        <span className="category">{e.category}</span>
                                        {e.promotion !== 0 && <span className="promotion">en promotion</span>}
                                        <span className="price" onClick={() => handleAddToCart(e)}><h6><em><img src={cart} alt="Cart" style={{ width: '45px', height: '45px' }} /></em></h6></span>
                                    </div>
                                    <div className="down-content" onClick={() => navigate(`/product/${e.title}/${e.id}`)}>
                                        <span className="author">{e.target}</span>
                                        <h4>{e.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
                        {
                          "@context": "https://schema.org",
                          "@type": "ItemList",
                          "itemListElement": [
                            ${filteredProducts.map((product, index) => `
                              {
                                "@type": "ListItem",
                                "position": ${index + 1},
                                "item": {
                                  "@type": "Product",
                                  "name": "${product.title}",
                                  "description": "${product.description}",
                                  "image": "${product.src}",
                                  "url": "${domainName}/product/${product.title}/${product.id}",
                                  "offers": {
                                    "@type": "Offer",
                                    "url": "${domainName}/product/${product.title}/${product.id}",
                                    "availability": "https://schema.org/${product.in_stock ? "En stock" : "En rupture de stock"}"
                                  }
                                }
                              }
                            `).join(',')}
                          ]
                        }
                    ` }} />
                </div>
                <div className="pagination__items">
                    <div className="col-lg-12 text-center">
                        <div className="pagination__option">
                            {(currentPage !== 1) && <a onClick={handlePrev}><i className="fa fa-angle-left"></i></a>}
                            {renderPagination()}
                            {(currentPage < totalPages) && <a onClick={handleNext}><i className="fa fa-angle-right"></i></a>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Shop;
