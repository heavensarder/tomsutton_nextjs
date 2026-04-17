'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

interface SettingRow {
  setting_key: string;
  setting_value: string;
}

export default function MailConfigPage() {
  const [activeTab, setActiveTab] = useState<'credentials' | 'template' | 'auto-reply' | 'guide'>('credentials');
  const [settings, setSettings] = useState<Record<string, string>>({
    mail_sender_name: '',
    mail_sender_email: '',
    mail_receiver_email: '',
    mail_client_id: '',
    mail_client_secret: '',
    mail_refresh_token: '',
    mail_email_subject: 'New Enquiry Form Submitted',
    mail_html_body: `<div style="font-family:sans-serif; padding: 20px;">\n  <h2>New Enquiry!</h2>\n  <p><strong>Name:</strong> {{name}}</p>\n  <p><strong>Email:</strong> {{email}}</p>\n</div>`,
    mail_auto_reply_enabled: 'false',
    mail_reply_subject: 'Thank you for your enquiry',
    mail_reply_body: `<div style="font-family:sans-serif; padding: 20px;">\n  <h2>Thanks for getting in touch!</h2>\n</div>`,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/site-settings');
      const json = await res.json();
      if (json.success && json.data) {
        const map: Record<string, string> = {};
        json.data.forEach((row: SettingRow) => {
          if (row.setting_key.startsWith('mail_')) {
            map[row.setting_key] = row.setting_value;
          }
        });
        setSettings(prev => ({ ...prev, ...map }));
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

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/site-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ message: 'Mail Configuration saved successfully!', type: 'success' });
      } else {
        setToast({ message: data.error || 'Save failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <svg className="w-10 h-10 text-[#2563eb] animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          <p className="text-slate-500 font-semibold text-sm tracking-wider">Loading Configuration...</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'credentials', label: 'CREDENTIALS', icon: <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg> },
    { id: 'template', label: 'TEMPLATE', icon: <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { id: 'auto-reply', label: 'AUTO-REPLY', icon: <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
    { id: 'guide', label: 'GUIDE', icon: <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
  ];

  return (
    <div className="max-w-[1100px] mx-auto bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden relative min-h-[70vh]">
      
      {/* Toast */}
      {toast && (
        <div className={`absolute top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border text-sm font-semibold animate-[slideIn_0.3s_ease-out] ${toast.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
          {toast.message}
        </div>
      )}

      {/* Tabs Header */}
      <div className="flex items-center border-b border-slate-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 min-w-[150px] flex items-center justify-center py-5 px-4 text-sm font-bold tracking-widest uppercase transition-all border-b-[3px] ${
              activeTab === tab.id 
                ? 'border-blue-600 text-blue-600 bg-blue-50/30' 
                : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="p-8 sm:p-12">
        {activeTab === 'credentials' && (
          <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Sender Name</label>
              <input type="text" value={settings.mail_sender_name || ''} onChange={e => handleChange('mail_sender_name', e.target.value)} className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="E.g., Tom Sutton Heating" />
              <p className="text-[0.7rem] text-slate-400 font-medium">The official name appended to outgoing emails (e.g., Tom Sutton Heating).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Sender Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <input type="email" value={settings.mail_sender_email} onChange={e => handleChange('mail_sender_email', e.target.value)} className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="donotreply@domain.com" />
                </div>
                <p className="text-[0.7rem] text-slate-400 font-medium">The Google Workspace account you logged in with.</p>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Receiver Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>
                  </div>
                  <input type="email" value={settings.mail_receiver_email} onChange={e => handleChange('mail_receiver_email', e.target.value)} className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="enquiry@domain.com" />
                </div>
                <p className="text-[0.7rem] text-slate-400 font-medium">Where you want to receive the enquiries.</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Client ID</label>
              <input type="text" value={settings.mail_client_id} onChange={e => handleChange('mail_client_id', e.target.value)} className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Client Secret</label>
              <input type="password" value={settings.mail_client_secret} onChange={e => handleChange('mail_client_secret', e.target.value)} className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm font-black text-slate-800 tracking-[0.2em] focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Refresh Token</label>
              <textarea value={settings.mail_refresh_token} onChange={e => handleChange('mail_refresh_token', e.target.value)} rows={2} className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-[0.8rem] font-mono text-slate-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
              <p className="text-[0.7rem] text-slate-400 font-medium">Generated from OAuth Playground.</p>
            </div>
          </div>
        )}

        {activeTab === 'template' && (
          <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-[#f2f8fd] border border-[#e0effb] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1e40af] mb-1.5">Available Placeholders:</p>
                <p className="text-[0.8rem] font-bold text-[#3b82f6] tracking-wide break-all leading-relaxed">
                  {`{{name}}, {{email}}, {{phone}}, {{postcode}}, {{address}}, {{service}}, {{message}}, {{date}}`}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Email Subject</label>
              <input type="text" value={settings.mail_email_subject} onChange={e => handleChange('mail_email_subject', e.target.value)} className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">HTML Body</label>
              <textarea value={settings.mail_html_body} onChange={e => handleChange('mail_html_body', e.target.value)} rows={15} className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-[0.85rem] font-mono leading-relaxed text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"></textarea>
            </div>
          </div>
        )}

        {activeTab === 'auto-reply' && (
          <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
            <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <div>
                <h3 className="font-bold text-slate-800 tracking-tight">Enable Auto-Reply</h3>
                <p className="text-sm text-slate-500 mt-1">Automatically send a response email to the customer.</p>
              </div>
              <button 
                onClick={() => handleChange('mail_auto_reply_enabled', settings.mail_auto_reply_enabled === 'true' ? 'false' : 'true')}
                className={`w-14 h-8 rounded-full p-1 transition-colors ${settings.mail_auto_reply_enabled === 'true' ? 'bg-[#ff5e14]' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform ${settings.mail_auto_reply_enabled === 'true' ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
            </div>

            <div className="bg-[#fff7f0] border border-[#ffecd9] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-100 text-[#ff5e14] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#c24100] mb-1">Auto-Reply Template</p>
                <p className="text-[0.8rem] font-medium text-[#db5a00] leading-relaxed">
                  This email will be sent to the customer immediately after they submit the contact form.
                </p>
              </div>
            </div>

            <div className={`space-y-8 transition-opacity ${settings.mail_auto_reply_enabled !== 'true' && 'opacity-50 pointer-events-none'}`}>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Reply Subject</label>
                <input type="text" value={settings.mail_reply_subject} onChange={e => handleChange('mail_reply_subject', e.target.value)} className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 tracking-widest uppercase">Reply Body (HTML)</label>
                <textarea value={settings.mail_reply_body} onChange={e => handleChange('mail_reply_body', e.target.value)} rows={12} className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-[0.85rem] font-mono leading-relaxed text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"></textarea>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Google Cloud Setup</h3>
                  <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
                    <li>1. Go to <a href="https://console.cloud.google.com" target="_blank" className="text-blue-600 hover:underline">Google Cloud Console</a> and create a <strong>New Project</strong>.</li>
                    <li>2. Navigate to <strong>APIs & Services {'>'} OAuth consent screen</strong>.</li>
                    <li>3. Select <strong>External</strong> User Type and click Create.</li>
                    <li>4. Fill in App Name and Support Email. Save & Continue.</li>
                    <li className="text-slate-800">5. <strong>IMPORTANT:</strong> On the summary page, click <strong>"PUBLISH APP"</strong>. (Avoids 7-day token expiry).</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Create Credentials</h3>
                  <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
                    <li>1. Go to <strong>APIs & Services {'>'} Credentials</strong>.</li>
                    <li>2. Click <strong>+ CREATE CREDENTIALS</strong> and select <strong>OAuth client ID</strong>.</li>
                    <li>3. Application type: <strong>Web application</strong>.</li>
                    <li>4. Under "Authorized redirect URIs", click <strong>ADD URI</strong> and paste:
                      <div className="mt-2 mb-2 p-3 bg-slate-100 rounded-xl font-mono text-xs text-slate-500 break-all select-all border border-slate-200">
                        https://developers.google.com/oauthplayground
                      </div>
                    </li>
                    <li>5. Click <strong>CREATE</strong>. Copy your <strong>Client ID</strong> and <strong>Client Secret</strong>.</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">Generate Refresh Token</h3>
                  <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
                    <li>1. Go to <a href="https://developers.google.com/oauthplayground" target="_blank" className="text-blue-600 hover:underline">OAuth 2.0 Playground</a>.</li>
                    <li>2. Click the <strong>Settings (gear) icon</strong> on the top right.</li>
                    <li>3. Check <strong>"Use your own OAuth credentials"</strong> and paste your Client ID/Secret.</li>
                    <li>4. On the left, find "Input your own scopes", paste this, and click Authorize:
                      <div className="mt-2 mb-2 p-3 bg-slate-100 rounded-xl font-mono text-xs text-slate-500 break-all select-all border border-slate-200">
                        https://mail.google.com/
                      </div>
                    </li>
                    <li>5. Sign in with the Google Account you want to send emails from.</li>
                    <li>6. Click <strong>"Exchange authorization code for tokens"</strong>.</li>
                    <li>7. Copy the <strong>Refresh Token</strong> (starts with 1//) and paste it in the Credentials tab.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Save Button Overlay */}
      {activeTab !== 'guide' && (
        <div className="absolute bottom-0 w-full p-8 border-t border-slate-100 bg-white/90 backdrop-blur-sm shadow-[0_-10px_40px_rgba(0,0,0,0.02)] flex items-center justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-[#0284c7] hover:from-blue-700 hover:to-[#0369a1] text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_15px_40px_-5px_rgba(37,99,235,0.7)] flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {saving ? (
              <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Saving...</>
            ) : (
              <><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Save Changes</>
            )}
          </button>
        </div>
      )}
      <div className={activeTab !== 'guide' ? 'h-32' : ''}></div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
