import happyImage from '../../img/happy.png'
import React, { useEffect } from 'react';

const Success = () => {
    const containerStyle = {
        textAlign: 'center',
        marginTop: '50px',
    };

    const headingStyle = {
        fontSize: '2em',
        color: '#1ca81c',
        marginTop: '50px',
    };

    const messageStyle = {
        fontSize: '1.2em',
        marginBottom: '20px',
    };


    const detailsTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '70vh', overflow: 'hidden' }}>
            <section className="product-details spad whiteColor">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product__details__text" style={{ ...containerStyle, ...detailsTextStyle }}>
                                <img src={happyImage} alt="" style={{ width: '171px', height: '120px' }} />
                                <h3 style={headingStyle}>
                                    Commande passée avec succès
                                </h3>
                                <p style={messageStyle}>Nous vous appellerons pour confirmer votre commande.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Success;
