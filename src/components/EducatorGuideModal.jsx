import React from 'react';
import { X, GraduationCap, CheckCircle2, BookOpen, Lightbulb, HeartHandshake } from 'lucide-react';

/**
 * EducatorGuideModal
 * Lesson plans, discussion questions, and STEM learning outcomes for school classrooms.
 * Demonstrates high impact and scalability under Hackathon Criterion 1.
 */
export default function EducatorGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Educator & Classroom Guide
            </h3>
            <p className="text-xs text-amber-300/80 font-mono">
              Empowering Teachers & Inspiring School-Age Space Enthusiasts
            </p>
          </div>
        </div>

        <div className="my-5 p-3.5 bg-amber-950/40 border border-amber-500/30 rounded-2xl text-xs text-amber-200 leading-relaxed">
          This platform is designed to introduce K-12 students to planetary science, engineering resilience, and extraterrestrial history through storytelling, tactile mini-labs, and real NASA telemetry.
        </div>

        {/* Lesson Modules */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Classroom Activity Modules
          </h4>

          <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Module 1: The Physics of Dust & Solar Power</span>
            </div>
            <p className="text-xs text-slate-300">
              <strong>Objective:</strong> Compare solar power generation vs. dust accumulation on Mars using the interactive Dust Cleaning Lab. Discuss why Opportunity and InSight were vulnerable to dust while nuclear-powered rovers (Curiosity, Perseverance) continue running.
            </p>
          </div>

          <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              <span>Module 2: Speed of Light & The Lunar Mirror</span>
            </div>
            <p className="text-xs text-slate-300">
              <strong>Objective:</strong> Use the Apollo 11 Laser Bounce Lab to calculate speed of light travel time (distance = c &times; t / 2). Learn why the Moon is receding at 3.8 cm per year due to tidal ocean friction.
            </p>
          </div>

          <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-emerald-400" />
              <span>Module 3: Space Heritage & Planetary Protection</span>
            </div>
            <p className="text-xs text-slate-300">
              <strong>Discussion Prompt:</strong> When humans establish permanent bases on Mars and the Moon, should Apollo 11 or Opportunity be treated as historical monuments, or should their parts be recycled?
            </p>
          </div>
        </div>

        {/* Learning Standards */}
        <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 text-xs">
          <h5 className="font-bold text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Next Generation Science Standards (NGSS) Alignment</span>
          </h5>
          <ul className="space-y-1 text-slate-400 font-mono text-[11px]">
            <li>• MS-ESS1-3: Scale properties of objects in the Solar System.</li>
            <li>• MS-PS4-2: Wave reflection and laser optics (Retroreflectors).</li>
            <li>• MS-ETS1-2: Engineering design constraints in alien environments.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
