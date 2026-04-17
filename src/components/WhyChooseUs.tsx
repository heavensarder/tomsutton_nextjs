import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from '@/components/ScrollAnimate';
import { getComponentData } from '@/lib/components';
import { whyChooseUsDefault } from '@/lib/defaultComponentsData';

export default async function WhyChooseUs() {
  const data = await getComponentData('why_choose_us', whyChooseUsDefault);


  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left: Image with overlapping cards */}
          <ScrollAnimate animation="fadeLeft" className="w-full lg:w-[48%] relative">
            {/* Main Image */}
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]">
              <Image
                src={data.image}
                alt="Tom Sutton Heating - Professional Engineer"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Stats Card - overlapping top right */}
            <div className="absolute top-6 -right-2 sm:right-4 lg:-right-4 bg-white rounded-2xl px-6 py-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-gray-100 z-20">
              <span className="text-[3rem] sm:text-[3.5rem] font-black text-[#0d1033] leading-none block tracking-tight">{data.statPercentage}</span>
              <p className="text-gray-400 text-xs sm:text-sm font-semibold mt-1">{data.statTextLine1}<br/>{data.statTextLine2}</p>
            </div>

            {/* Quote Card - overlapping bottom */}
            <div className="absolute -bottom-16 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-[340px] bg-[#0d1033] rounded-2xl p-5 sm:p-6 shadow-xl z-20">
              <div className="text-[#ff5e14] text-3xl font-serif mb-2">&ldquo;</div>
              <p className="text-white/90 text-sm sm:text-[15px] font-medium italic leading-[1.6] mb-4">
                {data.quoteText}
              </p>
              <div className="border-t border-white/15 pt-3">
                <p className="text-white font-bold text-sm">{data.quoteAuthor}</p>
                <p className="text-[#ff5e14] text-xs font-semibold">{data.quoteRole}</p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Right: Content */}
          <ScrollAnimate animation="fadeRight" delay={200} className="flex-1 pt-8 lg:pt-0">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider border-2 border-[#ff5e14]/20 bg-orange-50 px-5 py-2.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#ff5e14] pulse-glow"></span>
              {data.badge}
            </span>

            {/* Headline */}
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.6rem] font-black text-[#0d1033] tracking-tight leading-[1.15] mb-5">
              {data.heading}
            </h2>

            {/* Paragraph */}
            <p className="text-gray-500 text-[15px] sm:text-base leading-[1.7] mb-6 max-w-xl">
              We provide unparalleled service across Hampshire and Dorset. Trust our expert team to deliver long-lasting, high-quality heating and plumbing solutions tailored to your home.
            </p>

            {/* Premium Distinct Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {(data.features || []).map((text: string, i: number) => {
                const PRESET_ICONS = [
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>,
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                ];
                const icon = PRESET_ICONS[i % PRESET_ICONS.length];

                return (
                  <div key={i} className="relative flex items-center p-3 sm:p-4 bg-white border border-gray-100/80 rounded-2xl shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:border-gray-200 transition-all duration-300 overflow-hidden z-10 cursor-default">
                    {/* Permanently Active Icon Container block */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ml-1.5 mr-3 sm:mr-4 z-20 bg-[#0d1033] shadow-md shadow-blue-900/10">
                      <div className="text-white">
                        {icon}
                      </div>
                    </div>
                    
                    {/* Subtle Background accent line permanently active */}
                    <div className="absolute top-0 left-0 h-full w-1.5 bg-[#eef1fa] opacity-100"></div>
                    
                    {/* Main text container */}
                    <span className="font-extrabold text-[#0d1033] text-[13px] sm:text-[14px] leading-snug z-20 pr-2">
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link href={data.buttonLink} className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#0d1033] text-white rounded-xl font-bold text-[15px] hover:bg-[#ff5e14] transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              {data.buttonText}
              <div className="w-7 h-7 rounded-lg bg-[#ff5e14] group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5v10M19 5H9" /></svg>
              </div>
            </Link>
          </ScrollAnimate>

        </div>
      </div>
    </section>
  );
}
