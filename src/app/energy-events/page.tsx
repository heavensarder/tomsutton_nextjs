import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pool from '@/lib/db';
import LocationContact from '@/components/LocationContact';

export const metadata = {
  title: 'Energy Events | Tom Sutton Heating',
  description: 'Upcoming energy events, open days, and showcases by Tom Sutton Heating.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function EnergyEventsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const paramsWrapper = await searchParams;
  const currentPage = parseInt(paramsWrapper.page || '1', 10) || 1;
  const LIMIT = 6;
  const offset = (currentPage - 1) * LIMIT;

  const countQuery = `SELECT COUNT(*) as total FROM blog_posts WHERE status = 'published' AND is_energy_event = 1`;
  const [countData] = await pool.execute(countQuery);
  const totalPosts = (countData as any[])[0].total;
  const totalPages = Math.ceil(totalPosts / LIMIT);

  const query = `
    SELECT p.title, p.slug, p.excerpt, p.featured_image, p.published_at, c.name as category_name
    FROM blog_posts p
    LEFT JOIN blog_categories c ON p.category_id = c.id
    WHERE p.status = 'published' AND p.is_energy_event = 1
    ORDER BY p.published_at DESC LIMIT ${LIMIT} OFFSET ${offset}
  `;
  const [postsData] = await pool.execute(query);
  const posts = postsData as any[];

  return (
    <main className="w-full bg-[#f8fafc]">
      {/* Energy Events Premium Hero */}
      <section className="relative w-full bg-[#0b1021] text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-indigo-900/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[50%] bg-[#6366f1]/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[#8b5cf6]/20 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 max-w-[1200px] relative z-10 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <Link href="/" className="text-slate-400 hover:text-indigo-400 font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Home
            </Link>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-bold text-xs tracking-[0.2em] uppercase">
              Showcases & Open Days
            </span>
          </div>
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 text-white drop-shadow-lg">
            ENERGY EVENTS
          </h1>
          <p className="text-slate-300 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            Discover our upcoming showcases, interactive energy events, and comprehensive community open days to learn about the future of home heating.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 sm:py-24 relative z-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          {posts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-indigo-200 shadow-sm">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-2">No Upcoming Events</h3>
              <p className="text-slate-500 font-medium max-w-md mx-auto">Stay tuned! We are currently planning our next exciting energy event. Check back soon for updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {posts.map((post: any) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-indigo-50 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] transition-all duration-500">
                  
                  {/* Image Asset */}
                  <div className="relative w-full aspect-[4/3] bg-indigo-50 text-indigo-200 overflow-hidden">
                    {post.featured_image ? (
                      <Image 
                        src={post.featured_image} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-indigo-50">
                        <svg className="w-12 h-12 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                    )}
                    {/* Event Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-4 py-1.5 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-black tracking-widest uppercase rounded-lg shadow-[0_4px_15px_rgba(79,70,229,0.5)]">
                        Energy Event
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-8 sm:p-10 flex flex-col">
                    <p className="text-indigo-500 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-[1.2] mb-4 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-indigo-50 flex items-center justify-between">
                      <span className="text-sm font-black text-indigo-600 tracking-widest uppercase flex items-center gap-2">
                        VIEW EVENT DETAILS
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              {currentPage > 1 ? (
                <Link 
                  href={`/energy-events?page=${currentPage - 1}`}
                  className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  Previous
                </Link>
              ) : (
                <span className="px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-400 font-bold text-sm flex items-center gap-2 cursor-not-allowed">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  Previous
                </span>
              )}

              <span className="font-bold text-slate-500 text-sm hidden sm:block">
                Page {currentPage} of {totalPages}
              </span>

              {currentPage < totalPages ? (
                <Link 
                   href={`/energy-events?page=${currentPage + 1}`}
                  className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all flex items-center gap-2"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </Link>
              ) : (
                <span className="px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-400 font-bold text-sm flex items-center gap-2 cursor-not-allowed">
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </span>
              )}
            </div>
          )}

        </div>
      </section>

      {/* Footer Location & Contact Block */}
      <LocationContact />
      
    </main>
  );
}
