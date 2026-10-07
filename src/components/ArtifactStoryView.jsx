import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, VolumeX, Sparkles, Database, Compass, 
  Award, CheckCircle2, XCircle, Wrench, BookOpen, 
  MapPin, ShieldCheck, ArrowLeft, 
  ChevronRight, ExternalLink 
} from 'lucide-react';
import NASAImage from './NASAImage';
import MissionEnding from './MissionEnding';
import { spaceAudio } from '../utils/audioSystem';

/**
 * ArtifactStoryView Component
 * Complete, cinematic storytelling page fulfilling the required 9-step structure:
 * 1. ARTIFACT HERO
 * 2. THE JOURNEY (Earth -> Launch -> Transit -> Landing -> Ops -> Discovery -> End -> Resting Place)
 * 3. WHY WAS IT THERE? (Mission purpose)
 * 4. THE CHALLENGE (Extreme conditions)
 * 5. WHAT DID IT DISCOVER? (Discoveries simply explained)
 * 6. THE HUMAN STORY (Engineering teams on Earth)
 * 7. THE LEGACY (Impact on Artemis, Mars Sample Return, future science)
 * 8. WHERE IS IT NOW? (Exact coordinates and current condition)
 * 9. NASA SOURCES (Official datasets & citations)
 * Plus:
 * - Speech synthesis aloud narration
 * - Interactive hardware anatomy teardown
 * - STEM quiz with cosmic badge unlock
 * - Cinematic mission ending & return to space outro
 */
