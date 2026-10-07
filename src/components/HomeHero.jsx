import React from 'react';
import { 
  ArrowDown, ChevronRight, Sparkles, Orbit 
} from 'lucide-react';
import SolarSystemView from './SolarSystemView';
import { HARDWARE_REGISTRY } from '../data/hardwareData';
import NASAImage from './NASAImage';

/**
 * HomeHero Component
 * Cinematic Space Journey:
 * GALAXY -> DEEP SPACE -> SOLAR SYSTEM -> MOON & MARS
 * Displays exact prompt titles, taglines, quotes, and primary/secondary CTAs:
 * - "OFFWORLD LEGACY"
 * - "Exploring the machines that carried science beyond Earth."
 * - "Somewhere beyond Earth, machines are still waiting."
 * - Primary CTA: "EXPLORE THEIR STORIES"
 * - Secondary CTA: "ENTER THE SOLAR SYSTEM"
 */
export default function HomeHero({
  onExploreStories,
  onEnterSolarSystem,
  onSelectDestination,
  onSelectArtifact
}) {

  const featuredArtifacts = HARDWARE_REGISTRY.slice(0, 4);

  return (
    <div className="relative text-white select-none">
      
      {/* 1. CINEMATIC DEEP SPACE HERO STAGE */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 relative">
        
        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#03060d]/50 to-[#03060d] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* NASA Challenge Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest shadow-xl animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>NASA Space Apps Challenge 2026 • Abandoned but not Forgotten</span>
          </div>

          {/* PROJECT TITLE */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none font-sans drop-shadow-2xl">
            OFFWORLD <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              LEGACY
            </span>
          </h1>

          {/* OFFICIAL TAGLINE */}
          <p className="text-lg sm:text-2xl text-slate-200 font-sans font-light tracking-wide max-w-2xl mx-auto">
            Exploring the machines that carried science beyond Earth.
          </p>

          {/* QUOTE */}
          <p className="text-sm sm:text-base text-cyan-300/90 font-serif italic max-w-lg mx-auto">
            "Somewhere beyond Earth, machines are still waiting."
          </p>

          {/* PRIMARY & SECONDARY CALL TO ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={onExploreStories}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105"
            >
              <span>EXPLORE THEIR STORIES</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onEnterSolarSystem}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer hover:border-cyan-400/50"
            >
              <Orbit className="w-4 h-4 text-amber-400" />
              <span>ENTER THE SOLAR SYSTEM</span>
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-12 flex flex-col items-center gap-2 opacity-70 animate-bounce">
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
              Scroll To Journey Through Space
            </span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* 2. SCROLL-DRIVEN NARRATIVE BRIDGE */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center space-y-16">
        
        <div className="p-8 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md shadow-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold">
            PROLOGUE I
          </span>
          <p className="text-2xl sm:text-3xl font-serif italic text-white">
            "Every explorer leaves something behind."
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-lg mx-auto">
            From tracks pressed into fine gray regolith to wheels encrusted in reddish dust, robotic explorers paved the path for human curiosity.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md shadow-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block font-bold">
            PROLOGUE II
          </span>
          <p className="text-2xl sm:text-3xl font-serif italic text-white">
            "Some of those explorers never came home."
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-lg mx-auto">
            They were built with one-way tickets into the solar system. Their mission was to test the limits of physics, biology, and chemistry in extreme environments.
          </p>
        </div>

      </section>

      {/* 3. INTERACTIVE SOLAR SYSTEM STAGE */}
      <section id="solar-system-stage" className="py-16 px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold mb-1">
            CELESTIAL RECONNAISSANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Solar System
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Select a world below to embark on a planetary journey toward its historic resting grounds.
          </p>
        </div>

        <SolarSystemView
          onSelectDestination={onSelectDestination}
          onBeginStories={onExploreStories}
        />
      </section>

      {/* 4. DESTINATION PORTALS (MOON & MARS) */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Moon Portal Card */}
          <div
            onClick={() => onSelectDestination('moon')}
            className="group relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/80 p-8 overflow-hidden hover:border-cyan-400 transition-all duration-500 shadow-2xl cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🌕</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                  384,400 KM AWAY
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition">
                The Moon
              </h3>
              <p className="text-sm text-slate-300 font-serif italic">
                "Humanity came here. Some machines never left."
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Explore the Apollo 15 electric rover at Hadley Rille, the Apollo 11 laser mirror at Tranquility Base, and the Surveyor 3 lander.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
              <span>Enter Moon Experience →</span>
            </div>
          </div>

          {/* Mars Portal Card */}
          <div
            onClick={() => onSelectDestination('mars')}
            className="group relative rounded-3xl bg-gradient-to-b from-slate-900 to-[#120606] border border-slate-700/80 p-8 overflow-hidden hover:border-orange-500 transition-all duration-500 shadow-2xl cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🔴</span>
                <span className="text-xs font-mono text-orange-400 bg-red-950 px-3 py-1 rounded-full border border-red-800">
                  225,000,000 KM AWAY
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-orange-300 transition">
                Mars
              </h3>
              <p className="text-sm text-orange-200 font-serif italic">
                "Where robotic explorers roam the silent red deserts."
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Explore Opportunity's marathon track, Spirit's silica discovery, InSight's seismic dome, and Viking 1's historic touchdown.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between text-xs font-mono text-orange-400 font-bold group-hover:translate-x-1 transition-transform">
              <span>Enter Mars Experience →</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FEATURED PIONEERS PREVIEW */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold mb-1">
              HISTORIC EXHIBIT HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Pioneers of the High Frontier
            </h2>
          </div>
          <button
            onClick={onExploreStories}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline font-bold cursor-pointer"
          >
            View Complete Collection ({HARDWARE_REGISTRY.length} Artifacts) →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredArtifacts.map((mission) => {
            const world = mission.world || mission.celestialBody;
            const img = mission.images?.[0] || { url: world === 'moon' ? '/maps/moon.jpg' : '/maps/mars.jpg' };
            return (
              <div
                key={mission.id}
                onClick={() => onSelectArtifact(mission.id)}
                className="group rounded-2xl bg-slate-900/90 border border-slate-800 p-4 space-y-3 hover:border-cyan-400 transition cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl overflow-hidden mb-3">
                    <NASAImage
                      src={img.url}
                      alt={mission.name}
                      caption={mission.name}
                      credit={img.credit}
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
                    <span>{world === 'moon' ? '🌕 The Moon' : '🔴 Mars'}</span>
                    <span>{mission.type.toUpperCase()}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition mt-1">
                    {mission.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                    {mission.story?.hook || mission.purpose}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                  <span>Read Story</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. SCIENCE & LEGACY SUMMARY SECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block font-bold">
            THE SCIENTIFIC PRINCIPLE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            "These machines were left behind, but the science they produced continues to matter."
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
            Every mission answered a fundamental question about planetary history, water, and habitability. Their discoveries form the foundation for NASA's Artemis program and future human missions to Mars.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={onExploreStories}
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              Start Exploring All Machines
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
