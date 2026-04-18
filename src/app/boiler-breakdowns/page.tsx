import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqAccordion from '@/components/FaqAccordion';
import LocationContact from '@/components/LocationContact';
import ContactSection from '@/components/ContactSection';
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
            <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6 animate-fade-in-up pb-2 lg:pb-0 z-10">

              <div className="inline-block uppercase tracking-wider font-extrabold text-xs sm:text-sm md:text-base text-[#fbbf24]">
                Rapid Response Boiler Engineers
              </div>

              <h1 className="flex flex-col space-y-2 sm:space-y-3 mt-2 w-full">
                <span className="text-3xl sm:text-4xl lg:text-[3rem] font-light text-white tracking-tight drop-shadow-md">Is Your Boiler Down?</span>
                <span className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black text-white tracking-tight leading-[1.1] drop-shadow-lg">Get Professional Emergency</span>
                <span className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black text-[#fbbf24] tracking-tight leading-[1.1] drop-shadow-lg">Boiler Breakdown Repair Today.</span>
              </h1>

              <div className="text-[1rem] sm:text-[1.15rem] font-medium leading-[1.7] text-gray-200 mt-6 max-w-[650px]">
                <p>
                  Don't let a cold home or lack of hot water disrupt your life. Our certified engineers provide rapid response for emergency boiler breakdowns across the UK.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6 pt-2">
                <a href="tel:01590631671" className="inline-flex items-center justify-center whitespace-nowrap px-6 py-4 sm:px-8 sm:py-5 text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-[#3b82f6] hover:bg-[#2563eb] rounded shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Call Now for Urgent Support
                </a>
                <a href="#contact" className="inline-flex items-center justify-center whitespace-nowrap px-6 py-4 sm:px-8 sm:py-5 text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-transparent hover:bg-white/10 border-2 border-white/30 rounded transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  Get a Quick Quote
                </a>
              </div>
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
      {/* Expert Breakdown Services Section */}
      <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <h2 className="text-[2rem] sm:text-[2.5rem] font-black text-slate-800 tracking-tight leading-[1.2] mb-6">
              Expert Boiler Breakdown Services Tailored to Your Needs
            </h2>
            <p className="text-slate-500 font-medium text-[1.05rem] sm:text-[1.1rem] leading-[1.8]">
              Whether it's a sudden emergency or a persistent fault, our team is equipped to handle <strong className="text-slate-800">all boiler makes and models</strong>. From modern high-efficiency systems to older units, we ensure your home stays warm and your water runs hot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-[2rem] p-8 sm:p-10 border border-slate-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Emergency Boiler Breakdown</h3>
              <p className="text-slate-600 leading-[1.7] text-[15px]">
                We understand that a breakdown never happens at a convenient time. Our 24/7 emergency response team is ready to restore your heating and hot water immediately.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-[2rem] p-8 sm:p-10 border border-slate-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#059669]/10 text-[#059669] rounded-2xl flex items-center justify-center mb-6 border border-[#059669]/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Oil & LPG Boiler Specialists</h3>
              <p className="text-slate-600 leading-[1.7] text-[15px]">
                Operating an off-grid system? We provide specialized maintenance and rapid repair services for all types of oil-fired and LPG-powered boilers, ensuring safe and efficient operation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-[2rem] p-8 sm:p-10 border border-slate-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Gas & Combi Boiler Repairs</h3>
              <p className="text-slate-600 leading-[1.7] text-[15px]">
                From standard system boilers to modern, space-saving <strong className="text-slate-800">combi boilers</strong>, our <strong className="text-slate-800">Gas Safe registered</strong> engineers have the expertise to diagnose and fix faults quickly, minimizing disruption to your daily routine.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-[2rem] p-8 sm:p-10 border border-slate-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Local Coverage</h3>
              <p className="text-slate-600 leading-[1.7] text-[15px]">
                From major cities to surrounding areas, we offer dedicated support. Looking for a "boiler breakdown repair" in <strong className="text-slate-800">Bournemouth or the New Forest</strong>? We have local engineers nearby, ready to assist with all your gas, oil, LPG, and combi boiler needs.
              </p>
            </div>

          </div>

          <div className="flex justify-center mt-12 w-full">
            <a href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-10 py-5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-[0.85rem] tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:-translate-y-1">
              Get an Emergency Repair Quote
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

        </div>
      </section>

      {/* Insurance Information Section */}
      <section className="bg-slate-50 py-16 lg:py-20 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-[1000px]">
          
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-100 rounded-full blur-[50px] pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
              
              <div className="w-full lg:w-[65%]">
                <h2 className="text-[1.75rem] sm:text-[2.25rem] font-black text-slate-800 tracking-tight leading-[1.2] mb-6">
                  Common Boiler Questions: <br className="hidden sm:block" /> Is Boiler Breakdown Covered on House Insurance?
                </h2>
                
                <div className="space-y-4 text-slate-600 leading-[1.8] text-[1.05rem] sm:text-[1.1rem]">
                  <p>
                    A common question we receive is whether homeowners are protected if their heating system fails. Many standard house insurance policies <strong className="text-slate-800 font-bold">do not cover boiler breakdowns automatically</strong>—you often need a specific "boiler breakdown cover" add-on.
                  </p>
                </div>

                {/* Callout Box */}
                <div className="mt-8 bg-[#eef2ff] border-l-4 border-indigo-500 rounded-r-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-indigo-900 italic font-medium leading-[1.7] text-[0.95rem] sm:text-[1.05rem]">
                      Not sure if you’re covered? Our engineers can provide a professional assessment during your repair, giving you absolute peace of mind for the future. Contact us to learn more about comprehensive boiler breakdown cover in the UK.
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimalistic CTA Right Box */}
              <div className="w-full lg:w-[35%] flex flex-col items-center justify-center bg-slate-50 rounded-[1.5rem] p-8 border border-slate-100 text-center h-full auto-rows-[auto]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6 text-indigo-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-[1.1rem] font-bold text-slate-800 mb-2 uppercase">Protect Your Home</h3>
                <p className="text-slate-500 text-[0.95rem] mb-8">Discuss repair and future cover options with our experts today.</p>
                
                <a href="#contact" className="w-full group relative inline-flex items-center justify-center whitespace-nowrap px-6 py-4 bg-indigo-600 text-white font-bold text-[0.85rem] tracking-widest uppercase rounded-xl transition-all shadow-[0_10px_20px_rgba(79,70,229,0.2)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)] hover:bg-indigo-700 hover:-translate-y-0.5">
                  Contact Us Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      <LocationContact />


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
              Frequently Asked<br className="hidden sm:block" /> Questions
            </h2>
          </div>

          <FaqAccordion items={[
            {
              question: "Does home insurance cover boiler breakdown?",
              answer: "Generally, standard home insurance policies do not cover boiler breakdowns. Most basic policies are designed to cover \"perils\" like fire, theft, or flood damage. A breakdown caused by mechanical failure or old age is usually considered a maintenance issue, which is typically excluded. You will likely need a specific \"boiler breakdown\" add-on or a separate home emergency policy to get coverage for these repairs."
            },
            {
              question: "Is boiler breakdown covered on house insurance?",
              answer: "Not automatically. While some comprehensive home insurance packages offer \"Home Emergency\" cover as an optional extra, it is rarely a default feature. It is essential to check your specific policy documents for \"Home Emergency\" or \"Boiler & Heating\" coverage sections. If it is not listed, you are likely not covered for repairs, parts, or labor."
            },
            {
              question: "Does house insurance cover boiler breakdown?",
              answer: "No, a standard house insurance policy does not cover the cost of repairing or replacing a broken boiler. House insurance is primarily for structural damage or contents loss. If your boiler stops working due to a fault, you would typically need a separate boiler breakdown insurance policy or a service contract to cover the repair costs."
            },
            {
              question: "Is boiler breakdown cover worth it?",
              answer: "Whether it is \"worth it\" depends on your personal financial situation and the age of your boiler."
            }
          ]} />
        </div>
      </section>

      <ContactSection />

    </main>
  );
}
