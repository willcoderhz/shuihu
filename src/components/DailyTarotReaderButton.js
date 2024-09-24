import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

function DailyTarotReaderButton({ onClick }) {
    return (
        <button onClick={onClick} className="daily-tarot-reader-button">
              <FontAwesomeIcon icon={faMoon} /> Daily Tarot Reader
        </button>
    );
}

export default DailyTarotReaderButton;