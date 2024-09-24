import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

function TarotCard({ onClick }) {
    const [flipped, setFlipped] = useState(false);

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
        <div className={`tarot-card-container ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="tarot-card">
                {/* Front of the card */}
                <div className="card-front">
                </div>
                {/* Back of the card */}
                <div className="card-back">
                    <h3>Your Tarot Reading</h3>
                    <p>This is where the real content of the card will be displayed.</p>
                </div>
            </div>
        </div>
    );
}

export default TarotCard;
