'use client';

import Link from 'next/link';
import ScrollAnimate from '@/components/ScrollAnimate';

export default function LocationContact() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate animation="fadeUp">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#ff5e14] text-sm font-bold uppercase tracking-wider mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black text-[#0d1033] tracking-tight mb-4">Visit Us or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] to-[#ff8c42]">Get in Touch</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base font-medium">Serving the New Forest and beyond — from Lymington to Bournemouth, we&apos;re always nearby when you need us.</p>
        </div>
        </ScrollAnimate>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left: Map */}
          <ScrollAnimate animation="fadeLeft" className="flex-1 min-w-0">
            <div className="rounded-2xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border border-gray-100 h-full min-h-[350px] lg:min-h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.9500162605204!2d-1.6704168000000001!3d50.757245100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487383d967293ef5%3A0x722abc9b62d8ffc2!2sTom%20Sutton%20Heating!5e0!3m2!1sen!2sbd!4v1774807873622!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Tom Sutton Heating Location"
              />
            </div>
          </ScrollAnimate>

          {/* Right: Contact Info */}
          <ScrollAnimate animation="fadeRight" delay={200} className="w-full lg:w-[420px] shrink-0">
            <div className="flex flex-col gap-4 h-full">

              {/* Phone */}
              <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#ff5e14]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff5e14] transition-colors">
                  <svg className="w-5 h-5 text-[#ff5e14] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Call Us</p>
                  <a href="tel:01590631671" className="text-[#0d1033] font-bold text-lg hover:text-[#ff5e14] transition-colors">01590 631671</a>
                  <p className="text-gray-400 text-xs mt-0.5">Mon-Sat, 8am - 6pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#00d0bb]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00d0bb] transition-colors">
                  <svg className="w-5 h-5 text-[#00d0bb] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Email Us</p>
                  <a href="mailto:info@tomsuttonheating.co.uk" className="text-[#0d1033] font-bold text-sm sm:text-base hover:text-[#00d0bb] transition-colors">info@tomsuttonheating.co.uk</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Our Service Area</p>
                  <p className="text-[#0d1033] font-bold text-base leading-snug">New Milton, Hampshire<br/>BH25, United Kingdom</p>
                </div>
              </div>

              {/* Emergency */}
              <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                  <svg className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-0.5">Emergency Callout</p>
                  <p className="text-[#0d1033] font-bold text-base">Out-of-hours available</p>
                  <p className="text-gray-400 text-xs mt-0.5">24/7 for existing customers</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="group mt-2 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#ff5e14] to-[#ff8c42] rounded-xl font-bold text-white text-base hover:from-[#ff6a00] hover:to-[#ff9c52] transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(255,94,20,0.4)]">
                Contact Us Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>

            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
