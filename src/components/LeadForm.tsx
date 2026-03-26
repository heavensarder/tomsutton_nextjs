import React from 'react';

export default function LeadForm() {
  return (
    <div className="w-full bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/60 ring-1 ring-slate-900/5 relative overflow-hidden">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full blur-[30px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-tr-full blur-[30px] pointer-events-none"></div>

      <div className="text-center mb-8 relative z-10">
        <h2 className="text-2xl sm:text-[1.75rem] font-black text-slate-800 tracking-tight leading-none mb-3 uppercase">
          LEAVE YOUR DETAILS
        </h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mb-3"></div>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Leave your details below and we'll get in touch to discuss your new boiler.
        </p>
      </div>

      <form className="space-y-5 relative z-10">
        
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-[0.7rem] font-bold text-slate-600 uppercase tracking-wider">Full Name *</label>
          <input 
            type="text" 
            placeholder="Please enter your Full Name" 
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50/50 hover:bg-white shadow-sm"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="block text-[0.7rem] font-bold text-slate-600 uppercase tracking-wider">Phone *</label>
          <div className="relative flex items-center w-full border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50 hover:bg-white shadow-sm transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:bg-white">
            <div className="relative flex items-center border-r border-slate-200 bg-white hover:bg-slate-50 transition-colors">
              <select className="appearance-none bg-transparent pl-4 pr-10 py-3 text-sm font-semibold text-slate-700 cursor-pointer focus:outline-none z-10 w-24">
                <option value="+44">🇬🇧 +44</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+1">🇨🇦 +1</option>
                <option value="+353">🇮🇪 +353</option>
                <option value="+64">🇳🇿 +64</option>
                <option value="+27">🇿🇦 +27</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+39">🇮🇹 +39</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+31">🇳🇱 +31</option>
                <option value="+32">🇧🇪 +32</option>
                <option value="+41">🇨🇭 +41</option>
                <option value="+43">🇦🇹 +43</option>
                <option value="+46">🇸🇪 +46</option>
                <option value="+47">🇳🇴 +47</option>
                <option value="+45">🇩🇰 +45</option>
                <option value="+358">🇫🇮 +358</option>
                <option value="+48">🇵🇱 +48</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+86">🇨🇳 +86</option>
                <option value="+81">🇯🇵 +81</option>
                <option value="+82">🇰🇷 +82</option>
                <option value="+65">🇸🇬 +65</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+966">🇸🇦 +966</option>
                <option value="+55">🇧🇷 +55</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+54">🇦🇷 +54</option>
                <option value="+234">🇳🇬 +234</option>
                <option value="+254">🇰🇪 +254</option>
                <option value="+880">🇧🇩 +880</option>
                <option value="+92">🇵🇰 +92</option>
                <option value="+62">🇮🇩 +62</option>
                <option value="+60">🇲🇾 +60</option>
                <option value="+63">🇵🇭 +63</option>
                <option value="+66">🇹🇭 +66</option>
                <option value="+84">🇻🇳 +84</option>
                <option value="+20">🇪🇬 +20</option>
              </select>
              <svg className="w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <input 
              type="tel" 
              placeholder="Please enter your mobile number" 
              className="flex-1 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-[0.7rem] font-bold text-slate-600 uppercase tracking-wider">Email *</label>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50/50 hover:bg-white shadow-sm"
          />
        </div>

        {/* Postcode */}
        <div className="space-y-1.5">
          <label className="block text-[0.7rem] font-bold text-slate-600 uppercase tracking-wider">Postcode *</label>
          <input 
            type="text" 
            placeholder="Please enter your Postalcode" 
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50/50 hover:bg-white shadow-sm"
          />
        </div>

        {/* Radio Array 1: Current boiler working */}
        <div className="space-y-2 pt-2">
          <label className="block text-[0.75rem] font-bold text-slate-600">Is your current boiler working? *</label>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="working" className="w-3.5 h-3.5 text-blue-500 border-slate-300 focus:ring-blue-500" />
              <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="working" className="w-3.5 h-3.5 text-blue-500 border-slate-300 focus:ring-blue-500" />
              <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">No</span>
            </label>
          </div>
        </div>

        {/* Radio Array 2: Current boiler type */}
        <div className="space-y-2 pt-2">
          <label className="block text-[0.75rem] font-bold text-slate-600">What type of boiler do you currently have? *</label>
          <div className="flex flex-col gap-1.5">
            {["Combi", "System", "Back Boiler", "Open Vent", "Not sure/Other"].map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="currentType" className="w-3.5 h-3.5 text-blue-500 border-slate-300 focus:ring-blue-500" />
                <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Radio Array 3: Boiler type wanted */}
        <div className="space-y-2 pt-2">
          <label className="block text-[0.75rem] font-bold text-slate-600">What type of boiler do you want installed? *</label>
          <div className="flex flex-col gap-1.5">
            {["Combi boiler", "Regular boiler", "System boiler", "Not sure"].map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="wantedType" className="w-3.5 h-3.5 text-blue-500 border-slate-300 focus:ring-blue-500" />
                <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Radio Array 4: Reason for replacing */}
        <div className="space-y-2 pt-2">
          <label className="block text-[0.75rem] font-bold text-slate-600">What is the reason for replacing your boiler? *</label>
          <div className="flex flex-col gap-1.5">
            {["Broken/faulty", "Age/efficiency", "Would like better hot water", "Home renovation"].map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="reason" className="w-3.5 h-3.5 text-blue-500 border-slate-300 focus:ring-blue-500" />
                <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button 
            type="button" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black tracking-widest text-[0.9rem] uppercase py-3.5 rounded-lg shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.01]"
          >
            Submit Application
          </button>
        </div>

      </form>
    </div>
  );
}
