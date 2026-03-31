
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import LeadForm from '@/components/LeadForm';
import WhyChooseUs from '@/components/WhyChooseUs';

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
                Heating &amp; Plumbing Experts
              </h3>

              <h1 className="text-[2rem] sm:text-4xl lg:text-[3rem] font-black tracking-tight leading-[1.05] mb-6 drop-shadow-md uppercase">
                STAY WARM IN THE WINTER!
              </h1>
              
              <div className="space-y-4 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.7] text-white/95 mb-10 max-w-[650px]">
                <p>
                  At Tom Sutton heating we offer solutions to all your heating &amp; plumbing needs.
                </p>
                <p>
                  We understand that sometimes your heating &amp; plumbing needs cant wait, so we aim to get to any heating system breakdowns within 24Hrs!!
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

            {/* Left Column: Typography Content & Service Cards */}
            <div className="w-full lg:w-[55%] flex flex-col items-start lg:pr-4">
              
              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-black text-[#334155] mb-8 tracking-tight leading-[1.1] uppercase">
                HEATING SERVICES
              </h2>

              <div className="space-y-6 text-[#64748b] font-medium text-[1.1rem] leading-[1.8] mb-10 w-full">
                <p>
                  We understand that plumbing and heating repairs can be costly, with this in mind we use a wide range of manufacturers and materials to suit everybody&apos;s budget across the New Forest.
                </p>
                <p>We offer the following heating services:</p>
                
                {/* Premium Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-6 !mb-8">
                  {[
                    { text: "Radiator installations", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                    { text: "Thermostatic radiator valve replacement", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
                    { text: "Cylinder repair & installations", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
                    { text: "Unvented cylinder installations", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                    { text: "Heating system fault finding", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                    { text: "Heating system repair", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                    { text: "Heating system upgrades", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                    { text: "Power flushing", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" },
                    { text: "Pipe work installation & repair", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3.5 bg-white rounded-xl px-4 py-3.5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_8px_25px_-5px_rgba(255,94,20,0.12)] hover:border-[#ff5e14]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff5e14] to-[#ff8c42] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md group-hover:shadow-[#ff5e14]/20 transition-all duration-300">
                        <svg className="w-[18px] h-[18px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      </div>
                      <span className="font-semibold text-slate-700 text-[0.92rem] leading-[1.35] group-hover:text-[#0d1033] transition-colors duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>

                <p>
                  To speak with us regarding heating services, please call <strong className="text-slate-800">01590 631671</strong> or <strong className="text-slate-800">07774 673109</strong> or leave your details on our contact form and we&apos;ll get back to you as soon as possible.
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
                <LeadForm />
              </div>
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
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">01590 631671</span>
              <span className="text-blue-500/50 mx-1 font-normal text-base">|</span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">07774 673109</span>
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