export default function ArtifactStoryView({
  mission,
  onBackToExplorer,
  onNavigateToMap,
  onUnlockBadge,
  isBadgeUnlocked,
  onExploreAnother
}) {
  const [isNarrating, setIsNarrating] = useState(false);
  const [selectedPart, setSelectedPart] = useState(
    mission.hardwareAnatomy && mission.hardwareAnatomy.length > 0
      ? mission.hardwareAnatomy[0]
      : { part: 'Science Instrument', description: 'Robotic component' }
  );
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const world = mission.world || mission.celestialBody;
  const heroImage = mission.images?.[0] || { url: world === 'moon' ? '/maps/moon.jpg' : '/maps/mars.jpg' };
  const launchYear = mission.launchDate || mission.timeline?.launched || 'NASA Archive';

  const handleReadAloud = () => {
    if (isNarrating) {
      spaceAudio.stopSpeaking();
      setIsNarrating(false);
    } else {
      const fullText = `${mission.name}. Mission: ${mission.mission}. ${mission.story?.hook || ''} ${mission.story?.intro || ''} ${
        mission.story?.chapters?.map(c => c.title + '. ' + c.content).join(' ') || ''
      }`;
      spaceAudio.playQuindarTone();
      spaceAudio.speakText(fullText, () => setIsNarrating(false));
      setIsNarrating(true);
    }
  };

  const handleQuizSubmit = (index) => {
    setQuizAnswer(index);
    setIsQuizSubmitted(true);
    if (index === mission.quiz?.correctIndex) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
      if (onUnlockBadge) onUnlockBadge(mission.id);
    }
  };

  return (
    <article className="min-h-screen py-10 px-4 max-w-5xl mx-auto space-y-16">
      
      {/* Top Navigation Bar: Back & Tools */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-800">
        <button
          onClick={onBackToExplorer}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Artifacts</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Read Aloud */}
          <button
            onClick={handleReadAloud}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition cursor-pointer ${
              isNarrating
                ? 'bg-rose-500 text-white animate-pulse shadow-lg'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
            }`}
          >
            {isNarrating ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            <span>{isNarrating ? 'Stop Audio' : 'Listen Aloud'}</span>
          </button>

          {/* Jump to Map */}
          {onNavigateToMap && (
            <button
              onClick={() => onNavigateToMap(mission.id)}
              className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Locate on Planetary Map</span>
            </button>
          )}
        </div>
      </div>

      {/* 1. ARTIFACT HERO */}
      <section className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              world === 'moon'
                ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-400/50'
                : 'bg-red-950/90 text-orange-300 border border-red-500/50'
            }`}>
              {world === 'moon' ? '🌕 The Moon' : '🔴 Mars Surface'}
            </span>
            <span className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
              {mission.type?.toUpperCase()}
            </span>
          </div>

          <span className="text-xs font-mono text-slate-400">
            Launched: {launchYear.split(',')[0]}
          </span>
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
            {mission.mission}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {mission.name}
          </h1>
          <p className="text-base sm:text-xl text-amber-300 font-serif italic mt-2">
            "{mission.story?.hook || mission.purpose}"
          </p>
        </div>

        {/* Real NASA Hero Photography */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <NASAImage
            src={heroImage.url}
            alt={mission.name}
            caption={heroImage.caption || mission.purpose}
            credit={heroImage.credit || 'NASA'}
            aspectRatio="aspect-[16/9]"
            priority={true}
            missionName={mission.name}
          />
        </div>

        {/* Narrative Introduction */}
        <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2 font-bold">
            MISSION PROLOGUE
          </span>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
            {mission.story?.intro}
          </p>
        </div>
      </section>

      {/* 2. THE JOURNEY STEPPER */}
      {mission.journey && mission.journey.length > 0 && (
        <section className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold mb-1">
              EXPEDITION CHRONICLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              The Journey of {mission.name}
            </h2>
          </div>

          <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 my-6">
            {mission.journey.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Node pin */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

                <div>
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    STAGE {idx + 1}: {step.stage}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. WHY WAS IT THERE? & 4. THE CHALLENGE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WHY WAS IT THERE? */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-black text-white">Why Was It There?</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {mission.purpose}
          </p>
          <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 font-mono">
            <strong>Target Scientific Milestone:</strong> Verify the physical conditions, geologic formations, and habitability potential of {world === 'moon' ? 'the Moon' : 'Mars'}.
          </div>
        </div>

        {/* THE CHALLENGE */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-950 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-black text-white">The Challenges Faced</h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
            {mission.challenges?.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <span className="text-rose-400 shrink-0 font-bold mt-0.5">✕</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. WHAT DID IT DISCOVER? */}
      <section className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="border-b border-slate-800 pb-4 flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block font-bold mb-1">
              PRIMARY BREAKTHROUGHS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              What Did It Discover?
            </h2>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
            SCIENTIFICALLY VERIFIED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mission.discoveries?.map((disc, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl flex items-start gap-3 hover:border-emerald-500/40 transition"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs shrink-0 mt-0.5 font-mono font-bold">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {disc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. THE HUMAN STORY & 7. THE LEGACY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* THE HUMAN STORY */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-black text-white">The Human Story</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {mission.humanStory}
          </p>
        </div>

        {/* THE LEGACY */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-black text-white">The Scientific Legacy</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {mission.legacy}
          </p>
        </div>
      </section>

      {/* HARDWARE ANATOMY TEARDOWN */}
      {mission.hardwareAnatomy && mission.hardwareAnatomy.length > 0 && (
        <section className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold mb-1">
              ENGINEERING BLUEPRINTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Hardware Anatomy & Instruments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Parts list */}
            <div className="space-y-2">
              {mission.hardwareAnatomy.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPart(item)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-mono transition cursor-pointer flex items-center justify-between ${
                    selectedPart.part === item.part
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="truncate">{item.part}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              ))}
            </div>

            {/* Part Inspector */}
            <div className="md:col-span-2 bg-slate-950/90 border border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                  INSTRUMENT SCHEMATIC INSPECTION
                </span>
                <h4 className="text-xl font-black text-white">{selectedPart.part}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedPart.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] font-mono text-slate-500">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>Spacecraft Subsystem Specification</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. WHERE IS IT NOW? */}
      <section className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <MapPin className="w-4 h-4" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Where Is It Now?</h2>
        </div>

        <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">
              VERIFIED PDS RESTING SITE
            </span>
            <span className="text-slate-400">
              Coordinates: {mission.latitude?.toFixed(4)}°, {mission.longitude?.toFixed(4)}°
            </span>
          </div>

          <h3 className="text-lg font-bold text-white">{mission.location}</h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Status: {mission.status}.
          </p>
        </div>
      </section>

      {/* 9. NASA SOURCES */}
      <section className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Database className="w-4 h-4" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">NASA Sources & Datasets</h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Official telemetry, catalogs, and images cataloged by NASA Planetary Data System and mission records:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mission.sources?.map((src, idx) => (
            <a
              key={idx}
              href={src.url}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl hover:border-cyan-400 transition flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                  DATASET ID: {src.datasetId}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition flex items-center justify-between">
                  <span>{src.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  {src.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* STEM MISSION QUIZ */}
      {mission.quiz && (
        <section className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block font-bold mb-1">
                JUNIOR SCIENTIST CHALLENGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Earn the {mission.name.split(' (')[0]} Badge
              </h2>
            </div>
            {isBadgeUnlocked && (
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow">
                <Award className="w-4 h-4 fill-current" /> Badge Unlocked!
              </span>
            )}
          </div>

          <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
            <p className="text-sm sm:text-base font-bold text-white">
              {mission.quiz.question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mission.quiz.options.map((option, idx) => {
                const isSelected = quizAnswer === idx;
                const isCorrect = idx === mission.quiz.correctIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizSubmit(idx)}
                    disabled={isQuizSubmitted}
                    className={`p-3.5 rounded-xl border text-xs sm:text-sm font-sans text-left transition cursor-pointer flex items-center justify-between ${
                      isQuizSubmitted && isCorrect
                        ? 'bg-emerald-950/70 border-emerald-400 text-emerald-200 font-bold'
                        : isQuizSubmitted && isSelected && !isCorrect
                        ? 'bg-rose-950/70 border-rose-400 text-rose-200'
                        : isSelected
                        ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{option}</span>
                    {isQuizSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {isQuizSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                  </button>
                );
              })}
            </div>

            {isQuizSubmitted && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 leading-relaxed font-sans">
                {mission.quiz.explanation}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CINEMATIC MISSION ENDING & RETURN TO SPACE OUTRO */}
      <MissionEnding
        mission={mission}
        onExploreAnother={onExploreAnother}
        onReturnToEarth={onBackToExplorer}
      />

    </article>
  );
}
