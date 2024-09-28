import React, { useState } from 'react';

const cards = [
    { name: "及时雨宋江", leafletImgUrl: `${process.env.PUBLIC_URL}/image/songjiang.jpg`, tarotReading: "Leadership\nCharisma\nProne to betrayal\nMixed fortune", destiny: "Mixed fortune" },
    { name: "豹子頭林冲", leafletImgUrl: `${process.env.PUBLIC_URL}/image/linchong.jpg`, tarotReading: "Courageous\nLoyal\nFaces misfortune\nStruggle ahead", destiny: "Bad luck" },
    { name: "玉麒麟卢俊义", leafletImgUrl: `${process.env.PUBLIC_URL}/image/lujunyi.jpg`, tarotReading: "Strength\nWealth\nDownfall\nTemporary success", destiny: "Temporary success" },
    { name: "双鞭呼延灼", leafletImgUrl: `${process.env.PUBLIC_URL}/image/huyanzhuo.jpg`, tarotReading: "Tactical genius\nStrong warrior\nTrapped by pride\nChallenging path", destiny: "Challenging" },
    { name: "九纹龙史进", leafletImgUrl: `${process.env.PUBLIC_URL}/image/shijing.jpg`, tarotReading: "Brave\nHonorable\nConflict\nHard-won success", destiny: "Struggle" },
    { name: "花和尚鲁智深", leafletImgUrl: `${process.env.PUBLIC_URL}/image/luzhisheng.jpg`, tarotReading: "Reckless\nPure-hearted\nUnexpected luck", destiny: "Very lucky" },
    { name: "浪里白条张顺", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhangshun.jpg`, tarotReading: "Adaptable\nCunning\nFortune in danger\nLucky escape", destiny: "Lucky escape" },
    { name: "母夜叉孙二娘", leafletImgUrl: `${process.env.PUBLIC_URL}/image/sunerniang.jpg`, tarotReading: "Strong-willed\nFierce\nConfrontation\nDangerous encounter", destiny: "Dangerous" },
    { name: "浪子燕青", leafletImgUrl: `${process.env.PUBLIC_URL}/image/yanqing.jpg`, tarotReading: "Charming\nIntelligent\nFate turns\nFragile luck", destiny: "Fragile luck" },
    { name: "混江龙李俊", leafletImgUrl: `${process.env.PUBLIC_URL}/image/lijun.jpg`, tarotReading: "Dominant\nConstant turmoil\nHard-earned fortune", destiny: "Hard-earned fortune" },
    { name: "美髯公朱仝", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhutong.jpg`, tarotReading: "Respected\nRighteous\nPersonal struggles\nBittersweet victory", destiny: "Bittersweet" },
    { name: "青面兽杨志", leafletImgUrl: `${process.env.PUBLIC_URL}/image/yangzhi.jpg`, tarotReading: "Fierce\nNoble\nLoses all\nMisfortune", destiny: "Bad luck" },
    { name: "插翅虎雷横", leafletImgUrl: `${process.env.PUBLIC_URL}/image/leiheng.jpg`, tarotReading: "Quick to action\nUnnecessary danger\nMixed blessing", destiny: "Mixed fortune" },
    { name: "谷上蚤时迁", leafletImgUrl: `${process.env.PUBLIC_URL}/image/shiqian.jpg`, tarotReading: "Clever\nAgile\nLiving on the edge\nLucky survival", destiny: "Lucky survival" },
    { name: "没羽箭张清", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhangqing.jpg`, tarotReading: "Sharpshooter\nUnbeatable\nBetrayal\nFated struggle", destiny: "Struggle" },
    { name: "一丈青扈三娘", leafletImgUrl: `${process.env.PUBLIC_URL}/image/husanniang.jpg`, tarotReading: "Powerful warrior\nLove and loyalty\nConflict\nLucky", destiny: "Conflict" },
    { name: "智多星吴用", leafletImgUrl: `${process.env.PUBLIC_URL}/image/wuyong.jpg`, tarotReading: "Strategist\nBrilliant plans\nOverconfidence\nDownfall\nIll-fated", destiny: "Ill-fated" },
    { name: "神机军师朱武", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhuwu.jpg`, tarotReading: "Master of deception\nDisaster\nTragic end", destiny: "Tragic end" },
    { name: "活阎罗阮小七", leafletImgUrl: `${process.env.PUBLIC_URL}/image/ruanxiaoqi.jpg`, tarotReading: "Fearless\nIndependent\nReckless\nTrouble ahead", destiny: "Danger" },
    { name: "双枪将董平", leafletImgUrl: `${process.env.PUBLIC_URL}/image/dongping.jpg`, tarotReading: "Skillful\nBold\nArrogance\nMixed fortune", destiny: "Mixed fortune" },
    { name: "神医安道全", leafletImgUrl: `${process.env.PUBLIC_URL}/image/andaoquan.jpg`, tarotReading: "Healer\nFortunate\nTragic", destiny: "Fortunate, tragic" },
    { name: "拼命三郎石秀", leafletImgUrl: `${process.env.PUBLIC_URL}/image/shixiu.jpg`, tarotReading: "Brave fighter\nAt odds with fate\nStruggle for justice", destiny: "Struggle" },
    { name: "没遮拦穆弘", leafletImgUrl: `${process.env.PUBLIC_URL}/image/muhong.jpg`, tarotReading: "Strong\nRelentless\nSetbacks\nMisfortune", destiny: "Misfortune" },
    { name: "大刀关胜", leafletImgUrl: `${process.env.PUBLIC_URL}/image/guansheng.jpg`, tarotReading: "Powerful\nRevered\nResponsibilities\nSuccess with hardship", destiny: "Hardship" },
    { name: "神行太保戴宗", leafletImgUrl: `${process.env.PUBLIC_URL}/image/daizong.jpg`, tarotReading: "Swift\nResourceful\nConstant danger\nFleeting fortune", destiny: "Fortunate, fleeting" },
    { name: "混世魔王樊瑞", leafletImgUrl: `${process.env.PUBLIC_URL}/image/fanrui.jpg`, tarotReading: "Rebellious\nFierce\nRage undone\nIll fortune", destiny: "Ill fortune" },
    { name: "急先锋索超", leafletImgUrl: `${process.env.PUBLIC_URL}/image/suochao.jpg`, tarotReading: "Bold\nImpetuous\nDangerous outcomes", destiny: "Dangerous" },
    { name: "入云龙公孙胜", leafletImgUrl: `${process.env.PUBLIC_URL}/image/gongsunsheng.jpg`, tarotReading: "Wise\nSpiritual\nFate calls\nPeace and turmoil", destiny: "Peace, turmoil" }
];


