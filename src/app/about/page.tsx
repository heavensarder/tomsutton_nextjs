
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export default function AboutPage() {
  const whyChooseUsItems = [
    "Fast Reliable Service",
    "Highly Trained, Gas Safe, OFTEC Engineers",
    "Friendly Attitude & Commitment To Customer Service",
    "Rated 5* on Google & 9.9 out of 10 on Checkatrade",
    "No Obligation Free Quotes",
    "Honest & Upfront Pricing",
    "Local Business & Team",
    "Reliable Boilers",
    "Extended Guarantees"
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Premium Compact Hero Section - Ported from /new-boilers architecture */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10 min-h-[60vh]">
        {/* Deep Blurred Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-md scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-slate-800/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-[#60a5fa] uppercase mb-4">
                TOM SUTTON HEATING HISTORY
              </h3>

              <h1 className="text-[2.5rem] sm:text-4xl lg:text-[4rem] font-black tracking-tight leading-[1] mb-8 drop-shadow-md uppercase">
                ABOUT US
              </h1>
              
              <div className="space-y-5 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.6] text-blue-50 mb-10 max-w-[650px]">
                <p>
                  Tom Sutton Heating & Plumbing was founded in New Milton by Tom Sutton in 1988. Over the years we have evolved to specialise in boiler repairs, servicing and repairs and decided to rename the company Tom Sutton Heating, as heating services became the back bone of the business.
                </p>
                <p>
                  Now headed by Tom's son Ronan, we are proud to continue to carry out high quality boiler installations, boiler repairs, and boiler servicing in Lymington, New Milton, Highcliffe, Christchurch and all the way across the New Forest!!
                </p>
              </div>
            </div>

            {/* Right Media Area - Provided Tom & Ronan Graphic Asset */}
            <div className="w-full lg:w-[50%] relative mt-10 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[21/10] sm:aspect-[2/1] lg:aspect-[21/10] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10 transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:ring-white/30">
                <Image 
                  src="https://i.postimg.cc/g0Dzzz1h/About-Pic-1024x490.webp" 
                  alt="Tom Sutton and Ronan Sutton Family Business History Collage" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Blur Orbs behind the photo frame */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-sky-400/20 rounded-full blur-[50px] pointer-events-none"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
            </div>

          </div>
        </div>
        
        {/* Elegant Bottom Curve Divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[40px] sm:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C52.16,93.2,105.51,86.74,157.43,80.12h0c58-7.46,115.42-15.68,172-23.7Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Main Bottom Section - Why Choose Us & Form */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-[2.25rem] sm:text-4xl font-black text-slate-800 tracking-tight uppercase">
              WHY CHOOSE US?
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">
            
            {/* Left Column: Interactive Checkmark List */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <ul className="space-y-6">
                {whyChooseUsItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group cursor-default">
                    <div className="flex-shrink-0 mt-1">
                      {/* Checkmark Icon Match from Mockup */}
                      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md transform group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="font-bold text-slate-700 text-[1.15rem] leading-[1.4] group-hover:text-blue-600 transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Lead Form Wrapper */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[650px]">
                <h3 className="text-[1.75rem] font-bold text-slate-800 text-center mb-8 uppercase tracking-wide">
                  GET IN TOUCH
                </h3>
                
                {/* Embed robust LeadForm Component securely */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 sm:p-4">
                  <LeadForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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

    </main>
  );
}
