'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-300 ${
              isOpen
                ? 'bg-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] border border-[#0d1033]/10'
                : 'bg-white/60 border border-transparent hover:bg-white hover:shadow-sm'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            >
              <span className={`font-bold text-[15px] sm:text-base transition-colors ${isOpen ? 'text-[#0d1033]' : 'text-[#0d1033]/80'}`}>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                isOpen ? 'bg-[#ff5e14] text-white rotate-45' : 'bg-[#eef1fa] text-[#0d1033]'
              }`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-5 pt-0">
                <p className="text-gray-400 text-sm sm:text-[15px] leading-[1.7]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
