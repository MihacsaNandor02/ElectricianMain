'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 sm:hidden animate-in slide-in-from-bottom duration-500">
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href={`tel:${BRAND.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white py-3.5 rounded-xl font-black text-[16px] shadow-lg active:scale-95 transition-transform"
        >
          <Phone size={20} fill="currentColor" />
          Suna
        </a>
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-whatsapp text-white py-3.5 rounded-xl font-black text-[16px] shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle size={20} fill="currentColor" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
