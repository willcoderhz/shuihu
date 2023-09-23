import React from 'react';

function HeroList({ heroes, onSelectHero }) {
    return (
        <div className='heronames'>
            {heroes.map(hero => {
                // 将名字分为绰号和名字
                const [nickname, name] = hero.name.split(' ');
                return (
                    <button key={hero.name} onClick={() => onSelectHero(hero)}>
                        {nickname} &nbsp; {name}
                    </button>
                );
            })}
        </div>
    );
}

export default HeroList;
