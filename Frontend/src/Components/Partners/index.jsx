import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { partners } from '../../dammyData';


const Partners = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        className: 'center'
    };

    const [currentImage, setCurrentImage] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(!currentImage);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImage]);

    const sliderRef = useRef(null);

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="container-xxl py-5 whiteColor">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp display-6" >
                    <h1 className="mb-5">NOS PARTENAIRES</h1>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-img">
                            <img className="img-fluid animated pulse infinite" src={currentImage ? partners[0].src : partners[1].src} alt="" />
                            <img className="img-fluid animated pulse infinite" src={currentImage ? partners[2].src : partners[3].src} alt="" />
                            <img className="img-fluid animated pulse infinite" src={currentImage ? partners[4].src : partners[5].src} alt="" />
                            <img className="img-fluid animated pulse infinite" src={currentImage ? partners[6].src : partners[7].src} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp missing" data-wow-delay="0.5s">
                        <div className="owl-carousel testimonial-carousel">
                            <Slider ref={sliderRef} {...settings} >
                                {partners.map((e, i) => (
                                    <div className="testimonial-item" key={i}>
                                        <img className="img-fluid mb-3" src={e.src} alt="" />
                                        <p className="fs-5">{e.description}</p>
                                        <h5>{e.title}</h5>
                                        <a href={e.href} className="text-primary" target="_blank" rel="noopener noreferrer">{e.website}</a>
                                    </div>))}
                            </Slider>
                            <div className="owl-nav">
                                <div className="owl-prev arrowCont " onClick={prevSlide}>
                                    <i className="bi bi-chevron-left iconArrow"></i>
                                </div>
                                <div className="owl-next arrowCont" onClick={nextSlide}>
                                    <i className="bi bi-chevron-right iconArrow"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
