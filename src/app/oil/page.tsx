
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import LeadForm from '@/components/LeadForm';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function OilPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10 min-h-[60vh]">
        {/* Deep Blurred Background Image Overlay - Ported from /new-boilers architecture */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-md scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-slate-800/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-[#60a5fa] uppercase mb-4">
                SPECIALIST RURAL HEATING SERVICES
              </h3>

              <h1 className="text-[2rem] sm:text-3xl lg:text-[3rem] font-black tracking-tight leading-[1.1] mb-6 drop-shadow-md uppercase max-w-[600px]">
                LPG & OIL - FOR HOMES IN RURAL AREAS
              </h1>
              
              <div className="space-y-4 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.6] text-white overflow-hidden mb-10 max-w-[600px]">
                <p>
                  Tom Sutton Heating now offer a range of Liquid Petroleum Gas (LPG) & Oil services, including installing and servicing.
                </p>
                <p>
                  If you live in a location that does not have a direct connection to the mains gas supply, then LPG or Oil may be the convenient solution for you!
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-blue-700 font-black text-[0.85rem] tracking-widest uppercase rounded-2xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">CONTACT US</span>
              </Link>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10 transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:ring-white/30">
                <Image 
                  src="https://i.postimg.cc/5NnSCLL4/Oil-2-534x310.webp" 
                  alt="LPG & Oil Heating Installation Before and After" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-sky-400/20 rounded-full blur-[50px] pointer-events-none"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
            </div>

          </div>
        </div>
        
        {/* Elegant Bottom Curve Divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[40px] sm:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C52.16,93.2,105.51,86.74,157.43,80.12h0c58-7.46,115.42-15.68,172-23.7Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Main Dual-Column Content Interface */}
      <section className="py-20 lg:py-28 bg-[#f4f6f8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">

            {/* Left Column: Typography Content & Checklist */}
            <div className="w-full lg:w-[55%] flex flex-col items-start lg:pr-4">
              
              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-black text-[#334155] mb-8 tracking-tight leading-[1.1] uppercase">
                LPG &amp; OIL SERVICES
              </h2>

              <div className="space-y-6 text-[#64748b] font-medium text-[1.1rem] leading-[1.8] mb-10 w-full">
                <p>
                  At Tom Sutton Heating we also provide heating services for many off grid homes across the new forest. This usually includes, LPG & Oil fired appliances. Just like natural gas appliances, it is paramount that these appliances are checked for safety and efficiency on an annual basis.
                </p>
                <p>
                  It is especially important to have LPG & Oil fired appliances checked annually due to the volatility levels of propane & butane and the flammability of Oil. It is also recommended that Oil fired appliances have a full burner service along with their baffle's removed and cleaned at least every 12 months.
                </p>
                <p>
                  We are fully OFTEC registered and have all the relevant LPG qualifications with The Gas Safe Register.
                </p>
                
                {/* Immersive Checklist */}
                <ul className="space-y-3 w-full bg-white/60 p-6 md:p-8 rounded-3xl border border-slate-200 mt-6 !mb-8 shadow-sm">
                  {[
                    "LPG & Oil boiler servicing",
                    "LPG & Oil boiler installation",
                    "LPG & Oil maintenance & repair",
                    "Mobile homes servicing and safety checks",
                    "0% Finance available",
                    "Grant UK registered installers able to provide 10 year warranties"
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
                  To speak with us regarding LPG or oil, please call <a href="tel:01590631671" className="font-bold text-slate-800 hover:text-blue-600 transition-colors inline-block">01590 631671</a> or leave your details on our contact form and we'll get back to you as soon as possible.
                </p>
                
                <p className="text-[#334155] font-bold text-[0.95rem] tracking-wide mt-2">
                  OFTEC â€” Company Reg No: C103319
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#1d4ed8] text-white font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_10px_30px_-10px_rgba(29,78,216,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(29,78,216,0.8)] hover:-translate-y-1 hover:bg-[#1e40af] mb-10 transition-all">
                <span>CONTACT US</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
              {/* Lower Inner Image Block - Provided Asset 2 */}
              <div className="relative w-full aspect-[21/9] sm:aspect-[24/11] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200 group">
                <Image
                  src="https://i.postimg.cc/FRp7Bg9f/Oil.webp"
                  alt="Outdoor Rural Oil Heating Tank Installation"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>

            </div>

            {/* Right Column: Visual Element & Lead Form Mapping */}
            <div className="w-full lg:w-[45%] flex flex-col space-y-12 relative z-10 w-full">
              
              {/* Media Block Port - Top Right Asset 1 */}
              <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-lg ring-1 ring-slate-200 group bg-white">
                <Image
                  src="https://i.postimg.cc/cHhrbMsv/LPG_1.webp"
                  alt="Industrial LPG Gas Cylinders Array"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>

              {/* Native LeadForm Component Instance */}
              <div className="w-full relative z-10 block rounded-3xl overflow-hidden shadow-2xl bg-white sticky top-24">
                {/* The global Lead Form dynamically includes its title and internal UI safely */}
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

    </main>
  );
}
