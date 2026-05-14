'use client';

import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react';
import { BRAND, SERVICE_AREAS } from '@/lib/constants';

export default function ServiceArea() {
  return (
    <section className="py-12 bg-brand-gray/30 lg:mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Map/Info */}
            <div className="relative p-8 sm:p-12 bg-brand-blue text-white overflow-hidden flex flex-col justify-center">
              {/* Background Image with Blue Tint */}
              <div
                className="absolute inset-0 bg-[url('/images/services/urgente-electrice.jpg')] bg-cover bg-center opacity-90 mix-blend-overlay"
              />
              {/* Dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue/80 to-transparent"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
                  <Navigation size={16} /> Arie de acoperire
                </div>
                <h2 className="text-[32px] sm:text-[40px] font-bold leading-tight mb-6">
                  Ajung rapid la tine în tot județul Mureș!
                </h2>
                <p className="text-white/90 text-lg mb-8 font-medium">
                  Indiferent de locație, sunt pregătit să intervin rapid pentru orice urgență electrică.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow-lg">
                    <div className="text-brand-yellow font-black text-3xl">30'</div>
                    <div className="text-sm font-bold leading-tight">
                      Timp mediu <br /> de deplasare
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow-lg">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-black text-brand-dark border-2 border-brand-blue shadow-sm">G</div>
                    </div>
                    <div className="text-sm font-bold leading-tight">
                      Electrician <br /> pregătit
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="flex flex-1 items-center justify-center gap-2 bg-brand-yellow text-white px-6 py-4 rounded-lg font-bold text-[16px] shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all"
                  >
                    <Phone size={20} fill="currentColor" /> {BRAND.phone}
                  </a>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 bg-brand-whatsapp text-white px-6 py-4 rounded-lg font-bold text-[16px] shadow-lg hover:bg-[#1ebd5a] hover:-translate-y-1 transition-all"
                  >
                    <MessageCircle size={22} fill="currentColor" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: City List & Map */}
            <div className="p-8 sm:p-12 flex flex-col h-full">
              <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                <MapPin className="text-brand-blue" /> Localități principale:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-y-3 gap-x-4 mb-8 flex-shrink-0">
                {SERVICE_AREAS.slice(0, 10).map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700 font-medium text-[13px] sm:text-[15px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0"></div>
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>

              {/* Map Embed with Simulated Radius */}
              <div className="flex-grow w-full min-h-[220px] rounded-lg overflow-hidden shadow-inner border border-slate-200 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88235.15545224355!2d24.47167683115467!3d46.544186595568165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb7c4e5ce6f9b%3A0x7d6f5546e5a40a!2zVMOicmd1IE11cmXImQ!5e0!3m2!1sen!2sro!4v1715616654817!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harta zonei de acoperire"
                  className="relative z-0 pointer-events-none"
                ></iframe>

                {/* Simulated Radius Overlay (CSS Trick) */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
                  <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] bg-brand-blue/20 rounded-xl border-[3px] border-brand-blue/40 flex items-center justify-center shadow-[0_0_20px_rgba(30,58,138,0.2)]">
                    <div className="w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_10px_rgba(30,58,138,0.8)] border-2 border-white animate-pulse"></div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-400 italic text-center">
                * Ne deplasăm și în localitățile mai mici din apropierea acestor orașe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
