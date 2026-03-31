import WhyChooseUs from '@/components/WhyChooseUs';
import LocationContact from '@/components/LocationContact';
import FaqAccordion from '@/components/FaqAccordion';

import QuoteComponent from '@/components/QuoteComponent';

export default function OnlineBoilerQuotePage() {
  return (
    <main className="min-h-screen bg-slate-50 relative">
      
      {/* Decorative Full-Page Header Banner */}
      <div className="w-full bg-slate-900 pt-16 pb-32 sm:pt-20 sm:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621252179027-9db4f37803d1?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
             GET YOUR ONLINE BOILER QUOTE
           </h1>
           <p className="text-blue-100 font-medium text-[1.1rem] sm:text-[1.2rem] max-w-2xl mx-auto">
             Answer a few simple questions below to get an instant, highly accurate estimate for your new boiler installation. No obligations.
           </p>
        </div>
      </div>

      {/* Full Page Quote Engine Wrapper */}
      <section className="relative w-full -mt-20 sm:-mt-28 pb-20 z-20">
        <div className="container mx-auto px-2 sm:px-6 max-w-[1200px]">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 p-2 sm:p-6 lg:p-10 min-h-[600px] sm:min-h-[800px] flex flex-col relative overflow-hidden">
            
            {/* The secure React Wrapper linking external API sequence */}
            <div className="flex-1 w-full h-full relative">
               <QuoteComponent />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Location & Contact Section */}

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
              question: "How does the online boiler quote work?",
              answer: "Our online quote tool asks a few simple questions about your home and heating requirements. Based on your answers, we generate an indicative quote. We then follow up with a free home survey to provide a final, fixed-price quote with no hidden extras."
            },
            {
              question: "Is the online quote accurate?",
              answer: "Our online quote gives a reliable indicative price based on the information you provide. The final fixed price is confirmed after our free home survey, which allows us to account for any specific requirements of your property."
            },
            {
              question: "Is there any obligation after getting a quote?",
              answer: "Absolutely not. Our quotes are completely free and come with no obligation. We will never pressure you into making a decision. Our free home survey is designed to give you all the information you need to make an informed choice."
            },
            {
              question: "How quickly can I get a quote?",
              answer: "You can receive an indicative online quote in just a few minutes. For a full fixed-price quote, we typically arrange a free home survey within 2-3 working days of your enquiry, at a time that is convenient for you."
            },
            {
              question: "What information do I need to get a quote?",
              answer: "You will need basic information about your home: the property type, number of bedrooms and bathrooms, your current boiler type, and your preferred new boiler type. The more details you provide, the more accurate the initial quote will be."
            }
          ]} />
        </div>
      </section>

      <LocationContact />

    </main>
  );
}
