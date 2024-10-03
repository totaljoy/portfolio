import './HomeHero.scss'
import React, { useEffect, useRef, useState } from 'react'

const HomeHero = () => {

    const marqueeText = ". ݁₊ ⊹ . ݁˖ . ݁Welcome to my website. ݁₊ ⊹ . ݁˖ . ݁ I love using my brain to solve creative problems. ݁₊ ⊹ . ݁˖ . ݁and getting to use my skills to work on projects I love";
    const marqueeRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
      const marquee = marqueeRef.current;
      const container = containerRef.current;
      if (marquee && container) {
        const setMarqueeContent = () => {
          const containerWidth = container.offsetWidth;
          const contentWidth = marquee.children[0].offsetWidth;
          const repetitions = Math.ceil(containerWidth / contentWidth) + 1;
          marquee.innerHTML = Array(repetitions).fill(`<span class="homepage__marquee-content">${marqueeText}</span>`).join('');
          
          const speed = 100;
          const duration = (contentWidth * repetitions) / speed;
          marquee.style.setProperty('--marquee-duration', `${duration}s`);
        };
  
        setMarqueeContent();
        window.addEventListener('resize', setMarqueeContent);
        return () => window.removeEventListener('resize', setMarqueeContent);
      }
    }, []);

    return (
    <main className='homepage'>
        <div className='homepage__marquee-container'>
        <div className='homepage__marquee' ref={marqueeRef}>
          <span className='homepage__marquee-content'>{marqueeText}</span>
        </div>
        </div>
    </main>
    )
}

export default HomeHero