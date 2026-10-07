import React, { useState } from 'react';
import { 
  Rocket, Map, BookOpen, Volume2, VolumeX, 
  Database, GraduationCap, Award, Radio, Sparkles 
} from 'lucide-react';
import { spaceAudio } from '../utils/audioSystem';

export default function Navbar({ 
  badgeCount, 
  totalBadges, 
  onOpenDataModal, 
  onOpenEducatorModal,
  onScrollToMap,
  onScrollToStories
}) {
  const [isWindActive, setIsWindActive] = useState(false);

  const toggleMartianWind = () => {
    if (isWindActive) {
      spaceAudio.stopMartianWind();
      setIsWindActive(false);
    } else {
      spaceAudio.startMartianWind();
      setIsWindActive(true);
    }
  };

  const playChime = () => {
    spaceAudio.playQuindarTone();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto bg-slate-950/80 border border-slate-700/60 backdrop-blur-xl rounded-2xl px-4 py-2.5 shadow-2xl">
        
        {/* Brand / Logo */}
        <div 
          onClick={onScrollToStories}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
            <Rocket className="w-5 h-5 -rotate-45" />
          </div>
          <div>
            <h1 className="text-sm font-black text-white tracking-wider uppercase flex items-center gap-1.5">
              <span>Echoes in the Dust</span>
              <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                NASA
              </span>
            </h1>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
              Silent Scouts of the Moon & Mars
            </p>
          </div>
        </div>

        {/* Center Navigation Shortcuts */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={onScrollToStories}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Stories</span>
          </button>
          <button
            onClick={onScrollToMap}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Map className="w-3.5 h-3.5 text-amber-400" />
            <span>Planetary Map</span>
          </button>
        </div>

        {/* Right Tools & Extras */}
        <div className="flex items-center gap-2">
          
          {/* Ambient Wind Synthesizer */}
          <button
            onClick={toggleMartianWind}
            className={`p-2 rounded-xl text-xs font-mono transition flex items-center gap-1.5 border ${
              isWindActive
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 animate-pulse'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Toggle authentic Martian Wind sound (InSight pressure acoustics)"
          >
            {isWindActive ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden lg:inline text-[11px] font-bold">
              {isWindActive ? 'Martian Wind: ON' : 'Wind Audio'}
            </span>
          </button>

          {/* Apollo Radio Quindar tone test */}
          <button
            onClick={playChime}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition"
            title="Play Apollo Quindar Radio Beep"
          >
            <Radio className="w-4 h-4" />
          </button>

          {/* Badges Counter */}
          <div className="flex items-center gap-1.5 bg-amber-950/60 border border-amber-500/40 text-amber-300 px-2.5 py-1.5 rounded-xl text-xs font-bold font-mono">
            <Award className="w-3.5 h-3.5 fill-current" />
            <span>{badgeCount}/{totalBadges}</span>
          </div>

          {/* NASA Data Portal Modal Trigger */}
          <button
            onClick={onOpenDataModal}
            className="px-2.5 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 transition text-xs font-bold flex items-center gap-1"
            title="View verified NASA Open Datasets"
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Data</span>
          </button>

          {/* Educator Modal Trigger */}
          <button
            onClick={onOpenEducatorModal}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 transition"
            title="Educator & Teacher Guide"
          >
            <GraduationCap className="w-4 h-4" />
          </button>

        </div>

      </div>
    </header>
  );
}
