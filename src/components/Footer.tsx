import Link from 'next/link';
import { BRAND, SERVICES, SERVICE_AREAS } from '@/lib/constants';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer text-white pt-20 pb-28 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-tight">
              GH <span className="font-light tracking-widest text-brand-blue">ELECTRIC</span>
            </div>
            <p className="text-[#a1a1aa] text-[15px] leading-relaxed max-w-xs">
              Servicii profesionale de electrician, autorizat ANRE, servind Târgu Mureș și împrejurimi din 2010. Calitate și siguranță garantată.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm">
               <ShieldCheck size={18} className="text-brand-yellow" />
               <span className="font-bold">Autorizație ANRE Nr. 123456</span>
            </div>
          </div>

          {/* Service Silo */}
          <div>
            <h3 className="text-[18px] font-bold mb-6">Servicii Principale</h3>
            <ul className="space-y-4">
               <li><Link href="/services/urgente-electrice" className="text-brand-yellow hover:underline font-bold text-[15px]">Urgențe Electrice 24/7</Link></li>
              {SERVICES.filter(s => s.slug !== 'urgente-electrice').slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-[#a1a1aa] hover:text-white text-[15px] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & NAP */}
          <div>
            <h3 className="text-[18px] font-bold mb-6">Contact & Locație</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 text-[15px] text-[#a1a1aa]">
                <Phone size={20} className="text-brand-blue shrink-0" /> 
                <span className="font-bold text-white">{BRAND.phone}</span>
              </li>
              <li className="flex gap-4 text-[15px] text-[#a1a1aa]">
                <Mail size={20} className="text-brand-blue shrink-0" /> {BRAND.email}
              </li>
              <li className="flex gap-4 text-[15px] text-[#a1a1aa]">
                <MapPin size={20} className="text-brand-blue shrink-0" /> 
                <span>{BRAND.name}<br/>{BRAND.address}</span>
              </li>
            </ul>
          </div>

          {/* Areas & Legal */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[18px] font-bold mb-6">Arie de acoperire</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.slice(0, 6).map((area) => (
                  <span key={area} className="text-[12px] font-medium bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-[#a1a1aa]">
                    {area}
                  </span >
                ))}
                <span className="text-[12px] font-medium text-brand-blue">+ localități limitrofe</span>
              </div>
            </div>
            <div className="pt-4">
               <ul className="space-y-2">
                <li><Link href="/politica-de-confidentialitate" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Politică de Confidențialitate</Link></li>
                <li><Link href="/termeni-si-conditii" className="text-[#a1a1aa] hover:text-white text-[13px] transition-colors">Termeni și Condiții</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#a1a1aa] text-[14px] text-center">
            &copy; {currentYear} {BRAND.name}. Toate drepturile rezervate. Lucrări executate conform normativelor I7/2011.
          </p>
          <div className="flex gap-4 opacity-50">
             {/* Fallback text if images are missing */}
             <span className="text-[10px] border border-white/20 px-2 py-1 rounded">ANPC</span>
             <span className="text-[10px] border border-white/20 px-2 py-1 rounded">SOL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
