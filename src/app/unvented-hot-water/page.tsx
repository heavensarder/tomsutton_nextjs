import Image from 'next/image';
import Link from 'next/link';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';

export default function UnventedHotWaterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Premium Glassmorphic Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden z-10">
        
        {/* Deep Blurred Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden" suppressHydrationWarning>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/40 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left text-white">
              
              <h1 className="text-[1.75rem] sm:text-3xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] mb-5 drop-shadow-md uppercase">
                UNVENTED HOT WATER CYLINDER INSTALLATION
              </h1>
              
              <h3 className="text-[0.8rem] sm:text-[0.95rem] font-bold tracking-widest text-white uppercase mb-6 drop-shadow-sm">
                UNVENTED HOT WATER CYLINDER INSTALLATION
              </h3>
              
              <div className="space-y-4 text-[0.95rem] sm:text-[1.05rem] font-medium leading-[1.6] text-white/90 overflow-hidden mb-8 max-w-[600px]">
                <p>Are you looking for consistent hot water at high pressure?</p>
                <p>Do you want to enjoy a nice, warm and powerful shower in the mornings?</p>
                <p>Is your current hot water system not giving you what you need?</p>
                <p>If this is the case, an unvented hot water cylinder may be the solution you have been looking for.</p>
                <p>Tom Sutton Heating and its team of local unvented qualified heating engineers are here to help!</p>
                <p>We offer fast, friendly and reliable service, and are always on hand to help provide plumbing solutions to you and your family. Check out our <Link href="/our-reviews" className="underline underline-offset-4 decoration-blue-300 hover:text-white transition-colors">review page</Link> or our <a href="https://www.google.com/maps?cid=8226595044909973442" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-blue-300 hover:text-white transition-colors">Google listing</a> if you are unsure!</p>
              </div>

              {/* Trust Highlight Array */}
              <div className="inline-flex flex-row items-center justify-center lg:justify-start gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#27303f]/95 border border-white/10 backdrop-blur-sm mb-10 shadow-md text-left w-auto max-w-full">
                <svg className="w-4 h-4 sm:w-4 sm:h-4 text-[#fbbf24] shrink-0 translate-y-[0.5px]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="font-bold text-[0.65rem] sm:text-[0.75rem] tracking-[0.08em] uppercase text-white leading-snug">
                  WE ARE 5 STAR RATED ON GOOGLE AND RATED 9.9/10 ON CHECKATRADE
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 sm:py-5 bg-[#f38230] text-white font-black text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(243,130,48,0.3)] hover:shadow-[0_20px_40px_rgba(243,130,48,0.45)] hover:-translate-y-1">
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">GET IN TOUCH</span>
                </Link>
              </div>

            </div>

            {/* Right Media Area */}
            <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 group z-20 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] sm:max-w-[600px] aspect-[16/9] lg:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl ring-[6px] ring-white/10 transform transition-transform duration-700 group-hover:-translate-y-2 bg-slate-800">
                <Image 
                  src="https://i.postimg.cc/rwxx0D43/IMG-8782-scaled-534x310.webp" 
                  alt="Unvented Hot Water Cylinder Installation" 
                  fill 
                  className="object-cover scale-[1.02] group-hover:scale-[1.04] transition-transform duration-1000 ease-out" 
                  priority
                  unoptimized 
                />
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium 'Why Unvented' Explanation Module */}
      <section className="bg-slate-50 py-20 lg:py-32 relative overflow-hidden z-20">
        
        {/* Subtle Decorative Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
          
          <div className="bg-white rounded-[3rem] p-8 sm:p-12 lg:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 text-center relative overflow-hidden group">
            
            {/* Top glowing accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-blue-400 via-[#f38230] to-blue-400"></div>

            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 shadow-inner rotate-3 group-hover:rotate-6 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>

            <h2 className="text-[2rem] sm:text-[2.75rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-8 text-balance">
              WHY AN UNVENTED HOT WATER CYLINDER?
            </h2>
            
            <div className="space-y-6 text-slate-600 text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.8] mb-12 text-balance max-w-[800px] mx-auto">
              <p>
                Unvented hot water cylinders are a superb solution to providing homes with large volumes of hot water at mains pressure. An unvented hot water cylinder is a store of pressurised hot water that is held in a heavy insulated hot water cylinder. The great thing about unvented hot water cylinders is that <strong className="text-slate-800">multiple hot water outlets can be used at the same time</strong>.
              </p>
              <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto my-8"></div>
              <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.7]">
                There are some things you may need to consider before installing an unvented hot water cylinder. Firstly, and most importantly, it is essential that you check that you have the correct pressure and flow rate. It is recommended that you have at least <strong className="text-slate-800">1.5bar standing cold water pressure</strong>, and a flow rate of at least <strong className="text-slate-800">20 litres per minute</strong>.
              </p>
              <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.7]">
                It is also important to consider the location of the hot water cylinder and the route to take out the safety discharge pipe. The safety discharge pipe is part of the cylinders fail-safe safety controls, but this will all be checked by an engineer during the survey visit.
              </p>
            </div>

            <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap px-10 py-5 bg-[#f38230] text-white font-black tracking-widest text-sm uppercase rounded-xl transition-all shadow-[0_15px_30px_rgba(243,130,48,0.3)] hover:shadow-[0_20px_40px_rgba(243,130,48,0.45)] hover:-translate-y-1">
              CONTACT US TODAY
            </Link>

          </div>

        </div>
      </section>

      {/* Dark Premium Trust Ribbon */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-black text-white tracking-tight mb-4 uppercase drop-shadow-md">
            LOCAL, RELIABLE AND RECOMMENDED
          </h2>
          
          <p className="text-blue-100 text-[1.1rem] mb-12 font-medium tracking-wide">
            We are recommended on Google with a 5* rating for our customer service and rated 9/10 on Checkatrade.
          </p>

          {/* Trust Logos Array in Glowing Dark Mode Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a href="https://www.google.com/maps/place/Tom+Sutton+Heating/@50.7572451,-1.6704168,688m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487383d967293ef5:0x722abc9b62d8ffc2!8m2!3d50.7572451!4d-1.6704168!16s%2Fg%2F11b5pjq4ng?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="relative w-[240px] h-[85px] bg-white rounded-2xl flex items-center justify-center p-4 hover:scale-[1.05] transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative w-[180px] h-[55px]">
                <Image src="https://i.postimg.cc/5yrxGmSh/google.webp" alt="Google Customer Reviews" fill className="object-contain" unoptimized />
              </div>
            </a>
            
            <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="relative w-[280px] h-[85px] bg-white rounded-2xl flex items-center justify-center p-4 hover:scale-[1.05] transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative w-[210px] h-[65px]">
                <Image src="https://i.postimg.cc/3rfJdKQY/checktrade.webp" alt="Checkatrade Approved" fill className="object-contain pointer-events-none" unoptimized />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Embedded Map Tier */}
      <section className="bg-slate-50 py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1200px] text-center relative z-10">
          
          <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[2.75rem] font-black text-slate-800 tracking-tight mb-4 uppercase">
            UNVENTED HOT WATER CYLINDERS IN NEW MILTON AND BEYOND
          </h2>
          
          <p className="text-slate-600 text-[1.1rem] sm:text-[1.25rem] mb-16 font-medium max-w-[900px] mx-auto text-balance">
            We install unvented hot water cylinders in New Milton, Lymington, Christchurch, Highcliffe, Bournemouth, Brockenhurst, and all across the New Forest!
          </p>

          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-[6px] ring-white transform transition-transform duration-700 hover:-translate-y-2 group bg-slate-200 mx-auto">
            {/* The Google Maps iframe injected securely into a full-width wrapper */}
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47892.66346250181!2d-1.6574833!3d50.767538599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873834296e6f56f%3A0x7e53183828716970!2sNew%20Milton!5e1!3m2!1sen!2suk!4v1774535325320!5m2!1sen!2suk" 
               className="absolute inset-0 w-full h-full border-0 filter brightness-[0.98] contrast-100 group-hover:brightness-100 transition-all duration-700"
               allowFullScreen={true}
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Tom Sutton Heating Coverage Map in New Milton"
            ></iframe>
            
            {/* Embedded interactive glass overlay that fades out on hover so users know it's a map */}
            <div className="absolute inset-0 bg-blue-900/5 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* Location & Contact Section */}

    

      <LocationContact />

    

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
              question: "What is an unvented hot water cylinder?",
              answer: "An unvented hot water cylinder is a pressurised hot water storage system that is fed directly from the mains water supply, rather than from a cold water tank in the loft. This provides mains-pressure hot water to all outlets, giving you powerful showers and fast-filling baths."
            },
            {
              question: "What are the benefits of an unvented cylinder over a vented system?",
              answer: "Unvented cylinders deliver mains-pressure hot water for better shower performance, eliminate the need for a cold water tank in the loft (freeing up space), reduce the risk of contamination, and provide more consistent water pressure to multiple outlets simultaneously."
            },
            {
              question: "Do I need special qualifications to install an unvented cylinder?",
              answer: "Yes, unvented hot water cylinders must be installed by a qualified engineer who holds the G3 unvented hot water qualification. All our engineers are G3 certified, ensuring your installation meets Building Regulations and is carried out safely."
            },
            {
              question: "How long does an unvented cylinder installation take?",
              answer: "A straightforward replacement typically takes one day. If we are converting from a vented to an unvented system, it may take 1-2 days as additional work such as fitting expansion vessels and safety valves is required to comply with regulations."
            },
            {
              question: "Can an unvented cylinder work with my existing boiler?",
              answer: "Unvented cylinders are compatible with most system boilers, regular boilers, and renewable heating systems such as heat pumps and solar thermal. They are not used with combi boilers, as combis provide hot water directly without a cylinder."
            }
          ]} />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
