import Link from 'next/link';
import * as Icons from 'lucide-react';
import { SERVICES, BRAND } from '@/lib/constants';

export const metadata = {
  title: `Our Electrical Services | GH Electric - ${BRAND.serviceArea}`,
  description: `Explore our full range of residential electrical services in Fairfield and Westchester. From panel upgrades to lighting design.`,
};

const IconMap: Record<string, any> = {
  Lightbulb: Icons.Lightbulb,
  Zap: Icons.Zap,
  Car: Icons.Car,
  Wrench: Icons.Wrench,
  Hammer: Icons.Hammer,
  RefreshCw: Icons.RefreshCw,
};

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black md:text-6xl tracking-tight mb-6">Expert Electrical Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional, code-compliant, and future-ready solutions for every room in your home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = IconMap[service.icon] || Icons.Zap;
              return (
                <div key={service.slug} className="flex flex-col rounded-xl border border-slate-100 bg-slate-50 p-8 transition-all hover:shadow-2xl hover:bg-white hover:border-blue-500/20 group">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Service Details <Icons.ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Not sure which service you need?</h2>
            <p className="text-lg text-slate-600">
               Every home is unique. Our expert electricians provide comprehensive safety inspections and consultations to help you plan your next project or repair.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <Link href="/contact" className="bg-amber-500 text-white px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-amber-600 transition-all active:scale-95">Request a Consultation</Link>
               <a href={`tel:${BRAND.phoneRaw}`} className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-slate-800 transition-all active:scale-95">Call Now: {BRAND.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
