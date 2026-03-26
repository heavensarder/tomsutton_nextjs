'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const QuoteComponent = dynamic(() => import('@/components/QuoteComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-[#f38230] rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 font-bold tracking-widest uppercase">Booting Application...</p>
    </div>
  )
});

export default function OnlineBoilerQuotePage() {
  return (
    <main className="min-h-screen bg-slate-50 relative">
      
      {/* Decorative Full-Page Header Banner */}
      <div className="w-full bg-slate-900 pt-16 pb-32 sm:pt-20 sm:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621252179027-9db4f37803d1?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
             GET YOUR ONLINE BOILER QUOTE
           </h1>
           <p className="text-blue-100 font-medium text-[1.1rem] sm:text-[1.2rem] max-w-2xl mx-auto">
             Answer a few simple questions below to get an instant, highly accurate estimate for your new boiler installation. No obligations.
           </p>
        </div>
      </div>

      {/* Full Page Quote Engine Wrapper */}
      <section className="relative w-full -mt-20 sm:-mt-28 pb-20 z-20">
        <div className="container mx-auto px-2 sm:px-6 max-w-[1200px]">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 p-2 sm:p-6 lg:p-10 min-h-[600px] sm:min-h-[800px] flex flex-col relative overflow-hidden">
            
            {/* The secure React Wrapper linking external API sequence */}
            <div className="flex-1 w-full h-full relative">
               <QuoteComponent />
            </div>

          </div>
        </div>
      </section>

      {/* About Us Premium Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

            {/* Left Column: Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-start">
              <span className="inline-flex items-center gap-2 text-[#ff4c24] text-sm font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ff4c24]"></span>
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d1b42] mb-8 tracking-tight">
                About Tom Sutton Heating
              </h2>

              <div className="space-y-5 text-gray-600 font-medium text-[1.05rem] leading-[1.7] mb-10">
                <p>
                  Tom Sutton Heating is a Gas, LPG, Oil, Heating and plumbing company based in Lymington and surrounding areas. We are a family run business, established for over 30 years we offer valuable knowledge on heating systems both modern and old.
                </p>
                <p>
                  We carry out boiler installations, and boiler repairs in New Milton, Lymington, Brockenhurst, Southampton, Bournemouth, Ringwood, Christchurch, Highcliffe, and all the surrounding villages and towns in the New Forest area.
                </p>
                <p>
                  All work is carried out to the highest standards as we pride ourselves on keeping our customers happy and delivering their requirements at a competitive price.
                </p>
                <p>
                  We are Gas Safe and OFTEC registered.
                </p>
                <p className="text-[#0d1b42] font-semibold">
                  We understand that sometimes your gas, heating and plumbing needs can't wait, this is why we offer an out of hours call out service.<br />
                  So, if you need a plumber or a gas engineer in Lymington and surrounding areas, contact us now!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/about" className="px-8 py-4 bg-[#0d1b42] hover:bg-emerald-600 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(13,27,66,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(5,150,105,0.4)]">
                  More about us
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-50 text-[#0d1b42] border-[3px] border-[#0d1b42] font-bold rounded-xl transition-all hover:-translate-y-1">
                  Contact us
                </Link>
              </div>

              {/* Accreditations */}
              <div className="relative w-[280px] h-[90px] md:w-[320px] md:h-[110px]">
                <Image
                  src="https://i.postimg.cc/dtqCn4Nf/oftec-gassafe.webp"
                  alt="Gas Safe and OFTEC Registered"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Right Column: Image & Quote Card */}
            <div className="w-full lg:w-[45%] flex flex-col gap-8 mt-10 lg:mt-0">
              {/* Square Image Container (Fully Visible) */}
              <div className="relative w-full aspect-square sm:w-[90%] md:w-[80%] lg:w-full mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(13,27,66,0.15)] ring-1 ring-gray-900/5 group z-10">
                <Image
                  src="https://i.postimg.cc/TYFRhPbV/My-Post.webp"
                  alt="Ronan Sutton - Managing Director"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>

              {/* Stacked Quote Card (Moved down to prevent image hiding) */}
              <div className="w-full bg-[#0d1b42] rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 relative transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute -top-6 right-8 text-[#ff4c24] text-7xl font-serif opacity-30 select-none pointer-events-none">"</div>
                <p className="text-white/90 font-medium text-[1.05rem] sm:text-lg leading-[1.8] italic mb-6 relative z-10">
                  "At Tom Sutton Heating, our goal is not to just simply sell you a new boiler, but to find for you and offer you the perfect solution to your homes heating and hot water needs."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-wide">Ronan Sutton</h4>
                    <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase block mt-0.5">Managing Director</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
