import React, { useState } from 'react';
import { Compass, ChevronRight } from 'lucide-react';

/**
 * SolarSystemView Component
 * Interactive heliocentric solar system with Sun, Mercury, Venus, Earth-Moon system, and Mars.
 * Clicking the Moon or Mars triggers the cinematic descent to that celestial body.
 */
export default function SolarSystemView({ onSelectDestination }) {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 p-6 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      {/* HUD Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-4 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-300">
            SOLAR SYSTEM TELEMETRY • ORBITAL SECTOR 04
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Select target destination to initiate orbital insertion
        </span>
      </div>

      {/* Orbit Diagram Canvas / Stage */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-gradient-to-b from-[#03060f] via-slate-950 to-[#050914] border border-slate-800/60 overflow-hidden flex items-center justify-center select-none shadow-inner">
        {/* Subtle coordinate grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15" />

        {/* Center Sun */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 shadow-[0_0_50px_rgba(251,191,36,0.9)] animate-pulse flex items-center justify-center">
            <span className="text-[9px] font-black font-mono text-slate-950 tracking-wider">
              SUN
            </span>
          </div>
        </div>

        {/* Orbit 1: Mercury */}
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-slate-800/80 pointer-events-none">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-400 opacity-60" title="Mercury" />
        </div>

        {/* Orbit 2: Venus */}
        <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-slate-800/80 pointer-events-none">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-200/80 shadow-[0_0_8px_rgba(251,191,36,0.4)]" title="Venus" />
        </div>

        {/* Orbit 3: Earth & Moon (Target Destination: MOON) */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/40 animate-spin-slow pointer-events-none">
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer pointer-events-auto p-2 group"
            onClick={() => onSelectDestination('moon')}
            onMouseEnter={() =>
              setHoveredPlanet({
                name: "THE MOON (Earth System)",
                distance: "384,400 km from Earth",
                machines: "Apollo 11 LRRR, Apollo 15 LRV, Apollo 17 ALSEP, Surveyor 3",
                tag: "DESTINATION AVAILABLE",
                color: "text-cyan-300"
              })
            }
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            {/* Earth */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-400 shadow-[0_0_16px_rgba(6,182,212,0.8)] flex items-center justify-center">
              <span className="text-[10px]">🌍</span>
            </div>

            {/* Orbiting Moon */}
            <div className="w-6 h-6 rounded-full bg-slate-100 border border-white shadow-[0_0_15px_rgba(255,255,255,0.9)] flex items-center justify-center animate-bounce">
              <span className="text-[9px]">🌕</span>
            </div>

            {/* Pulsing Target Pill */}
            <div className="bg-cyan-950/90 group-hover:bg-cyan-900 border border-cyan-400 text-cyan-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider shadow-lg flex items-center gap-1 transition">
              <span>MOON</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Orbit 4: Mars (Target Destination: MARS) */}
        <div
          className="absolute w-88 h-88 sm:w-[440px] sm:h-[440px] rounded-full border border-red-500/40 animate-spin-slow pointer-events-none"
          style={{ animationDuration: '38s' }}
        >
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer pointer-events-auto p-2 group"
            onClick={() => onSelectDestination('mars')}
            onMouseEnter={() =>
              setHoveredPlanet({
                name: "MARS (The Red Planet)",
                distance: "225 Million km average from Earth",
                machines: "Opportunity, Spirit, InSight, Viking 1, Sojourner, Phoenix",
                tag: "DESTINATION AVAILABLE",
                color: "text-amber-400"
              })
            }
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            {/* Mars */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-amber-600 shadow-[0_0_20px_rgba(239,68,68,0.9)] flex items-center justify-center animate-pulse">
              <span className="text-[10px]">🔴</span>
            </div>

            {/* Pulsing Target Pill */}
            <div className="bg-red-950/90 group-hover:bg-red-900 border border-orange-400 text-orange-200 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider shadow-lg flex items-center gap-1 transition">
              <span>MARS</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Bottom Interactive Telemetry Card on Hover */}
        <div className="absolute bottom-3 inset-x-3 bg-slate-950/90 border border-slate-800 rounded-xl p-3 backdrop-blur-md flex items-center justify-between flex-wrap gap-2 text-left">
          {hoveredPlanet ? (
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono font-black ${hoveredPlanet.color}`}>
                  {hoveredPlanet.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {hoveredPlanet.distance}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans mt-0.5">
                Key Pioneers: {hoveredPlanet.machines}
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>Hover or click a target world to launch flight descent.</span>
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => onSelectDestination('moon')}
              className="px-3 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/50 text-cyan-300 text-xs font-mono font-bold transition cursor-pointer"
            >
              🌕 Jump to Moon
            </button>
            <button
              onClick={() => onSelectDestination('mars')}
              className="px-3 py-1.5 rounded-lg bg-red-950 hover:bg-red-900 border border-red-500/50 text-orange-300 text-xs font-mono font-bold transition cursor-pointer"
            >
              🔴 Jump to Mars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
