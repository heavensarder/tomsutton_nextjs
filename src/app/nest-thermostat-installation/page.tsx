'use client';

import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import LeadForm from '@/components/LeadForm';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function NestThermostatInstallationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Compact Hero Section */}
      <section className="relative w-full flex items-center bg-[#2563eb] text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden z-10 min-h-[60vh]">
        {/* Deep Blurred Background Ambient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* subtle pattern or gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 opacity-90"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/30 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-700/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/4 translate-y-1/4"></div>
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-700/50 border border-blue-400/30 backdrop-blur-sm mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300 animate-pulse"></span>
                <span className="font-bold text-[0.7rem] sm:text-xs tracking-[0.15em] text-white uppercase leading-snug">
                  Smart Home Experts
                </span>
              </div>

              <h1 className="text-[2.25rem] sm:text-4xl lg:text-[3.5rem] font-black tracking-tight leading-[1.05] mb-8 drop-shadow-md">
                Accredited Nest <br className="hidden lg:block"/> Pro Installer
              </h1>
              
              <div className="space-y-5 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.7] text-blue-50 mb-10 max-w-[650px]">
                <p>
                  Tom Sutton Heating are now proud installers of Nest products which include heating controls, smoke and carbon dioxide alarms, transforming your home into a smart home.
                </p>
                <p>
                  Easily implemented, Nest products sit on your local Wi-Fi network so that you can monitor and control multiple aspects of your home like heating, hot water and safety using a single user interface: The Nest App on your smart phone.
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4.5 sm:px-12 sm:py-5 bg-white text-blue-600 font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:bg-slate-50 transition-all duration-300">
                <span>CONTACT US</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

            {/* Right Media Area - Isolated Transparent SVG Logo */}
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 flex justify-center lg:justify-end z-20 group">
              <div className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
                <Image 
                  src="https://i.postimg.cc/4yFRKn1b/Nest-White.webp" 
                  alt="Works with Nest - Smart Home Technology Logo" 
                  fill 
                  className="object-contain transform transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]" 
                  unoptimized 
                />
              </div>
            </div>

          </div>
        </div>

        {/* Elegant Bottom Curve Divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] sm:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C52.16,93.2,105.51,86.74,157.43,80.12h0c58-7.46,115.42-15.68,172-23.7Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Main Dual-Column Content Interface */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">

            {/* Left Column: Typography Content & Checklist */}
            <div className="w-full lg:w-[55%] flex flex-col items-start lg:pr-4">
              
              <h2 className="text-[2.25rem] sm:text-[2.75rem] font-black text-[#334155] mb-8 tracking-tight leading-[1.1] uppercase">
                MEET THE NEST THERMOSTAT
              </h2>

              <div className="text-[#64748b] font-medium text-[1.1rem] leading-[1.8] mb-10 w-full space-y-6">
                <p>
                  We are now Nest Pro installers. This means we can offer fantastic deals on Nest thermostats.
                </p>
                <p>
                  If you haven't heard about Nest take a look at the details below to see how Nest can save you money on your heating bills.
                </p>

                <div className="mt-8 space-y-8 bg-white/70 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
                  
                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Meet the Nest Learning Thermostat</h3>
                    <p className="text-[1.05rem]">The 3rd-gen Nest Thermostat learns what temperatures you like, turns itself down when you're away and connects to your mobile. So it can keep you comfortable and help save energy.</p>
                  </div>

                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">No more programming</h3>
                    <p className="text-[1.05rem]">Just turn it up and down. With Auto-Schedule, Nest learns from you and programs itself.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Control it remotely</h3>
                    <p className="text-[1.05rem]">Change the temperature from anywhere using your mobile, tablet or laptop.</p>
                  </div>

                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Check your Energy History</h3>
                    <p className="text-[1.05rem]">See how much energy you used and why. The more you know, the more you can save.</p>
                  </div>

                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Say goodbye to guessing</h3>
                    <p className="text-[1.05rem]">True Radiant turns the heat on just in time to reach the temperature you want, when you want.</p>
                  </div>

                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Save while you're away</h3>
                    <p className="text-[1.05rem]">Don't heat an empty home. Home/Away Assist adjusts the temperature after you leave.</p>
                  </div>

                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Manage your hot water</h3>
                    <p className="text-[1.05rem]">Nest can control your hot water tank. You can even adjust the hot water schedule from your mobile.</p>
                  </div>

                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Hello, Leaf</h3>
                    <p className="text-[1.05rem]">Know you're saving energy. Look for the Nest Leaf when you change the temperature.</p>
                  </div>

                  <div>
                    <h3 className="text-slate-800 font-bold mb-1">Get it installed</h3>
                    <p className="text-[1.05rem]">The Nest Thermostat should be installed by a professional. Find a local pro at nest.com/install</p>
                  </div>

                </div>

                <p className="pt-4">
                  To speak with us regarding Nest installations, please call <strong className="text-slate-800">01590 631671</strong> or <strong className="text-slate-800">07774 673109</strong> or leave your details on our contact form and we'll get back to you as soon as possible.
                </p>
              </div>

              <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#1d4ed8] text-white font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_10px_30px_-10px_rgba(29,78,216,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(29,78,216,0.8)] hover:-translate-y-1 hover:bg-[#1e40af] transition-all">
                <span>READ SPEC SHEET</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
            </div>

            {/* Right Column: Lead Form Mapping */}
            <div className="w-full lg:w-[45%] flex flex-col space-y-12 relative z-10 w-full">
              
              {/* Media Block Port - Using standard layout image mapping */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 group bg-white p-2">
                <Image
                  src="https://i.postimg.cc/bJCBgW2n/Nest.webp"
                  alt="Nest Thermostat Device Mounted on Wall"
                  fill
                  className="object-cover rounded-[1.3rem] transform group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>

              {/* Native LeadForm Component Instance */}
              <div className="w-full relative z-10 block rounded-3xl overflow-hidden shadow-2xl bg-white sticky top-24">
                {/* The global Lead Form dynamically includes its title and internal UI safely */}
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
              question: "What is a Nest thermostat and how does it work?",
              answer: "The Google Nest Learning Thermostat is a smart thermostat that learns your schedule and preferred temperatures over time, then automatically adjusts your heating to keep you comfortable while reducing energy waste. You can control it from your phone, tablet, or laptop from anywhere."
            },
            {
              question: "Will a Nest thermostat work with my existing boiler?",
              answer: "The Nest thermostat is compatible with most conventional and combi boilers. During our free survey, we will check your existing system to confirm compatibility and advise on the best model for your setup. It works with gas, oil, and heat pump systems."
            },
            {
              question: "How much can I save with a Nest thermostat?",
              answer: "Independent studies show the Nest thermostat can save up to 26% on heating bills. By learning your routine and using features like Home/Away Assist, it ensures your heating only runs when needed, reducing energy waste significantly."
            },
            {
              question: "How long does a Nest thermostat installation take?",
              answer: "A standard Nest thermostat installation typically takes around 1-2 hours. This includes removing your old thermostat, wiring in the new Nest unit, setting up your Wi-Fi connection, and configuring the Nest app on your phone."
            },
            {
              question: "Can I control my Nest thermostat remotely?",
              answer: "Yes! With the Nest app on your smartphone, you can adjust your heating from anywhere with an internet connection. You can also set schedules, view energy usage history, and receive maintenance reminders. It also works with Google Home and Amazon Alexa for voice control."
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
