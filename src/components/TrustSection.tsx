'use client';

import { ShieldCheck, Zap, Banknote, Hammer, Star, Quote } from 'lucide-react';

const benefits = [
  {
    title: "Intervenții rapide",
    description: "Ajungem în Târgu Mureș în 30–90 minute pentru urgențe.",
    icon: Zap,
  },
  {
    title: "Electrician autorizat ANRE",
    description: "Lucrări sigure, conforme cu normele în vigoare.",
    icon: ShieldCheck,
  },
  {
    title: "Fără surprize la preț",
    description: "Primești estimare clară înainte de începerea lucrării.",
    icon: Banknote,
  },
  {
    title: "Garanție lucrare",
    description: "Rezolvăm corect din prima – sau revenim gratuit.",
    icon: Hammer,
  },
];

const reviews = [
  {
    name: "Monica Raluca",
    role: "Proprietar apartament",
    text: "Sant foarte multumita de servicii, a venit cand a făcut programarea, preturi bune ! Foarte multumita! Pe viitor cand mai am nevoie tot la domnul voi apela ! Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Mirabela Popa",
    role: "Casă rezidențială",
    text: "Profesionist, punctual și cu mult bun simț. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Adriana Marian",
    role: "Apartament Târgu Mureș",
    text: "Recomand cu încredere! Profesionist! ðŸ‘¨â€ðŸ”§ðŸ’¡âš¡",
    rating: 5,
  },
];

export default function TrustSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Benefits Left */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[36px] font-bold tracking-tight text-brand-dark leading-tight mb-8 sm:text-[45px]">
              De ce să alegi <span className="text-brand-blue">GH Electric</span>?
            </h2>

            <div className="grid grid-cols-1 gap-y-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-5 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <benefit.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-[20px] mb-1">{benefit.title}</h3>
                    <p className="text-[16px] text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Sidebar Right */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>

            <div className="space-y-6 relative">
              <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-dark px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Star size={16} fill="currentColor" className="text-brand-yellow" />
                4.9/5 pe Google Reviews
              </div>

              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-sm border border-slate-100 transition-all hover:shadow-md ${index === 1 ? 'lg:translate-x-6' : ''
                    }`}
                >
                  <div className="flex gap-1 text-brand-yellow mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={24} className="text-brand-blue/20 mb-2" />
                  <p className="text-[15px] italic text-slate-700 leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-gray flex items-center justify-center font-bold text-brand-blue text-xs">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-brand-dark">{review.name}</div>
                      <div className="text-[12px] text-slate-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
