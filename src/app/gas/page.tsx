
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import GasInlineSlider from '@/components/GasInlineSlider';
import { getComponentData } from '@/lib/components';
import { gasSliderDefault } from '@/lib/defaultComponentsData';

import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';

export default async function GasPage() {
  const gasSliderData = await getComponentData('gas_slider', gasSliderDefault);

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

              <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-10 py-4 sm:px-12 sm:py-5 bg-white text-[#0f172a] font-black text-[0.85rem] tracking-widest uppercase rounded-2xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">GET IN TOUCH</span>
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

      {/* No CSS Marquee required - user requested manual scrolling natively */}

      {/* Hero Section Restored Extension (Gas Servicing) */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px] relative z-10 mb-10 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
            {/* Left Column: Typography Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-start pr-0 lg:pr-4">
              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-black text-[#0d1033] mb-6 tracking-tight leading-[1.1] uppercase">
                GAS SERVICING &amp; MAINTENANCE
              </h2>

              <div className="space-y-6 text-slate-600 font-medium text-[1.15rem] leading-[1.8] w-full">
                <p>
                  If you have any gas appliances you could potentially be exposed to dangers such as fires, gas explosions, and carbon monoxide poisoning. At Tom Sutton Heating we provide annual gas safety checks and services across Lymington and surrounding areas in the New Forest.
                </p>
                <p className="font-bold text-slate-800 text-[1.25rem] pt-4">Our premium gas services include:</p>
              </div>
            </div>

            {/* Right Column: Visual Element */}
            <div className="w-full lg:w-[45%] flex flex-col relative z-10 pt-4 lg:pt-0">
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-100 border-4 border-white group">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                  alt="Gas Servicing"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <span className="font-black tracking-widest uppercase text-[0.7rem] bg-blue-600 px-4 py-2 rounded-full shadow-lg shadow-blue-600/40">Tom Sutton Heating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Highlighted Infinite Marquee Row */}
        <GasInlineSlider data={gasSliderData} />
      </section>

      {/* Premium Overview Hub */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28">
            <h2 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-[#0d1033] tracking-tight leading-[1.05] mb-8">
              PREMIUM GAS COOKER &amp; <br className="hidden sm:block" /> HOB INSTALLATION
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-[1.8]">
              Whether upgrading to a modern glass hob or a heavy-duty range cooker, the connection dictates performance and safety. We deliver impeccable, Gas Safe registered installations across Hampshire.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Hob Installation Interactive Card */}
            <div className="w-full lg:w-1/2 group relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shadow-inner">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-[1.75rem] font-black text-slate-800 tracking-tight uppercase mb-4">Gas Hob Installation</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-8">
                  A modern gas hob requires absolute precision. Integrated directly into your worktops, the connection must be flawlessly secure while allowing for the strict specific clearances and "hot zone" parameters required by manufacturer guidelines.
                </p>
                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Gas Hob Installation" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">Seamless Integration</span>
                </div>
                
                {/* Embedded Hob FAQs */}
                <div className="pt-8 mt-8 border-t border-slate-100">
                  <h4 className="text-[0.8rem] font-black tracking-widest text-blue-600 uppercase mb-5 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Hob Fitting FAQs
                  </h4>
                  <div className="[&>div]:mx-0 [&>div]:max-w-none">
                    <FaqAccordion items={[
                      {
                        question: "Can I install a gas hob myself?",
                        answer: "No. In the UK, it is a strict legal requirement that any gas appliance installation be carried out by a Gas Safe registered engineer. This ensures the unit is totally airtight, the flame failure devices are functioning correctly, and there is no risk of carbon monoxide leakage."
                      },
                      {
                        question: "What is a 'hot zone' and why does it matter?",
                        answer: "The 'hot zone' is the immediate area directly above and laterally around your hob. Safety regulations mathematically dictate that there must be absolutely no combustible materials (such as wooden cupboards, wallpaper, or curtains) within a specific manufacturer-defined distance to prevent extreme fire hazards."
                      },
                      {
                        question: "Do you provide a gas safety certificate after installation?",
                        answer: "Yes, without exception. Once the hob is fully commissioned and scientifically tightness-tested, we hand over the necessary official documentation to prove the installation meets all current building regulations."
                      }
                    ]} />
                  </div>
                </div>
              </div>
            </div>

            {/* Cooker Installation Interactive Card */}
            <div className="w-full lg:w-1/2 group relative">
              <div className="absolute inset-0 bg-[#ff5e14] rounded-[2.5rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(255,94,20,0.3)] border border-orange-50 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#ff5e14] flex items-center justify-center mb-8 shadow-inner">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-[1.75rem] font-black text-slate-800 tracking-tight uppercase mb-4">Gas Cooker Installation</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-8">
                  Free-standing gas cookers or range cookers demand robust structural stability and high-flow flexible hose connections. We ensure your cooker is perfectly leveled, rigidly secured with stability chains, and safely connected to the mains.
                </p>
                <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&w=800&q=80" alt="Gas Range Cooker" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">Heavy Duty Securing</span>
                </div>

                {/* Embedded Cooker FAQs */}
                <div className="pt-8 mt-8 border-t border-orange-100/50">
                  <h4 className="text-[0.8rem] font-black tracking-widest text-[#ff5e14] uppercase mb-5 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Cooker Setup FAQs
                  </h4>
                  <div className="[&>div]:mx-0 [&>div]:max-w-none">
                    <FaqAccordion items={[
                      {
                        question: "Do I need a stability bracket for my cooker?",
                        answer: "Yes. To prevent the cooker from violently tilting forward (especially when the heavy oven door is open or large pots are resting on the front burners), a high-tensile stability bracket or securing chain is a mandatory safety feature we install automatically."
                      },
                      {
                        question: "Can you convert an LPG cooker to Mains Gas (or vice versa)?",
                        answer: "Most modern cookers can easily be converted using an LPG/Mains conversion kit consisting of replacement jets and nozzles. If you possess the specific manufacturer kit, our engineers can seamlessly perform the conversion and recalibrate the gas flow during the installation process."
                      },
                      {
                        question: "What happens to my old cooker?",
                        answer: "We can safely and cleanly disconnect your old appliance and isolate the pipework before setting up the new one. Many of our Hampshire clients also request active disposal services, which can be swiftly arranged upon your request."
                      }
                    ]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State of the Art "Why Choose Us" Bento Interface */}
      <section className="py-24 bg-[#0a0f1c] relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/20 to-transparent rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#ff5e14] font-black tracking-[0.2em] uppercase text-sm mb-4 block">Hampshire's Finest</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-white uppercase tracking-tight leading-[1.1]">
              Why Choose Our Engineers?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div className="group bg-white/5 border border-white/10 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
               <h3 className="text-white font-black text-xl mb-3 tracking-wide">Local &amp; Reliable</h3>
               <p className="text-slate-400 font-medium leading-relaxed">Serving Southampton, Portsmouth, Winchester, and all surrounding Hampshire towns with rapid response capabilities.</p>
            </div>

            <div className="group bg-white/5 border border-white/10 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:-translate-y-8">
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-[#ff5e14] flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               </div>
               <h3 className="text-white font-black text-xl mb-3 tracking-wide">Gas Safe Guaranteed</h3>
               <p className="text-slate-400 font-medium leading-relaxed">Fully insured and certified engineering staff carrying out strictly regulated, legally compliant installations every time.</p>
            </div>

            <div className="group bg-white/5 border border-white/10 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
               </div>
               <h3 className="text-white font-black text-xl mb-3 tracking-wide">Extensive Testing</h3>
               <p className="text-slate-400 font-medium leading-relaxed">We don't simply "plug it in". We perform exhaustive tightness tests on your entire broader gas system.</p>
            </div>
          </div>

          {/* High-Intent CTA Bar */}
          <div className="bg-gradient-to-r from-blue-900 to-[#0d1033] p-8 lg:p-12 rounded-[2.5rem] border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-3">Is Your Kitchen Ready?</h4>
              <p className="text-blue-200 text-[1.1rem] font-medium max-w-xl">Contact us today for a free quote and secure an expert, regulatory-compliant installation slot across the South Coast.</p>
            </div>
            <Link href="/contact" className="relative z-10 shrink-0 bg-white hover:bg-blue-50 text-blue-900 font-black uppercase tracking-widest text-[0.85rem] px-10 py-5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] whitespace-nowrap">
              Secure Your Slot
            </Link>
          </div>
        </div>
      </section>

      {/* Split FaqAccordions are now embedded directly into the interactive cards above */}

      <ContactSection />
    </main>
  );
}
