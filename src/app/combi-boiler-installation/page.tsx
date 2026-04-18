
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import InfiniteReviewSlider from '@/components/InfiniteReviewSlider';
import WhyChooseUs from '@/components/WhyChooseUs';


import QuoteComponent from '@/components/QuoteComponent';
import ContactSection from '@/components/ContactSection';

export default function CombiBoilerInstallationPage() {
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
              <h1 className="text-[1.75rem] sm:text-3xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] mb-3 drop-shadow-md">
                COMBI BOILER INSTALLATION
              </h1>

              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-blue-100 uppercase mb-6">
                NEW COMBI BOILER INSTALLATION BY THE COMBI BOILER INSTALLATION EXPERTS
              </h3>

              <div className="space-y-2 text-[0.9rem] sm:text-[0.95rem] font-medium leading-[1.6] text-white overflow-hidden mb-6 max-w-[600px]">
                <p>Are you looking to replace your current combi boiler or are you looking to have your current boiler replaced with a combi?</p>
                <p>Tired of having poor hot water?</p>
                <p>Tom Sutton Heating and its team of local gas engineers are here to help!</p>
                <p className="mt-2 text-white/90">
                  We offer fast, friendly and reliable service, and are always on hand to keep you and your family warm throughout the winter! Check out our <Link href="/our-reviews" className="underline underline-offset-4 decoration-blue-300 hover:text-white transition-colors">review page</Link> or our <a href="https://www.google.com/maps?cid=8226595044909973442" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-blue-300 hover:text-white transition-colors">Google listing</a> if you are unsure!
                </p>
              </div>

              <div className="inline-flex flex-row items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#27303f]/95 border border-white/10 backdrop-blur-sm mb-10 shadow-md text-left w-auto max-w-full">
                <svg className="w-4 h-4 sm:w-4 sm:h-4 text-[#fbbf24] shrink-0 translate-y-[0.5px]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="font-bold text-[0.65rem] sm:text-[0.7rem] tracking-[0.08em] uppercase text-white leading-snug">
                  WE ARE 5 STAR RATED ON GOOGLE AND RATED 9.9/10 ON CHECKATRADE
                </span>
              </div>

              <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 sm:py-5 bg-white text-blue-700 font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">ONLINE BOILER QUOTE NOW</span>
              </Link>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 group z-20">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image
                  src="https://i.postimg.cc/0jbRcM1K/Worcester-Greenstar-CDi-Classic-Combi-Insitu-2-534x310.webp"
                  alt="Worcester Greenstar CDi Classic Combi Insitu"
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

      {/* How a Combi Boiler Works Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">

            {/* Left Column: Text Content */}
            <div className="w-full lg:w-[50%] flex flex-col items-start lg:pr-8">
              <span className="inline-flex items-center gap-2 text-blue-600 text-[0.7rem] font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                System Mechanics
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-800 mb-8 tracking-tight leading-[1.1]">
                How does a combi boiler work?
              </h2>

              <div className="space-y-6 text-slate-600 font-medium text-[1.05rem] leading-[1.8]">
                <p>
                  A combination or &apos;combi&apos; boiler is both a high-efficiency water heater and a central heating boiler in a single compact unit. Combi boilers heat water directly from the mains when you turn on a tap, so you won&apos;t need a hot water storage cylinder or a cold water storage tank in the roof space.
                </p>
                <p>
                  They are also very cost-effective and energy-efficient as water is heated instantly rather than being heated and then stored in a cylinder. An added benefit is that hot water is delivered at mains pressure, which means that you could get a powerful shower without the need for a separate pump.
                </p>
              </div>
            </div>

            {/* Right Column: Diagram Image */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end group relative z-10 w-full min-h-[350px]">
              <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square mx-auto rounded-full lg:rounded-[3rem] overflow-hidden bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 flex items-center justify-center p-8 lg:p-12 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.15)]">

                {/* Background Ambient Glow */}
                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <Image
                  src="https://i.postimg.cc/5yxqVL2v/Gas-Combi-Diagram-3-300x300.webp"
                  alt="Internal Gas Combi Boiler Functionality Diagram"
                  fill
                  className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Premium Finance & Pricing Section */}
      <section className="bg-slate-50 py-20 sm:py-28 relative overflow-hidden border-b border-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="bg-[#0b1021] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 sm:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Aesthetic Background FX */}
            <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-gradient-to-l from-blue-600/20 to-transparent rotate-12 blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Left Content Area (Pricing/Finance logic) */}
            <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-start lg:pr-4">
              <span className="inline-flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Transparent Pricing
              </span>
              <h2 className="text-[2rem] sm:text-[2.75rem] font-black text-white tracking-tight leading-[1.05] mb-6 uppercase">
                How much does a new combi boiler cost?
              </h2>
              <p className="text-blue-50/80 text-[1.1rem] sm:text-[1.15rem] leading-[1.8] font-light mb-8">
                At Tom Sutton Heating we are completely upfront with our pricing. This is why we offer <strong className="text-white font-semibold">FIXED PRICE BOILER PACKAGES</strong>. Contact us today to discuss our fixed price boiler installation packages and find out exactly what your new boiler will cost you, with zero hidden fees.
              </p>

              {/* Spread the cost card */}
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-white font-bold text-xl mb-4 italic">NEED A NEW BOILER FAST, BUT YOU JUST CAN'T AFFORD IT RIGHT NOW?</h3>
                <p className="text-blue-100 font-medium mb-3">Don't panic! Tom Sutton Heating has you covered!</p>
                <p className="text-slate-300 text-[0.95rem] leading-relaxed mb-6">
                  Tom Sutton Heating offer brand new boiler installations with low-cost finance packages (including <strong className="text-white font-bold">0% finance packages!</strong>). If you are looking to spread the cost over a longer period, speak with a member of our team who can put you in touch with our finance partner to discuss your options.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wider uppercase text-sm px-8 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                  Discuss Finance Options
                </Link>
              </div>
            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-1/2 relative z-10 flex flex-col">
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 mb-6 group">
                <Image
                  src="https://i.postimg.cc/769bY98K/payment-pic.webp"
                  alt="Card Payment Terminal for Boiler Finance"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              </div>

              {/* Regulatory Text */}
              <div className="text-white/40 text-[0.65rem] sm:text-[0.7rem] leading-[1.6] italic text-justify px-2">
                (Tom Sutton Heating) is an Introducer Appointed Representative of (and provides a pure client Introduction through) hiber Energy Ltd., a company registered in England and Wales (Co. Reg. No. 11228917). Registered Office: Linen Court, 10 East Road, London, N1 6AD. hiber Energy Ltd. is authorised and regulated by the Financial Conduct Authority (FRN 810654) as a Broker, not a Lender, and offers credit facilities from a panel of lenders. The credit is subject to application and status.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Google Reviews Full-Width Section */}
      <section className="w-full relative z-20 bg-[#0a0f1c] py-20 lg:py-24 shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="text-center mb-8 relative z-30 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ffc107] font-bold text-xs tracking-[0.2em] uppercase mb-5 text-center">
            5.0 Google Rating
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Loved by our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-amber-500">Community</span>
          </h3>
          <p className="text-slate-400 font-medium text-[1.05rem] sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We pride ourselves on an uncompromising standard of technical excellence. See what your neighbors think.
          </p>
        </div>
        
        {/* The Infinite Slider natively spans the full browser width securely without negative margin hacks. */}
        <div className="w-full">
          <InfiniteReviewSlider />
        </div>
      </section>

      {/* Footer Fixed Price Boiler Packages Section */}
      <section className="relative z-0 py-20 lg:py-28 overflow-hidden bg-slate-50 border-t border-slate-200">
        {/* Dynamic Background Glass Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>
        <div className="absolute -top-32 left-[-10%] w-[50%] h-[80%] bg-blue-200/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-32%] right-[-10%] w-[60%] h-[70%] bg-sky-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] relative z-20">
          <div className="bg-white/80 backdrop-blur-3xl rounded-[2.5rem] p-10 sm:p-16 lg:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white ring-1 ring-slate-900/5 text-center flex flex-col items-center transform transition-transform duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">

            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-blue-50">
              <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] uppercase max-w-4xl mx-auto drop-shadow-sm mb-6">
              FIXED PRICE BOILER PACKAGES
            </h2>

            <div className="w-16 h-1 bg-blue-600 rounded-full mb-10"></div>

            <p className="text-slate-600 text-lg sm:text-lg leading-[1.9] font-medium mx-auto max-w-4xl text-left sm:text-center px-0 md:px-8">
              At Tom Sutton Heating we do not push one particular brand. When you choose to buy a new car, you don't just look at one car, you pick a selection, and choose the one that's right for you. This is why we have created our fixed price boiler installation brochure, containing all of our products and pricing structures with ranges to suit all budgets.
            </p>

            <div className="mt-12 flex justify-center w-full">
              <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap px-10 py-5 text-[1.1rem] font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 border border-transparent rounded-[1.25rem] shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 uppercase tracking-wide group">
                Contact Us Today
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
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
              <a href="tel:01590631671" className="hover:text-blue-400 transition-colors cursor-pointer inline-block">01590 631671</a>
            </div>
          </div>
        </div>
      </section>



      {/* ----- FAQ Section Mounted at the Very End ----- */}
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
              question: "What is a combi boiler and is it right for my home?",
              answer: "A combi (combination) boiler provides both central heating and instant hot water from a single compact unit, without the need for a separate hot water tank or cylinder. They are ideal for small to medium-sized homes with 1-2 bathrooms."
            },
            {
              question: "How long does a combi boiler installation take?",
              answer: "A like-for-like combi boiler replacement typically takes just one day. If we are converting from a system or regular boiler to a combi, it may take 2-3 days as we will need to remove the old tanks and cylinders and modify the pipework."
            },
            {
              question: "Which combi boiler brands do you recommend?",
              answer: "We are accredited installers for Worcester Bosch and Alpha, two of the most reliable and efficient brands on the market. We also install Baxi, Ideal, and Vaillant. We will recommend the best brand and model for your specific needs and budget."
            },
            {
              question: "How much does a new combi boiler installation cost?",
              answer: "The cost of a combi boiler installation varies depending on the model, your existing system, and any additional work required. We offer free, no-obligation surveys and quotes. We also provide flexible finance options to spread the cost."
            },
            {
              question: "Will a combi boiler save me money on energy bills?",
              answer: "Yes! Modern combi boilers are A-rated for efficiency, typically operating at 90%+ efficiency compared to 60-70% for older boilers. This can reduce your gas bills by up to £300 per year. You also save space by removing the hot water cylinder and tanks."
            }
          ]} />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
