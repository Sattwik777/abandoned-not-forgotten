import React, { useState } from 'react';
import { SCIENCE_DOMAINS } from '../data/scienceData';
import { 
  Droplets, Mountain, CloudRain, FlaskConical, Globe, Dna, Compass, Sparkles 
} from 'lucide-react';

const iconMap = {
  Droplets,
  Mountain,
  CloudRain,
  FlaskConical,
  Globe,
  Dna,
  Compass
};

/**
 * ScienceSection Component
 * Interactive exhibition answering: "WHAT DID THESE MACHINES TEACH US?"
 * Covers the 7 planetary science disciplines:
 * Water, Geology, Climate, Chemistry, Planetary History, Habitability, Space Exploration.
 * Clearly articulates: QUESTION, EVIDENCE, DISCOVERY, and WHY IT MATTERS.
 */
export default function ScienceSection() {
  const [selectedDomainId, setSelectedDomainId] = useState(SCIENCE_DOMAINS[0].id);

  const activeDomain = SCIENCE_DOMAINS.find((d) => d.id === selectedDomainId) || SCIENCE_DOMAINS[0];
  const DomainIcon = iconMap[activeDomain.icon] || Droplets;

  return (
    <section id="science-section" className="py-12 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PLANETARY DISCOVERY ARCHIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
          What Did These Machines Teach Us?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          These machines may have been left behind, but their evidence transformed our understanding of the solar system. Select a scientific domain to explore the questions they answered.
        </p>
      </div>

      {/* Domain Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-thin">
        {SCIENCE_DOMAINS.map((domain) => {
          const isSelected = domain.id === selectedDomainId;
          const IconComp = iconMap[domain.icon] || Droplets;
          return (
            <button
              key={domain.id}
              onClick={() => setSelectedDomainId(domain.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-mono whitespace-nowrap transition flex items-center gap-2 border cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <IconComp className="w-3.5 h-3.5 shrink-0" />
              <span>{domain.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Domain Spotlight Card */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
        
        {/* Domain Banner */}
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${activeDomain.themeColor} flex items-center justify-center shadow-xl text-white`}>
              <DomainIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                SCIENCE DISCIPLINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeDomain.title}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-sans">
            {activeDomain.summary}
          </p>
        </div>

        {/* Topics List with 4 Pillars: Question -> Evidence -> Discovery -> Why It Matters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeDomain.topics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-5 sm:p-6 space-y-5 hover:border-cyan-500/50 transition flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Topic Title */}
                <h4 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
                  <span className="text-cyan-400 text-sm mt-1">▸</span>
                  <span>{topic.title}</span>
                </h4>

                {/* 1. QUESTION */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border-l-4 border-cyan-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 block font-bold mb-1">
                    ❓ THE QUESTION
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {topic.question}
                  </p>
                </div>

                {/* 2. EVIDENCE */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border-l-4 border-amber-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 block font-bold mb-1">
                    📡 THE EVIDENCE & MISSION
                  </span>
                  <p className="text-xs text-white font-mono font-bold">
                    {topic.evidence.mission}
                  </p>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                    <strong>Instruments:</strong> {topic.evidence.equipment}
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                    Site: {topic.evidence.site}
                  </p>
                </div>

                {/* 3. DISCOVERY */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border-l-4 border-emerald-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 block font-bold mb-1">
                    🔬 WHAT WAS LEARNED
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    {topic.discovery}
                  </p>
                </div>

                {/* 4. WHY IT MATTERS */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border-l-4 border-purple-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 block font-bold mb-1">
                    💡 WHY IT MATTERS
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {topic.whyItMatters}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
