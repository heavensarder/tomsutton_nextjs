'use client';

import React, { createContext, useContext } from 'react';
import type { SiteSettings } from '@/lib/site-settings';

const SiteSettingsContext = createContext<SiteSettings | null>(null);

export function SiteSettingsProvider({ settings, children }: { settings: SiteSettings; children: React.ReactNode }) {
  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings(): SiteSettings | null {
  return useContext(SiteSettingsContext);
}
