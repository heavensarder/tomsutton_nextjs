import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import pool from '@/lib/db';
import LocationContact from '@/components/LocationContact';

export const revalidate = 60; // Revalidate every 60 seconds

async function getPost(slug: string) {
  const [rows] = await pool.execute(
    `SELECT p.*, c.name as category_name
     FROM blog_posts p
     LEFT JOIN blog_categories c ON p.category_id = c.id
     WHERE p.slug = ? AND p.status = 'published'`,
    [slug]
  );
  const data = rows as any[];
  return data.length ? data[0] : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: 'Post Not Found | Tom Sutton Heating' };
  }

  const title = post.meta_title || post.title || 'Blog Post';
  const description = post.meta_description || post.excerpt || 'Read the full article on Tom Sutton Heating.';
  
  return {
    title: `${title} | Tom Sutton Heating`,
    description,
    keywords: post.meta_keywords ? post.meta_keywords.split(',').map((k: string) => k.trim()) : undefined,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.published_at,
      images: post.featured_image ? [{ url: post.featured_image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.featured_image ? [post.featured_image] : [],
    }
  };
}

export default async function SingleBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* Article Header (Magazine Style Layout) */}
      <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 max-w-[900px] relative z-20 text-center">
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Link href="/blog" className="text-slate-50 hover:bg-[#1d4ed8] bg-slate-900 px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-all shadow-md w-max">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Guides
            </Link>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            {post.category_name && (
              <span className="text-[#ff5e14] font-bold text-sm tracking-widest uppercase">
                {post.category_name}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-slate-900 drop-shadow-sm text-balance">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-slate-500 font-medium text-sm">
            <span>By <strong>Tom Sutton Heating</strong></span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>
              {new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          {post.meta_keywords && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {post.meta_keywords.split(',').map((tag: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 text-xs font-bold rounded-full lowercase shadow-sm">
                  #{tag.trim()}
                </span>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Featured Banner Image */}
      {post.featured_image && (
        <section className="-mt-12 sm:-mt-16 container mx-auto px-4 max-w-[1000px] relative z-30">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-4 ring-white">
            <Image 
              src={post.featured_image} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority
              unoptimized
            />
          </div>
        </section>
      )}

      {/* Article Body (Tailwind Typography Integration) */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-[800px]">
          <article 
            className="prose prose-slate prose-lg md:prose-xl max-w-none 
              text-slate-700 break-words w-full overflow-hidden
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-headings:break-words
              prose-p:leading-relaxed prose-p:text-slate-700 prose-p:font-medium prose-p:break-words
              prose-a:text-[#1d4ed8] prose-a:font-bold hover:prose-a:text-[#1e40af] prose-a:no-underline prose-a:break-all
              prose-img:rounded-2xl prose-img:shadow-xl prose-img:max-w-full
              prose-blockquote:border-l-[#ff5e14] prose-blockquote:bg-slate-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-700 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:break-words
              prose-li:text-slate-700 prose-li:font-medium
              prose-strong:text-slate-900 prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Social Share Footer */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Share this Guide</h3>
            <div className="flex gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://tomsuttonheating.co.uk/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href={`https://twitter.com/intent/tweet?url=https://tomsuttonheating.co.uk/blog/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white transition-all shadow-sm">
                <i className="fab fa-x-twitter text-lg"></i>
              </a>
               <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' https://tomsuttonheating.co.uk/blog/' + post.slug)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#25D366] hover:text-white transition-all shadow-sm">
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Request Quote */}
      <LocationContact />
      
    </main>
  );
}
