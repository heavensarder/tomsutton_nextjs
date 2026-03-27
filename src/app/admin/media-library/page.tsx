'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';

interface MediaItem {
  id: number;
  filename: string;
  url: string;
  original_name: string;
  mime_type: string;
  file_size: number;
  alt_text: string;
  uploaded_at: string;
}

export default function MediaLibraryPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editAlt, setEditAlt] = useState('');
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchMedia = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/media');
      const json = await res.json();
      if (json.success) setMedia(json.data || []);
    } catch { /* silent */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchMedia(); }, [fetchMedia]);

  useEffect(() => {
    if (toast) { const t = setTimeout(() => setToast(null), 3500); return () => clearTimeout(t); }
  }, [toast]);

  const handleUpload = async (files: FileList | File[]) => {
    setUploading(true);
    const fd = new FormData();
    Array.from(files).forEach(f => fd.append('files', f));
    try {
      const res = await fetch('/api/admin/media', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        setToast({ message: data.message, type: 'success' });
        fetchMedia();
      } else {
        setToast({ message: data.error || 'Upload failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Upload error', type: 'error' });
    }
    setUploading(false);
  };

  const handleDelete = async () => {
    if (selected.size === 0) return;
    if (!confirm(`Delete ${selected.size} file(s)? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      const res = await fetch('/api/admin/media', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: Array.from(selected) }),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ message: data.message, type: 'success' });
        setSelected(new Set());
        if (editingId && selected.has(editingId)) setEditingId(null);
        fetchMedia();
      } else {
        setToast({ message: data.error || 'Delete failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Delete error', type: 'error' });
    }
    setDeleting(false);
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingId, original_name: editName, alt_text: editAlt }),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ message: 'Media details saved!', type: 'success' });
        fetchMedia();
      } else {
        setToast({ message: data.error || 'Save failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Save error', type: 'error' });
    }
    setSaving(false);
  };

  const openEdit = (item: MediaItem) => {
    setEditingId(item.id);
    setEditName(item.original_name);
    setEditAlt(item.alt_text || '');
  };

  const toggleSelect = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selected.size === media.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(media.map(m => m.id)));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) handleUpload(e.dataTransfer.files);
  };

  const copyUrl = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setToast({ message: 'URL copied to clipboard!', type: 'success' });
  };

  const editingItem = editingId ? media.find(m => m.id === editingId) : null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <svg className="w-10 h-10 text-[#ff5e14] animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          <p className="text-slate-500 font-semibold text-sm tracking-wider">Loading media...</p>
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
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">Media Library</h1>
          <p className="text-slate-500 mt-1.5">{media.length} file{media.length !== 1 ? 's' : ''} uploaded</p>
        </div>
        <div className="flex items-center gap-2">
          {selected.size > 0 && (
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-4 py-2.5 rounded-xl text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-all disabled:opacity-60 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              {deleting ? 'Deleting...' : `Delete (${selected.size})`}
            </button>
          )}
          {media.length > 0 && (
            <button
              onClick={selectAll}
              className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              {selected.size === media.length ? 'Deselect All' : 'Select All'}
            </button>
          )}
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] shadow-sm transition-all disabled:opacity-60 flex items-center gap-2"
          >
            {uploading ? (
              <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Uploading...</>
            ) : (
              <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>Upload Files</>
            )}
          </button>
          <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => { if (e.target.files?.length) handleUpload(e.target.files); e.target.value = ''; }} />
        </div>
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-2xl p-6 mb-6 text-center transition-all ${dragOver ? 'border-[#ff5e14] bg-orange-50/50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
      >
        <svg className={`w-10 h-10 mx-auto mb-3 transition-colors ${dragOver ? 'text-[#ff5e14]' : 'text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
        <p className="text-sm font-semibold text-slate-500">Drag & drop images here</p>
        <p className="text-xs text-slate-400 mt-1">JPG, PNG, WebP, SVG, GIF — Max 8MB each</p>
      </div>

      <div className="flex gap-6">
        {/* Media Grid */}
        <div className="flex-1">
          {media.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center">
              <svg className="w-16 h-16 mx-auto text-slate-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-slate-500 font-semibold">No media uploaded yet</p>
              <p className="text-slate-400 text-sm mt-1">Upload images using the button above or drag & drop</p>
            </div>
          ) : (
            <div className={`grid grid-cols-2 sm:grid-cols-3 ${editingId ? 'md:grid-cols-3' : 'md:grid-cols-4 lg:grid-cols-5'} gap-3`}>
              {media.map(item => {
                const isSelected = selected.has(item.id);
                const isEditing = editingId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => openEdit(item)}
                    className={`group relative bg-white rounded-xl border-2 overflow-hidden cursor-pointer transition-all hover:shadow-md ${isEditing ? 'border-[#ff5e14] ring-2 ring-[#ff5e14]/20 shadow-md' : isSelected ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    {/* Checkbox */}
                    <div
                      onClick={(e) => toggleSelect(item.id, e)}
                      className={`absolute top-2 left-2 z-10 w-6 h-6 rounded-md flex items-center justify-center transition-all cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-white/80 border border-slate-300 opacity-0 group-hover:opacity-100 hover:bg-white'}`}
                    >
                      {isSelected && <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </div>

                    {/* Copy URL */}
                    <button
                      onClick={(e) => copyUrl(item.url, e)}
                      className="absolute top-2 right-2 z-10 w-7 h-7 rounded-md bg-white/80 border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all"
                      title="Copy URL"
                    >
                      <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </button>

                    {/* Image */}
                    <div className="aspect-square bg-slate-50 flex items-center justify-center p-2">
                      <img src={item.url} alt={item.alt_text || item.original_name} className="max-w-full max-h-full object-contain rounded" loading="lazy" />
                    </div>

                    {/* Info */}
                    <div className="px-3 py-2.5 border-t border-slate-50">
                      <p className="text-[0.7rem] font-semibold text-slate-700 truncate">{item.original_name}</p>
                      <p className="text-[0.6rem] text-slate-400 mt-0.5">{item.file_size} KB • {item.mime_type.split('/')[1].toUpperCase()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Edit Panel (WordPress-style sidebar) */}
        {editingItem && (
          <div className="w-[300px] shrink-0 bg-white rounded-2xl border border-slate-100 p-5 h-fit sticky top-6 animate-[slideIn_0.2s_ease-out]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Media Details</h3>
              <button onClick={() => setEditingId(null)} className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Preview */}
            <div className="bg-slate-50 rounded-xl p-3 mb-4 flex items-center justify-center">
              <img src={editingItem.url} alt={editingItem.alt_text || editingItem.original_name} className="max-w-full max-h-[150px] object-contain rounded-lg" />
            </div>

            {/* Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Alt Text</label>
                <textarea
                  value={editAlt}
                  onChange={(e) => setEditAlt(e.target.value)}
                  placeholder="Describe this image for accessibility & SEO"
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all resize-y"
                />
                <p className="text-[0.65rem] text-slate-400 mt-1">Helps with SEO and screen readers</p>
              </div>

              {/* Meta info */}
              <div className="border-t border-slate-100 pt-3 space-y-1.5">
                <p className="text-[0.65rem] text-slate-400"><span className="font-semibold text-slate-500">Type:</span> {editingItem.mime_type}</p>
                <p className="text-[0.65rem] text-slate-400"><span className="font-semibold text-slate-500">Size:</span> {editingItem.file_size} KB</p>
                <p className="text-[0.65rem] text-slate-400"><span className="font-semibold text-slate-500">URL:</span> <span className="break-all">{editingItem.url}</span></p>
              </div>

              <button
                onClick={handleSaveEdit}
                disabled={saving}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-white bg-[#ff5e14] hover:bg-[#e05010] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {saving ? (
                  <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Saving...</>
                ) : (
                  <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Save Details</>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
