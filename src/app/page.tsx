import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveSlider from '@/components/InteractiveSlider';
import FaqAccordion from '@/components/FaqAccordion';
import PopularPackages from '@/components/PopularPackages';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurServices from '@/components/OurServices';
import DynamicSlidingGallery from '@/components/DynamicSlidingGallery';
import ScrollAnimate from '@/components/ScrollAnimate';
import LocationContact from '@/components/LocationContact';
import VideoLightbox from '@/components/VideoLightbox';
import BlogSlider from '@/components/BlogSlider';
import pool from '@/lib/db';

export const revalidate = 60;

export default async function Home() {
  // Fetch Latest Blog Posts
  const [rows] = await pool.execute(`
    SELECT p.title, p.slug, p.excerpt, p.featured_image, p.published_at, c.name as category_name
    FROM blog_posts p
    LEFT JOIN blog_categories c ON p.category_id = c.id
    WHERE p.status = 'published'
    ORDER BY p.published_at DESC
    LIMIT 4
  `);
  const latestPosts = rows as any[];
  return (
    <main className="flex-1 w-full bg-slate-50 relative overflow-x-hidden">
      {/* Hero Section - Matching New Design Pattern */}
      <section className="relative w-full min-h-[calc(100vh-140px)] flex items-center overflow-hidden bg-gradient-to-r from-[#0d1033] via-[#2d3266] to-[#8f96b8] pt-20 lg:pt-10 pb-24 lg:pb-20">

        {/* Background SVG Curve Effect across entire screen width */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-100 400 C300 400, 400 200, 700 200 L950 200 C1100 200, 1100 650, 1300 650 L1500 650" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="700" cy="200" r="7" fill="#ff5e14" />
            <circle cx="1065" cy="425" r="5" fill="#ff5e14" stroke="white" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear" x1="-100" y1="400" x2="1500" y2="650" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.5" stopColor="white" stopOpacity="0.8" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated Floating Particles */}
        <div className="absolute top-[15%] right-[10%] w-20 h-20 border-2 border-white/10 rounded-full animate-slow-spin pointer-events-none z-0"></div>
        <div className="absolute bottom-[20%] left-[5%] w-3 h-3 bg-[#00d0bb]/40 rounded-full animate-gentle-float pointer-events-none z-0"></div>
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-[#ff5e14]/30 rounded-full animate-gentle-float pointer-events-none z-0" style={{ animationDelay: '1.5s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-16">

          {/* Left Content Area */}
          <div suppressHydrationWarning className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 sm:px-0 lg:pr-6 relative z-10">
            {/* Layered Titles matching reference layout */}
            <div className="flex flex-col space-y-2 mb-8 tracking-tight w-full items-center lg:items-start">
              {/* Boxed Text 1 - Gradient (No Shadow) */}
              <div className="bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] px-6 py-2 sm:py-3 rounded-2xl rounded-bl-sm inline-block w-fit max-w-full mb-2 relative z-20 border border-orange-400/50 text-center">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter block break-words">Expert Boiler</span>
              </div>
              {/* Boxed Text 2 - Dark transparent */}
              <div className="bg-[#0b0f24]/90 backdrop-blur-md px-6 py-2 sm:py-3 rounded-2xl inline-block w-fit max-w-full shadow-xl border border-white/10 relative z-10 -mt-4 sm:-mt-5 text-center">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter block break-words">Installations &</span>
              </div>
              {/* Floating Text 3 */}
              <div className="px-6 py-1 max-w-full text-center lg:text-left">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter drop-shadow-md block break-words">Repairs You Can</span>
              </div>
              <div className="px-6 py-1 max-w-full text-center lg:text-left">
                <span className="text-white font-extrabold text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter drop-shadow-md block break-words">Trust</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full mb-8 sm:pl-6 relative items-center lg:items-start justify-center lg:justify-start">
              {/* Small connecting line in the paragraph area matching design */}
              <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-[2px] bg-white/20"></div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-md font-medium text-center lg:text-left">
                The boiler installation and maintenance specialists! Keeping families warm with our expert boiler installations and repairs in New Milton, Christchurch, Highcliffe, Lymington, Brockenhurst and all over the New Forest.
              </p>
            </div>

            {/* Primary 'Get A Quote' CTA */}
            <div className="mb-10 w-full flex justify-center lg:justify-start sm:pl-6 relative z-30">
                <Link href="/online-boiler-quote" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] px-8 py-3.5 sm:py-4 font-bold text-white shadow-[0_10px_20px_-10px_rgba(255,94,20,0.6)] transition-all hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(255,94,20,0.8)] flex items-center gap-3">
                  <span className="relative z-10 tracking-wide uppercase text-[15px]">GET A QUOTE</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
            </div>

            {/* Action Buttons Block - Strictly Horizontal Row */}
            <div className="mt-8 flex flex-row items-stretch justify-center w-[98%] sm:w-full max-w-[360px] sm:max-w-3xl mx-auto lg:mx-0 self-center lg:self-start relative z-30 shadow-xl rounded-[10px] sm:rounded-xl overflow-hidden font-bold">
              <Link href="/online-boiler-quote" className="bg-gradient-to-b from-[#3a82c9] to-[#255688] text-white px-1 sm:px-6 py-3 sm:py-4 flex-1 flex items-center justify-center text-center transition-colors hover:brightness-110">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold tracking-wide drop-shadow-md leading-tight">Instant Boiler Quote</span>
              </Link>
              <Link href="/boiler-breakdowns" className="bg-gradient-to-b from-[#e87950] to-[#b85b37] text-white px-1 sm:px-6 py-3 sm:py-4 flex-1 flex items-center justify-center text-center transition-colors border-l border-white/20 hover:brightness-110">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold tracking-wide drop-shadow-md leading-tight">Boiler Repairs</span>
              </Link>
              <Link href="/boiler-servicing" className="bg-gradient-to-b from-[#5cc9e6] to-[#429cb5] text-white px-1 sm:px-6 py-3 sm:py-4 flex-[1.2] flex items-center justify-center text-center transition-colors border-l border-white/20 hover:brightness-110">
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-extrabold tracking-wide drop-shadow-md leading-tight">Boiler Servicing & Care Plans</span>
              </Link>
            </div>

          </div>

          {/* Right Image & Floating Glass Elements Area */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 h-[450px] sm:h-[550px] lg:h-[650px] flex justify-center lg:justify-end z-20">

            {/* Local wireframe SVG just for the image block */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block z-30">
              {/* Sharp 90-degree lines connecting the floating tags, mimicking design */}
              <svg className="absolute w-[600px] h-[600px] -left-[150px] top-[50px]" fill="none">
                <path d="M 50 250 L 150 250 L 150 450 L 250 450" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="250" cy="450" r="4" fill="#ff5e14" />
              </svg>
            </div>

            {/* Main Image Mask/Shape - sharp edges & rounded corners combination */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] h-full z-10 rounded-[2rem] sm:rounded-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/10 group">
              <Image
                src="https://i.postimg.cc/W3dP0VTH/hero-image.webp"
                alt="Tom Sutton Heating Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f24]/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Tag Top Left */}
            <div className="absolute top-[5%] sm:top-[10%] left-[-2%] sm:left-[-5%] lg:left-[-10%] z-40 animate-gentle-float">
              <div className="bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/20 border border-orange-400/50">
                A-Rated Boilers
              </div>
            </div>

            {/* Floating Tag Bottom Left */}
            <div className="absolute bottom-[25%] sm:bottom-[35%] lg:bottom-auto lg:top-[485px] left-0 sm:left-[5%] lg:left-[20px] z-40">
              <div className="bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/20 border border-orange-400/50">
                Gas Safe
              </div>
            </div>

            {/* Floating Review Card (Checkatrade) */}
            <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="absolute top-[35%] sm:top-[40%] right-[-2%] sm:right-[-10%] lg:right-[-5%] z-50 bg-[#060818] rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10 w-44 sm:w-56 transition-transform duration-500 hover:-translate-y-2 group block">
              <div className="flex gap-1 mb-2 justify-center">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#ff5e14]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <h4 className="text-white font-extrabold text-lg sm:text-xl leading-tight mb-1 text-center tracking-tight group-hover:text-blue-400 transition-colors">Checkatrade</h4>
              <p className="text-gray-400 text-[10px] sm:text-xs text-center font-medium">9.94/10 (360+ Reviews)</p>
            </a>

            {/* Play Button intentionally removed */}

          </div>

        </div>
      </section>

      {/* Who We Are — Premium About Section */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ROW 1: Badge left + Headline right — same line on desktop */}
          <ScrollAnimate animation="fadeUp">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row gap-4 lg:gap-12 mb-8 lg:mb-10">
            <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider border-2 border-[#ff5e14]/20 bg-orange-50 px-5 py-2.5 rounded-full shrink-0 w-max lg:mt-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5e14] pulse-glow"></span>
              Who We Are
            </span>
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] font-black text-[#0d1033] tracking-tight leading-[1.15]">
              Delivering Reliable{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-[#ff8c42]">Heating</span>
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 10" fill="none"><path d="M2 7 C50 2, 150 2, 198 7" stroke="url(#underline_grad)" strokeWidth="3.5" strokeLinecap="round"/><defs><linearGradient id="underline_grad" x1="0" y1="0" x2="200" y2="0"><stop stopColor="#ff5e14" /><stop offset="1" stopColor="#ff8c42" /></linearGradient></defs></svg>
              </span>
              {' & '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#90e0ef]">Cooling</span>
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 10" fill="none"><path d="M2 7 C50 2, 150 2, 198 7" stroke="url(#underline_grad_cool)" strokeWidth="3.5" strokeLinecap="round"/><defs><linearGradient id="underline_grad_cool" x1="0" y1="0" x2="200" y2="0"><stop stopColor="#00b4d8" /><stop offset="1" stopColor="#90e0ef" /></linearGradient></defs></svg>
              </span>
              {' '}Solutions and Unmatched Comfort for Homes Across the New Forest
            </h2>
          </div>
          </ScrollAnimate>

          {/* ROW 2: Stats Card left + Content right */}
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-14">

            {/* Stats Card — matching reference: number + vertical strip + rating + avatars */}
            <ScrollAnimate animation="fadeLeft" delay={100} className="shrink-0 order-2 lg:order-1 self-center lg:self-start">
              <div className="bg-gradient-to-br from-[#eef1fa] to-[#f5f7ff] rounded-[1.5rem] overflow-hidden inline-flex">
                {/* Left part: number + rating + avatars */}
                <div className="py-6 pl-6 pr-3 sm:py-7 sm:pl-7 sm:pr-4 flex flex-col">
                  <span className="text-[7rem] sm:text-[8rem] font-black text-[#0d1033] leading-[0.8] tracking-tighter mb-4 animate-counter-pop">30</span>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[1.75rem] font-black text-[#0d1033] tracking-tight">9.94</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-3.5 h-3.5 text-[#ff5e14] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-[11px] font-semibold mb-3">Based on 360+ Reviews</p>
                  <div className="flex -space-x-2">
                    {[
                      <svg key={0} className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                      <svg key={1} className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                      <svg key={2} className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                      <svg key={3} className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
                    ].map((icon, i) => (
                      <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-[2.5px] border-white flex items-center justify-center shadow-sm">{icon}</div>
                    ))}
                    <div className="w-9 h-9 rounded-full bg-[#ff5e14] border-[2.5px] border-white flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                    </div>
                  </div>
                </div>
                {/* Right strip: vertical text */}
                <div className="bg-[#e8ecf8] flex items-center justify-center px-3 sm:px-4">
                  <span className="text-[#0d1033] font-bold text-[13px] sm:text-sm italic whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    Years of Work Experience
                  </span>
                </div>
              </div>
            </ScrollAnimate>

            {/* Right Content: text + image + button */}
            <ScrollAnimate animation="fadeRight" delay={200} className="flex-1 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-gray-500 text-[15px] sm:text-base leading-[1.7] mb-6 max-w-xl">
                We&apos;re not just installing boilers—we&apos;re the local team New Forest families trust when it matters most. Led by Managing Director Ronan Sutton, our engineers combine three decades of heritage with the forward-thinking technology of SL Energy Ltd, delivering next-day installations and out-of-hours emergency calls across New Milton, Lymington, and Christchurch.
              </p>

              {/* YouTube Video with decorative accents */}
              <div className="relative w-full sm:max-w-lg mb-5">
                <div className="absolute -left-2.5 top-3 bottom-3 w-1 bg-[#ff5e14] rounded-full z-20"></div>
                <div className="absolute -right-2.5 top-6 bottom-6 w-1 bg-[#0bdacb] rounded-full z-20"></div>
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#0bdacb] rounded-full z-20"></div>
                <VideoLightbox videoId="wxsnvRy0I34" title="Tom Sutton Heating - Company Video" />
              </div>

              {/* CTA Button */}
              <Link href="/about" className="group inline-flex items-center gap-3 px-6 py-3 bg-[#0d1033] text-white rounded-xl font-bold text-[15px] hover:bg-[#ff5e14] transition-all duration-300 shadow-lg hover:-translate-y-0.5 w-max">
                Discover More
                <div className="w-7 h-7 rounded-lg bg-[#ff5e14] group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5v10M19 5H9" /></svg>
                </div>
              </Link>
            </ScrollAnimate>

            {/* Far Right: Service Highlights & Accreditations */}
            <div className="hidden xl:flex shrink-0 w-[240px] order-3 flex-col justify-center gap-4">
              {[
                { icon: <svg className="w-5 h-5 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, text: 'Gas Safe Registered' },
                { icon: <svg className="w-5 h-5 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, text: 'OFTEC Registered' },
                { icon: <svg className="w-5 h-5 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: 'Next Day Installations' },
                { icon: <svg className="w-5 h-5 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, text: 'Out of Hours Service' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gradient-to-br from-[#f8f9fc] to-white rounded-xl px-4 py-3.5 shadow-sm border border-gray-100 hover:border-[#ff5e14]/30 hover:shadow-md transition-all duration-300 group/item">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[13px] font-bold text-[#0d1033] group-hover/item:text-[#ff5e14] transition-colors">{item.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Responsive Services Section (Grid on Mobile, Infinite Slider on Desktop) */}
      <OurServices />

      {/* Why Choose Tom Sutton Heating Section */}
      <WhyChooseUs />

      {/* Popular Packages Section */}
      <PopularPackages />

      {/* FAQ Section */}

      {/* Full-Width CTA Banner Section */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '380px' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="https://i.postimg.cc/HWMDSrhV/background_image.jpg" alt="Background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0a1e4e]/30"></div>
        </div>

        {/* Air Conditioner - Top Center */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[240px] sm:w-[320px] lg:w-[360px] h-[100px] sm:h-[130px] lg:h-[150px] z-20 pointer-events-none">
          <Image src="https://i.postimg.cc/B6c56cvg/air-conditionar.png" alt="Air Conditioner Unit" fill className="object-contain drop-shadow-2xl" />
        </div>

        {/* Left Character */}
        <div className="hidden lg:block absolute -left-4 bottom-0 w-[320px] xl:w-[370px] h-full z-20 pointer-events-none">
          <Image src="https://i.postimg.cc/dQCPWhx7/lest_side_man_image.png" alt="Engineer" fill className="object-contain object-left-bottom" />
        </div>

        {/* Right Character */}
        <style dangerouslySetInnerHTML={{ __html: `@keyframes floatUpDown { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }` }} />
        <div className="hidden lg:block absolute right-0 xl:right-8 bottom-0 w-[260px] xl:w-[300px] z-20 pointer-events-none" style={{ height: '110%', animation: 'floatUpDown 3s ease-in-out infinite' }}>
          <Image src="https://i.postimg.cc/FFS5PYB1/right_side_cartoon.png" alt="Technician" fill className="object-contain object-bottom" />
        </div>

        {/* Full-Width Center Content */}
        <div className="relative z-30 w-full text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-14 sm:pb-16 lg:px-[300px] xl:px-[360px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-black text-white leading-[1.15] tracking-tight mb-4 drop-shadow-lg italic">
            Feeling the Cold? Let&apos;s Make Your Home the Warmest Place on the Block!
          </h2>
          <p className="text-white/75 text-xs sm:text-sm leading-[1.7] mb-6 max-w-2xl mx-auto">
            From emergency boiler repairs to full installations, our Gas Safe engineers are ready to keep your family warm all year round across the New Forest.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#0d1033] rounded-full font-bold text-[15px] hover:bg-[#ff5e14] hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-0.5">
            Get in Touch
            <div className="w-7 h-7 rounded-full bg-[#ff5e14] group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Boiler Installation CTA */}
      <section className="py-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1021] rounded-[2rem] p-8 sm:p-12 md:p-14 shadow-2xl flex flex-col lg:flex-row items-stretch justify-start relative overflow-hidden group">
            {/* Left side glowing gradient */}
            <div className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[60%] h-[150%] bg-[#00e5cc] opacity-20 blur-[100px] pointer-events-none z-0"></div>

            {/* Left Column (Text & Button) */}
            <div className="w-full lg:w-[50%] relative z-10 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold mb-8 leading-[1.05] tracking-tight">
                <span className="text-[#00e5cc]">Need a new boiler?</span><br className="hidden lg:block" />
                <span className="text-white">No problem! We can <br className="hidden lg:block" />help!</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-10 lg:mb-12">
                {[
                  "Express Boiler Installation",
                  "Next Day Boiler Install",
                  "Finance Options Available",
                  "13 Year Warranty on Selected Boilers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-bold text-white text-[0.95rem] tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              {/* Button moved to the left side below checkmarks */}
              <div className="flex justify-start relative z-10 w-full mt-4 sm:mt-0">
                <Link href="/online-boiler-quote" className="group/quote w-full sm:w-max flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 bg-[#ff6a00] text-white rounded-xl font-bold text-[16px] sm:text-lg hover:bg-[#e65c00] transition-all shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] hover:-translate-y-1">
                  <span className="text-center whitespace-nowrap">Get an online quote today</span>
                  <svg className="w-5 h-5 shrink-0 group-hover/quote:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right Column (Vertical Image) */}
            <div className="w-full lg:w-[45%] lg:absolute lg:inset-y-6 lg:right-6 relative min-h-[350px] sm:min-h-[450px] lg:min-h-0 rounded-[1.5rem] overflow-hidden mt-10 lg:mt-0 shadow-2xl z-10 hidden sm:block border-4 border-[#121a36]">
              <Image
                src="https://i.postimg.cc/XNcGYZVS/boiler-installation.webp"
                alt="Boiler system installation"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Renewables Feature Section */}
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

      {/* Services Marquee Ticker */}
      <section className="py-8 sm:py-10 bg-white relative overflow-hidden border-y border-gray-100">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff5e14] via-[#ff8c42] to-[#ff5e14]"></div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-left { animation: marqueeLeft 80s linear infinite; }
          .marquee-right { animation: marqueeRight 80s linear infinite; }
          .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
          .text-stroke-dark {
            -webkit-text-stroke: 2px #0d1033;
            color: transparent;
          }
        `}} />

        {/* Row 1 - Scrolls Left */}
        <div className="flex items-center marquee-left" style={{ width: 'max-content' }}>
          {[0, 1].map(set => (
            <div key={set} className="flex items-center shrink-0">
              {[
                'Boiler Installation',
                'Boiler Servicing',
                'Boiler Repairs',
                'Air Source Heat Pumps',
                'Ground Source Heat Pumps',
                'Gas, LPG, and Oil Heating',
                'Landlord Gas Safety Certificates',
              ].map((service, i) => (
                <div key={`${set}-${i}`} className="flex items-center shrink-0">
                  <span className={`font-black text-3xl sm:text-4xl lg:text-[2.75rem] italic tracking-tight whitespace-nowrap px-6 sm:px-10 ${i % 2 === 0 ? 'text-[#0d1033]' : 'text-stroke-dark'}`}>{service}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5e14] shrink-0"></span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </section>

      {/* Ultra-Premium Smart Home Section */}
      <section className="relative py-24 sm:py-32 bg-[#050B14] overflow-hidden">
        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00d0bb]/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

            {/* Left Content Area - High End Typography */}
            <ScrollAnimate animation="fadeLeft" className="w-full lg:w-[45%] flex flex-col items-start text-left order-2 lg:order-1 relative z-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase">Next-Gen Heating</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tighter mb-8 text-white">
                We are ready to bring affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0bb] to-emerald-400">Smart Home</span> solutions to you
              </h2>

              <div className="space-y-6 text-gray-400 font-medium text-lg sm:text-[1.15rem] leading-[1.7] mb-12">
                <p>
                  We are now <strong className="text-white font-bold">Nest Pro installers</strong>. This means we can offer fantastic deals on Nest thermostats right directly to your door.
                </p>
                <p>
                  If you haven't heard about Nest, take a look at our Nest Thermostat page for more details and to see how Nest can digitally optimize your home and save you serious money on your heating bills.
                </p>
              </div>

              <Link href="/nest-thermostat-installation" className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-[#00d0bb] to-emerald-500 opacity-100 shadow-[0_0_40px_rgba(0,208,187,0.4)] group-hover:shadow-[0_0_60px_rgba(0,208,187,0.6)] group-hover:from-emerald-400 group-hover:to-[#00d0bb] transition-all duration-500"></div>
                <div className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[14px] bg-[#050B14]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <span className="relative flex items-center gap-3 text-lg tracking-wide z-10">
                  Learn more
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            </ScrollAnimate>

            {/* Right Media Area - Abstract 3D Glassmorphic Display */}
            <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end order-1 lg:order-2 group">
              {/* Main Image Frame */}
              <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-[2.5rem] overflow-hidden transform transition-transform duration-1000 lg:rotate-[-2deg] hover:rotate-0 shadow-[0_20px_50px_rgba(0,208,187,0.15)] ring-1 ring-white/10 z-10">
                <Image
                  src="https://i.postimg.cc/k48j3jym/Tom-Sutton-Heating-NEST.webp"
                  alt="Premium Nest Thermostat Installation"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Glassmorphic UI Element */}
              <div className="absolute -left-4 sm:left-4 lg:-left-12 -bottom-10 sm:-bottom-12 z-20 w-48 sm:w-64 glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl transform transition-transform duration-700 hover:-translate-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Target Temp</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter">20</span>
                    <span className="text-2xl text-emerald-400 font-bold">&deg;C</span>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Orb */}
              <div className="absolute top-10 -right-8 z-20 w-24 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl flex items-center justify-center animate-[bounce_6s_infinite]">
                <svg className="w-10 h-10 text-[#00d0bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SL Energy Partnership Section */}
      <section id="renewables" className="scroll-mt-24 py-20 sm:py-28 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none -mr-40 -mt-40"></div>
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>

        {/* Gallery Animation Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes galleryScrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes galleryScrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .gallery-row-left {
            animation: galleryScrollLeft 30s linear infinite;
          }
          .gallery-row-right {
            animation: galleryScrollRight 30s linear infinite;
          }
          .gallery-row-left:hover, .gallery-row-right:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">

            <DynamicSlidingGallery />

            {/* Right: Logo + Content */}
            <ScrollAnimate animation="fadeRight" delay={150} className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left relative z-10">
              {/* Logo at top */}
              <div className="relative w-full max-w-[360px] aspect-[16/9] mb-8 mx-auto lg:mx-0 drop-shadow-[0_15px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-500">
                <Image
                  src="https://i.postimg.cc/90kLPKtD/sl-energy-logo.webp"
                  alt="SL Energy Renewables Partner Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="inline-flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-5 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full w-max mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Strategic Partnership
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-black text-[#0d1b42] mb-6 leading-[1.1] tracking-tight">
                Your Trusted Partner for Renewables in <span className="text-emerald-500">Hampshire</span> and <span className="text-emerald-500">Dorset</span>
              </h2>

              <p className="text-gray-500 text-base md:text-[1.05rem] leading-[1.8] mb-8 font-medium max-w-2xl">
                Tom Sutton Heating are proud to be part of <strong className="text-slate-800 font-bold">SL Energy</strong>, an amalgamation of two companies both established for over 30 years. Fronted by two experienced heating &amp; plumbing engineers, SL Energy has been formed to bring you ultra-efficient heating and plumbing systems whether it be a renewable, gas, oil or electric system.
              </p>

              <a
                href="https://www.sl-energy.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0d1b42] text-white rounded-xl font-bold text-lg hover:bg-emerald-500 transition-colors duration-300 shadow-[0_15px_30px_rgba(13,27,66,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 group w-max mx-auto lg:mx-0"
              >
                Find Out More
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </ScrollAnimate>

          </div>
        </div>
      </section>

      {/* Location & Contact Section */}

    <section className="py-20 sm:py-28 bg-[#eef1fa] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-8 lg:left-20 w-16 h-16 text-[#0d1033]/10 pointer-events-none select-none">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>
        </div>
        <div className="absolute top-16 right-12 lg:right-32 w-12 h-12 text-[#ff5e14]/15 pointer-events-none select-none">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>
        </div>
        <div className="absolute bottom-24 right-20 lg:right-40 w-20 h-20 text-[#0bdacb]/10 pointer-events-none select-none rotate-12">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>
        </div>
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0d1033 0, #0d1033 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider border-2 border-[#ff5e14]/20 bg-white px-5 py-2.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#ff5e14]"></span>
              FAQs
            </span>
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.8rem] font-black text-[#0d1033] tracking-tight leading-[1.15] italic">
              Answers to Your Most<br className="hidden sm:block" /> Common Queries!
            </h2>
          </div>

          {/* Accordion */}
          <FaqAccordion items={[
            {
              question: 'What types of boilers do you install?',
              answer: 'We install a full range of boilers including combi boilers, system boilers, and regular (heat-only) boilers. We are accredited installers for Worcester Bosch, Alpha, Baxi, and Grant, ensuring you get the best quality products with manufacturer-backed warranties of up to 13 years.'
            },
            {
              question: 'How do I know which boiler is best for my home?',
              answer: 'Every home is different, which is why we offer a free home survey. Our Gas Safe registered engineers will assess your property size, hot water demand, number of bathrooms, and existing pipework to recommend the most efficient and cost-effective boiler for your needs.'
            },
            {
              question: 'How quickly can you install a new boiler?',
              answer: 'We offer a next-day installation service for urgent cases. A standard like-for-like boiler swap typically takes one day. More complex installations involving re-routing pipework or moving the boiler location may take 2-3 days. We will always give you a clear timeline during your survey.'
            },
            {
              question: 'Do you offer finance options for boiler installations?',
              answer: 'Yes! We offer flexible finance options to help spread the cost of your new boiler installation. With plans starting from as little as £30 per month, getting a new, efficient boiler has never been more affordable. Ask us for details during your free survey.'
            },
            {
              question: 'What areas do you cover?',
              answer: 'We cover the entire New Forest region and beyond, including Lymington, New Milton, Brockenhurst, Bournemouth, Christchurch, Highcliffe, Ringwood, Southampton, and all surrounding villages and towns in Hampshire and Dorset.'
            },
            {
              question: 'Are your engineers certified and insured?',
              answer: 'Absolutely. All our engineers are Gas Safe registered, OFTEC certified, and fully insured. We are also MCS accredited for renewable energy installations including Air Source Heat Pumps, giving you complete peace of mind.'
            }
          ]} />
        </div>
      </section>

      <LocationContact />

      {/* Unified Premium Trust & Partners Section */}
      <section className="pt-10 pb-20 relative overflow-hidden bg-slate-50 border-y border-gray-100">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute -top-[300px] right-[-100px] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-[200px] left-[-100px] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Top Logo Slider */}
          <div className="relative overflow-hidden w-full mb-12 sm:mb-16">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            <style dangerouslySetInnerHTML={{
              __html: `
              @keyframes infiniteScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-infinite-scroll {
                animation: infiniteScroll 45s linear infinite;
                width: max-content;
              }
              .animate-infinite-scroll:hover {
                animation-play-state: paused;
              }
            `}} />

            <div className="flex items-center gap-12 sm:gap-20 md:gap-28 animate-infinite-scroll pl-12 sm:pl-20 md:pl-28 py-2">
              {[0, 1].map((half) => (
                <React.Fragment key={half}>
                  {[0, 1, 2].map((group) => (
                    <React.Fragment key={`${half}-${group}`}>
                      <Image src="https://i.postimg.cc/d3k7Dghd/logo_1.webp" alt="Brand Partner 1" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                      <Image src="https://i.postimg.cc/Fzdf1wY3/logo_2.webp" alt="Brand Partner 2" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                      <Image src="https://i.postimg.cc/NF9yLZKr/logo_3.webp" alt="Brand Partner 3" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                      <Image src="https://i.postimg.cc/tJZ178sF/logo_4.webp" alt="Brand Partner 4" width={220} height={100} className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto transition-transform hover:scale-105" />
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Latest Heating Hub Articles Slider */}
          {latestPosts.length > 0 && (
            <div className="mt-20 sm:mt-28 mb-12 flex flex-col items-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#ff5e14] font-bold text-xs tracking-[0.2em] uppercase mb-4 text-center shadow-inner">
                From the Heating Hub
              </span>
              <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-10 pb-4 border-b border-gray-100 gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight text-center sm:text-left drop-shadow-sm">
                  Latest Expert <span className="text-[#0ea5e9]">Advice</span>
                </h2>
                <Link 
                  href="/blog"
                  className="group flex flex-row items-center justify-center gap-3 px-6 py-3 w-max bg-gray-50 hover:bg-[#0ea5e9] hover:text-white rounded-2xl text-sm font-bold text-gray-600 transition-all shadow-sm ring-1 ring-inset ring-gray-200 hover:ring-[#0ea5e9]"
                >
                  View All Guides
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>

              {/* Seamless Infinite Slider Container */}
              <div className="w-full relative group my-2">
                <BlogSlider posts={latestPosts} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

            {/* Checkatrade Premium Card */}
            <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="group relative bg-white rounded-3xl p-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0bdacb]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-white rounded-[1.4rem] h-full p-8 lg:p-10 flex flex-col items-center justify-between relative z-10 border border-gray-100 group-hover:border-[#0bdacb]/40 transition-colors">
                <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#0bdacb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="flex-1 flex items-center justify-center w-full mb-8 pt-6 relative group-hover:scale-105 transition-transform duration-500">
                  <Image src="https://i.postimg.cc/3rfJdKQY/checktrade.webp" alt="Checkatrade" width={240} height={100} className="object-contain max-h-12 sm:max-h-16 w-auto" />
                </div>
                <div className="w-full text-center border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-center gap-1.5 text-[#0bdacb] mb-3">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="font-extrabold text-gray-900 text-xl tracking-tight">9.94/10 <span className="text-gray-400 font-semibold text-sm ml-1">(360+ Reviews)</span></span>
                </div>
              </div>
            </a>

            {/* Google Premium Card */}
            <a href="https://www.google.com/maps/place/Tom+Sutton+Heating/@50.7572451,-1.6704168,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487383d967293ef5:0x722abc9b62d8ffc2!8m2!3d50.7572451!4d-1.6704168!16s%2Fg%2F11b5pjq4ng?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="group relative bg-white rounded-3xl p-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-white rounded-[1.4rem] h-full p-8 lg:p-10 flex flex-col items-center justify-between relative z-10 border border-gray-100 group-hover:border-[#4285F4]/40 transition-colors">
                <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center w-full mb-8 pt-6">
                  <div className="flex items-center text-[3.5rem] lg:text-[4rem] font-bold tracking-tighter leading-none mb-1 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                  </div>
                </div>
                <div className="w-full text-center border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-center gap-1.5 text-[#FBBC05] mb-3">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="font-extrabold text-gray-900 text-xl tracking-tight">5.0/5 <span className="text-gray-400 font-semibold text-sm ml-1">(Top Rated)</span></span>
                </div>
              </div>
            </a>

            {/* Facebook Premium Card */}
            <a href="https://www.facebook.com/tomsuttonheating/reviews" target="_blank" rel="noopener noreferrer" className="group relative bg-white rounded-3xl p-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-white rounded-[1.4rem] h-full p-8 lg:p-10 flex flex-col items-center justify-between relative z-10 border border-gray-100 group-hover:border-[#1877F2]/40 transition-colors">
                <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center w-full mb-8 pt-6">
                  <div className="flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-500">
                    <svg className="w-14 h-14 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    <span className="text-[2.75rem] font-bold text-[#1877F2] tracking-tighter mt-1">facebook</span>
                  </div>
                </div>
                <div className="w-full text-center border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-center gap-1.5 text-[#1877F2] mb-3">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="font-extrabold text-gray-900 text-xl tracking-tight">5.0/5 <span className="text-gray-400 font-semibold text-sm ml-1">(Excellent)</span></span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
