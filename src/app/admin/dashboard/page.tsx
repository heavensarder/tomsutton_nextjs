'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ totalPages: 0, seoComplete: 0, lastUpdated: '' });
  const [loading, setLoading] = useState(true);
  const [dbInitialized, setDbInitialized] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/seo');
      if (!res.ok) {
        setDbInitialized(false);
        setLoading(false);
        return;
      }
      const json = await res.json();
      const data = json.data || [];
      const complete = data.filter((p: Record<string, string>) => p.meta_title && p.meta_description && p.schema_markup).length;
      const latest = data.reduce((acc: string, p: Record<string, string>) => (p.updated_at > acc ? p.updated_at : acc), '');
      setStats({ totalPages: data.length, seoComplete: complete, lastUpdated: latest });
      setDbInitialized(true);
    } catch {
      setDbInitialized(false);
    }
    setLoading(false);
  };

  const handleSetupDb = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/setup-db', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setDbInitialized(true);
        await fetchStats();
      } else {
        alert('Setup failed: ' + (data.error || 'Unknown error'));
      }
    } catch {
      alert('Network error during setup.');
    }
    setLoading(false);
  };

  const completionPercent = stats.totalPages > 0 ? Math.round((stats.seoComplete / stats.totalPages) * 100) : 0;

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">Dashboard</h1>
        <p className="text-slate-500 mt-2 text-[1.05rem]">Welcome back, <span className="font-bold text-slate-700">admin_tomsutton</span>. Here's an overview of your site.</p>
      </div>

      {/* Database Setup Banner */}
      {!dbInitialized && !loading && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-amber-800 mb-1">Database Not Initialized</h3>
            <p className="text-amber-700 text-sm">Click the button below to create the database tables and seed your SEO data for all 30 pages.</p>
          </div>
          <button
            onClick={handleSetupDb}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-colors flex-shrink-0"
          >
            Initialize Database
          </button>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Total Pages */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Pages</span>
          </div>
          <p className="text-3xl font-black text-slate-800">{loading ? '—' : stats.totalPages}</p>
          <p className="text-slate-500 text-sm mt-1">Total managed pages</p>
        </div>

        {/* SEO Completion */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">{loading ? '—' : `${completionPercent}%`}</span>
          </div>
          <p className="text-3xl font-black text-slate-800">{loading ? '—' : `${stats.seoComplete}/${stats.totalPages}`}</p>
          <p className="text-slate-500 text-sm mt-1">SEO configured pages</p>
          {!loading && (
            <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-700" style={{ width: `${completionPercent}%` }} />
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-6 text-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-xs font-bold text-[#ff5e14] bg-[#ff5e14]/10 px-3 py-1 rounded-full">Quick</span>
          </div>
          <p className="text-lg font-bold mb-3">Quick Actions</p>
          <Link
            href="/admin/seo-manager"
            className="block w-full bg-[#ff5e14] hover:bg-[#e05010] text-white text-center font-bold text-sm py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-colors mb-2"
          >
            Open SEO Manager →
          </Link>
          <button
            onClick={handleSetupDb}
            disabled={loading}
            className="block w-full bg-white/10 hover:bg-white/20 text-white text-center font-semibold text-sm py-2.5 rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? 'Syncing...' : '🔄 Sync Database Tables'}
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            System Info
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-500 text-sm">Framework</span>
              <span className="text-slate-800 text-sm font-semibold">Next.js 16.2.0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-500 text-sm">Database</span>
              <span className="text-slate-800 text-sm font-semibold">MySQL</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-slate-500 text-sm">Environment</span>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">Development</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-500 text-sm">Last SEO Update</span>
              <span className="text-slate-800 text-sm font-semibold">{stats.lastUpdated ? new Date(stats.lastUpdated).toLocaleDateString() : '—'}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#ff5e14]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            SEO Checklist
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Meta titles configured', done: stats.seoComplete > 0 },
              { label: 'Meta descriptions set', done: stats.seoComplete > 0 },
              { label: 'Schema markup added', done: stats.seoComplete > 0 },
              { label: 'Open Graph images set', done: false },
              { label: 'Custom slugs reviewed', done: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                  {item.done ? (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                  )}
                </div>
                <span className={`text-sm font-medium ${item.done ? 'text-slate-700' : 'text-slate-400'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
