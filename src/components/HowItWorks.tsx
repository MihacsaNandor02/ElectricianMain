'use client';

import * as Icons from 'lucide-react';
import { PhoneCall, Search, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Suni sau lași mesaj",
    description: "Contactează-mă prin telefon sau WhatsApp pentru a-mi spune problema ta.",
    icon: PhoneCall,
  },
  {
    title: "Diagnostic rapid",
    description: "Evaluez situația rapid prin telefon sau direct la fața locului (on-site).",
    icon: Search,
  },
  {
    title: "Intervenție în aceeași zi",
    description: "Rezolv problema eficient, cu materiale de calitate și garanție.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white lg:mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-brand-dark mb-4">
            Cum funcționează?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Arrow Connector (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full z-0 translate-x-12">
                  <div className="w-full flex justify-center">
                    <Icons.ArrowRight size={32} className="text-brand-blue/20" />
                  </div>
                </div>
              )}

              <div className="w-20 h-20 rounded-full bg-brand-yellow text-white flex items-center justify-center mb-8 shadow-lg z-10 transition-transform group-hover:scale-110">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-4 text-[22px] sm:text-[30px]">{step.title}</h3>
              <p className="text-[16px] text-slate-600 leading-relaxed max-w-[280px] font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
