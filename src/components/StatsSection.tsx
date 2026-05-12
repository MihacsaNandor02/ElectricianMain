import { BRAND } from '@/lib/constants';

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

export default function StatsSection() {
  return (
    <section className="relative bg-brand-blue py-8 mt-12 text-white overflow-hidden mx-4 sm:mx-8 lg:mx-auto sm:px-6 lg:px-12 xl:px-28 lg:py-12 rounded-[50px]">
      {/* Subtle radial glow to make it feel premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="container relative mx-auto px-2 sm:px-4 text-center z-10">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-4 lg:mb-2 tracking-tight leading-tight">
          Rezultate în Cifre
        </h2>
        <p className="text-[18px] sm:text-[20px] lg:text-[22px] opacity-90 mb-10 sm:mb-12 lg:mb-6 max-w-3xl mx-auto font-medium">
          Aveți o urgență electrică? Suntem disponibili pentru intervenții de urgență în {BRAND.serviceArea}!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-8 lg:gap-x-12 px-2 sm:px-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${index === 3 ? 'sm:col-span-3 lg:col-span-1' : ''
                }`}
            >
              <div className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-brand-yellow mb-1 sm:mb-2 tracking-tighter leading-none drop-shadow-sm">
                {stat.number}
              </div>
              <div className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold uppercase tracking-wider sm:tracking-widest opacity-90 max-w-[160px] mx-auto leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4 sm:px-0 max-w-xs sm:max-w-none mx-auto">
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="flex w-full sm:max-w-[210px] md:max-w-xs  items-center justify-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-6 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-[18px] sm:text-[20px] transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            {BRAND.phone}
          </a>
          <p className="text-[16px] sm:text-[20px] font-bold tracking-tight">
            Sună acum pentru intervenție rapidă!
          </p>
        </div>
      </div>
    </section>
  );
}
