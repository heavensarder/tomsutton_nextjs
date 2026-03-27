'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { PAGE_CATEGORIES } from '@/lib/seo-pages';

interface SeoData {
  id: number;
  page_path: string;
  page_name: string;
  page_category: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  focus_keyword: string;
  og_title: string;
  og_description: string;
  og_image: string;
  og_type: string;
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  canonical_url: string;
  robots: string;
  custom_slug: string;
  schema_markup: string;
  updated_at: string;
}

type TabKey = 'basic' | 'opengraph' | 'twitter' | 'technical' | 'schema';

const TABS: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: 'basic', label: 'Basic SEO', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
  { key: 'opengraph', label: 'Open Graph', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg> },
  { key: 'twitter', label: 'Twitter Card', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg> },
  { key: 'technical', label: 'Technical', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
  { key: 'schema', label: 'Schema Markup', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
];

export default function SeoManagerPage() {
  const [allData, setAllData] = useState<SeoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedPage, setExpandedPage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [editBuffer, setEditBuffer] = useState<Partial<SeoData>>({});
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Sitemap & Robots state
  const [sitemapContent, setSitemapContent] = useState('');
  const [robotsContent, setRobotsContent] = useState('');
  const [savingFile, setSavingFile] = useState<string | null>(null);
  const [filesExpanded, setFilesExpanded] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/seo');
      const json = await res.json();
      if (json.success) setAllData(json.data);
    } catch { /* silent */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchData(); fetchFiles(); }, [fetchData]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const fetchFiles = async () => {
    try {
      const res = await fetch('/api/admin/files');
      const json = await res.json();
      if (json.success) {
        setSitemapContent(json.sitemap || '');
        setRobotsContent(json.robots || '');
      }
    } catch { /* silent */ }
  };

  const handleSaveFile = async (filename: string, content: string) => {
    setSavingFile(filename);
    try {
      const res = await fetch('/api/admin/files', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, content }),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ message: `${filename} saved successfully!`, type: 'success' });
      } else {
        setToast({ message: data.error || 'Save failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    }
    setSavingFile(null);
  };

  const handleAutoGenerate = async () => {
    setSavingFile('generate');
    try {
      const res = await fetch('/api/admin/files', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setSitemapContent(data.content || '');
        setToast({ message: data.message || 'Sitemap generated!', type: 'success' });
        await fetchFiles();
      } else {
        setToast({ message: data.error || 'Generation failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    }
    setSavingFile(null);
  };

  const handleExpand = (pagePath: string) => {
    if (expandedPage === pagePath) {
      setExpandedPage(null);
      setEditBuffer({});
    } else {
      const page = allData.find(p => p.page_path === pagePath);
      if (page) {
        setEditBuffer({ ...page });
        setExpandedPage(pagePath);
        setActiveTab('basic');
      }
    }
  };

  const handleFieldChange = (field: keyof SeoData, value: string) => {
    setEditBuffer(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!expandedPage) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/seo', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_path: expandedPage, ...editBuffer }),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ message: `SEO settings saved for "${editBuffer.page_name}"`, type: 'success' });
        await fetchData();
      } else {
        setToast({ message: data.error || 'Save failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    }
    setSaving(false);
  };

  const filteredData = allData.filter(p => {
    const matchSearch = p.page_name.toLowerCase().includes(searchTerm.toLowerCase()) || p.page_path.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === 'All' || p.page_category === filterCategory;
    return matchSearch && matchCategory;
  });

  const grouped = filteredData.reduce<Record<string, SeoData[]>>((acc, page) => {
    if (!acc[page.page_category]) acc[page.page_category] = [];
    acc[page.page_category].push(page);
    return acc;
  }, {});

  const getSeoScore = (page: SeoData): number => {
    let score = 0;
    if (page.meta_title) score += 20;
    if (page.meta_description) score += 20;
    if (page.meta_keywords) score += 10;
    if (page.og_title && page.og_description) score += 15;
    if (page.schema_markup) score += 20;
    if (page.canonical_url) score += 10;
    if (page.focus_keyword) score += 5;
    return score;
  };

  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 50) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <svg className="w-10 h-10 text-[#ff5e14] animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          <p className="text-slate-500 font-semibold text-sm tracking-wider">Loading SEO data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto relative">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border text-sm font-semibold animate-[slideIn_0.3s_ease-out] ${toast.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
          {toast.type === 'success' ? (
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          ) : (
            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )}
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">SEO Manager</h1>
          <p className="text-slate-500 mt-1.5">Advanced search engine optimization for all {allData.length} pages.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <span><strong className="text-slate-700">{allData.filter(p => getSeoScore(p) >= 80).length}</strong> pages fully optimized</span>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            type="text"
            placeholder="Search pages by name or path..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all shadow-sm"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all shadow-sm cursor-pointer"
        >
          <option value="All">All Categories</option>
          {PAGE_CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Sitemap & Robots.txt Management */}
      <div className="mb-8">
        <button
          onClick={() => setFilesExpanded(!filesExpanded)}
          className={`w-full bg-white rounded-2xl border px-5 py-4 flex items-center gap-4 text-left transition-all duration-300 ${filesExpanded ? 'border-blue-200 shadow-lg shadow-blue-500/5 ring-1 ring-blue-100' : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'}`}
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-slate-800 text-[0.95rem]">Sitemap & Robots.txt</p>
            <p className="text-slate-400 text-xs">Manage your sitemap.xml and robots.txt files</p>
          </div>
          <div className="flex items-center gap-2">
            {sitemapContent && <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-green-50 text-green-600 border-green-200 hidden sm:block">sitemap.xml ✓</span>}
            {robotsContent && <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-green-50 text-green-600 border-green-200 hidden sm:block">robots.txt ✓</span>}
          </div>
          <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${filesExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>

        {filesExpanded && (
          <div className="mt-2 bg-white rounded-2xl border border-blue-200 shadow-lg shadow-blue-500/5 ring-1 ring-blue-100 p-5 space-y-8">
            {/* Sitemap.xml */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">sitemap.xml</label>
                  {sitemapContent && <span className="text-[0.65rem] font-mono text-slate-400">({sitemapContent.split('\n').length} lines)</span>}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAutoGenerate}
                    disabled={savingFile === 'generate'}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-all disabled:opacity-60 flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    {savingFile === 'generate' ? 'Generating...' : 'Auto-Generate'}
                  </button>
                  <button
                    onClick={() => handleSaveFile('sitemap.xml', sitemapContent)}
                    disabled={savingFile === 'sitemap.xml'}
                    className="text-xs font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] px-3 py-1.5 rounded-lg transition-all disabled:opacity-60 flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {savingFile === 'sitemap.xml' ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
              <textarea
                value={sitemapContent}
                onChange={(e) => setSitemapContent(e.target.value)}
                rows={12}
                className="w-full bg-[#0f172a] text-sky-300 border border-slate-700 rounded-xl px-4 py-3 text-xs font-mono leading-relaxed focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-y"
                placeholder='<?xml version="1.0" encoding="UTF-8"?>\n<urlset>...</urlset>'
                spellCheck={false}
              />
            </div>

            {/* robots.txt */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">robots.txt</label>
                  {robotsContent && <span className="text-[0.65rem] font-mono text-slate-400">({robotsContent.split('\n').length} lines)</span>}
                </div>
                <button
                  onClick={() => handleSaveFile('robots.txt', robotsContent)}
                  disabled={savingFile === 'robots.txt'}
                  className="text-xs font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] px-3 py-1.5 rounded-lg transition-all disabled:opacity-60 flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {savingFile === 'robots.txt' ? 'Saving...' : 'Save'}
                </button>
              </div>
              <textarea
                value={robotsContent}
                onChange={(e) => setRobotsContent(e.target.value)}
                rows={6}
                className="w-full bg-[#0f172a] text-emerald-300 border border-slate-700 rounded-xl px-4 py-3 text-xs font-mono leading-relaxed focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-y"
                placeholder={'User-agent: *\nAllow: /\n\nSitemap: https://tomsuttonheating.co.uk/sitemap.xml'}
                spellCheck={false}
              />
            </div>
          </div>
        )}
      </div>

      {/* Pages List */}
      {Object.entries(grouped).map(([category, pages]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-3 px-1 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e14]" />
            {category} <span className="text-slate-300 font-normal">({pages.length})</span>
          </h2>

          <div className="space-y-2">
            {pages.map(page => {
              const isExpanded = expandedPage === page.page_path;
              const score = getSeoScore(page);
              const scoreClass = getScoreColor(score);

              return (
                <div key={page.page_path} className={`bg-white rounded-2xl border transition-all duration-300 ${isExpanded ? 'border-blue-200 shadow-lg shadow-blue-500/5 ring-1 ring-blue-100' : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'}`}>
                  {/* Row Header */}
                  <button
                    onClick={() => handleExpand(page.page_path)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black border ${scoreClass} flex-shrink-0`}>
                      {score}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-800 text-[0.95rem] truncate">{page.page_name}</p>
                      <p className="text-slate-400 text-xs font-mono truncate">{page.page_path}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${scoreClass} hidden sm:block`}>
                      {score >= 80 ? 'Optimized' : score >= 50 ? 'Partial' : 'Needs Work'}
                    </span>
                    <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>

                  {/* Expanded Editor */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 px-5 pb-6">
                      {/* Tabs */}
                      <div className="flex gap-1 py-4 overflow-x-auto border-b border-slate-100 mb-6">
                        {TABS.map(tab => (
                          <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                              activeTab === tab.key
                                ? 'bg-[#0f172a] text-white shadow-sm'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {tab.icon}
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <div className="space-y-5">
                        {activeTab === 'basic' && (
                          <>
                            <FieldInput label="Meta Title" field="meta_title" value={editBuffer.meta_title || ''} onChange={handleFieldChange} maxLen={60} placeholder="Enter SEO title (50-60 chars recommended)" />
                            <FieldTextarea label="Meta Description" field="meta_description" value={editBuffer.meta_description || ''} onChange={handleFieldChange} maxLen={160} placeholder="Enter meta description (150-160 chars recommended)" rows={3} />
                            <FieldInput label="Meta Keywords" field="meta_keywords" value={editBuffer.meta_keywords || ''} onChange={handleFieldChange} placeholder="keyword1, keyword2, keyword3..." />
                            <FieldInput label="Focus Keyword" field="focus_keyword" value={editBuffer.focus_keyword || ''} onChange={handleFieldChange} placeholder="Primary keyword for this page" />
                          </>
                        )}

                        {activeTab === 'opengraph' && (
                          <>
                            <FieldInput label="OG Title" field="og_title" value={editBuffer.og_title || ''} onChange={handleFieldChange} placeholder="Open Graph title for social sharing" />
                            <FieldTextarea label="OG Description" field="og_description" value={editBuffer.og_description || ''} onChange={handleFieldChange} placeholder="Description shown when shared on Facebook/LinkedIn" rows={3} />
                            <FieldInput label="OG Image URL" field="og_image" value={editBuffer.og_image || ''} onChange={handleFieldChange} placeholder="https://example.com/og-image.jpg (1200x630px recommended)" />
                            <FieldSelect label="OG Type" field="og_type" value={editBuffer.og_type || 'website'} onChange={handleFieldChange} options={['website', 'article', 'product', 'local_business']} />
                          </>
                        )}

                        {activeTab === 'twitter' && (
                          <>
                            <FieldSelect label="Card Type" field="twitter_card" value={editBuffer.twitter_card || 'summary_large_image'} onChange={handleFieldChange} options={['summary', 'summary_large_image', 'app', 'player']} />
                            <FieldInput label="Twitter Title" field="twitter_title" value={editBuffer.twitter_title || ''} onChange={handleFieldChange} placeholder="Title for Twitter card" />
                            <FieldTextarea label="Twitter Description" field="twitter_description" value={editBuffer.twitter_description || ''} onChange={handleFieldChange} placeholder="Description for Twitter card (max 200 chars)" rows={2} maxLen={200} />
                          </>
                        )}

                        {activeTab === 'technical' && (
                          <>
                            <FieldInput label="Canonical URL" field="canonical_url" value={editBuffer.canonical_url || ''} onChange={handleFieldChange} placeholder="https://tomsuttonheating.co.uk/page-path" />
                            <FieldSelect label="Robots Directive" field="robots" value={editBuffer.robots || 'index, follow'} onChange={handleFieldChange} options={['index, follow', 'index, nofollow', 'noindex, follow', 'noindex, nofollow']} />
                            <FieldInput label="Page Slug" field="custom_slug" value={editBuffer.custom_slug || ''} onChange={handleFieldChange} placeholder="custom-page-slug" helpText="Change the URL slug for this page. Current path shown above." />
                          </>
                        )}

                        {activeTab === 'schema' && (
                          <>
                            <div className="space-y-2">
                              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">JSON-LD Schema Markup</label>
                              <p className="text-xs text-slate-400">Structured data helps search engines understand your page content. Must be valid JSON.</p>
                              <textarea
                                value={editBuffer.schema_markup || ''}
                                onChange={(e) => handleFieldChange('schema_markup', e.target.value)}
                                rows={16}
                                className="w-full bg-[#0f172a] text-green-400 border border-slate-700 rounded-xl px-4 py-3 text-xs font-mono leading-relaxed focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-y"
                                placeholder='{"@context":"https://schema.org","@type":"LocalBusiness",...}'
                                spellCheck={false}
                              />
                              <SchemaValidator json={editBuffer.schema_markup || ''} />
                            </div>
                          </>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-100">
                        <p className="text-xs text-slate-400">
                          Last updated: {page.updated_at ? new Date(page.updated_at).toLocaleString() : 'Never'}
                        </p>
                        <div className="flex gap-3">
                          <button
                            onClick={() => { setExpandedPage(null); setEditBuffer({}); }}
                            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all border border-slate-200"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] shadow-sm transition-all disabled:opacity-60 flex items-center gap-2"
                          >
                            {saving ? (
                              <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Saving...</>
                            ) : (
                              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Save Changes</>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {filteredData.length === 0 && (
        <div className="text-center py-20">
          <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <p className="text-slate-500 font-semibold">No pages match your search.</p>
          <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

/* ====== Reusable Field Components ====== */

function FieldInput({ label, field, value, onChange, placeholder, maxLen, helpText }: {
  label: string; field: string; value: string; onChange: (field: keyof SeoData, value: string) => void;
  placeholder?: string; maxLen?: number; helpText?: string;
}) {
  const charCount = value.length;
  const isOver = maxLen ? charCount > maxLen : false;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
        {maxLen && (
          <span className={`text-xs font-mono font-semibold ${isOver ? 'text-red-500' : charCount > maxLen * 0.8 ? 'text-amber-500' : 'text-slate-400'}`}>
            {charCount}/{maxLen}
          </span>
        )}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(field as keyof SeoData, e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all ${isOver ? 'border-red-300' : 'border-slate-200'}`}
      />
      {helpText && <p className="text-xs text-slate-400">{helpText}</p>}
    </div>
  );
}

function FieldTextarea({ label, field, value, onChange, placeholder, rows = 3, maxLen }: {
  label: string; field: string; value: string; onChange: (field: keyof SeoData, value: string) => void;
  placeholder?: string; rows?: number; maxLen?: number;
}) {
  const charCount = value.length;
  const isOver = maxLen ? charCount > maxLen : false;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
        {maxLen && (
          <span className={`text-xs font-mono font-semibold ${isOver ? 'text-red-500' : charCount > maxLen * 0.8 ? 'text-amber-500' : 'text-slate-400'}`}>
            {charCount}/{maxLen}
          </span>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(field as keyof SeoData, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all resize-y ${isOver ? 'border-red-300' : 'border-slate-200'}`}
      />
    </div>
  );
}

function FieldSelect({ label, field, value, onChange, options }: {
  label: string; field: string; value: string; onChange: (field: keyof SeoData, value: string) => void;
  options: string[];
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(field as keyof SeoData, e.target.value)}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all cursor-pointer"
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function SchemaValidator({ json }: { json: string }) {
  if (!json.trim()) return null;
  try {
    JSON.parse(json);
    return (
      <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        Valid JSON — Schema will be rendered correctly.
      </div>
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Invalid JSON';
    return (
      <div className="flex items-center gap-2 text-xs text-red-500 font-semibold">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        JSON Error: {msg}
      </div>
    );
  }
}
