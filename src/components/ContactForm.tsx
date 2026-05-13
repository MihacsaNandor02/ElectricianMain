'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="flex h-full flex-col items-center justify-center text-center py-12">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 text-brand-blue">
            <Send size={40} />
          </div>
          <h3 className="text-[32px] font-bold text-brand-dark">Mesaj trimis!</h3>
          <p className="mt-4 text-[18px] text-slate-600 max-w-md mx-auto">
            Îți mulțumim pentru mesaj. Un membru al echipei noastre te va contacta în cel mai scurt timp pentru a discuta despre proiectul tău.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-[16px] font-bold text-brand-blue hover:text-teal-700 transition-colors"
          >
            Trimite un alt mesaj
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-[15px] font-bold text-brand-dark">
                Prenume
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                placeholder="Ex: Ioan"
                className="mt-2 block w-full rounded-[10px] border-slate-300 px-4 py-3 text-brand-dark focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-[16px] shadow-sm bg-brand-gray/30"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-[15px] font-bold text-brand-dark">
                Nume
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                placeholder="Ex: Popescu"
                className="mt-2 block w-full rounded-[10px] border-slate-300 px-4 py-3 text-brand-dark focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-[16px] shadow-sm bg-brand-gray/30"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-[15px] font-bold text-brand-dark">
              Număr de telefon
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="07XX XXX XXX"
              className="mt-2 block w-full rounded-[10px] border-slate-300 px-4 py-3 text-brand-dark focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-[16px] shadow-sm bg-brand-gray/30"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-[15px] font-bold text-brand-dark">
              Serviciul dorit
            </label>
            <select
              id="service"
              name="service"
              className="mt-2 block w-full rounded-[10px] border-slate-300 px-4 py-3 text-brand-dark focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-[16px] shadow-sm bg-white"
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
            <label htmlFor="message" className="block text-[15px] font-bold text-brand-dark">
              Povestește-ne puțin despre proiect
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Descrie pe scurt problema sau lucrarea necesară..."
              className="mt-2 block w-full rounded-[10px] border-slate-300 px-4 py-3 text-brand-dark focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-[16px] shadow-sm bg-brand-gray/30"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn bg-brand-blue px-8 py-4 text-[18px] text-brand-dark font-black shadow-md hover:bg-brand-blue-deep transition-all disabled:opacity-50 mt-4 rounded-2xl"
          >
            {isSubmitting ? 'Se procesează...' : 'Solicită ofertă gratuită'}
          </button>
        </form>
      )}
    </div>
  );
}
