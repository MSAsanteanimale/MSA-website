import React from 'react';
import icon1 from '../../img/icon-7.png'
import icon2 from '../../img/icon-6.png'
import icon3 from '../../img/icon-5.png'
import icon4 from '../../img/icon-4.png'
import icon5 from '../../img/icon-3.png'
import icon6 from '../../img/icon-8.png'

const WhyUs = () => {
    return (
        <div className="container-xxl py-5 " >
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <h1 className="display-6">POURQUOI NOUS !</h1>
                    <p className="text-primary fs-5 mb-5">Leading the Pack in Animal Care Excellence</p>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon1} alt="Easy To Start" />
                            <div className="ps-4">
                                <h5 className="mb-3">Maîtrise et savoir-faire spécialisé</h5>
                                <span>Avec 10 ans d'expérience, MSA garantit des solutions vétérinaires de qualité supérieure pour tous ses clients.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon2} alt="Safe & Secure" />
                            <div className="ps-4">
                                <h5 className="mb-3">Qualité des produits et services</h5>
                                <span>Nos produits vétérinaires de qualité supérieure témoignent de notre engagement envers le bien-être des animaux.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon3} alt="Affordable Plans" />
                            <div className="ps-4">
                                <h5 className="mb-3">Gamme complète de solutions</h5>
                                <span>Une gamme complète de solutions pour répondre à tous vos besoins.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon4} alt="Secure Storage" />
                            <div className="ps-4">
                                <h5 className="mb-3">Partenariats et collaborations</h5>
                                <span>Des partenariats et collaborations solides pour une meilleure efficacité et des résultats durables.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon5} alt="Protected By Insurance" />
                            <div className="ps-4">
                                <h5 className="mb-3">Réputation et témoignages</h5>
                                <span>Une réputation solide soutenue par des témoignages authentiques de clients satisfaits.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="d-flex align-items-start">
                            <img className="img-fluid flex-shrink-0" src={icon6} alt="24/7 Support" />
                            <div className="ps-4">
                                <h5 className="mb-3">Fiabilité et confiance</h5>
                                <span>La fiabilité et la confiance sont les fondations de notre engagement envers nos clients.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
