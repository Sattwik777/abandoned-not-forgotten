import React, { useState } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';

/**
 * NASAImage Component
 * Production-ready image loader designed for official NASA photography:
 * - Lazy loading with native loading="lazy"
 * - Shimmer skeleton during download
 * - Robust error handling with styled mission fallback card
 * - Caption and verified NASA attribution
 * - Expandable high-resolution modal preview
 */
export default function NASAImage({
  src,
  alt = 'NASA Archival Photograph',
  caption,
  credit = 'NASA / JPL-Caltech',
  aspectRatio = 'aspect-[16/9]',
  className = '',
  missionName = 'NASA Mission Archive',
  priority = false
}) {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <figure className={`relative group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl ${className}`}>
        {/* Loading Skeleton Shimmer */}
        {loading && !hasError && (
          <div className={`w-full ${aspectRatio} bg-slate-900/90 animate-pulse flex flex-col items-center justify-center p-6 text-slate-500`}>
            <div className="w-10 h-10 rounded-full border-2 border-cyan-500/40 border-t-cyan-400 animate-spin mb-3" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
              Retrieving NASA Archive Telemetry...
            </span>
          </div>
        )}

        {/* Fallback Display if network fails or image is offline */}
        {hasError ? (
          <div className={`w-full ${aspectRatio} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col items-center justify-center text-center border-b border-slate-800`}>
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-3 shadow-lg">
              <ImageIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1">
              {missionName}
            </span>
            <p className="text-[11px] text-slate-400 max-w-sm mb-2">
              {caption || 'Archival photographic record cataloged under NASA Planetary Data System.'}
            </p>
            <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
              {credit}
            </span>
          </div>
        ) : (
          <div className={`relative w-full ${aspectRatio} overflow-hidden cursor-pointer`} onClick={() => setIsModalOpen(true)}>
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setHasError(true);
              }}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                loading ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Hover overlay with zoom hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
              <span className="text-[11px] font-mono font-bold text-white flex items-center gap-1.5 bg-black/60 backdrop-blur px-2.5 py-1 rounded-lg border border-white/20">
                <Eye className="w-3.5 h-3.5 text-cyan-400" /> Click to Enlarge
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40">
                Official NASA Media
              </span>
            </div>
          </div>
        )}

        {/* Caption & Source Attribution Bar */}
        {(caption || credit) && (
          <figcaption className="bg-slate-950/90 border-t border-slate-800/80 px-4 py-2.5 flex items-center justify-between flex-wrap gap-2 text-xs">
            {caption && (
              <span className="text-slate-300 text-[11px] leading-snug max-w-xl">
                {caption}
              </span>
            )}
            {credit && (
              <span className="text-[10px] font-mono text-cyan-400/90 tracking-wide ml-auto bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                {credit}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {/* Modal Preview */}
      {isModalOpen && !hasError && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={src}
              alt={alt}
              className="max-h-[75vh] w-auto rounded-xl shadow-2xl border border-slate-700 object-contain"
            />
            <div className="mt-4 text-center max-w-2xl px-4">
              <p className="text-sm text-slate-200 mb-1">{caption}</p>
              <div className="flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
                <span>Credit: {credit}</span>
                <span>•</span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-cyan-400 hover:text-cyan-300 underline font-bold cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
