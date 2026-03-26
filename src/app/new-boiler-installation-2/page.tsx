import Image from 'next/image';
import InteractiveSlider from '@/components/InteractiveSlider';
import Link from 'next/link';
import ReviewWidget from '@/components/ReviewWidget';

export const metadata = {
  title: 'New Boiler Installation Bournemouth - Tom Sutton Heating',
  description: 'Expert boiler installation in the Bournemouth area. Express installation, finance options, and up to 13 years warranty on selected boilers.',
};

export default function NewBoilerInstallationPage() {
  return (
    <main className="w-full">
      {/* Sub-Page Premium Banner Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-24 pb-6 lg:pt-28 lg:pb-16 mt-0">

        {/* Deep Blurred Background Image Overlay - Clamped to background only */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Generic moody boiler room background deeply blurred to perfectly simulate depth-of-field in reference */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-md scale-110"></div>
          {/* Subtractive dual-gradient to enforce absolute text readability across all display resolutions */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>

        {/* Hero Content Container */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

            {/* Left Column: Typography & CTAs */}
            <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6 animate-fade-in-up pb-2 lg:pb-0">

              {/* Reference Check: "BOILER INSTALLATION BOURNEMOUTH AREA" */}
              <div className="inline-block uppercase tracking-wider font-extrabold text-xs sm:text-sm md:text-base text-gray-200">
                Boiler Installation Bournemouth Area
              </div>

              {/* Main Heading Sequence: "Need a New Boiler? No problem!" */}
              <h1 className="flex flex-col space-y-1 sm:space-y-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">Need a New Boiler?</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">No problem!</span>
              </h1>

              {/* Checkmark Features List Array */}
              <ul className="flex flex-col gap-2 mt-1 mb-2 text-sm sm:text-base font-medium text-gray-200 w-fit mx-auto lg:mx-0 text-left">
                {[
                  "Express Boiler Installation",
                  "Next Day Boiler Install",
                  "Finance Options Available",
                  "13 Year Warranty On Selected Boilers"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                      <svg className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="tracking-wide group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Primary Call to Action Button */}
              <div className="pt-2 sm:pt-3 w-full flex justify-center lg:justify-start">
                <Link
                  href="/online-boiler-quote"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-[#3b82f6] hover:bg-[#2563eb] rounded shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 hover:-translate-y-1"
                >
                  Request a Quote Now
                </Link>
              </div>
            </div>

            {/* Right Column: Massive 3D Pop-Out Boiler Asset */}
            <div className="w-full lg:w-[45%] xl:w-[50%] relative flex justify-center lg:static mt-2 lg:mt-0 pointer-events-none">
              {/* Absolute positioning on Desktop. Hard-capped dynamic height on Mobile to prevent vertical bloat. */}
              <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[300px] sm:max-w-[400px] h-[250px] sm:h-[300px] lg:h-auto lg:max-w-none lg:w-[600px] xl:w-[750px] lg:aspect-square z-20">
                {/* Image Glow Underlay for Dynamic Depth Contrast */}
                <div className="absolute inset-0 bg-blue-500/15 blur-[80px] lg:blur-[120px] rounded-full mix-blend-screen scale-75"></div>

                <Image
                  src="https://i.postimg.cc/prb8FcCJ/Slide-Image.webp"
                  alt="Worcester Bosch Accredited Boiler Installation System Details"
                  fill
                  className="object-contain lg:object-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Layout Sub-Section */}
      <section className="bg-slate-50 relative z-0 py-16 lg:py-24 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

            {/* Left Column: Text Content & Service Areas */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-6">

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
                Boiler Installation Bournemouth<br />
                And Beyond
              </h2>

              <p className="text-lg md:text-xl font-medium text-slate-700">
                The Bournemouth area's boiler installation and maintenance specialists!
              </p>

              <p className="text-base text-slate-600 max-w-lg">
                If you are looking for a new boiler installation in the Bournemouth area call us today on <span className="font-bold text-slate-800">01590 540188</span>.
              </p>

              <div className="w-full pt-6 pb-2 border-t border-slate-200 mt-4">
                <p className="font-semibold text-slate-800 mb-6 font-serif">Our home base is in New Milton but we cover:</p>

                {/* Modern Pill Grid for Areas */}
                <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  {["Bournemouth", "Southbourne", "Christchurch", "New Milton", "Lymington", "Brockenhurst", "Ringwood"].map((area, idx) => (
                    <span key={idx} className="px-5 py-2 bg-white border border-slate-200 shadow-sm rounded-full text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base font-semibold text-slate-800 italic mt-4">
                And the rest of the New Forest!
              </p>
            </div>

            {/* Right Column: CTA Triptych & Reviews */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-10">

              {/* Call to Action Buttons Block */}
              <div className="flex flex-col space-y-3 pt-2">
                {[
                  { title: "Contact us", href: "/contact" },
                  { title: "See our boiler range", href: "/new-boiler-installation-2" },
                  { title: "Book a home survey", href: "/contact" }
                ].map((btn, idx) => (
                  <Link
                    key={idx}
                    href={btn.href}
                    className="group relative w-full lg:max-w-xs xl:max-w-sm mx-auto overflow-hidden rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#fca5a5] to-[#f97316] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-out"></div>
                    <div className="w-full text-center px-4 py-3 bg-gradient-to-b from-[#fbad54] to-[#f08518] text-white font-semibold text-[15px] sm:text-base hover:from-[#fc9c32] hover:to-[#e17409] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] border border-[#d67212]">
                      {btn.title}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Review Section */}
              <div className="flex flex-col items-center pt-6 mt-4 border-t border-slate-200">
                <h3 className="text-xl md:text-[22px] lg:text-[26px] font-light text-slate-800 text-center uppercase tracking-wide leading-snug mb-6">
                  See what our customers say about our new boiler installations
                </h3>

                {/* Static Header Image specifically requested by user */}
                <div className="w-full max-w-[300px] h-[100px] sm:h-[120px] relative mb-4">
                  <Image
                    src="https://i.postimg.cc/5yrxGmSh/google.webp"
                    alt="5 Star Google Review Reputation for Tom Sutton Heating"
                    fill
                    className="object-contain object-center mix-blend-multiply"
                    sizes="300px"
                  />
                </div>

                {/* Dynamically Inject the globally unified Review Widget Slider */}
                <div className="w-full bg-white p-2 rounded-xl border border-slate-100 shadow-md">
                  <ReviewWidget />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Tertiary Information Grid & Trust Badges Section */}
      <section className="bg-white relative z-0 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">

          {/* Top Row: Ratings & Efficiency Structured Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-20">
            {/* 5-Star Card Layout */}
            <div className="flex flex-col text-center items-center p-8 sm:p-10 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-orange-100">
                <svg className="w-8 h-8 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-wide mb-6">5* Rated Boiler Installation</h3>
              <p className="text-slate-600 leading-relaxed max-w-md mx-auto mb-5 text-[15px]">
                Has your boiler failed? Are you considering replacing your old boiler, which is costing you a fortune to operate? Do you need a brand-new, A-rated, super-efficient boiler? You may get assistance from Tom Sutton Heating by taking advantage of their fixed-price boiler installation from a 5* rated boiler installation business.
              </p>
              <p className="text-slate-600 leading-relaxed max-w-md mx-auto text-[15px]">
                We are committed to giving every customer a 5* experience with their boiler installation, whether it be during the survey visit during which we go through your options or during the engineer’s installation. We think we provide an excellent service. We have provided this level of service to numerous clients in Bournemouth and the surrounding areas, and we will do so forever.
              </p>
            </div>

            {/* Energy Efficient Card Layout */}
            <div className="flex flex-col text-center items-center p-8 sm:p-10 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                <svg className="w-8 h-8 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-light text-slate-800 uppercase tracking-wide mb-6">Energy Efficient Boilers</h3>
              <p className="text-slate-600 leading-relaxed max-w-md mx-auto mb-5 text-[15px]">
                An efficient boiler is essential because your heating and hot water expenses make up more than half of your annual energy costs, according to the energy saving trust. <a href="https://energysavingtrust.org.uk/advice/boilers/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline font-medium transition-colors break-words">https://energysavingtrust.org.uk/advice/boilers/</a>
              </p>
              <p className="text-slate-600 leading-relaxed max-w-md mx-auto mb-5 text-[15px]">
                With the proper settings and setup, our boilers, which are all A-rated, highly efficient boilers, could help you save up to £340 annually on your energy costs.
              </p>
              <p className="text-slate-600 leading-relaxed max-w-md mx-auto text-[15px]">
                For the installation of your new boiler, it’s crucial to select the proper business, and we think our team is qualified. As a result of the numerous boiler installations we’ve completed in the Bournemouth region, we have the expertise to guide you through selecting a new boiler, the appropriate controls, and the ideal setup for your home.
              </p>
            </div>
          </div>

          {/* Center Quote Ribbon Map */}
          <div className="w-full bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 border-y border-slate-200 py-10 px-6 sm:px-12 rounded-2xl mb-16 lg:mb-24 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400"></div>
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-5xl mx-auto relative z-10">
              Tom Sutton Heating takes great pride in providing excellent customer service. Our online reviews support our claim that we provide one of the top boiler installation and maintenance services in the area!
            </p>
          </div>

          {/* Trust Badges Twin Column Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-10 lg:mb-12 items-start border-b border-slate-100 pb-10 lg:pb-12">
            {/* Google Reputation Mount */}
            <div className="flex flex-col items-center">
              <h3 className="text-base sm:text-[17px] font-medium text-slate-700 uppercase tracking-[0.1em] text-center mb-5">Check out our Google Reviews</h3>
              <a href="https://www.google.com/maps?cid=8226595044909973442" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 hover:-translate-y-1 hover:drop-shadow-xl transition-all duration-300 block mt-2">
                <div className="w-[200px] sm:w-[220px] h-[60px] sm:h-[65px] relative mix-blend-multiply flex-shrink-0 mx-auto">
                  <Image
                    src="https://i.postimg.cc/5yrxGmSh/google.webp"
                    alt="Google Customer Reviews 5 Stars - Tom Sutton Heating"
                    fill
                    className="object-contain"
                    sizes="220px"
                  />
                </div>
              </a>
            </div>

            {/* Checkatrade Reputation Mount */}
            <div className="flex flex-col items-center">
              <h3 className="text-base sm:text-[17px] font-medium text-slate-700 uppercase tracking-[0.1em] text-center mb-5">Check out our Checkatrade Reviews</h3>
              <a href="https://www.checkatrade.com/trades/slenergytomsuttonheating" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 hover:-translate-y-1 hover:drop-shadow-xl transition-all duration-300 block mt-2">
                <div className="w-[200px] sm:w-[220px] h-[60px] sm:h-[65px] relative mix-blend-multiply flex-shrink-0 mx-auto">
                  <Image
                    src="https://i.postimg.cc/3rfJdKQY/checktrade.webp"
                    alt="Checkatrade Reputation Matters Emblem"
                    fill
                    className="object-contain"
                    sizes="220px"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Dual Call-to-Action Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start pb-4">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[24px] sm:text-[28px] font-[900] text-slate-900 uppercase tracking-tight mb-5">Need a New Boiler Right Away?</h3>
              <p className="text-[#64748b] leading-[1.8] max-w-[420px] mx-auto mb-8 text-[14px] sm:text-[15px]">
                We now offer a fast boiler installation service. Our Team can install your new boiler in as little as 48 hours. Simply click the button <strong className="text-slate-800">below</strong> to request a quote, and we’ll contact you to schedule a home survey, which will be followed by a quote for your new boiler installation.
              </p>
              <Link href="/online-boiler-quote" className="inline-flex items-center justify-center px-10 py-3 sm:py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-[15px] uppercase tracking-wider rounded shadow-[0_8px_16px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_24px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1">
                Request a Quote
              </Link>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-[24px] sm:text-[28px] font-[300] text-[#334155] uppercase tracking-tight leading-[1.2] mb-5">
                How Does a New Boiler<br /><span className="font-[900] text-slate-900">Installation Work?</span>
              </h3>
              <p className="text-[#64748b] leading-[1.8] max-w-[420px] mx-auto mb-8 text-[14px] sm:text-[15px]">
                We believe our boiler installation service is one of the best in the area. To find out more about our installation service from the survey to the installation, just simply click the link below.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-3 sm:py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-[15px] uppercase tracking-wider rounded shadow-[0_8px_16px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_24px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1">
                More Info
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Popular Packages Section - Ported from Home Page */}
      <section className="py-20 sm:py-32 bg-[#f8fafd] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d0bb]/30 to-transparent"></div>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 lg:mb-24">
            <span className="text-[#00d0bb] font-extrabold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Transparent Pricing</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-[#0d1033] tracking-tighter leading-tight mb-6">
              Our Most Popular Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">We offer straightforward, premium heating solutions tailored to any home. No hidden fees, just absolute highest-tier quality.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">

            {/* Package 1: Standard */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-8 relative z-10">
                <h3 className="text-[1.75rem] font-black mb-2 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0bb] to-teal-600">Standard</span>
                </h3>
                <div className="text-slate-500 font-bold text-[0.85rem] tracking-wider uppercase mb-6">Worcester Bosch 1000 Range</div>

                {/* Transparent Product Showcase Container */}
                <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,theme(colors.teal.50),transparent_70%)]">
                  <Image src="https://i.postimg.cc/jjGCP7w6/Worcester-Bosch-1000-Range.png" alt="Standard Package - Worcester Bosch 1000 Range" fill className="object-contain p-4 drop-shadow-[0_20px_25px_rgba(0,208,187,0.15)] transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-gray-500 font-bold text-lg">from</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#0d1033] tracking-tight">£2,028</span>
                </div>

                <Link href="/online-boiler-quote" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-center mb-10 transition-colors shadow-lg shadow-green-600/20">Get a quote now</Link>

                <ul className="space-y-4 flex-1">
                  {[
                    "5-year warranty for peace of mind",
                    "Efficient 24kW output",
                    "Compact design (Ideal for fitting into kitchen cupboards)",
                    "Quiet Operation (Quiet Mark certified)",
                    "High-quality engineering from a market-leading brand",
                    "Magnaclean Magnetic filter included",
                    "Magnetic scale reducer included",
                    "Programmable room thermostat included"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600 text-[0.95rem] font-medium items-start">
                      <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#00d0bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Package 2: Premium (PREMIUM CENTER) */}
            <div className="bg-[#0b1021] rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(255,106,0,0.3)] border border-[#1e274a] flex flex-col hover:-translate-y-2 transition-transform duration-500 scale-100 lg:scale-[1.05] z-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-[#ff6a00] text-white text-xs font-black px-4 py-1.5 rounded-bl-[1.5rem] uppercase tracking-widest shadow-lg">Most Popular</div>
              <div className="absolute -left-32 -top-32 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <h3 className="text-4xl font-black mb-2 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ff6a00] drop-shadow-sm">Premium</span>
                </h3>
                <div className="text-white/60 font-bold text-[0.85rem] tracking-wider uppercase mb-6">Worcester Bosch 4000 Range</div>

                {/* Transparent Product Showcase Container (No Glow) */}
                <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center">
                  <Image src="https://i.postimg.cc/NfJsRHSn/Worcester-Bosch-4000-Range.webp" alt="Premium Package - Worcester Bosch 4000 Range" fill className="object-contain p-4 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-110" unoptimized />
                </div>
              </div>

              <div className="flex flex-col flex-1 relative z-10">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-white/60 font-bold text-lg">from</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">£2,750</span>
                </div>

                <Link href="/online-boiler-quote" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg text-center mb-10 transition-all shadow-[0_15px_30px_-10px_rgba(22,163,74,0.5)]">Get a quote now</Link>

                <ul className="space-y-4 flex-1">
                  {[
                    "10-year warranty (Long-term peace of mind)",
                    "Optimal 25kW output (Perfect for small to medium homes)",
                    "Reduced gas consumption: Wide power range lowers energy bills",
                    "Innovative 'Quick Tap': Water-saving function reduces water waste",
                    "Modern interface: New design featuring an easy-to-use color display",
                    "Low-pressure performance: Operates extremely well in low water pressure areas for powerful showers",
                    "Whisper-quiet operation: One of the quietest combi boilers available",
                    "Smart connectivity: Features wireless connectivity with the Bosch EasyControl",
                    "Magnaclean Magnetic filter included",
                    "Magnetic scale reducer included"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-white/90 text-[0.95rem] font-medium items-start">
                      <svg className="w-5 h-5 mt-0.5 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Package 3: Premium Plus */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-8 relative z-10">
                <h3 className="text-[1.75rem] font-black mb-2 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d1033] to-slate-600">Premium Plus</span>
                </h3>
                <div className="text-slate-500 font-bold text-[0.85rem] tracking-wider uppercase mb-6">Worcester Bosch 8000+ Range</div>

                {/* Transparent Product Showcase Container */}
                <div className="relative w-full h-64 sm:h-72 lg:h-64 mb-4 flex items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,theme(colors.slate.100),transparent_70%)]">
                  <Image src="https://i.postimg.cc/fbbgm3nz/Worcester-Bosch-8000-Style.webp" alt="Premium Plus Package - Worcester Bosch 8000+ Range" fill className="object-contain p-2 drop-shadow-[0_20px_25px_rgba(13,16,51,0.15)] transition-transform duration-700 group-hover:scale-110" unoptimized />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-gray-500 font-bold text-lg">from</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#0d1033] tracking-tight">£3,205</span>
                </div>

                <Link href="/online-boiler-quote" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-center mb-10 transition-colors shadow-lg shadow-green-600/20">Get a quote now</Link>

                <ul className="space-y-4 flex-1">
                  {[
                    "Unrivalled 12-year warranty: Complete peace of mind for over a decade",
                    "High Performance 32kW output: Perfect for larger homes with multiple bathrooms",
                    "High Flow Rates: Delivers powerful hot water even with high demand",
                    "Advanced \"A\" Rated Efficiency: Wide modulation range drastically reduces gas consumption",
                    "Sleek Glass Front Design: Available in Black or White to suit modern interiors",
                    "Intuitive Full-Color Touchscreen: Simplifies control and diagnostics",
                    "Ultra-Quiet Performance: One of the quietest high-output boilers on the market",
                    "Intelligent Filling System: Automatically maintains optimum system pressure",
                    "Full Wireless Connectivity: Integrated with the Bosch EasyControl app",
                    "Magnaclean Magnetic filter & Scale reducer included"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600 text-[0.95rem] font-medium items-start">
                      <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#00d0bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Simple Finance Note */}
          <div className="mt-16 max-w-4xl mx-auto text-center px-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#51a7be] mb-4">
              We also offer finance options!
            </h3>
            <div className="space-y-3 text-gray-500 font-medium text-[0.95rem] sm:text-base leading-relaxed">
              <p>
                Are you looking to replace your current boiler? Tom Sutton Heating are offering brand new boiler installations for just £1,692!
              </p>
              <p>
                All our new boilers come with full parts and labour warranties, ranging from 6 to 13 years. Replacing your old boiler with a modern efficient boiler can improve efficiency by 10 to 12%.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Types of Boiler Informational Section */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="flex flex-col items-center text-center max-w-[1100px] mx-auto space-y-6">

            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-normal text-slate-800 tracking-wider mb-6">
              WHAT ARE THE DIFFERENT TYPES OF BOILER?
            </h2>

            <p className="text-[#334155] leading-relaxed text-[15px] sm:text-base">
              There are three main types of boilers you will find in the local area. We have combination or combi boilers, system boilers and regular boilers.
            </p>

            <p className="text-[#334155] leading-[1.8] text-[15px] sm:text-base">
              <strong className="font-bold text-slate-900">Combination boilers:</strong> Combi boilers are the UK's favourite type of boiler. When you turn on your hot tap, cold water flows through your combi boiler which heats the cold water up as it passes through. The combi boiler also will heat your radiators. Combi’s negate the need to have a hot water cylinder which means they are super efficient and great for saving space.
            </p>

            <p className="text-[#334155] leading-[1.8] text-[15px] sm:text-base">
              <strong className="font-bold text-slate-900">System boilers:</strong> System boilers are used to heat your heating system and a separate hot water cylinder. System boilers already contain within it's casing some of your system components such as an expansion vessel and the system circulation pump. A system boiler is filled directly from the mains, this means it does not need a header tank in the loft.
            </p>

            <p className="text-[#334155] leading-[1.8] text-[15px] sm:text-base">
              <strong className="font-bold text-slate-900">Regular boilers:</strong> Regular boilers are similar to system boilers as they also heat your heating system and hot water cylinder separately. Unlike the system boiler a regular boiler does not contain any system components within it's casing. Most regular boiler installations you will find will have a header tank in the loft to feed the system.
            </p>

            <p className="text-slate-500 text-sm sm:text-[15px] mt-8 pt-8 w-full">
              For more info visit <a href="https://www.worcester-bosch.co.uk/products/boilers/explained" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:text-blue-700 hover:underline transition-colors break-all font-medium">https://www.worcester-bosch.co.uk/products/boilers/explained</a>
            </p>

          </div>
        </div>
      </section>

      {/* Whats Included Hover-Cards Section */}
      <section className="bg-[#f8fafd] py-16 lg:py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-normal text-slate-800 tracking-wider mb-16 text-center uppercase">
            Whats Included With Our Boiler Installations?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

            {/* Magnetic Filter Card */}
            <div className="relative group w-full h-[400px] sm:h-[480px] bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col">

              {/* Front Face (Image + Clean Footer Title) */}
              <div className="absolute inset-0 flex flex-col transition-all duration-500 opacity-100 group-hover:opacity-0 bg-white z-10">
                <div className="relative flex-1 w-full bg-slate-50/50 p-8">
                  <Image src="https://i.postimg.cc/KjKyTQ98/Magnetic_filter.jpg" alt="Magnetic Filter" fill className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="h-[90px] flex items-center justify-center border-t border-slate-100 bg-white px-4">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-800 text-center uppercase tracking-wider">
                    Magnetic filter
                  </h3>
                </div>
              </div>

              {/* Back Face (Text block) */}
              <div className="absolute inset-0 bg-white p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 opacity-0 group-hover:opacity-100 z-20 overflow-y-auto">
                <h3 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider">Magnetic Filter</h3>
                <p className="text-slate-600 leading-[1.8] text-[14px] sm:text-[15px] mb-4">
                  Boilers are mostly made of metal and contain water, which is a recipe for rust to form. The majority of debris build-up in a heating system can be prevented by chemicals, but ferrous metal sludge must be filtered out. You can make the removal and cleaning of boiler sludge easier by installing a magnetic boiler sludge filter on your central heating flow or return. Furthermore, by trapping and filtering the sludge as it forms, you prevent it from circulating through your boiler.
                </p>
                <p className="text-[#2563eb] font-bold leading-relaxed text-[14px] sm:text-[15px]">
                  We install these as standard on all of our boiler installations.
                </p>
              </div>

            </div>

            {/* System Controls Card */}
            <div className="relative group w-full h-[400px] sm:h-[480px] bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col">

              {/* Front Face */}
              <div className="absolute inset-0 flex flex-col transition-all duration-500 opacity-100 group-hover:opacity-0 bg-white z-10">
                <div className="relative flex-1 w-full bg-slate-50/50 p-8">
                  <Image src="https://i.postimg.cc/J0yWXKTt/System_controls.webp" alt="System Controls" fill className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="h-[90px] flex items-center justify-center border-t border-slate-100 bg-white px-4">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-800 text-center uppercase tracking-wider">
                    System controls
                  </h3>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 bg-white p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 opacity-0 group-hover:opacity-100 z-20 overflow-y-auto">
                <h3 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider">System Controls</h3>
                <p className="text-slate-600 leading-[1.8] text-[14px] sm:text-[15px]">
                  During our survey visit, we will examine your heating system and discuss with you which controls would be best for you. All of our combi boiler installations come standard with a boiler and programmable room thermostat, but you may benefit from a smart control such as the Google Nest. thermostat.
                </p>
              </div>

            </div>

            {/* Water Treatment Card */}
            <div className="relative group w-full h-[400px] sm:h-[480px] bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col">

              {/* Front Face */}
              <div className="absolute inset-0 flex flex-col transition-all duration-500 opacity-100 group-hover:opacity-0 bg-white z-10">
                <div className="relative flex-1 w-full bg-slate-50/50 p-8">
                  <Image src="https://i.postimg.cc/LXJHkH59/water-treatment.png" alt="Water Treatment" fill className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>
                <div className="h-[90px] flex items-center justify-center border-t border-slate-100 bg-white px-4">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-800 text-center uppercase tracking-wider">
                    Water treatment
                  </h3>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 bg-white p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 opacity-0 group-hover:opacity-100 z-20 overflow-y-auto">
                <h3 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wider">Water Treatment</h3>
                <p className="text-slate-600 leading-[1.8] text-[14px] sm:text-[15px]">
                  All of our combi boiler installations come with magnetic scale reducers as standard. These can help prevent scale from sticking to the inside components of the boiler. Along with scale reducers we also flush our systems to current British standards and add a high quality corrosion inhibitor to the heating system. This will help protect your new boiler installation for years to come.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Premium Expert Team & Winter Comfort Section */}
      <section className="relative py-20 lg:py-32 bg-[#050B14] overflow-hidden">
        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

            {/* Left Column: Expert Team */}
            <div className="flex flex-col h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h2 className="text-[20px] sm:text-[24px] font-bold text-white tracking-wide uppercase">
                  Expert Team
                </h2>
              </div>
              <p className="text-slate-400 leading-[1.9] text-[15px] sm:text-base mb-10 font-medium">
                Over the years, our team of professionals has developed a reputation for offering exceptional customer service by paying attention to and attending to our clients' needs. We make a special effort to offer straightforward, hassle-free solutions that increase comfort while reducing energy usage because we understand how important your boiler is to your home.
              </p>
              <div className="w-full relative rounded-2xl overflow-hidden h-[400px] sm:h-[450px] lg:flex-1 lg:min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500">
                <Image src="https://i.postimg.cc/3wJpTDSF/expert_team.webp" alt="Tom Sutton Heating Expert Team" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Right Column: Winter Comfort */}
            <div className="flex flex-col h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                </div>
                <h2 className="text-[20px] sm:text-[24px] font-bold text-white tracking-wide uppercase leading-tight">
                  This Winter, Let Tom Sutton<br className="hidden sm:block" />Heating Keep You Warm
                </h2>
              </div>
              <p className="text-slate-400 leading-[1.9] text-[15px] sm:text-base mb-8 font-medium">
                Tom Sutton Heating is proud to keep families warm in the Bournemouth area, Southbourne, Christchurch, Highcliffe, New Milton, Lymington, and throughout the New Forest with our boiler installations.
              </p>
              <div className="w-full relative rounded-2xl overflow-hidden h-[250px] sm:h-[280px] mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-orange-500/30 transition-colors duration-500">
                <Image src="https://i.postimg.cc/jjdNbJgh/room_warm.webp" alt="Family staying warm in winter" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60"></div>
              </div>
              <p className="text-slate-400 leading-[1.9] text-[15px] sm:text-base font-medium mt-auto">
                <span className="text-orange-400 font-bold">With rising fuel costs</span>, Tom Sutton Heating can tailor your new boiler installation to maximise warmth and comfort along with reliability and efficiency. We have a qualification in modern system design for heating and renewables in commercial and domestic buildings so you know you're in safe hands.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Premium Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

            {/* Left Column: Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-start">
              <span className="inline-flex items-center gap-2 text-[#ff4c24] text-sm font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ff4c24]"></span>
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d1b42] mb-8 tracking-tight">
                About Tom Sutton Heating
              </h2>

              <div className="space-y-5 text-gray-600 font-medium text-[1.05rem] leading-[1.7] mb-10">
                <p>
                  Tom Sutton Heating is a Gas, LPG, Oil, Heating and plumbing company based in Lymington and surrounding areas. We are a family run business, established for over 30 years we offer valuable knowledge on heating systems both modern and old.
                </p>
                <p>
                  We carry out boiler installations, and boiler repairs in New Milton, Lymington, Brockenhurst, Southampton, Bournemouth, Ringwood, Christchurch, Highcliffe, and all the surrounding villages and towns in the New Forest area.
                </p>
                <p>
                  All work is carried out to the highest standards as we pride ourselves on keeping our customers happy and delivering their requirements at a competitive price.
                </p>
                <p>
                  We are Gas Safe and OFTEC registered.
                </p>
                <p className="text-[#0d1b42] font-semibold">
                  We understand that sometimes your gas, heating and plumbing needs can't wait, this is why we offer an out of hours call out service.<br />
                  So, if you need a plumber or a gas engineer in Lymington and surrounding areas, contact us now!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/about" className="px-8 py-4 bg-[#0d1b42] hover:bg-emerald-600 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(13,27,66,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(5,150,105,0.4)]">
                  More about us
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-50 text-[#0d1b42] border-[3px] border-[#0d1b42] font-bold rounded-xl transition-all hover:-translate-y-1">
                  Contact us
                </Link>
              </div>

              {/* Accreditations */}
              <div className="relative w-[280px] h-[90px] md:w-[320px] md:h-[110px]">
                <Image
                  src="https://i.postimg.cc/dtqCn4Nf/oftec-gassafe.webp"
                  alt="Gas Safe and OFTEC Registered"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Right Column: Image & Quote Card */}
            <div className="w-full lg:w-[45%] flex flex-col gap-8 mt-10 lg:mt-0">
              {/* Square Image Container (Fully Visible) */}
              <div className="relative w-full aspect-square sm:w-[90%] md:w-[80%] lg:w-full mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(13,27,66,0.15)] ring-1 ring-gray-900/5 group z-10">
                <Image
                  src="https://i.postimg.cc/TYFRhPbV/My-Post.webp"
                  alt="Ronan Sutton - Managing Director"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>

              {/* Stacked Quote Card (Moved down to prevent image hiding) */}
              <div className="w-full bg-[#0d1b42] rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 relative transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute -top-6 right-8 text-[#ff4c24] text-7xl font-serif opacity-30 select-none pointer-events-none">"</div>
                <p className="text-white/90 font-medium text-[1.05rem] sm:text-lg leading-[1.8] italic mb-6 relative z-10">
                  "At Tom Sutton Heating, our goal is not to just simply sell you a new boiler, but to find for you and offer you the perfect solution to your homes heating and hot water needs."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-wide">Ronan Sutton</h4>
                    <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase block mt-0.5">Managing Director</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Compact Logo Ribbon */}
      <section className="bg-[#1f1f1f] py-6 sm:py-8 border-t border-white/5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {[
              { src: "https://i.postimg.cc/cH3f9G5C/checkatrade.webp", alt: "Checkatrade", width: 140 },
              { src: "https://i.postimg.cc/85vLKgnj/alpha.webp", alt: "Alpha Heating Innovation", width: 90 },
              { src: "https://i.postimg.cc/1tFDC1Yt/baxi.webp", alt: "Baxi Approved Installer", width: 90 },
              { src: "https://i.postimg.cc/3RG2SQb4/safe.webp", alt: "Gas Safe Register", width: 80 },
              { src: "https://i.postimg.cc/gJh3SbBx/Worcester2_150x43.webp", alt: "Worcester Bosch", width: 130 },
              { src: "https://i.postimg.cc/mD97XW6c/grant_logo.webp", alt: "Grant", width: 100 }
            ].map((logo, idx) => (
              <div key={idx} className="relative flex items-center justify-center transition-transform hover:scale-105 duration-300" style={{ width: logo.width, height: 40 }}>
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Nest Integration Section */}
      <section className="relative bg-slate-50 py-20 sm:py-32 overflow-hidden border-t border-gray-100">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-10 sm:p-16 lg:p-20 overflow-hidden relative group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 relative z-10">

              <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] aspect-square rounded-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center p-8 group-hover:-translate-y-4 transition-transform duration-700 border border-gray-50">
                  <div className="relative w-full h-full">
                    <Image src="https://i.postimg.cc/3W5SSZZ1/Nest.webp" alt="Works with Nest" fill className="object-contain drop-shadow-xl" unoptimized />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-gray-100 scale-110 opacity-50 group-hover:scale-125 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 rounded-full border border-blue-50/50 scale-125 opacity-30 group-hover:scale-150 transition-transform duration-1000 delay-100"></div>
                </div>
              </div>

              <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 w-max mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-[0.7rem] font-bold tracking-widest uppercase">Certified Installers</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                  We are ready to bring affordable <br className="hidden xl:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Smart Home Solutions</span> to you!
                </h2>

                <p className="text-slate-500 text-base sm:text-lg leading-[1.8] mb-4 font-medium max-w-[500px]">
                  We are now <strong className="text-slate-800 font-bold">Nest Pro installers</strong>. This means we can offer fantastic deals on Nest thermostats directly to your home.
                </p>

                <p className="text-slate-500 text-base sm:text-lg leading-[1.8] mb-10 font-medium max-w-[500px]">
                  If you haven't heard about Nest, take a look at our dedicated Nest Thermostat page for more details and to see how Nest can drastically save you money on your heating bills.
                </p>

                <Link href="/nest-thermostat-installation/" className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:text-white transition-all shadow-[0_15px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Premium Dark Gradient Contact Footer */}
      <section className="relative bg-[#0b1021] py-8 sm:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
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
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">01590 540188</span>
              <span className="text-blue-500/50 mx-1 font-normal text-base">|</span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer select-all">07774 673109</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


// Data Array for Slider
const servicesData = [
  {
    title: "Gas",
    description: "Your gas appliances could potentially expose you to fires, gas explosions, and carbon monoxide poisoning. Get your gas appliances serviced today.",
    image: "https://i.postimg.cc/Hs8qW2s5/gas_service.webp",
    link: "/gas",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
  },
  {
    title: "Brand New Boilers",
    description: "Getting a new boiler doesn't have to be expensive! We can offer flexible boiler finance plans to get you on your way. Call us today for a bespoke quote.",
    image: "https://i.postimg.cc/MKfCZDKB/boiler_service.webp",
    link: "/new-boiler-installation-2",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Heating",
    description: "Whether it's a valve replacement or a heating repair, you can trust us to look at your problem. We aim to get to any heating system breakdown within 24 hrs!",
    image: "https://i.postimg.cc/02KT5f2M/heating_service.webp",
    link: "/heating",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> // Snowflake substitute
  },
  {
    title: "Plumbing & Bathrooms",
    description: "Our qualified plumbers are experienced enough to deal with shower repairs, leaks, taps, bathroom installations and much more.",
    image: "https://i.postimg.cc/nc9yVkcX/plumbing_service.webp",
    link: "/contact",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  {
    title: "Nest Thermostat Installation",
    description: "Nest Thermostats make it easier than ever to manage your heating and hot water. Use the app to control your home while you're away.",
    image: "https://i.postimg.cc/wTRCxVTt/Thermostat_service.webp",
    link: "/nest-thermostat-installation",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    title: "LPG & Oil",
    description: "LPG & Oil appliances must be checked for safety and efficiency on an annual basis. Call the team today to arrange LPG / Oil servicing, installation or repair.",
    image: "https://i.postimg.cc/bNS7YTN2/lpg_oil_service.webp",
    link: "/oil",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  }
];