'use client';
import React, { useRef, useState, useEffect } from 'react';

export default function InteractiveSlider({ children }: { children: React.ReactNode }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Seamless Infinite Auto-Scroll Logic RESTORED
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const slider = sliderRef.current;
    
    const renderLoop = (time: number) => {
      const isDesktop = window.innerWidth >= 1024;
      if (slider && !isHovered && !isDown && isDesktop) {
        const delta = time - lastTime;
        
        // Protect against massive delta spikes when tab is backgrounded
        if (delta < 50) {
          slider.scrollLeft += delta * 0.05; 
        }
        
        // Loop reset checkpoint
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(renderLoop);
    };
    
    animationId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDown]);

  // SMART Wheel Translation (Strictly releases Vertical Scroll after 1 cycle)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let hasReachedEnd = false;

    const handleWheel = (e: WheelEvent) => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; 
      
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      
      // If trailing down past the horizontal track limit, unlock scrolling
      if (e.deltaY > 0 && slider.scrollLeft >= maxScrollLeft - 1) {
        hasReachedEnd = true;
        return; 
      }
      // If trailing up above the horizontal track limit, unlock scrolling
      if (e.deltaY < 0 && slider.scrollLeft <= 1) {
        return; 
      }

      if (hasReachedEnd && e.deltaY < 0) hasReachedEnd = false;
      
      if (!hasReachedEnd) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
      }
    };
    
    slider.addEventListener('wheel', handleWheel, { passive: false });
    return () => slider.removeEventListener('wheel', handleWheel);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const onMouseLeave = () => { setIsDown(false); setIsHovered(false); };
  const onMouseUp = () => setIsDown(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="responsive-service-track hide-scrollbar cursor-grab active:cursor-grabbing w-full px-4 sm:px-6 lg:px-0"
    >
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Mobile / Tablet Grid Mode (Vertical Stack) */
        @media (max-width: 1023px) {
          .responsive-service-track {
            display: grid !important;
            grid-template-columns: 1fr;
            overflow-x: hidden !important;
            gap: 2.5rem;
            justify-items: center;
          }
        }
        
        /* Desktop Interactive Slider Mode (Horizontal Track) */
        @media (min-width: 1024px) {
          .responsive-service-track {
            display: flex !important;
            gap: 2rem;
            overflow-x: auto;
            scroll-behavior: auto; /* Required for JS manipulation */
          }
          .responsive-service-track > div {
             min-width: 400px; /* Force card widths mathematically for clean CSS infinite layout */
          }
        }
      `}} />
      {children}
    </div>
  );
}
