import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css'

const Contact = () => {
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const contactMessage = {
    nom: nom,
    email: email,
    phone: phone,
    message: message
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //****************************************** Error handling ********************************************************** */
  const [errorC, setErrorC] = useState('');
  const [showClassC, setShowClassC] = useState("");

  const handleError = (str) => {
    setErrorC(str);
    setShowClassC('show')
    setTimeout(() => {
      setErrorC(null);
      setShowClassC('')
    }, 5000);
  };
  //****************************************** Success handling ******************************************************* */
  const [successC, setSuccessC] = useState(null);
  const [successClassC, setSuccessClassC] = useState("");

  const handleSuccess = (str) => {
    setSuccessC(str);
    setSuccessClassC('showSuccess')
    setTimeout(() => {
      setSuccessC(null);
      setSuccessClassC('')
    }, 5000);
  };

  //   ************************************ API Request *************************************************************
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const hundleSubmit = (event) => {
    event.preventDefault();
    if (!nom.length || !email.length || !phone.length || !message.length) {
      handleError("Tous les champs sont obligatoires !!")
    }
    else if(!validateEmail(email)){
      handleError("Adresse e-mail invalide !!")
  }
    else {
      axios.post(`${baseUrl}/contact/add`, contactMessage).then(() => {
        handleSuccess("Message transmis avec succès");
        setNom(""); setEmail(""); setPhone(""); setMessage("")
      }).catch((err) => { console.log(err); handleError('Problème de communication avec le serveur') })
    }
  }

  return (
    <section className="contact spad whiteColor">
      <div className={`error-message ${showClassC}`}>

        <div className="close-button" onClick={() => { setErrorC(null); setShowClassC('') }}>
          X
        </div>
        <div className="message-content">{errorC}</div>
      </div>
      <div className={`success-message ${successClassC}`}>

        <div className="close-buttonSuccess" onClick={() => { setSuccessC(null); setSuccessClassC('') }}>
          X
        </div>
        <div className="message-contentSuccess">{successC}</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__content">
              <div className="contact__address">
                <h5>INFORMATIONS DE CONTACT</h5>
                <ul>
                  <li>
                    <h6><i className="fa fa-map-marker-alt me-3"></i> Adresse</h6>
                    <p>Cité Lemrazguia 2020, Sidi Thabet</p>
                  </li>
                  <li>
                    <h6><i className="fa fa-phone-alt me-3"></i> Téléphone</h6>
                    <p><span>71 553 010</span><span>92 567 080</span></p>
                  </li>
                  <li>
                    <h6><i className="fa fa-headphones-alt me-3"></i> Service commercial</h6>
                    <p>msasanteanimale@gmail.com</p>
                  </li>
                </ul>
              </div>
              <div className="contact__form">
                <h5>ENVOYER UN MESSAGE</h5>
                <form >
                  <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                  <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="number" placeholder="Téléphone / mobile" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  <button className="site-btn" onClick={(event) => {hundleSubmit(event)}}>Envoyer</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="contact__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12760.096831132932!2d10.042051076889049!3d36.913685594639674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2d3f1b13cfd6f%3A0x124ec02c1e34a307!2sMSA%20Sant%C3%A9%20Animale!5e0!3m2!1sen!2sbd!4v1716738489897!5m2!1sen!2sbd" height="780" style={{ border: 0, outline: 'none' }} allowFullScreen="" title="Google Maps Embed"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
