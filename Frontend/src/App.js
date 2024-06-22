import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import './lib/animate/animate.min.css'
import './lib/owlcarousel/assets/owl.carousel.min.css'
import './css/bootstrap.min.css'
import './css/style.css'
import 'animate.css';
import './Components/ProductDetails/SingleProduct.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Wrapper from './Components/Wrapper';
import ProductDetails from './Components/ProductDetails';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';

import { initializeMSAcart } from './HelperFunctions/utility.js';
import OrderPopUp from './Components/Cart/OrderPopUp.jsx';
import Cart from './Components/Cart/index.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';
import OverlayWrapper from './Components/OverlayWrapper/OverlayWrapper.jsx';
import Success from './Components/Checkout/Success.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [toggle, setTogle]= useState(false)
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    initializeMSAcart();
  }, []);

  //********************** Getting the banners and the products from the database ********************* */
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [banner, setBanner] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      axios.get(`${baseUrl}/banners`),
      axios.get(`${baseUrl}/products`)
    ])
    .then(([bannersResponse, productsResponse]) => {
      setBanner(bannersResponse.data.reverse());
      setProducts(productsResponse.data.reverse());
    })
    .finally(() => {
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
  }, []);
  
  return (
    <OverlayWrapper isLoading={isLoading}>
    <div className="App">
      <Wrapper sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <OrderPopUp showModal={showModal} setShowModal={setShowModal}/>
      <Navbar setSelectedCategories={setSelectedCategories} setIsLoading = {setIsLoading}/>
      <Routes>
        <Route path="/" element={<HomePage products={products} banner={banner} setShowModal={setShowModal}/>} />
        <Route path="/boutique" element={<Shop sideBarOpen = {sideBarOpen} setSideBarOpen = {setSideBarOpen} products={products} setShowModal={setShowModal} setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories}/>}/>
        <Route path="/product/:name/:id" element={<ProductDetails products={products} banner={banner}/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/panier" element={<Cart toggle = {toggle} setTogle = {setTogle}/>} />
        <Route path="/checkout" element={<Checkout setIsLoading={setIsLoading} toggle = {toggle} setTogle = {setTogle}/>} />
        <Route path="/commande-succès-page" element={ <Success />}/>
      </Routes>
      <Footer />
    </div>
    </OverlayWrapper>
  );
}

export default App;
