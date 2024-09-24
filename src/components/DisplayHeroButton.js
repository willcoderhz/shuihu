import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

function DisplayHero({ onClick }) {
    return (
        <button onClick={onClick} className="display-hero-button">
              <FontAwesomeIcon icon={faSun} /> Shuihu Hero List
        </button>
    );
}

export default DisplayHero;