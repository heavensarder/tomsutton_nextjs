'use client';

import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import LeadForm from '@/components/LeadForm';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function GasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10">
        {/* Deep Blurred Background Image Overlay Component Ported */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white pt-8 lg:pt-0">
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-blue-300 uppercase mb-4">
                Gas Safe Registered Engineers
              </h3>

              <h1 className="text-[2rem] sm:text-4xl lg:text-[3rem] font-black tracking-tight leading-[1.05] mb-6 drop-shadow-md uppercase">
                WHEN WAS YOUR LAST BOILER CHECK?
              </h1>
              
              <div className="space-y-4 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.7] text-white/95 mb-10 max-w-[650px]">
                <p>
                  The Gas Safe Register recommend that you should get your gas appliances serviced or checked for safety annually.
                </p>
                <p>
                  This work must be carried out by a gas safe registered engineer. Luckily for you, Tom Sutton Heating can take care of it.
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 sm:px-12 sm:py-5 bg-white text-[#0f172a] font-black text-[0.85rem] tracking-widest uppercase rounded-2xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">CONTACT US</span>
              </Link>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="https://i.postimg.cc/pLGjSr7D/Gas_Pic.webp" 
                  alt="Gas Boiler Technician Servicing" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/30 rounded-full blur-[60px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Dual-Column Content Interface */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">

            {/* Left Column: Typography Content & Service Cards */}
            <div className="w-full lg:w-[55%] flex flex-col items-start pr-0 lg:pr-4">
              
              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-black text-slate-800 mb-8 tracking-tight leading-[1.1] uppercase">
                GAS SERVICING &amp; MAINTENANCE
              </h2>

              <div className="space-y-6 text-slate-600 font-medium text-[1.1rem] leading-[1.8] mb-10 w-full">
                <p>
                  If you have any gas appliances you could potentially be exposed to dangers such as fires, gas explosions, and carbon monoxide poisoning. At Tom Sutton Heating we provide annual gas safety checks and services across Lymington and surrounding areas in the New Forest.
                </p>
                <p className="font-bold text-slate-800">Our services include:</p>
                
                {/* Premium Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-6 !mb-8">
                  {[
                    { text: "Gas, LPG & Oil installations", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                    { text: "Boiler services, repairs & maintenance", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
                    { text: "Safety landlord certificates (CP12)", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                    { text: "Gas fire servicing & safety checks", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" },
                    { text: "Combi Boiler installation & repair", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                    { text: "Up to 13 year parts & labour warranty", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                    { text: "Pipe work installations & maintenance", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3.5 bg-white rounded-xl px-4 py-3.5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_8px_25px_-5px_rgba(255,94,20,0.12)] hover:border-[#ff5e14]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff5e14] to-[#ff8c42] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md group-hover:shadow-[#ff5e14]/20 transition-all duration-300">
                        <svg className="w-[18px] h-[18px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      </div>
                      <span className="font-semibold text-slate-700 text-[0.92rem] leading-[1.35] group-hover:text-[#0d1033] transition-colors duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>

                <p>
                  We are also fully qualified in LPG &amp; Oil installations for any homes who do not have mains gas.
                </p>
                <p className="p-5 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-2xl font-bold text-blue-900 text-[1.05rem]">
                  We can now offer no-deposit boiler finance on up to 7 year terms. Please ask us about this for more details.
                </p>
                <p>
                  To speak with us regarding gas services, please call <strong className="text-slate-800">01590 631671</strong> or <strong className="text-slate-800">07774 673109</strong> or leave your details on our contact form and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 transition-all">
                <span>CONTACT US</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
            </div>

            {/* Right Column: Visual Element & Lead Form Mapping */}
            <div className="w-full lg:w-[45%] flex flex-col space-y-12 relative z-10">
              
              {/* Media Block Port - Using standard layout image mapping */}
              <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] lg:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 group">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                  alt="Internal Gas Boiler Mechanic"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="font-bold tracking-widest uppercase text-[0.7rem] bg-blue-600 px-3 py-1.5 rounded-full mb-3 inline-block">Tom Sutton Heating</span>
                </div>
              </div>

              {/* Native LeadForm Component Instance */}
              <div className="w-full relative z-10 block rounded-3xl overflow-hidden border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] bg-white">
                <LeadForm />
              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              question: "What gas services do you provide?",
              answer: "We offer a comprehensive range of gas services including boiler installations, gas safety inspections (CP12 certificates), gas leak detection and repair, central heating installations, cooker and hob fitting, and gas fire servicing. All work is carried out by Gas Safe registered engineers."
            },
            {
              question: "How often should I have a gas safety check?",
              answer: "We recommend an annual gas safety check for all gas appliances in your home. If you are a landlord, a Gas Safety Certificate (CP12) is a legal requirement every 12 months for all rental properties."
            },
            {
              question: "What should I do if I smell gas?",
              answer: "If you smell gas, open all windows and doors, do not use any electrical switches or naked flames, turn off the gas supply at the meter, and evacuate the property. Call the National Gas Emergency Service on 0800 111 999. After the situation is safe, contact us and we can carry out any necessary repairs."
            },
            {
              question: "Are your gas engineers qualified?",
              answer: "Yes, all our gas engineers are Gas Safe registered, which is a legal requirement for anyone carrying out gas work in the UK. You can verify our registration on the Gas Safe Register website. We also carry full public liability insurance for your peace of mind."
            },
            {
              question: "How much does a gas safety certificate cost?",
              answer: "Our gas safety certificates (CP12) are competitively priced. We offer discounted rates for landlords with multiple properties. Contact us for a free, no-obligation quote tailored to your specific requirements."
            }
          ]} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Location & Contact Section */}
      <LocationContact />

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
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">01590 631671</span>
              <span className="text-blue-500/50 mx-1 font-normal text-base">|</span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">07774 673109</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
