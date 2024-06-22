import React from 'react';
import { useNavigate } from "react-router-dom";

const OrderPopUp = ({ showModal, setShowModal }) => {
    const navigate = useNavigate()
    const msaCart = JSON.parse(localStorage.getItem("MSAcart")) || [];
    const product = msaCart.length === 0 ? {} : msaCart[msaCart.length - 1];
    const count = msaCart.reduce((acc, item) => item.id === product.id ? acc + 1 : acc, 0);

    return (
        <div className={`modal fade ${showModal ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered flex-centerPopUp" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div  className="spaceNextToButton">
                        <h6 className="modal-title flex-grow-1">✓ Produit ajouté au panier avec succès !</h6>
                        </div>
                        <button type="button" className="close" aria-label="Close" onClick={() => setShowModal(false)} >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {msaCart && <div className="modal-body row ">
                        <div className="col-md-6">
                            <img src={product.srcSP} alt={product.title} className="img-fluidPopUp" style= {{width: "410px"}}/>
                        </div>
                        <div className="col-md-6">
                            <div className="product-details" style={{ paddingTop: "0px" }}>
                                <p className="product-title">{product.title}</p>
                                <p> Quantité: {count}</p>
                                <p style={{ paddingTop: "10px", color: "red" }}>Il y a {msaCart.length} article dans votre panier.</p>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>
                                    Continuer mes achats
                                </button>
                                <button type="button" className="btn btn-primary" onClick={()=> {setShowModal(false); navigate("/panier")}}>
                                    Commander
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderPopUp;
