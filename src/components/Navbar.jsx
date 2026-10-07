import React, { useState } from 'react';
import { 
  Rocket, Award, Volume2, VolumeX, Menu, X, Eye 
} from 'lucide-react';

/**
 * Navbar Component
 * Navigation header for Offworld Legacy.
 * Connects all core sections:
 * Home, Explore, Moon, Mars, Timeline, Map, Science, Learn, Sources
 * With audio atmosphere and reduced-motion controls.
 */
export default function Navbar({
  activeView,
  onNavigate,
  badgeCount = 0,
  totalBadges = 10,
  isAudioMuted = true,
  onToggleAudio,
  reducedMotion = false,
  onToggleReducedMotion
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'moon', label: 'Moon' },
    { id: 'mars', label: 'Mars' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'map', label: 'Map' },
    { id: 'science', label: 'Science' },
    { id: 'education', label: 'Learn' },
    { id: 'sources', label: 'Sources' },
  ];

  const handleNavClick = (viewId) => {
    onNavigate(viewId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-2.5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto bg-slate-950/85 border border-slate-700/60 backdrop-blur-2xl rounded-2xl px-3 sm:px-5 py-2 shadow-2xl">
        
        {/* Brand / Title */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xs sm:text-sm font-black text-white tracking-widest uppercase font-mono">
                OFFWORLD LEGACY
              </h1>
              <span className="hidden xl:inline-block text-[9px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-800">
                NASA 2026
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-sans hidden md:block">
              Exploring the machines that carried science beyond Earth.
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800/80 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer font-bold ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Audio, Reduced Motion, Badges, Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2">

          {/* Badges Counter */}
          <button
            onClick={() => handleNavClick('education')}
            className="flex items-center gap-1 bg-amber-950/70 border border-amber-500/40 text-amber-300 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-bold font-mono hover:bg-amber-900/60 transition cursor-pointer"
            title="Cosmic Explorer Badges"
          >
            <Award className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>{badgeCount}/{totalBadges}</span>
          </button>

          {/* Audio Atmosphere Toggle */}
          <button
            onClick={onToggleAudio}
            className={`p-2 rounded-xl border transition cursor-pointer ${
              !isAudioMuted
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isAudioMuted ? "Enable Space Acoustics (Martian Wind & Quindar Beeps)" : "Mute Space Acoustics"}
          >
            {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Reduced Motion Toggle */}
          <button
            onClick={onToggleReducedMotion}
            className={`hidden sm:flex p-2 rounded-xl border transition cursor-pointer ${
              reducedMotion
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={reducedMotion ? "Reduced Motion: Enabled" : "Reduced Motion: Disabled"}
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 max-w-7xl mx-auto bg-slate-950/95 border border-slate-700 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`p-2.5 rounded-xl border text-center transition cursor-pointer font-bold ${
                  activeView === link.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>NASA Space Apps 2026</span>
            <button
              onClick={onToggleReducedMotion}
              className="text-cyan-400 underline"
            >
              {reducedMotion ? "Disable Reduced Motion" : "Enable Reduced Motion"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
