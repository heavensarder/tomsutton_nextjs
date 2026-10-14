'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSiteSettings } from '@/components/SiteSettingsProvider';
import { getActiveSocialLinks } from '@/lib/site-settings';
import { SocialLink } from '@/components/SocialIcon';

const Footer = () => {
    const s = useSiteSettings();
    const socialLinks = getActiveSocialLinks(s);
    return (
        <footer className="bg-[#191919] text-gray-400 pt-16 pb-6 border-t border-gray-800 font-sans" suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 3 Column Grid Based on Client Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    {/* Left Column: Contact Us */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-white font-bold text-lg">Contact Us</h3>

                        <a href="https://www.sl-energy.co.uk/" target="_blank" rel="noopener noreferrer" className="block w-[240px] hover:opacity-80 transition-opacity" suppressHydrationWarning>
                            <Image
                                src="/images/SLEnergy-logo.webp"
                                alt="SL Energy Heating, Plumbing & Renewables"
                                width={240}
                                height={80}
                                className="object-contain"
                                unoptimized
                                suppressHydrationWarning
                            />
                        </a>

                        <div className="space-y-4 text-[15px]">
                            <div>
                                <h4 className="text-white font-semibold mb-1">Name</h4>
                                <p className="leading-relaxed">Tom Sutton Heating</p>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-1">Address</h4>
                                <p className="leading-relaxed">{s?.footer_address || '19 Longleat Gardens, New Milton, Hampshire, BH25 5UZ'}</p>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-1">Phone Number</h4>
                                <a href={s?.footer_phone_1 ? `tel:${String(s.footer_phone_1).replace(/\\s+/g,'')}` : "tel:01590631671"} className="block hover:text-white transition-colors">
                                    {s?.footer_phone_1 || '01590 631671'}
                                </a>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-1">Email</h4>
                                <a href={`mailto:${s?.footer_email || 'info@tomsuttonheating.co.uk'}`} className="hover:text-white transition-colors">{s?.footer_email || 'info@tomsuttonheating.co.uk'}</a>
                            </div>
                        </div>

                        {/* Social Icons Array */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((item) => (
                                <SocialLink key={item.id} id={item.id} url={item.url} label={item.label} variant="footer" />
                            ))}
                            {s?.footer_email && (
                                <a href={`mailto:${s.footer_email}`} aria-label="Email" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M2 5.5l9.5 6.5 9.5-6.5v13h-19v-13zm19-2h-19l9.5 6.5 9.5-6.5z" /></svg>
                                </a>
                            )}
                            {s?.footer_google_maps_url && s.footer_google_maps_url !== '#' && (
                                <a href={s.footer_google_maps_url} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.97 0-9 4.03-9 9 0 5.25 9 15 9 15s9-9.75 9-15c0-4.97-4.03-9-9-9zm0 12.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" /></svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Center Column: Services */}
                    <div className="flex flex-col space-y-4 lg:space-y-6">
                        <h3 className="text-white font-bold text-lg">Services</h3>
                        <ul className="flex flex-col w-full text-[15px]">
                            {[
                                { name: 'New Boilers', path: '/new-boilers' },
                                { name: 'Boiler Installation', path: '/new-boiler-installation-2' },
                                { name: 'Boiler Breakdowns', path: '/boiler-breakdowns' },
                                { name: 'Boiler Servicing & Certificates', path: '/boiler-servicing' },
                                { name: 'Gas', path: '/gas' },
                                { name: 'Heating', path: '/heating' },
                                { name: 'LPG & Oil', path: '/oil' },
                                { name: 'Smart Thermostat Installation', path: '/smart-thermostat-installation' }
                            ].map((service, index) => (
                                <li key={index} className="border-b border-gray-800 last:border-b-0">
                                    <Link href={service.path} className="flex items-center group py-3 md:py-3.5 w-full hover:text-white transition-colors">
                                        <svg className="w-3 h-3 mr-3 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Recommended & Vetted */}
                    <div className="flex flex-col space-y-4 md:space-y-6">
                        <h3 className="text-white font-bold text-lg">Recommended &amp; Vetted</h3>

                        <div className="w-full relative py-2">
                            <Image
                                src={s?.footer_accreditations_image || '/images/Footer-Logos-Updated-1.webp'}
                                alt="Recommended & Vetted Accreditations: Alpha, Baxi, Gas Safe, Checkatrade"
                                width={300}
                                height={180}
                                className="object-contain"
                                unoptimized
                            />
                        </div>

                        <div className="space-y-1 text-[15px] pt-2 md:pt-4 text-gray-400">
                            <p>OFTEC Company Reg No: {s?.footer_oftec_company_reg || 'C103319'}</p>
                            <p>Technician Reg No: {s?.footer_oftec_tech_reg || '38391'}</p>
                            <p>VAT Number: {s?.footer_vat_number || '263 5356 96'}</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} {s?.footer_copyright || 'Tom Sutton Heating. All Rights Reserved.'}</p>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors underline md:no-underline">Privacy Policy</Link>
                    </div>
                    <p className="text-center md:text-left">
                        Developed by <a href="https://heavensarder.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-bold hover:text-white transition-colors">Web With Heaven</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
