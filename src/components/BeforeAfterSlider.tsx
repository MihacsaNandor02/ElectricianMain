'use client';

import { useState } from 'react';

export default function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden group rounded-xl shadow-lg border border-slate-200">
      {/* After image (background) */}
      <img src={after} alt={`După: ${alt}`} className="absolute inset-0 w-full h-full object-cover" />

      {/* Before image (foreground, clipped) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={before} alt={`Înainte: ${alt}`} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-slate-200">
          <div className="flex gap-2">
            <div className="w-2 h-2 border-t-2 border-l-2 border-brand-blue rotate-[-45deg]" />
            <div className="w-2 h-2 border-t-2 border-r-2 border-brand-blue rotate-[45deg]" />
          </div>
        </div>
      </div>

      {/* Invisible range input for interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider pointer-events-none">
        Înainte
      </div>
      <div className="absolute top-4 right-4 bg-brand-blue/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider pointer-events-none">
        După
      </div>
    </div>
  );
}
