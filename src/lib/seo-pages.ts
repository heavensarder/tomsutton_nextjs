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
  { path: '/nest-thermostat-installation', name: 'Nest Thermostat Installation', category: 'Services' },
  { path: '/unvented-hot-water', name: 'Unvented Hot Water', category: 'Services' },
  { path: '/online-boiler-quote', name: 'Online Boiler Quote', category: 'Services' },

  // Boiler Brands
  { path: '/our-boiler-brands', name: 'Our Boiler Brands', category: 'Boiler Brands' },
  { path: '/lpg-boilers', name: 'LPG Boilers', category: 'Boiler Brands' },
  { path: '/oil-boilers', name: 'Oil Boilers', category: 'Boiler Brands' },

  // Alpha Range
  { path: '/alpha', name: 'Alpha Boilers', category: 'Alpha Range' },
  { path: '/alpha-e-tec-plus', name: 'Alpha E-Tec Plus', category: 'Alpha Range' },
  { path: '/alpha-e-tec-regular', name: 'Alpha E-Tec Regular', category: 'Alpha Range' },
  { path: '/alpha-e-tec-system', name: 'Alpha E-Tec System', category: 'Alpha Range' },
  { path: '/alpha-evoke', name: 'Alpha Evoke', category: 'Alpha Range' },

  // Worcester Bosch Range
  { path: '/worcester-bosch', name: 'Worcester Bosch', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-4000-combi', name: 'Worcester Bosch 4000 Combi', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-4000-system', name: 'Worcester Bosch 4000 System', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-8000-installation', name: 'Worcester Bosch 8000', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-cdi-compact', name: 'Worcester Bosch CDi Compact', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-greenstar-ri-installation', name: 'Worcester Bosch Greenstar Ri', category: 'Worcester Bosch' },
  { path: '/worcester-bosch-i-system', name: 'Worcester Bosch i-System', category: 'Worcester Bosch' },
];

export const PAGE_CATEGORIES = [...new Set(SITE_PAGES.map(p => p.category))];
