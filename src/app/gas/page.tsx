'use client';

import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export default function GasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10">
        {/* Deep Blurred Background Image Overlay Component Ported */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white pt-8 lg:pt-0">
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-blue-300 uppercase mb-4">
                Gas Safe Registered Engineers
              </h3>

              <h1 className="text-[2rem] sm:text-4xl lg:text-[3rem] font-black tracking-tight leading-[1.05] mb-6 drop-shadow-md uppercase">
                WHEN WAS YOUR LAST BOILER CHECK?
              </h1>
              
              <div className="space-y-4 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.7] text-white/95 mb-10 max-w-[650px]">
                <p>
                  The Gas Safe Register recommend that you should get your gas appliances serviced or checked for safety annually.
                </p>
                <p>
                  This work must be carried out by a gas safe registered engineer. Luckily for you, Tom Sutton Heating can take care of it.
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 sm:px-12 sm:py-5 bg-white text-[#0f172a] font-black text-[0.85rem] tracking-widest uppercase rounded-2xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">CONTACT US</span>
              </Link>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/pLGjSr7D/Gas_Pic.webp" 
                  alt="Gas Boiler Technician Servicing" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/30 rounded-full blur-[60px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Dual-Column Content Interface */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">

            {/* Left Column: Typography Content & Checklist */}
            <div className="w-full lg:w-[55%] flex flex-col items-start pr-0 lg:pr-4">
              
              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-black text-slate-800 mb-8 tracking-tight leading-[1.1] uppercase">
                GAS SERVICING & MAINTENANCE
              </h2>

              <div className="space-y-6 text-slate-600 font-medium text-[1.1rem] leading-[1.8] mb-10 w-full">
                <p>
                  If you have any gas appliances you could potentially be exposed to dangers such as fires, gas explosions, and carbon monoxide poisoning. At Tom Sutton Heating we provide annual gas safety checks and services across Lymington and surrounding areas in the New Forest.
                </p>
                <p className="font-bold text-slate-800">Our services include:</p>
                
                {/* Immersive Checklist */}
                <ul className="space-y-4 w-full bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100 mt-6 !mb-8">
                  {[
                    "Gas, LPG & Oil installations",
                    "Gas, LPG & Oil boiler services, repairs and maintenance",
                    "Gas & LPG & Oil safety landlord certificates, including a full boiler service",
                    "Gas fire servicing and safety checks",
                    "Combi Boiler installation and repair",
                    "13 Year parts and labour on selected boilers",
                    "Gas, LPG & Oil Pipe work installations and maintenance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-[1.15rem] h-[1.15rem] border-2 border-slate-300 group-hover:border-blue-500 rounded-full flex items-center justify-center bg-transparent transition-colors duration-300">
                          <svg className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                      </div>
                      <span className="font-semibold text-slate-700 text-[1.05rem] leading-[1.4] transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  We are also fully qualified in LPG & Oil installations for any homes who do not have mains gas.
                </p>
                <p className="p-5 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-2xl font-bold text-blue-900 text-[1.05rem]">
                  We can now offer no-deposit boiler finance on up to 7 year terms. Please ask us about this for more details.
                </p>
                <p>
                  To speak with us regarding gas services, please call <strong className="text-slate-800">01590 631671</strong> or <strong className="text-slate-800">07774 673109</strong> or leave your details on our contact form and we'll get back to you as soon as possible.
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 transition-all">
                <span>CONTACT US</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
            </div>

            {/* Right Column: Visual Element & Lead Form Mapping */}
            <div className="w-full lg:w-[45%] flex flex-col space-y-12 relative z-10 w-full">
              
              {/* Media Block Port - Using standard layout image mapping */}
              <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] lg:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 group">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                  alt="Internal Gas Boiler Mechanic"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="font-bold tracking-widest uppercase text-[0.7rem] bg-blue-600 px-3 py-1.5 rounded-full mb-3 inline-block">Tom Sutton Heating</span>
                </div>
              </div>

              {/* Native LeadForm Component Instance */}
              <div className="w-full relative z-10 block rounded-3xl overflow-hidden border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] bg-white">
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
