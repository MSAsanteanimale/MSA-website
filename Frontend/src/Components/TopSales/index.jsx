import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { addToMSAcart } from '../../HelperFunctions/utility.js';
import '../../css/templatemo-scholar.css';
import cart from '../../img/products/cart.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopSales = ({products, setShowModal}) => {
    const navigate = useNavigate()
    const [slidesToShow, setSlidesToShow] = useState(3);
    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 992 && window.innerWidth >= 767) {
                setSlidesToShow(2);
            } else if (window.innerWidth < 767) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        updateSlidesToShow();

        window.addEventListener('resize', updateSlidesToShow);

        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
        className: 'center'
    };

    const handleAddToCart = (product) => {
        addToMSAcart(product);
        setShowModal(true)
      };
    return (
        <section className="section courses whiteColor" id="courses" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mx-auto wow fadeInUp">
                        <div className="section-heading display-6">
                            <h1>TOP DES VENTES</h1>
                        </div>
                    </div>
                </div>
                <div className="row event_box slider-container">
                
                <Slider {...settings} >
                    {products.filter((e) => e.topSale).map((e, i) => (
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design" key={i}>
                            <div className="events_item" style={{ marginLeft: '28px', marginRight: "5px"}}>
                                <div className="thumb">
                                    <a className="full-width-img" onClick={()=>navigate(`/product/${e.title}/${e.id}`)}><img src={e.src} alt="product" /></a>
                                    <span className="category">{e.category}</span>
                                    {e.promotion !== 0 && <span className="promotion">en promotion</span>}
                                    <span className="price" onClick={()=>handleAddToCart(e)}><h6><em><img src={cart} alt="Cart" style={{ width: '45px', height: '45px' }} /></em></h6></span>
                                </div>
                                <div className="down-content" onClick={()=>navigate(`/product/${e.title}/${e.id}`)}>
                                    <span className="author">{e.target}</span>
                                    <h4>{e.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider> 
                </div>
            </div>
        </section>
    );
}


export default TopSales;
