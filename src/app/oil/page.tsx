
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';

import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';

export default function OilPage() {
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
                Specialist Rural Services
              </span>

              <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black tracking-tight leading-[1.05] mb-6 text-white drop-shadow-lg uppercase">
                LPG & OIL FOR <br className="hidden lg:block"/> RURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-[#ff8c42]">HOMES</span>
              </h1>
              
              <div className="space-y-4 text-[1.1rem] sm:text-[1.25rem] font-medium leading-[1.6] text-slate-300 mb-10 max-w-[600px]">
                <p>
                  Tom Sutton Heating offers a premium range of Liquid Petroleum Gas (LPG) & Oil services, from expert installations to rigorous annual servicing.
                </p>
                <p className="text-white/80 text-[1rem]">
                  No mains gas? No problem. We provide robust off-grid heating solutions designed to deliver <strong className="text-white">maximum comfort</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all shadow-[0_10px_30px_rgba(255,94,20,0.3)] hover:shadow-[0_15px_40px_rgba(255,94,20,0.5)] hover:-translate-y-1">
                  <span>GET IN TOUCH</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <a href="tel:01590631671" className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-white/10 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all hover:bg-white/20 backdrop-blur-sm">
                  01590 631671
                </a>
              </div>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/5NnSCLL4/Oil-2-534x310.webp" 
                  alt="LPG & Oil Heating Installation" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-[#0d1033]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#ff5e14]/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-400/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Split Layout: Image + Services Text */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Image Area */}
            <div className="w-full lg:w-[45%] relative group max-w-lg mx-auto lg:mx-0">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200">
                <Image
                  src="https://i.postimg.cc/cHhrbMsv/LPG_1.webp"
                  alt="Industrial LPG Gas Cylinders"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
              
              {/* Floating Glass Tag */}
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white max-w-[240px] transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#ff5e14]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h4 className="font-bold text-slate-800 tracking-tight text-sm">OFTEC Registered</h4>
                </div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed uppercase tracking-widest mt-1">
                  Company Reg: C103319
                </p>
              </div>
            </div>

            {/* Right Text Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-start pt-8 lg:pt-0">
              <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                Our Expertise
              </span>
              <h2 className="text-[2rem] sm:text-[2.5rem] font-black text-[#0d1033] tracking-tight leading-[1.15] mb-6 uppercase">
                LPG & OIL <span className="text-[#ff5e14]">MAINTENANCE.</span>
              </h2>
              
              <div className="space-y-5 text-[#64748b] font-medium text-[1.05rem] leading-[1.8] mb-8 w-full max-w-xl">
                <p>
                  At Tom Sutton Heating, we provide top-tier heating services for off-grid homes across the New Forest. It is paramount that LPG and Oil-fired appliances are checked for safety and maximum efficiency annually.
                </p>
                <p>
                  Due to the volatility of propane, butane, and heating oil, annual checks prevent dangerous faults. Oil boilers additionally require a full burner service with their baffles removed and thoroughly cleaned every 12 months.
                </p>
              </div>

              {/* Premium Checklist Grid Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                {[
                  "LPG & Oil boiler servicing",
                  "LPG & Oil boiler installation",
                  "LPG & Oil maintenance & repair",
                  "Mobile homes safety checks",
                  "0% Finance available",
                  "Grant UK 10 year warranties"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group">
                    <div className="w-8 h-8 rounded-full bg-[#0d1033]/5 flex items-center justify-center shrink-0 group-hover:bg-[#ff5e14] transition-colors">
                      <svg className="w-4 h-4 text-[#0d1033] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="font-bold text-slate-800 text-[0.95rem]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-2">
                <Link href="/contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-10 py-4 bg-[#0d1033] text-white font-bold tracking-widest uppercase text-[0.9rem] rounded-xl shadow-[0_10px_30px_-10px_rgba(13,16,51,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(13,16,51,0.6)] hover:-translate-y-1 hover:bg-[#1a2050] transition-all">
                  <span>BOOK A SERVICE</span>
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
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
              question: "What oil heating services do you offer?",
              answer: "We provide oil boiler installations, servicing, and repairs, oil tank inspections, oil-fired range cooker servicing, and system upgrades. Our OFTEC registered engineers are qualified to work on all major oil heating brands."
            },
            {
              question: "How often should my oil boiler be serviced?",
              answer: "We recommend servicing your oil boiler at least once a year. Regular servicing ensures optimal efficiency, reduces fuel consumption, extends the lifespan of your boiler, and helps prevent costly breakdowns during the colder months."
            },
            {
              question: "Can you convert my oil boiler to a more efficient system?",
              answer: "Yes, we can assess your current oil heating system and recommend upgrades or replacements with modern, high-efficiency condensing oil boilers. We can also discuss renewable alternatives such as air source heat pumps if you are considering moving away from oil."
            },
            {
              question: "What should I do if my oil boiler breaks down?",
              answer: "Contact us immediately and our team will arrange an emergency callout. We carry a wide range of common spare parts in our service vehicles, enabling us to complete most repairs on the first visit. We also offer a 24/7 emergency service for existing customers."
            },
            {
              question: "Are your engineers OFTEC registered?",
              answer: "Yes, all our oil heating engineers are OFTEC certified, which is the industry standard for oil heating. This ensures all work meets the highest safety and quality standards. We also hold Gas Safe registration for gas appliance work."
            }
          ]} />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
