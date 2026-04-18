'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus({ type: 'success', message: 'Enquiry sent successfully! We will be in touch soon.' });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: json.error || 'Failed to send enquiry. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'A network error occurred. Please try again.' });
    }

    setLoading(false);
  };

  return (
    <form className="space-y-7" onSubmit={handleSubmit}>

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
            name="name"
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
            name="email"
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
            name="phone"
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-800 placeholder-slate-400"
            placeholder="01590 631671"
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
            name="postcode"
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
          name="address"
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
            name="service"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800 appearance-none cursor-pointer"
            defaultValue="New Boiler"
          >
            <option value="New Boiler">New Boiler</option>
            <option value="Boiler Breakdown">Boiler Breakdown</option>
            <option value="Care Plans">Care Plans</option>
            <option value="Gas & LPG">Gas & LPG</option>
            <option value="Heating">Heating</option>
            <option value="Smart Thermostat">Smart Thermostat</option>
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
          name="message"
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
          disabled={loading}
          className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold tracking-widest uppercase text-sm rounded-2xl shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
        >
          {loading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </>
          )}
        </button>
        <p className="text-slate-400 text-[0.80rem] font-bold uppercase tracking-widest max-w-[200px] text-center sm:text-right leading-relaxed">
          Secure connection. <br/> We'll reply shortly.
        </p>
      </div>

      {status && (
        <div className={`p-4 mt-4 rounded-xl text-sm font-bold flex items-center justify-center gap-3 ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {status.type === 'success' ? (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          ) : (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          )}
          {status.message}
        </div>
      )}
    </form>
  );
}
