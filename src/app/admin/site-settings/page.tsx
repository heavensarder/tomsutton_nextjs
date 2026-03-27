'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import MediaPicker from '@/components/MediaPicker';
import { DEFAULT_SETTINGS, SETTINGS_LABELS } from '@/lib/site-settings';

interface SettingRow {
  setting_key: string;
  setting_value: string;
  setting_group: string;
}

const GROUPS = ['Header', 'Social Media', 'Footer'];

const GROUP_ICONS: Record<string, React.ReactNode> = {
  Header: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>,
  'Social Media': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>,
  Footer: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
};

export default function SiteSettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>('Header');

  const fetchSettings = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/site-settings');
      const json = await res.json();
      if (json.success && json.data) {
        const map: Record<string, string> = {};
        json.data.forEach((row: SettingRow) => { map[row.setting_key] = row.setting_value; });
        setSettings(map);
      }
    } catch { /* silent */ }
    setLoading(false);
  }, []);

  useEffect(() => { fetchSettings(); }, [fetchSettings]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/site-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ message: 'All site settings saved successfully!', type: 'success' });
      } else {
        setToast({ message: data.error || 'Save failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    }
    setSaving(false);
  };

  const getSettingsForGroup = (group: string) => {
    return Object.entries(SETTINGS_LABELS).filter(([, meta]) => meta.group === group);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <svg className="w-10 h-10 text-[#ff5e14] animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          <p className="text-slate-500 font-semibold text-sm tracking-wider">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto relative">
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
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">Site Settings</h1>
          <p className="text-slate-500 mt-1.5">Manage your header, footer, and global site configuration.</p>
        </div>
        <button
          onClick={handleSaveAll}
          disabled={saving}
          className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] shadow-sm transition-all disabled:opacity-60 flex items-center gap-2 self-end"
        >
          {saving ? (
            <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Saving...</>
          ) : (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Save All Settings</>
          )}
        </button>
      </div>

      {/* Logo Previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Header Logo */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col items-center gap-3">
          <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-center w-full min-h-[80px] border border-dashed border-slate-200">
            <Image
              src={settings.header_logo_url || DEFAULT_SETTINGS.header_logo_url}
              alt="Header Logo Preview"
              width={240}
              height={60}
              className="object-contain max-h-[60px]"
              unoptimized
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-slate-700">Header Logo</p>
            <p className="text-[0.65rem] text-slate-400 mt-0.5">Recommended: <strong className="text-slate-500">320 × 80px</strong></p>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col items-center gap-3">
          <div className="bg-[#191919] rounded-xl p-4 flex items-center justify-center w-full min-h-[80px] border border-slate-700">
            <Image
              src={settings.footer_logo_url || DEFAULT_SETTINGS.footer_logo_url}
              alt="Footer Logo Preview"
              width={240}
              height={60}
              className="object-contain max-h-[60px]"
              unoptimized
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-slate-700">Footer Logo</p>
            <p className="text-[0.65rem] text-slate-400 mt-0.5">Recommended: <strong className="text-slate-500">240 × 80px</strong></p>
          </div>
        </div>
      </div>

      {/* Settings Groups */}
      <div className="space-y-3">
        {GROUPS.map(group => {
          const isExpanded = expandedGroup === group;
          const groupSettings = getSettingsForGroup(group);

          return (
            <div key={group} className={`bg-white rounded-2xl border transition-all duration-300 ${isExpanded ? 'border-blue-200 shadow-lg shadow-blue-500/5 ring-1 ring-blue-100' : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'}`}>
              <button
                onClick={() => setExpandedGroup(isExpanded ? null : group)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isExpanded ? 'bg-[#0f172a] text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {GROUP_ICONS[group]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-800 text-[0.95rem]">{group}</p>
                  <p className="text-slate-400 text-xs">{groupSettings.length} settings</p>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              {isExpanded && (
                <div className="border-t border-slate-100 px-5 pb-6 pt-4 space-y-5">
                  {groupSettings.map(([key, meta]) => {
                    const isImage = key.includes('logo') || key.includes('image') || key.includes('accreditations') || key.includes('favicon');
                    const fieldValue = settings[key] ?? DEFAULT_SETTINGS[key as keyof typeof DEFAULT_SETTINGS] ?? '';
                    return (
                    <div key={key} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">{meta.label}</label>
                        <span className="text-[0.6rem] font-mono text-slate-300">{key}</span>
                      </div>
                      {isImage ? (
                        <ImageUploadField value={fieldValue} onChange={(val: string) => handleChange(key, val)} />
                      ) : key.includes('address') || key.includes('copyright') ? (
                        <textarea
                          value={fieldValue}
                          onChange={(e) => handleChange(key, e.target.value)}
                          rows={2}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all resize-y"
                        />
                      ) : (
                        <input
                          type="text"
                          value={fieldValue}
                          onChange={(e) => handleChange(key, e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all"
                        />
                      )}
                      {meta.helpText && <p className="text-xs text-slate-400">{meta.helpText}</p>}
                    </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Save */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSaveAll}
          disabled={saving}
          className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#ff5e14] to-[#e05010] hover:from-[#e05010] hover:to-[#cc4400] shadow-lg shadow-orange-500/20 transition-all disabled:opacity-60 flex items-center gap-2"
        >
          {saving ? (
            <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Saving All...</>
          ) : (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Save All Settings</>
          )}
        </button>
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

function ImageUploadField({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <>
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste URL or browse media library"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all"
          />
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="px-4 py-3 bg-[#ff5e14] hover:bg-[#e05010] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Media Library
          </button>
        </div>
        {value && (
          <div className="bg-slate-50 rounded-xl p-3 border border-dashed border-slate-200 flex items-center gap-3">
            <img src={value} alt="Preview" className="w-16 h-10 object-contain rounded-lg border border-slate-200" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="text-xs text-slate-500 truncate flex-1">{value}</span>
          </div>
        )}
      </div>
      <MediaPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={(url: string) => onChange(url)} />
    </>
  );
}
