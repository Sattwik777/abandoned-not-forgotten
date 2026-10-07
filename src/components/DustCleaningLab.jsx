import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Wind, CheckCircle2 } from 'lucide-react';

/**
 * DustCleaningLab
 * Interactive simulation teaching kids how Martian atmospheric dust
 * covers solar panels and chokes rovers, with an interactive wipe-to-clean canvas!
 */
export default function DustCleaningLab({ missionName = "Opportunity" }) {
  const canvasRef = useRef(null);
  const [cleanedPercent, setCleanedPercent] = useState(12);
  const [isFullyCleaned, setIsFullyCleaned] = useState(false);
  const isDrawing = useRef(false);

  const drawDustLayer = useCallback((ctx, width, height) => {
    ctx.fillStyle = '#b8512e';
    ctx.fillRect(0, 0, width, height);

    // Add textured noise for Martian dust
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 2 + 0.5;
      ctx.fillStyle = Math.random() > 0.5 ? '#8f3517' : '#d96c43';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 380);
    const height = (canvas.height = 180);

    // Draw dusty layer
    drawDustLayer(ctx, width, height);
  }, [drawDustLayer]);

  const cleanAtPoint = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    // Estimate clean ratio
    setCleanedPercent((prev) => {
      const next = Math.min(100, prev + 2.5);
      if (next >= 90 && !isFullyCleaned) {
        setIsFullyCleaned(true);
      }
      return Math.round(next);
    });
  };

  const handlePointerDown = (e) => {
    isDrawing.current = true;
    handlePointerMove(e);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
  };

  const handlePointerMove = (e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    cleanAtPoint(x, y);
  };

  const resetDust = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    drawDustLayer(ctx, canvas.width, canvas.height);
    setCleanedPercent(12);
    setIsFullyCleaned(false);
  };

  return (
    <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-5 my-6 backdrop-blur-md shadow-xl">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 text-amber-400 animate-pulse" />
          <h4 className="font-bold text-white text-base">
            Mini-Lab: Clean {missionName}'s Solar Panels!
          </h4>
        </div>
        <button
          onClick={resetDust}
          className="text-xs px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg border border-amber-500/30 transition"
        >
          Reset Dust Storm
        </button>
      </div>

      <p className="text-xs text-slate-300 mb-4 leading-relaxed">
        Martian dust storms cover solar panels, cutting electrical power. 
        <strong> Drag your cursor or finger across the solar cells below</strong> to act as a Martian dust-devil wind and restore power!
      </p>

      {/* Solar Panel Canvas Container */}
      <div className="relative mx-auto max-w-[380px] h-[180px] rounded-xl overflow-hidden border-2 border-slate-700 shadow-inner select-none cursor-grab active:cursor-grabbing">
        {/* Underneath: Gleaming Blue Photovoltaic Solar Grid */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-950 to-blue-950 flex flex-col justify-between p-2"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(100, 180, 255, 0.25) 19px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(100, 180, 255, 0.25) 39px)'
          }}
        >
          <div className="flex justify-between text-[10px] text-blue-300 font-mono">
            <span>GaAs TRIPLE-JUNCTION</span>
            <span>SOLAR GRID ACTIVE</span>
          </div>
          <div className="text-center font-bold text-blue-400/40 text-2xl tracking-widest pointer-events-none">
            NASA MER SOLAR ARRAY
          </div>
          <div className="flex justify-end text-[10px] text-emerald-400 font-mono">
            {cleanedPercent}% EFFICIENCY
          </div>
        </div>

        {/* Top: Scratchable Dust Layer */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="absolute inset-0 w-full h-full touch-none"
        />
      </div>

      {/* Power Gauge */}
      <div className="mt-4">
        <div className="flex justify-between items-center text-xs font-mono mb-1">
          <span className="text-slate-300">Rover Battery Generation:</span>
          <span className={cleanedPercent > 80 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
            {Math.round(cleanedPercent * 6.5)} Watt-Hours ({cleanedPercent}%)
          </span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700">
          <div
            className={`h-full transition-all duration-300 ${
              cleanedPercent > 80 ? 'bg-gradient-to-r from-amber-500 to-emerald-400' : 'bg-amber-600'
            }`}
            style={{ width: `${cleanedPercent}%` }}
          />
        </div>
      </div>

      {isFullyCleaned && (
        <div className="mt-3 p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl flex items-center gap-2 text-emerald-300 text-xs animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Success!</strong> You cleared the panels! The batteries are recharging just like when real Martian dust devils cleaned Opportunity in 2005!
          </span>
        </div>
      )}
    </div>
  );
}
