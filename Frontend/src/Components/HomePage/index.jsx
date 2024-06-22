import React from 'react';
import Banner from '../Banner';
import NewProducts from '../NewProducts';
import TopSales from '../TopSales';
import WhyUs from '../WhyUs';
import Partners from '../Partners';

const HomePage = ({products, banner, setShowModal}) => {
    return (
        <>
            <Banner banner={banner}/>
            <NewProducts products={products} setShowModal={setShowModal}/>
            <TopSales products={products} setShowModal={setShowModal}/>
            <WhyUs />
            <Partners />
        </>
    );
};

export default HomePage;
