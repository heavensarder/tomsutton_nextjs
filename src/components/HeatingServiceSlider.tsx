"use client";

import React, { useEffect, useRef, useState } from 'react';

const heatingServices = [
  { 
    title: "Radiator installations", 
    desc: "Efficient modern radiators to keep your home perfectly warm.", 
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
  },
  { 
    title: "Thermostatic valve replacement", 
    desc: "Upgrade for precise, room-by-room central heating control.", 
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
  },
  { 
    title: "Cylinder repair & installations", 
    desc: "Reliable hot water storage solutions and fast repairs.", 
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" 
  },
  { 
    title: "Unvented cylinder installations", 
    desc: "High-pressure hot water systems for powerful showers.", 
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
  },
  { 
    title: "Heating system fault finding", 
    desc: "Expert diagnostics to quickly identify and fix issues.", 
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
  },
  { 
    title: "Heating system repair", 
    desc: "Fast, reliable repairs to get your system running smoothly.", 
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" 
  },
  { 
    title: "Heating system upgrades", 
    desc: "Modernise your heating for better efficiency and savings.", 
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
  },
  { 
    title: "Power flushing", 
    desc: "Deep clean your system to restore heat and performance.", 
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" 
  },
  { 
    title: "Pipe work repair", 
    desc: "Professional pipework modifications and leak repairs.", 
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
  }
];

export default function HeatingServiceSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Auto-scroll loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      // Only run auto-scroll if it's rendered as a flex row (desktop)
      const isDesktop = window.innerWidth >= 1024;
      
      if (isDesktop && scrollContainerRef.current && !isHovered && !isDragging) {
        // Delta time makes the speed consistent regardless of framerate
        const delta = time - lastTime;
        // Pixel step per millisecond (approx 60px per second)
        const step = 0.06 * delta; 
        
        scrollContainerRef.current.scrollLeft += step;
        
        // Exact 1-array width math for seamless loop
        // We rendered the array 3 times. If we scroll exactly 1 array width, we snap back seamlessly.
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const oneThird = scrollWidth / 3;
        
        if (scrollContainerRef.current.scrollLeft >= oneThird * 1.5) {
          scrollContainerRef.current.scrollLeft -= oneThird;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return;
    setIsDragging(true);
    startX.current = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollContainerRef.current?.scrollLeft || 0;
  };
  const handleMouseLeave = () => { setIsDragging(false); setIsHovered(false); };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || window.innerWidth < 1024) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // We duplicate the services 3 times total so manual dragging in either direction won't easily hit a wall
  const displayServices = [...heatingServices, ...heatingServices, ...heatingServices];

  return (
    <div className="w-full relative py-8 px-4 sm:px-6 lg:px-0 lg:max-w-none max-w-[1250px] mx-auto">
      {/* Fade Overlays only visible on desktop slider */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#f4f6f8] to-transparent z-10 pointer-events-none"></div>
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#f4f6f8] to-transparent z-10 pointer-events-none"></div>
      
      <div 
        ref={scrollContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full lg:flex lg:flex-row lg:overflow-x-auto no-scrollbar lg:py-6 lg:cursor-grab lg:active:cursor-grabbing select-none lg:pl-16 lg:pr-24"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {displayServices.map((item, i) => {
          const isDuplicate = i >= heatingServices.length;
          return (
            <div 
              key={i} 
              className={`flex-col items-start bg-white rounded-2xl p-5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100/60 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] hover:border-orange-200 transition-all duration-300 group lg:flex-shrink-0 lg:w-[320px] ${isDuplicate ? 'hidden lg:flex' : 'flex'}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff5e14]/10 to-[#ff8c42]/10 flex items-center justify-center shrink-0 mb-4 group-hover:from-[#ff5e14] group-hover:to-[#ff8c42] group-hover:shadow-lg group-hover:shadow-[#ff5e14]/30 transition-all duration-300">
                <svg className="w-6 h-6 text-[#ff5e14] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d={item.icon} />
                </svg>
              </div>
              
              <h3 className="font-extrabold text-slate-800 text-[1.1rem] mb-2 leading-snug group-hover:text-[#ff5e14] transition-colors">{item.title}</h3>
              <p className="font-medium text-slate-500 text-[0.95rem] leading-[1.6]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
