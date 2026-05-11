'use client';

import { MapPin, Navigation } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/constants';

export default function ServiceArea() {
  return (
    <section className="py-12 bg-brand-gray/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-sm border border-slate-100 overflow-hidden">
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
                  Echipa noastră ajunge rapid la tine!
                </h2>
                <p className="text-white/90 text-lg mb-8 font-medium">
                  Ne aflăm mereu pe teren în județul Mureș. Indiferent de locație, un electrician autorizat este pregătit să intervină.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-lg">
                    <div className="text-brand-yellow font-black text-3xl">30'</div>
                    <div className="text-sm font-bold leading-tight">
                      Timp mediu <br /> de deplasare
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-lg">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-black text-brand-dark border-2 border-brand-blue shadow-sm">A</div>
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-black text-brand-dark border-2 border-brand-blue shadow-sm">M</div>
                    </div>
                    <div className="text-sm font-bold leading-tight">
                      Echipă <br /> pregătită
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: City List */}
            <div className="p-8 sm:p-12">
              <h3 className="text-xl font-bold text-brand-dark mb-8 flex items-center gap-2">
                <MapPin className="text-brand-blue" /> Localități principale:
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {SERVICE_AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                    {area}
                  </div>
                ))}
                {/* Fallback for SEO targets if not in constants */}
                {!SERVICE_AREAS.includes("Sighișoara") && (
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                    Sighișoara
                  </div>
                )}
                {!SERVICE_AREAS.includes("Reghin") && (
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                    Reghin
                  </div>
                )}
              </div>
              <p className="mt-12 text-sm text-slate-400 italic">
                * Ne deplasăm și în localitățile mai mici din apropierea acestor orașe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
