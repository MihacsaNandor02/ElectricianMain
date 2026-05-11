'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, Clock, MessageCircle } from 'lucide-react';
import { BRAND, SERVICES } from '@/lib/constants';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="w-full z-50 sticky top-0 bg-white shadow-sm">
        {/* High Impact Header Strip */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4 relative z-50 bg-white">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark">
              GH <span className="font-light tracking-widest text-brand-blue">ELECTRIC</span>
            </span>
          </Link>

          {/* Desktop Info & CTAs */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Clock size={18} className="text-brand-blue" />
              <span>Răspundem în <span className="text-brand-dark font-bold">{BRAND.responseTime}</span></span>
            </div>

            <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-2 text-lg font-bold text-brand-dark hover:text-brand-blue transition-colors">
              <Phone size={20} className="text-brand-yellow" />
              {BRAND.phone}
            </a>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="relative overflow-hidden bg-[#22c55e] px-6 py-2.5 text-sm text-white font-bold rounded-full hover:scale-105 transition-all shadow-md group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4ade80_0%,_transparent_70%)] opacity-0 group-hover:opacity-40 transition-opacity" />
                <span className="relative z-10">Programare rapidă</span>
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle size={24} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3 relative z-[9999]">
            <a href={`tel:${BRAND.phoneRaw}`} className="p-2 text-brand-blue">
              <Phone size={24} className="pointer-events-none" />
            </a>
            <label
              htmlFor="mobile-menu-toggle"
              className="p-2 text-brand-dark cursor-pointer touch-manipulation"
            >
              <Menu size={28} className="pointer-events-none" />
            </label>
          </div>
        </div>

        {/* Desktop Navigation Sub-bar */}
        <div className="hidden lg:block border-t border-slate-100 bg-brand-gray/30">
          <div className="container mx-auto px-4 flex justify-center items-center">
            <nav className="flex items-center gap-10 py-3">
              <Link href="/" className="text-[14px] font-bold text-brand-dark hover:text-brand-blue transition-colors">Acasă</Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[14px] font-bold text-brand-dark hover:text-brand-blue transition-colors cursor-pointer">
                  Servicii <ChevronDown size={14} />
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-slate-200 shadow-xl transition-all duration-200 z-[60] ${activeDropdown === 'services' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                    }`}
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-6 py-3 text-[14px] font-medium text-brand-dark hover:bg-brand-gray hover:text-brand-blue transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="text-[14px] font-bold text-brand-dark hover:text-brand-blue transition-colors">Despre noi</Link>
              <Link href="/contact" className="text-[14px] font-bold text-brand-dark hover:text-brand-blue transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Pure CSS Mobile Menu Checkbox */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Mobile Menu Overlay */}
      <div className="fixed inset-0 z-[100] bg-white hidden peer-checked:flex flex-col lg:hidden animate-in fade-in duration-200">
        {/* Mobile Menu Header */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-slate-100 shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark">
              GH <span className="font-light tracking-widest text-brand-blue">ELECTRIC</span>
            </span>
          </Link>
          <label 
            htmlFor="mobile-menu-toggle"
            className="p-2 text-brand-dark bg-slate-50 rounded-full hover:bg-slate-100 cursor-pointer"
          >
            <X size={28} />
          </label>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-6 space-y-8 bg-white overflow-y-auto flex-1 pb-32">
          <div className="flex flex-col gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3 text-slate-600">
              <Clock size={20} className="text-brand-blue" />
              <span>Răspundem în <span className="font-bold">{BRAND.responseTime}</span></span>
            </div>
            <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-3 text-xl font-bold text-brand-dark">
              <Phone size={24} className="text-brand-yellow" />
              {BRAND.phone}
            </a>
            <div className="flex gap-4">
              <label htmlFor="mobile-menu-toggle" className="flex-1 cursor-pointer">
                <Link
                  href="/contact"
                  className="block text-center bg-[#22c55e] py-3 text-white font-bold rounded-lg shadow-md w-full"
                >
                  Programare rapidă
                </Link>
              </label>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#25D366] text-white shadow-md"
              >
                <MessageCircle size={28} fill="currentColor" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <label htmlFor="mobile-menu-toggle" className="block cursor-pointer">
              <Link href="/" className="block text-lg font-bold text-brand-dark">Acasă</Link>
            </label>
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Servicii</div>
              <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-brand-yellow">
                {SERVICES.map((service) => (
                  <label htmlFor="mobile-menu-toggle" key={service.slug} className="block cursor-pointer">
                    <Link
                      href={`/services/${service.slug}`}
                      className="block text-brand-dark font-medium"
                    >
                      {service.title}
                    </Link>
                  </label>
                ))}
              </div>
            </div>
            <label htmlFor="mobile-menu-toggle" className="block cursor-pointer">
              <Link href="/about" className="block text-lg font-bold text-brand-dark">Despre noi</Link>
            </label>
            <label htmlFor="mobile-menu-toggle" className="block cursor-pointer">
              <Link href="/contact" className="block text-lg font-bold text-brand-dark">Contact</Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
