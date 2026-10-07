import React, { useEffect, useRef } from 'react';

/**
 * BackgroundAtmosphere
 * Canvas engine that creates an unmistakable, cinematic visual distinction between:
 * 1. Deep Space (Solar System & Map) -> Midnight blue-black starry void
 * 2. The Moon -> High-contrast monochrome lunar vacuum with brilliant silver regolith crystals
 * 3. Mars -> Rich, warm rust-orange and red iron-oxide dust storm atmosphere
 */
export default function BackgroundAtmosphere({ currentEnvironment = 'space' }) {
  const canvasRef = useRef(null);

  // Target theme RGB & particle properties
  const targetThemeRef = useRef({
    topR: 10, topG: 14, topB: 24,
    botR: 3, botG: 4, botB: 8,
    particleColor: 'rgba(200, 225, 255, 0.7)',
    particleType: 'stars',
    speed: 0.3,
    glow: 'rgba(56, 189, 248, 0.15)'
  });

  // Current interpolated theme
  const currentThemeRef = useRef({
    topR: 10, topG: 14, topB: 24,
    botR: 3, botG: 4, botB: 8,
    particleColor: 'rgba(200, 225, 255, 0.7)',
    particleType: 'stars',
    speed: 0.3,
    glow: 'rgba(56, 189, 248, 0.15)'
  });

  useEffect(() => {
    if (currentEnvironment === 'mars') {
      // DRAMATIC VIBRANT MARS EFFECT
      targetThemeRef.current = {
        topR: 95, topG: 28, topB: 14,       // Vivid Martian rust red
        botR: 26, botG: 7, botB: 4,         // Dark Martian bedrock
        particleColor: 'rgba(255, 115, 55, 0.85)', // Glowing red-orange dust particles
        particleType: 'dust',
        speed: 0.85,
        glow: 'rgba(239, 68, 68, 0.35)'
      };
    } else if (currentEnvironment === 'moon') {
      // DRAMATIC STARK LUNAR EFFECT
      targetThemeRef.current = {
        topR: 18, topG: 22, topB: 32,       // Deep silver-tinted space black
        botR: 4, botG: 5, botB: 8,          // Absolute lunar vacuum
        particleColor: 'rgba(240, 248, 255, 0.95)', // Brilliant silver regolith crystals & stars
        particleType: 'lunar_regolith',
        speed: 0.35,
        glow: 'rgba(224, 231, 255, 0.25)'
      };
    } else {
      // DEEP COSMIC SPACE / SOLAR SYSTEM EFFECT
      targetThemeRef.current = {
        topR: 12, topG: 16, topB: 30,       // Cosmic deep space navy
        botR: 3, botG: 4, botB: 8,          // Void
        particleColor: 'rgba(190, 220, 255, 0.7)',
        particleType: 'stars',
        speed: 0.25,
        glow: 'rgba(6, 182, 212, 0.2)'
      };
    }
  }, [currentEnvironment]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const PARTICLE_COUNT = 90;
    let particles = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.4 + 0.6,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.7 + 0.3,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    initParticles();

    // Lerp helper
    const lerp = (start, end, factor) => start + (end - start) * factor;

    // Animation Loop
    const render = () => {
      const cur = currentThemeRef.current;
      const tgt = targetThemeRef.current;

      // Responsive interpolation factor for swift transitions
      cur.topR = lerp(cur.topR, tgt.topR, 0.06);
      cur.topG = lerp(cur.topG, tgt.topG, 0.06);
      cur.topB = lerp(cur.topB, tgt.topB, 0.06);

      cur.botR = lerp(cur.botR, tgt.botR, 0.06);
      cur.botG = lerp(cur.botG, tgt.botG, 0.06);
      cur.botB = lerp(cur.botB, tgt.botB, 0.06);

      // Create radial atmospheric gradient
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        30,
        width * 0.5,
        height * 0.7,
        Math.max(width, height)
      );

      const topColor = `rgb(${Math.round(cur.topR)}, ${Math.round(cur.topG)}, ${Math.round(cur.topB)})`;
      const botColor = `rgb(${Math.round(cur.botR)}, ${Math.round(cur.botG)}, ${Math.round(cur.botB)})`;

      gradient.addColorStop(0, topColor);
      gradient.addColorStop(1, botColor);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render drifting particles
      particles.forEach((p) => {
        p.pulse += 0.02;
        p.y += p.vy * tgt.speed;
        p.x += p.vx * tgt.speed;

        // Wrap around
        if (p.y > height) {
          p.y = -5;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (tgt.particleType === 'dust') {
          // Warm Martian dust motes
          ctx.fillStyle = tgt.particleColor.replace('0.85', `${currentAlpha * 0.85}`);
        } else {
          // High-contrast lunar regolith silver crystals / stars
          ctx.fillStyle = tgt.particleColor.replace('0.95', `${currentAlpha * 0.95}`);
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Dynamic planetary horizon glow */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-colors duration-700"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 15%, transparent 30%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />
    </div>
  );
}
