import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafd] pt-24 pb-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0d1033] uppercase">Get In Touch</span>
          </div>
          <h1 className="text-[2.5rem] sm:text-[3.5rem] font-black text-[#0d1033] tracking-tight leading-[1.1] mb-6">
            We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Help.</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-[1.15rem] leading-[1.7] font-medium">
            Whether you need a new boiler, a routine service, or emergency repairs, our expert engineers are ready. Contact us today.
          </p>
        </div>

        {/* Main Dual-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Info Card */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group">
              {/* Subtle top border gradient */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              
              <h2 className="text-[1.75rem] font-bold text-slate-800 mb-4 tracking-tight">Direct Contact</h2>
              <p className="text-slate-500 font-medium mb-10 text-[0.95rem] leading-[1.7]">
                You can get in touch with us using the details below or by filling out the contact form.
              </p>

              <div className="space-y-8 relative z-10">
                {/* Office */}
                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Office</p>
                    <a href="tel:01590631671" className="text-[1.15rem] font-bold text-slate-800 hover:text-blue-600 transition-colors">01590 631671</a>
                  </div>
                </div>



                {/* Email */}
                <div className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@tomsuttonheating.co.uk" className="text-[1.15rem] font-bold text-slate-800 hover:text-emerald-600 transition-colors break-all">info@tomsuttonheating.co.uk</a>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100 my-8"></div>

              {/* Areas Covered */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-[0.85rem] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Areas Covered
                </h3>
                <p className="text-slate-600 font-medium leading-[1.7] text-[0.95rem]">
                  Lymington & surrounding towns/villages, Brockenhurst, Lyndhurst, New Milton, Highcliffe, Christchurch, Ringwood, Bournemouth
                </p>
              </div>

            </div>

            {/* Premium Google Map Card */}
            <div className="bg-white rounded-[2.5rem] p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group">
              <div className="w-full h-[320px] sm:h-[400px] relative rounded-[2rem] overflow-hidden bg-slate-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11975.800090631106!2d-1.670417!3d50.757245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487383d967293ef5%3A0x722abc9b62d8ffc2!2sTom%20Sutton%20Heating!5e1!3m2!1sen!2suk!4v1774553234424!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[10%] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0 relative z-0"
                ></iframe>
                {/* Subtle overlay to make map look embedded premium */}
                <div className="absolute inset-0 pointer-events-none rounded-[2rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-black/5 z-10"></div>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative h-full">
              {/* Decorative side accent mask */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-[100px] pointer-events-none opacity-60"></div>
              
              <div className="p-8 sm:p-12 lg:p-14">
                <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-slate-800 mb-3 tracking-tight">Leave Your Details</h2>
                <p className="text-slate-500 font-medium mb-10 text-[0.95rem] sm:text-[1.05rem] leading-[1.7]">
                  Leave your details below and we'll get in touch to discuss your new boiler.
                </p>

                <form className="space-y-7" action="/contact">
                  
                  {/* Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                    {/* Name */}
                    <div className="space-y-2.5">
                      <label htmlFor="name" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
                        Name <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800 placeholder-slate-400"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2.5">
                      <label htmlFor="email" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800 placeholder-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2.5">
                      <label htmlFor="phone" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
                        Phone <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800 placeholder-slate-400"
                        placeholder="07123 456789"
                      />
                    </div>

                    {/* Postcode */}
                    <div className="space-y-2.5">
                      <label htmlFor="postcode" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
                        Postcode
                      </label>
                      <input 
                        type="text" 
                        id="postcode" 
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800 placeholder-slate-400 uppercase"
                        placeholder="SO41 9GP"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2.5">
                    <label htmlFor="address" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
                      Address <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="address" 
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800 placeholder-slate-400"
                      placeholder="123 Example Street, Town"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2.5">
                    <label htmlFor="service" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
                      Service Requirement
                    </label>
                    <div className="relative group">
                      <select 
                        id="service" 
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800 appearance-none cursor-pointer"
                        defaultValue="New Boiler"
                      >
                        <option value="New Boiler">New Boiler</option>
                        <option value="Care Plans">Care Plans</option>
                        <option value="Gas & LPG">Gas & LPG</option>
                        <option value="Heating">Heating</option>
                        <option value="Nest Installation">Nest Installation</option>
                        <option value="Plumbing & Bathrooms">Plumbing & Bathrooms</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-blue-600 transition-transform group-hover:translate-y-[2px]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2.5">
                    <label htmlFor="message" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      rows={6}
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800 placeholder-slate-400 resize-y"
                      placeholder="Please briefly describe your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                    >
                      <span>Send Enquiry</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                    <p className="text-slate-400 text-[0.80rem] font-bold uppercase tracking-widest max-w-[200px] text-center sm:text-right leading-relaxed">
                      Secure connection. <br/> We'll reply shortly.
                    </p>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
