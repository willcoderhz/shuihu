
import React, { useState, useEffect } from 'react';

function HeroLeaflet({ hero, onClose }) {
    const [showDetail, setShowDetail] = useState(false);
    const [showPoem, setShowPoem] = useState(false);
    const [showButton, setShowButton] = useState(false); // 新增状态

    useEffect(() => {
        setShowDetail(false);
        setShowPoem(false);
        setShowButton(false); // 重置状态
    }, [hero]);

    useEffect(() => {
        if (showDetail) {
            const timerPoem = setTimeout(() => {
                setShowPoem(true);
            }, 150);
            const timerButton = setTimeout(() => {
                setShowButton(true); // 设置按钮状态
            }, 150);
            return () => {
                clearTimeout(timerPoem);
                clearTimeout(timerButton); // 清除定时器
            };
        }
    }, [showDetail]);

    if (!hero) return null;

    return (
        <div className={`heroleaf ${showDetail ? 'show-detail' : ''}`}>
            <h2>{hero.name}</h2>
            <img 
                src={hero.leafletImgUrl} 
                alt={hero.name} 
                onClick={() => setShowDetail(true)}
            />
            {showDetail && (
                <>
                    <div className={`poem ${showPoem ? 'visible' : ''}`}>
                        {hero.poem.split(',').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    <button className={`${showButton ? 'visible' : ''}`} onClick={() => { onClose(); setShowDetail(false); setShowPoem(false); setShowButton(false); }}>返回</button>
                </>
            )}
        </div>
    );
}



export default HeroLeaflet;
