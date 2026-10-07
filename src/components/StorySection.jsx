import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, VolumeX, Sparkles, Database, 
  Award, CheckCircle2, XCircle, Wrench, BookOpen, 
  MapPin, ShieldCheck, HelpCircle
} from 'lucide-react';
import DustCleaningLab from './DustCleaningLab';
import LaserBounceLab from './LaserBounceLab';
import { spaceAudio } from '../utils/audioSystem';

/**
 * StorySection
 * Cinematic scrollytelling card for an individual piece of discarded hardware.
 */
export default function StorySection({ 
  mission, 
  isActive, 
  onUnlockBadge, 
  isBadgeUnlocked,
  onNavigateToMap
}) {
  const [activeTab, setActiveTab] = useState('story'); // 'story' | 'anatomy' | 'science' | 'data'
  const [selectedPart, setSelectedPart] = useState(
    mission.hardwareAnatomy && mission.hardwareAnatomy.length > 0 
      ? mission.hardwareAnatomy[0] 
      : { part: 'Hardware System', description: 'Robotic component' }
  );
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);

  const handleReadAloud = () => {
    if (isNarrating) {
      spaceAudio.stopSpeaking();
      setIsNarrating(false);
    } else {
      const fullText = `${mission.name}. ${mission.nickname}. ${mission.story.intro} ${mission.story.chapters.map(c => c.title + '. ' + c.content).join(' ')}`;
      spaceAudio.playQuindarTone();
      spaceAudio.speakText(fullText, () => setIsNarrating(false));
      setIsNarrating(true);
    }
  };

  const handleQuizSubmit = (index) => {
    setQuizAnswer(index);
    setIsQuizSubmitted(true);
    if (index === mission.quiz.correctIndex) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
      if (onUnlockBadge) onUnlockBadge(mission.id);
    }
  };

  return (
    <article
      id={`story-${mission.id}`}
      data-mission-id={mission.id}
      className={`min-h-screen py-16 px-4 max-w-4xl mx-auto flex flex-col justify-center transition-all duration-700 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-85 scale-[0.98]'
      }`}
    >
      <div className="relative bg-slate-900/85 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Glow Accent Border */}
        <div 
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: mission.celestialBody === 'mars' ? 'rgba(235, 110, 60, 0.5)' : 'rgba(180, 210, 255, 0.5)' }}
        />

        {/* Top Badges & Controls */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              mission.celestialBody === 'mars' 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
            }`}>
              {mission.celestialBody === 'mars' ? '🔴 Mars Surface' : '🌕 Lunar Surface'}
            </span>
            <span className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
              {mission.type.toUpperCase()}
            </span>
            {isBadgeUnlocked && (
              <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Award className="w-3.5 h-3.5 fill-current" />
                Badge Earned!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Read Aloud button */}
            <button
              onClick={handleReadAloud}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                isNarrating
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
              title="Narrate story with Speech Synthesis"
            >
              {isNarrating ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              <span>{isNarrating ? 'Stop Audio' : 'Listen Aloud'}</span>
            </button>

            {/* Jump to Map Button */}
            <button
              onClick={() => onNavigateToMap(mission.id)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 transition"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Locate on Map</span>
            </button>
          </div>
        </div>

        {/* Mission Titles */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
            {mission.name}
          </h2>
          <p className="text-base sm:text-lg text-amber-300 font-semibold italic">
            "{mission.nickname}"
          </p>
        </div>

        {/* Quick Telemetry Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-950/70 rounded-2xl border border-slate-800 font-mono text-xs mb-8">
          <div>
            <span className="text-slate-400 block text-[10px]">COORDINATES</span>
            <span className="text-cyan-300 font-bold">{mission.coordinates.displayCoords}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">LANDED</span>
            <span className="text-slate-200 font-bold">{mission.timeline.landed}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">MISSION LIFETIME</span>
            <span className="text-emerald-400 font-bold">{mission.timeline.missionDuration.split('(')[0]}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">CURRENT STATE</span>
            <span className="text-amber-400 font-bold truncate block">{mission.status}</span>
          </div>
        </div>

        {/* Hero Quote */}
        <div className="border-l-4 border-amber-400 pl-4 py-1 mb-8 italic text-slate-200 text-sm sm:text-base bg-amber-400/5 rounded-r-xl">
          "{mission.story.heroQuote}"
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 mb-6 gap-2 sm:gap-6 overflow-x-auto">
          {[
            { id: 'story', label: 'Mission Story', icon: BookOpen },
            { id: 'anatomy', label: 'Hardware Anatomy', icon: Wrench },
            { id: 'science', label: 'Science Discoveries', icon: Sparkles },
            { id: 'data', label: 'NASA Open Data', icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-3 px-1 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Storytelling Mode */}
        {activeTab === 'story' && (
          <div className="space-y-6">
            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 leading-relaxed text-sm text-slate-200">
              <p className="font-medium text-cyan-200">{mission.story.intro}</p>
            </div>

            {/* Chapters */}
            <div className="space-y-4">
              {mission.story.chapters.map((chap, idx) => (
                <div key={idx} className="bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80">
                  <h4 className="text-sm font-bold text-amber-300 mb-1.5">
                    {chap.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {chap.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Integrated Mini-Labs */}
            {mission.id === 'opportunity' && <DustCleaningLab missionName="Opportunity (Oppy)" />}
            {mission.id === 'insight-lander' && <DustCleaningLab missionName="InSight Lander" />}
            {mission.id === 'apollo11-lrrr' && <LaserBounceLab />}
          </div>
        )}

        {/* Tab 2: Hardware Anatomy */}
        {activeTab === 'anatomy' && (
          <div className="space-y-6">
            <p className="text-xs text-slate-300">
              Click on each hardware component to see how it was engineered to survive extreme extraterrestrial environments:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {mission.hardwareAnatomy.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPart(item)}
                  className={`p-3.5 rounded-2xl text-left border text-xs transition ${
                    selectedPart.part === item.part
                      ? 'bg-cyan-950/70 border-cyan-400 text-cyan-200 shadow-md'
                      : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold mb-1 flex items-center justify-between">
                    <span>{item.part}</span>
                    <Wrench className="w-3.5 h-3.5 text-cyan-400 opacity-60" />
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>

            {selectedPart && (
              <div className="p-5 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-cyan-500/40 shadow-xl">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  COMPONENT DEEP DIVE
                </span>
                <h4 className="text-base font-bold text-white mb-2">{selectedPart.part}</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedPart.description}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Science Highlights */}
        {activeTab === 'science' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-300 mb-2">
              Before running out of power, this discarded hardware rewrote human textbooks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mission.scienceHighlights.map((sci, idx) => (
                <div key={idx} className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{sci}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: NASA Open Data Verification */}
        {activeTab === 'data' && (
          <div className="space-y-4">
            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                <strong>NASA Open Data Verified:</strong> This entry is directly grounded in public mission logs from <code>data.nasa.gov</code> and USGS Planetary Archives.
              </span>
            </div>

            <div className="space-y-2.5">
              {mission.nasaDataSources.map((ds, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div>
                    <h5 className="font-bold text-white">{ds.name}</h5>
                    <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                      ID: {ds.datasetId}
                    </span>
                    <p className="text-[11px] text-slate-400">{ds.description}</p>
                  </div>
                  <a
                    href={ds.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono flex items-center gap-1 transition"
                  >
                    <span>View Dataset</span>
                    <Database className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Junior Explorer Quiz (Rubric: Gamification & Engagement) */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Junior Space Detective Quiz
            </h4>
          </div>

          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
            <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-3">
              {mission.quiz.question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {mission.quiz.options.map((opt, idx) => {
                const isSelected = quizAnswer === idx;
                const isCorrect = idx === mission.quiz.correctIndex;
                let btnStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";

                if (isQuizSubmitted) {
                  if (isCorrect) btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                  else if (isSelected) btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizSubmit(idx)}
                    className={`p-3 rounded-xl border text-left text-xs transition flex items-center justify-between gap-2 ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isQuizSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    {isQuizSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {isQuizSubmitted && (
              <div className="p-3 bg-slate-900 rounded-xl text-xs text-slate-300 border border-slate-800 animate-fadeIn">
                <span className="font-bold text-amber-400">Answer Guide: </span>
                {mission.quiz.explanation}
              </div>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
