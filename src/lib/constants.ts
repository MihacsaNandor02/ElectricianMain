export const BRAND = {
  name: "GH Electric",
  phone: "0754 571 752",
  phoneRaw: "0754571752",
  whatsapp: "40754571752",
  whatsappUrl: "https://wa.me/40754571752?text=Bună%20ziua!%20Aș%20dori%20o%20programare%20pentru%20un%20serviciu%20electric.",
  email: "contact@electricgh.ro",
  serviceArea: "Târgu Mureș și împrejurimi",
  address: "Târgu Mureș, România",
  responseTime: "10 minute",
};

export interface Service {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image?: string;
  benefits: string[];
  problems: string[];
  solution: string;
  pricingExpectation: string;
  relevantReview?: {
    author: string;
    text: string;
    stars: number;
  };
  cta?: string;
  isPriority?: boolean;
}

export const SERVICES: Service[] = [
  {
    title: "Urgențe electrice",
    slug: "urgente-electrice",
    description: "Electrician urgențe în Târgu Mureș – intervenim rapid la pană de curent",
    longDescription: "Siguranțe sărite, scurtcircuit sau lipsă curent – venim rapid și rezolvăm pe loc.",
    icon: "Zap",
    image: "/images/services/urgente-electrice.jpg",
    benefits: ["ANRE autorizat", "intervenții rapide", "preț clar înainte", "garanție lucrare"],
    problems: [
      "Nu ai curent în casă",
      "Siguranțele sar constant",
      "Miros de ars la tablou electric",
      "Prize care nu funcționează",
      "Scurtcircuit"
    ],
    solution: "Diagnosticăm rapid problema și intervenim pe loc pentru a restabili alimentarea în siguranță.",
    pricingExpectation: "Costul depinde de problemă, dar îl comunicăm înainte de intervenție.",
    relevantReview: {
      author: "Adriana Marian",
      text: "Recomand cu încredere! Profesionist! 👨‍🔧💡⚡",
      stars: 5
    },
    cta: "Sună acum",
    isPriority: true,
  },
  {
    title: "Reparații electrice",
    slug: "reparatii-electrice",
    description: "Reparații electrice profesionale în Târgu Mureș – diagnostic și remediere rapidă",
    longDescription: "De la prize defecte la probleme complexe de cablaj, restabilim funcționalitatea completă a instalației tale.",
    icon: "Wrench",
    image: "/images/services/reparatii-electrice.png",
    benefits: ["Diagnostic precis", "Piese de calitate", "Transparență costuri", "Curățenie după lucru"],
    problems: [
      "Prize care scot scântei",
      "Întrerupătoare defecte",
      "Cabluri întrerupte în perete",
      "Iluminat care pâlpâie",
      "Probleme la dozele de legătură"
    ],
    solution: "Identificăm sursa defecțiunii și aplicăm reparații durabile folosind materiale de top.",
    pricingExpectation: "Evaluăm defectul și îți spunem prețul exact înainte de a începe reparația.",
    relevantReview: {
      author: "Elena P.",
      text: "Foarte profesioniști. Au reparat rapid o priză care făcea scurt fără să spargă peretele inutil.",
      stars: 5
    },
    cta: "Rezolvă problema",
  },
  {
    title: "Instalații electrice",
    slug: "instalatii-electrice",
    description: "Execuție instalații electrice complete conform normativelor ANRE",
    longDescription: "Proiectăm și montăm sisteme electrice moderne pentru case și apartamente noi în județul Mureș.",
    icon: "Hammer",
    image: "/images/services/instalatii-electrice.png",
    benefits: ["Conformitate ANRE", "Proiectare inclusă", "Materiale premium", "Garanție extinsă"],
    problems: [
      "Instalație nouă pentru casă",
      "Extindere rețea existentă",
      "Montaj tablou de șantier",
      "Circuite dedicate pentru AC/Cuptor",
      "Pregătire pentru Smart Home"
    ],
    solution: "Realizăm instalații sigure, scalabile și eficiente, adaptate nevoilor tale de consum.",
    pricingExpectation: "Oferim deviz detaliat după vizionarea proiectului sau a locației.",
    relevantReview: {
      author: "Marius I.",
      text: "Au făcut toată instalația la casa noastră nouă. Lucrează foarte curat și respectă termenele.",
      stars: 5
    },
  },
  {
    title: "Modernizări instalații",
    slug: "modernizari-instalatii",
    description: "Modernizare instalații electrice vechi – siguranță sporită pentru casa ta",
    longDescription: "Înlocuim firele vechi de aluminiu cu cupru și aducem tabloul electric la standardele de siguranță actuale.",
    icon: "RefreshCw",
    image: "/images/services/modernizari-instalatii.png",
    benefits: ["Eliminare risc incendiu", "Suplimentare prize", "Protecție aparate", "Valoare crescută imobil"],
    problems: [
      "Instalație veche din aluminiu",
      "Nu ai destule prize în camere",
      "Vrei să schimbi tabloul vechi",
      "Simți miros de încins în perete",
      "Vrei protecție pentru electrocasnice"
    ],
    solution: "Actualizăm sistemul electric pentru a suporta consumul modern, eliminând riscurile de incendiu.",
    pricingExpectation: "Stabilim un preț fix pe punct electric sau pe întreg proiectul.",
    relevantReview: {
      author: "Cosmin B.",
      text: "Schimbat toată instalația de aluminiu într-un apartament de 3 camere. Rezultat impecabil.",
      stars: 5
    },
  },
  {
    title: "Tablou electric & siguranțe",
    slug: "tablou-electric-sigurante",
    description: "Înlocuire tablou electric și montaj siguranțe automate în Târgu Mureș",
    longDescription: "Protejează-ți familia și aparatura cu un tablou electric modern dotat cu protecții diferențiale.",
    icon: "ShieldCheck",
    image: "/images/services/tablou-electric.jpg",
    benefits: ["Protecție electrocutare", "Componente de top", "Echilibrare consum", "Intervenție curată"],
    problems: [
      "Siguranțele vechi se încălzesc",
      "Tablou cu siguranțe fuzibile (patroane)",
      "Vrei protecție diferențială",
      "Zgomote ciudate din tablou",
      "Lipsă spațiu pentru noi circuite"
    ],
    solution: "Instalăm tablouri moderne Schneider sau Legrand, configurate corect pentru siguranță maximă.",
    pricingExpectation: "Prețul se comunică după verificarea numărului de circuite necesare.",
    relevantReview: {
      author: "Monica Raluca",
      text: "Sant foarte multumita de servicii, a venit cand a făcut programarea, preturi bune ! Foarte multumita! Pe viitor cand mai am nevoie tot la domnul voi apela ! Recomand cu încredere!",
      stars: 5
    },
  },
  {
    title: "Prize, iluminat & montaj",
    slug: "prize-iluminat-montaj",
    description: "Montaj profesional de prize, lustre și electrocasnice în județul Mureș",
    longDescription: "Instalăm orice echipament electric rapid și sigur, de la lustre complexe la plite cu inducție.",
    icon: "Lightbulb",
    image: "/images/services/iluminat.png",
    benefits: ["Montaj estetic", "Conectare sigură", "Verificare post-montaj", "Disponibilitate rapidă"],
    problems: [
      "Ai cumpărat lustre noi",
      "Vrei prize suplimentare",
      "Montaj plită/cuptor electric",
      "Instalare benzi LED",
      "Senzori de mișcare/lumină"
    ],
    solution: "Montăm orice accesoriu electric cu atenție la detalii, asigurând o funcționare perfectă.",
    pricingExpectation: "Tarife clare pentru manoperă, comunicate la telefon sau pe WhatsApp.",
    relevantReview: {
      author: "Mirabela Popa",
      text: "Profesionist, punctual și cu mult bun simț. Recomand cu încredere!",
      stars: 5
    },
  },
];

export const SERVICE_AREAS = [
  "Târgu Mureș", "Sighișoara", "Reghin", "Ludovic", "Târnăveni", "Iernut", "Sărmașu", "Sâncraiu de Mureș", "Sântana de Mureș", "Cristești", "Ungheni", "Livezeni", "Corunca", "Bărdești"
];
