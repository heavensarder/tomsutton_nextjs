
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import TestimonialSlider from '@/components/TestimonialSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import LeadForm from '@/components/LeadForm';

import QuoteComponent from '@/components/QuoteComponent';

export default function NewBoilersPage() {
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
                NEW BOILER INSTALLATION
              </h1>

              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-blue-100 uppercase mb-6">
                NEW BOILER INSTALLATION BY THE SPECIALISTS!
              </h3>

              <div className="space-y-2 text-[0.9rem] sm:text-[0.95rem] font-medium leading-[1.6] text-white overflow-hidden mb-6 max-w-[600px]">
                <p>Are you looking to replace your current boiler?</p>
                <p>Has your old boiler let you down again?</p>
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

              <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white text-blue-700 font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">ONLINE BOILER QUOTE NOW</span>
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

      {/* Premium Boiler Brands Layout Redesign */}
      <section className="bg-white py-20 sm:py-32 relative overflow-hidden border-b border-gray-100">
        {/* Subtle Split-Background Layout Accent */}
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-slate-50/50 lg:rounded-l-[8rem] -z-10"></div>

        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

            {/* Left Column: Typography & Corporate Pitch */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start relative z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] uppercase mb-6 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Accredited Specialists
              </span>

              <h2 className="text-[2.25rem] sm:text-[3.25rem] font-black text-slate-800 tracking-tight leading-[1.05] mb-6">
                OUR PREMIER <br className="hidden lg:block" /> BOILER BRANDS
              </h2>

              <div className="w-16 h-1.5 bg-[#ff9e0b] rounded-full mx-auto lg:mx-0 mb-8"></div>

              <p className="text-slate-500 text-[1.05rem] sm:text-[1.15rem] font-light leading-[1.8] max-w-[550px] mb-10">
                At Tom Sutton Heating we work with a select tier of premium thermal manufacturers. As <strong className="text-slate-800 font-bold">Worcester Accredited Installers</strong>, their pioneering systems represent our absolute number one boiler recommendation and top sellers globally.
              </p>

              <Link
                href="/our-boiler-brands/"
                className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 bg-slate-900 hover:bg-black text-white font-bold tracking-widest text-sm uppercase rounded-xl transition-all hover:-translate-y-1 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]"
              >
                <span>View All Brands</span>
                <svg className="w-5 h-5 ml-2.5 opacity-80 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

            {/* Right Column: Visual Showcase Display Component */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
              <div className="relative w-full max-w-[500px] aspect-auto sm:aspect-[4/3] bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center p-10 sm:p-16 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 group">

                {/* Embedded Ambient Glow FX behind the logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>

                {/* Physical Logo Bounding Box ensuring absolute structural integrity */}
                <div className="relative w-full h-[70px] sm:h-[100px] z-10 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="https://i.postimg.cc/PqXwb81V/WAI-Bosch-Logo-WHITE-BOXES-SGRight-2-300x73.webp"
                    alt="Worcester Bosch Accredited Installer Partnership Logo"
                    fill
                    className="object-contain object-center mix-blend-multiply"
                    unoptimized
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Quoting Engine Tier */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1200px]">

          <div className="flex flex-col lg:flex-row items-start justify-start">

            {/* Left Content Area: Typography & Interactive Quote Engine (50% Width) */}
            <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-8">

              {/* Screenshot Typography Block */}
              <div className="w-full text-center lg:text-left mb-10">
                <h2 className="text-[2rem] sm:text-[2.75rem] font-bold text-[#334155] tracking-tight leading-[1.1] mb-6">
                  HOW MUCH DOES A NEW BOILER COST?
                </h2>

                <p className="text-gray-500 text-[1.1rem] sm:text-[1.15rem] font-light leading-[1.8]">
                  At Tom Sutton Heating we are completely upfront with our pricing. This is why we offer FIXED PRICE BOILER PACKAGES. <Link href="/contact" className="text-[#2563eb] hover:text-[#1d4ed8] underline underline-offset-2 decoration-1 transition-colors">Contact us</Link> today to discuss our fixed price boiler installation packages or use the quote tool below to find out how much your new boiler could cost you.
                </p>
              </div>

              {/* Quote Component Wrapper */}
              <div className="w-full bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sm:p-10 relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-bl-full -z-10 transition-transform duration-700"></div>
                <div className="relative z-10 w-full min-h-[400px]">
                  <QuoteComponent />
                </div>
              </div>

            </div>

            {/* Right Content Area: Testimonial Slider & Lead Form (50% Width) */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-8 xl:pl-16 flex flex-col space-y-12">
              <TestimonialSlider />
              <div className="w-full relative z-10 block">
                <LeadForm />
              </div>

              {/* Finance Info Section */}
              <div className="w-full bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col space-y-6">
                <div className="space-y-4">
                  <h3 className="text-[#64748b] font-bold text-lg sm:text-lg uppercase tracking-tight leading-snug">
                    NEED A NEW BOILER FAST, BUT YOU JUST CAN'T AFFORD IT RIGHT NOW?
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Don't panic! Tom Sutton Heating has you covered!
                  </p>
                  <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                    Tom Sutton Heating offer brand new boiler installations with low-cost finance packages (including <strong className="text-slate-800">0% finance packages!</strong>)
                  </p>
                  <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                    If you are looking to spread the cost over a longer period, speak with a member of our team who can put you in touch with our finance partner to discuss your options.
                  </p>
                  <p className="text-slate-700 text-[0.7rem] sm:text-xs italic leading-relaxed text-justify mt-2 font-semibold">
                    (Tom Sutton Heating) is an Introducer Appointed Representative of (and provides a pure client Introduction through) hiber Energy Ltd., a company registered in England and Wales (Co. Reg. No. 11228917). Registered Office: Linen Court, 10 East Road, London, N1 6AD. hiber Energy Ltd. is authorised and regulated by the Financial Conduct Authority (FRN 810654) as a Broker, not a Lender, and offers credit facilities from a panel of lenders. The credit is subject to application and status
                  </p>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="https://i.postimg.cc/769bY98K/payment-pic.webp"
                    alt="Card Payment Terminal"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="w-full bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col items-center">
                <h3 className="text-[1.35rem] sm:text-2xl text-center text-[#475569] mb-8 font-light">
                  Why Choose us?
                </h3>
                <ul className="space-y-4 w-full max-w-[420px]">
                  {[
                    "Highly trained Gas Safe, OFTEC registered\nengineers",
                    "Friendly Attitude & A Commitment To Customer\nService",
                    "Rate 5* On Google & 9.9/10 On Checkatrade",
                    "No Obligation Free Quotes",
                    "Honest & Upfront Pricing",
                    "Local Business & Team",
                    "Reliable Boilers & Products",
                    "Extended Boiler Guarantee's",
                    "Fast, Reliable Service"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        {/* Exact matching green checkbox box */}
                        <div className="w-[1.1rem] h-[1.1rem] border-[1.5px] border-[#7cb342] rounded-[2px] flex items-center justify-center bg-transparent">
                          <svg className="w-3.5 h-3.5 text-[#8bc34a] transform translate-y-[-1px] translate-x-[0.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3.5} d="M5 12l4 4L19 6" /></svg>
                        </div>
                      </div>
                      <span className="font-bold text-[#334155] text-[0.95rem] leading-[1.3] whitespace-pre-line">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

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
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-[1.1rem] font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 border border-transparent rounded-[1.25rem] shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 uppercase tracking-wide group">
                Contact Us Today
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

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
              question: "How do I know when I need a new boiler?",
              answer: "Common signs you need a new boiler include frequent breakdowns, rising energy bills, the boiler being over 10-15 years old, uneven heating, strange noises, and difficulty finding replacement parts. If you are experiencing any of these, we offer a free survey to assess your options."
            },
            {
              question: "What types of new boilers do you install?",
              answer: "We install combi boilers, system boilers, and regular (heat only) boilers from leading manufacturers including Worcester Bosch, Alpha, Baxi, and Grant. We will recommend the best type based on your home size, hot water demand, and number of bathrooms."
            },
            {
              question: "Do new boilers come with a warranty?",
              answer: "Yes, all our new boiler installations come with manufacturer warranties of up to 13 years depending on the brand and model. As accredited installers, we can offer extended warranty cover that gives you long-term protection and peace of mind."
            },
            {
              question: "Can you help me choose the right boiler size?",
              answer: "Absolutely. During our free home survey, we assess your property size, number of radiators, bathrooms, hot water usage, and insulation levels to calculate the exact output (kW) needed. This ensures you get a boiler that is perfectly matched to your home."
            },
            {
              question: "Do you offer finance for new boiler installations?",
              answer: "Yes, we offer flexible finance options with plans starting from as little as £30 per month. This allows you to spread the cost of your new boiler installation over a period that suits you, making a high-efficiency boiler affordable for every homeowner."
            }
          ]} />
        </div>
      </section>

    </main>
  );
}
