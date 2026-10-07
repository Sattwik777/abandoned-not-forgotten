import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GalaxyBackground from './components/GalaxyBackground';
import CinematicLoader from './components/CinematicLoader';
import HomeHero from './components/HomeHero';
import ArtifactExplorer from './components/ArtifactExplorer';
import MoonDestinationView from './components/MoonDestinationView';
import MarsDestinationView from './components/MarsDestinationView';
import ArtifactStoryView from './components/ArtifactStoryView';
import TimelineSection from './components/TimelineSection';
import PlanetaryMap from './components/PlanetaryMap';
import ScienceSection from './components/ScienceSection';
import EducationalSection from './components/EducationalSection';
import SourcesSection from './components/SourcesSection';
import Footer from './components/Footer';
import { HARDWARE_REGISTRY } from './data/hardwareData';
import { spaceAudio } from './utils/audioSystem';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [selectedArtifactId, setSelectedArtifactId] = useState(HARDWARE_REGISTRY[0].id);
  const [unlockedBadges, setUnlockedBadges] = useState(() => {
    try {
      const saved = localStorage.getItem('offworld_unlocked_badges');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Active artifact reference
  const activeArtifact = HARDWARE_REGISTRY.find((m) => m.id === selectedArtifactId) || HARDWARE_REGISTRY[0];

  // Derive celestial environment for dynamic LERP background
  const currentEnvironment = (() => {
    if (currentView === 'moon') return 'moon';
    if (currentView === 'mars') return 'mars';
    if (currentView === 'story') {
      const world = activeArtifact.world || activeArtifact.celestialBody;
      return world === 'mars' ? 'mars' : 'moon';
    }
    return 'space';
  })();

  // Synchronize routing with browser hash history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash.startsWith('story/')) {
        const id = hash.replace('story/', '');
        const exists = HARDWARE_REGISTRY.some((m) => m.id === id);
        if (exists) {
          setSelectedArtifactId(id);
          setCurrentView('story');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      const validViews = ['home', 'explore', 'moon', 'mars', 'timeline', 'map', 'science', 'education', 'sources'];
      if (validViews.includes(hash)) {
        setCurrentView(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial sync
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save badges to localStorage
  const handleUnlockBadge = (id) => {
    setUnlockedBadges((prev) => {
      const next = new Set([...prev, id]);
      try {
        localStorage.setItem('offworld_unlocked_badges', JSON.stringify([...next]));
      } catch (e) {
        console.warn(e);
      }
      return next;
    });
  };

  // Safe navigation function with hash update
  const navigateTo = (view, artifactId = null) => {
    if (view === 'story' && artifactId) {
      setSelectedArtifactId(artifactId);
      setCurrentView('story');
      window.location.hash = `#story/${artifactId}`;
    } else {
      setCurrentView(view);
      window.location.hash = `#${view}`;
    }
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  // Toggle ambient space acoustics
  const handleToggleAudio = () => {
    if (isAudioMuted) {
      spaceAudio.init();
      spaceAudio.playQuindarTone();
      if (currentEnvironment === 'mars') {
        spaceAudio.startMartianWind();
      }
      setIsAudioMuted(false);
    } else {
      spaceAudio.stopMartianWind();
      spaceAudio.stopSpeaking();
      setIsAudioMuted(true);
    }
  };

  // Adjust wind when environment changes and audio is enabled
  useEffect(() => {
    if (!isAudioMuted) {
      if (currentEnvironment === 'mars') {
        spaceAudio.startMartianWind();
      } else {
        spaceAudio.stopMartianWind();
      }
    }
  }, [currentEnvironment, isAudioMuted]);

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. CINEMATIC INITIALIZING LOADER */}
      {showLoader && (
        <CinematicLoader onComplete={() => setShowLoader(false)} />
      )}

      {/* 2. DYNAMIC 60 FPS LERP GALAXY CANVAS BACKGROUND */}
      <GalaxyBackground
        currentEnvironment={currentEnvironment}
        cameraSpeed={currentView === 'home' ? 1.2 : 0.6}
        reducedMotion={reducedMotion}
      />

      {/* 3. PERSISTENT RESPONSIVE NAVIGATION HEADER */}
      <Navbar
        activeView={currentView}
        onNavigate={(v) => navigateTo(v)}
        badgeCount={unlockedBadges.size}
        totalBadges={HARDWARE_REGISTRY.length}
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion(!reducedMotion)}
      />

      {/* 4. MAIN CONTENT ROUTER */}
      <main className="relative z-10 pt-16">
        
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <HomeHero
            onExploreStories={() => navigateTo('explore')}
            onEnterSolarSystem={() => {
              const el = document.getElementById('solar-system-stage');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onSelectDestination={(dest) => navigateTo(dest)}
            onSelectArtifact={(id) => navigateTo('story', id)}
          />
        )}

        {/* VIEW: EXPLORE */}
        {currentView === 'explore' && (
          <ArtifactExplorer
            onSelectArtifact={(id) => navigateTo('story', id)}
          />
        )}

        {/* VIEW: MOON */}
        {currentView === 'moon' && (
          <MoonDestinationView
            onSelectArtifact={(id) => navigateTo('story', id)}
            onBackToSolarSystem={() => navigateTo('home')}
          />
        )}

        {/* VIEW: MARS */}
        {currentView === 'mars' && (
          <MarsDestinationView
            onSelectArtifact={(id) => navigateTo('story', id)}
            onBackToSolarSystem={() => navigateTo('home')}
          />
        )}

        {/* VIEW: ARTIFACT STORY */}
        {currentView === 'story' && (
          <ArtifactStoryView
            mission={activeArtifact}
            onBackToExplorer={() => navigateTo('explore')}
            onNavigateToMap={(id) => {
              setSelectedArtifactId(id);
              navigateTo('map');
            }}
            onUnlockBadge={handleUnlockBadge}
            isBadgeUnlocked={unlockedBadges.has(activeArtifact.id)}
            onExploreAnother={() => {
              // Find another mission
              const currentIndex = HARDWARE_REGISTRY.findIndex((m) => m.id === activeArtifact.id);
              const nextIndex = (currentIndex + 1) % HARDWARE_REGISTRY.length;
              navigateTo('story', HARDWARE_REGISTRY[nextIndex].id);
            }}
          />
        )}

        {/* VIEW: TIMELINE */}
        {currentView === 'timeline' && (
          <TimelineSection
            onSelectMission={(id) => navigateTo('story', id)}
          />
        )}

        {/* VIEW: MAP */}
        {currentView === 'map' && (
          <div className="py-8 px-4">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                INTERACTIVE CARTOGRAPHY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Planetary Orbital Atlas
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Click on any verified landing beacon to inspect coordinates and launch its narrative story.
              </p>
            </div>

            <PlanetaryMap
              selectedMissionId={selectedArtifactId}
              initialPlanet={activeArtifact.world || activeArtifact.celestialBody}
              onSelectMission={(m) => setSelectedArtifactId(m.id)}
              onScrollToStory={(id) => navigateTo('story', id)}
            />
          </div>
        )}

        {/* VIEW: SCIENCE */}
        {currentView === 'science' && (
          <ScienceSection
            onNavigateToArtifact={(id) => navigateTo('story', id)}
          />
        )}

        {/* VIEW: EDUCATION */}
        {currentView === 'education' && (
          <EducationalSection
            unlockedBadgesCount={unlockedBadges.size}
            totalBadges={HARDWARE_REGISTRY.length}
          />
        )}

        {/* VIEW: SOURCES */}
        {currentView === 'sources' && (
          <SourcesSection />
        )}

      </main>

      {/* 5. FOOTER */}
      <Footer onNavigate={(v) => navigateTo(v)} />

    </div>
  );
}
