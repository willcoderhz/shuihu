import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import CardBack from './cardBack';

function TarotCard({ onClick }) {
    const [flipped, setFlipped] = useState(false);
    const [showAnalysis, setShowAnalysis] = useState(false);
    
    const handleBackClick = () => {
        setShowAnalysis(true); // Show analysis window when back is clicked
    };

    const closeAnalysis = () => {
        setShowAnalysis(false); // Close the analysis window
    };

    const handleCardClick = () => {
        setFlipped(!flipped);
    };


    // 使用 useEffect 监听动画结束事件
    useEffect(() => {
        const cards = document.querySelectorAll('.tarot-card');
        cards.forEach(card => {
            // 监听每张卡片的动画结束事件
            card.addEventListener('animationend', () => {
                // 在动画结束时移除动画样式
                card.style.animation = 'none';
                card.style.opacity = '1';
            });
        });
    }, []); // 空依赖数组，确保只在组件挂载时执行一次

    return (
        <div className="tarot-card-wrapper">
            <div className={`tarot-card-container ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                <div className="tarot-card">
                    {/* Front of the card */}
                    <div className="card-front">
                        {/* Front content (e.g., placeholder image or text) */}
                    </div>

                    {/* Back of the card */}
                    <CardBack onClick={handleBackClick} />
                </div>
            </div>

            {/* Modal to display card analysis */}
            {showAnalysis && (
                <div className="analysis-modal">
                    <div className="modal-content">
                        <h3>Card Analysis</h3>
                        <p>This card represents deep insights into your current situation...</p>
                        <button onClick={closeAnalysis}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TarotCard;
