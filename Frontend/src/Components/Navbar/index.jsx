import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../img/logo.png'

const Navbar = ({ setSelectedCategories, setIsLoading }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;
  const msaCart = JSON.parse(localStorage.getItem("MSAcart")) || [];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbarShadow navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5 ${isScrolled ? 'shadow-sm' : ''}`} style={{ top: isScrolled ? '0px' : '-100px' }}>
      <a className="navbar-brand d-flex align-items-center" onClick={() => { navigate("/") }}>
        <h2 className="m-0 text-primary"><img className="img-fluid me-2" src={logo} alt="" style={{ width: '205px', height: '45px' }}
        /></h2>
      </a>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={() => setOpenNav(!openNav)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${openNav ? 'show' : 'hide'}`} id="navbarCollapse">
        <div className="navbar-nav ms-auto py-4 py-lg-0">
          <a className={`nav-item nav-link ${currentPath === '/' ? 'active' : ''}`} onClick={() => { 
             setIsLoading(true);
             setTimeout(() => {
                 setIsLoading(false);
             }, 1300);
             navigate("/"); setOpenNav(false); setSelectedCategories([]) }}> Accueil </a>

          <a className={`nav-item nav-link ${currentPath === '/boutique' ? 'active' : ''}`} onClick={() => { 
             setIsLoading(true);
             setTimeout(() => {
                 setIsLoading(false);
             }, 1300);
             navigate("/boutique"); setOpenNav(false) }}>Boutique</a>
          <a className={`nav-item nav-link ${currentPath === '/contact' ? 'active' : ''}`} onClick={() => { 
             setIsLoading(true);
             setTimeout(() => {
                 setIsLoading(false);
             }, 1300);
             navigate("/contact"); setOpenNav(false); setSelectedCategories([]) }}>Contact</a>
          <a className="nav-item nav-link" onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 1300);
            navigate("/boutique"); setOpenNav(false); setSelectedCategories([
              "compléments alimentaires canine",
              "pansement",
              "contention canine",
              "sondes urinaires",
              "protection canine",
              "prélèvements et examens",
              "divers canine"
            ])
          }}>Animaux de compagnie</a>
        </div>
        <div className="h-100 d-lg-inline-flex align-items-center iconDiv">
          <a className="btn btn-square rounded-circle bg-light text-primary me-2 position-relative" onClick={() => { navigate("/panier"); setOpenNav(false) }}>
            <i className="fas fa-shopping-bag"></i>
            {msaCart.length !== 0 && <span className="custom-badge">{msaCart.length}</span>}
          </a>
          <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="https://www.facebook.com/profile.php?id=100042411583522&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" onClick={() => { setOpenNav(false) }}><i
            className="fab fa-facebook-f"></i></a>

          <a className="btn btn-square rounded-circle bg-light text-primary me-0" ><i
            className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
