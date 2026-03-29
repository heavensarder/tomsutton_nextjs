'use client';
import React, { useRef, useState, useEffect } from 'react';

export default function InteractiveSlider({ children }: { children: React.ReactNode }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Seamless Infinite Auto-Scroll Logic
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const slider = sliderRef.current;
    
    const renderLoop = (time: number) => {
      const isDesktop = window.innerWidth >= 1024;
      if (slider && !isPaused && !isDown && isDesktop) {
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
  }, [isPaused, isDown]);

  // SMART Wheel Translation (Strictly releases Vertical Scroll after 1 cycle)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let hasReachedEnd = false;

    const handleWheel = (e: WheelEvent) => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; 
      
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      
      if (e.deltaY > 0 && slider.scrollLeft >= maxScrollLeft - 1) {
        hasReachedEnd = true;
        return; 
      }
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

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };
  const onMouseLeave = () => { setIsDown(false); setIsPaused(false); };
  const onMouseUp = () => setIsDown(false);
  const onMouseEnter = () => setIsPaused(true);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Touch handlers for tablets
  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setIsDown(true);
    if (!sliderRef.current) return;
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };
  const onTouchEnd = () => {
    setIsDown(false);
    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 2000);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDown || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <div 
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      className="responsive-service-track hide-scrollbar cursor-grab active:cursor-grabbing w-full px-4 sm:px-6 lg:px-0"
    >
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Mobile Grid Mode (Single Column) */
        @media (max-width: 639px) {
          .responsive-service-track {
            display: grid !important;
            grid-template-columns: 1fr;
            overflow-x: hidden !important;
            gap: 2.5rem;
            justify-items: center;
          }
        }
        
        /* Tablet Grid Mode (Two Columns) */
        @media (min-width: 640px) and (max-width: 1023px) {
          .responsive-service-track {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            overflow-x: hidden !important;
            gap: 1.5rem;
            justify-items: center;
          }
        }
        
        /* Desktop Interactive Slider Mode (Horizontal Track) */
        @media (min-width: 1024px) {
          .responsive-service-track {
            display: flex !important;
            gap: 2rem;
            overflow-x: auto;
            scroll-behavior: auto;
          }
          .responsive-service-track > div {
             min-width: 400px;
          }
        }
      `}} />
      {children}
    </div>
  );
}
