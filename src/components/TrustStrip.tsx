import { Star, ShieldCheck, Zap, MapPin } from 'lucide-react';

const triggers = [
  {
    icon: Star,
    text: "5.0 Google rating",
    color: "text-brand-yellow",
  },
  {
    icon: ShieldCheck,
    text: "ANRE autorizat",
    color: "text-brand-blue",
  },
  {
    icon: Zap,
    text: "Intervenții în 60–120 min",
    color: "text-brand-yellow",
  },
  {
    icon: MapPin,
    text: "Local (Târgu Mureș + zone limitrofe)",
    color: "text-brand-blue",
  },
];

export default function TrustStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
          {triggers.map((trigger, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start gap-3">
              <div className={`${trigger.color} shrink-0`}>
                <trigger.icon size={22} fill={trigger.icon === Star ? "currentColor" : "none"} strokeWidth={2} />
              </div>
              <span className="text-sm sm:text-[15px] font-bold text-brand-dark uppercase tracking-tight">
                {trigger.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
