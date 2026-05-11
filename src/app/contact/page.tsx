import FinalCTA from '@/components/FinalCTA';
import { BRAND } from '@/lib/constants';

export const metadata = {
  title: `Contact GH Electric | Obține o ofertă gratuită`,
  description: `Contactează GH Electric pentru următorul tău proiect. Oferim servicii electrice profesionale în Târgu Mureș și împrejurimi.`,
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-brand-gray py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[40px] md:text-[56px] font-bold text-brand-dark leading-tight mb-6">Contactează-ne</h1>
          <p className="text-[18px] text-slate-700 max-w-2xl mx-auto font-medium">
            Ești gata să începi? Suntem aici să îți răspundem la întrebări și să îți oferim o evaluare profesională pentru proiectul tău.
          </p>
        </div>
      </section>

      {/* Main Contact Section - Using FinalCTA for high impact */}
      <FinalCTA />

      {/* FAQ Quick Section */}
      <section className="py-24 bg-brand-gray border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-[40px] font-bold text-brand-dark mb-12 text-center">Întrebări frecvente</h2>
          <div className="grid gap-6">
             {[
               { q: "Cât de repede puteți veni?", a: "Pentru urgențe electrice, oferim suport 24/7. Pentru devize standard și lucrări programate, stabilim de obicei o vizită în 24-48 de ore." },
               { q: "Devizele sunt gratuite?", a: "Da, oferim evaluări și devize gratuite pentru toate proiectele rezidențiale din județul Mureș." },
               { q: "Vă ocupați de autorizații?", a: "Absolut. Ne ocupăm de toate autorizațiile, dosarele de instalație și inspecțiile electrice necesare conform normelor ANRE." }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-[20px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <h4 className="font-bold text-[20px] text-brand-dark mb-3">{item.q}</h4>
                 <p className="text-[16px] text-slate-600 leading-relaxed">{item.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
