export interface SitePage {
  path: string;
  name: string;
  category: string;
}

export const SITE_PAGES: SitePage[] = [
  // Main Pages
  { path: '/', name: 'Home', category: 'Main Pages' },
  { path: '/about', name: 'About Us', category: 'Main Pages' },
  { path: '/contact', name: 'Contact', category: 'Main Pages' },
  { path: '/blog', name: 'Blog', category: 'Main Pages' },
  { path: '/our-reviews', name: 'Our Reviews', category: 'Main Pages' },
  { path: '/energy-events', name: 'Energy Events', category: 'Main Pages' },

  // Core Services
  { path: '/new-boilers', name: 'New Boilers', category: 'Services' },
  { path: '/new-boiler-installation-2', name: 'New Boiler Installation', category: 'Services' },
  { path: '/combi-boiler-installation', name: 'Combi Boiler Installation', category: 'Services' },
  { path: '/boiler-breakdowns', name: 'Boiler Breakdowns', category: 'Services' },
  { path: '/boiler-servicing', name: 'Boiler Servicing & Certificates', category: 'Services' },
  { path: '/boiler-maintenance-plans', name: 'Boiler Maintenance Plans', category: 'Services' },
  { path: '/gas', name: 'Gas Services', category: 'Services' },
  { path: '/heating', name: 'Heating Services', category: 'Services' },
  { path: '/oil', name: 'LPG & Oil', category: 'Services' },
  { path: '/smart-thermostat-installation', name: 'Smart Thermostats', category: 'Services' },
  { path: '/renewable-technology', name: 'Renewable Technology', category: 'Services' },
  { path: '/unvented-hot-water', name: 'Unvented Hot Water', category: 'Services' },
  { path: '/online-boiler-quote', name: 'Online Boiler Quote', category: 'Services' },

  // Boiler Brands
  { path: '/lpg-boilers', name: 'LPG Boilers', category: 'Boiler Brands' },
  { path: '/oil-boilers', name: 'Oil Boilers', category: 'Boiler Brands' },

  // Worcester Bosch Range
  { path: '/worcester-bosch', name: 'Worcester Bosch', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-4000-combi', name: 'Worcester Bosch 4000 Combi', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-4000-system', name: 'Worcester Bosch 4000 System', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-8000-installation', name: 'Worcester Bosch 8000', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-cdi-compact', name: 'Worcester Bosch CDi Compact', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-greenstar-ri-installation', name: 'Worcester Bosch Greenstar Ri', category: 'Worcester Bosch' },

  // Service Areas
  { path: '/hampshire', name: 'Hampshire', category: 'Service Areas' },
  { path: '/bournemouth', name: 'Bournemouth', category: 'Service Areas' },
  { path: '/southbourne', name: 'Southbourne', category: 'Service Areas' },
  { path: '/christchurch', name: 'Christchurch', category: 'Service Areas' },
  { path: '/new-milton', name: 'New Milton', category: 'Service Areas' },
  { path: '/lymington', name: 'Lymington', category: 'Service Areas' },
  { path: '/brockenhurst', name: 'Brockenhurst', category: 'Service Areas' },
  { path: '/ringwood', name: 'Ringwood', category: 'Service Areas' },
  { path: '/southampton', name: 'Southampton', category: 'Service Areas' }
];

export const PAGE_CATEGORIES = [...new Set(SITE_PAGES.map(p => p.category))];
