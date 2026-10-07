import React from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

/**
 * MissionEnding Component
 * Cinematic conclusion section adhering to the exact prompt requirements:
 * 1. "The mission began with a question..."
 * 2. "It answered more questions than anyone expected..."
 * 3. "Then the mission came to an end..."
 * 4. "Today, it remains there..."
 * 5. "But its science continues."
 *
 * Followed by the RETURN TO SPACE cosmic outro:
 * "Some explorers came home. Some never did. But none of them were forgotten."
 * Buttons: "EXPLORE ANOTHER STORY" & "RETURN TO EARTH"
 */
export default function MissionEnding({ mission, onExploreAnother, onReturnToEarth }) {
  const ending = mission.ending || {
    question: "What secrets were waiting in the quiet dust?",
    answer: "The mission exceeded all design expectations and rewrote planetary science.",
    conclusion: "When the final telemetry packet was received, the hardware came to rest.",
    eternalStatus: mission.location || "Preserved on the alien surface."
  };

  return (
    <div className="relative my-16 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-[#02040a] border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl text-center">
      {/* Background starlight accent */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Glow highlight */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        
        {/* Step 1: The Question */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block font-bold">
            THE SCIENTIFIC QUESTION
          </span>
          <p className="text-xl sm:text-2xl font-serif italic text-slate-200">
            "{ending.question}"
          </p>
        </div>

        {/* Step 2: The Answers */}
        <div className="space-y-2 border-t border-slate-800/80 pt-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block font-bold">
            THE DISCOVERY
          </span>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {ending.answer}
          </p>
        </div>

        {/* Step 3: The Mission End */}
        <div className="space-y-2 border-t border-slate-800/80 pt-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400 block font-bold">
            THE FINAL SILENCE
          </span>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            {ending.conclusion}
          </p>
        </div>

        {/* Step 4: Today It Remains */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 text-left flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center shrink-0 text-cyan-400 text-sm mt-0.5">
            📍
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 block font-bold">
              PERMANENT OFFWORLD MONUMENT
            </span>
            <p className="text-xs sm:text-sm text-slate-200 font-mono font-bold mt-0.5">
              {ending.eternalStatus}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Protected as extraterrestrial archaeological heritage under the NASA Artemis Accords.
            </p>
          </div>
        </div>

        {/* Step 5: RETURN TO SPACE OUTRO */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex justify-center items-center gap-3 text-lg">
            <span>🌕</span>
            <span className="text-slate-600">•</span>
            <span>🔴</span>
            <span className="text-slate-600">•</span>
            <span>🌍</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            "Some explorers came home. Some never did."
          </h3>
          <p className="text-sm sm:text-base text-cyan-300 font-serif italic">
            "But none of them were forgotten."
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onExploreAnother}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Another Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onReturnToEarth}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-cyan-400" />
              <span>Return to Earth</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
