import React from 'react';

export const metadata = {
  title: 'Energy Events | Tom Sutton Heating',
  description: 'Upcoming energy events, open days, and showcases by Tom Sutton Heating.',
};

export default function EnergyEventsPage() {
  return (
    <main className="w-full">
      <section className="bg-slate-900 text-white py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Energy Events</h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
            Content coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
