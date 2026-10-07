import React, { useState } from 'react';
import { DID_YOU_KNOW_FACTS, MISSION_CHALLENGES } from '../data/educationalData';
import LaserBounceLab from './LaserBounceLab';
import DustCleaningLab from './DustCleaningLab';
import { 
  GraduationCap, HelpCircle, CheckCircle2, 
  XCircle, Award, Lightbulb, Zap, Wrench, Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';

/**
 * EducationalSection Component
 * "LEARN LIKE A SPACE SCIENTIST"
 * Features:
 * - Did You Know? flip cards
 * - Mission Challenge: "What Would You Do?" scenario decision simulator
 * - Real Physics Interactive Labs (Laser Bounce Lab & Dust Cleaning Lab)
 */
export default function EducationalSection({ unlockedBadgesCount = 0, totalBadges = 10 }) {
  const [activeTab, setActiveTab] = useState('challenges'); // 'challenges' | 'facts' | 'labs'
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentChallenge = MISSION_CHALLENGES[selectedChallengeIndex];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
    if (option.isCorrect) {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNextChallenge = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setSelectedChallengeIndex((prev) => (prev + 1) % MISSION_CHALLENGES.length);
  };

  return (
    <section id="educational-section" className="py-12 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>STEM EDUCATOR & STUDENT LAB</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
          Learn Like a Space Scientist
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Solve real mission emergencies, discover fun space facts, and run interactive physics experiments.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-slate-900 border border-amber-500/40 text-amber-300 px-4 py-2 rounded-2xl text-xs font-mono font-bold">
          <Award className="w-4 h-4 fill-current text-amber-400" />
          <span>Cosmic Explorer Logbook: {unlockedBadgesCount} of {totalBadges} Mission Badges Unlocked</span>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setActiveTab('challenges')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-mono font-bold transition border cursor-pointer flex items-center gap-2 ${
            activeTab === 'challenges'
              ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-lg shadow-emerald-400/20'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Mission Challenge: What Would You Do?</span>
        </button>

        <button
          onClick={() => setActiveTab('facts')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-mono font-bold transition border cursor-pointer flex items-center gap-2 ${
            activeTab === 'facts'
              ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-lg shadow-emerald-400/20'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>Did You Know?</span>
        </button>

        <button
          onClick={() => setActiveTab('labs')}
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-mono font-bold transition border cursor-pointer flex items-center gap-2 ${
            activeTab === 'labs'
              ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-lg shadow-emerald-400/20'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Interactive Physics Labs</span>
        </button>
      </div>

      {/* 1. MISSION CHALLENGES: WHAT WOULD YOU DO? */}
      {activeTab === 'challenges' && (
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              SCENARIO {selectedChallengeIndex + 1} OF {MISSION_CHALLENGES.length}
            </span>
            <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold border ${
              currentChallenge.world === 'moon'
                ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                : 'bg-red-950/80 text-orange-300 border-red-500/40'
            }`}>
              {currentChallenge.world === 'moon' ? '🌕 Lunar Scenario' : '🔴 Martian Scenario'}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
            {currentChallenge.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
            {currentChallenge.context}
          </p>

          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 mb-6">
            <span className="text-xs font-mono font-bold text-amber-300 block mb-1">
              MISSION DILEMMA:
            </span>
            <p className="text-sm font-semibold text-white font-sans">
              {currentChallenge.problem}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentChallenge.options.map((opt) => {
              const isChosen = selectedOption?.id === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-sans transition cursor-pointer flex items-start gap-3 ${
                    showFeedback && opt.isCorrect
                      ? 'bg-emerald-950/60 border-emerald-400 text-emerald-200 font-semibold'
                      : showFeedback && isChosen && !opt.isCorrect
                      ? 'bg-rose-950/60 border-rose-400 text-rose-200'
                      : isChosen
                      ? 'bg-slate-800 border-cyan-400 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span className="font-mono font-bold uppercase shrink-0 text-cyan-400">
                    [{opt.id.toUpperCase()}]
                  </span>
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback Display */}
          {showFeedback && (
            <div className={`p-4 rounded-xl border text-xs leading-relaxed mb-6 ${
              selectedOption?.isCorrect
                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200'
                : 'bg-rose-950/70 border-rose-500 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-bold mb-1">
                {selectedOption?.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Decision Evaluated: Flight Controller Approved!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>Decision Evaluated: Engineering Conflict</span>
                  </>
                )}
              </div>
              <p>{selectedOption?.feedback}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleNextChallenge}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-bold transition cursor-pointer"
            >
              Next Scenario →
            </button>
          </div>
        </div>
      )}

      {/* 2. DID YOU KNOW? CURIOSITY CARDS */}
      {activeTab === 'facts' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {DID_YOU_KNOW_FACTS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold border ${
                    item.category === 'MOON'
                      ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                      : 'bg-red-950/80 text-orange-300 border-red-500/40'
                  }`}>
                    {item.category === 'MOON' ? '🌕 Moon Curiosity' : '🔴 Mars Curiosity'}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-base font-black text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.fact}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Verified NASA Historical Fact</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. INTERACTIVE PHYSICS LABS */}
      {activeTab === 'labs' && (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Lab 1: Lunar Laser Ranging Speed-of-Light Simulator</span>
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Simulate firing an Earth observatory laser pulse to Apollo 11's Retroreflector and calculate the real round-trip travel time!
            </p>
            <LaserBounceLab />
          </div>

          <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-amber-400" />
              <span>Lab 2: Martian Dust Devil Solar Recovery Simulator</span>
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Simulate Martian atmospheric dust accumulation on Opportunity's solar panels and summon a passing dust devil whirlwind to clear the array!
            </p>
            <DustCleaningLab />
          </div>
        </div>
      )}
    </section>
  );
}
