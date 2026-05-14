'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, Zap, ShieldCheck, Home, Lightbulb, PenTool as Tool } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const serviceOptions = [
  { id: 'tablou', title: 'Înlocuire tablou electric', minPrice: 350, maxPrice: 800, icon: ShieldCheck, unit: 'lucrare' },
  { id: 'prize', title: 'Montaj prize / întrerupătoare', minPrice: 30, maxPrice: 70, icon: Zap, unit: 'bucată' },
  { id: 'lustre', title: 'Montaj corpuri iluminat', minPrice: 50, maxPrice: 150, icon: Lightbulb, unit: 'bucată' },
  { id: 'instalatie_ap', title: 'Refacere instalație apartament', minPrice: 2500, maxPrice: 6000, icon: Home, unit: 'lucrare' },
  { id: 'diagnostic', title: 'Deplasare + Constatare', minPrice: 100, maxPrice: 150, icon: Tool, unit: 'intervenție' },
];

export default function CostCalculator() {
  const [selectedId, setSelectedId] = useState(serviceOptions[0].id);
  const [quantity, setQuantity] = useState(1);

  const selectedService = serviceOptions.find(s => s.id === selectedId) || serviceOptions[0];
  const totalMin = selectedService.minPrice * quantity;
  const totalMax = selectedService.maxPrice * quantity;

  // For jobs that are usually 1 unit, disable quantity
  const isSingleUnit = ['tablou', 'instalatie_ap', 'diagnostic'].includes(selectedService.id);

  const handleServiceChange = (id: string) => {
    setSelectedId(id);
    if (['tablou', 'instalatie_ap', 'diagnostic'].includes(id)) {
      setQuantity(1);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-gray px-4 py-2 rounded-full text-brand-blue font-bold text-sm mb-4">
              <Calculator size={18} /> Calculator Estimativ
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-brand-dark leading-tight mb-4">
              Calculează costul aproximativ
            </h2>
            <p className="text-slate-600 text-[18px] max-w-2xl mx-auto font-medium">
              Obține o estimare rapidă pentru cele mai comune servicii. Prețul final depinde de complexitatea lucrării la fața locului.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl border border-slate-100 p-6 sm:p-10 flex flex-col md:flex-row gap-10 items-center">
            
            {/* Left: Inputs */}
            <div className="flex-1 w-full space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Alege serviciul</label>
                <div className="space-y-3">
                  {serviceOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isActive = selectedId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleServiceChange(opt.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left ${
                          isActive 
                            ? 'border-brand-blue bg-blue-50/50' 
                            : 'border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-brand-blue text-white' : 'bg-brand-gray text-slate-500'}`}>
                          <Icon size={20} />
                        </div>
                        <span className={`font-bold text-[15px] sm:text-[16px] ${isActive ? 'text-brand-blue' : 'text-brand-dark'}`}>
                          {opt.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {!isSingleUnit && (
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Cantitate ({selectedService.unit})</label>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 rounded-lg bg-brand-gray flex items-center justify-center text-brand-dark font-bold text-xl hover:bg-slate-200 transition-colors"
                    >-</button>
                    <div className="text-2xl font-black text-brand-dark w-12 text-center">{quantity}</div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 rounded-lg bg-brand-gray flex items-center justify-center text-brand-dark font-bold text-xl hover:bg-slate-200 transition-colors"
                    >+</button>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Result */}
            <div className="flex-1 w-full md:max-w-sm bg-brand-dark rounded-xl p-8 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue rounded-full blur-[60px] opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow rounded-full blur-[60px] opacity-20" />
              
              <div className="relative z-10">
                <div className="text-white/80 font-medium mb-2">Cost estimativ:</div>
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">
                  {totalMin} - {totalMax} <span className="text-2xl text-brand-yellow">RON</span>
                </div>
                <div className="text-sm text-white/60 mb-8 border-b border-white/10 pb-6">
                  * Nu include costul materialelor.
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium leading-relaxed">
                    Vrei un preț exact pentru lucrarea ta? Sună-ne sau trimite-ne un mesaj pe WhatsApp!
                  </p>
                  
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="flex w-full items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-deep text-white px-6 py-4 rounded-xl font-bold text-[16px] transition-all hover:-translate-y-1 shadow-lg"
                  >
                    Sună la {BRAND.phone}
                  </a>
                  
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold text-[16px] transition-all"
                  >
                    Discută pe WhatsApp <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
