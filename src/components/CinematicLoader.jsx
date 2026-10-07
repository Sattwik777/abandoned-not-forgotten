import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

/**
 * CinematicLoader
 * Short, high-impact introductory sequence requested by the specification:
 * 1. "INITIALIZING OFFWORLD LEGACY..."
 * 2. "CALIBRATING STAR MAP..."
 * 3. "ESTABLISHING MISSION ARCHIVES..."
 * Transitions smoothly into the main experience without unnecessary delays.
 */
export default function CinematicLoader({ onComplete }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const steps = [
    { title: "INITIALIZING OFFWORLD LEGACY...", sub: "Synchronizing deep space telemetry channels" },
    { title: "CALIBRATING STAR MAP...", sub: "Mapping coordinates for Moon and Mars coordinates" },
    { title: "ESTABLISHING MISSION ARCHIVES...", sub: "Loading public domain NASA planetary datasets" }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStepIndex(1), 600);
    const timer2 = setTimeout(() => setStepIndex(2), 1200);
    const timer3 = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03060d] text-white transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-slate-950/80 to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        {/* Pulsing NASA Emblem / Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-cyan-500/40 border-t-cyan-400 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Rocket className="w-8 h-8 text-amber-400 animate-pulse" />
          </div>
        </div>

        {/* Dynamic Telemetry Status */}
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
          NASA Space Apps Challenge 2026
        </span>

        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-2 min-h-[3rem] flex items-center justify-center font-mono">
          {steps[stepIndex]?.title}
        </h2>

        <p className="text-xs text-slate-400 font-mono mb-6">
          {steps[stepIndex]?.sub}
        </p>

        {/* Stepper Progress Indicator */}
        <div className="flex gap-2 mb-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === stepIndex
                  ? 'w-10 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                  : i < stepIndex
                  ? 'w-6 bg-slate-600'
                  : 'w-4 bg-slate-800'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleSkip}
          className="text-[11px] font-mono text-slate-500 hover:text-slate-300 transition uppercase tracking-wider underline cursor-pointer"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
}
