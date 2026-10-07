import React, { useState, useMemo } from 'react';
import { HARDWARE_REGISTRY } from '../data/hardwareData';
import NASAImage from './NASAImage';
import { 
  Search, ArrowUpDown, MapPin, ChevronRight, Compass 
} from 'lucide-react';

/**
 * ArtifactExplorer Component
 * Digital Museum Archive:
 * - Debounced search input
 * - Filters for: Celestial World (Moon/Mars), Equipment Type, Status, Mission
 * - Sorting by Year (Ascending / Descending) and Name
 * - Grid of artifact exhibit cards with NASA public domain photography and "EXPLORE STORY" buttons
 */
export default function ArtifactExplorer({ onSelectArtifact }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [worldFilter, setWorldFilter] = useState('all'); // 'all' | 'moon' | 'mars'
  const [typeFilter, setTypeFilter] = useState('all'); // 'all' | 'rover' | 'lander' | 'experiment'
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('year-asc'); // 'year-asc' | 'year-desc' | 'name'

  // Available unique types and statuses
  const availableTypes = ['all', 'rover', 'lander', 'experiment'];
  const availableStatuses = ['all', 'silenced', 'dormant', 'active', 'crushed'];

  const filteredArtifacts = useMemo(() => {
    return HARDWARE_REGISTRY.filter((m) => {
      const world = m.world || m.celestialBody;
      const matchesWorld = worldFilter === 'all' || world === worldFilter;
      const matchesType = typeFilter === 'all' || m.type === typeFilter;
      
      const statusLower = (m.status || '').toLowerCase();
      let matchesStatus = true;
      if (statusFilter === 'silenced') matchesStatus = statusLower.includes('silenced');
      if (statusFilter === 'dormant') matchesStatus = statusLower.includes('dormant') || statusLower.includes('parked');
      if (statusFilter === 'active') matchesStatus = statusLower.includes('active') || statusLower.includes('operational');
      if (statusFilter === 'crushed') matchesStatus = statusLower.includes('crushed') || statusLower.includes('ice');

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        m.name.toLowerCase().includes(q) ||
        m.mission.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q) ||
        (m.purpose && m.purpose.toLowerCase().includes(q));

      return matchesWorld && matchesType && matchesStatus && matchesSearch;
    }).sort((a, b) => {
      const getYear = (item) => {
        const d = item.launchDate || item.timeline?.launched || '1970';
        const match = d.match(/\d{4}/);
        return match ? parseInt(match[0], 10) : 1970;
      };

      if (sortOrder === 'year-asc') return getYear(a) - getYear(b);
      if (sortOrder === 'year-desc') return getYear(b) - getYear(a);
      if (sortOrder === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchQuery, worldFilter, typeFilter, statusFilter, sortOrder]);

  return (
    <section id="explore-section" className="py-12 px-4 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>OFFWORLD HISTORICAL COLLECTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
          Museum Artifact Explorer
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Discover the machines humanity sent to explore the Moon and Mars. Filter by world, technology type, or launch era.
        </p>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-5 sm:p-6 backdrop-blur-xl shadow-2xl space-y-4">
        
        {/* Search Bar & World Filter */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Debounced / Instant Search input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by rover name, mission, instrument, or landing site..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>

          {/* Celestial World Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-black/60 p-1.5 rounded-2xl border border-slate-800 shrink-0 w-full md:w-auto justify-center">
            <button
              onClick={() => setWorldFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                worldFilter === 'all'
                  ? 'bg-slate-700 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Worlds
            </button>
            <button
              onClick={() => setWorldFilter('moon')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1 cursor-pointer ${
                worldFilter === 'moon'
                  ? 'bg-amber-400 text-slate-950 shadow font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🌕</span>
              <span>The Moon</span>
            </button>
            <button
              onClick={() => setWorldFilter('mars')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1 cursor-pointer ${
                worldFilter === 'mars'
                  ? 'bg-red-500 text-white shadow font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🔴</span>
              <span>Mars</span>
            </button>
          </div>
        </div>

        {/* Secondary Filter Row: Type, Status, Sort */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500">TYPE:</span>
            {availableTypes.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-2.5 py-1 rounded-lg uppercase tracking-wider transition cursor-pointer ${
                  typeFilter === t
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t === 'all' ? 'All Types' : t + 's'}
              </button>
            ))}
          </div>

          {/* Status filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500">STATUS:</span>
            {availableStatuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-2.5 py-1 rounded-lg uppercase tracking-wider transition cursor-pointer ${
                  statusFilter === s
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3" /> SORT:
            </span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1 text-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-mono cursor-pointer"
            >
              <option value="year-asc">Launch Year (Earliest First)</option>
              <option value="year-desc">Launch Year (Latest First)</option>
              <option value="name">Artifact Name (A-Z)</option>
            </select>
          </div>
        </div>

      </div>

      {/* Artifact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.map((mission) => {
          const world = mission.world || mission.celestialBody;
          const imgObj = mission.images?.[0] || { url: world === 'moon' ? '/maps/moon.jpg' : '/maps/mars.jpg' };
          const launchDate = mission.launchDate || mission.timeline?.launched || 'NASA Archive';

          return (
            <article
              key={mission.id}
              className="group rounded-3xl bg-slate-900/80 border border-slate-800/80 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Image Hero */}
              <div className="relative">
                <NASAImage
                  src={imgObj.url}
                  alt={mission.name}
                  caption={imgObj.caption || mission.purpose}
                  credit={imgObj.credit || 'NASA'}
                  aspectRatio="aspect-[16/10]"
                  missionName={mission.name}
                />

                {/* World Tag Pill */}
                <div className="absolute top-3 left-3 z-20">
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full font-bold shadow-md border ${
                    world === 'moon'
                      ? 'bg-slate-950/90 text-cyan-300 border-cyan-400/60'
                      : 'bg-slate-950/90 text-orange-300 border-orange-500/60'
                  }`}>
                    {world === 'moon' ? '🌕 The Moon' : '🔴 Mars'}
                  </span>
                </div>

                {/* Hardware Type Tag */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/80 text-slate-300 border border-slate-700">
                    {mission.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{mission.mission}</span>
                    <span>{launchDate.split(',')[1] || launchDate}</span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition">
                    {mission.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                    {mission.story?.hook || mission.purpose}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  {/* Location & Status */}
                  <div className="text-[11px] font-mono space-y-1">
                    <p className="text-slate-400 flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{mission.location}</span>
                    </p>
                    <p className="text-slate-500 text-[10px] truncate">
                      Status: <span className="text-slate-300">{mission.status}</span>
                    </p>
                  </div>

                  {/* Primary CTA */}
                  <button
                    onClick={() => onSelectArtifact(mission.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/40 text-xs font-mono font-bold transition flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/20 cursor-pointer"
                  >
                    <span>Read The Story</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </article>
          );
        })}
      </div>

      {filteredArtifacts.length === 0 && (
        <div className="text-center py-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 max-w-lg mx-auto">
          <p className="text-sm text-slate-300 font-mono mb-2">No mission artifacts found matching your filter criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setWorldFilter('all');
              setTypeFilter('all');
            }}
            className="text-xs font-mono text-cyan-400 underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
