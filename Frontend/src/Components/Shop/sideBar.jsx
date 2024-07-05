import React, { useState } from 'react';
import './style.css'
import closeIcon from '../../img/close.png'
import DropDown from './DropDown';

function SideBar({ setSideBarOpen, sideBarOpen, setSelectedCategories, selectedCategories, toggle, setToggle, products, setCurrentPage }) {
    const [canine, setCanine] = useState(true);
    const [elevage, setElevage] = useState(false);
    const [chirurgie, setChirurgie] = useState(false);
    const [injection, setInjection] = useState(false);
    const [divers, setDivers] = useState(false);


    const handleCheckboxChange = (category) => {
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(category)) {
                return prevSelectedCategories.filter(item => item !== category);
            } else {
                return [...prevSelectedCategories, category];
            }
        });
    };
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const handleInputChange = (e) => {
        const query = e.target.value.toLocaleLowerCase();
        setSearchQuery(query);
        if (query) {
            setSuggestions(products.filter((e) => e.title.toLocaleLowerCase().includes(query) || e.subtitle.toLocaleLowerCase().includes(query)));
        } else {
            setSuggestions([]);
        }
    };


    return (
        <section className={`shop spad col-lg-4 col-md-4 col-sm-6 col-9 ${sideBarOpen ? 'sbShow' : 'sbHide'} phoneWidth`}>
            <div className="container " style={{ marginLeft: "5%" }}>
                <img src={closeIcon} alt="X" className='close-icon' onClick={() => setSideBarOpen(false)} />
                <div >
                    <div className="search-container">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Rechercher..."
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            className="search-button"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        {searchQuery && <DropDown suggestions={suggestions} setSideBarOpen={setSideBarOpen} />}
                    </div>
                    <div >
                        <div className="shop__sidebar">
                            <div className="sidebar__categories">
                                <div className="section-title">
                                    <h4>CATÉGORIES</h4>
                                </div>
                                <div className="categories__accordion">
                                    <div className="accordion">
                                        <div className="card">
                                            <div className={`card-heading ${canine ? 'active' : ''}`} onClick={() => setCanine(!canine)}>
                                                <a >Animaux de compagnie</a>
                                            </div>
                                            <div className={`collapse ${canine ? 'show' : 'hidden'}`}>
                                                <div className="card-body">

                                                    <div className="sidebar__color">
                                                        <div className="size__list color__list">
                                                            <label htmlFor="compléments">
                                                                compléments alimentaires
                                                                <input type="checkbox" id="compléments"
                                                                    checked={selectedCategories.includes('compléments alimentaires canine')}
                                                                    onChange={() => { handleCheckboxChange('compléments alimentaires canine'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="Pansement">
                                                                Pansement
                                                                <input type="checkbox" id="Pansement"
                                                                    checked={selectedCategories.includes('pansement')}
                                                                    onChange={() => { handleCheckboxChange('pansement'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="contention">
                                                                contention
                                                                <input type="checkbox" id="contention"
                                                                    checked={selectedCategories.includes('contention canine')}
                                                                    onChange={() => { handleCheckboxChange('contention canine'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="protection">
                                                                protection
                                                                <input type="checkbox" id="protection"
                                                                    checked={selectedCategories.includes('protection canine')}
                                                                    onChange={() => { handleCheckboxChange('protection canine'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="sondes">
                                                                sondes urinaires
                                                                <input type="checkbox" id="sondes"
                                                                    checked={selectedCategories.includes('sondes urinaires')}
                                                                    onChange={() => { handleCheckboxChange('sondes urinaires'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="prélèvements">
                                                                prélèvements et examens
                                                                <input type="checkbox" id="prélèvements"
                                                                    checked={selectedCategories.includes('prélèvements et examens')}
                                                                    onChange={() => { handleCheckboxChange('prélèvements et examens'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="diversc">
                                                                divers
                                                                <input type="checkbox" id="diversc"
                                                                    checked={selectedCategories.includes('divers canine')}
                                                                    onChange={() => { handleCheckboxChange('divers canine'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className={`card-heading ${elevage ? 'active' : ''}`} onClick={() => setElevage(!elevage)}>
                                                <a data-toggle="collapse" data-target="#collapseOne">Bétail et Petits Ruminants</a>
                                            </div>
                                            <div className={`collapse ${elevage ? 'show' : 'hidden'}`}>
                                                <div className="card-body">
                                                    <div className="sidebar__color">
                                                        <div className="size__list color__list">
                                                            <label htmlFor="contentione">
                                                                contention
                                                                <input type="checkbox" id="contentione"
                                                                    checked={selectedCategories.includes('contention elevage')}
                                                                    onChange={() => { handleCheckboxChange('contention elevage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="identification">
                                                                identification
                                                                <input type="checkbox" id="identification"
                                                                    checked={selectedCategories.includes('identification elevage')}
                                                                    onChange={() => { handleCheckboxChange('identification elevage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="protectione">
                                                                protection
                                                                <input type="checkbox" id="protectione"
                                                                    checked={selectedCategories.includes('protection elevage')}
                                                                    onChange={() => { handleCheckboxChange('protection elevage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="reproduction">
                                                                reproduction
                                                                <input type="checkbox" id="reproduction"
                                                                    checked={selectedCategories.includes('reproduction elevage')}
                                                                    onChange={() => { handleCheckboxChange('reproduction elevage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="traite">
                                                                traite
                                                                <input type="checkbox" id="traite"
                                                                    checked={selectedCategories.includes('traite')}
                                                                    onChange={() => { handleCheckboxChange('traite'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="vêlage">
                                                                vêlage
                                                                <input type="checkbox" id="vêlage"
                                                                    checked={selectedCategories.includes('vêlage')}
                                                                    onChange={() => { handleCheckboxChange('vêlage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="allaitement">
                                                                allaitement
                                                                <input type="checkbox" id="allaitement"
                                                                    checked={selectedCategories.includes('allaitement')}
                                                                    onChange={() => { handleCheckboxChange('allaitement'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="écornage">
                                                                écornage
                                                                <input type="checkbox" id="écornage"
                                                                    checked={selectedCategories.includes('écornage')}
                                                                    onChange={() => { handleCheckboxChange('écornage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="parage">
                                                                parage
                                                                <input type="checkbox" id="parage"
                                                                    checked={selectedCategories.includes('parage')}
                                                                    onChange={() => { handleCheckboxChange('parage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="tonte">
                                                                tonte
                                                                <input type="checkbox" id="tonte"
                                                                    checked={selectedCategories.includes('tonte')}
                                                                    onChange={() => { handleCheckboxChange('tonte'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="complémentsBetail">
                                                                compléments alimentaires
                                                                <input type="checkbox" id="complémentsBetail"
                                                                    checked={selectedCategories.includes('compléments alimentaires betail')}
                                                                    onChange={() => { handleCheckboxChange('compléments alimentaires betail'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="diverse">
                                                                divers
                                                                <input type="checkbox" id="diverse"
                                                                    checked={selectedCategories.includes('divers elevage')}
                                                                    onChange={() => { handleCheckboxChange('divers elevage'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className={`card-heading ${chirurgie ? 'active' : ''}`} onClick={() => setChirurgie(!chirurgie)}>
                                                <a data-toggle="collapse" data-target="#collapseTwo">Matériel de chirurgie</a>
                                            </div>
                                            <div className={`collapse ${chirurgie ? 'show' : 'hidden'}`}>
                                                <div className="card-body">
                                                    <div className="sidebar__color">
                                                        <div className="size__list color__list">
                                                            <label htmlFor="Pinces">
                                                                Pinces
                                                                <input type="checkbox" id="Pinces"
                                                                    checked={selectedCategories.includes('Pinces')}
                                                                    onChange={() => { handleCheckboxChange('Pinces'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="ciseaux">
                                                                ciseaux
                                                                <input type="checkbox" id="ciseaux"
                                                                    checked={selectedCategories.includes('ciseaux')}
                                                                    onChange={() => { handleCheckboxChange('ciseaux'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="suture">
                                                                aiguilles de suture
                                                                <input type="checkbox" id="suture"
                                                                    checked={selectedCategories.includes('aiguilles de suture')}
                                                                    onChange={() => { handleCheckboxChange('aiguilles de suture'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="diverschirurgie">
                                                                divers
                                                                <input type="checkbox" id="diverschirurgie"
                                                                    checked={selectedCategories.includes('divers chirurgie')}
                                                                    onChange={() => { handleCheckboxChange('divers chirurgie'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className={`card-heading ${injection ? 'active' : ''}`} onClick={() => setInjection(!injection)}>
                                                <a data-toggle="collapse" data-target="#collapseThree">Matériel d'injection</a>
                                            </div>
                                            <div className={`collapse ${injection ? 'show' : 'hidden'}`}>
                                                <div className="card-body">
                                                    <div className="sidebar__color">
                                                        <div className="size__list color__list">
                                                            <label htmlFor="seringues">
                                                                seringues
                                                                <input type="checkbox" id="seringues"
                                                                    checked={selectedCategories.includes('seringues')}
                                                                    onChange={() => { handleCheckboxChange('seringues'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="aiguilles">
                                                                aiguilles
                                                                <input type="checkbox" id="aiguilles"
                                                                    checked={selectedCategories.includes('aiguilles')}
                                                                    onChange={() => { handleCheckboxChange('aiguilles'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="pistolets">
                                                                pistolets
                                                                <input type="checkbox" id="pistolets"
                                                                    checked={selectedCategories.includes('pistolets')}
                                                                    onChange={() => { handleCheckboxChange('pistolets'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <label htmlFor="diversi">
                                                                divers
                                                                <input type="checkbox" id="diversi"
                                                                    checked={selectedCategories.includes('divers injection')}
                                                                    onChange={() => { handleCheckboxChange('divers injection'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className={`card-heading ${divers ? 'active' : ''}`} onClick={() => setDivers(!divers)}>
                                                <a data-toggle="collapse" data-target="#collapseThree">Divers</a>
                                            </div>
                                            <div className={`collapse ${divers ? 'show' : 'hidden'}`}>
                                                <div className="card-body">
                                                    <div className="sidebar__color">
                                                        <div className="size__list color__list">
                                                            <label htmlFor="Produits chimiques">
                                                                Produits chimiques
                                                                <input type="checkbox" id="Produits chimiques"
                                                                    checked={selectedCategories.includes('Produits chimiques')}
                                                                    onChange={() => { handleCheckboxChange('Produits chimiques'); setToggle(!toggle); setCurrentPage(1) }} />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideBar;