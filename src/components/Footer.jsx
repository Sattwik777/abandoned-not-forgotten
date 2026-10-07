import React from 'react';
import { ExternalLink, Rocket } from 'lucide-react';

/**
 * Footer Component
 * NASA Space Apps Challenge 2026 Attribution and Official Resource Links
 */
export default function Footer({ onNavigate }) {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/95 py-12 px-4 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950">
                <Rocket className="w-3.5 h-3.5 -rotate-45" />
              </div>
              <span className="font-mono font-black text-sm text-white uppercase tracking-wider">
                OFFWORLD LEGACY
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              "Exploring the machines that carried science beyond Earth." A cinematic digital museum built for the 2026 NASA Space Apps Challenge.
            </p>
            <p className="text-[11px] font-mono text-cyan-400">
              Challenge: Abandoned but not Forgotten
            </p>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <span className="text-white font-bold block uppercase tracking-wider text-[11px]">
              Museum Navigation
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-cyan-300 transition cursor-pointer">Home</button></li>
              <li><button onClick={() => onNavigate('explore')} className="hover:text-cyan-300 transition cursor-pointer">Artifact Explorer</button></li>
              <li><button onClick={() => onNavigate('moon')} className="hover:text-cyan-300 transition cursor-pointer">Destination: Moon</button></li>
              <li><button onClick={() => onNavigate('mars')} className="hover:text-cyan-300 transition cursor-pointer">Destination: Mars</button></li>
              <li><button onClick={() => onNavigate('timeline')} className="hover:text-cyan-300 transition cursor-pointer">Mission Timeline</button></li>
              <li><button onClick={() => onNavigate('map')} className="hover:text-cyan-300 transition cursor-pointer">Planetary Atlas</button></li>
              <li><button onClick={() => onNavigate('science')} className="hover:text-cyan-300 transition cursor-pointer">Science Wing</button></li>
              <li><button onClick={() => onNavigate('education')} className="hover:text-cyan-300 transition cursor-pointer">Student STEM Labs</button></li>
            </ul>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <span className="text-white font-bold block uppercase tracking-wider text-[11px]">
              NASA Open Resources
            </span>
            <ul className="space-y-1.5">
              <li>
                <a href="https://data.nasa.gov" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition">
                  data.nasa.gov <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://code.nasa.gov" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition">
                  code.nasa.gov <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://api.nasa.gov" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition">
                  api.nasa.gov <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://images.nasa.gov" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition">
                  images.nasa.gov <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.spaceappschallenge.org" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition">
                  spaceappschallenge.org <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Public Domain Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] font-mono text-slate-500">
          <p>
            All planetary basemaps, photography, and telemetry are public domain via NASA PDS, USGS Astrogeology, and JPL-Caltech.
          </p>
          <p className="shrink-0">
            NASA Space Apps Challenge 2026
          </p>
        </div>

      </div>
    </footer>
  );
}
