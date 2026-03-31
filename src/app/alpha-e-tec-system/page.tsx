import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function AlphaETecSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section (Matching /new-boilers) */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden z-10">
        
        {/* Deep Blurred Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden" suppressHydrationWarning>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/40 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              
              {/* Manufacturer Logo Pill */}
              <div className="mb-6 lg:mb-8 bg-white/95 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-white/20 backdrop-blur-sm transform transition-transform hover:scale-105 duration-300 w-max flex items-center justify-center">
                <div className="relative w-[110px] h-[30px] sm:w-[130px] sm:h-[35px]">
                  <Image src="https://i.postimg.cc/fRHSzQpt/alpha_logo.png" alt="Alpha Heating Innovation" fill className="object-contain drop-shadow-sm" priority unoptimized />
                </div>
              </div>

              <h1 className="text-[1.75rem] sm:text-3xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] mb-5 drop-shadow-md">
                ALPHA E-TEC SYSTEM INSTALLATION
              </h1>
              
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-blue-300 uppercase mb-6">
                INSTALLATION BY THE ALPHA BOILER EXPERTS!
              </h3>
              
              <div className="space-y-2 text-[0.95rem] sm:text-[1.05rem] font-medium leading-[1.6] text-white/90 overflow-hidden mb-10 max-w-[600px]">
                <p>Get a new Alpha E-Tec System boiler expertly installed by our dedicated local team. We offer fast, friendly and highly reliable service ensuring your home stays comfortably warm throughout the year.</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-8 sm:py-4 bg-white text-blue-700 font-black text-xs tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">ONLINE BOILER QUOTE</span>
                </Link>
                <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-8 sm:py-4 bg-transparent border-2 border-white/20 text-white font-black text-xs tracking-widest uppercase rounded-xl transition-all hover:bg-white/10 hover:border-white/40 hover:-translate-y-1">
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">NEED HELP?</span>
                </Link>
              </div>

            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[40%] relative mt-8 lg:mt-0 group z-20 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10 transform transition-transform duration-700 group-hover:-translate-y-2 bg-gradient-to-br from-slate-800/60 to-slate-900/90 backdrop-blur-md p-8">
                <Image 
                  src="https://i.postimg.cc/x8XRrkHW/alpha-evoke-hero.webp" 
                  alt="Alpha E-Tec System Boiler" 
                  fill 
                  className="object-contain scale-105 group-hover:scale-110 transition-transform duration-700 ease-out filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] p-6 z-10" 
                  priority
                  unoptimized 
                />
                {/* Internal highlight sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-0 pointer-events-none mix-blend-screen"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-white/10 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Product Technical Specifications */}
      <section className="bg-white py-12 lg:py-16 relative overflow-hidden z-20">
        
        {/* Subtle Architectural Underlay */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-slate-50/80 lg:rounded-l-[8rem] -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Fixed Product Graphic & Global CTA */}
            <div className="lg:col-span-4 flex flex-col items-center lg:sticky lg:top-32">
              <div className="relative w-[70%] sm:w-[50%] lg:w-[90%] max-w-[320px] aspect-[4/5] mb-8 group">
                <Image 
                  src="https://i.postimg.cc/mkGKtqKs/EVOKE_3_300x300.webp" 
                  alt="Alpha E-Tec System Hardware Overview" 
                  fill 
                  className="object-contain transform transition-transform duration-700 ease-out group-hover:scale-[1.08] mix-blend-multiply" 
                  unoptimized 
                />
              </div>
              {/* H2 Title Removed as graphic already encapsulates nomenclature */}
              <Link href="/contact" className="inline-block px-7 py-3.5 bg-[#f38230] text-white font-extrabold tracking-wide text-[0.9rem] uppercase rounded-md transition-all shadow-[0_8px_16px_rgba(243,130,48,0.4)] hover:shadow-[0_12px_24px_rgba(243,130,48,0.5)] hover:-translate-y-0.5 text-left leading-[1.4] w-fit">
                CONTACT US TO GET A QUOTE <br/> TODAY!
              </Link>
            </div>

            {/* Right Column: Dynamic Data Flow */}
            <div className="lg:col-span-8 flex flex-col">
              
              {/* Product Thesis */}
              <div className="mb-8 space-y-3 text-slate-600 font-medium text-[0.95rem] lg:text-[1.05rem] leading-[1.7] text-balance">
                <p>
                  Brand new system boiler that features a stainless steel heat exchanger and is part of the popular E-Tec range.
                </p>
                <p>
                  E-Tec S boilers come in a choice of three fully modulating outputs of 20, 30 or 35kW to provide an ideal solution for small, medium and larger homes.
                </p>
              </div>

              {/* Specification Interactive Grid Card */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-6 uppercase tracking-tight border-b-2 border-slate-100 pb-4">
                  Key Features & Specifications
                </h3>
                
                <ul className="space-y-1 relative z-10">
                  {[
                    "7-year warranty",
                    "Stainless steel heat exchanger",
                    "High-efficiency Grundfos pump and hydroblock assembly",
                    "Single electrode",
                    "Easy-access dry-change NTCs",
                    "Combined condensate and pressure relief valve connection",
                    "Zinc plated expansion vessel to prevent corrosion"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 py-2.5 px-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100 hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)] transform hover:translate-x-1 duration-300">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                        <svg className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-slate-700 font-bold text-[0.9rem] tracking-wide leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Decorative Internal Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Location & Contact Section */}

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
              question: "What is the Alpha E-Tec System boiler?",
              answer: "The Alpha E-Tec System is a system boiler that works with a hot water cylinder to provide central heating and stored hot water. It is ideal for homes with multiple bathrooms where simultaneous hot water use is required."
            },
            {
              question: "When should I choose the E-Tec System over the E-Tec Plus combi?",
              answer: "Choose the E-Tec System if your home has two or more bathrooms and needs to deliver hot water to multiple outlets simultaneously. The stored hot water in the cylinder ensures consistent pressure and temperature, unlike a combi which can struggle with multiple outlets."
            },
            {
              question: "What warranty does the E-Tec System come with?",
              answer: "The Alpha E-Tec System comes with a competitive warranty as standard. We ensure full manufacturer registration during installation so your warranty is active from day one, giving you long-term protection."
            },
            {
              question: "Is the E-Tec System compatible with renewable energy?",
              answer: "Yes, the E-Tec System can be paired with solar thermal panels to pre-heat stored water, reducing your reliance on gas and lowering your energy bills. We can advise on the best renewable options for your home."
            }
          ]} />
        </div>
      </section>

      <LocationContact />

    </main>
  );
}

