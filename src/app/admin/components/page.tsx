'use client';

import React, { useState, useEffect, useCallback } from 'react';
import MediaPicker from '@/components/MediaPicker';
import { 
  popularPackagesDefault, 
  whyChooseUsDefault, 
  slidingGalleryDefault, 
  locationContactDefault,
  ourServicesDefault
} from '@/lib/defaultComponentsData';

const COMPONENTS_MAP = [
  { id: 'popular_packages', label: 'Popular Packages', default: popularPackagesDefault },
  { id: 'why_choose_us', label: 'Why Choose Us', default: whyChooseUsDefault },
  { id: 'sliding_gallery', label: 'Sliding Gallery', default: slidingGalleryDefault },
  { id: 'location_contact', label: 'Location Contact', default: locationContactDefault },
  { id: 'our_services', label: 'Our Services', default: ourServicesDefault }
];

export default function ComponentsAdminPage() {
  const [activeTab, setActiveTab] = useState('popular_packages');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fetchComponentData = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/components/${id}`);
      const json = await res.json();
      const defaultData = COMPONENTS_MAP.find(c => c.id === id)?.default;
      
      // Load from DB if it exists, otherwise fill with hardcoded defaults to prevent design break
      if (json.success && json.data) {
        const mergedData: any = { ...defaultData, ...json.data };
        const dAny: any = defaultData;
        // Ensure arrays exist to prevent mapping crashes
        if (dAny?.features && !mergedData.features) mergedData.features = dAny.features;
        if (dAny?.packages && !mergedData.packages) mergedData.packages = dAny.packages;
        if (dAny?.images && !mergedData.images) mergedData.images = dAny.images;
        setData(mergedData);
      } else {
        setData(defaultData);
      }
    } catch {
      setToast({ message: 'Error fetching component data', type: 'error' });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchComponentData(activeTab);
  }, [activeTab, fetchComponentData]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/components/${activeTab}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (json.success) {
        setToast({ message: 'Component saved successfully!', type: 'success' });
      } else {
        setToast({ message: json.error || 'Save failed', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    }
    setSaving(false);
  };

  // Generic updaters
  const updateField = (fieldPath: string, value: any) => {
    setData((prev: any) => {
      const parts = fieldPath.split('.');
      const clone = { ...prev };
      let cursor = clone;
      for (let i = 0; i < parts.length - 1; i++) {
        cursor = cursor[parts[i]];
      }
      cursor[parts[parts.length - 1]] = value;
      return clone;
    });
  };

  const renderActiveForm = () => {
    if (!data) return null;

    switch (activeTab) {
      case 'popular_packages':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b pb-2">Header Configuration</h3>
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Badge Text" value={data.headerBadge} onChange={(v) => updateField('headerBadge', v)} />
              <TextField label="Main Heading" value={data.heading} onChange={(v) => updateField('heading', v)} />
            </div>
            <TextAreaField label="Description" value={data.description} onChange={(v) => updateField('description', v)} />
            
            <h3 className="text-xl font-bold border-b pb-2 mt-8">Packages</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {(data.packages || []).map((pkg: any, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 shadow-sm">
                  <h4 className="font-bold text-lg text-[#0d1033]">{pkg.type} Package</h4>
                  <p className="text-xs text-slate-500 -mt-3">(Package {idx + 1})</p>
                  <TextField label="Title" value={pkg.type} onChange={(v) => updateField(`packages.${idx}.type`, v)} />
                  <TextField label="Subtitle" value={pkg.subtitle} onChange={(v) => updateField(`packages.${idx}.subtitle`, v)} />
                  <TextField label="Price (£)" value={pkg.price} onChange={(v) => updateField(`packages.${idx}.price`, v)} />
                  <ImageUploadField label="Package Image (Rec: 500x500)" value={pkg.image} onChange={(v) => updateField(`packages.${idx}.image`, v)} />
                  
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Features</label>
                    <div className="space-y-2">
                      {(pkg.features || []).map((feat: string, fIdx: number) => (
                        <div key={fIdx} className="flex gap-2 group">
                          <input 
                            type="text" 
                            className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#ff5e14]/20 focus:border-[#ff5e14] transition-all text-slate-900" 
                            value={feat || ''}
                            onChange={(e) => {
                              const newFeats = [...(pkg.features || [])];
                              newFeats[fIdx] = e.target.value;
                              updateField(`packages.${idx}.features`, newFeats);
                            }}
                            placeholder="e.g. 10-year warranty"
                          />
                          <button 
                            type="button"
                            onClick={() => {
                              const newFeats = [...(pkg.features || [])];
                              newFeats.splice(fIdx, 1);
                              updateField(`packages.${idx}.features`, newFeats);
                            }}
                            className="w-10 flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all font-bold text-lg opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:opacity-100"
                            title="Remove feature"
                            disabled={(pkg.features || []).length <= 1}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button 
                        type="button"
                        onClick={() => updateField(`packages.${idx}.features`, [...(pkg.features || []), ''])}
                        className="mt-2 text-xs font-bold text-[#ff5e14] bg-[#ff5e14]/5 hover:bg-[#ff5e14] hover:text-white border border-[#ff5e14]/20 rounded-xl px-4 py-2 transition-all border-dashed"
                      >
                        + Add Feature
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold border-b pb-2 mt-8">Finance Note</h3>
            <TextField label="Finance Title" value={data.financeTitle} onChange={(v) => updateField('financeTitle', v)} />
            <TextAreaField label="Finance Paragraph 1" value={data.financeText1} onChange={(v) => updateField('financeText1', v)} />
            <TextAreaField label="Finance Paragraph 2" value={data.financeText2} onChange={(v) => updateField('financeText2', v)} />
          </div>
        );

      case 'why_choose_us':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b pb-2">Main Content</h3>
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Section Badge" value={data.badge} onChange={(v) => updateField('badge', v)} />
              <TextField label="Heading" value={data.heading} onChange={(v) => updateField('heading', v)} />
            </div>
            <TextAreaField label="Description" value={data.description} onChange={(v) => updateField('description', v)} />
            
            <h3 className="text-xl font-bold border-b pb-2 mt-8">Images & Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <ImageUploadField label="Main Image (Rec: 800x1200)" value={data.image} onChange={(v) => updateField('image', v)} />
              <div className="space-y-3">
                <TextField label="Stat Percentage" value={data.statPercentage} onChange={(v) => updateField('statPercentage', v)} />
                <TextField label="Stat Line 1" value={data.statTextLine1} onChange={(v) => updateField('statTextLine1', v)} />
                <TextField label="Stat Line 2" value={data.statTextLine2} onChange={(v) => updateField('statTextLine2', v)} />
              </div>
            </div>

            <h3 className="text-xl font-bold border-b pb-2 mt-8">Quote Bubble</h3>
            <TextAreaField label="Quote Text" value={data.quoteText} onChange={(v) => updateField('quoteText', v)} />
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Author" value={data.quoteAuthor} onChange={(v) => updateField('quoteAuthor', v)} />
              <TextField label="Role" value={data.quoteRole} onChange={(v) => updateField('quoteRole', v)} />
            </div>

            <h3 className="text-xl font-bold border-b pb-2 mt-8">Features List</h3>
            {(data.features || []).map((feature: any, idx: number) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
                <TextField label={`Feature ${idx + 1} Title`} value={feature.title} onChange={(v) => updateField(`features.${idx}.title`, v)} />
                <TextAreaField label="Description" value={feature.description} onChange={(v) => updateField(`features.${idx}.description`, v)} />
              </div>
            ))}

            <h3 className="text-xl font-bold border-b pb-2 mt-8">Action Button</h3>
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Button Text" value={data.buttonText} onChange={(v) => updateField('buttonText', v)} />
              <TextField label="Button Link" value={data.buttonLink} onChange={(v) => updateField('buttonLink', v)} />
            </div>
          </div>
        );

      case 'sliding_gallery':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b pb-2">Gallery Images</h3>
            <p className="text-sm text-slate-500">Add or manage images in the sliding gallery below. Recommend at least 8 (800x600 size) to keep the slider smooth.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {(data.images || []).map((img: string, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-3 relative group">
                  <ImageUploadField label={`Image ${idx + 1}`} value={img} onChange={(v) => updateField(`images.${idx}`, v)} />
                  <button 
                    onClick={() => {
                      const newImgs = [...data.images];
                      newImgs.splice(idx, 1);
                      updateField('images', newImgs);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                    disabled={data.images.length <= 4}
                    title="Remove Image"
                  >
                    ×
                  </button>
                </div>
              ))}
              <div className="border border-dashed border-slate-300 rounded-xl p-3 flex items-center justify-center min-h-[140px] cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => updateField('images', [...data.images, ''])}>
                <span className="text-[#ff5e14] font-bold text-sm">+ Add Image</span>
              </div>
            </div>
          </div>
        );

      case 'our_services':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b pb-2">Main Content</h3>
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Subtitle" value={data.subtitle} onChange={(v) => updateField('subtitle', v)} />
              <TextField label="Title" value={data.title} onChange={(v) => updateField('title', v)} />
            </div>
            <TextAreaField label="Description" value={data.description} onChange={(v) => updateField('description', v)} />

            <h3 className="text-xl font-bold border-b pb-2 mt-8">Services Slider</h3>
            <div className="space-y-6">
              {(data.services || []).map((service: any, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-[#0d1033]">Service {idx + 1}</span>
                    <button 
                      onClick={() => {
                        const newSvcs = [...data.services];
                        newSvcs.splice(idx, 1);
                        updateField('services', newSvcs);
                      }}
                      className="text-red-500 hover:text-red-700 text-sm font-bold disabled:opacity-30"
                      disabled={data.services.length <= 1}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <TextField label="Service Title" value={service.title} onChange={(v) => updateField(`services.${idx}.title`, v)} />
                    <TextField label="Link" value={service.link} onChange={(v) => updateField(`services.${idx}.link`, v)} />
                  </div>
                  <TextAreaField label="Description" value={service.description} onChange={(v) => updateField(`services.${idx}.description`, v)} />
                  <div className="grid grid-cols-2 gap-4">
                    <ImageUploadField label="Card Image (Rec: 800x600)" value={service.image} onChange={(v) => updateField(`services.${idx}.image`, v)} />
                    <TextField label="FontAwesome Class (e.g. fa-solid fa-fire)" value={service.iconId} onChange={(v) => updateField(`services.${idx}.iconId`, v)} />
                  </div>
                </div>
              ))}
              <button 
                type="button"
                onClick={() => updateField('services', [...(data.services || []), { title: 'New Service', description: '', image: '', link: '/', iconId: 'boiler' }])}
                className="w-full bg-[#ff5e14]/10 hover:bg-[#ff5e14]/20 text-[#ff5e14] font-bold py-3 rounded-xl border border-[#ff5e14]/30 border-dashed transition-colors"
                title="Add Service"
              >
                + Add Service Card
              </button>
            </div>
          </div>
        );

      case 'location_contact':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b pb-2">Header Configuration</h3>
            <TextField label="Badge Text" value={data.badge} onChange={(v) => updateField('badge', v)} />
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Heading (Black Part)" value={data.headingPart1} onChange={(v) => updateField('headingPart1', v)} />
              <TextField label="Heading (Orange Part)" value={data.headingPart2} onChange={(v) => updateField('headingPart2', v)} />
            </div>
            <TextAreaField label="Description" value={data.description} onChange={(v) => updateField('description', v)} />

            <h3 className="text-xl font-bold border-b pb-2 mt-8">Google Map Embed</h3>
             <TextAreaField label="Google Map Embed Source (iframe src)" value={data.mapUrl} onChange={(v) => updateField('mapUrl', v)} />

             <h3 className="text-xl font-bold border-b pb-2 mt-8">Contact Info Card</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-3 bg-slate-50 p-4 border rounded-xl">
                 <TextField label="Phone Card Title" value={data.phoneTitle} onChange={(v) => updateField('phoneTitle', v)} />
                 <TextField label="Phone Display text" value={data.phoneDisplay} onChange={(v) => updateField('phoneDisplay', v)} />
                 <TextField label="Phone Link (tel:...)" value={data.phoneLink} onChange={(v) => updateField('phoneLink', v)} />
                 <TextField label="Phone Working Hours text" value={data.phoneSubtext} onChange={(v) => updateField('phoneSubtext', v)} />
               </div>
               <div className="space-y-3 bg-slate-50 p-4 border rounded-xl">
                 <TextField label="Email Card Title" value={data.emailTitle} onChange={(v) => updateField('emailTitle', v)} />
                 <TextField label="Email Address text" value={data.emailDisplay} onChange={(v) => updateField('emailDisplay', v)} />
               </div>
               <div className="space-y-3 bg-slate-50 p-4 border rounded-xl">
                 <TextField label="Address Card Title" value={data.addressTitle} onChange={(v) => updateField('addressTitle', v)} />
                 <TextField label="Address Line 1" value={data.addressLine1} onChange={(v) => updateField('addressLine1', v)} />
                 <TextField label="Address Line 2" value={data.addressLine2} onChange={(v) => updateField('addressLine2', v)} />
               </div>
               <div className="space-y-3 bg-slate-50 p-4 border rounded-xl">
                 <TextField label="Emergency Card Title" value={data.emergencyTitle} onChange={(v) => updateField('emergencyTitle', v)} />
                 <TextField label="Emergency Line 1" value={data.emergencyLine1} onChange={(v) => updateField('emergencyLine1', v)} />
                 <TextField label="Emergency Line 2" value={data.emergencyLine2} onChange={(v) => updateField('emergencyLine2', v)} />
               </div>
             </div>

            <h3 className="text-xl font-bold border-b pb-2 mt-8">Action Button</h3>
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Button Text" value={data.buttonText} onChange={(v) => updateField('buttonText', v)} />
              <TextField label="Button Link" value={data.buttonLink} onChange={(v) => updateField('buttonLink', v)} />
            </div>
          </div>
        );
      
      default: return null;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto relative pb-20">
      {toast && (
        <div className={`fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border text-sm font-semibold animate-[slideIn_0.3s_ease-out] ${toast.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">Component Blocks</h1>
          <p className="text-slate-500 mt-1.5">Manage imagery, text, and dynamic content on your pages.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving || loading}
          className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#ff5e14] to-[#e05010] hover:from-[#e05010] hover:to-[#cc4400] shadow-sm transition-all disabled:opacity-60 flex items-center gap-2 self-end"
        >
          {saving ? 'Saving...' : 'Save Selected Component'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto border-b border-slate-200 mb-8 pb-1">
        {COMPONENTS_MAP.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveTab(c.id)}
            className={`px-5 py-2.5 rounded-t-xl font-bold text-sm whitespace-nowrap transition-colors ${
              activeTab === c.id 
                ? 'bg-white border-x border-t border-slate-200 text-[#ff5e14] shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.02)]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Content Form */}
      <div className="bg-white rounded-b-2xl rounded-tr-2xl border border-slate-200 shadow-sm p-6 sm:p-8 min-h-[50vh] text-slate-900">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <svg className="w-8 h-8 text-[#ff5e14] animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          </div>
        ) : (
          renderActiveForm()
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


/* Sub-components for forms */

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="font-sans">
      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">{label}</label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#ff5e14]/20 focus:border-[#ff5e14] transition-all text-slate-900"
      />
    </div>
  );
}

function TextAreaField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="font-sans">
      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">{label}</label>
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#ff5e14]/20 focus:border-[#ff5e14] transition-all text-slate-900"
      />
    </div>
  );
}

function ImageUploadField({ label, value, onChange }: { label?: string; value: string; onChange: (v: string) => void }) {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <div className="font-sans">
      {label && <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">{label}</label>}
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Image URL"
            className="flex-1 min-w-0 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#ff5e14]/20 focus:border-[#ff5e14] transition-all text-slate-900 truncate"
          />
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="px-4 py-2 bg-[#ff5e14] hover:bg-[#e05010] text-white text-xs font-bold rounded-xl transition-colors shrink-0"
          >
            Media
          </button>
        </div>
        {value && (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 max-w-max">
            <img src={value} alt="Preview" className="h-12 w-auto object-contain rounded" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
        )}
      </div>
      <MediaPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={(url: string) => onChange(url)} />
    </div>
  );
}
