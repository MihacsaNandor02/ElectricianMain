import { BRAND } from '@/lib/constants';

const projects = [
  {
    title: "Instalație electrică apartament",
    location: "Târgu Mureș",
    type: "Rezidențial",
    image: "/images/services/instalatii-electrice.png",
  },
  {
    title: "Reparație tablou electric",
    location: "Târgu Mureș",
    type: "Reparație",
    image: "/images/services/tablou-electric.jpg",
  },
  {
    title: "Intervenție urgență",
    location: "Târgu Mureș",
    type: "Urgență",
    image: "/images/services/urgente-electrice.jpg",
  },
  {
    title: "Iluminat LED modern",
    location: "Târgu Mureș",
    type: "Design",
    image: "/images/services/iluminat.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-brand-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold tracking-tight text-brand-dark sm:text-[45px]">
            Proiecte recente
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Rezultate reale pentru clienții noștri din județul Mureș.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group max-w-sm sm:max-w-none w-full relative bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col mx-auto"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} – ${project.location}`}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-1">{project.type}</div>
                    <div className="text-lg font-bold leading-tight">{project.title}</div>
                    <div className="text-sm opacity-80">{project.location}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">{project.type}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">{project.title}</h3>
                <p className="text-sm text-slate-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
