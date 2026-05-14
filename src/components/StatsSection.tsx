import Image from 'next/image';
import { BRAND } from '@/lib/constants';
import { ShieldCheck, Phone } from 'lucide-react';

const stats = [
  {
    number: "500+",
    label: "lucrări finalizate",
  },
  {
    number: "10 min",
    label: "Răspuns maxim",
  },
  {
    number: "Garanție",
    label: "lucrări",
  },
  {
    number: "10+ ani",
    label: "experiență",
  },
];

/**
 * ELECTRICIAN PHOTO SLOT
 * â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 * To add the client's photo, simply:
 * 1. Place the image in /public/images/ (e.g. /public/images/electrician-portrait.jpg)
 * 2. Set ELECTRICIAN_IMAGE below to the path (e.g. "/images/electrician-portrait.jpg")
 * 3. Update ELECTRICIAN_NAME with the client's real name
 *
 * When no image is provided (null), the section renders as a centered stats-only layout.
 * When an image IS provided, it becomes a split layout: photo left + stats right.
 */
const ELECTRICIAN_IMAGE: string | null = "/images/services/images.jpg"; // e.g. "/images/electrician-portrait.jpg"
const ELECTRICIAN_NAME: string = "GH Electric";

export default function StatsSection() {
  const hasPhoto = !!ELECTRICIAN_IMAGE;

  return (
    <section className="relative bg-brand-gray py-12 mt-12 text-brand-dark overflow-hidden mx-4 sm:mx-8 lg:mx-auto sm:px-6 lg:px-12 xl:px-16 lg:py-16 rounded-xl shadow-xl border border-slate-200">
      <div className="container relative mx-auto px-2 sm:px-4 z-10">

        {hasPhoto ? (
          <div className="flex flex-col lg:flex-row items-center justify-around gap-12 lg:gap-16 xl:gap-40">

            {/* Electrician Photo (Swapped to Right) */}
            <div className="flex-shrink-0 flex justify-center order-2 lg:order-2">
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-brand-yellow/20 rounded-xl blur-3xl opacity-40" />

                <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] lg:w-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={ELECTRICIAN_IMAGE!}
                    alt={`${ELECTRICIAN_NAME} – Electrician Autorizat ANRE`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 320px, 350px"
                    priority
                  />
                  {/* Name badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent p-6 pt-12">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={20} className="text-brand-yellow shrink-0" />
                      <div>
                        <div className="text-white font-bold text-lg leading-tight">{ELECTRICIAN_NAME}</div>
                        <div className="text-white/70 text-sm font-medium">Electrician Autorizat ANRE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats + CTA (Swapped to Left) */}
            <div className="flex-1 max-w-xl text-center lg:text-left order-1 lg:order-1">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-4 lg:mb-2 tracking-tight leading-tight text-brand-dark">
                Rezultate în Cifre
              </h2>
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-slate-600 mb-10 sm:mb-12 lg:mb-10 max-w-xl font-medium">
                Aveți o urgență electrică? Suntem disponibili pentru intervenții de urgență în {BRAND.serviceArea}!
              </p>

              <div className="grid grid-cols-2 gap-y-8 gap-x-8 lg:gap-x-12">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center lg:items-start">
                    <div className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-brand-yellow mb-1 sm:mb-2 tracking-tighter leading-none">
                      {stat.number}
                    </div>
                    <div className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold uppercase tracking-wider sm:tracking-widest text-brand-dark max-w-[160px] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-8 max-w-xs sm:max-w-none mx-auto lg:mx-0">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex w-full sm:max-w-[270px] items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-deep text-white px-6 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-lg font-black text-[18px] sm:text-[20px] transition-all hover:-translate-y-1 active:scale-95"
                >
                  <Phone size={20} fill="currentColor" />
                  {BRAND.phone}
                </a>
                <p className="text-[16px] sm:text-[20px] font-bold tracking-tight text-brand-dark">
                  Sună acum pentru intervenție rapidă!
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* â”€â”€â”€â”€â”€â”€â”€â”€â”€ CENTERED LAYOUT: Stats only (no photo) â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
          <div className="text-center">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-4 lg:mb-2 tracking-tight leading-tight text-brand-dark">
              Rezultate în Cifre
            </h2>
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-slate-600 mb-10 sm:mb-12 lg:mb-10 max-w-3xl mx-auto font-medium">
              Aveți o urgență electrică? Suntem disponibili pentru intervenții de urgență în {BRAND.serviceArea}!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-8 lg:gap-x-12 px-2 sm:px-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index === 3 ? 'sm:col-span-3 lg:col-span-1' : ''
                    }`}
                >
                  <div className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-brand-yellow mb-1 sm:mb-2 tracking-tighter leading-none">
                    {stat.number}
                  </div>
                  <div className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold uppercase tracking-wider sm:tracking-widest text-brand-dark max-w-[160px] mx-auto leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4 sm:px-0 max-w-xs sm:max-w-none mx-auto">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex w-full sm:max-w-[210px] md:max-w-[270px] md:mx-4 items-center justify-center bg-brand-blue hover:bg-brand-blue-deep text-white px-6 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-lg font-black text-[18px] sm:text-[20px] transition-all hover:-translate-y-1 active:scale-95"
              >
                {BRAND.phone}
              </a>
              <p className="text-[16px] sm:text-[20px] font-bold tracking-tight text-brand-dark">
                Sună acum pentru intervenție rapidă!
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
