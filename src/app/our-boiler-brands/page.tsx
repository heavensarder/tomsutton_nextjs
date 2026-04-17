import Image from 'next/image';
import Link from 'next/link';


export default function OurBoilerBrandsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section (Matching /new-boilers structure) */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10">
        {/* Deep Blurred Background Image Overlay identical to /new-boilers */}
        <div className="absolute inset-0 z-0 overflow-hidden" suppressHydrationWarning>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              <h1 className="text-[1.75rem] sm:text-3xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] mb-6 drop-shadow-md">
                OUR BOILER BRANDS
              </h1>
              
              <div className="space-y-4 text-[0.95rem] sm:text-base font-medium leading-[1.6] text-white overflow-hidden mb-10 max-w-[550px]">
                <p>
                  At Tom Sutton Heating we choose to work with a select few boiler brands that we trust and that we know can help us offer you a fantastic boiler installation service.
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-[#fb923c] text-white font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(251,146,60,0.3)] hover:shadow-[0_20px_40px_rgba(251,146,60,0.5)] hover:-translate-y-1 hover:bg-[#f97316]">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">CONTACT US TODAY</span>
              </Link>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/x1Z7JNSS/brand-page-hero-img.webp" 
                  alt="Specialist fitting new boiler interacting with customer" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  priority
                  unoptimized 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/30 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-white/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Selection Information & Logos Grid */}
      <section className="py-20 sm:py-32 bg-slate-50 relative z-0 overflow-hidden border-b border-gray-200">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 max-w-[1250px] relative z-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Text & Premium Interactive Cards */}
            <div className="flex flex-col w-full text-center lg:text-left">
              <span className="inline-flex items-center justify-center lg:justify-start text-blue-600 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
                <span className="w-8 h-px bg-blue-600 mr-4 hidden sm:block"></span>
                Trusted Brand Network
              </span>
              
              <h2 className="text-[2.25rem] sm:text-4xl lg:text-[2.75rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
                What boiler brand<br className="hidden sm:block lg:hidden xl:block"/> do I choose?
              </h2>
              
              <div className="w-20 h-1.5 bg-blue-600 mx-auto lg:mx-0 rounded-full mb-8 shadow-sm"></div>
              
              <p className="text-slate-600 font-medium text-[1.05rem] leading-[1.8] mb-12 max-w-2xl mx-auto lg:mx-0">
                With so much information available in this day and age it can be difficult to choose the right boiler brand for you. This is why here at Tom Sutton Heating we only work with a select few brands that we know inside out. This enables us to help you choose the tier that perfectly matches your home.
              </p>

              {/* Premium Interactive Selection Cards */}
              <div className="flex flex-col space-y-5 w-full max-w-xl mx-auto lg:mx-0">
                
                {/* Worcester Bosch Premium Card */}
                <Link href="/worcester-bosch" className="group relative flex items-center justify-between w-full bg-white border border-slate-200 p-5 sm:p-6 rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)] hover:border-sky-200 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-5 sm:gap-6 relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl flex items-center justify-center text-sky-600 shadow-sm border border-sky-100 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[0.65rem] sm:text-xs font-bold text-sky-500 uppercase tracking-[0.15em] mb-1.5">View Premium Tier</span>
                      <span className="text-slate-800 font-black text-lg sm:text-xl tracking-tight">Worcester Bosch</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-sky-500 group-hover:border-sky-500 transition-colors duration-500 relative z-10 hidden sm:flex">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>

                {/* Alpha Premium Card */}
                <Link href="/alpha" className="group relative flex items-center justify-between w-full bg-white border border-slate-200 p-5 sm:p-6 rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)] hover:border-red-200 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-5 sm:gap-6 relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center text-red-500 shadow-sm border border-red-100 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[0.65rem] sm:text-xs font-bold text-red-500 uppercase tracking-[0.15em] mb-1.5">View Value Tier</span>
                      <span className="text-slate-800 font-black text-lg sm:text-xl tracking-tight">Alpha Boilers</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-500 relative z-10 hidden sm:flex">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>

              </div>
            </div>

            {/* Right Column: Dynamic Asymmetrical Grid */}
            <div className="w-full relative mt-8 lg:mt-0">
              {/* Floating Label string mapped above grid */}
              <div className="absolute -top-10 left-4 text-xs font-black text-slate-300 tracking-[0.3em] uppercase hidden lg:block rotate-90 origin-left">Partner Network</div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Giant Primary Badge: Worcester Bosch - Takes full width of right col top row */}
                <div className="col-span-2 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                  <div className="relative w-full h-40 sm:h-48 bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-3xl flex items-center justify-center p-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                      <Image src="https://i.postimg.cc/DwgXz1kn/worcester_bosch_logo.png" alt="Worcester Bosch Accredited Installer" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                </div>

                {/* Secondary Large Badge: Alpha */}
                <div className="col-span-2 md:col-span-1 lg:col-span-1 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-red-500 rounded-3xl blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                  <div className="relative w-full h-32 sm:h-40 bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] rounded-[1.75rem] flex items-center justify-center p-6 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                      <Image src="https://i.postimg.cc/dVBy0GMb/Alpha_Logo.png" alt="Alpha Heating Innovation" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                </div>

                {/* Tertiary Logo Array Row Block */}
                <div className="col-span-2 md:col-span-2 lg:col-span-1 grid grid-rows-3 gap-4 sm:gap-6">
                  
                  <div className="w-full h-24 bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl flex items-center justify-center p-4 transition-transform duration-500 hover:-translate-y-1 hover:border-slate-300 group cursor-pointer">
                    <div className="relative w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-500">
                      <Image src="https://i.postimg.cc/JzqkhjVw/glow_worm.webp" alt="Glow Worm Boilers" fill className="object-contain" unoptimized />
                    </div>
                  </div>

                  <div className="w-full h-24 bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl flex items-center justify-center p-4 transition-transform duration-500 hover:-translate-y-1 hover:border-red-100 group cursor-pointer">
                    <div className="relative w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-500">
                      <Image src="https://i.postimg.cc/SxrMKc0H/Grant.webp" alt="Grant Boilers UK" fill className="object-contain" unoptimized />
                    </div>
                  </div>

                  <div className="w-full h-24 bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl flex items-center justify-center p-4 transition-transform duration-500 hover:-translate-y-1 hover:border-emerald-100 group cursor-pointer">
                    <div className="relative w-[80%] h-full mx-auto opacity-60 group-hover:opacity-100 transition-all duration-500">
                      <Image src="https://i.postimg.cc/K8NMYtXw/vaillant.webp" alt="Vaillant Heating" fill className="object-contain" unoptimized />
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* High-Conversion Lead Generation Hub */}
      <section className="bg-white py-20 sm:py-32 border-b border-slate-200 relative z-0 overflow-hidden">
        {/* Dynamic Background Split */}
        <div className="absolute top-0 right-0 w-full lg:w-[42%] h-full bg-slate-900 lg:rounded-l-[4rem] -z-10 shadow-2xl"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>

        <div className="container mx-auto px-4 max-w-[1250px] relative z-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Premium Lead Form Container */}
            <div className="col-span-1 lg:col-span-7 pr-0 lg:pr-10">
              <div className="text-center lg:text-left mb-10">
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[0.7rem] sm:text-xs tracking-widest uppercase mb-6 shadow-sm">
                  Fast & Free Boiler Quote
                </span>
                <h2 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
                  Ready to upgrade your<br className="hidden sm:block lg:hidden xl:block"/> heating system?
                </h2>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto lg:mx-0 rounded-full mb-8"></div>
                <p className="text-slate-600 font-medium text-[1.05rem] leading-[1.8] max-w-2xl mx-auto lg:mx-0 pr-0 lg:pr-10">
                  Fill out the form below and one of our expert engineers will be in touch shortly to discuss your custom boiler options. No obligations, just honest advice from a local trusted team.
                </p>
              </div>

              {/* Form Isolation Wrapper */}
              <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-6 sm:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(37,99,235,0.15)] ring-1 ring-slate-900/5">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-50/50 flex-shrink-0 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-50/50 flex-shrink-0 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                
              </div>
            </div>

            {/* Right Column: Dark Mode Trust Sidebar */}
            <div className="col-span-1 lg:col-span-5 text-white flex flex-col pt-16 lg:pt-0 lg:pl-10 relative">
              
              <h3 className="text-3xl sm:text-[2.5rem] leading-[1.1] font-black mb-12 tracking-tight">Why 1000+ local<br/> families choose<br className="hidden lg:block"/> Tom Sutton</h3>

              <ul className="space-y-8 mb-16">
                {[
                  { title: "Gas Safe Registered", desc: "Our engineers are fully accredited heating experts.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                  { title: "0% Finance Available", desc: "Spread the cost of your brand new boiler with ease.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Up to 12 Years Warranty", desc: "Total long-term peace of mind on selected brands.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-500/30 group-hover:border-blue-400/40 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold text-white mb-1.5 tracking-wide">{item.title}</h4>
                      <p className="text-slate-400 text-[0.95rem] leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Trust Badges Twin Box */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-auto">
                <a href="https://www.google.com/maps/place/Tom+Sutton+Heating/@50.7572451,-1.6704168,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487383d967293ef5:0x722abc9b62d8ffc2!8m2!3d50.7572451!4d-1.6704168!16s%2Fg%2F11b5pjq4ng?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex-1 w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 group cursor-pointer block">
                  <div className="relative w-[120px] h-10 mb-2 opacity-90 group-hover:opacity-100 transition-opacity"><Image src="https://i.postimg.cc/5yrxGmSh/google.webp" fill className="object-contain" alt="Google 5 Star Framework" unoptimized/></div>
                  <span className="text-[0.65rem] font-bold text-slate-400 tracking-widest uppercase text-center group-hover:text-slate-300 transition-colors">5 Star Rated</span>
                </a>
                
                <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex-1 w-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 group cursor-pointer block">
                  <div className="relative w-[120px] h-10 mb-2 opacity-90 group-hover:opacity-100 transition-opacity"><Image src="https://i.postimg.cc/3rfJdKQY/checktrade.webp" fill className="object-contain pointer-events-none" alt="Checkatrade Approved" unoptimized/></div>
                  <span className="text-[0.65rem] font-bold text-slate-400 tracking-widest uppercase text-center group-hover:text-slate-300 transition-colors">9.9/10 Score</span>
                </a>
              </div>

            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}
