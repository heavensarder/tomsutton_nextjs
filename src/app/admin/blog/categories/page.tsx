'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminBlogCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [newName, setNewName] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/admin/blog/categories');
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (val: string) => {
    setNewName(val);
    if (!newSlug || newSlug === newName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')) {
      setNewSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''));
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newSlug) return;
    
    setSaving(true);
    try {
      const res = await fetch('/api/admin/blog/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, slug: newSlug })
      });
      const data = await res.json();
      if (data.success) {
        setCategories([...categories, data.category]);
        setNewName('');
        setNewSlug('');
      } else {
        alert(data.error);
      }
    } catch (e) {
      console.error(e);
      alert('Failed to create category');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this category? Any associated posts will become uncategorized.')) return;
    
    try {
      const res = await fetch(`/api/admin/blog/categories/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setCategories(categories.filter((c) => c.id !== id));
      } else {
        alert('Failed to delete category');
      }
    } catch (e) {
      console.error(e);
      alert('Failed to delete category');
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
            <Link href="/admin/blog" className="text-slate-400 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </Link>
            Manage Categories
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Organize your blog posts efficiently</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Create Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <h2 className="text-lg font-black text-slate-800 mb-6 uppercase tracking-wider text-sm">Create Category</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="e.g., Heating Tips"
                  className="w-full text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-[#fb923c] focus:ring-1 focus:ring-[#fb923c] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Slug</label>
                <input
                  type="text"
                  required
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                  className="w-full text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-[#fb923c] focus:ring-1 focus:ring-[#fb923c] transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={saving}
                className="w-full py-3 mt-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50"
              >
                {saving ? 'Creating...' : 'Add Category'}
              </button>
            </form>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-slate-400 font-bold animate-pulse">Loading categories...</div>
            ) : categories.length === 0 ? (
              <div className="p-12 text-center text-slate-400 font-bold">No categories exist.</div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 uppercase text-xs font-bold text-slate-500 tracking-wider">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Slug</th>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {categories.map((cat) => (
                    <tr key={cat.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800 text-sm">{cat.name}</td>
                      <td className="px-6 py-4 font-medium text-slate-500 text-sm">/{cat.slug}</td>
                      <td className="px-6 py-4 font-bold text-slate-400 text-xs">#{cat.id}</td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => handleDelete(cat.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Category"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
