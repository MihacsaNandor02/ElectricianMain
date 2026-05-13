'use client';

import { Phone, MessageCircle, Clock, MapPin, Mail, Calendar, CheckCircle2 } from 'lucide-react';
import { BRAND, SERVICE_AREAS } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-0 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start bg-brand-gray/30 rounded-[40px] p-8 sm:p-12 lg:p-16 lg:px-12 border border-slate-100">

            {/* Left Column: Info & Service Areas */}
            <div className="space-y-12">
              <div className="space-y-10">
                <div>
                  <h2 className="text-[36px] sm:text-[48px] font-semibold text-brand-dark leading-tight mb-6">
                    Ai nevoie de un electrician acum?
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-brand-blue font-black text-lg">
                      <Clock size={24} /> Răspundem în maxim {BRAND.responseTime}
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 font-bold text-lg sm:text-lg leading-tight">
                      <MapPin size={24} className="text-brand-blue shrink-0" />
                      <span>Intervenție rapidă în {BRAND.serviceArea}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 font-bold text-lg">
                      <Calendar size={22} className="text-brand-blue shrink-0" />
                      <span>Program de lucru: <span className="text-brand-dark">Non-stop 24/7</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 font-bold text-lg underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue transition-all wrap">
                      <Mail size={22} className="text-brand-blue shrink-0" />
                      <a href={`mailto:${BRAND.email}`} className="hover:text-brand-dark transition-colors">{BRAND.email}</a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-stretch sm:flex-row gap-4 pt-4">
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="flex flex-1 font-semibold w-full items-center justify-center gap-3 bg-brand-blue px-8  sm:px-10 lg:px-6 xl:px-10 py-4 sm:py-5 lg:py-4 xl:py-5 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[18px] whitespace-nowrap text-white rounded-2xl shadow-lg hover:bg-brand-blue-deep hover:-translate-y-1 transition-all max-w-[250px] sm:max-w-none"
                  >
                    <Phone size={20} fill="currentColor" /> {BRAND.phone}
                  </a>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 font-semibold w-full items-center justify-center gap-3 bg-brand-whatsapp px-8  sm:px-10 lg:px-6 xl:px-10 py-4 sm:py-5 lg:py-4 xl:py-5 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[18px] whitespace-nowrap text-white rounded-2xl shadow-lg hover:bg-brand-whatsapp-hover hover:-translate-y-1 transition-all max-w-[250px] sm:max-w-none"
                  >
                    <MessageCircle size={22} fill="currentColor" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Service Areas Section */}
              <div className="pt-10 border-t border-slate-200">
                <h3 className="text-[14px] font-bold text-brand-blue uppercase tracking-widest mb-6">Zone deservite în județul Mureș</h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-white text-brand-dark rounded-full text-[13px] font-bold border border-slate-200 flex items-center gap-1.5 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Detailed Form */}
            <div className="bg-transparent pt-8 sm:p-10 lg:p-0 rounded-[32px]">
              <h3 className="text-[36px] sm:text-[48px] font-semibold text-brand-dark mb-6 text-center leading-tight">
                Solicitați Ofertă Gratuită
              </h3>

              <div className="mb-8 grid grid-cols-2 gap-4 bg-white/50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="text-center border-r border-slate-100">
                  <div className="text-[20px] sm:text-[32px] font-bold text-brand-blue leading-none mb-1">
                    &lt;60 min
                  </div>
                  <div className="text-[14px] font-bold text-slate-500">Timp răspuns</div>
                </div>
                <div className="text-center">
                  <div className="text-[20px] sm:text-[32px] font-bold text-brand-yellow leading-none mb-1 uppercase">
                    GRATUIT
                  </div>
                  <div className="text-[14px] font-bold text-slate-500">Evaluare</div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Nume <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="text"
                      placeholder="Ex: Popescu Ioan"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Telefon <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="tel"
                      placeholder="07XX XXX XXX"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Serviciul dorit</label>
                  <select
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                  >
                    <option>Reparații generale</option>
                    <option>Modernizare tablou electric</option>
                    <option>Proiectare iluminat</option>
                    <option>Stație încărcare EV</option>
                    <option>Instalație nouă / Construcție</option>
                    <option>Urgență electrică</option>
                    <option>Altul</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Descrierea solicitării</label>
                  <textarea
                    placeholder="Cum te putem ajuta?"
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-blue mt-1 shrink-0" />
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium ">
                    Acceptați să fiți contactat în legătură cu această solicitare. Estimarea este complet gratuită.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-blue-deep text-white py-4 rounded-2xl text-base font-semibold uppercase tracking-wider shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                >
                  Trimite Solicitarea
                </button>
              </form>


            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
