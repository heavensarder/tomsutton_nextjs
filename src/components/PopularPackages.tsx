import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from '@/components/ScrollAnimate';
import { getComponentData } from '@/lib/components';
import { popularPackagesDefault } from '@/lib/defaultComponentsData';

export default async function PopularPackages() {
  const data = await getComponentData('popular_packages', popularPackagesDefault);

  return (
    <section className="py-20 sm:py-32 bg-[#f8fafd] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d0bb]/30 to-transparent"></div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollAnimate animation="fadeUp">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-[#00d0bb] font-extrabold tracking-widest uppercase text-xs sm:text-sm mb-4 block">{data.headerBadge}</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-[#0d1033] tracking-tighter leading-tight mb-6">
            {data.heading}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{data.description}</p>
        </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">

          {/* Package 1: Standard */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
            <div className="mb-8 relative z-10">
              <h3 className="text-[1.75rem] font-black mb-2 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0bb] to-teal-600">{data.packages[0].type}</span>
              </h3>
              <div className="text-slate-500 font-bold text-[0.85rem] tracking-wider uppercase mb-6">{data.packages[0].subtitle}</div>

              <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,theme(colors.teal.50),transparent_70%)]">
                <Image src={data.packages[0].image} alt={data.packages[0].subtitle} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-4 drop-shadow-[0_20px_25px_rgba(0,208,187,0.15)] transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-gray-500 font-bold text-lg">from</span>
                <span className="text-4xl sm:text-5xl font-black text-[#0d1033] tracking-tight">£{data.packages[0].price}</span>
              </div>

              <Link href="/online-boiler-quote" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-center mb-10 transition-colors shadow-lg shadow-green-600/20">Get a quote now</Link>

              <ul className="space-y-4 flex-1">
                {data.packages[0].features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-gray-600 text-[0.95rem] font-medium items-start">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#00d0bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Package 2: Premium (PREMIUM CENTER) */}
          <div className="bg-[#0b1021] rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(255,106,0,0.3)] border border-[#1e274a] flex flex-col hover:-translate-y-2 transition-transform duration-500 scale-100 lg:scale-[1.05] z-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-[#ff6a00] text-white text-xs font-black px-4 py-1.5 rounded-bl-[1.5rem] uppercase tracking-widest shadow-lg">Most Popular</div>
            <div className="absolute -left-32 -top-32 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="mb-8 relative z-10">
              <h3 className="text-4xl font-black mb-2 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ff6a00] drop-shadow-sm">{data.packages[1].type}</span>
              </h3>
              <div className="text-white/60 font-bold text-[0.85rem] tracking-wider uppercase mb-6">{data.packages[1].subtitle}</div>

              <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center">
                <Image src={data.packages[1].image} alt={data.packages[1].subtitle} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-4 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-110" unoptimized />
              </div>
            </div>

            <div className="flex flex-col flex-1 relative z-10">
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-white/60 font-bold text-lg">from</span>
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">£{data.packages[1].price}</span>
              </div>

              <Link href="/online-boiler-quote" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg text-center mb-10 transition-all shadow-[0_15px_30px_-10px_rgba(22,163,74,0.5)]">Get a quote now</Link>

              <ul className="space-y-4 flex-1">
                {data.packages[1].features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-white/90 text-[0.95rem] font-medium items-start">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Package 3: Premium Plus */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
            <div className="mb-8 relative z-10">
              <h3 className="text-[1.75rem] font-black mb-2 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d1033] to-slate-600">{data.packages[2].type}</span>
              </h3>
              <div className="text-slate-500 font-bold text-[0.85rem] tracking-wider uppercase mb-6">{data.packages[2].subtitle}</div>

              <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,theme(colors.slate.100),transparent_70%)]">
                <Image src={data.packages[2].image} alt={data.packages[2].subtitle} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-2 drop-shadow-[0_20px_25px_rgba(13,16,51,0.15)] transition-transform duration-700 group-hover:scale-110" unoptimized />
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-gray-500 font-bold text-lg">from</span>
                <span className="text-4xl sm:text-5xl font-black text-[#0d1033] tracking-tight">£{data.packages[2].price}</span>
              </div>

              <Link href="/online-boiler-quote" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-center mb-10 transition-colors shadow-lg shadow-green-600/20">Get a quote now</Link>

              <ul className="space-y-4 flex-1">
                {data.packages[2].features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-gray-600 text-[0.95rem] font-medium items-start">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#00d0bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Simple Finance Note */}
        <div className="mt-16 max-w-4xl mx-auto text-center px-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#51a7be] mb-4">
            {data.financeTitle}
          </h3>
          <div className="space-y-3 text-gray-500 font-medium text-[0.95rem] sm:text-base leading-relaxed">
            <p>
              {data.financeText1}
            </p>
            <p>
              {data.financeText2}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
