import React from 'react';
import TarotCard from './TarotCard';

function TarotReading() {
    return (
    <div className="cardContainer">
        <div className="tarot-card-container card-1">
            <TarotCard />
        </div>
        <div className="tarot-card-container card-2">
            <TarotCard />
        </div>
        <div className="tarot-card-container card-3">
            <TarotCard />
        </div>
        <div className="tarot-card-container card-4">
            <TarotCard />
        </div>
        <div className="tarot-card-container card-5">
            <TarotCard />
        </div>
    </div>   
    );
}

export default TarotReading;
