import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from '@/components/ScrollAnimate';
import { getComponentData } from '@/lib/components';
import { whyChooseUsDefault } from '@/lib/defaultComponentsData';

export default async function WhyChooseUs() {
  const data = await getComponentData('why_choose_us', whyChooseUsDefault);

  // Hardcode icons to map by index so we preserve the original design without needing full JSON SVG strings
  const featureIcons = [
    <svg key="1" className="w-6 h-6 text-[#0d1033]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key="2" className="w-6 h-6 text-[#0d1033]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    <svg key="3" className="w-6 h-6 text-[#0d1033]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    <svg key="4" className="w-6 h-6 text-[#0d1033]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
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
            <p className="text-gray-500 text-[15px] sm:text-base leading-[1.7] mb-8 max-w-xl">
              {data.description}
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 mb-8">
              {data.features.map((feature: any, i: number) => (
                <div key={i} className="flex gap-5 items-start p-5 sm:p-6 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-l-[3px] border-l-[#ff5e14] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#eef1fa] flex items-center justify-center shrink-0">
                    {featureIcons[i % featureIcons.length]}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0d1033] text-base sm:text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-gray-400 text-[13px] sm:text-sm leading-[1.65]">{feature.description}</p>
                  </div>
                </div>
              ))}
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
