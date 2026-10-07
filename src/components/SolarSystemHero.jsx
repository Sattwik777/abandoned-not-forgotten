import React, { useState } from 'react';
import { Rocket, Sparkles, Compass, ChevronDown, Globe } from 'lucide-react';

/**
 * SolarSystemHero
 * Interactive orbital view of our Solar System with the Sun, planets,
 * and highlighted Moon and Mars cosmic waypoints.
 */
export default function SolarSystemHero({ onJumpToMoon, onJumpToMars, onBeginJourney }) {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center max-w-5xl mx-auto py-12 px-4 select-none">
      
      {/* Top Hackathon Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 backdrop-blur-md shadow-lg animate-fadeIn">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>NASA Space Apps Challenge 2026</span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 leading-tight">
        Abandoned but <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400">
          Not Forgotten
        </span>
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
        Across the desolate dust of the Moon and Mars rest dozens of silent robotic pioneers. 
        Click a world in the Solar System below to travel to its historic resting grounds!
      </p>

      {/* INTERACTIVE ORBITAL SOLAR SYSTEM CANVAS / DIAGRAM */}
      <div className="relative w-full max-w-2xl aspect-[16/9] my-4 rounded-3xl bg-slate-950/80 border border-slate-800 p-4 overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Background Starfield */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Central Sun */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 shadow-[0_0_45px_rgba(251,191,36,0.8)] animate-pulse flex items-center justify-center">
            <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest font-mono">
              SUN
            </span>
          </div>
        </div>

        {/* Orbit Ring 1: Mercury */}
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-slate-800/80 pointer-events-none" />

        {/* Orbit Ring 2: Venus */}
        <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-slate-800/80 pointer-events-none" />

        {/* Orbit Ring 3: Earth & Moon (Target Destination 1!) */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/30 animate-spin-slow">
          {/* Earth & Moon System */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer group"
            onClick={onJumpToMoon}
            onMouseEnter={() =>
              setHoveredPlanet({
                name: 'Moon & Earth System',
                distance: '384,400 km from Earth',
                artifacts: '70+ Lunar Landers & Rovers',
                body: 'moon'
              })
            }
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            {/* Earth */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">🌍</span>
            </div>

            {/* Orbiting Moon */}
            <div className="w-5 h-5 rounded-full bg-slate-300 border border-white shadow-[0_0_12px_rgba(255,255,255,0.8)] flex items-center justify-center animate-bounce">
              <span className="text-[7px]">🌕</span>
            </div>

            {/* Pulsing Tag */}
            <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-[9px] font-bold border border-cyan-600 shadow-md">
              THE MOON (Click!)
            </span>
          </div>
        </div>

        {/* Orbit Ring 4: Mars (Target Destination 2!) */}
        <div 
          className="absolute w-88 h-88 sm:w-[440px] sm:h-[440px] rounded-full border border-amber-500/30 animate-spin-slow"
          style={{ animationDuration: '35s' }}
        >
          {/* Mars & Moons */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 cursor-pointer group"
            onClick={onJumpToMars}
            onMouseEnter={() =>
              setHoveredPlanet({
                name: 'Mars (The Red Planet)',
                distance: '225 Million km from Earth',
                artifacts: 'Opportunity, Spirit, InSight, Viking, Sojourner',
                body: 'mars'
              })
            }
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 shadow-[0_0_18px_rgba(239,68,68,0.7)] flex items-center justify-center animate-pulse">
              <span className="text-[8px] font-bold text-white">🔴</span>
            </div>

            <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono text-[9px] font-bold border border-amber-600 shadow-md">
              MARS (Click!)
            </span>
          </div>
        </div>

        {/* Hovered Planet Info Tag Overlay */}
        {hoveredPlanet && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 bg-slate-900/95 border border-cyan-500/50 rounded-xl px-4 py-2 text-xs font-mono backdrop-blur-md shadow-xl text-center">
            <span className="font-bold text-white block">{hoveredPlanet.name}</span>
            <span className="text-slate-400 text-[10px] block">{hoveredPlanet.distance}</span>
            <span className="text-amber-300 text-[10px] font-semibold">{hoveredPlanet.artifacts}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
        <button
          onClick={onBeginJourney}
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5"
        >
          <Rocket className="w-4 h-4" />
          <span>Begin the Cosmic Journey</span>
        </button>

        <button
          onClick={onJumpToMoon}
          className="px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-slate-700 font-bold text-xs flex items-center gap-2 backdrop-blur shadow transition"
        >
          <span>🌕 Jump to Moon Monuments</span>
        </button>

        <button
          onClick={onJumpToMars}
          className="px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-slate-700 font-bold text-xs flex items-center gap-2 backdrop-blur shadow transition"
        >
          <span>🔴 Jump to Mars Monuments</span>
        </button>
      </div>

      <div
        className="mt-8 flex flex-col items-center text-slate-400 text-xs font-mono animate-bounce cursor-pointer"
        onClick={onBeginJourney}
      >
        <span>Scroll down to enter planetary atmosphere</span>
        <ChevronDown className="w-4 h-4 text-amber-400 mt-1" />
      </div>
    </section>
  );
}
