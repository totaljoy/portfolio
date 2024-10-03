import './HomeHero.scss'
import React, { useEffect, useRef } from 'react'

const HomeHero = () => {

    const marqueeText = ". ݁₊ ⊹ . ݁˖ . ݁Welcome to my website. ݁₊ ⊹ . ݁˖ . ݁ I love using my brain to solve creative problems. ݁₊ ⊹ . ݁˖ . ݁and getting to use my skills to work on projects I love";
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (marquee) {
          const marqueeWidth = marquee.offsetWidth;
          const animationDuration = marqueeWidth / 50; // Adjust 50 to change speed
          marquee.style.animationDuration = `${animationDuration}s`;
        }
      }, []);

    return (
    <main className='homepage'>
        <div className='homepage__marquee-container'>
            <div className='homepage__marquee' ref={marqueeRef}>
                <span className='homepage__marquee-content'>{marqueeText}</span>
                <span className='homepage__marquee-content'>{marqueeText}</span>
            </div>
        </div>
    </main>
    )
}

export default HomeHero