import React from 'react';
import Image from 'next/image';


export const metadata = {
  title: 'Our Reviews | Tom Sutton Heating',
  description: 'Read what our customers across Hampshire and Dorset have to say about our professional heating and plumbing services.',
  referrer: 'no-referrer',
};

const staticReviews = [
  {
    name: "adrienne pentland",
    initial: "a",
    bgColor: "bg-[#00897b]",
    meta: "2 reviews",
    time: "5 months ago",
    text: "This company installed our oil boiler nine years ago and have looked after it since. We are delighted with the helpful and efficient service they offer. Really nice people to do business with and always good on time. Thoroughly recommend."
  },
  {
    name: "William Horwood",
    initial: "W",
    bgColor: "bg-[#c2185b]",
    meta: "3 reviews · 1 photo",
    time: "7 months ago",
    text: "Craig has dealt with our annual boiler service since he installed it five years ago. He is always polite and jovial and fully knowledgeable about our heating system. This year he brought with him an apprentice who is being taught all about the plumbing and heating trade. It is therefore great to see TSHeating encouraging new people into the business.\nI will continue to use this firm for all my water/heating needs."
  },
  {
    name: "barry england",
    initial: "b",
    bgColor: "bg-[#5c6bc0]",
    meta: "1 review",
    time: "2 months ago",
    text: "I had a problem with my diverter valve getting it to switch between heating and water. Had two other plumbers try to solve problem by renewing motor unit.Tom came and checked the system through out, and found that it was the actual valve stuck . Was very pleased with his work and plesent attitude.\nWill use him again for any future work."
  },
  {
    name: "Derek Humphrey",
    initial: "D",
    bgColor: "bg-[#5d4037]",
    meta: "1 review",
    time: "3 months ago",
    text: "Very friendly company, excellent customer service. The engineer who visited us was very professional and explained the Solar/hot water system to us removing the concerns we had. System now working better than before.\nWould recommend this company."
  },
  {
    name: "Jim Hanford",
    initial: "J",
    bgColor: "bg-[#1565c0]",
    meta: "5 reviews",
    time: "5 months ago",
    text: "I have used Tom Sutton Heating twice and am very happy with the work. First time was to upgrade our controls and get our older system working from online / app. Then later I have used them for a replacement boiler. Both times the work was carried out to my satisfaction and for the agreed quote. I was able to have a good conversation with them about my older system and options available during which I was listened to and relevant pros and cons were discussed."
  },
  {
    name: "Richard I",
    initial: "R",
    bgColor: "bg-[#7b1fa2]",
    meta: "Local Guide · 10 reviews · 6 photos",
    time: "4 months ago",
    text: "As a new customer I was very impressed with their professionalism and courtesy. None of this 'we are too busy' or 'we'll try and squeeze you in' nonsense. Just made to feel like a valued customer. Boiler service carried out as planned on the scheduled date and time and you can tell everything was properly looked at. Thoroughly nice engineer. I can rest easy for another year and will certainly be back in touch for another annual service or sooner should we need any other work doing."
  }
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Premium Hero Section */}
      <section className="bg-[#0d1b42] pt-32 pb-40 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-[-100px] w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <span className="inline-flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-sm mb-6 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Real Customer Feedback
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Don't Just Take Our Word For It
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto">
            We've built our 30-year reputation on trust, premium workmanship, and absolute reliability. Read verified reviews from homeowners across Hampshire and Dorset.
          </p>
        </div>
      </section>

      {/* Main Layout: 3 Columns on Desktop */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[95rem] mx-auto -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          
          {/* LEFT COLUMN: Trust Badges (Span 3/12) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
            
            {/* Google Rating Summary Card */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(13,27,66,0.06)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(13,27,66,0.12)] transition-all duration-500 relative overflow-hidden group flex flex-col items-center justify-center min-h-[160px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/30 transition-colors duration-500 pointer-events-none"></div>
              
              <a href="https://www.google.com/maps?cid=8226595044909973442" target="_blank" rel="noopener noreferrer" className="relative w-[85%] h-[80px] mb-2 transition-transform duration-500 group-hover:scale-105 block cursor-pointer">
                <Image 
                  src="https://i.postimg.cc/0NcSTm6n/Google-Review-Emblem.png" 
                  alt="Google Review Emblem" 
                  fill 
                  className="object-contain" 
                />
              </a>

              {/* Enhanced 220+ Volume Metric */}
              <div className="flex flex-col items-center relative z-10 text-center mb-6">
                <span className="text-gray-500 font-semibold text-[0.95rem] transition-colors duration-300">
                  Based on <strong className="text-[#0d1b42] group-hover:text-amber-500 transition-colors duration-300 font-black underline decoration-blue-500/30 group-hover:decoration-amber-500/40 decoration-2 underline-offset-2">220+ reviews</strong>
                </span>
              </div>
              
              <a
                href="https://g.page/r/CcL_2GKbvCpyEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#0d1b42] to-blue-900 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-3.5 px-4 rounded-2xl text-center transition-all duration-300 shadow-[0_10px_20px_rgba(13,27,66,0.15)] hover:shadow-[0_10px_25px_rgba(249,115,22,0.3)] group/btn relative overflow-hidden flex items-center justify-center text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Leave a Google Review
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>
            </div>

            {/* Worcester Bosch Card */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(13,27,66,0.06)] border border-gray-100 flex items-center justify-center hover:-translate-y-1 transition-transform min-h-[140px]">
              <div className="relative w-full h-[80px]">
                <Image 
                  src="https://i.postimg.cc/43bPmmYw/Worcester-768x219.webp" 
                  alt="Worcester Bosch Accredited Installer" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Expert Trades Card */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(13,27,66,0.06)] border border-gray-100 flex items-center justify-center hover:-translate-y-1 transition-transform bg-gradient-to-br from-white to-sky-50/50 min-h-[140px]">
              <div className="relative w-[85%] h-[80px]">
                <Image 
                  src="https://i.postimg.cc/05ttYMcm/Verified-Expert-Trades.png" 
                  alt="Verified by Expert Trades" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

          </div>

          {/* CENTER COLUMN: Static Google Reviews (Span 6/12) */}
          <div className="lg:col-span-8 xl:col-span-6">
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_60px_rgba(13,27,66,0.08)] border border-gray-100">
              
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0d1b42]">Latest Customer Reviews</h2>
                  <p className="text-gray-500 font-medium mt-2">See what our customers have to say about us on Google.</p>
                </div>
                
                {/* SVG Google Star Equivalent */}
                <div className="w-14 h-14 bg-amber-50 rounded-full hidden sm:flex items-center justify-center shadow-inner flex-shrink-0 ml-4">
                  <svg className="w-7 h-7 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
              
              <div className="w-full flex-1 flex flex-col h-[700px] overflow-hidden relative group">
                {/* Gradient Masks for smooth scrolling effect */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                <div className="w-full flex flex-col gap-8 animate-slide-vertical hover:[animation-play-state:paused] pt-4">
                  {[...staticReviews, ...staticReviews].map((review, idx) => (
                    <div key={idx} className="flex flex-col border-b border-gray-100 pb-8">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-[19px] ${review.bgColor}`}>
                            {review.initial}
                          </div>
                          <div>
                            <div className="font-medium text-[#202124] text-[15px] leading-tight">{review.name}</div>
                            <div className="text-[#70757a] text-[13px] mt-0.5">{review.meta}</div>
                          </div>
                        </div>
                        <div className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="flex text-[#fbbc04]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                          ))}
                        </div>
                        <span className="text-[#70757a] text-[13px] font-medium">{review.time}</span>
                      </div>
                      <div className="text-[#202124] text-[15px] leading-relaxed whitespace-pre-wrap">
                        {review.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Checkatrade Banner (Span 3/12) */}
          <div className="lg:col-span-12 xl:col-span-3 flex justify-center xl:justify-end items-stretch mt-8 lg:mt-0 lg:pt-0">
            <div className="flex flex-col gap-6 w-full sm:w-[50%] lg:w-[60%] xl:w-full max-w-sm">
              <a 
                href="https://www.checkatrade.com/trades/slenergytomsuttonheating"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
              >
                <Image 
                  src="https://i.postimg.cc/XJLsDp3X/Tom-Sutton-Heating.png" 
                  alt="Proud Members of Checkatrade" 
                  width={600}
                  height={1400}
                  className="w-full h-auto rounded-[2.5rem] shadow-[0_20px_60px_rgba(13,27,66,0.1)] hover:shadow-[0_20px_60px_rgba(13,27,66,0.18)] transition-shadow duration-500 border border-gray-100" 
                />
              </a>
              <a
                href="http://checkatrade.com/give-feedback/trades/slenergytomsuttonheating"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#0d1b42] to-blue-900 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-4 px-6 rounded-2xl text-center transition-all duration-300 shadow-[0_10px_20px_rgba(13,27,66,0.15)] hover:shadow-[0_10px_25px_rgba(249,115,22,0.3)] hover:-translate-y-1 group relative overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Leave a Checkatrade Review
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
