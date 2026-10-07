import React, { useState, useRef, useEffect } from 'react';
import { Compass, MapPin, Eye, ExternalLink, Filter, Search, Sparkles } from 'lucide-react';
import { HARDWARE_REGISTRY, PLANETARY_GEOLOGY_LABELS } from '../data/hardwareData';

/**
 * Realistic Planetary Atlas (Moon & Mars)
 * Renders authentic NASA photographic orbital basemaps with IAU geological nomenclature
 * and glowing coordinate beacons.
 */
export default function PlanetaryMap({ onSelectMission, selectedMissionId, onScrollToStory }) {
  const [activePlanet, setActivePlanet] = useState('moon'); // 'moon' | 'mars'
  const [filterType, setFilterType] = useState('all'); // 'all' | 'rover' | 'lander' | 'instrument'
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredMission, setHoveredMission] = useState(null);
  const canvasRef = useRef(null);
  const mapImageRef = useRef(null);

  // Filter hardware by planet & type & search
  const planetMissions = HARDWARE_REGISTRY.filter((m) => {
    const matchesPlanet = m.celestialBody === activePlanet;
    const matchesType = filterType === 'all' || m.type === filterType;
    const matchesSearch =
      searchQuery === '' ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.coordinates.siteName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlanet && matchesType && matchesSearch;
  });

  const geologicalFeatures = PLANETARY_GEOLOGY_LABELS[activePlanet] || [];

  // Convert lat/long to 2D Equirectangular map percentage
  const getCoordinatesPct = (lat, lon) => {
    let normalizedLon = lon;
    if (normalizedLon > 180) normalizedLon -= 360;
    if (normalizedLon < -180) normalizedLon += 360;

    const leftPct = ((normalizedLon + 180) / 360) * 100;
    const topPct = ((90 - lat) / 180) * 100;
    return { leftPct, topPct };
  };

  // Render photographic surface map on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 1600);
    const height = (canvas.height = 900);

    const img = new Image();
    img.src = activePlanet === 'moon' ? '/maps/moon.jpg' : '/maps/mars.jpg';

    img.onload = () => {
      // Clear
      ctx.clearRect(0, 0, width, height);

      // Draw real NASA photographic texture
      ctx.drawImage(img, 0, 0, width, height);

      // Add contrast vignette / planetary shading
      const vignette = ctx.createRadialGradient(
        width * 0.5, height * 0.5, width * 0.25,
        width * 0.5, height * 0.5, width * 0.7
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle orbital coordinate grid lines
      ctx.strokeStyle = activePlanet === 'moon' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 180, 140, 0.08)';
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
    };
  }, [activePlanet]);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 bg-slate-950/95 border border-slate-700/80 rounded-3xl p-4 sm:p-6 backdrop-blur-2xl shadow-2xl overflow-hidden">
      
      {/* Sleek Top HUD Navigation Bar (Matches user reference design) */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl">
        
        {/* Planet Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-black/60 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActivePlanet('moon')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activePlanet === 'moon'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🌕</span>
            <span>MOON</span>
          </button>
          <button
            onClick={() => setActivePlanet('mars')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activePlanet === 'mars'
                ? 'bg-red-500 text-white shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🔴</span>
            <span>MARS</span>
          </button>
        </div>

        {/* Center Title Badge */}
        <div className="hidden md:flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            {activePlanet === 'moon' ? 'LUNAR RECONNAISSANCE ATLAS' : 'MARTIAN GLOBAL ORBITAL ATLAS'}
          </h3>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
            NASA 2026
          </span>
        </div>

        {/* Search input */}
        <div className="relative flex-1 sm:max-w-xs min-w-[160px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activePlanet === 'moon' ? 'Moon' : 'Mars'}...`}
            className="w-full pl-9 pr-3 py-1.5 bg-black/70 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1 text-[11px] font-mono">
          {['all', 'rover', 'lander', 'instrument'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-2.5 py-1 rounded-lg uppercase tracking-wider transition ${
                filterType === type
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold'
                  : 'bg-slate-800/40 text-slate-400 hover:text-white'
              }`}
            >
              {type === 'all' ? 'All Types' : type + 's'}
            </button>
          ))}
        </div>
      </div>

      {/* Realistic Photographic Map Viewport */}
      <div className="relative w-full aspect-[16/9] max-h-[620px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black select-none">
        {/* Canvas Surface Basemap */}
        <canvas ref={canvasRef} className="w-full h-full block object-cover" />

        {/* Geological Region Labels (IAU Official Nomenclature) */}
        {geologicalFeatures.map((geo, idx) => {
          const { leftPct, topPct } = getCoordinatesPct(geo.lat, geo.lon);
          return (
            <div
              key={idx}
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: `${leftPct}%`, top: `${topPct}%` }}
            >
              <span
                className={`block tracking-widest font-serif italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${
                  geo.type === 'mare' || geo.type === 'oceanus' || geo.type === 'planitia'
                    ? 'text-[11px] sm:text-xs text-slate-300/80 font-bold uppercase'
                    : 'text-[9px] sm:text-[10px] text-slate-400/60'
                }`}
              >
                {geo.name}
              </span>
            </div>
          );
        })}

        {/* Discarded Hardware Markers */}
        {planetMissions.map((mission) => {
          const { latitude, longitude } = mission.coordinates;
          const { leftPct, topPct } = getCoordinatesPct(latitude, longitude);
          const isSelected = selectedMissionId === mission.id;
          const isHovered = hoveredMission?.id === mission.id;

          return (
            <div
              key={mission.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer"
              style={{ left: `${leftPct}%`, top: `${topPct}%` }}
              onMouseEnter={() => setHoveredMission(mission)}
              onMouseLeave={() => setHoveredMission(null)}
              onClick={() => {
                if (onSelectMission) onSelectMission(mission);
                if (onScrollToStory) onScrollToStory(mission.id);
              }}
            >
              {/* Pulsing Emerald/Amber Beacon Ring (Identical to user's reference image!) */}
              <div
                className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                  mission.celestialBody === 'moon' ? 'bg-emerald-400' : 'bg-amber-400'
                }`}
                style={{ animationDuration: '3s' }}
              />

              {/* Glowing circular beacon */}
              <div
                className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-xl border transition-transform duration-300 ${
                  isSelected || isHovered
                    ? 'scale-125 ring-4 ring-cyan-400/50 bg-black text-cyan-300 border-white'
                    : 'scale-100 bg-slate-950/90 text-white border-emerald-400/80'
                }`}
              >
                <span className="text-xs">
                  {mission.type === 'rover' ? '🚜' : mission.type === 'lander' ? '🛰️' : '🔬'}
                </span>
              </div>

              {/* Mission Label Tag */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-9 px-2 py-0.5 rounded text-[10px] font-bold font-mono whitespace-nowrap shadow-xl border pointer-events-none transition-all duration-200 ${
                  isSelected || isHovered
                    ? 'opacity-100 bg-slate-950 text-cyan-300 border-cyan-400 scale-105'
                    : 'opacity-80 bg-black/80 text-slate-300 border-slate-700'
                }`}
              >
                {mission.name.split(' (')[0]}
              </div>
            </div>
          );
        })}

        {/* Hovered / Active Radar HUD Card */}
        {hoveredMission && (
          <div className="absolute bottom-4 left-4 z-40 bg-slate-950/95 border border-cyan-500/60 rounded-2xl p-4 max-w-sm backdrop-blur-2xl shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-600">
                PDS SITE TELEMETRY
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {hoveredMission.coordinates.displayCoords}
              </span>
            </div>

            <h4 className="text-sm font-black text-white">{hoveredMission.name}</h4>
            <p className="text-[11px] text-amber-300 font-semibold mb-1">
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
                <span>Read Mission Story</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] font-mono text-slate-400">
                Landed: {hoveredMission.timeline.landed.split(',')[0]}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Jump Bar Below Map */}
      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
        {HARDWARE_REGISTRY.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setActivePlanet(m.celestialBody);
              if (onSelectMission) onSelectMission(m);
              if (onScrollToStory) onScrollToStory(m.id);
            }}
            className={`px-3 py-2 rounded-xl text-left border text-xs whitespace-nowrap transition flex items-center gap-2 ${
              selectedMissionId === m.id
                ? 'bg-slate-800 border-cyan-400 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <span>{m.celestialBody === 'moon' ? '🌕' : '🔴'}</span>
            <span className="font-bold">{m.name.split(' (')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
