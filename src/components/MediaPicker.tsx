'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';

interface MediaItem {
  id: number;
  filename: string;
  url: string;
  original_name: string;
  mime_type: string;
  file_size: number;
  uploaded_at: string;
}

interface MediaPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

export default function MediaPicker({ open, onClose, onSelect }: MediaPickerProps) {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchMedia = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/media');
      const json = await res.json();
      if (json.success) setMedia(json.data || []);
    } catch { /* silent */ }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (open) { setLoading(true); setSelectedId(null); fetchMedia(); }
  }, [open, fetchMedia]);

  const handleUpload = async (files: FileList | File[]) => {
    setUploading(true);
    const fd = new FormData();
    Array.from(files).forEach(f => fd.append('files', f));
    try {
      const res = await fetch('/api/admin/media', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        fetchMedia();
        // Auto-select the first uploaded file
        if (data.uploaded?.[0]?.url) {
          const newMedia = await fetch('/api/admin/media').then(r => r.json());
          if (newMedia.data?.[0]) setSelectedId(newMedia.data[0].id);
        }
      }
    } catch { /* silent */ }
    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) handleUpload(e.dataTransfer.files);
  };

  const handleInsert = () => {
    const item = media.find(m => m.id === selectedId);
    if (item) {
      onSelect(item.url);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[95vw] max-w-[900px] h-[85vh] max-h-[700px] flex flex-col overflow-hidden animate-[modalIn_0.2s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-black text-slate-800">Media Library</h2>
            <p className="text-xs text-slate-400">{media.length} files — Select an image to insert</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] transition-colors disabled:opacity-60 flex items-center gap-1.5"
            >
              {uploading ? (
                <><svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Uploading</>
              ) : (
                <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>Upload New</>
              )}
            </button>
            <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => { if (e.target.files?.length) handleUpload(e.target.files); e.target.value = ''; }} />
            <button onClick={onClose} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto p-4"
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <svg className="w-8 h-8 text-[#ff5e14] animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            </div>
          ) : media.length === 0 ? (
            <div className={`flex flex-col items-center justify-center h-full border-2 border-dashed rounded-xl transition-colors ${dragOver ? 'border-[#ff5e14] bg-orange-50/30' : 'border-slate-200'}`}>
              <svg className="w-12 h-12 text-slate-200 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-slate-400 text-sm font-semibold">No media yet — upload or drag files here</p>
            </div>
          ) : (
            <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 ${dragOver ? 'opacity-50' : ''}`}>
              {media.map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`relative aspect-square bg-slate-50 rounded-xl border-2 overflow-hidden cursor-pointer transition-all hover:shadow-md ${selectedId === item.id ? 'border-[#ff5e14] ring-2 ring-[#ff5e14]/20' : 'border-slate-100 hover:border-slate-200'}`}
                >
                  {selectedId === item.id && (
                    <div className="absolute top-1.5 left-1.5 z-10 w-5 h-5 rounded-md bg-[#ff5e14] text-white flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                  <img
                    src={item.url}
                    alt={item.original_name}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
          <div className="text-xs text-slate-400">
            {selectedId ? (
              <span className="font-semibold text-slate-600">{media.find(m => m.id === selectedId)?.original_name}</span>
            ) : (
              'Click an image to select it'
            )}
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
              Cancel
            </button>
            <button
              onClick={handleInsert}
              disabled={!selectedId}
              className="px-5 py-2 rounded-lg text-sm font-bold text-white bg-[#ff5e14] hover:bg-[#e05010] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Insert Selected
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
