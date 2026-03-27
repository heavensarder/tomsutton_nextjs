// Site settings type definitions and constants — SAFE FOR CLIENT COMPONENTS
// No database imports here!

export interface SiteSettings {
  // Header
  header_logo_url: string;
  header_phone: string;
  header_phone_link: string;
  header_email: string;
  header_address: string;
  header_cta_text: string;
  header_cta_link: string;
  // Social
  social_twitter: string;
  social_facebook: string;
  social_instagram: string;
  social_youtube: string;
  social_linkedin: string;
  // Footer
  footer_logo_url: string;
  footer_logo_link: string;
  footer_phone_1: string;
  footer_phone_2: string;
  footer_email: string;
  footer_address: string;
  footer_copyright: string;
  footer_accreditations_image: string;
  footer_oftec_company_reg: string;
  footer_oftec_tech_reg: string;
  footer_vat_number: string;
  // Google Maps
  footer_google_maps_url: string;
}

// Default values matching the current hardcoded data
export const DEFAULT_SETTINGS: SiteSettings = {
  header_logo_url: 'https://i.postimg.cc/V65kTYN4/tom-sutton-logo.webp',
  header_phone: '01590 631671',
  header_phone_link: 'tel:01590631671',
  header_email: 'info@tomsuttonheating.co.uk',
  header_address: '19 Longleat Gardens, New Milton, BH25 5UZ',
  header_cta_text: 'GET A QUOTE',
  header_cta_link: '/online-boiler-quote',
  social_twitter: '#',
  social_facebook: '#',
  social_instagram: '#',
  social_youtube: '#',
  social_linkedin: '#',
  footer_logo_url: 'https://i.postimg.cc/MKPVK7HV/SLEnergy-logo.webp',
  footer_logo_link: 'https://www.sl-energy.co.uk/',
  footer_phone_1: '01590 631671',
  footer_phone_2: '07774 673109',
  footer_email: 'info@tomsuttonheating.co.uk',
  footer_address: '19 Longleat Gardens, New Milton, Hampshire, BH25 5UZ',
  footer_copyright: 'Tom Sutton Heating. All Rights Reserved.',
  footer_accreditations_image: 'https://i.postimg.cc/nr1K1NHx/Footer-Logos-Updated-1.webp',
  footer_oftec_company_reg: 'C103319',
  footer_oftec_tech_reg: '38391',
  footer_vat_number: '263 5356 96',
  footer_google_maps_url: 'https://www.google.com/maps?cid=8226595044909973442',
};

export const SETTINGS_LABELS: Record<string, { label: string; helpText?: string; group: string }> = {
  header_logo_url: { label: 'Header Logo URL', helpText: 'Recommended: 320×80px, transparent PNG or WebP. Also used on admin login & sidebar.', group: 'Header' },
  header_phone: { label: 'Phone Number (Display)', helpText: 'Shown in the top bar and after scroll.', group: 'Header' },
  header_phone_link: { label: 'Phone Link', helpText: 'tel: format, e.g. tel:01590631671', group: 'Header' },
  header_email: { label: 'Email Address', group: 'Header' },
  header_address: { label: 'Office Address', group: 'Header' },
  header_cta_text: { label: 'CTA Button Text', helpText: 'The main call-to-action button (e.g. GET A QUOTE)', group: 'Header' },
  header_cta_link: { label: 'CTA Button Link', helpText: 'Page URL for the button', group: 'Header' },
  social_twitter: { label: 'Twitter / X URL', group: 'Social Media' },
  social_facebook: { label: 'Facebook URL', group: 'Social Media' },
  social_instagram: { label: 'Instagram URL', group: 'Social Media' },
  social_youtube: { label: 'YouTube URL', group: 'Social Media' },
  social_linkedin: { label: 'LinkedIn URL', group: 'Social Media' },
  footer_logo_url: { label: 'Footer Logo URL', helpText: 'Recommended: 240×80px. The partner/brand logo shown at the top of the footer.', group: 'Footer' },
  footer_logo_link: { label: 'Footer Logo Link', helpText: 'Where the footer logo links to', group: 'Footer' },
  footer_phone_1: { label: 'Footer Phone 1', group: 'Footer' },
  footer_phone_2: { label: 'Footer Phone 2', helpText: 'Mobile/secondary number', group: 'Footer' },
  footer_email: { label: 'Footer Email', group: 'Footer' },
  footer_address: { label: 'Footer Address', helpText: 'Full address with comma separators', group: 'Footer' },
  footer_copyright: { label: 'Copyright Text', helpText: 'Year is auto-prepended with ©', group: 'Footer' },
  footer_accreditations_image: { label: 'Accreditations Image', helpText: 'Recommended: 300×180px. Gas Safe, OFTEC, Checkatrade logos composite.', group: 'Footer' },
  footer_oftec_company_reg: { label: 'OFTEC Company Reg No', group: 'Footer' },
  footer_oftec_tech_reg: { label: 'OFTEC Technician Reg No', group: 'Footer' },
  footer_vat_number: { label: 'VAT Number', group: 'Footer' },
  footer_google_maps_url: { label: 'Google Maps URL', helpText: 'Link for the map pin icon in footer social section', group: 'Footer' },
};
