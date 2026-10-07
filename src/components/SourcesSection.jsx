import React, { useState } from 'react';
import { 
  Database, ExternalLink, ShieldCheck, Terminal 
} from 'lucide-react';
import { searchNasaImages, checkNasaApiHealth } from '../services/nasaApiService';
import { HARDWARE_REGISTRY } from '../data/hardwareData';
import NASAImage from './NASAImage';

/**
 * SourcesSection Component
 * Full transparency portal highlighting official NASA open data repositories,
 * distinguishing verified scientific data from narrative storytelling,
 * and providing a live query terminal into NASA's Image & Video Library.
 */
export default function SourcesSection() {
  const [query, setQuery] = useState('Apollo 15 rover');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [apiHealth, setApiHealth] = useState(null);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    setIsSearching(true);
    try {
      const results = await searchNasaImages(query, 4);
      setSearchResults(results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleCheckHealth = async () => {
    const health = await checkNasaApiHealth();
    setApiHealth(health);
  };

  return (
    <section id="sources-section" className="py-12 px-4 max-w-6xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Database className="w-3.5 h-3.5" />
          <span>DATA TRANSPARENCY & CITATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
          NASA Sources & Open Data
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Every coordinate, date, mission status, and discovery in Offworld Legacy is grounded in verified NASA public archives.
        </p>
      </div>

      {/* Official NASA Gateways Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "NASA Open Data",
            url: "https://data.nasa.gov",
            desc: "Official clearinghouse for NASA datasets, telemetry logs, and mission catalogs.",
            tag: "data.nasa.gov"
          },
          {
            title: "NASA Open Source",
            url: "https://code.nasa.gov",
            desc: "Open source software, algorithms, and planetary models developed by NASA centers.",
            tag: "code.nasa.gov"
          },
          {
            title: "NASA APIs",
            url: "https://api.nasa.gov",
            desc: "RESTful public APIs providing APOD, Mars Rover photos, InSight weather, and imagery.",
            tag: "api.nasa.gov"
          },
          {
            title: "Space Apps Resources",
            url: "https://www.spaceappschallenge.org/resources/",
            desc: "Challenge resource guidelines and data documentation for the 2026 challenge.",
            tag: "spaceappschallenge.org"
          }
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-slate-900/90 border border-slate-800 p-5 hover:border-cyan-400 transition flex flex-col justify-between shadow-lg"
          >
            <div>
              <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                {item.tag}
              </span>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition flex items-center justify-between">
                <span>{item.title}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500">
              Official NASA Gateway →
            </div>
          </a>
        ))}
      </div>

      {/* Fact vs Narrative Transparency Guide */}
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Commitment to Factual Integrity: Fact vs. Narrative Distinction</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950/80 border border-emerald-500/40 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              ✓ VERIFIED SCIENTIFIC FACTS (Zero Fabrication)
            </span>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed font-sans">
              <li>Exact lunar and martian coordinates from USGS Astrogeology.</li>
              <li>Launch, landing, and mission termination timestamps.</li>
              <li>Spectroscopic chemical discoveries (hematite blueberries, pure silica, perchlorates).</li>
              <li>Physical hardware components and dimensions.</li>
              <li>Distance records (Opportunity 45.16 km, Apollo 15 LRV 27.8 km).</li>
            </ul>
          </div>

          <div className="bg-slate-950/80 border border-cyan-500/40 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              ✦ CINEMATIC NARRATIVE STORYTELLING
            </span>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed font-sans">
              <li>First-person perspectives and emotional hooks tailored for youth education.</li>
              <li>Dramatic pacing highlighting the silent vacuum and frozen deserts.</li>
              <li>Accessible analogies (e.g., 'robotic car wash', 'airbag hole-in-one').</li>
              <li>Historical framing celebrating the human teams behind the machines.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Live NASA API Query Terminal */}
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-black text-white">
              Live NASA Image and Video Library Query Explorer
            </h3>
          </div>
          <button
            onClick={handleCheckHealth}
            className="text-[11px] font-mono text-cyan-300 hover:text-white bg-slate-950 px-2.5 py-1 rounded border border-cyan-500/40 cursor-pointer"
          >
            {apiHealth ? `Status: ${apiHealth.status}` : 'Check API Status'}
          </button>
        </div>

        <p className="text-xs text-slate-300 mb-6">
          Query live public domain photographs directly from <code className="text-cyan-300">images-api.nasa.gov</code>.
        </p>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6 max-w-xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search NASA archives (e.g. Apollo 15, Opportunity rover, Surveyor 3)..."
            className="flex-1 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {isSearching ? 'Searching...' : 'Execute Query'}
          </button>
        </form>

        {/* Live Search Results */}
        {searchResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            {searchResults.map((item, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden p-2">
                <NASAImage
                  src={item.imageUrl}
                  alt={item.title}
                  caption={item.title}
                  credit={item.center}
                  aspectRatio="aspect-[4/3]"
                />
                <p className="text-[10px] font-mono text-slate-400 mt-2 truncate">
                  ID: {item.nasaId} • {item.dateCreated}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dataset Registry Table */}
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <h3 className="text-lg font-black text-white mb-4">
          Offworld Legacy Primary Scientific Datasets
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950/90 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3">Mission Artifact</th>
                <th className="py-2.5 px-3">Dataset ID</th>
                <th className="py-2.5 px-3">Primary Archive</th>
                <th className="py-2.5 px-3">Verified Content</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {HARDWARE_REGISTRY.slice(0, 8).map((m) => {
                const src = m.sources?.[0] || {};
                return (
                  <tr key={m.id} className="hover:bg-slate-800/40">
                    <td className="py-2.5 px-3 font-bold text-white">{m.name}</td>
                    <td className="py-2.5 px-3 text-cyan-400">{src.datasetId || 'NASA-PDS'}</td>
                    <td className="py-2.5 px-3 text-slate-300">{src.name || 'NASA PDS Archive'}</td>
                    <td className="py-2.5 px-3 text-slate-400">{src.description || 'Verified Telemetry'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
