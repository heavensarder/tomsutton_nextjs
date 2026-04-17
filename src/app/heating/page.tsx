import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseUs from '@/components/WhyChooseUs';
import HeatingServiceSlider from '@/components/HeatingServiceSlider';

export default function HeatingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Ultra-Premium Hero Section */}
      <section className="relative w-full flex items-center bg-[#0d1033] text-white pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden z-10">
        {/* Deep Blurred Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-xl scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1033] via-[#0d1033]/95 to-[#0d1033]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1033] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#ff5e14] text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#ff5e14] animate-pulse"></span>
                Heating & Plumbing Experts
              </span>

              <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black tracking-tight leading-[1.05] mb-6 text-white drop-shadow-lg">
                STAY WARM IN <br className="hidden lg:block"/> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-[#ff8c42]">WINTER!</span>
              </h1>
              
              <div className="space-y-4 text-[1.1rem] sm:text-[1.25rem] font-medium leading-[1.6] text-slate-300 mb-10 max-w-[600px]">
                <p>
                  At Tom Sutton Heating, we offer bespoke, high-efficiency solutions to all your heating and plumbing needs across the New Forest.
                </p>
                <p className="text-white/80 text-[1rem]">
                  We understand that plumbing emergencies can&apos;t wait. We aim to reach any heating system breakdown within <strong className="text-white">24 hours</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all shadow-[0_10px_30px_rgba(255,94,20,0.3)] hover:shadow-[0_15px_40px_rgba(255,94,20,0.5)] hover:-translate-y-1">
                  <span>GET IN TOUCH</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <a href="tel:01590631671" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all hover:bg-white/20 backdrop-blur-sm">
                  01590 631671
                </a>
              </div>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/zfPCcrpc/Heating.webp" 
                  alt="Cozy socks warming on a radiator" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-[#0d1033]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#ff5e14]/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Full-Width Slider Section */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          
          <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
            <div className="w-full lg:w-2/3">
              <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Core Services
              </span>
              <h2 className="text-[2rem] sm:text-[2.75rem] font-black text-[#0d1033] tracking-tight leading-[1.15]">
                Our Heating Services
              </h2>
            </div>
            <div className="w-full lg:w-1/3 flex lg:justify-end">
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                From emergency repairs to efficient modern installations, we keep your home perfectly warm all year round.
              </p>
            </div>
          </div>
        </div>

        {/* The Component Slider wrapped beautifully */}
        <div className="w-full max-w-[1600px] mx-auto">
          <HeatingServiceSlider />
        </div>
      </section>

      {/* Premium Split Layout: Image + Trust Text */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Image Area */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200">
                <Image
                  src="https://i.postimg.cc/SKt6vhVT/Radiator.webp"
                  alt="Hands warming up on a newly installed radiator"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
              
              {/* Floating Glass Tag */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h4 className="font-bold text-slate-800 tracking-tight">Fair Pricing</h4>
                </div>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  Working with all budgets across the New Forest layout.
                </p>
              </div>
            </div>

            {/* Right Text Area */}
            <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0">
              <h2 className="text-[2rem] sm:text-[2.5rem] font-black text-[#0d1033] tracking-tight leading-[1.15] mb-6">
                Reliable Experts, <br className="hidden sm:block"/> <span className="text-[#ff5e14]">Honest Solutions.</span>
              </h2>
              
              <div className="space-y-6 text-[#64748b] font-medium text-[1.1rem] leading-[1.8] mb-10 w-full">
                <p>
                  We understand that plumbing and heating repairs can be costly or unexpected. With this in mind, we use a wide range of manufacturers and materials to flexibly suit everyone&apos;s budget.
                </p>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#0d1033]/5 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#0d1033]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Need immediate advice?</h4>
                    <p className="text-slate-500 text-sm mb-2">Speak directly with our engineers to discuss your heating system.</p>
                    <a href="tel:01590631671" className="text-[#1d4ed8] font-bold hover:text-blue-800 transition-colors">Call 01590 631671 →</a>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#0d1033] text-white font-bold tracking-widest uppercase text-[0.9rem] rounded-xl shadow-[0_10px_30px_-10px_rgba(13,16,51,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(13,16,51,0.6)] hover:-translate-y-1 hover:bg-[#1a2050] transition-all">
                <span>REQUEST A QUOTE</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Location & Contact Section */}

    

      <LocationContact />

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
              question: "What types of heating systems do you install?",
              answer: "We install a wide range of heating systems including gas central heating, oil-fired heating, underfloor heating, radiator upgrades, smart heating controls, and renewable systems such as air source heat pumps. We will recommend the best solution for your home and budget."
            },
            {
              question: "How can I improve the efficiency of my central heating?",
              answer: "There are several ways to improve efficiency: upgrading to a modern condensing boiler, installing thermostatic radiator valves (TRVs), adding smart heating controls like a Nest thermostat, power flushing your system to remove sludge, and ensuring adequate loft and wall insulation."
            },
            {
              question: "My radiators have cold spots \u2014 what does this mean?",
              answer: "Cold spots on radiators usually indicate trapped air or a build-up of sludge in the system. Bleeding radiators can resolve air pockets. If sludge is the issue, a professional power flush will clear the debris and restore full heat output to all radiators."
            },
            {
              question: "How long does a central heating installation take?",
              answer: "A straightforward boiler swap typically takes one day. A full central heating system installation, including new radiators and pipework, usually takes 3-5 days depending on the size of your property and the complexity of the system layout."
            },
            {
              question: "Do you offer smart thermostat installations?",
              answer: "Yes, we are approved installers for the Google Nest Learning Thermostat and other smart heating controls. Smart thermostats can save you up to 26% on your heating bills by learning your schedule and only heating your home when needed."
            }
          ]} />
        </div>
      </section>

    </main>
  );
}
