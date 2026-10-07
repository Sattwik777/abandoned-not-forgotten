import React, { useState } from 'react';
import { TIMELINE_ERAS } from '../data/timelineData';
import { Clock, ArrowRight, MapPin } from 'lucide-react';

/**
 * TimelineSection Component
 * Cinematic mission timeline covering 1960s to 2020s.
 * Filterable by decade, highlighting historical missions, equipment, discoveries, and legacy.
 */
export default function TimelineSection({ onSelectMission }) {
  const [activeEraId, setActiveEraId] = useState(TIMELINE_ERAS[0].id);

  const activeEra = TIMELINE_ERAS.find((e) => e.id === activeEraId) || TIMELINE_ERAS[0];

  return (
    <section id="timeline-section" className="py-12 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>CHRONOLOGY OF OFFWORLD EXPLORATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
          Mission Timeline
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Six decades of robotic courage and scientific discovery across the Moon and Mars.
        </p>
      </div>

      {/* Era Selectors */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
        {TIMELINE_ERAS.map((era) => {
          const isSelected = era.id === activeEraId;
          return (
            <button
              key={era.id}
              onClick={() => setActiveEraId(era.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-bold transition border cursor-pointer ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {era.eraName}
            </button>
          );
        })}
      </div>

      {/* Active Era Spotlight */}
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
        <div className="border-b border-slate-800 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
              {activeEra.eraName} EPOCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {activeEra.headline}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-sans">
            {activeEra.description}
          </p>
        </div>

        {/* Missions in this Era */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeEra.missions.map((m) => (
            <div
              key={m.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/40 transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold border ${
                    m.world === 'moon'
                      ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                      : 'bg-red-950/80 text-orange-300 border-red-500/40'
                  }`}>
                    {m.world === 'moon' ? '🌕 The Moon' : '🔴 Mars'}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {m.date}
                  </span>
                </div>

                <h4 className="text-lg font-black text-white">{m.name}</h4>

                <div className="bg-slate-900/90 rounded-xl p-3 border-l-2 border-amber-400 text-xs text-slate-300 leading-relaxed">
                  <strong>Pivotal Science:</strong> {m.achievement}
                </div>

                <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{m.location}</span>
                </p>

                <p className="text-[11px] text-slate-500 font-mono">
                  Status: <span className="text-slate-300">{m.status}</span>
                </p>
              </div>

              {onSelectMission && m.id !== 'artemis-heritage' && (
                <button
                  onClick={() => onSelectMission(m.id)}
                  className="w-full mt-3 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Explore Mission Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
