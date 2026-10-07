import React from 'react';
import { HARDWARE_REGISTRY } from '../data/hardwareData';
import NASAImage from './NASAImage';
import { MapPin, ChevronRight, ArrowLeft } from 'lucide-react';

/**
 * MoonDestinationView Component
 * Cinematic Destination Experience: "DESTINATION: MOON"
 * "Humanity came here. Some machines never left."
 */
export default function MoonDestinationView({ onSelectArtifact, onBackToSolarSystem }) {
  const moonMissions = HARDWARE_REGISTRY.filter((m) => (m.world || m.celestialBody) === 'moon');

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto space-y-12">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToSolarSystem}
          className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5 transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Solar System</span>
        </button>

        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
          DESTINATION: LUNAR REGOLITH
        </span>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
          COSMIC WAYPOINT • 384,400 KM FROM EARTH
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          DESTINATION: MOON
        </h1>
        <p className="text-xl sm:text-2xl text-slate-200 font-serif italic">
          "Humanity came here. Some machines never left."
        </p>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
          In the silent vacuum of the Moon, footsteps remain untouched by wind. Resting beside them are robotic eyes, lunar buggies, and laser mirrors that continue to teach Earth new science.
        </p>
      </div>

      {/* Featured Lunar Monuments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {moonMissions.map((mission) => {
          const img = mission.images?.[0] || { url: '/maps/moon.jpg' };
          return (
            <div
              key={mission.id}
              className="bg-slate-900/90 border border-slate-700/80 rounded-3xl overflow-hidden p-6 space-y-4 hover:border-cyan-400 transition shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden">
                  <NASAImage
                    src={img.url}
                    alt={mission.name}
                    caption={mission.purpose}
                    credit={img.credit}
                    aspectRatio="aspect-[16/9]"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>{mission.mission}</span>
                    <span>{mission.launchDate?.split(',')[1] || mission.launchDate}</span>
                  </div>
                  <h3 className="text-xl font-black text-white">{mission.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {mission.story?.hook || mission.purpose}
                  </p>
                </div>

                <div className="bg-slate-950/80 rounded-xl p-3 text-xs font-mono text-slate-400 space-y-1 border border-slate-800">
                  <p className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{mission.location}</span>
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    Coordinates: {mission.latitude?.toFixed(4)}°, {mission.longitude?.toFixed(4)}°
                  </p>
                </div>
              </div>

              <button
                onClick={() => onSelectArtifact(mission.id)}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
              >
                <span>Discover Its Story</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}