function CardBack() {
    const [randomCard] = useState(cards[Math.floor(Math.random() * cards.length)]); // Randomly select a card
    const [showReading, setShowReading] = useState(false);

    // Show reading on hover
    const handleMouseEnter = () => {
        setShowReading(true);
    };

    // Hide reading when hover ends
    const handleMouseLeave = () => {
        setShowReading(false);
    };

    return (
        <div 
            className="card-back" 
            style={{ 
                backgroundImage: `url(${randomCard.leafletImgUrl})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }} 

            onMouseEnter={handleMouseEnter} // Show tarot reading on hover
            onMouseLeave={handleMouseLeave} // Hide tarot reading when hover ends
        >
             {showReading && (
                <>
                <div 
                    className="tarot-reading" 
                    style={{ 
                        position: 'absolute', 
                        top: '-63px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        backgroundColor: 'rgba(255, 255, 255, 0.0)', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        fontFamily: 'Garamond, serif',
                        width: '200px',
                        fontSize: '24px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',  // Text color set to white
                        textShadow: '2px 2px 0 #8FA68F, -2px -2px 0 #8FA68F, 2px -2px 0 #8FA68F, -2px 2px 0 #8FA68F'  // Slightly deeper green border effect
                    }}
                    
                >
                    {randomCard.destiny}
                </div>
                <div 
                    className="tarot-reading" 
                    style={{ 
                        position: 'absolute', 
                        top: '420px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Slightly more opaque for better readability
                        padding: '15px',  // Increased padding for better spacing
                        borderRadius: '10px',  // Softer corners
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',  // Deeper shadow for a more polished effect
                        width: '220px',  // Slightly wider to give more breathing room
                        textAlign: 'center',
                        fontSize: '18px',  // Slightly larger font for readability
                        fontWeight: '500',  // Medium font weight for balance
                        border: '0px solid #8FA68F',  // Subtle green border to match the previous style
                        color: '#333',  // Dark text color for contrast and readability
                        whiteSpace: 'pre-line',
                        fontFamily: 'Garamond, serif',
                        fontSize: '23px',
                    }}
                >
                    {randomCard.tarotReading}
                </div>
                </>
            )}
        </div>

        
    );
}

export default CardBack;
