import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqAccordion from '@/components/FaqAccordion';
import LocationContact from '@/components/LocationContact';

export default function BoilerBreakdownsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Premium Compact Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden z-10">
        {/* Deep Blurred Background Image Overlay - Ported from /new-boiler-installation-2 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              <h1 className="text-[1.75rem] sm:text-3xl lg:text-[2.75rem] font-black tracking-tight leading-[1.2] mb-8 drop-shadow-md">
                BOILER BROKEN DOWN? NEED A<br />BOILER REPAIR FAST?
              </h1>

              <div className="space-y-4 text-[0.95rem] sm:text-[1.05rem] font-medium leading-[1.6] text-white overflow-hidden mb-12 max-w-[650px]">
                <p>
                  At Tom Sutton Heating we understand that some problems just can’t wait, that’s why we aim to get to any boiler repair within 24 hrs!
                </p>
                <p>
                  We are upfront with our pricing, charging £95 diagnosis fee. We will then give you a fixed price before we proceed with the boiler repair. Does that sound fair?
                </p>
                <p>
                  Check out our Checkatrade reviews <Link href="https://www.checkatrade.com/trades/TomSuttonHeatingLtd" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-bold hover:text-blue-200 transition-colors">here</Link>, to help you make the right decision.
                </p>
                <p>
                  Trust Tom Sutton Heating to get the heat back on!
                </p>
                <p className="text-[0.85rem] sm:text-[0.9rem] text-white/90 font-normal mt-4 leading-snug">
                  Please note that £95 diagnosis fee covers appointments within normal working hours only
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 sm:px-12 sm:py-4 bg-white text-blue-700 font-bold text-[0.85rem] tracking-widest uppercase rounded-sm transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">CONTACT US</span>
              </Link>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image
                  src="https://i.postimg.cc/P5xHmXPS/boiler-installation.webp"
                  alt="Specialist fitting new boiler"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  unoptimized
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-200/30 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-white/20 rounded-full blur-[50px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Boiler Breakdowns & Maintenance Section */}
      <section className="bg-white py-20 sm:py-28 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-20">

            {/* Left Column: Text and Image */}
            <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-[1.85rem] sm:text-[2.25rem] font-bold text-[#475569] tracking-tight leading-[1.2] mb-8 uppercase">
                BOILER BREAKDOWNS & <br className="hidden lg:block" /> MAINTENANCE
              </h2>

              <div className="space-y-6 text-gray-500 font-medium text-[0.95rem] sm:text-[1rem] leading-[1.8] mb-10 w-full text-left">
                <p>
                  Tom Sutton Heating are your <strong className="text-slate-800 font-bold">local boiler repair company</strong>, we repair boilers in Lymington, New Milton, Christchurch and all surrounding towns and villages.
                </p>
                <p>
                  We are <strong className="text-slate-800 font-bold">gas safe, and OFTEC registered specialists</strong>, so it does not matter if you have a gas boiler or an oil boiler in need of repair, we are able to get you back up and running.
                </p>
                <p>
                  To speak with us regarding gas services, please call <strong className="text-slate-800 font-bold">01590 631671</strong> or leave your details on our contact form and we’ll get back to you as soon as possible.
                </p>
                <p>
                  <strong className="text-slate-800 font-bold">Before you call out one of our specialist gas engineers</strong> you may want to check out our <Link href="/blog" className="text-[#2563eb] hover:text-[#1d4ed8] underline underline-offset-4 decoration-1 font-bold transition-colors">blog post</Link> to see if it is a simple fix.
                </p>
              </div>

              {/* Boiler Control Image Placeholder */}
              <div className="relative w-full max-w-[500px] aspect-[16/9] rounded-sm overflow-hidden shadow-sm border border-slate-100 group mx-auto md:mx-0">
                <Image
                  src="https://i.postimg.cc/pLGjSr7D/Gas_Pic.webp"
                  alt="Gas Pic"
                  fill
                  className="object-cover border-4 border-white transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Static Contact Form */}
            <div className="w-full md:w-[50%] flex flex-col items-center md:items-start pt-2 lg:pl-10">
              <h2 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-[#475569] tracking-tight mb-6 text-center md:text-left uppercase w-full">
                LEAVE YOUR DETAILS
              </h2>

              <p className="text-gray-500 font-medium text-[0.95rem] leading-[1.8] mb-8 text-center md:text-left w-full">
                Leave your details below and we'll get in touch to discuss your new boiler.
              </p>

              <form className="w-full space-y-4" action="/contact">
                <div className="w-full">
                  <input type="text" placeholder="Name *" className="w-full px-5 py-3.5 border border-slate-200 rounded-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors bg-white font-medium text-slate-700 placeholder-slate-400 text-[0.95rem]" required />
                </div>
                <div className="w-full">
                  <input type="email" placeholder="E-mail *" className="w-full px-5 py-3.5 border border-slate-200 rounded-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors bg-white font-medium text-slate-700 placeholder-slate-400 text-[0.95rem]" required />
                </div>
                <div className="w-full">
                  <input type="tel" placeholder="Telephone *" className="w-full px-5 py-3.5 border border-slate-200 rounded-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors bg-white font-medium text-slate-700 placeholder-slate-400 text-[0.95rem]" required />
                </div>
                <div className="w-full">
                  <input type="text" placeholder="Country" className="w-full px-5 py-3.5 border border-slate-200 rounded-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors bg-white font-medium text-slate-700 placeholder-slate-400 text-[0.95rem]" />
                </div>
                <div className="w-full">
                  <input type="text" placeholder="City" className="w-full px-5 py-3.5 border border-slate-200 rounded-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors bg-white font-medium text-slate-700 placeholder-slate-400 text-[0.95rem]" />
                </div>
                <div className="w-full">
                  <textarea rows={5} placeholder="Message *" className="w-full px-5 py-3.5 border border-slate-200 rounded-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors bg-white font-medium text-slate-700 placeholder-slate-400 text-[0.95rem] resize-y" required></textarea>
                </div>

                <div className="w-full flex items-start gap-4 py-3">
                  <div className="flex items-center h-5 mt-0.5">
                    <input id="consent" type="checkbox" className="w-4 h-4 border-slate-300 rounded-sm text-[#2563eb] focus:ring-[#2563eb] bg-white cursor-pointer" required />
                  </div>
                  <label htmlFor="consent" className="text-[0.8rem] text-slate-500 font-medium leading-snug cursor-pointer">
                    By using this form you agree with the storage and handling of your data by this website.
                  </label>
                </div>

                <div className="pt-2 w-full flex justify-start">
                  <button type="submit" className="px-8 py-3 bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-[0.95rem] rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Send message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Location & Contact Section */}



      <LocationContact />

      {/* Premium Dark Gradient Contact Footer */}
      <section className="relative bg-[#0b1021] py-8 sm:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
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
            </div>
          </div>
        </div>
      </section>



      {/* ----- FAQ Section Mounted at the Very End ----- */}
      {/* FAQs Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#2563eb] text-sm font-bold uppercase tracking-wider border-2 border-[#2563eb]/20 bg-white px-5 py-2.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
              Breakdown FAQs
            </span>
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.8rem] font-black text-[#0d1033] tracking-tight leading-[1.15] italic">
              Answers to Your Most<br className="hidden sm:block" /> Common Queries!
            </h2>
          </div>

          <FaqAccordion items={[
            {
              question: "How fast can you repair my boiler?",
              answer: "We aim to attend to any boiler breakdown within 24 hours. Because our engineers carry many standard heating parts in their vans, we are often able to fix the problem on our very first visit."
            },
            {
              question: "What is your diagnosis fee?",
              answer: "We charge a transparent £95 diagnosis fee for appointments within normal working hours. Once we find the fault, we will give you a clear, fixed-price quote to repair it before commencing any additional work."
            },
            {
              question: "Do you repair all makes and models of boilers?",
              answer: "Yes, our Gas Safe and OFTEC registered engineers are highly experienced and trained to repair all major gas and oil boiler brands, including Worcester Bosch, Baxi, Alpha, Vaillant, Ideal, and more."
            },
            {
              question: "Will my repair be guaranteed?",
              answer: "Absolutely. All parts installed during a repair come with the standard manufacturer's warranty, and all of our own workmanship is fully guaranteed for your peace of mind."
            },
            {
              question: "Is it worth repairing an old boiler?",
              answer: "If your boiler is very old, inefficient, frequently breaking down, or requires highly expensive replacement parts, we may recommend a full replacement as a more economical long-term choice. However, we'll always provide an honest assessment of the condition so you can make an informed decision."
            }
          ]} />
        </div>
      </section>

    </main>
  );
}
