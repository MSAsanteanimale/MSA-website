import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function DropDown({ suggestions, setSideBarOpen }) {
    const navigate = useNavigate()
    return (
        <ul className="dropdown-list">
            {suggestions.slice(0, 6).map((suggestion, index) => (
                <li key={index} className="dropdown-item" onClick={() => {navigate(`/product/${suggestion.title}/${suggestion.id}`); setSideBarOpen(false)}}>
                    <img src={suggestion.srcSP} alt={suggestion.title} />
                    {suggestion.title}
                </li>
            ))}
            {suggestions.length === 0 &&
                (<li className="dropdown-item">
                   Aucun article trouvé !!
                </li>)}
        </ul>
    );
}

export default DropDown;
