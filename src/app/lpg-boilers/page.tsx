
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';

export default function LPGBoilersPage() {
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
              <h1 className="text-[1.75rem] sm:text-3xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] mb-3 drop-shadow-md uppercase">
                LPG Boiler Installation
              </h1>

              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-blue-100 uppercase mb-6">
                LPG BOILER INSTALLATION BY THE SPECIALISTS!
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

              <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 sm:py-5 bg-white text-blue-700 font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
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

      {/* What is an LPG Boiler Section */}
      <section className="bg-white py-16 sm:py-24 relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase mb-6 shadow-sm">
                 Off-Grid Heating
              </span>
              <h2 className="text-[2.25rem] sm:text-[3rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
                What is an LPG Boiler?
              </h2>
              <div className="w-16 h-1.5 bg-[#ff9e0b] rounded-full mx-auto lg:mx-0 mb-8"></div>
              
              <div className="space-y-6 text-slate-600 text-[1.05rem] sm:text-[1.15rem] leading-[1.8] max-w-[600px] font-medium text-left">
                <p>
                  An <strong className="text-slate-800">LPG (Liquefied Petroleum Gas)</strong> boiler works almost identically to a standard natural gas boiler, but it burns fuel stored in a tank or bottles rather than fuel delivered through the main gas grid.
                </p>
                <p>
                  Modern LPG boilers are high-efficiency <strong className="text-slate-800">condensing units</strong>, meaning they capture heat from waste exhaust gases to save energy. They are available as Combi, System, or Regular (Heat Only) models, making them a direct alternative for those off-the-grid.
                </p>
              </div>
              
              <div className="mt-8">
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-blue-600 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-0.5">
                  Get a Free Quote
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative z-10 mt-10 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
                <Image
                  src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200"
                  alt="LPG Boiler Installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is LPG Heating Section */}
      <section className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#ff5e14] font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase mb-6 shadow-sm">
                 Complete Solutions
              </span>
              <h2 className="text-[2.25rem] sm:text-[3rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
                What is LPG Heating?
              </h2>
              <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto lg:mx-0 mb-8"></div>
              
              <div className="space-y-6 text-slate-600 text-[1.05rem] sm:text-[1.15rem] leading-[1.8] max-w-[600px] font-medium text-left">
                <p className="text-center lg:text-left">
                  LPG heating is a complete central heating solution for homes not connected to the UK's natural gas network.
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0">1</span> 
                    The Fuel
                  </h4>
                  <p className="pl-11 text-base text-slate-500">LPG (usually propane) is a liquid under pressure but turns into gas when released.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0">2</span> 
                    Storage
                  </h4>
                  <p className="pl-11 text-base text-slate-500">The fuel is stored on your property in a large bulk tank (installed above or below ground) or in smaller 47kg replaceable cylinders.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0">3</span> 
                    The System
                  </h4>
                  <p className="pl-11 text-base text-slate-500">The gas travels from the storage unit to your boiler, which then heats your water and radiators just like a standard city home.</p>
                </div>
              </div>
              
              <div className="mt-8 w-full flex justify-center lg:justify-start">
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-[#ff5e14] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_10px_20px_rgba(255,94,20,0.2)] hover:shadow-[0_15px_30px_rgba(255,94,20,0.3)] hover:bg-[#ea530e] hover:-translate-y-0.5">
                  Get an LPG Heating Quote
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative z-10 mt-10 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
                <Image
                  src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=1200"
                  alt="LPG Heating Storage System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Can I run a boiler on LPG gas Section */}
      <section className="bg-white py-16 sm:py-24 relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase mb-6 shadow-sm">
                 Boiler Compatibility
              </span>
              <h2 className="text-[2.25rem] sm:text-[3rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
                Can I run a boiler on LPG gas?
              </h2>
              <div className="w-16 h-1.5 bg-[#ff9e0b] rounded-full mx-auto lg:mx-0 mb-8"></div>
              
              <div className="space-y-6 text-slate-600 text-[1.05rem] sm:text-[1.15rem] leading-[1.8] max-w-[600px] font-medium text-left">
                <p>
                  <strong className="text-slate-800">Yes, you can, provided the boiler is designed for it.</strong> Most leading manufacturers (like Worcester Bosch, Vaillant, or Ideal) produce boilers specifically for LPG, or "Natural Gas" models that can be converted.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center text-sm shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span> 
                    The Conversion
                  </h4>
                  <p className="pl-11 text-base text-slate-500">If you have a natural gas boiler, it requires an <strong className="text-slate-700">LPG Conversion Kit</strong>. This involves changing the burner jets and recalibrating the gas valve.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </span> 
                    The Rule
                  </h4>
                  <p className="pl-11 text-base text-slate-500">You cannot simply plug an LPG bottle into a natural gas boiler. The conversion <strong className="text-slate-700">must be performed by a Gas Safe registered engineer</strong> who is specifically qualified to work with LPG (as this is a separate qualification from natural gas).</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-blue-600 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-0.5">
                  Book a Conversion Quote
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative z-10 mt-10 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
                  alt="LPG Conversion Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LPG? Section */}
      <section className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#059669] font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase mb-6 shadow-sm">
                 Key Benefits
              </span>
              <h2 className="text-[2.25rem] sm:text-[3rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
                Why Choose LPG?
              </h2>
              <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto lg:mx-0 mb-8"></div>
              
              <div className="space-y-4 w-full">
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">High Efficiency</h4>
                    <p className="text-base text-slate-500">Modern LPG boilers are typically 90% or more efficient.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Compact</h4>
                    <p className="text-base text-slate-500">LPG boilers are often the same size as standard boilers, saving space compared to oil-fired units.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Cleaner than Oil</h4>
                    <p className="text-base text-slate-500">LPG produces less carbon and fewer particulates than oil heating, making it a "greener" off-grid choice.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Versatile</h4>
                    <p className="text-base text-slate-500">Beyond heating, you can use the same LPG supply for your gas hob or fireplace.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 w-full flex justify-center lg:justify-start">
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-[#059669] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_10px_20px_rgba(5,150,105,0.2)] hover:shadow-[0_15px_30px_rgba(5,150,105,0.3)] hover:bg-[#047857] hover:-translate-y-0.5">
                  Switch to LPG Today
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative z-10 mt-10 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
                  alt="LPG Heating Benefits"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons Section */}
      <section className="bg-white py-20 sm:py-28 relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-gradient-to-b from-blue-50/30 to-transparent -z-10"></div>
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase mb-6 shadow-sm">
                 Objective Comparison
              </span>
            <h2 className="text-[2.25rem] sm:text-[3.25rem] font-black text-slate-800 tracking-tight leading-[1.05] mb-6">
              LPG Boilers: Pros & Cons
            </h2>
            <div className="w-20 h-1.5 bg-[#ff9e0b] rounded-full mx-auto mb-6"></div>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
              Weighing up off-grid heating options? Here is a transparent breakdown of the advantages and considerations when choosing LPG.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Pros Column */}
            <div className="backdrop-blur-sm bg-white/80 rounded-[2.5rem] p-8 sm:p-10 border-2 border-emerald-500/20 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] relative overflow-hidden group hover:border-emerald-500/40 transition-colors duration-500 flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center shadow-inner border border-emerald-200/50">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">The Pros</h3>
              </div>

              <div className="space-y-6 flex-1">
                {[
                  { title: "High Efficiency", text: "Most modern LPG boilers are condensing units with 90% efficiency or higher, reducing fuel waste." },
                  { title: "Lower Upfront Cost", text: "LPG boilers are typically cheaper to purchase and install than oil-fired boilers or heat pumps." },
                  { title: "Cleaner Fuel", text: "LPG produces fewer carbon emissions and particulates than oil or coal, making it a \"greener\" off-grid option." },
                  { title: "Versatility", text: "The same fuel supply can power your central heating, hot water, gas hob, and even a real-flame gas fire." },
                  { title: "Compact Size", text: "They are usually smaller and quieter than oil boilers, often fitting inside a standard kitchen cupboard." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 hover:bg-emerald-50 transition-colors h-auto lg:min-h-[140px]">
                    <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons Column */}
            <div className="backdrop-blur-sm bg-white/80 rounded-[2.5rem] p-8 sm:p-10 border-2 border-rose-500/20 shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)] relative overflow-hidden group hover:border-rose-500/40 transition-colors duration-500 flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-orange-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center shadow-inner border border-rose-200/50">
                  <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">The Cons</h3>
              </div>

              <div className="space-y-6 flex-1">
                {[
                  { title: "Fuel Costs", text: "LPG is generally more expensive per unit of energy (kWh) compared to mains natural gas." },
                  { title: "Fuel Storage", text: "You need space on your property for a large storage tank or a secure area for gas cylinders." },
                  { title: "Delivery Logistics", text: "You must monitor your fuel levels and arrange for deliveries, or sign up for an automated refilling service." },
                  { title: "Conversion Required", text: "Standard boilers must be specifically converted or purchased as LPG-ready to function safely." },
                  { title: "Regulation Heavy", text: "Storage tanks must meet strict safety distance regulations from \"boundaries\" and \"fixed sources of ignition.\"" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-rose-50/50 border border-rose-100/50 hover:bg-rose-50 transition-colors h-auto lg:min-h-[140px]">
                    <svg className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          <div className="mt-16 text-center z-10 relative">
            <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-10 py-5 bg-slate-900 text-white font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(15,23,42,0.2)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.3)] hover:bg-slate-800 hover:-translate-y-1">
              Request Your Free LPG Consultation
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Footer Fixed Price Boiler Packages Section */}
      <section className="relative z-0 py-20 lg:py-28 overflow-hidden bg-slate-50 border-t border-slate-200">
        {/* Dynamic Background Glass Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>
        <div className="absolute -top-32 left-[-10%] w-[50%] h-[80%] bg-blue-200/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-32%] right-[-10%] w-[60%] h-[70%] bg-sky-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] relative z-20">
          <div className="bg-white/80 backdrop-blur-3xl rounded-[2.5rem] p-10 sm:p-16 lg:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white ring-1 ring-slate-900/5 text-center flex flex-col items-center transform transition-transform duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">

            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-blue-50">
              <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] uppercase max-w-4xl mx-auto drop-shadow-sm mb-6">
              FIXED PRICE BOILER PACKAGES
            </h2>

            <div className="w-16 h-1 bg-blue-600 rounded-full mb-10"></div>

            <p className="text-slate-600 text-lg sm:text-lg leading-[1.9] font-medium mx-auto max-w-4xl text-left sm:text-center px-0 md:px-8">
              At Tom Sutton Heating we do not push one particular brand. When you choose to buy a new car, you don't just look at one car, you pick a selection, and choose the one that's right for you. This is why we have created our fixed price boiler installation brochure, containing all of our products and pricing structures with ranges to suit all budgets.
            </p>

            <div className="mt-12 flex justify-center w-full">
              <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap px-10 py-5 text-[1.1rem] font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 border border-transparent rounded-[1.25rem] shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 uppercase tracking-wide group">
                Contact Us Today
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Location & Contact Section */}



      <LocationContact />

      {/* Premium Dark Gradient Contact Footer */}
      <section className="relative bg-[#0b1021] py-8 sm:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-8 py-4 sm:py-3 shadow-2xl">
            <span className="text-blue-100 font-medium text-base sm:text-lg tracking-wide">
              Need immediate assistance? Call our dedicated team on
            </span>
            <div className="flex items-center gap-3 font-bold text-white text-lg sm:text-xl shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4.4c-.6 0-1 .4-1 1C3.4 13.6 10.4 20.6 19 20.6c.6 0 1-.4 1-1v-3.1c0-.6-.4-1-1-1z" /></svg>
              </div>
              <a href="tel:01590631671" className="hover:text-blue-400 transition-colors cursor-pointer inline-block">01590 631671</a>
            </div>
          </div>
        </div>
      </section>



      {/* ----- FAQ Section Mounted at the Very End ----- */}
      {/* FAQs Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider border-2 border-[#ff5e14]/20 bg-white px-5 py-2.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#ff5e14]"></span>
              FAQs
            </span>
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.8rem] font-black text-[#0d1033] tracking-tight leading-[1.15] italic">
              Answers to Your Most<br className="hidden sm:block" /> Common Queries!
            </h2>
          </div>

          {/* Accordion */}
          <FaqAccordion items={[
            {
              question: "What is an LPG boiler and who needs one?",
              answer: "An LPG (Liquefied Petroleum Gas) boiler is designed for homes that are not connected to the mains gas supply. It runs on LPG stored in an external tank, providing the same level of central heating and hot water as a natural gas boiler."
            },
            {
              question: "Can my natural gas boiler be converted to LPG?",
              answer: "Many modern boilers can be converted from natural gas to LPG with a conversion kit. However, it is often more cost-effective and efficient to install a purpose-built LPG boiler. We can assess your current boiler and recommend the best option."
            },
            {
              question: "How is LPG stored and supplied?",
              answer: "LPG is stored in an external tank in your garden, which is refilled by your LPG supplier as needed. Tanks can be either above ground or underground. We can advise on tank placement during installation and work with your LPG supplier to ensure a smooth setup."
            },
            {
              question: "Are LPG boilers as efficient as natural gas boilers?",
              answer: "Yes, modern LPG boilers are just as efficient as their natural gas counterparts, with A-rated condensing models achieving over 90% efficiency. They provide excellent heating performance and can significantly reduce energy costs compared to oil or electric heating systems."
            },
            {
              question: "Do you install and service LPG boilers?",
              answer: "Yes, our engineers are fully qualified to install, service, and repair LPG boilers. We are registered with Gas Safe for LPG work, which requires additional training and certification beyond standard gas registration."
            }
          ]} />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
