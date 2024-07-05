import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import about1 from '../../img/About/About1.webp'
import about2 from '../../img/About/About2.webp'
import about3 from '../../img/About/About3.webp'
import about4 from '../../img/About/About4.webp'

const Banner = ({banner}) => {
    const navigate = useNavigate()
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        className: 'center'
    };

    const images = [about1, about2, about3, about4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
    return (
        <>
            <Slider {...settings} >
                {banner.map((e, i) => (
                    <div className="container-fluid hero-header bg-light pyp-5 mb-5" key={i}>
                        <div className="container py-5">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <h1 className="display-5 mb-3 animated slideInDown">{e.title}</h1>
                                    <p className="animated slideInDown">{e.description.slice(0,237)+ " ..."}</p>
                                    <a className="btn btn-primary py-3 px-4 animated slideInDown" onClick={()=>navigate(`/product/${e.title}/${e.id}`)}>En savoir plus</a>
                                </div>
                                <div className="col-lg-6 animated fadeIn">
                                    <img className="img-fluid animated pulse infinite" style={{ animationDuration: '3s' }} src={e.srcSP}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </Slider>
            <div className="container-xxl py-5 whiteColor" id="about-us-section">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src={images[currentImageIndex]} alt="" />
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h1 className="display-6">MSA SANTÉ ANIMALE</h1>
                                <p className="text-primary fs-5 mb-4">Soin et expertise au service de la santé animale.</p>
                                <p>MSA Santé Animale se positionne en tant qu'acteur de référence dans le domaine de la santé animale et de la distribution d'équipements vétérinaires et d'élevage de pointe.
                                </p>
                                <p className="mb-4">Notre entreprise s'efforce continuellement d'offrir des produits et des services innovants pour répondre aux besoins variés de nos clients, dans le but ultime d'améliorer le bien-être et la santé des animaux.</p>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Large gamme de produits vétérinaires de qualité supérieure.</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Innovation constante pour rester à la pointe de la santé animale.</span>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Équipe dévouée à chaque aspect de la santé animale.</span>
                                </div>
                                <a className="btn btn-primary py-3 px-4" onClick={()=>navigate(`/contact`)}>Nous contacter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Custom arrow component for the previous arrow
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-prev-arrow" onClick={onClick}>
            <div className="arrow-left"></div>
        </div>
    );
};

// Custom arrow component for the next arrow
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-next-arrow" onClick={onClick}>
            <div className="arrow-right"></div>
        </div>
    );
};

export default Banner;
