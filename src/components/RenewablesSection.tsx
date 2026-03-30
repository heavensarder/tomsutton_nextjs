import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from '@/components/ScrollAnimate';

export default function RenewablesSection() {
  return (
    <section className="bg-slate-50 relative overflow-hidden flex flex-col lg:flex-row items-stretch border-y border-gray-100">

      {/* Image Side (Left) - Full Edge Bleed */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] xl:min-h-[700px] overflow-hidden group">
        <Image
          src="https://i.postimg.cc/wTQkkY7r/renwable-energy.jpg"
          alt="Modern solar panels on a premium residential roof"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/20 hidden lg:block z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent lg:hidden z-10 pointer-events-none"></div>
      </div>

      {/* Content Side (Right) */}
      <ScrollAnimate animation="fadeRight" className="w-full lg:w-1/2 flex items-center bg-slate-50 relative z-20 py-16 sm:py-20 lg:py-24">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 max-w-[800px] mx-auto lg:mx-0 lg:ml-0 lg:mr-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 w-max mb-6 lg:mb-8 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
            <span className="text-xs font-extrabold tracking-widest uppercase">Eco-Friendly Future</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-[#0d1033] tracking-tighter leading-[1.12] mb-6">
            Renewable Energy Technology & Air Source Heat Pumps
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
            Renewable technology in recent years has become a massive market globally. With more awareness of the environmental changes, rising fuel costs, and a need to move away from fossil fuels, Tom Sutton Heating now provide alternative heating and hot water solutions.
          </p>

          <Link href="/renewable-technology" className="group/btn relative w-max flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-[#ff6a00] text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-[#e65c00] transition-all shadow-[0_10px_20px_-10px_rgba(255,106,0,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(255,106,0,0.6)] hover:-translate-y-0.5 overflow-hidden">
            <span className="relative z-10">Learn more</span>
            <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
        </div>
      </ScrollAnimate>

    </section>
  );
}
