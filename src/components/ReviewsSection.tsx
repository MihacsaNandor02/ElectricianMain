'use client';

import { Star, Quote, CheckCircle2 } from 'lucide-react';

const heroReview = {
  name: "Marian Popescu",
  rating: 5,
  jobType: "Instalație completă casă",
  text: "Eram disperat că nu găseam pe cineva serios pentru o casă în construcție lângă Târgu Mureș. Echipa GH Electric nu doar că a venit la timp, dar au lucrat incredibil de curat și mi-au explicat fiecare circuit. Au refăcut tot tabloul pe care un alt 'meseriaș' îl greșise. Acum dorm liniștit știind că totul e sigur. Recomand din tot sufletul!",
  date: "Acum 2 săptămâni",
};

const gridReviews = [
  {
    name: "Simona L.",
    rating: 5,
    jobType: "Reparație tablou",
    text: "Au venit în 40 de minute pentru o urgență. Foarte politicoși și rapizi.",
  },
  {
    name: "Ioan B.",
    rating: 5,
    jobType: "Montaj prize & LED",
    text: "Preț corect, fără surprize. Lucrarea arată impecabil.",
  },
  {
    name: "Marius T.",
    rating: 5,
    jobType: "Urgență siguranțe",
    text: "Singurul electrician care a răspuns la 10 seara. Rezolvat imediat.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 pt-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[45px] font-bold text-brand-dark mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="text-slate-600 text-lg">Peste 200 de intervenții reușite în ultimul an.</p>
        </div>

        {/* Hero Review */}
        {/*<div className="max-w-4xl mx-auto mb-16">
          <div className="bg-brand-gray/30 p-8 sm:p-12 rounded-[30px] relative border border-brand-blue/10">
            <Quote size={60} className="absolute top-6 left-6 text-brand-blue/10 -z-0" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 size={14} /> {heroReview.jobType}
                </span>
                <span className="text-slate-400 text-sm">{heroReview.date}</span>
              </div>
              <p className="text-xl sm:text-2xl text-brand-dark leading-relaxed italic mb-8">
                "{heroReview.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                  {heroReview.name[0]}
                </div>
                <div>
                  <div className="font-bold text-brand-dark">{heroReview.name}</div>
                  <div className="text-sm text-slate-500">Client verificat</div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        {/* Grid Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridReviews.map((review, index) => (
            <div key={index} className="bg-white p-8 pt-10 rounded-[20px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative flex flex-col items-center text-center">
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
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center font-bold text-brand-blue text-sm">
                  {review.name[0]}
                </div>
                <div className="font-bold text-brand-dark text-lg">{review.name}</div>
              </div>

              {/* Text */}
              <p className="text-slate-700 leading-relaxed mb-6">"{review.text}"</p>

              {/* Job Type */}
              <div className="text-[12px] font-black uppercase tracking-widest text-brand-blue mt-auto">
                {review.jobType}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
