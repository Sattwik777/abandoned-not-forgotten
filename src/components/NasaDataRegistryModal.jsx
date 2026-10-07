import React from 'react';
import { X, ExternalLink, Database } from 'lucide-react';
import { NASA_OPEN_DATA_REPOSITORIES, HARDWARE_REGISTRY } from '../data/hardwareData';

/**
 * NasaDataRegistryModal
 * Full verifiable ledger of all NASA open data portals and third-party agencies used.
 * Directly addresses Hackathon Criterion 4 (Relevance) and Criterion 8 (NASA Open Data + Third-Party Sources).
 */
export default function NasaDataRegistryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              NASA Open Data & Partner Repositories
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Transparent, Reproducible Scientific Data Provenance
            </p>
          </div>
        </div>

        <div className="my-5 p-3.5 bg-cyan-950/40 border border-cyan-500/30 rounded-2xl text-xs text-cyan-200 leading-relaxed">
          <strong>Hackathon Alignment Notice:</strong> This project integrates primary data from <strong>data.nasa.gov</strong>, raw telemetry from the <strong>NASA Planetary Data System (PDS)</strong>, plus third-party cross-corroboration from the <strong>USGS Astrogeology Science Center</strong> and the <strong>European Space Agency (ESA)</strong>.
        </div>

        {/* Repositories List */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Core Datasets & Repositories
          </h4>
          {NASA_OPEN_DATA_REPOSITORIES.map((repo, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl flex items-center justify-between flex-wrap gap-3"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white text-sm">{repo.agency}</span>
                  <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                    {repo.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 max-w-xl">{repo.description}</p>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Hardware-Specific Datasets Table */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
            Hardware Telemetry & Coordinate Datasets
          </h4>
          <div className="space-y-2">
            {HARDWARE_REGISTRY.map((hw) => (
              <div key={hw.id} className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/80 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-amber-300">{hw.name}</span>
                  <span className="font-mono text-[10px] text-slate-400">{hw.coordinates.displayCoords}</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  {hw.nasaDataSources.map((ds, i) => (
                    <span key={i} className="inline-block mr-3 text-cyan-400/90 font-mono">
                      • {ds.datasetId} ({ds.name.split(':')[0]})
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
