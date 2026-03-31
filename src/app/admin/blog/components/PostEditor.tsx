'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import MediaPicker from '@/components/MediaPicker';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false, loading: () => <div className="h-64 bg-slate-50 animate-pulse rounded-xl" /> });

export default function PostEditor({ initialData = null }: { initialData?: any }) {
  const router = useRouter();
  
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [featuredImage, setFeaturedImage] = useState(initialData?.featured_image || '');
  const [categoryId, setCategoryId] = useState(initialData?.category_id || '');
  const [metaTitle, setMetaTitle] = useState(initialData?.meta_title || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || '');
  const [metaKeywords, setMetaKeywords] = useState(initialData?.meta_keywords || '');
  const [status, setStatus] = useState(initialData?.status || 'draft');
  
  const [categories, setCategories] = useState<any[]>([]);
  const [mediaPickerOpen, setMediaPickerOpen] = useState(''); // '' | 'featured' | 'editor'
  const [saving, setSaving] = useState(false);
  const quillRef = useRef<any>(null);

  useEffect(() => {
    fetch('/api/admin/blog/categories')
      .then(res => res.json())
      .then(data => {
        if (data.success) setCategories(data.categories);
      });
  }, []);

  // Auto-generate slug from title if empty
  useEffect(() => {
    if (!initialData && title && !slug) {
      const generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      setSlug(generatedSlug);
    }
  }, [title, slug, initialData]);

  const handleMediaSelect = (url: string) => {
    if (mediaPickerOpen === 'featured') {
      setFeaturedImage(url);
    } else if (mediaPickerOpen === 'editor') {
      const editor = quillRef.current?.getEditor();
      if (editor) {
        const range = editor.getSelection(true);
        editor.insertEmbed(range.index, 'image', url);
        editor.setSelection(range.index + 1);
      }
    }
    setMediaPickerOpen('');
  };

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        [{ align: [] }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: () => setMediaPickerOpen('editor') // Intercept default image handler
      }
    }
  }), []);

  const handleSave = async (forceStatus?: string) => {
    if (!title || !slug || !content) {
      alert('Title, slug, and content are required.');
      return;
    }

    setSaving(true);
    const postStatus = forceStatus || status;

    const payload = {
      title, slug, content, excerpt, featured_image: featuredImage,
      category_id: categoryId ? parseInt(categoryId) : null,
      meta_title: metaTitle, meta_description: metaDescription, meta_keywords: metaKeywords,
      status: postStatus
    };

    try {
      const url = initialData?.id ? `/api/admin/blog/${initialData.id}` : '/api/admin/blog';
      const method = initialData?.id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (data.success) {
        router.push('/admin/blog');
        router.refresh();
      } else {
        alert(data.error || 'Failed to save post');
      }
    } catch (e) {
      console.error(e);
      alert('An unexpected error occurred.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData?.id) return;
    if (!confirm('Are you sure you want to delete this post? This cannot be undone.')) return;
    
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/blog/${initialData.id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/blog');
        router.refresh();
      } else {
        alert(data.error || 'Failed to delete post');
        setSaving(false);
      }
    } catch (e) {
      console.error(e);
      alert('Failed to delete post');
      setSaving(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            {initialData ? 'Edit Post' : 'Create New Post'}
          </h1>
          <p className="text-slate-500 font-medium text-sm mt-1">
            Write and publish beautiful stories
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-4 sm:mt-0">
          {initialData?.id && (
            <button
              onClick={handleDelete}
              disabled={saving}
              className="px-4 py-2.5 text-red-600 hover:bg-red-50 hover:text-red-700 font-bold rounded-xl transition-all disabled:opacity-50"
            >
              Delete Post
            </button>
          )}
          <button
            onClick={() => handleSave('draft')}
            disabled={saving}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={saving}
            className="px-6 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 disabled:opacity-50 flex items-center gap-2"
          >
            {saving ? (
               <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            ) : (
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            )}
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Post Title"
                className="w-full text-4xl font-black text-slate-900 border-none outline-none placeholder-slate-300 bg-transparent"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="flex items-center text-sm font-medium text-slate-400 bg-slate-50 p-2 rounded-lg">
              <span className="shrink-0 mr-2 text-slate-500 font-bold pl-2">Permanent Link:</span>
              <span className="hidden sm:inline">tomsuttonheating.co.uk/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-transparent border-b border-dashed border-slate-300 text-[#1d4ed8] focus:border-[#1d4ed8] outline-none flex-1 font-semibold"
              />
            </div>
            
            <div className="pt-4 border-t border-slate-100 quill-editor-wrapper">
              <ReactQuill 
                // @ts-ignore
                ref={quillRef}
                theme="snow" 
                value={content} 
                onChange={setContent}
                modules={quillModules}
                placeholder="Start writing your story here..."
              />
            </div>
          </div>
          
          {/* Excerpt */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Post Excerpt</h3>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A brief summary of your post that appears on the blog listing page..."
              className="w-full text-sm font-medium text-slate-900 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y"
            ></textarea>
          </div>
        </div>

        {/* Sidebar Configuration */}
        <div className="space-y-6">
          
          {/* Featured Image */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Featured Image</h3>
            {featuredImage ? (
              <div className="relative group rounded-xl overflow-hidden aspect-video border border-slate-200 shadow-inner">
                <img src={featuredImage} alt="Featured" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button onClick={() => setMediaPickerOpen('featured')} className="px-3 py-1.5 bg-white text-slate-900 text-xs font-bold rounded-lg hover:bg-slate-100">Replace</button>
                  <button onClick={() => setFeaturedImage('')} className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600">Remove</button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setMediaPickerOpen('featured')}
                className="w-full aspect-video border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 hover:border-slate-300 transition-colors flex flex-col items-center justify-center text-slate-500"
              >
                <svg className="w-8 h-8 mb-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="text-sm font-semibold">Set Featured Image</span>
              </button>
            )}
            <p className="text-[0.65rem] text-slate-400 font-medium mt-3 text-center">This image will appear on the blog list and social media sharing cards.</p>
          </div>

          {/* Category */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Category</h3>
              <a href="/admin/blog/categories" target="_blank" className="text-xs font-bold text-blue-600 hover:underline">Manage</a>
            </div>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
            >
              <option value="">Uncategorized</option>
              {categories.map((c: any) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* SEO Metadata */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">Meta Title</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Defaults to post title"
                  className="w-full text-xs font-medium text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">Meta Description</label>
                <textarea
                  rows={4}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Enter a compelling description for Google search results..."
                  className="w-full text-xs font-medium text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">SEO Keywords</label>
                <input
                  type="text"
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                  placeholder="e.g. heating, plumbing, boiler repair (comma separated)"
                  className="w-full text-xs font-medium text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <MediaPicker 
        open={mediaPickerOpen !== ''} 
        onClose={() => setMediaPickerOpen('')} 
        onSelect={handleMediaSelect} 
      />

      <style jsx global>{`
        .quill-editor-wrapper .ql-container {
          font-family: inherit;
          font-size: 1.05rem;
          min-height: 400px;
          border: none;
        }
        .quill-editor-wrapper .ql-toolbar {
          border: none;
          border-bottom: 2px dashed #f1f5f9;
          padding: 1rem 0;
          margin-bottom: 1rem;
        }
        .quill-editor-wrapper .ql-editor {
          padding: 0;
          line-height: 1.8;
          color: #334155;
        }
        .quill-editor-wrapper .ql-editor p {
          margin-bottom: 1.5em;
        }
        .quill-editor-wrapper .ql-editor h2 {
          font-size: 1.75rem;
          font-weight: 900;
          margin-top: 2em;
          margin-bottom: 1em;
          color: #0f172a;
        }
        .quill-editor-wrapper .ql-editor img {
          border-radius: 0.75rem;
          margin: 2rem 0;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}
