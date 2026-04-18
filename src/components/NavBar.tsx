'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSiteSettings } from '@/components/SiteSettingsProvider';

const NavBar = () => {
    const s = useSiteSettings();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const isHome = pathname === '/';
    const isReviews = pathname === '/our-reviews';
    const isInstall = ['/new-boiler', '/our-boiler-brands', '/alpha', '/worcester', '/online-boiler', '/combi-', '/lpg-boilers', '/oil-boilers', '/unvented'].some(p => pathname.includes(p));
    const isBreakdowns = pathname === '/boiler-breakdowns';
    const isServicing = pathname.includes('servic') || pathname.includes('maintenance');
    const isServiceArea = ['/hampshire', '/bournemouth', '/southbourne', '/christchurch', '/new-milton', '/lymington', '/brockenhurst', '/ringwood', '/southampton'].some(p => pathname.includes(p));
    const isRenewables = pathname === '/renewable-technology';
    const isContact = pathname === '/contact';
    const isMore = ['/about', '/blog', '/gas', '/heating', '/oil', '/nest-thermostat', '/book-services', '/our-reviews', '/energy-events'].some(p => pathname.includes(p));

    const toggleMobileDropdown = (menu: string) => {
        setOpenMobileDropdown(prev => prev === menu ? null : menu);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Contact Bar (Hides on Scroll or Mobile) */}
            <div suppressHydrationWarning className={`hidden lg:block w-full bg-slate-50 border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
                {/* Full-width container with generous padding */}
                <div suppressHydrationWarning className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-2 flex justify-between items-center text-xs md:text-sm text-gray-500">
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                        <div className="flex items-center text-gray-600 hover:text-orange-500 transition-colors cursor-pointer font-medium tracking-wide">
                            <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {s?.header_address || '19 Longleat Gardens, New Milton, BH25 5UZ'}
                        </div>
                        <a href={s?.header_phone_link || 'tel:01590631671'} className="flex items-center text-gray-600 hover:text-orange-500 transition-colors cursor-pointer font-semibold tracking-wide">
                            <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            {s?.header_phone || '01590 631671'}
                        </a>
                        <div className="flex items-center text-gray-600 hover:text-orange-500 transition-colors cursor-pointer font-medium tracking-wide">
                            <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            {s?.header_email || 'info@tomsuttonheating.co.uk'}
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center space-x-3">
                        <span className="mr-3 border-r border-gray-300 pr-5 tracking-wider font-semibold text-gray-400">Visit Our Social Pages:</span>
                        <Link href={s?.social_twitter || '#'} className="w-8 h-8 bg-white border border-gray-200 text-blue-900 rounded-full flex items-center justify-center hover:bg-twitter-blue hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                            <svg className="w-3.5 h-3.5 fill-current group-hover:text-blue-400" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </Link>
                        <Link href={s?.social_facebook || '#'} className="w-8 h-8 bg-white border border-gray-200 text-blue-900 rounded-full flex items-center justify-center hover:bg-facebook-blue hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                            <svg className="w-3.5 h-3.5 fill-current group-hover:text-blue-600" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        </Link>
                        <Link href={s?.social_youtube || '#'} className="w-8 h-8 bg-white border border-gray-200 text-blue-900 rounded-full flex items-center justify-center hover:bg-youtube-red hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                            <svg className="w-3.5 h-3.5 fill-current group-hover:text-red-500" viewBox="0 0 24 24"><path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.999 15.5v-7l6.5 3.5-6.5 3.5z" /></svg>
                        </Link>
                        <Link href={s?.social_linkedin || '#'} className="w-8 h-8 bg-white border border-gray-200 text-blue-900 rounded-full flex items-center justify-center hover:bg-linkedin-blue hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                            <svg className="w-3.5 h-3.5 fill-current group-hover:text-blue-500" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Sticky Navigation */}
            <nav className={`w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 shadow-lg py-1 border-b border-gray-50' : 'relative border-b py-3'}`}>
                <div className="w-full xl:px-24 lg:px-12 md:px-8 px-4">
                    <div className="flex justify-between items-center h-full">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center xl:mr-10 lg:mr-4 z-20">
                            <Link href="/" className="hover:opacity-90 transition-opacity">
                                <Image
                                    src={s?.header_logo_url || 'https://i.postimg.cc/V65kTYN4/tom-sutton-logo.webp'}
                                    alt="Tom Sutton Heating"
                                    width={320}
                                    height={80}
                                    className={`object-contain transition-all duration-300 ${isScrolled ? 'w-[220px] sm:w-[240px] lg:w-[260px]' : 'w-[250px] sm:w-[280px] lg:w-[320px]'}`}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex space-x-2 xl:space-x-4 items-center h-full flex-1 justify-center relative">

                            <Link href="/" className={`group relative px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold  transition-colors whitespace-nowrap ${isHome ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                Home
                                <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isHome ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            {/* Complex Dropdown: Boiler Installation (Top Level) -> Our Brands (2nd Level) -> Brands (3rd Level) */}
                            <div className="group/nav relative h-full flex items-center">
                                <Link href="/new-boiler-installation-2" className={`group px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold  transition-colors flex items-center cursor-pointer whitespace-nowrap ${isInstall ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                    Boiler Installation
                                    <svg className={`w-4 h-4 ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-300 ${isInstall ? 'text-orange-500 rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isInstall ? 'w-full' : 'w-0 group-hover/nav:w-full'}`}></span>
                                </Link>

                                {/* 1st Level Dropdown */}
                                <div className="absolute left-0 top-[100%] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 translate-y-2 transition-all duration-300 w-72 bg-white border-t-4 border-orange-500 shadow-2xl z-50 py-2 rounded-b-lg">
                                    <Link href="/new-boiler-installation-2" className="block px-6 py-3.5 text-sm font-semibold text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition-colors border-b border-gray-50">Boiler Installation</Link>
                                    <Link href="/new-boilers" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">New Boilers</Link>

                                    {/* 2nd Level Dropdown (Slide Right) */}
                                    <div className="relative group/sub">
                                        <Link href="/our-boiler-brands" className="flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">
                                            Our Boiler Brands
                                            <svg className="w-4 h-4 ml-2 text-gray-400 group-hover/sub:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                        {/* 3rd Level Dropdown Box */}
                                        <div className="absolute left-[95%] top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-2 transition-all duration-300 w-64 bg-white border-t-4 border-blue-900 shadow-2xl z-50 py-2 rounded-b-lg rounded-tr-lg">
                                            {/* Worcester Bosch sub-sub menu */}
                                            <div className="relative group/sub3">
                                                <Link href="/worcester-bosch" className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">
                                                    Worcester Bosch
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </Link>
                                                {/* 4th Level */}
                                                <div className="absolute left-[95%] top-0 opacity-0 invisible group-hover/sub3:opacity-100 group-hover/sub3:visible group-hover/sub3:translate-x-2 transition-all duration-300 w-max min-w-[14rem] bg-white border-l-4 border-orange-500 shadow-2xl py-2 rounded-r-lg rounded-bl-lg">
                                                    <Link href="/worcester-bosch-8000-installation" className="block px-5 py-2.5 text-[13px] font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 whitespace-nowrap">Worcester Bosch 8000</Link>
                                                    <Link href="/worcester-bosch-4000-combi" className="block px-5 py-2.5 text-[13px] font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 whitespace-nowrap">Worcester Bosch 4000 Combi</Link>
                                                    <Link href="/worcester-bosch-cdi-compact" className="block px-5 py-2.5 text-[13px] font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 whitespace-nowrap">Worcester Bosch CDi Compact</Link>
                                                    <Link href="/worcester-bosch-4000-system" className="block px-5 py-2.5 text-[13px] font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 whitespace-nowrap">Worcester Bosch 4000 System</Link>
                                                    <Link href="/worcester-bosch-greenstar-ri-installation" className="block px-5 py-2.5 text-[13px] font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 whitespace-nowrap">Worcester Bosch Greenstar Ri</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/online-boiler-quote" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors border-t border-gray-100">Online Boiler Quote</Link>

                                    <Link href="/lpg-boilers" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">LPG Boilers</Link>
                                    <Link href="/oil-boilers" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Oil Boilers</Link>
                                    <Link href="/combi-boiler-installation" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Combi Boiler</Link>
                                </div>
                            </div>

                            <Link href="/boiler-breakdowns" className={`group relative px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold  transition-colors whitespace-nowrap ${isBreakdowns ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                Boiler Breakdowns
                                <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isBreakdowns ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            <div className="group/nav relative h-full flex items-center">
                                <Link href="/boiler-servicing" className={`group px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold  transition-colors flex items-center cursor-pointer whitespace-nowrap ${isServicing ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                    Servicing
                                    <svg className={`w-4 h-4 ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-300 ${isServicing ? 'text-orange-500 rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isServicing ? 'w-full' : 'w-0 group-hover/nav:w-full'}`}></span>
                                </Link>
                                <div className="absolute left-0 top-full opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 translate-y-2 transition-all duration-300 w-72 bg-white border-t-4 border-orange-500 shadow-2xl z-50 py-2 rounded-b-lg">
                                    <Link href="/boiler-servicing" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/boiler-servicing' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Boiler Servicing & Care Plans</Link>
                                    <Link href="/boiler-maintenance-plans" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Boiler Care Plans</Link>
                                    <Link href="/oil" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors border-t border-gray-100">LPG & Oil Checks</Link>
                                </div>
                            </div>

                            {/* Service Area Dropdown */}
                            <div className="group/nav relative h-full flex items-center">
                                <div className={`group px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold transition-colors flex items-center cursor-pointer whitespace-nowrap ${isServiceArea ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                    Service Areas
                                    <svg className={`w-4 h-4 ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-300 ${isServiceArea ? 'text-orange-500 rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isServiceArea ? 'w-full' : 'w-0 group-hover/nav:w-full'}`}></span>
                                </div>
                                <div className="absolute left-0 top-full opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 translate-y-2 transition-all duration-300 w-72 bg-white border-t-4 border-orange-500 shadow-2xl z-50 py-2 rounded-b-lg">
                                    <Link href="/hampshire" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/hampshire' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Hampshire</Link>
                                    <Link href="/bournemouth" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/bournemouth' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Bournemouth</Link>
                                    <Link href="/southbourne" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/southbourne' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Southbourne</Link>
                                    <Link href="/christchurch" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/christchurch' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Christchurch</Link>
                                    <Link href="/new-milton" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/new-milton' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>New Milton</Link>
                                    <Link href="/lymington" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/lymington' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Lymington</Link>
                                    <Link href="/brockenhurst" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/brockenhurst' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Brockenhurst</Link>
                                    <Link href="/ringwood" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/ringwood' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Ringwood</Link>
                                    <Link href="/southampton" className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${pathname === '/southampton' ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Southampton</Link>
                                </div>
                            </div>

                            <Link href="/renewable-technology" className={`group relative px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold  transition-colors whitespace-nowrap ${isRenewables ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                Renewables
                                <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isRenewables ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                            <Link href="/contact" className={`group relative px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold  transition-colors whitespace-nowrap ${isContact ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                Contact
                                <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isContact ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>

                            <div className="group/nav relative h-full flex items-center">
                                <div className={`group px-2 xl:px-3 py-6 text-[14px] xl:text-[15px] font-semibold  transition-colors flex items-center cursor-pointer whitespace-nowrap ${isMore ? 'text-orange-500' : 'text-slate-800 hover:text-orange-500'}`}>
                                    More
                                    <svg className={`w-4 h-4 ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-300 ${isMore ? 'text-orange-500 rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    <span className={`absolute bottom-[20px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isMore ? 'w-full' : 'w-0 group-hover/nav:w-full'}`}></span>
                                </div>
                                <div className="absolute right-0 top-full opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 translate-y-2 transition-all duration-300 w-72 bg-white border-t-4 border-orange-500 shadow-2xl z-50 py-2 rounded-b-lg">
                                    <a href="https://book.servicem8.com/request_service_online_booking?strVendorUUID=b00bca15-4f6a-44c6-8974-1b55a86bb7cb" target="_blank" rel="noopener noreferrer" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Book Services Online</a>
                                    <Link href="/our-reviews" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Reviews</Link>
                                    <Link href="/energy-events" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Energy Events</Link>
                                    <Link href="/unvented-hot-water" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Unvented Cylinders</Link>
                                    <Link href="/gas" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Gas</Link>
                                    <Link href="/heating" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Heating</Link>
                                    <Link href="/smart-thermostat-installation" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">Smart Thermostat</Link>
                                    <Link href="/blog" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors border-t border-gray-100">Tips, how to & blogs</Link>
                                    <Link href="/about" className="block px-6 py-3.5 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors">About Us</Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Action Block - Scroll Toggle */}
                        <div className="hidden lg:flex items-center ml-0 xl:ml-6 pl-4 xl:pl-6 space-x-3 xl:space-x-4">

                            {/* Before Scroll: GET A QUOTE Button */}
                            {!isScrolled && (
                                <Link href={s?.header_cta_link || '/online-boiler-quote'} className="bg-[#ff5e14] hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-widest shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                                    {s?.header_cta_text || 'GET A QUOTE'}
                                </Link>
                            )}

                            {/* After Scroll: Contact Block */}
                            {isScrolled && (
                                <div className="flex items-center cursor-pointer group animate-fade-in flex-shrink-0">
                                    <div className="w-12 h-12 xl:w-14 xl:h-14 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center mr-3 xl:mr-4 flex-shrink-0 relative group-hover:bg-orange-500 transition-colors shadow-lg shadow-blue-900/20">
                                        <svg className="w-5 h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="whitespace-nowrap">
                                        <p className="text-[12px] xl:text-[13px] text-gray-500 font-semibold tracking-wide">Call Us Anytime</p>
                                        <p className="text-[17px] xl:text-[19px] font-extrabold text-[#1e3a8a] group-hover:text-orange-500 transition-colors tracking-tight">{s?.header_phone || '01590 631671'}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className="bg-blue-50 hover:bg-blue-100 text-blue-900 p-2.5 rounded-lg focus:outline-none transition-colors border border-blue-100 shadow-sm"
                            >
                                <svg className={`h-6 w-6 ${isMobileOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                <svg className={`h-6 w-6 ${isMobileOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isMobileOpen && (
                    <div className="lg:hidden bg-white shadow-2xl border-t-2 border-[#ff5e14] w-full absolute left-0 top-full max-h-[85vh] overflow-y-auto z-50">
                        <div className="flex flex-col select-none">
                            <Link href="/" onClick={() => setIsMobileOpen(false)} className={`px-6 py-4 text-[15px] font-semibold border-b border-gray-100 transition-colors  ${pathname === '/' ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}>
                                Home
                            </Link>

                            {/* BOILER INSTALLATION Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleMobileDropdown('install')}
                                    className={`w-full flex justify-between items-center px-6 py-4 text-[15px] font-semibold transition-colors  ${isInstall ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}
                                >
                                    Boiler Installation
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'install' || isInstall ? 'rotate-180 text-[#ff5e14]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'install' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-slate-50 px-6 py-2 pb-4 shadow-inner">
                                        <div className="border-l-2 border-orange-200 ml-2 pl-4 space-y-1">
                                            <Link href="/new-boiler-installation-2" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-800 border-b border-gray-200/50 hover:text-[#ff5e14]">Boiler Installation</Link>
                                            <Link href="/new-boilers" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">New Boilers</Link>
                                            <Link href="/our-boiler-brands" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Our Boiler Brands</Link>
                                            <div className="border-l border-gray-200">
                                                <Link href="/worcester-bosch" onClick={() => setIsMobileOpen(false)} className="block py-2 text-[13px] font-bold text-slate-600 pl-4 hover:text-[#ff5e14]">- Worcester Bosch</Link>
                                                <div className="pl-6 ml-2 space-y-1 mb-2">
                                                    <Link href="/worcester-bosch-8000-installation" onClick={() => setIsMobileOpen(false)} className="block py-1.5 text-[12px] font-medium text-slate-500 hover:text-[#ff5e14] border-l border-gray-200 pl-3">Worcester Bosch 8000</Link>
                                                    <Link href="/worcester-bosch-4000-combi" onClick={() => setIsMobileOpen(false)} className="block py-1.5 text-[12px] font-medium text-slate-500 hover:text-[#ff5e14] border-l border-gray-200 pl-3">Worcester Bosch 4000 Combi</Link>
                                                    <Link href="/worcester-bosch-cdi-compact" onClick={() => setIsMobileOpen(false)} className="block py-1.5 text-[12px] font-medium text-slate-500 hover:text-[#ff5e14] border-l border-gray-200 pl-3">Worcester CDi Compact</Link>
                                                    <Link href="/worcester-bosch-4000-system" onClick={() => setIsMobileOpen(false)} className="block py-1.5 text-[12px] font-medium text-slate-500 hover:text-[#ff5e14] border-l border-gray-200 pl-3">Worcester 4000 System</Link>
                                                    <Link href="/worcester-bosch-greenstar-ri-installation" onClick={() => setIsMobileOpen(false)} className="block py-1.5 text-[12px] font-medium text-slate-500 hover:text-[#ff5e14] border-l border-gray-200 pl-3">Worcester Greenstar Ri</Link>
                                                </div>
                                            </div>
                                            <Link href="/online-boiler-quote" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-[#ff5e14] hover:text-orange-700 mt-2">Online Boiler Quote &rarr;</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/boiler-breakdowns" onClick={() => setIsMobileOpen(false)} className={`px-6 py-4 text-[15px] font-semibold border-b border-gray-100 transition-colors  ${isBreakdowns ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}>
                                Boiler Breakdowns
                            </Link>

                            {/* SERVICING Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleMobileDropdown('service')}
                                    className={`w-full flex justify-between items-center px-6 py-4 text-[15px] font-semibold transition-colors  ${isServicing ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}
                                >
                                    Servicing
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'service' || isServicing ? 'rotate-180 text-[#ff5e14]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'service' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-slate-50 px-6 py-2 pb-4 shadow-inner">
                                        <div className="border-l-2 border-orange-200 ml-2 pl-4">
                                            <Link href="/boiler-servicing" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/boiler-servicing' ? 'text-[#ff5e14]' : 'text-slate-800 hover:text-[#ff5e14]'}`}>Boiler Servicing & Care Plans</Link>
                                            <Link href="/boiler-servicing" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Boiler Servicing</Link>
                                            <Link href="/boiler-maintenance-plans" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Boiler Care Plans</Link>
                                            <Link href="/oil" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 hover:text-[#ff5e14]">LPG & Oil Checks</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SERVICE AREA Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleMobileDropdown('serviceArea')}
                                    className={`w-full flex justify-between items-center px-6 py-4 text-[15px] font-semibold transition-colors  ${isServiceArea ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}
                                >
                                    Service Area
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'serviceArea' || isServiceArea ? 'rotate-180 text-[#ff5e14]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'serviceArea' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-slate-50 px-6 py-2 pb-4 shadow-inner">
                                        <div className="border-l-2 border-orange-200 ml-2 pl-4">
                                            <Link href="/hampshire" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/hampshire' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Hampshire</Link>
                                            <Link href="/bournemouth" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/bournemouth' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Bournemouth</Link>
                                            <Link href="/southbourne" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/southbourne' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Southbourne</Link>
                                            <Link href="/christchurch" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/christchurch' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Christchurch</Link>
                                            <Link href="/new-milton" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/new-milton' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>New Milton</Link>
                                            <Link href="/lymington" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/lymington' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Lymington</Link>
                                            <Link href="/brockenhurst" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/brockenhurst' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Brockenhurst</Link>
                                            <Link href="/ringwood" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold border-b border-gray-200/50 ${pathname === '/ringwood' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Ringwood</Link>
                                            <Link href="/southampton" onClick={() => setIsMobileOpen(false)} className={`block py-2.5 text-[14px] font-semibold ${pathname === '/southampton' ? 'text-[#ff5e14]' : 'text-slate-600 hover:text-[#ff5e14]'}`}>Southampton</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/renewable-technology" onClick={() => setIsMobileOpen(false)} className={`px-6 py-4 text-[15px] font-semibold border-b border-gray-100 transition-colors  ${isRenewables ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}>
                                Renewables
                            </Link>

                            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className={`px-6 py-4 text-[15px] font-semibold border-b border-gray-100 transition-colors  ${isContact ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}>
                                Contact
                            </Link>

                            {/* MORE Dropdown */}
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleMobileDropdown('more')}
                                    className={`w-full flex justify-between items-center px-6 py-4 text-[15px] font-semibold transition-colors  ${isMore ? 'text-[#ff5e14] bg-orange-50' : 'text-slate-800 hover:text-[#ff5e14] hover:bg-orange-50'}`}
                                >
                                    More...
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === 'more' || isMore ? 'rotate-180 text-[#ff5e14]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === 'more' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-slate-50 px-6 py-2 pb-4 shadow-inner">
                                        <div className="border-l-2 border-orange-200 ml-2 pl-4 space-y-1">
                                            <a href="https://book.servicem8.com/request_service_online_booking?strVendorUUID=b00bca15-4f6a-44c6-8974-1b55a86bb7cb" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Book Services Online</a>
                                            <Link href="/our-reviews" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Reviews</Link>
                                            <Link href="/energy-events" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Energy Events</Link>
                                            <Link href="/gas" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Gas</Link>
                                            <Link href="/heating" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Heating</Link>
                                            <Link href="/smart-thermostat-installation" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Smart Thermostat</Link>
                                            <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 border-b border-gray-200/50 hover:text-[#ff5e14]">Tips, how to & blogs</Link>
                                            <Link href="/about" onClick={() => setIsMobileOpen(false)} className="block py-2.5 text-[14px] font-semibold text-slate-600 hover:text-[#ff5e14]">About Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 flex flex-col items-center gap-6 border-t border-gray-100 mt-2">
                                <Link onClick={() => setIsMobileOpen(false)} href="/online-boiler-quote" className="bg-[#ff5e14] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-[15px] tracking-widest shadow-lg shadow-orange-500/30 w-full text-center">
                                    GET A QUOTE
                                </Link>

                                {/* Mobile Social Icons */}
                                <div className="flex space-x-4 items-center justify-center w-full">
                                    <Link href="#" className="w-10 h-10 bg-white border border-gray-200 shadow-sm text-[#1e3a8a] rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white hover:border-transparent transition-all duration-300">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                    </Link>
                                    <Link href="#" className="w-10 h-10 bg-white border border-gray-200 shadow-sm text-[#1e3a8a] rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all duration-300">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                    </Link>
                                    <Link href="#" className="w-10 h-10 bg-white border border-gray-200 shadow-sm text-[#1e3a8a] rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:text-white hover:border-transparent transition-all duration-300">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.999 15.5v-7l6.5 3.5-6.5 3.5z" /></svg>
                                    </Link>
                                    <Link href="#" className="w-10 h-10 bg-white border border-gray-200 shadow-sm text-[#1e3a8a] rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-transparent transition-all duration-300">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default NavBar;
