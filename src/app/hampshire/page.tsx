import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InfiniteReviewSlider from '@/components/InfiniteReviewSlider';
import ScrollAnimate from '@/components/ScrollAnimate';
import FaqAccordion from '@/components/FaqAccordion';
import OurServices from '@/components/OurServices';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Heating & Plumbing Services in Hampshire | Tom Sutton Heating',
  description: 'Trusted for over 30 years. From boiler emergency repairs to renewable energy installations, reliable local service across Hampshire and the New Forest.',
};

export default function HampshireAreaPage() {
  return (
    <main className="w-full bg-slate-50">
      
      {/* 
        Premium Hero Section 
        Features: Deep dark gradients, glassmorphism, animated floating images, and high-convert CTAs 
      */}
      <section className="relative w-full overflow-hidden bg-[#0a0f1c] pt-24 pb-12 lg:pt-32 lg:pb-16 lg:min-h-[500px] flex items-center">
        
        {/* Background Base & Abstract Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 animate-fade-in-up">
              
              {/* Trust Badge / Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-8 shadow-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-200 tracking-wider uppercase">Trusted for over 30 years</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-white tracking-tight leading-[1.1] mb-6">
                Expert Heating &<br className="hidden sm:block" /> Plumbing Services<br className="hidden lg:block"/> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ff5e14]">Hampshire</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-10">
                From boiler emergency repairs to renewable energy installations, the team at Tom Sutton Heating provides reliable, local service across Hampshire and the New Forest.
              </p>

              {/* CTAs and Social Proof */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center lg:justify-start">
                <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 bg-gradient-to-r from-[#ff5e14] to-[#ea580c] text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all shadow-[0_10px_30px_rgba(255,94,20,0.3)] hover:shadow-[0_15px_40px_rgba(255,94,20,0.5)] hover:-translate-y-1">
                  <span className="flex items-center">
                    GET A FREE QUOTE
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 bg-slate-800 border border-slate-700 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all hover:bg-slate-700">
                  <span className="flex items-center">
                    GET IN TOUCH
                  </span>
                </Link>
                <div className="flex items-center gap-4 border-l-0 sm:border-l border-slate-700 sm:pl-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1c] overflow-hidden relative bg-slate-800">
                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" fill className="object-cover" unoptimized/>
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#0a0f1c] bg-blue-600 flex items-center justify-center text-xs font-bold text-white relative z-10">
                      5.0
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex text-orange-400">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Top Rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 flex justify-center z-20">
              
              {/* Main Image Frame */}
              <div className="relative w-full max-w-[450px] lg:max-w-full h-[350px] lg:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group transform hover:-translate-y-2 transition-transform duration-700">
                {/* Fallback elegant dark layer */}
                <div className="absolute inset-0 bg-slate-800"></div>
                <Image 
                  src="https://i.postimg.cc/mgLTByf6/hampshire.jpg" 
                  alt="Professional Boiler Installation Hampshire" 
                  fill 
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  priority
                />
                
                {/* Interior shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Glass UI Card on top of the image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#ff5e14] flex flex-shrink-0 items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base leading-tight">Gas Safe Registered</p>
                      <p className="text-slate-300 text-sm mt-0.5">Fully certified engineers.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background glow behind image */}
              <div className="absolute inset-0 bg-orange-500/20 blur-[80px] -z-10 rounded-full scale-90"></div>

            </div>

          </div>
        </div>
      </section>

      {/* "Why Choose Us" / Trust Signals Section (Ultra-Compact Bento Deck) */}
      <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          
          {/* Top Deck: Text & Landscape Visuals */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-8 lg:mb-12">
            
            {/* Left Column: Typography & Action (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center pb-4 lg:pb-0">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] rounded-full bg-[#ff5e14]"></span>
                <span className="text-[#ff5e14] text-[11px] font-black tracking-[0.2em] uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-5">
                Decades of <span className="text-[#ff5e14]">Excellence</span> in Heating.
              </h2>
              <p className="text-slate-500 text-[16px] leading-relaxed mb-8 max-w-md">
                We combine industry-leading local heritage with top-tier certifications to ensure complete peace of mind for every installation.
              </p>
              <div>
                <Link href="/online-boiler-quote" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#0f172a] text-white rounded-xl font-bold bg-[size:200%] hover:scale-[1.02] transition-all shadow-md group">
                  Get Your Free Quote
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Wide Landscape Image (60%) */}
            <div className="w-full lg:w-[60%] relative h-[350px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl group border border-slate-200">
              <Image 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop" 
                alt="Tom Sutton Heating Team" 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
              
              {/* Glass Footer: Service Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 backdrop-blur-xl p-5 sm:p-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-lg leading-none">Local to Hampshire</p>
                  <p className="text-slate-300 text-sm mt-1">Rapid response times across the county.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ff5e14] flex shrink-0 items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
              </div>

              {/* Floating Stat - Top Right */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in-up">
                <h3 className="text-3xl font-black text-[#0f172a] leading-none mb-0.5">98%</h3>
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-wider leading-tight w-16">Clients Satisfied</p>
              </div>

            </div>
          </div>

          {/* Bottom Deck: 4-Column Feature Array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            
            {/* Grid Item 1 */}
            <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ff5e14] mb-4 relative z-10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-[16px] font-bold text-[#0f172a] mb-2 relative z-10">Local Heritage</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed relative z-10">Proudly serving the New Forest and Hampshire for three continuous decades.</p>
            </div>

            {/* Grid Item 2 */}
            <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 relative z-10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-[16px] font-bold text-[#0f172a] mb-2 relative z-10">Expert Team</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed relative z-10">Gas Safe & OFTEC engineers specialized in handling advanced fuel setups.</p>
            </div>

            {/* Grid Item 3 */}
            <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4 relative z-10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-[16px] font-bold text-[#0f172a] mb-2 relative z-10">Quality Assured</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed relative z-10">Consistent 5-star Google ratings and fully Checkatrade-verified.</p>
            </div>

            {/* Grid Item 4 */}
            <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 relative z-10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-[16px] font-bold text-[#0f172a] mb-2 relative z-10">Transparent Pricing</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed relative z-10">Honest, totally upfront costs with no-obligation free quotes for your home.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Services Offered in Location Section (Clean Grid, No Images) */}
      {/* Services Offered in Location Section (Using the Full-Width Homepage Component) */}
      <OurServices 
        title={<>Services Offered in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-orange-500">Hampshire</span></>} 
        subtitle="Hampshire Services" 
      />

      {/* Live Google Reviews Full-Width Section */}
      <section className="w-full relative z-20 bg-[#0a0f1c] py-20 lg:py-24 shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="text-center mb-8 relative z-30 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ffc107] font-bold text-xs tracking-[0.2em] uppercase mb-5 text-center">
            5.0 Google Rating
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Loved by our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-amber-500">Community</span>
          </h3>
          <p className="text-slate-400 font-medium text-[1.05rem] sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We pride ourselves on an uncompromising standard of technical excellence. See what your neighbors think.
          </p>
        </div>
        
        {/* The Infinite Slider now naturally spans the full browser width securely without negative margin hacks. */}
        <div className="w-full">
          <InfiniteReviewSlider />
        </div>
      </section>

      {/* Areas We Cover (SEO SEO Geographic Block) */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-8">
            
            {/* Left Header Box */}
            <div className="w-full md:w-1/3">
              <div className="inline-flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h3 className="text-[#ff5e14] font-black tracking-widest uppercase text-[11px]">Service Area</h3>
              </div>
              <h2 className="text-2xl font-black text-[#0f172a] mb-2 leading-tight">Areas We Cover Near Hampshire</h2>
              <p className="text-slate-500 text-sm leading-relaxed pr-4">Based strategically in the New Forest, we provide rapid, dedicated engineering services across the coast.</p>
            </div>
            
            {/* Right Towns Mapping */}
            <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-10">
              <p className="text-slate-600 font-medium leading-relaxed mb-5">
                We bring our decades of dedicated expertise natively to:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Lymington', 'New Milton', 'Christchurch', 'Bournemouth', 'Brockenhurst', 'Highcliffe', 'All Surrounding Regions'].map((area) => (
                  <span key={area} className="px-4 py-2.5 bg-slate-50 text-slate-700 hover:bg-[#ff5e14] hover:text-white hover:border-[#ff5e14] transition-colors font-medium text-sm rounded-xl border border-slate-200 cursor-default shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hardcoded Location & Contact Map Area (Not a Component to allow future localized map changes) */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate animation="fadeUp">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black text-[#0d1033] tracking-tight mb-4">
              Visit Us or Get in Touch in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-[#ff8c42]">Hampshire</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base font-medium">
              Serving the New Forest and beyond — from Lymington to Bournemouth, we're always nearby when you need us.
            </p>
          </div>
          </ScrollAnimate>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Left: Map */}
            <ScrollAnimate animation="fadeLeft" className="flex-1 min-w-0">
              <div className="rounded-2xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border border-gray-100 h-full min-h-[350px] lg:min-h-[480px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.9500162605204!2d-1.6704168000000001!3d50.757245100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487383d967293ef5%3A0x722abc9b62d8ffc2!2sTom%20Sutton%20Heating!5e0!3m2!1sen!2sbd!4v1774807873622!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Location Map"
                />
              </div>
            </ScrollAnimate>

            {/* Right: Contact Info */}
            <ScrollAnimate animation="fadeRight" delay={200} className="w-full lg:w-[420px] shrink-0">
              <div className="flex flex-col gap-4 h-full">

                {/* Phone */}
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#ff5e14]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff5e14] transition-colors">
                    <svg className="w-5 h-5 text-[#ff5e14] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Call Us</p>
                    <a href="tel:01590631671" className="text-[#0d1033] font-bold text-lg hover:text-[#ff5e14] transition-colors">01590 631671</a>
                    <p className="text-gray-400 text-xs mt-0.5">Mon-Sat, 8am - 6pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#00d0bb]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00d0bb] transition-colors">
                    <svg className="w-5 h-5 text-[#00d0bb] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Email Us</p>
                    <a href="mailto:info@tomsuttonheating.co.uk" className="text-[#0d1033] font-bold text-sm sm:text-base hover:text-[#00d0bb] transition-colors">info@tomsuttonheating.co.uk</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                    <svg className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Our Service Area</p>
                    <p className="text-[#0d1033] font-bold text-base leading-snug">New Milton, Hampshire<br/>BH25, United Kingdom</p>
                  </div>
                </div>

                {/* Emergency */}
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                    <svg className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Emergency Callout</p>
                    <p className="text-[#0d1033] font-bold text-base">Out-of-hours available</p>
                    <p className="text-gray-400 text-xs mt-0.5">24/7 for existing customers</p>
                  </div>
                </div>

                <Link href="/contact" className="group mt-2 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] rounded-xl font-bold text-white text-base hover:from-[#ff6a00] hover:to-[#ff9c52] transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(255,94,20,0.4)]">
                  Contact Us Today
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link href="#contact" className="group mt-2 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] rounded-xl font-bold text-white text-base hover:from-[#ff6a00] hover:to-[#ff9c52] transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(255,94,20,0.4)]">
                  Contact Us Today
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>

              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ----- Localized FAQ Section Mounted at the Very End ----- */}
      <section className="py-20 sm:py-28 bg-[#eef1fa] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-8 lg:left-20 w-16 h-16 text-[#0d1033]/10 pointer-events-none select-none">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>
        </div>
        <div className="absolute top-16 right-12 lg:right-32 w-12 h-12 text-[#ff5e14]/15 pointer-events-none select-none">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>
        </div>
        <div className="absolute bottom-24 right-20 lg:right-40 w-20 h-20 text-[#0bdacb]/10 pointer-events-none select-none rotate-12">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>
        </div>
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0d1033 0, #0d1033 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider border-2 border-[#ff5e14]/20 bg-white px-5 py-2.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#ff5e14]"></span>
              Hampshire FAQs
            </span>
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.8rem] font-black text-[#0d1033] tracking-tight leading-[1.15] italic">
              Common Queries About<br className="hidden sm:block" /> Our Local Services!
            </h2>
          </div>

          {/* Accordion */}
          <FaqAccordion items={[
            {
              question: 'Do you cover all areas inside Hampshire?',
              answer: 'Yes! We cover the entire New Forest region and beyond, including Lymington, New Milton, Brockenhurst, Christchurch, Highcliffe, Ringwood, and Southampton.'
            },
            {
              question: 'How quickly can an engineer reach me in a heating emergency?',
              answer: 'Because we are locally based in New Milton, our engineers can offer extremely rapid response times across Hampshire for emergency boiler repairs.'
            },
            {
              question: 'Are your engineers Gas Safe registered in the local area?',
              answer: 'Absolutely. All our local Hampshire engineers are fully Gas Safe registered, OFTEC certified, and insured to work on both residential and commercial heating systems.'
            },
            {
              question: 'Do you offer free quotes for boiler installations in Hampshire?',
              answer: 'Yes! We provide 100% free, no-obligation home surveys and quotes across the entire Hampshire and Dorset area so we can accurately assess what boiler your home needs.'
            }
          ]} />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
