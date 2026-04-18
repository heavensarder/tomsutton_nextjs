import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';

export default function WorcesterBoschPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white min-h-[600px] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden z-10">
        
        {/* Dynamic Background Glass Elements & Watermark (Suppressing extension warnings) */}
        <div className="absolute inset-0 z-0 overflow-hidden" suppressHydrationWarning>
          {/* Deep slate radiant core */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#131b2b] to-slate-900"></div>
          
          {/* Faint ambient green/blue brand glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[#00a651]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[60%] bg-[#0ea5e9]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          
          {/* Noise texture for premium tactile feel */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          {/* Giant Faint Watermark Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[150%] h-[150%] lg:w-[1000px] lg:h-[1000px] opacity-[0.03] select-none pointer-events-none z-0 mix-blend-screen">
             <Image src="https://i.postimg.cc/28MLVLD2/worcester-bosch-accredited-installer-png.webp" alt="Worcester Bosch Watermark" fill className="object-contain" unoptimized />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Area (Typography & Call to Action) */}
            <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
              
              <div className="mb-8 relative w-[260px] h-[90px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-95 mx-auto lg:mx-0 group-hover:scale-105 transition-transform">
                 <Image src="https://i.postimg.cc/28MLVLD2/worcester-bosch-accredited-installer-png.webp" alt="Worcester Bosch Accredited Installer" fill className="object-contain object-center lg:object-left" unoptimized />
              </div>

              <h1 className="text-[2.25rem] sm:text-4xl lg:text-[3.25rem] font-black tracking-tight leading-[1.05] mb-10 text-white drop-shadow-lg max-w-3xl">
                CHOOSE FROM ONE OF OUR WORCESTER BOSCH RANGES
              </h1>

              <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 sm:py-5 bg-[#fb923c] text-white font-black text-[0.85rem] sm:text-[0.95rem] tracking-[0.15em] uppercase rounded-xl transition-all duration-500 shadow-[0_15px_30px_rgba(251,146,60,0.25)] hover:shadow-[0_20px_40px_rgba(251,146,60,0.4)] hover:-translate-y-1 hover:bg-[#f97316]">
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-500 flex items-center gap-3">
                  ONLINE BOILER QUOTE NOW
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            </div>

            {/* Right Media Area: Product Showcase (Hidden on Mobile) */}
            <div className="hidden lg:block col-span-1 lg:col-span-5 relative mt-16 lg:mt-0 group z-30 perspective-1000 w-full max-w-[450px] mx-auto lg:max-w-none">
              
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] perspective">
                
                {/* Custom Glass Presentation Pedestal */}
                <div className="absolute inset-x-8 sm:inset-x-12 bottom-0 top-[15%] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform transition-transform duration-1000 ease-out group-hover:-rotate-y-3 group-hover:rotate-x-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] pointer-events-none"></div>
                </div>
                
                {/* Floating Boiler Hardware Element */}
                <div className="absolute inset-0 transform transition-transform duration-1000 ease-out group-hover:-translate-y-6 group-hover:scale-[1.03]">
                  <Image 
                    src="https://i.postimg.cc/pVnJkvL3/Worcester-Bosch-Greenstar-Boiler.webp" 
                    alt="Worcester Bosch Boiler Hardware Unit" 
                    fill 
                    className="object-contain filter drop-shadow-[0_40px_50px_rgba(0,0,0,0.6)] z-10 p-6" 
                    priority
                    unoptimized 
                  />
                  {/* Highlight sheen passing over the boiler on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1500 z-20 pointer-events-none"></div>
                </div>

              </div>

              {/* Decorative Floating Ambient Nodes */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00a651]/20 rounded-full blur-[50px] pointer-events-none"></div>
              <div className="absolute top-[10%] -right-10 w-32 h-32 bg-sky-400/10 rounded-full blur-[40px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction & Product Grid */}
      <section className="bg-white py-20 lg:py-32 relative z-0 overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
            
          <h2 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-black text-slate-800 tracking-tight mb-6 uppercase">
            Worcester Bosch Boilers
          </h2>
          <div className="w-20 h-1.5 bg-[#00a651] mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-4 text-slate-600 font-medium text-[0.95rem] sm:text-[1.05rem] leading-[1.8] mb-20 text-balance">
            <p>
              Worcester Bosch is universally celebrated throughout the UK as the heating industry's most trusted brand. Producing award-winning boilers that successfully combine incredible reliability with a highly innovative approach to performance and efficiency.
            </p>
            <p>
              As part of the Bosch Group, their meticulous engineering standards guarantee that every product provides ultimate winter comfort. As accredited installers, we are proud to offer unparalleled insight and extended guarantees across their entire range.
            </p>
          </div>

          {/* Comprehensive Alternating Product Showcase */}
          <div className="mt-16 sm:mt-24 max-w-6xl mx-auto space-y-20 sm:space-y-32">
             {[
               {
                 name: "WORCESTER BOSCH 4000 COMBI",
                 description: "The Worcester Bosch 4000 is perfect for small to medium-sized homes with one bathroom. It features a modern new design, an easy-to-use full-colour text display, and it's quiet too. The 4000 has a wide power range to meet all of your heating and hot water needs, whilst doing so efficiently.",
                 image: "https://i.postimg.cc/T1bkskZs/EVOKE-5-300x300.webp",
                 features: [
                   "A wide power range helps to reduce gas consumption and lower energy bills",
                   "Innovative 'Quick Tap' water-saving function helps you reduce water waste",
                   "The modern new design comes with an easy to use colour display",
                   "Operates extremely well in low water pressure areas",
                   "One of the quietest combi boilers available",
                   "Features wireless connectivity with the Bosch EasyControl",
                   "Instantaneous hot water, always available"
                 ]
               },
               {
                 name: "WORCESTER BOSCH 4000 SYSTEM",
                 description: "The Worcester Bosch 4000 System is perfect for small to medium-sized homes. It features a modern new design and is extremely quiet. With a wide power range, it efficiently meets your property's heating requirements when used alongside a hot water storage cylinder.",
                 image: "https://i.postimg.cc/s2DMLY9d/EVOKE-7-300x300.webp",
                 features: [
                   "A wide power range to reduce gas consumption and lower bills",
                   "Modern new design with an easy to use colour display",
                   "Worcester's quietest system boiler",
                   "Wireless connectivity with the Bosch EasyControl",
                   "Ideal for homes where the system includes a hot water cylinder",
                   "Can be used with solar panels for energy saving"
                 ]
               },
               {
                 name: "WORCESTER BOSCH Ri",
                 description: "The Worcester Bosch Ri is a compact, wall-mounted boiler that perfectly fits small and medium-sized homes. Small enough to be installed inside a standard kitchen cupboard, it performs flawlessly alongside our high-efficiency hot water cylinders.",
                 image: "https://i.postimg.cc/3R6TQcWP/Ri-1-300x300.webp",
                 features: [
                   "Ultra-compact; fits smoothly in a standard kitchen cupboard",
                   "Simple and intuitive boiler control knob",
                   "Suitable for setups requiring a hot water storage cylinder",
                   "Built-in frost protection, perfect for garage or loft installations",
                   "Fully compatible with solar panels"
                 ]
               },
               {
                 name: "WORCESTER BOSCH 8000 RANGE",
                 description: "Building upon the highly awarded CDi Classic, the 8000 Life and Style ranges are Worcester's most powerful wall hung combi boilers. Capable of up to 50kW outputs, these sleek units feature completely upgraded controls, wireless connectivity, and intelligent filling options.",
                 image: "https://i.postimg.cc/VvmZ09SG/STYLE-300x300.webp",
                 features: [
                   "Available with Worcester Bosch's longest standard guarantee",
                   "Stunning modern design with improved touch-display screen",
                   "Optional unique Intelligent Filling System",
                   "Perfect for larger homes equipped with multiple bathrooms",
                   "Available in a high-gloss black or white finish",
                   "Wireless connectivity with the Bosch EasyControl smart thermostat"
                 ]
               },
               {
                 name: "WORCESTER BOSCH CDi COMPACT",
                 description: "The Worcester Bosch CDi Compact belongs to the latest generation of smaller and highly efficient boilers. Engineered for a seamless fit inside standard kitchen cupboards, it brings exceptional power to small, medium, and large homes despite its minimal footprint.",
                 image: "https://i.postimg.cc/bwRGLCbY/Untitled_design_14_300x300.webp",
                 features: [
                   "Space-saving design that fits in standard kitchen cupboards",
                   "Simple control knobs equipped with a clear temperature display",
                   "Highly user-friendly interface for everyday ease of use",
                   "Low energy pump drastically reduces electrical usage",
                   "Easily paired with solar panels for cost savings"
                 ]
               }
             ].map((boiler, index) => {
               const isEven = index % 2 === 0;
               return (
                 <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                   
                   {/* Product Image Side */}
                   <div className="w-full lg:w-5/12 flex justify-center perspective">
                     <div className="relative w-full max-w-[350px] aspect-[4/5] bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] group overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                       <Image 
                         src={boiler.image} 
                         alt={boiler.name} 
                         fill 
                         className="object-contain p-6 transform transition-transform duration-700 ease-out group-hover:scale-[1.08] mix-blend-multiply" 
                         unoptimized 
                       />
                       {/* Subtle glow behind image */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00a651]/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#00a651]/10 transition-colors duration-500"></div>
                     </div>
                   </div>

                   {/* Content & Features Side */}
                   <div className="w-full lg:w-7/12 flex flex-col text-left">
                     <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight uppercase mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-[#00a651] after:rounded-full">
                       {boiler.name}
                     </h3>
                     <p className="text-slate-600 font-medium text-[1.05rem] leading-[1.7] mb-8 mt-6 text-balance">
                       {boiler.description}
                     </p>
                     
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                       {boiler.features.map((feature, fIdx) => (
                         <li key={fIdx} className="flex items-start gap-3">
                           <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#00a651]/10 flex items-center justify-center">
                             <svg className="w-3.5 h-3.5 text-[#00a651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                           </div>
                           <span className="text-slate-700 font-semibold text-[0.95rem] leading-[1.4]">{feature}</span>
                         </li>
                       ))}
                     </ul>

                     <div>
                       <Link href="/online-boiler-quote" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00a651] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_10px_20px_rgba(0,166,81,0.2)] hover:shadow-[0_15px_30px_rgba(0,166,81,0.3)] hover:-translate-y-1 hover:bg-[#008f45]">
                         Get An Installation Quote
                         <svg className="w-4 h-4 ml-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                       </Link>
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Location & Contact Section */}

    

      <LocationContact />

    

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
              question: "Why should I choose a Worcester Bosch boiler?",
              answer: "Worcester Bosch is the UK’s leading boiler manufacturer, known for exceptional reliability, energy efficiency, and build quality. As accredited installers, we can offer extended warranties of up to 13 years, giving you the longest protection available."
            },
            {
              question: "What Worcester Bosch models do you install?",
              answer: "We install the full range of Worcester Bosch boilers including the Greenstar 4000, Greenstar 8000 Life, CDi Compact, Greenstar i System, and Greenstar Ri. Each model is designed for different property sizes and hot water demands."
            },
            {
              question: "What warranty do Worcester Bosch boilers come with?",
              answer: "Worcester Bosch boilers come with a standard 5-year warranty. As Worcester Bosch Accredited Installers, we can extend this to up to 13 years at no extra cost, which is the longest warranty available from any boiler manufacturer in the UK."
            },
            {
              question: "Are Worcester Bosch boilers energy efficient?",
              answer: "Yes, all current Worcester Bosch boilers are A-rated for energy efficiency, with some models achieving over 94% efficiency. This means more of the gas you pay for is converted into useful heat, helping to reduce your energy bills significantly."
            },
            {
              question: "How long does a Worcester Bosch boiler installation take?",
              answer: "A standard like-for-like Worcester Bosch boiler installation typically takes one day. More complex installations involving system changes or boiler relocation may take 2-3 days. We always provide a clear timeline during your free survey."
            }
          ]} />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
