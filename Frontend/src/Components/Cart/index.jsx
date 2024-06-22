import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { addToMSAcart, getMSAcart, removeFromMSAcart, removeAllFromMSAcart } from '../../HelperFunctions/utility.js';

const Cart = ({toggle, setTogle}) => {
    const navigate = useNavigate()
    const [msaCart, setMsaCart] = useState(() => getMSAcart());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddToCart = (item) => {
        const updatedCart = addToMSAcart(item);
        setMsaCart(updatedCart);
        setTogle(!toggle);
    };

    const handleRemoveFromCart = (item) => {
        const updatedCart = removeFromMSAcart(item.id);
        setMsaCart(updatedCart);
        setTogle(!toggle);
    };

    const handleRemoveAllFromCart = (item) => {
        const updatedCart = removeAllFromMSAcart(item.id);
        setMsaCart(updatedCart);
        setTogle(!toggle);
    };

    let processedCart = [];
    msaCart.forEach(item => {
        let existingItem = processedCart.find(obj => obj.id === item.id);
        if (existingItem) {
            existingItem.quantité++;
        } else {
            processedCart.push({ id: item.id, title: item.title, srcSP: item.srcSP, quantité: 1 });
        }
    });

    processedCart.sort((a, b) => a.id - b.id);

    return (
        <section className="shop-cart spad whiteColor">
            <div className="container">
            {processedCart.length === 0 ? (
                    <div className="empty-cart-message">
                        <h4>Votre panier est vide !</h4>
                    </div>
                ) : (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shop__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Produit</th>
                                        <th>Quantité</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {processedCart.map(item => (
                                        <tr key={item.id}>
                                            <td className="cart__product__item">
                                                <img src={item.srcSP} alt={item.title} style={{ width: "90px", height: "68px" }} />
                                                <div className="cart__product__item__title">
                                                    <h6>{item.title}</h6>
                                                </div>
                                            </td>
                                            <td className="cart__quantity">
                                                <div className="pro-qty">
                                                    <span className="dec qtybtn" onClick={() => handleRemoveFromCart(item)}>-</span>
                                                    <input
                                                        type="text"
                                                        value={item.quantité}
                                                        style={{ outline: 'none' }}
                                                        readOnly
                                                    />
                                                    <span className="inc qtybtn" onClick={() => handleAddToCart(item)}>+</span>
                                                </div>
                                            </td>
                                            <td className="cart__close"><span className="icon_close" onClick={() => handleRemoveAllFromCart(item)}></span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>)}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="cart__btn">
                            <a onClick={()=>navigate('/boutique')}>Continuer vos achats</a>
                        </div>
                    </div>
                    {processedCart.length !== 0 ? (<div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="cart__btn update__btn">
                            <a onClick={()=>navigate('/checkout')}><span className="icon_loading"></span> Commander</a>
                        </div>
                    </div>) : <></>}
                </div>
            </div>
        </section>
    );
};

export default Cart;
