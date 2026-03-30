import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InteractiveSlider from '@/components/InteractiveSlider';
import ScrollAnimate from '@/components/ScrollAnimate';
import { getComponentData } from '@/lib/components';
import { ourServicesDefault } from '@/lib/defaultComponentsData';




export default async function OurServices() {
  const data = await getComponentData('our_services', ourServicesDefault);
  const servicesList = data.services || [];

  return (
    <section className="py-24 bg-[#eef2f9] overflow-hidden relative">
      <style dangerouslySetInnerHTML={{
        __html: `
        .text-outline-watermark {
          -webkit-text-stroke: 2px #eef2f9;
          color: transparent;
        }
      `}} />

      <ScrollAnimate animation="scaleUp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
        <span className="inline-flex items-center gap-2 text-[#ff4c24] text-sm font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-[#ff4c24] pulse-glow"></span>
          {data.subtitle}
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#0d1b42] mb-6 leading-tight max-w-3xl mx-auto">
          {data.title}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          {data.description}
        </p>
      </div>
      </ScrollAnimate>

      {/* The Track (Grid / Interactive Slider) */}
      <div className="relative w-full max-w-md mx-auto sm:max-w-2xl lg:max-w-none px-4 sm:px-6 lg:px-0 lg:flex lg:overflow-hidden">
        <InteractiveSlider>
          {/* The base array maps seamlessly. The duplicated tail array clones are hidden via CSS on mobile/tablet to prevent double-stacking in the grid. */}
          {[...servicesList, ...servicesList].map((service: any, idx: number) => (
            <div
              key={idx}
              className={`bg-white w-full lg:w-[380px] shrink-0 rounded-[2rem] p-4 pb-8 relative group shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.15)] transition-shadow duration-300 ${idx >= servicesList.length ? 'hidden lg:block' : ''}`}
            >

              {/* Image Container with Top Right Indent/Notch */}
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[220px] rounded-[1.5rem] rounded-tr-[4rem] overflow-hidden mb-6 bg-gray-200 isolation-auto z-10">
                <Image
                  src={service.image || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"}
                  alt={service.title || "Service"}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Overlapping Circular Icon Badge */}
              <div className="absolute top-[210px] sm:top-[250px] lg:top-[210px] left-8 sm:left-10 w-16 h-16 bg-[#2563eb] rounded-full border-[6px] border-white flex items-center justify-center z-20 text-white shadow-sm group-hover:bg-[#1d4ed8] transition-colors">
                <i className={`${service.iconId || 'fa-solid fa-temperature-arrow-up'} text-[28px]`}></i>
              </div>

              <div className="px-4 sm:px-6 pt-8 sm:pt-10 relative z-20">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0d1b42] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-[0.95rem] sm:text-base leading-[1.6] mb-8 line-clamp-3">
                  {service.description}
                </p>
                <Link href={service.link || '/'} className="inline-flex items-center gap-2 text-[#ff4c24] font-bold text-[0.9rem] sm:text-base hover:text-[#d93a18] transition-colors group/link">
                  View More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5v10M19 5H9" /></svg>
                </Link>
              </div>

              {/* Outlined Watermark Number */}
              <div className="absolute bottom-1 right-2 lg:right-4 text-7xl sm:text-8xl font-black text-outline-watermark select-none pointer-events-none z-10 group-hover:text-gray-50 transition-colors duration-500">
                {String((idx % Math.max(servicesList.length, 1)) + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </InteractiveSlider>
      </div>
    </section>
  );
}
