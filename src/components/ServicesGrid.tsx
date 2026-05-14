'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, BRAND } from '@/lib/constants';
import { Lightbulb, Zap, Wrench, Hammer, RefreshCw, LucideIcon, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

const IconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Zap,
  Wrench,
  Hammer,
  RefreshCw,
  ShieldCheck,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold tracking-tight text-brand-dark sm:text-[40px] lg:text-[42px]">
            Servicii profesionale de electrician
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] text-slate-700">
            Calitate și siguranță pentru orice nevoie electrică în Târgu Mureș.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr justify-items-center">
          {SERVICES.map((service) => {
            const IconComponent = IconMap[service.icon] || Zap;
            const isUrgency = service.isPriority;
            const hasImage = !!service.image;
            const href = isUrgency ? `tel:${BRAND.phoneRaw}` : `/services/${service.slug}`;

            return (
              <Link
                href={href}
                key={service.title}
                className={`group max-w-sm sm:max-w-md lg:max-w-none w-full relative rounded-lg transition-all duration-300 shadow-sm hover:shadow-xl border flex flex-col h-full mx-auto ${isUrgency
                  ? 'bg-brand-yellow text-brand-dark border-brand-yellow z-10'
                  : 'bg-white border-slate-100'
                  }`}
              >
                {isUrgency && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[13px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-xl whitespace-nowrap z-30">
                    Intervenție Rapidă
                  </div>
                )}

                {/* Shorter Image section - 1/3 of height feel */}
                {hasImage ? (
                  <div className="relative w-full aspect-[16/7] overflow-hidden ">
                    <Image
                      src={service.image!}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay for smooth transition */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: isUrgency
                          ? 'linear-gradient(to bottom, transparent 70%, #F59E0B 120%)'
                          : 'linear-gradient(to bottom, transparent 70%, #ffffff 120%)',
                      }}
                    />
                  </div>
                ) : (
                  /* No-image fallback: shorter header */
                  <div
                    className="relative w-full aspect-[16/7] flex items-center justify-center overflow-hidden rounded-t-[30px]"
                    style={{
                      background: isUrgency
                        ? 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
                        : 'linear-gradient(135deg, #1F93A3 0%, #0f5f6a 100%)',
                    }}
                  >
                    <IconComponent size={40} strokeWidth={1.2} className="text-white/80" />
                  </div>
                )}

                {/* Text section */}
                <div className="flex flex-col flex-grow p-6 sm:p-8">
                  <h3 className={`text-[22px] lg:text-[28px] font-bold mb-3 ${isUrgency ? 'text-brand-dark' : 'text-brand-dark'}`}>
                    {service.title}
                  </h3>

                  <p className={`text-[15px] sm:text-[16px] leading-relaxed mb-0 ${isUrgency ? 'text-brand-dark/80' : 'text-slate-600'}`}>
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div
                      className={`inline-flex items-center gap-2 text-[16px] font-bold transition-all ${isUrgency
                        ? 'bg-brand-blue text-white px-6 py-3 rounded-lg group-hover:scale-105 shadow-lg hover:bg-brand-blue-deep'
                        : 'text-brand-blue group-hover:text-brand-blue-deep'
                        }`}
                    >
                      {isUrgency && <Phone size={18} fill="currentColor" />}
                      {isUrgency ? (service.cta || 'Sună acum') : (service.cta || 'Detalii servicii')} <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Centered CTA at the end */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-blue px-20 py-4 md:px-20 md:py-4 text-[18px] xl:text-[22px] text-white font-semibold rounded-lg hover:bg-brand-blue-deep transition-all shadow-xl hover:-translate-y-1 md:max-w-[300px]"
          >
            Cere ofertă
          </a>
        </div>
      </div>
    </section>
  );
}
