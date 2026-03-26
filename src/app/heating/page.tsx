'use client';

import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section */}
      <section className="relative w-full flex items-center bg-[#2563eb] text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10">
        {/* Deep Blurred Background Image Overlay Component */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-xl scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 via-blue-600/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white pt-8 lg:pt-0">
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-blue-200 uppercase mb-4">
                Heating & Plumbing Experts
              </h3>

              <h1 className="text-[2rem] sm:text-4xl lg:text-[3rem] font-black tracking-tight leading-[1.05] mb-6 drop-shadow-md uppercase">
                STAY WARM IN THE WINTER!
              </h1>
              
              <div className="space-y-4 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.7] text-white/95 mb-10 max-w-[650px]">
                <p>
                  At Tom Sutton heating we offer solutions to all your heating & plumbing needs.
                </p>
                <p>
                  We understand that sometimes your heating & plumbing needs cant wait, so we aim to get to any heating system breakdowns within 24Hrs!!
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 sm:px-12 sm:py-5 bg-white text-[#1d4ed8] font-black text-[0.85rem] tracking-widest uppercase rounded-2xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-slate-50">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">CONTACT US</span>
              </Link>
            </div>

            {/* Right Media Area - Provided Asset 1 */}
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/10 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/zfPCcrpc/Heating.webp" 
                  alt="Cozy socks warming on a radiator" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-sky-400/30 rounded-full blur-[60px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Dual-Column Content Interface */}
      <section className="py-20 lg:py-28 bg-[#f4f6f8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">

            {/* Left Column: Typography Content & Checklist */}
            <div className="w-full lg:w-[55%] flex flex-col items-start lg:pr-4">
              
              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-black text-[#334155] mb-8 tracking-tight leading-[1.1] uppercase">
                HEATING SERVICES
              </h2>

              <div className="space-y-6 text-[#64748b] font-medium text-[1.1rem] leading-[1.8] mb-10 w-full">
                <p>
                  We understand that plumbing and heating repairs can be costly, with this in mind we use a wide range of manufacturers and materials to suit everybody's budget across the New Forest.
                </p>
                <p>We offer the following heating services:</p>
                
                {/* Immersive Checklist */}
                <ul className="space-y-3 w-full bg-white/60 p-6 md:p-8 rounded-3xl border border-slate-200 mt-6 !mb-8 shadow-sm">
                  {[
                    "Radiator installations",
                    "Thermostatic radiator valve replacement",
                    "Cylinder repair and installations",
                    "Unvented cylinder installations",
                    "Heating system fault finding",
                    "Heating system repair",
                    "Heating system upgrades",
                    "Power flushing",
                    "Pipe work installation and repair"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></div>
                      </div>
                      <span className="font-semibold text-slate-700 text-[1.05rem] leading-[1.4] group-hover:text-slate-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  To speak with us regarding heating services, please call <strong className="text-slate-800">01590 631671</strong> or <strong className="text-slate-800">07774 673109</strong> or leave your details on our contact form and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Lower Inner Image Block - Provided Asset 2 */}
              <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200 group mb-8">
                <Image
                  src="https://i.postimg.cc/SKt6vhVT/Radiator.webp"
                  alt="Hands warming up on a newly installed radiator"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#1d4ed8] text-white font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_10px_30px_-10px_rgba(29,78,216,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(29,78,216,0.8)] hover:-translate-y-1 hover:bg-[#1e40af] transition-all">
                <span>CONTACT US</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
            </div>

            {/* Right Column: Lead Form Mapping */}
            <div className="w-full lg:w-[45%] flex flex-col space-y-12 relative z-10">
              {/* Native LeadForm Component Instance */}
              <div className="w-full relative z-10 block rounded-3xl overflow-hidden shadow-2xl bg-white sticky top-24">
                {/* The global Lead Form dynamically includes its title and internal UI safely */}
                <LeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Dark Gradient Contact Footer Bridge */}
      <section className="relative bg-[#0b1021] py-8 sm:py-10 overflow-hidden">
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
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">01590 631671</span>
              <span className="text-blue-500/50 mx-1 font-normal text-base">|</span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">07774 673109</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
