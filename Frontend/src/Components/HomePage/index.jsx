import React, { useEffect } from 'react';
import Banner from '../Banner';
import NewProducts from '../NewProducts';
import TopSales from '../TopSales';
import WhyUs from '../WhyUs';
import Partners from '../Partners';

const HomePage = ({products, banner, setShowModal, toggle}) => {
    useEffect(() => {
        if (sessionStorage.getItem('scrollToAbout') === 'true') {
            const aboutSection = document.getElementById('about-us-section');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
                sessionStorage.removeItem('scrollToAbout');
            }
        }
        if (sessionStorage.getItem('scrollToNovelty') === 'true') {
            const noveltySection = document.getElementById('course');
            if (noveltySection) {
                noveltySection.scrollIntoView({ behavior: 'smooth' });
                sessionStorage.removeItem('scrollToNovelty');
            }
        }
        if (sessionStorage.getItem('scrollToPartners') === 'true') {
            const partnersSection = document.getElementById('partners');
            if (partnersSection) {
                partnersSection.scrollIntoView({ behavior: 'smooth' });
                sessionStorage.removeItem('scrollToPartners');
            }
        }
    }, [toggle]);
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
