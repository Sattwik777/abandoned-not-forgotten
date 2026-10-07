import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import SolarSystemHero from './components/SolarSystemHero';
import PlanetaryMap from './components/PlanetaryMap';
import StorySection from './components/StorySection';
import NasaDataRegistryModal from './components/NasaDataRegistryModal';
import EducatorGuideModal from './components/EducatorGuideModal';
import { HARDWARE_REGISTRY } from './data/hardwareData';
import { Award, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeMissionId, setActiveMissionId] = useState(HARDWARE_REGISTRY[0].id);
  const [currentEnvironment, setCurrentEnvironment] = useState('space'); // 'space' | 'moon' | 'mars'
  const [unlockedBadges, setUnlockedBadges] = useState(new Set());
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [isEducatorModalOpen, setIsEducatorModalOpen] = useState(false);
  const storiesContainerRef = useRef(null);

  const activeMission = HARDWARE_REGISTRY.find((m) => m.id === activeMissionId) || HARDWARE_REGISTRY[0];

  // Dynamic scroll tracker that reliably identifies whether you're in Space, Moon, or Mars
  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;

      // 1. Check Solar System Hero
      const heroEl = document.getElementById('solar-system-hero');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          setCurrentEnvironment('space');
          return;
        }
      }

      // 2. Check Planetary Map
      const mapEl = document.getElementById('planetary-map-section');
      if (mapEl) {
        const rect = mapEl.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          setCurrentEnvironment('space');
          return;
        }
      }

      // 3. Find closest story card to viewport center
      const cards = document.querySelectorAll('article[data-mission-id]');
      let closestMission = null;
      let minDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(cardCenter - centerY);
        if (dist < minDistance) {
          minDistance = dist;
          const missionId = card.getAttribute('data-mission-id');
          closestMission = HARDWARE_REGISTRY.find((m) => m.id === missionId);
        }
      });

      if (closestMission) {
        setActiveMissionId(closestMission.id);
        setCurrentEnvironment(closestMission.celestialBody); // 'moon' or 'mars'
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately on mount

    return () => window.removeEventListener('scroll', handleScroll);
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

  const jumpToMoonMonuments = () => {
    const firstMoonMission = HARDWARE_REGISTRY.find((m) => m.celestialBody === 'moon');
    if (firstMoonMission) {
      scrollToStory(firstMoonMission.id);
    }
  };

  const jumpToMarsMonuments = () => {
    const firstMarsMission = HARDWARE_REGISTRY.find((m) => m.celestialBody === 'mars');
    if (firstMarsMission) {
      scrollToStory(firstMarsMission.id);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Dynamic LERP background with particle canvas (Solar System -> Moon -> Mars) */}
      <BackgroundAtmosphere currentEnvironment={currentEnvironment} />

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
      <main className="relative z-10 pt-16 px-4">
        
        {/* INTERACTIVE SOLAR SYSTEM HERO SECTION */}
        <SolarSystemHero
          onBeginJourney={scrollToFirstStory}
          onJumpToMoon={jumpToMoonMonuments}
          onJumpToMars={jumpToMarsMonuments}
        />

        {/* REALISTIC PLANETARY MAP SECTION */}
        <section id="planetary-map-section" className="py-8 scroll-mt-24">
          <PlanetaryMap
            selectedMissionId={activeMissionId}
            onSelectMission={(m) => {
              setActiveMissionId(m.id);
              setCurrentEnvironment(m.celestialBody);
            }}
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
              Voices in the Extraterrestrial Silence
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Scroll down to witness how the background transforms between the stark lunar vacuum and the rust-red Martian dust storm.
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

          <div className="flex justify-center gap-2.5 flex-wrap">
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
            Built for the NASA Space Apps Challenge 2026. Designed to preserve the legacy of extraterrestrial robotic exploration and introduce youth to planetary science.
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
