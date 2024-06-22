import React, { useState, useEffect } from 'react';
import { getMSAcart, setMSAcart } from '../../HelperFunctions/utility.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = ({ setIsLoading, toggle, setTogle }) => {
  const navigate = useNavigate()
  const [msaCart, setMsaCart] = useState(() => getMSAcart());
  let checkoutCart = [];
  msaCart.forEach(item => {
    let existingItem = checkoutCart.find(obj => obj.id === item.id);
    if (existingItem) {
      existingItem.quantité++;
    } else {
      checkoutCart.push({ id: item.id, title: item.title, srcSP: item.srcSP, quantité: 1 });
    }
  });
  checkoutCart.sort((a, b) => a.id - b.id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ********************************************* form states ******************************
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [gouvernorat, setGouvernorat] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  var order = {
    client_name: prenom + " " + nom,
    address: adresse + " - " + ville + " - " + gouvernorat,
    telephone: telephone,
    email: email,
    note: note,
    commande: JSON.stringify(checkoutCart),
    status: "en attente"
  }

  // ***************************************** Emptying the form*********************************
  const emptyForm = () => { setNom(""); setPrenom(""); setAdresse(""); setVille(""); setGouvernorat(""); setTelephone(""); setEmail(""); setNote(""); setTogle(!toggle) }

  //****************************************** Error handling ********************************************************** */
  const [error, setError] = useState('');
  const [showClass, setShowClass] = useState("");

  const handleError = (str) => {
    setError(str);
    setShowClass('show')
    setTimeout(() => {
      setError(null);
      setShowClass('')
    }, 5000);
  };

  //******************************************** API REQUEST ************************************************************* */
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const hundleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    if (checkoutCart.length === 0) { handleError('Le panier est vide !!'); setIsLoading(false); }
    else if (nom?.length && prenom?.length && adresse?.length && ville?.length && gouvernorat?.length && telephone?.length && email?.length) {
      axios.post(`${baseUrl}/orders/add`, order).then(() => { emptyForm(); setMSAcart([]); navigate("/commande-succès-page") }).catch((err) => { console.log(err); handleError('Problème de communication avec le serveur veuillez réessayer.') }).finally(() => {
        setIsLoading(false);
      });
    }
    else {
      handleError('Tous les champs avec * sont obligatoires.');
      setIsLoading(false);
    }
  }

  return (
    <section className="checkout spad whiteColor">
      <div className={`error-message ${showClass}`}>

        <div className="close-button" onClick={() => { setError(null); setShowClass('') }}>
          X
        </div>
        <div className="message-content">{error}</div>
      </div>
      <div className="container">
        <form action="#" className="checkout__form">
          <div className="row">
            <div className="col-lg-8">
              <h5>Détails de la commande</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>Nom <span>*</span></p>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>Prénom <span>*</span></p>
                    <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="checkout__form__input">
                    <p>Adresse <span>*</span></p>
                    <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                  </div>
                  <div className="checkout__form__input">
                    <p>Ville <span>*</span></p>
                    <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />
                  </div>
                  <div className="checkout__form__input">
                    <p>Gouvernorat <span>*</span></p>
                    <input type="text" value={gouvernorat} onChange={(e) => setGouvernorat(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>Téléphone <span>*</span></p>
                    <input type="number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="checkout__form__input">
                    <p>Email <span>*</span></p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="checkout__form__input">
                    <p>Remarques sur la commande <span>*</span></p>
                    <input type="text" placeholder="Remarque concernant votre commande" value={note} onChange={(e) => setNote(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="checkout__order">
                <h5>Votre commande</h5>
                <div className="checkout__order__product">
                  <ul>
                    <li>
                      <span className="top__text">Produit</span>
                      <span className="top__text__right">Quantité</span>
                    </li>

                    {checkoutCart.map((e, i) => <li key={i}>{e.title} <span>{e.quantité}</span></li>)}
                  </ul>
                </div>
                <div className="checkout__order__widget">
                </div>
                <button className="site-btn" onClick={(event) => { hundleSubmit(event) }}>Demander un devis</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
