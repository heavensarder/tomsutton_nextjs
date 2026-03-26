import Image from 'next/image';
import Link from 'next/link';

export default function RenewableTechnologyPage() {
  return (
    <main className="min-h-screen bg-[#f8fafd] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 sm:p-12 md:p-16 text-center overflow-hidden my-12">
        
        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-slate-500 uppercase">Renewable Partnership</span>
        </div>

        <h1 className="text-[2.25rem] sm:text-[3rem] font-black text-[#0d1033] tracking-tight leading-[1.1] mb-6">
          You are leaving Tom Sutton Heating.
        </h1>

        <p className="text-slate-600 text-[1.1rem] sm:text-[1.25rem] font-medium leading-[1.7] max-w-2xl mx-auto mb-14">
          To provide you with the absolute highest quality service in Renewable Technologies, we have officially partnered with <strong className="text-emerald-600 font-bold">SL Energy</strong>.
        </p>

        {/* Logos Display */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 mb-16 relative">
          
          {/* Tom Sutton Logo */}
          <div className="relative w-56 h-24 sm:w-64 sm:h-28 filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
            <Image 
              src="https://i.postimg.cc/V65kTYN4/tom_sutton_logo.webp" 
              alt="Tom Sutton Heating Logo" 
              fill 
              className="object-contain" 
              unoptimized
            />
          </div>

          {/* Connection Arrow/Plus */}
          <div className="w-14 h-14 rounded-full bg-[#f8fafd] flex items-center justify-center border-2 border-slate-100 text-slate-300 shadow-sm z-10 shrink-0 transform -rotate-90 sm:rotate-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>

          {/* SL Energy Logo */}
          <div className="relative w-56 h-24 sm:w-64 sm:h-28 transition-transform duration-500 transform hover:scale-110">
            <Image 
              src="https://i.postimg.cc/90kLPKtD/sl_energy_logo.webp" 
              alt="SL Energy Logo" 
              fill 
              className="object-contain drop-shadow-md" 
              unoptimized
            />
          </div>
          
        </div>

        <h3 className="text-[1.25rem] sm:text-[1.35rem] font-bold text-slate-800 mb-10 border-t border-slate-100 pt-10 px-4">
          Would you like to continue to the SL Energy website?
        </h3>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link 
            href="/" 
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-slate-200 text-slate-500 font-bold tracking-widest uppercase text-sm hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300 transition-all"
          >
            NO, RETURN HOME
          </Link>
          <a 
            href="https://sl-energy.co.uk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold tracking-widest uppercase text-sm shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all"
          >
            YES, PROCEED TO SL ENERGY
          </a>
        </div>
        
      </div>
    </main>
  );
}
