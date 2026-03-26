import Image from 'next/image';
import Link from 'next/link';

export default function BoilerMaintenancePlansPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Custom Floating Banner Hero Section ported from Servicing */}
      <section className="relative w-full min-h-[380px] h-[55vh] max-h-[450px] lg:max-h-[600px] lg:h-[65vh] flex items-center overflow-hidden z-10 bg-[#f8fafd]">
        
        {/* Full-width and Regulated-height Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://i.postimg.cc/cLVr8bbR/Tom-Sutton-Heating-Boiler-Care-Plans-2.webp" 
            alt="Boiler Care Plans Background" 
            fill
            className="object-cover object-center" 
            unoptimized 
            priority
          />
        </div>

        {/* Floating Banner Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex items-center justify-center lg:justify-end lg:pr-[15%]">
          {/* Staggered Layout for Desktop, Centered for Mobile */}
          <div className="flex flex-col items-center lg:items-end max-w-[95%] sm:max-w-[700px] w-full transform scale-[0.85] sm:scale-100 origin-center lg:origin-right">
            
            {/* Top Blue Box: Main Heading (Full width of the container) */}
            <div className="bg-gradient-to-r from-[#4da6cd] to-[#2968b5] w-[100%] px-4 sm:px-12 py-5 sm:py-8 text-center flex items-center justify-center shadow-lg">
              <h1 className="text-white text-[1.8rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-none font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                Boiler Care Plans
              </h1>
            </div>
            
            {/* Bottom Red Box: Sub Heading (Narrower, staggered left edge) */}
            <div className="bg-gradient-to-r from-[#e0805c] to-[#cd322e] w-[92%] sm:w-[88%] px-4 sm:px-10 py-3 sm:py-4 text-center flex items-center justify-center shadow-md">
              <h2 className="text-[0.80rem] sm:text-[1.1rem] lg:text-[1.25rem] text-white font-medium tracking-[0.05em] uppercase m-0 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] whitespace-nowrap overflow-hidden text-ellipsis">
                SPREAD THE COST FOR PEACE OF MIND
              </h2>
            </div>
            
          </div>
        </div>
        
      </section>

      {/* Modern Split-Grid Information & Logo Slider Component mapped from Boiler Servicing */}
      <section className="bg-slate-50 py-24 lg:py-32 overflow-hidden border-t-4 border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
            
            {/* Left Column: Bold Heading & Primary Highlight */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6 shadow-sm">
                <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0d1033] uppercase">Premium Guarantee</span>
              </div>
              <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black text-[#0d1033] tracking-tight leading-[1.1] mb-8">
                Boiler Care Plans - <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">The Highest Level of Quality</span>
              </h3>
              <p className="text-slate-600 text-[1.05rem] sm:text-[1.2rem] font-medium leading-[1.7] max-w-[600px] mx-auto lg:mx-0">
                Choosing the right company to service your boiler is important. We believe that a company offering comprehensive boiler servicing options will give you the best service for your money. This is why we have created our boiler care plans.
              </p>
            </div>

            {/* Right Column: Distinct Advantage Cards */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              
              {/* Point 1: The Pitfall */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col sm:flex-row gap-6 sm:items-start group hover:-translate-y-1 transition-transform duration-500">
                <div className="w-14 h-14 shrink-0 bg-rose-50 rounded-2xl flex items-center justify-center border border-rose-100 group-hover:bg-rose-500 transition-colors duration-500 mt-1 mx-auto sm:mx-0">
                  <svg className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[1.15rem] sm:text-lg font-bold text-slate-800 mb-3">The Pitfalls of National Companies</h4>
                  <p className="text-slate-500 text-[0.95rem] sm:text-[1.05rem] leading-[1.7] font-medium">Many national companies offer care plans. However, in our opinion, they do not offer the level of quality we can provide when it comes to regular maintenance. Servicing a large quota of boilers every day often leads to poor quality work.</p>
                </div>
              </div>

              {/* Point 2: The Solution */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col sm:flex-row gap-6 sm:items-start group hover:-translate-y-1 transition-transform duration-500">
                <div className="w-14 h-14 shrink-0 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-500 transition-colors duration-500 mt-1 mx-auto sm:mx-0">
                  <svg className="w-7 h-7 text-emerald-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[1.15rem] sm:text-lg font-bold text-slate-800 mb-3">The Tom Sutton Difference</h4>
                  <p className="text-slate-500 text-[0.95rem] sm:text-[1.05rem] leading-[1.7] font-medium mb-6">By contrast, Tom Sutton Heating&apos;s engineers will take the time they need to ensure your boiler gets the service it requires, every visit.</p>
                  
                  {/* Subtle Callout Box */}
                  <div className="bg-[#f8fafd] p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group/box">
                    <p className="text-[0.9rem] font-semibold text-slate-700 mb-3">We offer three service options and a number of maintenance packages.</p>
                    <Link href="#terms" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group/link text-[0.95rem]">
                      Read our service plan terms
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes slide-logos {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-slider {
              animation: slide-logos 30s linear infinite;
            }
          ` }} />

          {/* New 4-Logo Infinite Scroll Slider */}
          <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-10">
            <div className="flex w-max animate-slider hover:[animation-play-state:paused] items-center">
              {[
                { src: "https://i.postimg.cc/d3k7Dghd/logo_1.webp", alt: "Glow-worm" },
                { src: "https://i.postimg.cc/Fzdf1wY3/logo_2.webp", alt: "Alpha" },
                { src: "https://i.postimg.cc/NF9yLZKr/logo_3.webp", alt: "Vaillant" },
                { src: "https://i.postimg.cc/tJZ178sF/logo_4.webp", alt: "Worcester" },

                { src: "https://i.postimg.cc/d3k7Dghd/logo_1.webp", alt: "Glow-worm" },
                { src: "https://i.postimg.cc/Fzdf1wY3/logo_2.webp", alt: "Alpha" },
                { src: "https://i.postimg.cc/NF9yLZKr/logo_3.webp", alt: "Vaillant" },
                { src: "https://i.postimg.cc/tJZ178sF/logo_4.webp", alt: "Worcester" },

                { src: "https://i.postimg.cc/d3k7Dghd/logo_1.webp", alt: "Glow-worm" },
                { src: "https://i.postimg.cc/Fzdf1wY3/logo_2.webp", alt: "Alpha" },
                { src: "https://i.postimg.cc/NF9yLZKr/logo_3.webp", alt: "Vaillant" },
                { src: "https://i.postimg.cc/tJZ178sF/logo_4.webp", alt: "Worcester" },

                { src: "https://i.postimg.cc/d3k7Dghd/logo_1.webp", alt: "Glow-worm" },
                { src: "https://i.postimg.cc/Fzdf1wY3/logo_2.webp", alt: "Alpha" },
                { src: "https://i.postimg.cc/NF9yLZKr/logo_3.webp", alt: "Vaillant" },
                { src: "https://i.postimg.cc/tJZ178sF/logo_4.webp", alt: "Worcester" }
              ].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-40 sm:w-48 md:w-56 h-20 sm:h-24 md:h-28 relative mx-8 sm:mx-12 transition-transform duration-300 transform hover:scale-110">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Care Plans Pricing Module */}
      <section className="bg-[#f0f4f8] py-20 lg:py-28 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px]">
          <h2 className="text-center text-[2.25rem] md:text-[2.75rem] font-bold text-[#354359] mb-16 tracking-tight drop-shadow-sm">
            Our Care Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Tier 1: Service Care */}
            <div className="bg-gradient-to-br from-[#418abf] to-[#2d6fa8] rounded-2xl p-8 sm:p-10 text-white shadow-[0_20px_40px_-15px_rgba(45,111,168,0.4)] flex flex-col transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(45,111,168,0.5)]">
              <h3 className="text-[1.75rem] font-bold text-center mb-6 leading-none tracking-wide text-white drop-shadow-md">Service Care</h3>
              <div className="w-full h-[1px] bg-white/20 mb-8"></div>
              
              <p className="text-[0.95rem] leading-[1.7] text-left mb-10 text-white/95">
                The Service Care Plan was created for customers with boilers still under warranty. Our annual service reminders and premium service option will keep your boiler under full warranty for its entire term. This plan is also great if your boiler is out of warranty. Leave it to Tom Sutton Heating to keep your boiler working safely and efficiently throughout its lifetime.
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow text-[0.95rem] font-medium">
                {[
                  { text: "Qualified expert engineers", available: true },
                  { text: "Premium boiler service and Gas Safety Certificate", available: true },
                  { text: "Discount on labour", available: true },
                  { text: "Priority call out", available: true },
                  { text: "Dedicated phone support", available: true },
                  { text: "Unlimited free call outs", available: false },
                  { text: "Boiler parts", available: false },
                  { text: "Heating parts", available: false },
                  { text: "Free emergency plumbing callouts", available: false }
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${feature.available ? 'text-white/95' : 'text-white opacity-40 blur-[0.6px] select-none hover:blur-none transition-all'}`}>
                    {feature.available ? (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-white drop-shadow-sm" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    ) : (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                    )}
                    <span className="leading-snug">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="w-full h-[1px] bg-white/20 mb-8 mt-auto"></div>
              
              <div className="text-center mb-8 text-white leading-none">
                <span className="text-[2rem] font-bold tracking-tight">£12</span>
                <span className="text-[1.2rem] font-bold ml-2">per month</span>
              </div>
              
              <a href="https://pay.gocardless.com/BRT0003WB0TSP4M" target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-white/80 py-3.5 rounded-sm font-bold text-sm tracking-wider hover:bg-white hover:text-[#2d6fa8] transition-all">
                SIGN UP TO PLAN
              </a>
            </div>

            {/* Tier 2: Service Care Plus */}
            <div className="bg-gradient-to-br from-[#4ea993] to-[#3a8b75] rounded-2xl p-8 sm:p-10 text-white shadow-[0_20px_40px_-15px_rgba(58,139,117,0.4)] flex flex-col transform scale-100 md:scale-105 z-10 transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(58,139,117,0.5)]">
              <h3 className="text-[1.75rem] font-bold text-center mb-6 leading-none tracking-wide text-white drop-shadow-md">Service Care Plus</h3>
              <div className="w-full h-[1px] bg-white/20 mb-8"></div>
              
              <p className="text-[0.95rem] leading-[1.7] text-left mb-10 text-white/95">
                This care plan comes with all the features of the Service Care Plan but with the addition of unlimited free call outs. This means that if you have a boiler or heating system breakdown, we will attend the job free of charge. You&apos;ll only have to pay for any replacement parts, if they&apos;re needed to fix the problem.
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow text-[0.95rem] font-medium">
                {[
                  { text: "Qualified expert engineers", available: true },
                  { text: "Premium boiler service and Gas Safety Certificate", available: true },
                  { text: "Discount on labour", available: true },
                  { text: "Priority call out", available: true },
                  { text: "Dedicated phone support", available: true },
                  { text: "Unlimited free call outs", available: true },
                  { text: "Boiler parts", available: false },
                  { text: "Heating parts", available: false },
                  { text: "Free emergency plumbing callouts", available: false }
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${feature.available ? 'text-white/95' : 'text-white opacity-40 blur-[0.6px] select-none hover:blur-none transition-all'}`}>
                    {feature.available ? (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-white drop-shadow-sm" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    ) : (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                    )}
                    <span className="leading-snug">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="w-full h-[1px] bg-white/20 mb-8 mt-auto"></div>
              
              <div className="text-center mb-8 text-white leading-none">
                <span className="text-[2rem] font-bold tracking-tight">£18.99</span>
                <span className="text-[1.2rem] font-bold ml-2">per month</span>
              </div>
              
              <a href="https://pay.gocardless.com/BRT0003WB1BHWK3" target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-white/80 py-3.5 rounded-sm font-bold text-sm tracking-wider hover:bg-white hover:text-[#3a8b75] transition-all">
                SIGN UP TO PLAN
              </a>
            </div>

            {/* Tier 3: Premium Care */}
            <div className="bg-gradient-to-br from-[#d95c43] to-[#ca4030] rounded-2xl p-8 sm:p-10 text-white shadow-[0_20px_40px_-15px_rgba(202,64,48,0.4)] flex flex-col transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(202,64,48,0.5)]">
              <h3 className="text-[1.75rem] font-bold text-center mb-6 leading-none tracking-wide text-white drop-shadow-md">Premium Care</h3>
              <div className="w-full h-[1px] bg-white/20 mb-8"></div>
              
              <p className="text-[0.95rem] leading-[1.7] text-left mb-10 text-white/95">
                Our Premium Care Plan does what it says on the tin. It takes the stress out of maintaining your heating system, covering parts and labour for your boiler and your heating system.
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow text-[0.95rem] font-medium">
                {[
                  { text: "Qualified expert engineers", available: true },
                  { text: "Premium boiler service and Gas Safety Certificate", available: true },
                  { text: "Discount on labour", available: true },
                  { text: "Priority call out", available: true },
                  { text: "Dedicated phone support", available: true },
                  { text: "Unlimited free call outs", available: true },
                  { text: "Boiler parts", available: true },
                  { text: "Heating parts", available: true },
                  { text: "Free emergency plumbing callouts", available: false }
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${feature.available ? 'text-white/95' : 'text-white opacity-40 blur-[0.6px] select-none hover:blur-none transition-all'}`}>
                    {feature.available ? (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-white drop-shadow-sm" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    ) : (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                    )}
                    <span className="leading-snug">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="w-full h-[1px] bg-white/20 mb-8 mt-auto"></div>
              
              <div className="text-center mb-8 text-white leading-none">
                <span className="text-[2rem] font-bold tracking-tight">£25.99</span>
                <span className="text-[1.2rem] font-bold ml-2">per month</span>
              </div>
              
              <a href="https://pay.gocardless.com/BRT0003WB1KWZCC" target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-white/80 py-3.5 rounded-sm font-bold text-sm tracking-wider hover:bg-white hover:text-[#ca4030] transition-all">
                SIGN UP TO PLAN
              </a>
            </div>

            {/* Tier 4: Complete Care */}
            <div className="bg-gradient-to-br from-[#df975e] to-[#cc753b] rounded-2xl p-8 sm:p-10 text-white shadow-[0_20px_40px_-15px_rgba(204,117,59,0.4)] flex flex-col transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(204,117,59,0.5)]">
              <h3 className="text-[1.75rem] font-bold text-center mb-6 leading-none tracking-wide text-white drop-shadow-md">Complete Care</h3>
              <div className="w-full h-[1px] bg-white/20 mb-8"></div>
              
              <p className="text-[0.95rem] leading-[1.7] text-left mb-10 text-white/95">
                For total peace of mind add plumbing repairs to the benefits of the Premium Care Plan. We&apos;ll handle all your heating and plumbing maintenance under our Complete Care plan, and give your systems the best possible attention.
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow text-[0.95rem] font-medium">
                {[
                  { text: "Qualified expert engineers", available: true },
                  { text: "Premium boiler service and Gas Safety Certificate", available: true },
                  { text: "Discount on labour", available: true },
                  { text: "Priority call out", available: true },
                  { text: "Dedicated phone support", available: true },
                  { text: "Unlimited free call outs", available: true },
                  { text: "Boiler parts", available: true },
                  { text: "Heating parts", available: true },
                  { text: "Free emergency plumbing callouts", available: true }
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${feature.available ? 'text-white/95' : 'text-white opacity-40 blur-[0.6px] select-none hover:blur-none transition-all'}`}>
                    {feature.available ? (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-white drop-shadow-sm" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    ) : (
                      <svg className="w-[1.125rem] h-[1.125rem] shrink-0 mt-1 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                    )}
                    <span className="leading-snug">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="w-full h-[1px] bg-white/20 mb-8 mt-auto"></div>
              
              <div className="text-center mb-8 text-white leading-none">
                <span className="text-[2rem] font-bold tracking-tight">£28.99</span>
                <span className="text-[1.2rem] font-bold ml-2">per month</span>
              </div>
              
              <a href="https://pay.gocardless.com/BRT0003WB1WY3RJ" target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-white/80 py-3.5 rounded-sm font-bold text-sm tracking-wider hover:bg-white hover:text-[#cc753b] transition-all">
                SIGN UP TO PLAN
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative bg-[#0d1b2a] py-20 lg:py-32 overflow-hidden border-t border-slate-800">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            
            {/* Left: Image Container */}
            <div className="w-full lg:w-5/12 relative max-w-[500px] mx-auto lg:mx-0">
              {/* Decorative background frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl transform -rotate-3 scale-[1.03] opacity-60"></div>
              <div className="relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] w-full rounded-3xl overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image 
                  src="https://i.postimg.cc/Bn2mddH1/Tom-Sutton-Heating-Boiler-Care-Plans-What-Happens-Next-2-768x683.webp" 
                  alt="Client consultation with gas engineer" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply pointer-events-none"></div>
              </div>
              
              {/* Floating Quote Icon */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-[#0d1b2a] text-[#0d1b2a]">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
            </div>

            {/* Right: Testimonial Content */}
            <div className="w-full lg:w-7/12 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Stars */}
              <div className="flex items-center gap-2 mb-8 mt-6 lg:mt-0">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-8 h-8 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] leading-[1.7] text-white font-medium italic mb-10 text-white/95">
                "Ronan had no problem diagnosing an unusual fault on my boiler. The part was quickly ordered and came back next evening to fit. Also serviced the boiler and now in good working order. Fantastic professional service and very competitively priced!"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center lg:justify-start gap-5">
                <div className="w-12 h-[3px] bg-amber-400 rounded-full hidden lg:block"></div>
                <div>
                  <h4 className="text-[1.5rem] font-bold text-amber-400 tracking-wide">Diane Price</h4>
                  <p className="text-white/60 text-[0.85rem] tracking-[0.2em] uppercase font-bold mt-1">Verified Customer</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Reassurance Section Component */}
      <section id="terms" className="bg-white py-20 lg:py-32 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
            
            {/* Context Card 1: Why Choose */}
            <div className="bg-indigo-50/40 rounded-3xl p-8 sm:p-10 border border-indigo-100/60 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-[1.35rem] lg:text-[1.5rem] font-bold text-slate-800 mb-5 leading-tight group-hover:text-indigo-600 transition-colors">Why Should I Choose a Care Plan?</h3>
              <p className="text-slate-600 text-[0.95rem] leading-[1.8] font-medium mb-4">
                On average 1 in 5 boilers breaks down each year in the UK, leading to repairs costing anywhere between £150 and £600.
              </p>
              <p className="text-slate-600 text-[0.95rem] leading-[1.8] font-medium">
                Signing up for one of our care plans helps you spread the cost of regular maintenance, and you can rest assured that we will have your heating back up and running as quickly as possible if your boiler breaks down.
              </p>
            </div>

            {/* Context Card 2: What Happens Now */}
            <div className="bg-emerald-50/40 rounded-3xl p-8 sm:p-10 border border-emerald-100/60 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-[1.35rem] lg:text-[1.5rem] font-bold text-slate-800 mb-5 leading-tight group-hover:text-emerald-600 transition-colors">What Happens Now?</h3>
              <p className="text-slate-600 text-[0.95rem] leading-[1.8] font-medium">
                Once signed up you will be contacted by a member of the team to arrange a service. During this service visit, we will assess your installation for pre-existing faults or anything else that may affect your care plan. You can read our <Link href="/boiler-maintenance-plans" className="text-emerald-600 hover:text-emerald-800 font-bold hover:underline">full terms and conditions here</Link>.
              </p>
            </div>

            {/* Context Card 3: Have a Question */}
            <div className="bg-sky-50/40 rounded-3xl p-8 sm:p-10 border border-sky-100/60 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white group">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-8 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-[1.35rem] lg:text-[1.5rem] font-bold text-slate-800 mb-5 leading-tight group-hover:text-sky-600 transition-colors">Have a Question?</h3>
              <p className="text-slate-600 text-[0.95rem] leading-[1.8] font-medium mb-8 flex-grow">
                Call us today on <a href="tel:01590631671" className="font-bold text-slate-800 hover:text-sky-600 transition-colors">01590 631671</a> or <a href="tel:07774673109" className="font-bold text-slate-800 hover:text-sky-600 transition-colors">07774 673109</a> if you have any questions about our Boiler Maintenance Plans, or, complete the form on our <Link href="/contact" className="text-sky-600 hover:text-sky-800 font-bold hover:underline">contact page</Link>, and we will be back in touch as soon as possible.
              </p>
              <Link href="/contact" className="mt-auto block w-full border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-2 py-3.5 rounded-full font-bold text-[0.8rem] tracking-wider transition-all uppercase">
                GO TO OUR CONTACT PAGE
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
