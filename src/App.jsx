import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import PlanetaryMap from './components/PlanetaryMap';
import StorySection from './components/StorySection';
import NasaDataRegistryModal from './components/NasaDataRegistryModal';
import EducatorGuideModal from './components/EducatorGuideModal';
import { HARDWARE_REGISTRY } from './data/hardwareData';
import { ChevronDown, Compass, Rocket, Sparkles, Award, Database, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeMissionId, setActiveMissionId] = useState(HARDWARE_REGISTRY[0].id);
  const [unlockedBadges, setUnlockedBadges] = useState(new Set());
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [isEducatorModalOpen, setIsEducatorModalOpen] = useState(false);
  const storiesContainerRef = useRef(null);

  const activeMission = HARDWARE_REGISTRY.find((m) => m.id === activeMissionId) || HARDWARE_REGISTRY[0];

  // IntersectionObserver to detect which story is centered in viewport and trigger background change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const missionId = entry.target.getAttribute('data-mission-id');
            if (missionId) {
              setActiveMissionId(missionId);
            }
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px', // triggers when card is near screen center
        threshold: 0.2
      }
    );

    const cards = document.querySelectorAll('article[data-mission-id]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const handleUnlockBadge = (missionId) => {
    setUnlockedBadges((prev) => new Set([...prev, missionId]));
  };

  const scrollToStory = (missionId) => {
    const el = document.getElementById(`story-${missionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToMap = () => {
    const el = document.getElementById('planetary-map-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFirstStory = () => {
    scrollToStory(HARDWARE_REGISTRY[0].id);
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Dynamic LERP background with particle canvas */}
      <BackgroundAtmosphere activeMission={activeMission} />

      {/* Persistent Navigation Header */}
      <Navbar
        badgeCount={unlockedBadges.size}
        totalBadges={HARDWARE_REGISTRY.length}
        onOpenDataModal={() => setIsDataModalOpen(true)}
        onOpenEducatorModal={() => setIsEducatorModalOpen(true)}
        onScrollToMap={scrollToMap}
        onScrollToStories={scrollToFirstStory}
      />

      {/* Main Content Area */}
      <main className="relative z-10 pt-20 px-4">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>NASA Space Apps Challenge 2026</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            Abandoned but <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400">
              Not Forgotten
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Across the desolate dust of the Moon and Mars rest dozens of silent machines. 
            They aren't space debris—they are <strong>humanity's first extraterrestrial monuments</strong>. 
            Step into their memory banks and discover the groundbreaking science they left behind.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={scrollToFirstStory}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl shadow-amber-500/20 transition transform hover:-translate-y-0.5"
            >
              <Rocket className="w-4 h-4" />
              <span>Begin the Cosmic Journey</span>
            </button>

            <button
              onClick={scrollToMap}
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-slate-700 font-bold text-sm flex items-center gap-2 backdrop-blur shadow-lg transition"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Planetary Map</span>
            </button>
          </div>

          <div className="mt-16 flex flex-col items-center text-slate-400 text-xs font-mono animate-bounce cursor-pointer" onClick={scrollToFirstStory}>
            <span>Scroll down to meet the rovers</span>
            <ChevronDown className="w-5 h-5 text-amber-400 mt-1" />
          </div>
        </section>

        {/* INTERACTIVE PLANETARY MAP SECTION */}
        <section id="planetary-map-section" className="py-8 scroll-mt-24">
          <PlanetaryMap
            selectedMissionId={activeMissionId}
            onSelectMission={(m) => setActiveMissionId(m.id)}
            onScrollToStory={scrollToStory}
          />
        </section>

        {/* SCROLLYTELLING STORY CHAPTERS */}
        <section ref={storiesContainerRef} className="py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              INTERACTIVE MISSION LOGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Voices in the Solar Silence
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              As you scroll down from story to story, notice the planetary atmosphere change around you!
            </p>
          </div>

          {HARDWARE_REGISTRY.map((mission) => (
            <StorySection
              key={mission.id}
              mission={mission}
              isActive={activeMissionId === mission.id}
              onUnlockBadge={handleUnlockBadge}
              isBadgeUnlocked={unlockedBadges.has(mission.id)}
              onNavigateToMap={scrollToMap}
            />
          ))}
        </section>

        {/* BADGES REWARD TROPHY BANNER */}
        <section className="max-w-4xl mx-auto my-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-8 text-center backdrop-blur-xl shadow-2xl">
          <Award className="w-12 h-12 text-amber-400 mx-auto mb-3 animate-pulse" />
          <h3 className="text-2xl font-black text-white mb-2">
            Junior Cosmic Explorer Logbook
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            You have unlocked <strong>{unlockedBadges.size} of {HARDWARE_REGISTRY.length}</strong> mission badges by answering the science quizzes.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {HARDWARE_REGISTRY.map((m) => {
              const isUnlocked = unlockedBadges.has(m.id);
              return (
                <div
                  key={m.id}
                  onClick={() => scrollToStory(m.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono border cursor-pointer transition ${
                    isUnlocked
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {isUnlocked ? '🏅 ' : '🔒 '}
                  {m.name.split(' (')[0]}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 py-12 px-4 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center items-center gap-4 flex-wrap font-mono text-[11px]">
            <button onClick={() => setIsDataModalOpen(true)} className="hover:text-cyan-400 underline">
              NASA Open Data Sources
            </button>
            <span>•</span>
            <button onClick={() => setIsEducatorModalOpen(true)} className="hover:text-amber-400 underline">
              Educator Curriculum Guide
            </button>
            <span>•</span>
            <a href="https://data.nasa.gov" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
              data.nasa.gov <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-slate-400 text-[11px] leading-relaxed max-w-xl mx-auto">
            Built for the NASA Space Apps Challenge. Designed to preserve the legacy of extraterrestrial robotic exploration and inspire youth to reach for the stars.
          </p>

          <p className="text-slate-400 text-[10px] font-mono">
            All orbital basemaps, telemetry, and images are public domain via NASA PDS, USGS Astrogeology, and ESA.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <NasaDataRegistryModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
      />

      <EducatorGuideModal
        isOpen={isEducatorModalOpen}
        onClose={() => setIsEducatorModalOpen(false)}
      />
    </div>
  );
}
