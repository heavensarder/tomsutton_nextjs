import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28 border-t border-slate-100 relative overflow-hidden z-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-50/80 to-transparent blur-3xl"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-gradient-to-tl from-cyan-50/50 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px] relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] sm:text-[2.5rem] font-black text-slate-800 tracking-tight uppercase mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-500 font-medium text-[1.1rem] max-w-[600px] mx-auto leading-relaxed">
            Ready to upgrade your heating or need expert advice? Leave your details below and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="bg-slate-50 rounded-[2.5rem] shadow-sm border border-slate-200 p-8 sm:p-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
