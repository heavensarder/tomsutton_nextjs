import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseUs from '@/components/WhyChooseUs';
import HeatingServiceSlider from '@/components/HeatingServiceSlider';
import { getComponentData } from '@/lib/components';
import { heatingSliderDefault } from '@/lib/defaultComponentsData';
import ContactSection from '@/components/ContactSection';

export default async function HeatingPage() {
  const heatingSliderData = await getComponentData('heating_slider', heatingSliderDefault);

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Ultra-Premium Hero Section */}
      <section className="relative w-full flex items-center bg-[#0d1033] text-white pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden z-10">
        {/* Deep Blurred Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-xl scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1033] via-[#0d1033]/95 to-[#0d1033]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1033] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#ff5e14] text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#ff5e14] animate-pulse"></span>
                Heating & Plumbing Experts
              </span>

              <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black tracking-tight leading-[1.05] mb-6 text-white drop-shadow-lg">
                STAY WARM IN <br className="hidden lg:block"/> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-[#ff8c42]">WINTER!</span>
              </h1>
              
              <div className="space-y-4 text-[1.1rem] sm:text-[1.25rem] font-medium leading-[1.6] text-slate-300 mb-10 max-w-[600px]">
                <p>
                  At Tom Sutton Heating, we offer bespoke, high-efficiency solutions to all your heating and plumbing needs across the New Forest.
                </p>
                <p className="text-white/80 text-[1rem]">
                  We understand that plumbing emergencies can&apos;t wait. We aim to reach any heating system breakdown within <strong className="text-white">24 hours</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-white/10 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all hover:bg-white/20 backdrop-blur-sm">
                  <span>GET ONLINE QUOTE</span>
                </Link>
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all shadow-[0_10px_30px_rgba(255,94,20,0.3)] hover:shadow-[0_15px_40px_rgba(255,94,20,0.5)] hover:-translate-y-1">
                  <span>GET IN TOUCH</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <a href="tel:01590631671" className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-white/10 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all hover:bg-white/20 backdrop-blur-sm">
                  01590 631671
                </a>
              </div>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/zfPCcrpc/Heating.webp" 
                  alt="Cozy socks warming on a radiator" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-[#0d1033]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#ff5e14]/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Full-Width Slider Section */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          
          <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
            <div className="w-full lg:w-2/3">
              <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Core Services
              </span>
              <h2 className="text-[2rem] sm:text-[2.75rem] font-black text-[#0d1033] tracking-tight leading-[1.15]">
                Our Heating Services
              </h2>
            </div>
            <div className="w-full lg:w-1/3 flex lg:justify-end">
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                From emergency repairs to efficient modern installations, we keep your home perfectly warm all year round.
              </p>
            </div>
          </div>
        </div>

        {/* The Component Slider wrapped beautifully */}
        <div className="w-full max-w-[1600px] mx-auto">
          <HeatingServiceSlider data={heatingSliderData} />
        </div>
      </section>

      {/* Premium Split Layout: Image + Trust Text */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Image Area */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200">
                <Image
                  src="https://i.postimg.cc/SKt6vhVT/Radiator.webp"
                  alt="Hands warming up on a newly installed radiator"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
              
              {/* Floating Glass Tag */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h4 className="font-bold text-slate-800 tracking-tight">Fair Pricing</h4>
                </div>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  Working with all budgets across the New Forest area.
                </p>
              </div>
            </div>

            {/* Right Text Area */}
            <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0">
              <h2 className="text-[2rem] sm:text-[2.5rem] font-black text-[#0d1033] tracking-tight leading-[1.15] mb-6">
                Reliable Experts, <br className="hidden sm:block"/> <span className="text-[#ff5e14]">Honest Solutions.</span>
              </h2>
              <div className="space-y-6 text-slate-600 font-medium text-[1.1rem] leading-[1.8] mb-10 w-full">
                <p>
                  Heating issues can be incredibly stressful – that's why we pride ourselves on delivering rapid, completely transparent, and long-lasting fixes.
                </p>
                <div className="space-y-4 pt-2">
                  {[
                    "Fully insured and highly certified engineers",
                    "Energy efficient system optimizations",
                    "Rapid response times across Hampshire",
                    "Up to 12 year warranties on new boiler installs"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white px-5 py-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-7 h-7 rounded-lg bg-[#ff5e14]/10 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-slate-700 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      {/* Brands Accordion Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[#0d1033] text-xs font-bold tracking-widest uppercase mb-6">
                Partnered Excellence
              </span>
              <h2 className="text-[2rem] sm:text-[2.5rem] font-black text-slate-800 tracking-tight leading-[1.15] mb-6">
                Working with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Industry Leaders</span>
              </h2>
              <p className="text-slate-500 font-medium text-[1.1rem] leading-[1.8] mb-8">
                As certified partners with top-tier manufacturers, we bring you extended warranties, priority support, and the very best equipment on the market.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 border border-slate-100">
                  <Image src="https://i.postimg.cc/85zX6X6F/Viessmann-logo-svg.png" alt="Viessmann" width={150} height={50} className="object-contain" unoptimized />
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 border border-slate-100">
                  <Image src="https://i.postimg.cc/PqjZ6d0B/Worcester-Bosch-logo.webp" alt="Worcester Bosch" width={150} height={50} className="object-contain" unoptimized />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FaqAccordion items={[
                { q: "How quickly can you fix a broken boiler?", a: "We aim to diagnose and repair almost all boiler breakdowns within our initial 24-hour response window, fully equipped with most common replacement parts." },
                { q: "Are your heating engineers fully insured?", a: "Absolutely. All our heating engineers are fully insured and Gas Safe / OFTEC registered for guaranteed peace of mind." },
                { q: "Do you offer warranties on new installations?", a: "Yes! Because we are accredited installers, we can offer extended warranties ranging from 7 up to 12 years on select boiler models." },
                { q: "What areas do you cover?", a: "We primarily cover Lymington, Brockenhurst, New Milton, Ringwood, and all surrounding areas of the New Forest and wider Hampshire area." }
              ]} />
            </div>
          </div>
        </div>
      </section>

      <LocationContact />
      <ContactSection />
    </main>
  );
}
