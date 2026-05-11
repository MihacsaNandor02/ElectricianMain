import { CheckCircle2, ShieldCheck, Trophy, Users, Star } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: `Despre GH Electric | Electricieni Autorizați în ${BRAND.serviceArea}`,
  description: `Află mai multe despre istoria GH Electric, misiunea noastră și angajamentul de a oferi servicii electrice de top în Târgu Mureș.`,
};

const stats = [
  { label: 'Ani de experiență', value: '15+', icon: Trophy },
  { label: 'Case deservite', value: '2.500+', icon: Users },
  { label: 'Autorizat & Asigurat', value: '100%', icon: ShieldCheck },
  { label: 'Proiecte finalizate', value: '5.000+', icon: CheckCircle2 },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="bg-brand-gray py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[40px] md:text-[56px] font-bold text-brand-dark leading-tight max-w-4xl mx-auto">
            Siguranță și profesionalism pentru casa ta în Târgu Mureș
          </h1>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-bold text-brand-dark">4.9/5 Rating Google</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-slate-300 hidden md:block"></div>
            <div className="font-medium text-slate-600">Peste 15 ani de experiență locală</div>
          </div>
        </div>
      </section>

      {/* Content Section - The Narrative */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10 text-center mb-20">
              <h2 className="text-[36px] font-bold text-brand-dark leading-tight">Cine suntem și cum te putem ajuta</h2>
              <p className="text-[20px] text-slate-700 leading-relaxed font-medium">
                Din 2010, GH Electric ajută proprietarii din județul Mureș să obțină lucrări electrice sigure și fiabile, fără scurtături sau surprize neplăcute.
              </p>
              <p className="text-[18px] text-slate-600 leading-relaxed">
                Am început ca o mică echipă de familie și am păstrat aceeași mentalitate de atunci: să facem treaba corect, să menținem casele în siguranță și să lăsăm totul mai curat decât am găsit. Credem că un electrician bun nu este doar cel care știe să lege fire, ci cel care îți oferă liniștea sufletească că familia ta este protejată.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {[
                { title: 'Siguranța pe primul loc', desc: 'Fără scurtături, fiecare lucrare respectă codul tehnic și normele ANRE.' },
                { title: 'Prețuri corecte', desc: 'Oferim devize clare și transparente înainte de începerea oricărei lucrări.' },
                { title: 'Lucru curat', desc: 'Respectăm locuința ta și lăsăm casa exact așa cum am găsit-o.' },
                { title: 'Intervenții rapide', desc: 'Prioritizăm întotdeauna apelurile de urgență pentru siguranța ta.' }
              ].map((value, idx) => (
                <div key={idx} className="bg-brand-gray p-8 rounded-[20px] border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-brand-blue mb-6">
                    <CheckCircle2 size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[22px] font-bold text-brand-dark mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[48px] md:text-[64px] font-bold text-brand-yellow mb-2 leading-none">{stat.value}</div>
                <div className="text-[14px] md:text-[16px] font-bold text-slate-300 uppercase tracking-[2px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white">
        <FinalCTA />
      </section>
    </main>
  );
}
