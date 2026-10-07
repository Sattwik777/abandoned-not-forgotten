import React, { useState, useRef, useEffect } from 'react';
import { Compass, MapPin, Eye, ExternalLink, Filter, Info, Sparkles } from 'lucide-react';
import { HARDWARE_REGISTRY } from '../data/hardwareData';

/**
 * PlanetaryMap
 * Interactive celestial map of the Moon and Mars with exact NASA coordinates,
 * glowing beacons, telemetry radars, and smooth story linking.
 */
export default function PlanetaryMap({ onSelectMission, selectedMissionId, onScrollToStory }) {
  const [activePlanet, setActivePlanet] = useState('mars'); // 'moon' | 'mars'
  const [filterType, setFilterType] = useState('all'); // 'all' | 'rover' | 'lander' | 'instrument'
  const [hoveredMission, setHoveredMission] = useState(null);
  const canvasRef = useRef(null);

  // Filter hardware by planet & type
  const planetMissions = HARDWARE_REGISTRY.filter(
    (m) => m.celestialBody === activePlanet && (filterType === 'all' || m.type === filterType)
  );

  // Convert lat/long to 2D projection coords (Equirectangular projection)
  const getMapCoordinates = (lat, lon, width, height) => {
    // Latitude [-90 to 90] -> Y [height to 0]
    // Longitude [0 to 360] or [-180 to 180]
    let normalizedLon = lon;
    if (normalizedLon > 180) normalizedLon -= 360;

    const x = ((normalizedLon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 1000);
    const height = (canvas.height = 560);

    // Draw base planetary surface texture
    ctx.clearRect(0, 0, width, height);

    if (activePlanet === 'mars') {
      // Mars rust surface gradient
      const surfaceGrad = ctx.createLinearGradient(0, 0, width, height);
      surfaceGrad.addColorStop(0, '#592015');
      surfaceGrad.addColorStop(0.5, '#782d1b');
      surfaceGrad.addColorStop(1, '#4a170d');
      ctx.fillStyle = surfaceGrad;
      ctx.fillRect(0, 0, width, height);

      // Mars geological regions / dark albedo features (Syrtis Major, Acidalia, Hellas Basin)
      ctx.fillStyle = 'rgba(40, 12, 8, 0.45)';
      // Acidalia Planitia
      ctx.beginPath();
      ctx.ellipse(380, 140, 140, 80, -0.2, 0, Math.PI * 2);
      ctx.fill();
      // Syrtis Major
      ctx.beginPath();
      ctx.ellipse(750, 260, 90, 110, 0.4, 0, Math.PI * 2);
      ctx.fill();
      // Hellas Planitia
      ctx.fillStyle = 'rgba(150, 65, 45, 0.4)';
      ctx.beginPath();
      ctx.ellipse(720, 420, 130, 80, 0, 0, Math.PI * 2);
      ctx.fill();
      // Polar Ice caps
      ctx.fillStyle = 'rgba(255, 240, 235, 0.85)';
      ctx.beginPath();
      ctx.ellipse(500, 15, 320, 20, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(500, 548, 240, 16, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Moon grey basalt surface
      const surfaceGrad = ctx.createLinearGradient(0, 0, width, height);
      surfaceGrad.addColorStop(0, '#26292e');
      surfaceGrad.addColorStop(0.5, '#373c45');
      surfaceGrad.addColorStop(1, '#1b1d21');
      ctx.fillStyle = surfaceGrad;
      ctx.fillRect(0, 0, width, height);

      // Lunar Maria (Sea of Tranquility, Oceanus Procellarum, Mare Imbrium)
      ctx.fillStyle = 'rgba(20, 22, 26, 0.7)';
      // Oceanus Procellarum
      ctx.beginPath();
      ctx.ellipse(320, 220, 150, 130, 0.1, 0, Math.PI * 2);
      ctx.fill();
      // Mare Imbrium
      ctx.beginPath();
      ctx.ellipse(400, 160, 110, 80, 0, 0, Math.PI * 2);
      ctx.fill();
      // Mare Serenitatis & Tranquillitatis
      ctx.beginPath();
      ctx.ellipse(580, 210, 95, 75, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(640, 270, 90, 80, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Craters with ray systems (Copernicus, Tycho)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 16; i++) {
        const angle = (i * Math.PI) / 8;
        ctx.beginPath();
        ctx.moveTo(560, 420);
        ctx.lineTo(560 + Math.cos(angle) * 140, 420 + Math.sin(angle) * 140);
        ctx.stroke();
      }
      // Tycho crater core
      ctx.fillStyle = 'rgba(235, 240, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(560, 420, 7, 0, Math.PI * 2);
      ctx.fill();
    }

    // Grid lines (Latitude / Longitude coordinates)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    // Parallels
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = ((90 - lat) / 180) * height;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    // Meridians
    for (let lon = -150; lon <= 180; lon += 60) {
      const x = ((lon + 180) / 360) * width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
  }, [activePlanet]);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Compass className="w-6 h-6 text-cyan-400 animate-spin-slow" />
            <h3 className="text-2xl font-black text-white tracking-wide">
              NASA Planetary Artifact Map
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Interactive surface coordinates from <strong>data.nasa.gov</strong> and <strong>USGS Astrogeology</strong>.
          </p>
        </div>

        {/* Planet Switcher Buttons */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActivePlanet('moon')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activePlanet === 'moon'
                ? 'bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-sm">🌕</span> The Moon (Lunar Grid)
          </button>
          <button
            onClick={() => setActivePlanet('mars')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activePlanet === 'mars'
                ? 'bg-gradient-to-r from-red-500 to-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-sm">🔴</span> Mars (Red Planet)
          </button>
        </div>
      </div>

      {/* Filter and stats row */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400">Filter Hardware:</span>
          {['all', 'rover', 'lander', 'instrument'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1 rounded-lg uppercase tracking-wider transition ${
                filterType === type
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="text-slate-400 bg-slate-950/60 px-3 py-1 rounded-lg border border-slate-800 flex items-center gap-3">
          <span>Target: <strong className="text-white uppercase">{activePlanet}</strong></span>
          <span>Gravity: <strong className="text-cyan-300">{activePlanet === 'moon' ? '0.166 g' : '0.380 g'}</strong></span>
          <span>Atmosphere: <strong className="text-amber-300">{activePlanet === 'moon' ? 'Vacuum (0 bar)' : '0.006 bar (CO₂)'}</strong></span>
        </div>
      </div>

      {/* Map Surface Viewport */}
      <div className="relative w-full aspect-[16/9] max-h-[560px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
        {/* Canvas Surface Basemap */}
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Coordinate Overlays / Markers */}
        {planetMissions.map((mission) => {
          const { latitude, longitude } = mission.coordinates;
          // Approximate container percent
          let normalizedLon = longitude;
          if (normalizedLon > 180) normalizedLon -= 360;
          const leftPct = ((normalizedLon + 180) / 360) * 100;
          const topPct = ((90 - latitude) / 180) * 100;

          const isSelected = selectedMissionId === mission.id;
          const isHovered = hoveredMission?.id === mission.id;

          return (
            <div
              key={mission.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
              style={{ left: `${leftPct}%`, top: `${topPct}%` }}
              onMouseEnter={() => setHoveredMission(mission)}
              onMouseLeave={() => setHoveredMission(null)}
              onClick={() => {
                if (onSelectMission) onSelectMission(mission);
                if (onScrollToStory) onScrollToStory(mission.id);
              }}
            >
              {/* Pulse ripple ring */}
              <div
                className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                  mission.celestialBody === 'mars' ? 'bg-amber-400' : 'bg-cyan-300'
                }`}
                style={{ animationDuration: '2.5s' }}
              />

              {/* Pin Icon */}
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 transition-transform duration-300 ${
                  isSelected || isHovered ? 'scale-125 z-30' : 'scale-100'
                } ${
                  mission.celestialBody === 'mars'
                    ? 'bg-amber-500 border-white text-slate-950 shadow-amber-500/50'
                    : 'bg-cyan-400 border-white text-slate-950 shadow-cyan-400/50'
                }`}
              >
                <MapPin className="w-4 h-4 fill-current" />
              </div>

              {/* Floating label tag */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-9 px-2.5 py-1 rounded-md text-[11px] font-bold whitespace-nowrap shadow-xl border pointer-events-none transition-all duration-200 ${
                  isSelected || isHovered
                    ? 'opacity-100 translate-y-0 bg-slate-950 text-white border-cyan-400 scale-105'
                    : 'opacity-75 translate-y-1 bg-slate-900/90 text-slate-300 border-slate-700'
                }`}
              >
                {mission.name.split(' (')[0]}
              </div>
            </div>
          );
        })}

        {/* Telemetry Radar Card Overlay (Active or Hovered) */}
        {hoveredMission && (
          <div className="absolute bottom-4 left-4 z-30 bg-slate-950/95 border border-cyan-500/50 rounded-2xl p-4 max-w-sm backdrop-blur-xl shadow-2xl animate-fadeIn text-left">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                PDS SITE TELEMETRY
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {hoveredMission.coordinates.displayCoords}
              </span>
            </div>

            <h4 className="text-sm font-black text-white">{hoveredMission.name}</h4>
            <p className="text-[11px] text-amber-300 font-semibold mb-2">
              "{hoveredMission.nickname}"
            </p>

            <p className="text-[11px] text-slate-300 line-clamp-2 mb-3">
              {hoveredMission.story.intro}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  if (onSelectMission) onSelectMission(hoveredMission);
                  if (onScrollToStory) onScrollToStory(hoveredMission.id);
                }}
                className="text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition shadow"
              >
                <span>Read Full Story</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] font-mono text-slate-400">
                Landed: {hoveredMission.timeline.landed.split(',')[0]}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Jump Buttons below Map */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {HARDWARE_REGISTRY.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setActivePlanet(m.celestialBody);
              if (onSelectMission) onSelectMission(m);
              if (onScrollToStory) onScrollToStory(m.id);
            }}
            className={`p-2.5 rounded-xl text-left border text-xs transition group ${
              selectedMissionId === m.id
                ? 'bg-slate-800 border-cyan-400 ring-1 ring-cyan-400'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
              <span>{m.celestialBody === 'mars' ? '🔴 Mars' : '🌕 Moon'}</span>
              <span className="uppercase">{m.type}</span>
            </div>
            <div className="font-bold text-white truncate group-hover:text-cyan-300 transition">
              {m.name.split(' (')[0]}
            </div>
            <div className="text-[10px] text-slate-400 font-mono truncate">
              {m.coordinates.siteName.split(',')[0]}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
