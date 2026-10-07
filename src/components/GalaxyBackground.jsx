import React, { useEffect, useRef } from 'react';

/**
 * GalaxyBackground Component
 * High-performance 60 FPS HTML5 Canvas engine providing continuous space travel:
 * 1. Deep Galaxy & Solar System -> Deep indigo/black starry void with distant glowing nebulae
 * 2. Moon -> High-contrast monochrome lunar vacuum with silver regolith dust
 * 3. Mars -> Warm rust-red and orange iron-oxide atmospheric dust swirls
 *
 * Performance features:
 * - RequestAnimationFrame loop
 * - Lerp interpolation for butter-smooth color transitions
 * - Automatically throttles particle counts on mobile devices
 * - Listens to prefers-reduced-motion
 */
export default function GalaxyBackground({ currentEnvironment = 'space', cameraSpeed = 1, reducedMotion = false }) {
  const canvasRef = useRef(null);

  // Target theme RGB and particle settings
  const targetThemeRef = useRef({
    topR: 10, topG: 14, topB: 28,
    botR: 3, botG: 4, botB: 8,
    starR: 200, starG: 225, starB: 255,
    glow: 'rgba(56, 189, 248, 0.12)',
    particleSpeed: 0.35,
    type: 'space'
  });

  // Current interpolated theme
  const currentThemeRef = useRef({
    topR: 10, topG: 14, topB: 28,
    botR: 3, botG: 4, botB: 8,
    starR: 200, starG: 225, starB: 255,
    glow: 'rgba(56, 189, 248, 0.12)',
    particleSpeed: 0.35,
    type: 'space'
  });

  useEffect(() => {
    if (currentEnvironment === 'mars') {
      targetThemeRef.current = {
        topR: 90, topG: 28, topB: 14,          // Martian rust red
        botR: 24, botG: 7, botB: 4,            // Dark Martian basalt
        starR: 255, starG: 140, starB: 80,     // Iron oxide dust
        glow: 'rgba(239, 68, 68, 0.28)',
        particleSpeed: 0.7,
        type: 'mars'
      };
    } else if (currentEnvironment === 'moon') {
      targetThemeRef.current = {
        topR: 16, topG: 20, topB: 30,          // Monochrome space black
        botR: 4, botG: 5, botB: 8,             // Absolute lunar vacuum
        starR: 240, starG: 248, starB: 255,    // Crystalline silver regolith
        glow: 'rgba(224, 231, 255, 0.18)',
        particleSpeed: 0.3,
        type: 'moon'
      };
    } else {
      // Cosmic deep space & galaxy
      targetThemeRef.current = {
        topR: 8, topG: 12, topB: 26,           // Cosmic midnight navy
        botR: 2, botG: 3, botB: 7,             // Deep space void
        starR: 180, starG: 215, starB: 255,    // Distant star field
        glow: 'rgba(6, 182, 212, 0.15)',
        particleSpeed: 0.35,
        type: 'space'
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

    // Responsive particle count: 45 on mobile, 120 on desktop
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 45 : 120;
    const STAR_COUNT = isMobile ? 80 : 200;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Deep space stars (fixed or slow drifting)
    let stars = [];
    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 1.5 + 0.2, // Depth factor
          radius: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
    };

    // Foreground dynamic particles (regolith, dust, space dust)
    let particles = [];
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.2 + 0.6,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.6 + 0.1,
          opacity: Math.random() * 0.6 + 0.2,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    initStars();
    initParticles();

    // Lerp helper function
    const lerp = (start, end, factor) => start + (end - start) * factor;

    let tick = 0;

    const render = () => {
      tick += 1;
      const cur = currentThemeRef.current;
      const tgt = targetThemeRef.current;

      // Smooth color interpolation
      const lerpSpeed = reducedMotion ? 0.1 : 0.035;
      cur.topR = lerp(cur.topR, tgt.topR, lerpSpeed);
      cur.topG = lerp(cur.topG, tgt.topG, lerpSpeed);
      cur.topB = lerp(cur.topB, tgt.topB, lerpSpeed);

      cur.botR = lerp(cur.botR, tgt.botR, lerpSpeed);
      cur.botG = lerp(cur.botG, tgt.botG, lerpSpeed);
      cur.botB = lerp(cur.botB, tgt.botB, lerpSpeed);

      cur.starR = lerp(cur.starR, tgt.starR, lerpSpeed);
      cur.starG = lerp(cur.starG, tgt.starG, lerpSpeed);
      cur.starB = lerp(cur.starB, tgt.starB, lerpSpeed);

      cur.particleSpeed = lerp(cur.particleSpeed, tgt.particleSpeed, lerpSpeed);

      // Render cosmic gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, `rgb(${Math.round(cur.topR)}, ${Math.round(cur.topG)}, ${Math.round(cur.topB)})`);
      bgGradient.addColorStop(1, `rgb(${Math.round(cur.botR)}, ${Math.round(cur.botG)}, ${Math.round(cur.botB)})`);
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Distant atmospheric nebula glow
      const radialGlow = ctx.createRadialGradient(
        width * 0.5, height * 0.35, 10,
        width * 0.5, height * 0.45, Math.max(width, height) * 0.7
      );
      radialGlow.addColorStop(0, tgt.glow);
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render 3D Starfield
      const effectiveSpeed = reducedMotion ? 0.05 : cameraSpeed;
      stars.forEach((s) => {
        if (!reducedMotion) {
          s.y += s.z * 0.15 * effectiveSpeed;
          if (s.y > height) {
            s.y = 0;
            s.x = Math.random() * width;
          }
          s.twinklePhase += s.twinkleSpeed;
        }

        const twinkle = Math.sin(s.twinklePhase) * 0.25;
        const alpha = Math.max(0.1, Math.min(1, s.baseAlpha + twinkle));

        ctx.fillStyle = `rgba(${Math.round(cur.starR)}, ${Math.round(cur.starG)}, ${Math.round(cur.starB)}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * s.z, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render dynamic atmospheric particles (Martian dust / Lunar regolith)
      particles.forEach((p) => {
        if (!reducedMotion) {
          p.x += p.vx * cur.particleSpeed;
          p.y += p.vy * cur.particleSpeed;

          // Atmospheric dust drift
          if (tgt.type === 'mars') {
            p.x += Math.sin(tick * 0.015 + p.y * 0.02) * 0.4;
          }

          if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * width;
          }
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;

          p.pulse += 0.02;
        }

        const pulseAlpha = p.opacity + Math.sin(p.pulse) * 0.15;
        ctx.fillStyle = `rgba(${Math.round(cur.starR)}, ${Math.round(cur.starG)}, ${Math.round(cur.starB)}, ${Math.max(0.1, pulseAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion, cameraSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 transition-opacity duration-1000"
    />
  );
}
