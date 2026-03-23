'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import TestimonialSlider from '@/components/TestimonialSlider';

const QuoteComponent = dynamic(() => import('@/components/QuoteComponent'), {
  ssr: false,
  loading: () => <p className="text-gray-400 py-10 font-bold tracking-widest uppercase">Initializing Interface...</p>
});

export default function NewBoilersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10">
        {/* Deep Blurred Background Image Overlay - Ported from /new-boiler-installation-2 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              <h1 className="text-[1.75rem] sm:text-3xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] mb-3 drop-shadow-md">
                NEW BOILER INSTALLATION
              </h1>
              
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-blue-100 uppercase mb-6">
                NEW BOILER INSTALLATION BY THE SPECIALISTS!
              </h3>
              
              <div className="space-y-2 text-[0.9rem] sm:text-[0.95rem] font-medium leading-[1.6] text-white overflow-hidden mb-6 max-w-[600px]">
                <p>Are you looking to replace your current boiler?</p>
                <p>Has your old boiler let you down again?</p>
                <p>Tom Sutton Heating and its team of local gas engineers are here to help!</p>
                <p className="mt-2 text-white/90">
                  We offer fast, friendly and reliable service, and are always on hand to keep you and your family warm throughout the winter! Check out our <Link href="/our-reviews" className="underline underline-offset-4 decoration-blue-300 hover:text-white transition-colors">review page</Link> or our <a href="https://www.google.com/maps?cid=8226595044909973442" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-blue-300 hover:text-white transition-colors">Google listing</a> if you are unsure!
                </p>
              </div>

              <div className="inline-flex flex-row items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#27303f]/95 border border-white/10 backdrop-blur-sm mb-10 shadow-md text-left w-auto max-w-full">
                <svg className="w-4 h-4 sm:w-4 sm:h-4 text-[#fbbf24] shrink-0 translate-y-[0.5px]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="font-bold text-[0.65rem] sm:text-[0.7rem] tracking-[0.08em] uppercase text-white leading-snug">
                  WE ARE 5 STAR RATED ON GOOGLE AND RATED 9.9/10 ON CHECKATRADE
                </span>
              </div>

              <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white text-blue-700 font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">ONLINE BOILER QUOTE NOW</span>
              </Link>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/P5xHmXPS/boiler-installation.webp" 
                  alt="Specialist fitting new boiler" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-200/30 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-white/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Boiler Brands Layout Redesign */}
      <section className="bg-white py-20 sm:py-32 relative overflow-hidden border-b border-gray-100">
        {/* Subtle Split-Background Layout Accent */}
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-slate-50/50 lg:rounded-l-[8rem] -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            
            {/* Left Column: Typography & Corporate Pitch */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start relative z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase mb-6 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Accredited Specialists
              </span>
              
              <h2 className="text-[2.25rem] sm:text-[3.25rem] font-black text-slate-800 tracking-tight leading-[1.05] mb-6">
                OUR PREMIER <br className="hidden lg:block"/> BOILER BRANDS
              </h2>
              
              <div className="w-16 h-1.5 bg-[#ff9e0b] rounded-full mx-auto lg:mx-0 mb-8"></div>
              
              <p className="text-slate-500 text-[1.05rem] sm:text-[1.15rem] font-light leading-[1.8] max-w-[550px] mb-10">
                At Tom Sutton Heating we work with a select tier of premium thermal manufacturers. As <strong className="text-slate-800 font-bold">Worcester Accredited Installers</strong>, their pioneering systems represent our absolute number one boiler recommendation and top sellers globally.
              </p>
              
              <Link 
                href="/our-boiler-brands/" 
                className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 bg-slate-900 hover:bg-black text-white font-bold tracking-widest text-sm uppercase rounded-xl transition-all hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]"
              >
                <span>View All Brands</span>
                <svg className="w-5 h-5 ml-2.5 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

            {/* Right Column: Visual Showcase Display Component */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
              <div className="relative w-full max-w-[500px] aspect-auto sm:aspect-[4/3] bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center p-10 sm:p-16 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 group">
                
                {/* Embedded Ambient Glow FX behind the logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
                
                {/* Physical Logo Bounding Box ensuring absolute structural integrity */}
                <div className="relative w-full h-[70px] sm:h-[100px] z-10 transition-transform duration-500 group-hover:scale-105">
                  <Image 
                    src="https://i.postimg.cc/PqXwb81V/WAI-Bosch-Logo-WHITE-BOXES-SGRight-2-300x73.webp" 
                    alt="Worcester Bosch Accredited Installer Partnership Logo" 
                    fill 
                    className="object-contain object-center mix-blend-multiply" 
                    unoptimized 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Quoting Engine Tier */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="flex flex-col lg:flex-row items-start justify-start">
            
            {/* Left Content Area: Typography & Interactive Quote Engine (50% Width) */}
            <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-8">
              
              {/* Screenshot Typography Block */}
              <div className="w-full text-center lg:text-left mb-10">
                <h2 className="text-[2rem] sm:text-[2.75rem] font-bold text-[#334155] tracking-tight leading-[1.1] mb-6">
                  HOW MUCH DOES A NEW BOILER COST?
                </h2>
                
                <p className="text-gray-500 text-[1.1rem] sm:text-[1.15rem] font-light leading-[1.8]">
                  At Tom Sutton Heating we are completely upfront with our pricing. This is why we offer FIXED PRICE BOILER PACKAGES. <Link href="/contact" className="text-[#2563eb] hover:text-[#1d4ed8] underline underline-offset-2 decoration-1 transition-colors">Contact us</Link> today to discuss our fixed price boiler installation packages or use the quote tool below to find out how much your new boiler could cost you.
                </p>
              </div>

              {/* Quote Component Wrapper */}
              <div className="w-full bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sm:p-10 relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-bl-full -z-10 transition-transform duration-700"></div>
                <div className="relative z-10 w-full min-h-[400px]">
                  <QuoteComponent />
                </div>
              </div>
              
            </div>
            
            {/* Right Content Area: Testimonial Slider (50% Width) */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-8 xl:pl-16">
               <TestimonialSlider />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
