'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/constants';

const projects = [
  {
    title: "Instalație electrică apartament",
    location: "Târgu Mureș",
    type: "Rezidențial",
    imageBefore: "/images/services/tablou-electric.jpg", // placeholder for before
    imageAfter: "/images/services/instalatii-electrice.png",
  },
  {
    title: "Modernizare tablou electric",
    location: "Târgu Mureș",
    type: "Reparație",
    imageBefore: "/images/services/urgente-electrice.jpg",
    imageAfter: "/images/services/tablou-electric.jpg",
  },
  {
    title: "Iluminat LED arhitectural",
    location: "Târgu Mureș",
    type: "Design",
    imageBefore: "/images/services/instalatii-electrice.png",
    imageAfter: "/images/services/iluminat.png",
  },
];

import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-24 bg-brand-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold tracking-tight text-brand-dark sm:text-[45px]">
            Proiectele noastre înainte și după
          </h2>
          <p className="mt-4 text-slate-600 text-[18px] sm:text-[20px] max-w-2xl mx-auto font-medium">
            De la instalații periculoase la tablouri electrice sigure și moderne. Glisați pentru a vedea diferența.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col mx-auto border border-slate-100"
            >
              <BeforeAfterSlider
                before={project.imageBefore}
                after={project.imageAfter}
                alt={`${project.title} – ${project.location}`}
              />

              <div className="p-6 sm:p-8">
                <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">{project.type}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-1">{project.title}</h3>
                <p className="text-sm text-slate-500 font-medium">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-blue px-12 py-4 text-[18px] text-white font-bold rounded-lg hover:bg-brand-blue-deep transition-all shadow-xl hover:-translate-y-1"
          >
            Solicită o estimare pentru proiectul tău
          </a>
        </div>
      </div>
    </section>
  );
}
