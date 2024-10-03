import React from 'react'
import './HomeHero.scss'

const HomeHero = () => {

    const marqueeText = ". ݁₊ ⊹ . ݁˖ . ݁Welcome to my website. ݁₊ ⊹ . ݁˖ . ݁ I love using my brain to solve creative problems. ݁₊ ⊹ . ݁˖ . ݁and getting to use my skills to work on projects I love";
    return (
    <main className='homepage'>
        <div className='homepage__marquee-container'>
            <p className='homepage__marquee'>
            {[...Array(4)].map((_, index) => (
                <span key={index} className='homepage__marquee-item'>{marqueeText}</span>
            ))}
            </p>
        </div>
    </main>
    )
}

export default HomeHero