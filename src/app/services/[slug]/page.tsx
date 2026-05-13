import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { SERVICES, BRAND } from '@/lib/constants';
import FinalCTA from '@/components/FinalCTA';
import ServiceArea from '@/components/ServiceArea';
import TrustStrip from '@/components/TrustStrip';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

const IconMap: Record<string, any> = {
  Lightbulb: Icons.Lightbulb,
  Zap: Icons.Zap,
  Car: Icons.Car,
  Wrench: Icons.Wrench,
  Hammer: Icons.Hammer,
  RefreshCw: Icons.RefreshCw,
  ShieldCheck: Icons.ShieldCheck,
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = IconMap[service.icon] || Icons.Zap;

  return (
    <main className="bg-white">
      <section className="relative pt-6 pb-10 sm:py-20 xl:py-16 overflow-hidden bg-[#0f172a]">
        {/* Dynamic Background Image with opacity */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        {/* Optional subtle gradient for depth */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#38bdf8_0%,_transparent_100%)] opacity-10"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Side: Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start relative z-20">

              <h1 className="text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[44px] font-bold tracking-tight text-white leading-[1.2] mb-6">
                {service.description}
              </h1>
              <p className="text-[18px] sm:text-[22px] lg:text-[18px] xl:text-[22px] leading-relaxed text-white/80 font-medium mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
                {service.longDescription}
              </p>

              <div className="flex flex-col justify-center items-center sm:flex-row  lg:justify-start gap-4 sm:gap-6 w-full lg:w-full mx-auto lg:mx-0 max-w-xs sm:max-w-xl lg:max-w-none lg:flex-nowrap">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex flex-1 font-semibold w-full items-center justify-center gap-3 bg-brand-blue px-8  sm:px-10 lg:px-6 xl:px-10 py-4 sm:py-5 lg:py-4 xl:py-5 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[18px] whitespace-nowrap text-white font-black rounded-2xl shadow-lg hover:bg-brand-blue-deep hover:-translate-y-1 transition-all max-w-[250px] sm:max-w-none"
                >
                  <Icons.Phone size={20} fill="currentColor" /> {BRAND.phone}
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 font-semibold w-full items-center justify-center gap-3 bg-brand-whatsapp px-8 sm:px-10 lg:px-6 xl:px-10 py-4 sm:py-5 lg:py-4 xl:py-5 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[18px] whitespace-nowrap text-white font-black rounded-2xl shadow-lg hover:bg-brand-whatsapp-hover hover:-translate-y-1 transition-all max-w-[250px] sm:max-w-none"
                >
                  <Icons.MessageCircle size={22} fill="currentColor" /> WhatsApp
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-white/60 font-bold">
                <Icons.Clock size={18} className="text-brand-blue" /> Răspundem în maxim {BRAND.responseTime}
              </div>
            </div>

            {/* Right Side: Trust Card */}
            {service.relevantReview && (
              <div className="relative mt-8 lg:mt-0 max-w-lg mx-auto lg:ml-auto lg:mr-0">
                <div className="absolute -inset-4 bg-brand-yellow/20 rounded-[40px] blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/5 border border-white/10 p-8 pt-10 sm:p-10 sm:pt-12 rounded-[32px] backdrop-blur-md shadow-2xl flex flex-col items-center text-center">

                  {/* Google Logo */}
                  <div className="absolute top-6 left-6">
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 text-brand-yellow mb-6">
                    {[...Array(service.relevantReview.stars)].map((_, i) => (
                      <Icons.Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  {/* Avatar + Name */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center font-black text-brand-dark text-xl shadow-inner">
                      {service.relevantReview.author[0]}
                    </div>
                    <div className="text-[20px] font-bold text-white">
                      {service.relevantReview.author}
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-[20px] sm:text-[22px] text-white italic leading-snug mb-8 font-medium">
                    "{service.relevantReview.text}"
                  </p>

                  {/* Job Type at end */}
                  <div className="text-[14px] font-black uppercase tracking-widest text-brand-yellow mt-auto">
                    {service.title}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      <TrustStrip />

      {/* 2. Probleme pe care le rezolvăm (VERY IMPORTANT) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-[32px] md:text-[40px] font-bold font-black text-brand-dark mb-8 flex items-center gap-4">

                Probleme frecvente:
              </h2>
              <div className="grid gap-4">
                {service.problems.map((problem) => (
                  <div key={problem} className="flex items-center gap-4 p-6 bg-brand-gray/50 rounded-2xl border border-slate-100 hover:border-brand-blue/30 transition-colors group">
                    <div className="h-3 w-3 rounded-full bg-brand-blue/20 group-hover:bg-brand-blue transition-colors" />
                    <span className="text-[18px] font-bold text-slate-700">{problem}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-brand-blue-deep transition-all hover:-translate-y-1 group"
              >
                <Icons.Zap size={22} className="group-hover:scale-110 transition-transform" fill="currentColor" />
                <span>Solicită intervenție rapidă</span>
              </a>
            </div>

            {/* 3. Solution section (what you actually do) */}
            <div className="w-full h-full min-h-[400px] rounded-[40px] shadow-2xl relative overflow-hidden group flex items-end">
              {/* Background Image of the Service */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>

              {/* Solution Content */}
              <div className="relative z-10 p-8 sm:p-12 w-full">
                <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-4 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 shadow-lg">
                  <Icons.CheckCircle2 size={18} /> Soluția Noastră
                </div>
                <p className="text-[22px] sm:text-[28px] font-bold leading-snug text-white">
                  „{service.solution}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pricing expectation */}
      <section className="py-12 sm:py-20 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Icons.BadgeDollarSign size={64} className="mx-auto text-brand-yellow mb-8" />

            <h2 className="text-[32px] font-black mb-6">Cât costă intervenția?</h2>
            <p className="text-xl text-white/80 leading-relaxed mb-4">
              „{service.pricingExpectation}”
            </p>

            <div className="mt-10 flex justify-center w-full">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-brand-blue px-12 py-3 text-[18px] lg:text-[22px] text-white font-black rounded-2xl shadow-lg hover:bg-brand-blue-deep hover:-translate-y-1 transition-all"
              >
                Cere Ofertă
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust block (compressed) */}
      <section className="py-12 sm:py-20 bg-brand-gray/30 border-y border-slate-100">
        <div className="container mx-auto px-4">


          {service.relevantReview && (
            <div className="max-w-3xl mx-auto bg-white p-8 pt-10 rounded-[30px] shadow-sm border border-slate-100 relative flex flex-col items-center text-center">
              {/* Google Logo */}
              <div className="absolute top-6 left-6">
                <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(service.relevantReview.stars)].map((_, i) => (
                  <Icons.Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-12 w-12 shrink-0 rounded-full bg-brand-gray flex items-center justify-center text-brand-blue text-xl font-black">
                  {service.relevantReview.author[0]}
                </div>
                <div className="text-[20px] font-bold text-brand-dark">
                  {service.relevantReview.author}
                </div>
              </div>

              {/* Text */}
              <p className="text-lg font-medium text-slate-700 leading-relaxed italic mb-6">
                „{service.relevantReview.text}”
              </p>

              {/* Job Type at the end */}
              <div className="text-[12px] font-black uppercase tracking-widest text-brand-blue mt-auto">
                {service.title}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. How it works (ULTRA SHORT) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-brand-dark mb-16">Cum funcționează?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="text-[64px] font-black text-brand-blue/10 leading-none">01</div>
              <h3 className="text-2xl font-semibold text-brand-dark">Ne suni</h3>
              <p className="text-slate-500 font-medium">Ne explici problema la telefon sau pe WhatsApp.</p>
            </div>
            <div className="space-y-4">
              <div className="text-[64px] font-black text-brand-blue/10 leading-none">02</div>
              <h3 className="text-2xl font-semibold text-brand-dark">Venim la locație</h3>
              <p className="text-slate-500 font-medium">Un electrician autorizat ajunge rapid la tine.</p>
            </div>
            <div className="space-y-4">
              <div className="text-[64px] font-black text-brand-blue/10 leading-none">03</div>
              <h3 className="text-2xl font-semibold text-brand-dark">Rezolvăm problema</h3>
              <p className="text-slate-500 font-medium">Remediem defectul pe loc și oferim garanție.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service area (light SEO + trust) */}
      <ServiceArea />



      {/* 8. Final CTA (CLOSER) */}
      <FinalCTA />

      {/* Internal Linking - Other Services */}
      <section className="py-12 sm:py-20 bg-brand-gray border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[32px] font-bold text-brand-dark mb-12">Alte servicii oferite</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.filter(s => s.slug !== slug).slice(0, 4).map(other => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group p-8 bg-white border border-slate-200 rounded-[25px] hover:shadow-xl transition-all text-center hover:-translate-y-1"
              >
                <h3 className="font-bold text-brand-dark text-[18px] group-hover:text-brand-blue transition-colors">{other.title}</h3>
                <Icons.ArrowRight size={20} className="mx-auto mt-4 text-brand-blue opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

