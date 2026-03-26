import Image from 'next/image';
import Link from 'next/link';

export default function AlphaBoilersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Alpha Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white min-h-[600px] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden z-10">
        
        {/* Dynamic Background Glass Elements & Watermark (Suppressing extension warnings) */}
        <div className="absolute inset-0 z-0 overflow-hidden" suppressHydrationWarning>
          {/* Deep slate radiant core */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#131b2b] to-slate-900"></div>
          
          {/* Faint ambient red/orange brand glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-red-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[60%] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          
          {/* Noise texture for premium tactile feel */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          {/* Giant Faint Alpha Watermark Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[150%] h-[150%] lg:w-[1000px] lg:h-[1000px] opacity-[0.04] select-none pointer-events-none z-0 mix-blend-screen">
             <Image src="https://i.postimg.cc/fRHSzQpt/alpha_logo.png" alt="Alpha Brand Watermark" fill className="object-contain" unoptimized />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Area (Typography & Call to Action) */}
            <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
              
              <div className="mb-8 relative w-[220px] h-[70px] sm:w-[260px] sm:h-[90px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-95 mx-auto lg:mx-0 group-hover:scale-105 transition-transform">
                 <Image src="https://i.postimg.cc/fRHSzQpt/alpha_logo.png" alt="Alpha Heating Innovation" fill className="object-contain object-center lg:object-left" unoptimized />
              </div>

              <h1 className="text-[2.25rem] sm:text-4xl lg:text-[3.25rem] font-black tracking-tight leading-[1.05] mb-10 text-white drop-shadow-lg max-w-2xl">
                CHOOSE FROM ONE OF OUR ALPHA BOILER RANGES
              </h1>

              <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-[#fb923c] text-white font-black text-[0.85rem] sm:text-[0.95rem] tracking-[0.15em] uppercase rounded-xl transition-all duration-500 shadow-[0_15px_30px_rgba(251,146,60,0.25)] hover:shadow-[0_20px_40px_rgba(251,146,60,0.4)] hover:-translate-y-1 hover:bg-[#f97316]">
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-500 flex items-center gap-3">
                  ONLINE BOILER QUOTE NOW
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            </div>

            {/* Right Media Area: Alpha Product Showcase (Hidden on Mobile) */}
            <div className="hidden lg:block col-span-1 lg:col-span-5 relative mt-16 lg:mt-0 group z-30 perspective-1000 w-full max-w-[450px] mx-auto lg:max-w-none">
              
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] perspective">
                
                {/* Custom Glass Presentation Pedestal */}
                <div className="absolute inset-x-8 sm:inset-x-12 bottom-0 top-[15%] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform transition-transform duration-1000 ease-out group-hover:-rotate-y-3 group-hover:rotate-x-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] pointer-events-none"></div>
                </div>
                
                {/* Floating Boiler Hardware Element */}
                <div className="absolute inset-0 transform transition-transform duration-1000 ease-out group-hover:-translate-y-6 group-hover:scale-[1.03]">
                  <Image 
                    src="https://i.postimg.cc/y8f31CtD/device_image.png" 
                    alt="Alpha Boiler Hardware Unit" 
                    fill 
                    className="object-contain filter drop-shadow-[0_40px_50px_rgba(0,0,0,0.6)] z-10" 
                    priority
                    unoptimized 
                  />
                  {/* Highlight sheen passing over the boiler on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1500 z-20 pointer-events-none"></div>
                </div>

              </div>

              {/* Decorative Floating Ambient Nodes */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-[50px] pointer-events-none"></div>
              <div className="absolute top-[10%] -right-10 w-32 h-32 bg-sky-400/10 rounded-full blur-[40px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Alpha Boilers Introduction & Product Grid */}
      <section className="bg-white py-20 lg:py-32 relative z-0 overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
            
          <h2 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-black text-slate-800 tracking-tight mb-6 uppercase">
            Alpha Boilers
          </h2>
          <div className="w-20 h-1.5 bg-[#d91d29] mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-4 text-slate-600 font-medium text-[0.95rem] sm:text-[1.05rem] leading-[1.8] mb-20 text-balance">
            <p>
              Alpha is recognised throughout the UK as one of the heating industry's leading lights – a company, with over 50 years' experience, that successfully combines traditional business values with a highly innovative approach to all aspects of its operation.
            </p>
            <p>
              Alpha is also part of Immergas, which operates in 30 countries worldwide. Market leader in its home country of Italy, Immergas has produced over 7 million boilers and is arguably Europe's leading heating appliance manufacturer.
            </p>
          </div>

          {/* Standard Professional Product Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-16 max-w-6xl mx-auto">
             {[
               { name: "ALPHA E-TEC PLUS", link: "/alpha-e-tec-plus", image: "https://i.postimg.cc/T1qFm0vH/ETEC_PLUS_300x300.webp" },
               { name: "ALPHA EVOKE", link: "/alpha-evoke", image: "https://i.postimg.cc/0jdFmn1X/EVOKE_2_300x300.webp" },
               { name: "ALPHA E-TEC SYSTEM", link: "/alpha-e-tec-system", image: "https://i.postimg.cc/mkGKtqKs/EVOKE_3_300x300.webp" },
               { name: "ALPHA E-TEC REGULAR", link: "/alpha-e-tec-regular", image: "https://i.postimg.cc/Y0wThVTw/EVOKE_4_300x300.webp" },
             ].map((boiler, index) => (
                <div key={index} className="flex flex-col items-center bg-white p-6 sm:p-8 group hover:-translate-y-2 transition-transform duration-300 relative">
                   
                   {/* Product Image Container */}
                   <div className="relative w-[110%] sm:w-[125%] -ml-[5%] sm:-ml-[12.5%] aspect-[1/1.1] mb-6 bg-transparent overflow-visible pointer-events-none z-0">
                      <Image 
                         src={boiler.image} 
                         alt={boiler.name} 
                         fill 
                         className="object-contain group-hover:scale-[1.15] transition-transform duration-500 ease-out mix-blend-multiply origin-top" 
                         unoptimized 
                      />
                   </div>
                   
                   {/* Typography Removed (Titles are baked into the raw asset images) */}
                   
                   {/* Action Button */}
                   <div className="mt-auto w-full relative z-20" suppressHydrationWarning>
                     <Link href={boiler.link} className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#0077b6] hover:bg-[#0284c7] text-white font-bold text-sm tracking-wider uppercase rounded transition-colors shadow-sm" suppressHydrationWarning>
                       MORE INFO
                     </Link>
                   </div>
                   
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-20 lg:py-32 border-t border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Text & Checklist */}
            <div className="flex flex-col">
              <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-10 text-balance">
                Why choose us to Install your new Alpha Boiler?
              </h2>
              
              <ul className="space-y-5 mb-14">
                {[
                  "Highly trained Gas Safe, OFTEC registered engineers",
                  "Friendly Attitude & A Commitment To Customer Service",
                  "Rate 5* On Google & 9.9/10 On Checkatrade",
                  "No Obligation Free Quotes",
                  "Honest & Upfront Pricing",
                  "Local Business & Team",
                  "Reliable Boilers & Products",
                  "Extended Boiler Guarantee's",
                  "Fast, Reliable Service"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-200 group-hover:bg-green-500 transition-colors">
                      <svg className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-slate-700 font-bold text-[1.05rem] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Quote Block */}
              <div className="relative pl-8 border-l-[3px] border-[#0ea5e9]">
                <svg className="absolute -top-2 -left-4 w-8 h-8 text-slate-200 bg-slate-50" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/></svg>
                <p className="text-slate-600 text-lg sm:text-[1.35rem] font-bold italic leading-relaxed mb-4 text-balance">
                  "At Tom Sutton Heating, our goal is not to just simply sell you a new boiler, but to find for you and offer you the perfect solution to your homes heating and hot water needs."
                </p>
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Ronan Sutton, Managing director</span>
              </div>
            </div>

            {/* Right Column: Media & Trust Signals */}
            <div className="flex flex-col gap-8 lg:gap-10">
              
              {/* Team Photo */}
              <div className="relative w-full h-[300px] sm:h-[400px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white transform transition-transform hover:scale-[1.02] duration-500">
                <Image src="https://i.postimg.cc/SsZTFfMC/people-photo.jpg" alt="Tom Sutton Heating Team" fill className="object-cover" unoptimized />
              </div>

              {/* Trust Logos Array */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-white px-8 py-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100">
                <a href="https://www.google.com/maps/place/Tom+Sutton+Heating/@50.7572451,-1.6704168,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487383d967293ef5:0x722abc9b62d8ffc2!8m2!3d50.7572451!4d-1.6704168!16s%2Fg%2F11b5pjq4ng?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="relative w-[180px] h-[55px] hover:scale-[1.05] transition-transform duration-300 transform origin-center">
                  <Image src="https://i.postimg.cc/5yrxGmSh/google.webp" alt="Google Customer Reviews" fill className="object-contain" unoptimized />
                </a>
                
                <div className="w-full sm:w-px h-px sm:h-16 bg-slate-100"></div>
                
                <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="relative w-[210px] h-[65px] hover:scale-[1.05] transition-transform duration-300 transform origin-center">
                  <Image src="https://i.postimg.cc/3rfJdKQY/checktrade.webp" alt="Checkatrade Approved" fill className="object-contain pointer-events-none" unoptimized />
                </a>
              </div>

              {/* Alpha Logo Standalone */}
              <div className="relative w-full h-[150px] px-10 py-8 bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center mt-2 group border-b-8 border-b-[#d91d29] hover:border-b-blue-600 transition-colors duration-500 overflow-hidden cursor-default">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                 <div className="relative w-[320px] h-full opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-[1.04] duration-500">
                   <Image src="https://i.postimg.cc/fRHSzQpt/alpha_logo.png" alt="Alpha Heating Innovation" fill className="object-contain" unoptimized />
                 </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
