import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../img/logo3.png'

function Footer() {

    const [newsletter, setNewsletter] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    //****************************************** Error handling ********************************************************** */
  const [errorNl, setErrorNl] = useState('');
  const [showClassNl, setShowClassNl] = useState("");

  const handleError = (str) => {
    setErrorNl(str);
    setShowClassNl('show')
    setTimeout(() => {
      setErrorNl(null);
      setShowClassNl('')
    }, 5000);
  };
  //****************************************** Success handling ******************************************************* */
  const [successNl, setSuccessNl] = useState(null);
  const [successClassNl, setSuccessClassNl] = useState("");

  const handleSuccess = (str) => {
      setSuccessNl(str);
      setSuccessClassNl('showSuccess')
      setTimeout(() => {
          setSuccessNl(null);
          setSuccessClassNl('')
      }, 5000);
  };

//   ************************************ API Request *************************************************************
const baseUrl = process.env.REACT_APP_BASE_URL;
  const hundleSubmit = () => {
    if(!validateEmail(newsletter)){
        handleError("Adresse e-mail invalide !!")
    }
    else {
        axios.post(`${baseUrl}/newsletter/add`, {email: newsletter}).then(() => {handleSuccess("Abonnement confirmé, merci !");
        setNewsletter("")}).catch((err) => { console.log(err); handleError('Problème de communication avec le serveur') })
    }
  }

    const linkedInUrl = "https://www.linkedin.com/in/rafik-souifi-086956124/";
    const phoneNumber = "+21658023439";

    const handleClick = (e) => {
        e.preventDefault();
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            window.open(linkedInUrl, "_blank");
        }
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:msasanteanimale@gmail.com';
    };

    return (
        <div className="container-fluid bg-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className={`error-message ${showClassNl}`}>

                <div className="close-button" onClick={() => { setErrorNl(null); setShowClassNl('') }}>
                    X
                </div>
                <div className="message-content">{errorNl}</div>
            </div>
            <div className={`success-message ${successClassNl}`}>

                <div className="close-buttonSuccess" onClick={() => { setSuccessNl(null); setSuccessClassNl('') }}>
                    X
                </div>
                <div className="message-contentSuccess">{successNl}</div>
            </div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6">
                        <h1 className="text-primary mb-4">
                            <img className="img-fluid me-2" src={logo} alt="" style={{ width: '200px', height: '60px' }} />
                        </h1>

                        <span>
                            Société tunisienne de vente et de distribution de matériels et équipements vétérinaires et d'élevage, opérant sur le marché tunisien depuis 2015.
                        </span>
                    </div>
                    <div className="col-md-6">
                        <h5 className="mb-4">Newsletter</h5>
                        <p>Abonnez-vous pour recevoir nos dernières actualités et offres spéciales !</p>
                        <div className="position-relative">
                            <input
                                className="form-control bg-transparent w-100 py-3 ps-4 pe-5 inputField"
                                type="text"
                                placeholder="Email"
                                value={newsletter}
                                onChange={(e) => setNewsletter(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                                onClick={() =>hundleSubmit()}
                            >
                                S'abonner
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Contactez-nous</h5>
                        <p className="email-address">
                            <i className="fa fa-map-marker-alt me-3"></i>
                            <span className="short-email">Cité Lemrazguia 2020...</span>
                            <span className="full-email">Cité Lemrazguia 2020, Sidi Thabet</span>
                        </p>
                        <p >
                            <i className="fa fa-phone-alt me-3"></i>
                            <span className="phone">71 553 010 / 92 567 080</span>
                        </p>
                        <p className="email-address" onClick={handleEmailClick}>
                            <i className="fa fa-envelope me-3"></i>
                            <span className="short-email">msasanteanimale@gm...</span>
                            <span className="full-email">msasanteanimale@gmail.com</span>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Gammes de produits</h5>
                        <a className="btn btn-link" href="">
                            animaux de compagnie
                        </a>
                        <a className="btn btn-link" href="">
                            Reproduction
                        </a>
                        <a className="btn btn-link" href="">
                            Chirurgie
                        </a>
                        <a className="btn btn-link" href="">
                            Comp alimentaires
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Liens rapides</h5>
                        <a className="btn btn-link" href="">
                            À propos de nous
                        </a>
                        <a className="btn btn-link" href="">
                            Nouveauté
                        </a>
                        <a className="btn btn-link" href="">
                            Nos Partenaires
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-4">Suivez-nous</h5>
                        <div className="d-flex">

                            <a className="btn btn-square rounded-circle me-1" href="https://www.facebook.com/profile.php?id=100042411583522&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-square rounded-circle me-1" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">{new Date().getFullYear()}
                            &copy; <a >MSA Santé Animale</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed and Developed By <a onClick={handleClick}>R. SOUIFI</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
