import React from 'react';
import Image from 'next/image';
import ReviewWidget from '@/components/ReviewWidget';

export const metadata = {
  title: 'Our Reviews | Tom Sutton Heating',
  description: 'Read what our customers across Hampshire and Dorset have to say about our professional heating and plumbing services.',
  referrer: 'no-referrer',
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Premium Hero Section */}
      <section className="bg-[#0d1b42] pt-32 pb-40 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-[-100px] w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <span className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-6 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Real Customer Feedback
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Don't Just Take Our Word For It
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto">
            We've built our 30-year reputation on trust, premium workmanship, and absolute reliability. Read verified reviews from homeowners across Hampshire and Dorset.
          </p>
        </div>
      </section>

      {/* Main Layout: 3 Columns on Desktop */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[95rem] mx-auto -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          
          {/* LEFT COLUMN: Trust Badges (Span 3/12) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
            
            {/* Google Rating Summary Card (Clickable External Link) */}
            <a 
              href="https://www.google.com/maps?cid=8226595044909973442"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(13,27,66,0.06)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(13,27,66,0.12)] transition-all duration-500 relative overflow-hidden group flex flex-col items-center justify-center min-h-[160px] cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/30 transition-colors duration-500 pointer-events-none"></div>
              
              <div className="relative w-[85%] h-[80px] mb-2 transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="https://i.postimg.cc/0NcSTm6n/Google-Review-Emblem.png" 
                  alt="Google Review Emblem" 
                  fill 
                  className="object-contain" 
                />
              </div>

              {/* Enhanced 220+ Volume Metric */}
              <div className="flex flex-col items-center relative z-10 text-center">
                <span className="text-gray-500 font-semibold text-[0.95rem] transition-colors duration-300">
                  Based on <strong className="text-[#0d1b42] group-hover:text-amber-500 transition-colors duration-300 font-black underline decoration-blue-500/30 group-hover:decoration-amber-500/40 decoration-2 underline-offset-2">220+ reviews</strong>
                </span>
              </div>
            </a>

            {/* Worcester Bosch Card */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(13,27,66,0.06)] border border-gray-100 flex items-center justify-center hover:-translate-y-1 transition-transform min-h-[140px]">
              <div className="relative w-full h-[80px]">
                <Image 
                  src="https://i.postimg.cc/43bPmmYw/Worcester-768x219.webp" 
                  alt="Worcester Bosch Accredited Installer" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Expert Trades Card */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(13,27,66,0.06)] border border-gray-100 flex items-center justify-center hover:-translate-y-1 transition-transform bg-gradient-to-br from-white to-sky-50/50 min-h-[140px]">
              <div className="relative w-[85%] h-[80px]">
                <Image 
                  src="https://i.postimg.cc/05ttYMcm/Verified-Expert-Trades.png" 
                  alt="Verified by Expert Trades" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: Live Reviews Widget (Span 6/12) */}
          <div className="lg:col-span-8 xl:col-span-6">
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_60px_rgba(13,27,66,0.08)] border border-gray-100">
              
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0d1b42]">Live Customer Reviews</h2>
                  <p className="text-gray-500 font-medium mt-2">Directly synced from our verified Google Business profile.</p>
                </div>
                
                {/* SVG Google Star Equivalent */}
                <div className="w-14 h-14 bg-amber-50 rounded-full hidden sm:flex items-center justify-center shadow-inner flex-shrink-0 ml-4">
                  <svg className="w-7 h-7 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
              
              <div className="w-full flex-1 flex flex-col pb-2">
                {/* Primary Slider Map (Standard Direction) */}
                <div className="w-full">
                  <ReviewWidget />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Checkatrade Banner (Span 3/12) */}
          <div className="lg:col-span-12 xl:col-span-3 flex justify-center xl:justify-end items-stretch mt-8 lg:mt-0 lg:pt-0">
            <a 
              href="https://www.checkatrade.com/trades/slenergytomsuttonheating"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-[50%] lg:w-[60%] xl:w-full max-w-sm hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
            >
              <Image 
                src="https://i.postimg.cc/XJLsDp3X/Tom-Sutton-Heating.png" 
                alt="Proud Members of Checkatrade" 
                width={600}
                height={1400}
                className="w-full h-auto rounded-[2.5rem] shadow-[0_20px_60px_rgba(13,27,66,0.1)] hover:shadow-[0_20px_60px_rgba(13,27,66,0.18)] transition-shadow duration-500 border border-gray-100" 
              />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
