
import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';

import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';

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

              <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-10 py-4.5 sm:px-12 sm:py-5 bg-white text-blue-600 font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:bg-slate-50 transition-all duration-300">
                <span>GET IN TOUCH</span>
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

      {/* Redesigned Premium Product Showcase Section */}
      <section className="py-20 lg:py-32 bg-[#f8fafc] relative overflow-hidden">
        {/* Dynamic Architectural Background Elements */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100 rounded-bl-full pointer-events-none hidden lg:block border-b border-slate-200/50"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1250px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Sticky Summary & Image */}
            <div className="w-full lg:w-[45%] lg:sticky lg:top-36 relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
               <span className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                 <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                 Smart Technology
               </span>
               <h2 className="text-[2.5rem] lg:text-[3.25rem] font-black text-[#1e293b] tracking-tight leading-[1.05] mb-6">
                 MEET THE NEST THERMOSTAT
               </h2>
               <p className="text-slate-500 font-medium leading-[1.8] mb-12 text-[1.1rem]">
                 The 3rd-gen Nest Thermostat learns what temperatures you like, turns itself down when you're away, and connects to your mobile. It seamlessly keeps you comfortable while dramatically reducing your energy consumption.
               </p>

               <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] ring-1 ring-slate-200/60 bg-white group p-4 border border-white">
                  <div className="absolute inset-0 bg-blue-50/20 bg-gradient-to-tr from-transparent to-blue-100/10 pointer-events-none"></div>
                  <Image 
                    src="https://i.postimg.cc/bJCBgW2n/Nest.webp" 
                    alt="Nest Thermostat Device Mounted" 
                    fill 
                    className="object-cover rounded-[2rem] transform group-hover:scale-105 transition-transform duration-1000 ease-in-out mix-blend-multiply" 
                    unoptimized 
                  />
               </div>

               <Link href="/contact" className="mt-10 inline-flex items-center justify-center w-full max-w-[500px] px-8 py-5 bg-slate-900 text-white hover:bg-[#2563eb] font-bold uppercase tracking-widest text-[0.8rem] rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 group">
                 <span>Request Installation Quote</span>
                 <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </Link>
            </div>

            {/* Right Column: Scrollable Bento Grid of Features */}
            <div className="w-full lg:w-[55%] relative z-10 pt-2 lg:pt-0">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                 
                 {[
                   { 
                     title: "No more programming", 
                     desc: "Just turn it up and down. With Auto-Schedule, Nest learns from you and programs itself perfectly.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   },
                   { 
                     title: "Control it remotely", 
                     desc: "Change the temperature from anywhere using your mobile, tablet or laptop.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                   },
                   { 
                     title: "Check Energy History", 
                     desc: "See how much energy you used and exactly why. The more you know, the more you save.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                   },
                   { 
                     title: "Say goodbye to guessing", 
                     desc: "True Radiant turns the heat on just in time to reach the temperature you want, when you want.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   },
                   { 
                     title: "Save while you're away", 
                     desc: "Don't heat an empty home. Home/Away Assist intelligently adjusts the temperature after you leave.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   },
                   { 
                     title: "Manage your hot water", 
                     desc: "Nest can control your hot water tank. You can even adjust the hot water schedule straight from your mobile.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   },
                   { 
                     title: "Hello, Leaf", 
                     desc: "Know you're actively saving energy. Look for the green Nest Leaf when you change the temperature efficiently.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                   },
                   { 
                     title: "Get it installed", 
                     desc: "The Nest Thermostat should be installed by a professional. We are your official local accredited Pro.", 
                     icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   }
                 ].map((feat, i) => (
                   <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.12)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group/card relative overflow-hidden">
                     {/* Hover Glow Effect */}
                     <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                     <div className="relative z-10">
                       <div className="w-14 h-14 rounded-[1.1rem] bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center text-blue-600 mb-6 ring-1 ring-blue-100/50 group-hover/card:scale-110 transition-transform duration-500 shadow-sm">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{feat.icon}</svg>
                       </div>
                       <h3 className="text-[#1e293b] font-bold text-[1.15rem] leading-tight mb-3 tracking-tight group-hover/card:text-blue-700 transition-colors">{feat.title}</h3>
                       <p className="text-slate-500 text-[0.95rem] leading-[1.65] font-medium">{feat.desc}</p>
                     </div>
                   </div>
                 ))}
                 
               </div>
            </div>

          </div>
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

      <ContactSection />
    </main>
  );
}
