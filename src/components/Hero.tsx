import Link from 'next/link';
import { Phone, MessageCircle, Clock, Star, Quote } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative py-16 pt-8 sm:py-20 xl:py-16 xl:pb-12 overflow-hidden bg-brand-dark">
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/services/tablou-electric.jpg')] bg-cover bg-center bg-no-repeat opacity-15 mix-blend-luminosity"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl lg:max-w-7xl mx-auto">
          {/* Left Side: Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[42px] xl:text-[44px] font-bold tracking-tight text-white leading-[1.3] mb-6">
              Electrician Autorizat <span className="text-white">ANRE</span> în Târgu Mureș – Intervenții Rapide <span className="text-brand-yellow">24/7</span>
            </h1>

            <p className="text-[18px] sm:text-[22px] lg:text-[18px] xl:text-[22px] leading-relaxed text-white/80 font-medium mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
              Reparații, instalații și urgențe electrice pentru locuințe și firme – intervenim în aceeași zi.
            </p>

            <div className="flex flex-col justify-center items-center sm:flex-row  lg:justify-start gap-4 sm:gap-6 w-full lg:w-full mx-auto lg:mx-0 max-w-xs sm:max-w-xl lg:max-w-none lg:flex-nowrap">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex flex-1 font-semibold w-full items-center justify-center gap-3 bg-brand-blue px-8  sm:px-10 lg:px-6 xl:px-10 py-4 sm:py-5 lg:py-4 xl:py-5 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[18px] whitespace-nowrap text-white font-black rounded-lg shadow-lg hover:bg-brand-blue-deep hover:-translate-y-1 transition-all max-w-[250px] sm:max-w-none"
              >
                <Phone size={20} fill="currentColor" /> {BRAND.phone}
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 font-semibold w-full items-center justify-center gap-3 bg-brand-whatsapp px-8 sm:px-10 lg:px-6 xl:px-10 py-4 sm:py-5 lg:py-4 xl:py-5 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[18px] whitespace-nowrap text-white rounded-lg shadow-lg hover:bg-brand-whatsapp-hover hover:-translate-y-1 transition-all max-w-[250px] sm:max-w-none"
              >
                <MessageCircle size={22} fill="currentColor" /> WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 w-fit">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </div>
                <span className="text-[12px] font-bold text-green-400 uppercase tracking-widest">Disponibil Acum</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 font-bold">
                <Clock size={18} className="text-brand-blue" /> Răspundem în maxim {BRAND.responseTime}
              </div>
            </div>
          </div>

          {/* Right Side: Trust Card */}
          <div className="relative mt-8 lg:mt-0 max-w-lg mx-auto lg:ml-auto lg:mr-0">
            <div className="absolute -inset-4 bg-brand-yellow/20 rounded-xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 pt-10 sm:p-10 sm:pt-12 rounded-xl backdrop-blur-md shadow-2xl flex flex-col items-center text-center">

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
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center font-black text-brand-dark text-xl shadow-inner">
                  M
                </div>
                <div className="text-[20px] font-bold text-white">Monica Raluca</div>
              </div>

              {/* Text */}
              <p className="text-[18px] sm:text-[20px] text-white italic leading-snug mb-8 font-medium">
                "Sant foarte multumita de servicii, a venit cand a făcut programarea, preturi bune ! Foarte multumita! Recomand cu încredere!"
              </p>

              {/* Job Type */}
              <div className="text-[14px] font-black uppercase tracking-widest text-brand-yellow mt-auto">
                Urgență tablou electric
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
