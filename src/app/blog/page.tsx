import Image from 'next/image';
import Link from 'next/link';
import pool from '@/lib/db';
import LocationContact from '@/components/LocationContact';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string, page?: string }> }) {
  const paramsWrapper = await searchParams;
  const category = paramsWrapper.category;
  const currentPage = parseInt(paramsWrapper.page || '1', 10) || 1;
  const LIMIT = 6;
  const offset = (currentPage - 1) * LIMIT;

  // Fetch Categories
  const [categoriesData] = await pool.execute('SELECT * FROM blog_categories ORDER BY name ASC');
  const categories = categoriesData as any[];

  // Fetch Posts
  let query = `
    SELECT p.title, p.slug, p.excerpt, p.featured_image, p.published_at, c.name as category_name
    FROM blog_posts p
    LEFT JOIN blog_categories c ON p.category_id = c.id
    WHERE p.status = 'published' AND (p.is_energy_event = 0 OR p.is_energy_event IS NULL)
  `;
  
  let countQuery = `
    SELECT COUNT(*) as total
    FROM blog_posts p
    LEFT JOIN blog_categories c ON p.category_id = c.id
    WHERE p.status = 'published' AND (p.is_energy_event = 0 OR p.is_energy_event IS NULL)
  `;
  let params: any[] = [];

  if (category) {
    query += ' AND c.slug = ?';
    countQuery += ' AND c.slug = ?';
    params.push(category);
  }

  const [countData] = await pool.execute(countQuery, params);
  const totalPosts = (countData as any[])[0].total;
  const totalPages = Math.ceil(totalPosts / LIMIT);

  query += ` ORDER BY p.published_at DESC LIMIT ${LIMIT} OFFSET ${offset}`;

  const [postsData] = await pool.execute(query, params);
  const posts = postsData as any[];

  return (
    <main className="min-h-screen bg-[#f4f6f8]">
      
      {/* Premium Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden z-10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#131b2b] to-slate-900"></div>
          <div className="absolute top-[10%] left-[20%] w-[40%] h-[60%] bg-[#0ea5e9]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 max-w-[1200px] relative z-20 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <Link href="/" className="text-slate-400 hover:text-blue-400 font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Home
            </Link>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-bold text-xs tracking-[0.2em] uppercase">
              Insights & Guides
            </span>
          </div>
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 text-white drop-shadow-lg">
            HEATING & PLUMBING BLOG
          </h1>
          <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            Expert advice, industry news, and vital plumbing maintenance guides from the professionals at Tom Sutton Heating.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-center py-4 gap-3 pb-5">
            <Link 
              href="/blog" 
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${!category ? 'bg-[#ff5e14] text-white shadow-md shadow-orange-500/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
            >
              Latest All
            </Link>
            {categories.map(c => (
              <Link
                key={c.id}
                href={`/blog?category=${c.slug}`}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${category === c.slug ? 'bg-[#ff5e14] text-white shadow-md shadow-orange-500/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          {posts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0012.586 3H12" /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-2">No Posts Found</h3>
              <p className="text-slate-500 font-medium">There are currently no articles in this category. Check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                  
                  {/* Image Asset */}
                  <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                    {post.featured_image ? (
                      <Image 
                        src={post.featured_image} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                        <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                    )}
                    {post.category_name && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-black tracking-widest uppercase rounded-lg shadow-sm">
                          {post.category_name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-8 sm:p-10 flex flex-col">
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3">
                      {new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-[1.2] mb-4 group-hover:text-[#1d4ed8] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-sm font-black text-[#1d4ed8] tracking-widest uppercase flex items-center gap-2">
                        READ MORE
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
                  href={`/blog?${category ? `category=${category}&` : ''}page=${currentPage - 1}`}
                  className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
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
                   href={`/blog?${category ? `category=${category}&` : ''}page=${currentPage + 1}`}
                  className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
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
