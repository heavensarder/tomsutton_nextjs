import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveSlider from '@/components/InteractiveSlider';

export default function Home() {
  return (
    <main className="flex-1 w-full bg-slate-50 relative overflow-x-hidden">
      {/* Hero Section - Matching New Design Pattern */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-[#0d1033] via-[#2d3266] to-[#8f96b8] pt-20 lg:pt-10 pb-24 lg:pb-20">

        {/* Background SVG Curve Effect across entire screen width */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-100 400 C300 400, 400 200, 700 200 L950 200 C1100 200, 1100 650, 1300 650 L1500 650" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="700" cy="200" r="7" fill="#ff5e14" />
            <circle cx="1065" cy="425" r="5" fill="#ff5e14" stroke="white" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear" x1="-100" y1="400" x2="1500" y2="650" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.5" stopColor="white" stopOpacity="0.8" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-16">

          {/* Left Content Area */}
          <div suppressHydrationWarning className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 sm:px-0 lg:pr-6 relative z-10">
            {/* Layered Titles matching reference layout */}
            <div className="flex flex-col space-y-2 mb-8 tracking-tight w-full items-center lg:items-start">
              {/* Boxed Text 1 - Gradient (No Shadow) */}
              <div className="bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] px-6 py-2 sm:py-3 rounded-2xl rounded-bl-sm inline-block w-fit max-w-full mb-2 relative z-20 border border-orange-400/50 text-center">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter block break-words">Expert Boiler</span>
              </div>
              {/* Boxed Text 2 - Dark transparent */}
              <div className="bg-[#0b0f24]/90 backdrop-blur-md px-6 py-2 sm:py-3 rounded-2xl inline-block w-fit max-w-full shadow-xl border border-white/10 relative z-10 -mt-4 sm:-mt-5 text-center">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter block break-words">Installations &</span>
              </div>
              {/* Floating Text 3 */}
              <div className="px-6 py-1 max-w-full text-center lg:text-left">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter drop-shadow-md block break-words">Repairs You Can</span>
              </div>
              <div className="px-6 py-1 max-w-full text-center lg:text-left">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter drop-shadow-md block break-words">Trust</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full mb-10 sm:pl-6 relative items-center lg:items-start justify-center lg:justify-start">
              {/* Small connecting line in the paragraph area matching design */}
              <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-[2px] bg-white/20"></div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-md font-medium text-center lg:text-left">
                The boiler installation and maintenance specialists! Keeping families warm with our expert boiler installations and repairs in New Milton, Christchurch, Highcliffe, Lymington, Brockenhurst and all over the New Forest.
              </p>
            </div>

            {/* Action Buttons Block - Strictly Horizontal Row */}
            <div className="mt-8 flex flex-row items-stretch justify-center w-[98%] sm:w-full max-w-[360px] sm:max-w-3xl mx-auto lg:mx-0 self-center lg:self-start relative z-30 shadow-xl rounded-[10px] sm:rounded-xl overflow-hidden font-bold">
              <Link href="/online-boiler-quote" className="bg-gradient-to-b from-[#3a82c9] to-[#255688] text-white px-1 sm:px-6 py-3 sm:py-4 flex-1 flex items-center justify-center text-center transition-colors hover:brightness-110">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold tracking-wide drop-shadow-md leading-tight">Instant Boiler Quote</span>
              </Link>
              <Link href="/boiler-breakdowns" className="bg-gradient-to-b from-[#e87950] to-[#b85b37] text-white px-1 sm:px-6 py-3 sm:py-4 flex-1 flex items-center justify-center text-center transition-colors border-l border-white/20 hover:brightness-110">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold tracking-wide drop-shadow-md leading-tight">Boiler Repairs</span>
              </Link>
              <Link href="/boiler-servicing" className="bg-gradient-to-b from-[#5cc9e6] to-[#429cb5] text-white px-1 sm:px-6 py-3 sm:py-4 flex-[1.2] flex items-center justify-center text-center transition-colors border-l border-white/20 hover:brightness-110">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold tracking-wide drop-shadow-md leading-tight">Boiler Servicing & Care Plans</span>
              </Link>
            </div>

          </div>

          {/* Right Image & Floating Glass Elements Area */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 h-[450px] sm:h-[550px] lg:h-[650px] flex justify-center lg:justify-end z-20">

            {/* Local wireframe SVG just for the image block */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block z-30">
              {/* Sharp 90-degree lines connecting the floating tags, mimicking design */}
              <svg className="absolute w-[600px] h-[600px] -left-[150px] top-[50px]" fill="none">
                <path d="M 50 250 L 150 250 L 150 450 L 250 450" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="250" cy="450" r="4" fill="#ff5e14" />
              </svg>
            </div>

            {/* Main Image Mask/Shape - sharp edges & rounded corners combination */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] h-full z-10 rounded-[2rem] sm:rounded-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/10 group">
              <Image
                src="https://i.postimg.cc/W3dP0VTH/hero-image.webp"
                alt="Tom Sutton Heating Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f24]/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Tag Top Left */}
            <div className="absolute top-[5%] sm:top-[10%] left-[-2%] sm:left-[-5%] lg:left-[-10%] z-40 animate-bounce-slow">
              <div className="bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/20 border border-orange-400/50">
                A-Rated Boilers
              </div>
            </div>

            {/* Floating Tag Bottom Left */}
            <div className="absolute bottom-[25%] sm:bottom-[35%] left-0 sm:left-[5%] lg:left-[5%] z-40">
              <div className="bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/20 border border-orange-400/50">
                Gas Safe
              </div>
            </div>

            {/* Floating Review Card (Checkatrade) */}
            <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="absolute top-[35%] sm:top-[40%] right-[-2%] sm:right-[-10%] lg:right-[-5%] z-50 bg-[#060818] rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10 w-44 sm:w-56 transition-transform duration-500 hover:-translate-y-2 group block">
              <div className="flex gap-1 mb-2 justify-center">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#ff5e14]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <h4 className="text-white font-extrabold text-lg sm:text-xl leading-tight mb-1 text-center tracking-tight group-hover:text-blue-400 transition-colors">Checkatrade</h4>
              <p className="text-gray-400 text-[10px] sm:text-xs text-center font-medium">9.94/10 (360+ Reviews)</p>
            </a>

            {/* Play Button intentionally removed */}

          </div>

        </div>
      </section>

      {/* Unified Premium Trust & Partners Section */}
      <section className="pt-10 pb-20 relative overflow-hidden bg-slate-50 border-y border-gray-100">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute -top-[300px] right-[-100px] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-[200px] left-[-100px] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Top Logo Slider */}
          <div className="relative overflow-hidden w-full mb-12 sm:mb-16">
            {/* Gradient Masks matched to bg-slate-50 */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            <style dangerouslySetInnerHTML={{
              __html: `
              @keyframes infiniteScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-infinite-scroll {
                animation: infiniteScroll 45s linear infinite;
                width: max-content;
              }
              .animate-infinite-scroll:hover {
                animation-play-state: paused;
              }
            `}} />

            <div className="flex items-center gap-12 sm:gap-20 md:gap-28 animate-infinite-scroll pl-12 sm:pl-20 md:pl-28 py-2">
              {[0, 1].map((half) => (
                <React.Fragment key={half}>
                  {[0, 1, 2].map((group) => (
                    <React.Fragment key={`${half}-${group}`}>
                      <Image src="https://i.postimg.cc/d3k7Dghd/logo_1.webp" alt="Brand Partner 1" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                      <Image src="https://i.postimg.cc/Fzdf1wY3/logo_2.webp" alt="Brand Partner 2" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                      <Image src="https://i.postimg.cc/NF9yLZKr/logo_3.webp" alt="Brand Partner 3" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                      <Image src="https://i.postimg.cc/tJZ178sF/logo_4.webp" alt="Brand Partner 4" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

            {/* Checkatrade Premium Card */}
            <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="group relative bg-white rounded-3xl p-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0bdacb]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-white rounded-[1.4rem] h-full p-8 lg:p-10 flex flex-col items-center justify-between relative z-10 border border-gray-100 group-hover:border-[#0bdacb]/40 transition-colors">
                <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#0bdacb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="flex-1 flex items-center justify-center w-full mb-8 pt-6 relative group-hover:scale-105 transition-transform duration-500">
                  <Image src="https://i.postimg.cc/3rfJdKQY/checktrade.webp" alt="Checkatrade" width={240} height={100} className="object-contain max-h-12 sm:max-h-16 w-auto" />
                </div>
                <div className="w-full text-center border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-center gap-1.5 text-[#0bdacb] mb-3">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="font-extrabold text-gray-900 text-xl tracking-tight">9.94/10 <span className="text-gray-400 font-semibold text-sm ml-1">(360+ Reviews)</span></span>
                </div>
              </div>
            </a>

            {/* Google Premium Card */}
            <a href="https://www.google.com/maps/place/Tom+Sutton+Heating/@50.7572451,-1.6704168,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487383d967293ef5:0x722abc9b62d8ffc2!8m2!3d50.7572451!4d-1.6704168!16s%2Fg%2F11b5pjq4ng?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="group relative bg-white rounded-3xl p-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-white rounded-[1.4rem] h-full p-8 lg:p-10 flex flex-col items-center justify-between relative z-10 border border-gray-100 group-hover:border-[#4285F4]/40 transition-colors">
                <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center w-full mb-8 pt-6">
                  <div className="flex items-center text-[3.5rem] lg:text-[4rem] font-bold tracking-tighter leading-none mb-1 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                  </div>
                </div>
                <div className="w-full text-center border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-center gap-1.5 text-[#FBBC05] mb-3">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="font-extrabold text-gray-900 text-xl tracking-tight">5.0/5 <span className="text-gray-400 font-semibold text-sm ml-1">(Top Rated)</span></span>
                </div>
              </div>
            </a>

            {/* Facebook Premium Card */}
            <a href="https://www.facebook.com/tomsuttonheating/reviews" target="_blank" rel="noopener noreferrer" className="group relative bg-white rounded-3xl p-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-white rounded-[1.4rem] h-full p-8 lg:p-10 flex flex-col items-center justify-between relative z-10 border border-gray-100 group-hover:border-[#1877F2]/40 transition-colors">
                <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center w-full mb-8 pt-6">
                  {/* Pristine Facebook Layout (Zero blurry images) */}
                  <div className="flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-500">
                    <svg className="w-14 h-14 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    <span className="text-[2.75rem] font-bold text-[#1877F2] tracking-tighter mt-1">facebook</span>
                  </div>
                </div>
                <div className="w-full text-center border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-center gap-1.5 text-[#1877F2] mb-3">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="font-extrabold text-gray-900 text-xl tracking-tight">5.0/5 <span className="text-gray-400 font-semibold text-sm ml-1">(Excellent)</span></span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Renewables Feature Section */}
      <section className="bg-slate-50 relative overflow-hidden flex flex-col lg:flex-row items-stretch border-y border-gray-100">

        {/* Image Side (Left) - Full Edge Bleed */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] xl:min-h-[700px] overflow-hidden group">
          <Image
            src="https://i.postimg.cc/wTQkkY7r/renwable-energy.jpg"
            alt="Modern solar panels on a premium residential roof"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/20 hidden lg:block z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent lg:hidden z-10 pointer-events-none"></div>
        </div>

        {/* Content Side (Right) */}
        <div className="w-full lg:w-1/2 flex items-center bg-slate-50 relative z-20 py-16 sm:py-20 lg:py-24">
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[800px] mx-auto lg:mx-0 lg:ml-0 lg:mr-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 w-max mb-6 lg:mb-8 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              <span className="text-xs font-extrabold tracking-widest uppercase">Eco-Friendly Future</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-[#0d1033] tracking-tighter leading-[1.12] mb-6">
              Renewable Energy Technology & Air Source Heat Pumps
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
              Renewable technology in recent years has become a massive market globally. With more awareness of the environmental changes, rising fuel costs, and a need to move away from fossil fuels, Tom Sutton Heating now provide alternative heating and hot water solutions.
            </p>

            <Link href="/renewable-technology" className="group/btn relative w-max flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-[#ff6a00] text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-[#e65c00] transition-all shadow-[0_10px_20px_-10px_rgba(255,106,0,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(255,106,0,0.6)] hover:-translate-y-0.5 overflow-hidden">
              <span className="relative z-10">Learn more</span>
              <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>
        </div>

      </section>

      {/* Boiler Installation CTA */}
      <section className="py-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1021] rounded-[2rem] p-8 sm:p-12 md:p-14 shadow-2xl flex flex-col lg:flex-row items-stretch justify-start relative overflow-hidden group">
            {/* Left side glowing gradient */}
            <div className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-[#00e5cc] opacity-20 blur-[100px] pointer-events-none z-0"></div>

            {/* Left Column (Text & Button) */}
            <div className="w-full lg:w-[50%] relative z-10 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold mb-8 leading-[1.05] tracking-tight">
                <span className="text-[#00e5cc]">Need a new boiler?</span><br className="hidden lg:block" />
                <span className="text-white">No problem! We can <br className="hidden lg:block" />help!</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-10 lg:mb-12">
                {[
                  "Express Boiler Installation",
                  "Next Day Boiler Install",
                  "Finance Options Available",
                  "13 Year Warranty on Selected Boilers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-bold text-white text-[0.95rem] tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              {/* Button moved to the left side below checkmarks */}
              <div className="flex justify-start relative z-10 w-full mt-4 sm:mt-0">
                <Link href="/online-boiler-quote" className="group/quote w-full sm:w-max flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 bg-[#ff6a00] text-white rounded-xl font-bold text-[16px] sm:text-lg hover:bg-[#e65c00] transition-all shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] hover:-translate-y-1">
                  <span className="text-center whitespace-nowrap">Get an online quote today</span>
                  <svg className="w-5 h-5 shrink-0 group-hover/quote:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right Column (Vertical Image) */}
            <div className="w-full lg:w-[45%] lg:absolute lg:inset-y-6 lg:right-6 relative min-h-[350px] sm:min-h-[450px] lg:min-h-0 rounded-[1.5rem] overflow-hidden mt-10 lg:mt-0 shadow-2xl z-10 hidden sm:block border-4 border-[#121a36]">
              <Image
                src="https://i.postimg.cc/XNcGYZVS/boiler-installation.webp"
                alt="Boiler system installation"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-20 sm:py-32 bg-[#f8fafd] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d0bb]/30 to-transparent"></div>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 lg:mb-24">
            <span className="text-[#00d0bb] font-extrabold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Transparent Pricing</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-[#0d1033] tracking-tighter leading-tight mb-6">
              Our Most Popular Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">We offer straightforward, premium heating solutions tailored to any home. No hidden fees, just absolute highest-tier quality.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">

            {/* Package 1: Snug Home */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-8 relative z-10">
                <h3 className="text-[1.75rem] font-black mb-2 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0bb] to-teal-600">Snug Home</span>
                </h3>
                <div className="text-slate-500 font-bold text-[0.85rem] tracking-wider uppercase mb-6">Alpha Evoke</div>

                {/* Transparent Product Showcase Container */}
                <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,theme(colors.teal.50),transparent_70%)]">
                  <Image src="https://i.postimg.cc/G29jqr3c/Snug_Home.png" alt="Snug Home Package - Alpha Evoke" fill className="object-contain p-4 drop-shadow-[0_20px_25px_rgba(0,208,187,0.15)] transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-gray-500 font-bold text-lg">from</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#0d1033] tracking-tight">£1,900</span>
                </div>

                <Link href="/online-boiler-quote" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-center mb-10 transition-colors shadow-lg shadow-slate-900/20">Get a quote now</Link>

                <ul className="space-y-4 flex-1">
                  {[
                    "7-year warranty with upgrades available",
                    "Premium Choice of 2 outputs: 28kw, 33kw",
                    "Superb hot water delivery",
                    "High-quality components",
                    "Suitable for small to medium-sized homes",
                    "Magnaclean Magnetic filter included",
                    "Magnetic scale reducer included",
                    "Programmable room thermostat included"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600 text-[0.95rem] font-medium items-start">
                      <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#00d0bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Package 2: Snug Home Pro (PREMIUM CENTER) */}
            <div className="bg-[#0b1021] rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(255,106,0,0.3)] border border-[#1e274a] flex flex-col hover:-translate-y-2 transition-transform duration-500 scale-100 lg:scale-[1.05] z-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-[#ff6a00] text-white text-xs font-black px-4 py-1.5 rounded-bl-[1.5rem] uppercase tracking-widest shadow-lg">Most Popular</div>
              <div className="absolute -left-32 -top-32 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <h3 className="text-4xl font-black mb-2 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ff6a00] drop-shadow-sm">Snug Home Pro</span>
                </h3>
                <div className="text-white/60 font-bold text-[0.85rem] tracking-wider uppercase mb-6">Worcester Bosch CDi Compact</div>

                {/* Transparent Product Showcase Container (No Glow) */}
                <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center">
                  <Image src="https://i.postimg.cc/MKw9JCdm/Snug-Home-Pro.png" alt="Snug Home Pro Package - Worcester Bosch CDi" fill className="object-contain p-4 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>

              <div className="flex flex-col flex-1 relative z-10">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-white/60 font-bold text-lg">from</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">£2,500</span>
                </div>

                <Link href="/online-boiler-quote" className="w-full py-4 bg-gradient-to-r from-orange-500 to-[#ff6a00] hover:from-orange-600 hover:to-[#e65c00] text-white rounded-xl font-bold text-lg text-center mb-10 transition-all shadow-[0_15px_30px_-10px_rgba(255,106,0,0.5)]">Get a quote now</Link>

                <ul className="space-y-4 flex-1">
                  {[
                    "10-year guarantee",
                    "Worcester's smallest combi boiler, designed to fit in a kitchen cupboard",
                    "Choice of 3 outputs: 28, 32 and 36kW",
                    "Capable of delivering hot water to more than one bathroom",
                    "High-quality components",
                    "Suitable for small to medium-sized homes",
                    "Worcester Bosch Magnetic filter included",
                    "Magnetic scale reducer included",
                    "Worcester Bosch room programmable room thermostat included"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-white/90 text-[0.95rem] font-medium items-start">
                      <svg className="w-5 h-5 mt-0.5 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Package 3: Snug Home Premium */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-8 relative z-10">
                <h3 className="text-[1.75rem] font-black mb-2 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d1033] to-slate-600">Snug Home Premium</span>
                </h3>
                <div className="text-slate-500 font-bold text-[0.85rem] tracking-wider uppercase mb-6">Worcester Bosch 8000 Life</div>

                {/* Transparent Product Showcase Container */}
                <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,theme(colors.slate.100),transparent_70%)]">
                  <Image src="https://i.postimg.cc/j5ChZKqx/Snug_Home_Premium.png" alt="Snug Home Premium Package - Worcester Bosch 8000" fill className="object-contain p-2 drop-shadow-[0_20px_25px_rgba(13,16,51,0.15)] transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-gray-500 font-bold text-lg">from</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#0d1033] tracking-tight">£2,950</span>
                </div>

                <Link href="/online-boiler-quote" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-center mb-10 transition-colors shadow-lg shadow-slate-900/20">Get a quote now</Link>

                <ul className="space-y-4 flex-1">
                  {[
                    "12-year guarantee",
                    "Direct replacement for the superb Greenstar CDi range",
                    "Choice of 5 outputs: 30, 35, 40, 45, and 50kW",
                    "Most powerful combi boiler on the market",
                    "Unbeatable hot water delivery",
                    "High-quality components",
                    "Suitable for medium to larger sized homes",
                    "Worcester Bosch Magnetic filter included",
                    "Magnetic scale reducer included",
                    "Worcester Bosch room programmable room thermostat included"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600 text-[0.95rem] font-medium items-start">
                      <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#00d0bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Simple Finance Note */}
          <div className="mt-16 max-w-4xl mx-auto text-center px-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#51a7be] mb-4">
              We also offer finance options!
            </h3>
            <div className="space-y-3 text-gray-500 font-medium text-[0.95rem] sm:text-base leading-relaxed">
              <p>
                Are you looking to replace your current boiler? Tom Sutton Heating are offering brand new boiler installations for just £1,692!
              </p>
              <p>
                All our new boilers come with full parts and labour warranties, ranging from 6 to 13 years. Replacing your old boiler with a modern efficient boiler can improve efficiency by 10 to 12%.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Ultra-Premium Smart Home Section */}
      <section className="relative py-24 sm:py-32 bg-[#050B14] overflow-hidden">
        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00d0bb]/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

            {/* Left Content Area - High End Typography */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left order-2 lg:order-1 relative z-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase">Next-Gen Heating</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tighter mb-8 text-white">
                We are ready to bring affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0bb] to-emerald-400">Smart Home</span> solutions to you
              </h2>

              <div className="space-y-6 text-gray-400 font-medium text-lg sm:text-[1.15rem] leading-[1.7] mb-12">
                <p>
                  We are now <strong className="text-white font-bold">Nest Pro installers</strong>. This means we can offer fantastic deals on Nest thermostats right directly to your door.
                </p>
                <p>
                  If you haven't heard about Nest, take a look at our Nest Thermostat page for more details and to see how Nest can digitally optimize your home and save you serious money on your heating bills.
                </p>
              </div>

              <Link href="/nest-thermostat-installation" className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-[#00d0bb] to-emerald-500 opacity-100 shadow-[0_0_40px_rgba(0,208,187,0.4)] group-hover:shadow-[0_0_60px_rgba(0,208,187,0.6)] group-hover:from-emerald-400 group-hover:to-[#00d0bb] transition-all duration-500"></div>
                <div className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[14px] bg-[#050B14]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <span className="relative flex items-center gap-3 text-lg tracking-wide z-10">
                  Learn more
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            </div>

            {/* Right Media Area - Abstract 3D Glassmorphic Display */}
            <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end order-1 lg:order-2 group">
              {/* Main Image Frame */}
              <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-[2.5rem] overflow-hidden transform transition-transform duration-1000 lg:rotate-[-2deg] hover:rotate-0 shadow-[0_20px_50px_rgba(0,208,187,0.15)] ring-1 ring-white/10 z-10">
                <Image
                  src="https://i.postimg.cc/k48j3jym/Tom-Sutton-Heating-NEST.webp"
                  alt="Premium Nest Thermostat Installation"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Glassmorphic UI Element */}
              <div className="absolute -left-4 sm:left-4 lg:-left-12 -bottom-10 sm:-bottom-12 z-20 w-48 sm:w-64 glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl transform transition-transform duration-700 hover:-translate-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Target Temp</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter">20</span>
                    <span className="text-2xl text-emerald-400 font-bold">&deg;C</span>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Orb */}
              <div className="absolute top-10 -right-8 z-20 w-24 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl flex items-center justify-center animate-[bounce_6s_infinite]">
                <svg className="w-10 h-10 text-[#00d0bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Responsive Services Section (Grid on Mobile, Infinite Slider on Desktop) */}
      <section className="py-24 bg-[#eef2f9] overflow-hidden relative">
        <style dangerouslySetInnerHTML={{
          __html: `
          .text-outline-watermark {
            -webkit-text-stroke: 2px #eef2f9;
            color: transparent;
          }
        `}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
          <span className="inline-flex items-center gap-2 text-[#ff4c24] text-sm font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4c24]"></span>
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d1b42] mb-6 leading-tight max-w-3xl mx-auto">
            What We are Offering to Our Potential Client
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tom Sutton Heating specialises in services ranging from boiler breakdowns to plumbing repairs and bathroom installations.
          </p>
        </div>

        {/* The Track (Grid / Interactive Slider) */}
        <div className="relative w-full max-w-md mx-auto sm:max-w-2xl lg:max-w-none px-4 sm:px-6 lg:px-0 lg:flex lg:overflow-hidden">
          <InteractiveSlider>
            {/* The base array maps seamlessly. The duplicated tail array clones are hidden via CSS on mobile/tablet to prevent double-stacking in the grid. */}
            {[...servicesData, ...servicesData].map((service, idx) => (
              <div
                key={idx}
                className={`bg-white w-full lg:w-[380px] shrink-0 rounded-[2rem] p-4 pb-8 relative group shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.15)] transition-shadow duration-300 ${idx >= servicesData.length ? 'hidden lg:block' : ''}`}
              >

                {/* Image Container with Top Right Indent/Notch */}
                <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[220px] rounded-[1.5rem] rounded-tr-[4rem] overflow-hidden mb-6 bg-gray-200 isolation-auto z-10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Overlapping Circular Icon Badge */}
                <div className="absolute top-[210px] sm:top-[250px] lg:top-[210px] left-8 sm:left-10 w-16 h-16 bg-[#2563eb] rounded-full border-[6px] border-white flex items-center justify-center z-20 text-white shadow-sm group-hover:bg-[#1d4ed8] transition-colors">
                  {service.icon}
                </div>

                <div className="px-4 sm:px-6 pt-8 sm:pt-10 relative z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0d1b42] mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-[0.95rem] sm:text-base leading-[1.6] mb-8 line-clamp-3">
                    {service.description}
                  </p>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-[#ff4c24] font-bold text-[0.9rem] sm:text-base hover:text-[#d93a18] transition-colors group/link">
                    View More
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5v10M19 5H9" /></svg>
                  </Link>
                </div>

                {/* Outlined Watermark Number */}
                <div className="absolute bottom-1 right-2 lg:right-4 text-7xl sm:text-8xl font-black text-outline-watermark select-none pointer-events-none z-10 group-hover:text-gray-50 transition-colors duration-500">
                  {String((idx % 6) + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </InteractiveSlider>
        </div>
      </section>
      {/* About Us Premium Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

            {/* Left Column: Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-start">
              <span className="inline-flex items-center gap-2 text-[#ff4c24] text-sm font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ff4c24]"></span>
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d1b42] mb-8 tracking-tight">
                About Tom Sutton Heating
              </h2>

              <div className="space-y-5 text-gray-600 font-medium text-[1.05rem] leading-[1.7] mb-10">
                <p>
                  Tom Sutton Heating is a Gas, LPG, Oil, Heating and plumbing company based in Lymington and surrounding areas. We are a family run business, established for over 30 years we offer valuable knowledge on heating systems both modern and old.
                </p>
                <p>
                  We carry out boiler installations, and boiler repairs in New Milton, Lymington, Brockenhurst, Southampton, Bournemouth, Ringwood, Christchurch, Highcliffe, and all the surrounding villages and towns in the New Forest area.
                </p>
                <p>
                  All work is carried out to the highest standards as we pride ourselves on keeping our customers happy and delivering their requirements at a competitive price.
                </p>
                <p>
                  We are Gas Safe and OFTEC registered.
                </p>
                <p className="text-[#0d1b42] font-semibold">
                  We understand that sometimes your gas, heating and plumbing needs can't wait, this is why we offer an out of hours call out service.<br />
                  So, if you need a plumber or a gas engineer in Lymington and surrounding areas, contact us now!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/about" className="px-8 py-4 bg-[#0d1b42] hover:bg-emerald-600 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(13,27,66,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(5,150,105,0.4)]">
                  More about us
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-50 text-[#0d1b42] border-[3px] border-[#0d1b42] font-bold rounded-xl transition-all hover:-translate-y-1">
                  Contact us
                </Link>
              </div>

              {/* Accreditations */}
              <div className="relative w-[280px] h-[90px] md:w-[320px] md:h-[110px]">
                <Image
                  src="https://i.postimg.cc/dtqCn4Nf/oftec-gassafe.webp"
                  alt="Gas Safe and OFTEC Registered"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Right Column: Image & Quote Card */}
            <div className="w-full lg:w-[45%] flex flex-col gap-8 mt-10 lg:mt-0">
              {/* Square Image Container (Fully Visible) */}
              <div className="relative w-full aspect-square sm:w-[90%] md:w-[80%] lg:w-full mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(13,27,66,0.15)] ring-1 ring-gray-900/5 group z-10">
                <Image
                  src="https://i.postimg.cc/TYFRhPbV/My-Post.webp"
                  alt="Ronan Sutton - Managing Director"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>

              {/* Stacked Quote Card (Moved down to prevent image hiding) */}
              <div className="w-full bg-[#0d1b42] rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 relative transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute -top-6 right-8 text-[#ff4c24] text-7xl font-serif opacity-30 select-none pointer-events-none">"</div>
                <p className="text-white/90 font-medium text-[1.05rem] sm:text-lg leading-[1.8] italic mb-6 relative z-10">
                  "At Tom Sutton Heating, our goal is not to just simply sell you a new boiler, but to find for you and offer you the perfect solution to your homes heating and hot water needs."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-wide">Ronan Sutton</h4>
                    <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase block mt-0.5">Managing Director</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SL Energy Partnership Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none -mr-40 -mt-40"></div>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 bg-white rounded-[3rem] p-8 sm:p-12 lg:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">

            <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>

            {/* Left: Huge Logo */}
            <div className="w-full lg:w-1/2 flex justify-center items-center py-8 relative z-10">
              <div className="relative w-full max-w-[480px] aspect-[16/9] drop-shadow-[0_20px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500">
                <Image
                  src="https://i.postimg.cc/90kLPKtD/sl-energy-logo.webp"
                  alt="SL Energy Renewables Partner Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <span className="inline-flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-6 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Strategic Partnership
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-black text-[#0d1b42] mb-8 leading-[1.1] tracking-tight">
                Your Trusted Partner for Renewables in <span className="text-emerald-500">Hampshire</span> and <span className="text-emerald-500">Dorset</span>
              </h2>

              <p className="text-gray-500 text-lg md:text-[1.1rem] leading-[1.8] mb-10 font-medium max-w-2xl">
                Tom Sutton Heating are proud to be part of <strong className="text-slate-800 font-bold">SL Energy</strong>, an amalgamation of two companies both established for over 30 years. Fronted by two experienced heating & plumbing engineers, SL Energy has been formed to bring you ultra-efficient heating and plumbing systems whether it be a renewable, gas, oil or electric system.
              </p>

              <a
                href="https://www.sl-energy.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0d1b42] text-white rounded-xl font-bold text-lg hover:bg-emerald-500 transition-colors duration-300 shadow-[0_15px_30px_rgba(13,27,66,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 group"
              >
                Find Out More
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

// Data Array for Slider
const servicesData = [
  {
    title: "Gas",
    description: "Your gas appliances could potentially expose you to fires, gas explosions, and carbon monoxide poisoning. Get your gas appliances serviced today.",
    image: "https://i.postimg.cc/Hs8qW2s5/gas_service.webp",
    link: "/gas",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
  },
  {
    title: "Brand New Boilers",
    description: "Getting a new boiler doesn't have to be expensive! We can offer flexible boiler finance plans to get you on your way. Call us today for a bespoke quote.",
    image: "https://i.postimg.cc/MKfCZDKB/boiler_service.webp",
    link: "/new-boiler-installation-2",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Heating",
    description: "Whether it's a valve replacement or a heating repair, you can trust us to look at your problem. We aim to get to any heating system breakdown within 24 hrs!",
    image: "https://i.postimg.cc/02KT5f2M/heating_service.webp",
    link: "/heating",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> // Snowflake substitute
  },
  {
    title: "Plumbing & Bathrooms",
    description: "Our qualified plumbers are experienced enough to deal with shower repairs, leaks, taps, bathroom installations and much more.",
    image: "https://i.postimg.cc/nc9yVkcX/plumbing_service.webp",
    link: "/contact",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  {
    title: "Nest Thermostat Installation",
    description: "Nest Thermostats make it easier than ever to manage your heating and hot water. Use the app to control your home while you're away.",
    image: "https://i.postimg.cc/wTRCxVTt/Thermostat_service.webp",
    link: "/nest-thermostat-installation",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    title: "LPG & Oil",
    description: "LPG & Oil appliances must be checked for safety and efficiency on an annual basis. Call the team today to arrange LPG / Oil servicing, installation or repair.",
    image: "https://i.postimg.cc/bNS7YTN2/lpg_oil_service.webp",
    link: "/oil",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  }
];
