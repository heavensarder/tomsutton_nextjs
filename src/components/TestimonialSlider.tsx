'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    title: "New boiler fitted",
    customer: "Customer in Christchurch December 2019",
    text: "We had to wait for our new boiler but it was well worth it, Ronan was helpful and knowledgeable and knew what we needed for our replacement boiler. The day of fitting was scheduled with my need to do the school run and the workmanship was great. The boiler fits the cupboard and works fantastically...."
  },
  {
    title: "New boiler fitted",
    customer: "Customer in Verwood April 2019",
    text: "He turned up on time, worked late didn't even stop for lunch. Very hard working and conscientious about keeping the house clean. Position of the boiler was perfect as it had to fit in a wall unit being fitted at a later date. Very technical and precise. Couldn't recommend enough."
  },
  {
    title: "Replacement combi boiler",
    customer: "Customer in Ringwood November 2019",
    text: "Overall very neat and tidy. From the initial visit to determine the scope of the work through to its completion the finished item was exactly what had been requested at the outset – down to the inclusion of the 13 year Manufacturer's Warranty."
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic targeting 6.5 second delay increments
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative min-h-[380px] bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col justify-center">
      {/* Render map for all testimonials stacked via absolute positioning. Animations triggered by conditional classes via state. */}
      {testimonials.map((t, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 px-8 py-10 sm:px-12 flex flex-col justify-center transition-all duration-700 ease-in-out ${idx === currentIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 -z-10 pointer-events-none'}`}
        >
          {/* Aesthetic Quote Mark background accent */}
          <div className="absolute top-6 right-8 text-[8rem] font-serif text-slate-100 leading-none select-none z-0 rotate-180 opacity-50">
            "
          </div>
          
          <div className="relative z-10">
            <h3 className="text-[1.2rem] sm:text-[1.35rem] font-bold text-slate-800 mb-2">{t.title}</h3>
            <p className="text-[#1d70b8] font-semibold text-[0.95rem] sm:text-base mb-6 tracking-wide">{t.customer}</p>
            <p className="text-slate-500 font-light text-[1.05rem] sm:text-[1.15rem] leading-[1.8]">
              {t.text}
            </p>
          </div>
        </div>
      ))}
      
      {/* Interactive Navigation Dots Track */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 z-20">
        {testimonials.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#1d70b8] scale-125' : 'bg-slate-200 hover:bg-slate-300'}`}
            aria-label={`Jump to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
