import React, { useEffect, useRef } from 'react';

/**
 * BackgroundAtmosphere
 * Canvas engine that creates smooth, cinematic transitions between planetary environments:
 * 1. Deep Space / Solar System (Twinkling stars, cosmic nebula)
 * 2. The Moon (Vacuum black, high-contrast stars, silver regolith glimmer)
 * 3. Mars (Rich rust-red atmosphere, iron-oxide dust storm particles)
 */
export default function BackgroundAtmosphere({ activeMission, isInHeroView }) {
  const canvasRef = useRef(null);

  // Target theme RGB & particle properties
  const targetThemeRef = useRef({
    topR: 10, topG: 14, topB: 24,
    botR: 4, botG: 5, botB: 8,
    particleColor: 'rgba(180, 210, 255, 0.6)',
    particleType: 'stars',
    speed: 0.3,
    densityFactor: 1
  });

  // Current interpolated theme
  const currentThemeRef = useRef({
    topR: 10, topG: 14, topB: 24,
    botR: 4, botG: 5, botB: 8,
    particleColor: 'rgba(180, 210, 255, 0.6)',
    particleType: 'stars',
    speed: 0.3,
    densityFactor: 1
  });

  useEffect(() => {
    if (isInHeroView) {
      // Cosmic Solar System Space View
      targetThemeRef.current = {
        topR: 16, topG: 20, topB: 35,
        botR: 4, botG: 5, botB: 10,
        particleColor: 'rgba(210, 230, 255, 0.6)',
        particleType: 'stars',
        speed: 0.25,
        densityFactor: 1
      };
      return;
    }

    if (!activeMission) return;

    if (activeMission.celestialBody === 'mars') {
      // MARS EFFECT: Rich rust-orange and red dust
      if (activeMission.id === 'opportunity') {
        targetThemeRef.current = {
          topR: 78, topG: 26, topB: 14,
          botR: 24, botG: 8, botB: 5,
          particleColor: 'rgba(240, 110, 60, 0.75)',
          particleType: 'dust',
          speed: 0.8,
          densityFactor: 1.3
        };
      } else if (activeMission.id === 'spirit-rover') {
        targetThemeRef.current = {
          topR: 72, topG: 30, topB: 16,
          botR: 22, botG: 9, botB: 6,
          particleColor: 'rgba(245, 125, 70, 0.7)',
          particleType: 'dust',
          speed: 0.75,
          densityFactor: 1.2
        };
      } else if (activeMission.id === 'viking1-lander') {
        targetThemeRef.current = {
          topR: 68, topG: 32, topB: 18,
          botR: 20, botG: 10, botB: 7,
          particleColor: 'rgba(235, 130, 75, 0.7)',
          particleType: 'dust',
          speed: 0.6,
          densityFactor: 1.1
        };
      } else {
        // InSight / Sojourner / generic Mars
        targetThemeRef.current = {
          topR: 65, topG: 28, topB: 16,
          botR: 18, botG: 8, botB: 6,
          particleColor: 'rgba(245, 120, 70, 0.7)',
          particleType: 'dust',
          speed: 0.65,
          densityFactor: 1.2
        };
      }
    } else {
      // MOON EFFECT: Stark vacuum black with crystalline silver regolith & brilliant stars
      if (activeMission.id === 'apollo15-lrv') {
        targetThemeRef.current = {
          topR: 24, topG: 28, topB: 36,
          botR: 6, botG: 7, botB: 10,
          particleColor: 'rgba(220, 235, 255, 0.55)',
          particleType: 'lunar_regolith',
          speed: 0.35,
          densityFactor: 0.9
        };
      } else if (activeMission.id === 'surveyor3-apollo12') {
        targetThemeRef.current = {
          topR: 22, topG: 26, topB: 34,
          botR: 6, botG: 7, botB: 9,
          particleColor: 'rgba(210, 230, 255, 0.5)',
          particleType: 'lunar_regolith',
          speed: 0.3,
          densityFactor: 0.85
        };
      } else {
        // Apollo 11 LRRR / deep space optical laser corridor
        targetThemeRef.current = {
          topR: 15, topG: 22, topB: 38,
          botR: 5, botG: 6, botB: 12,
          particleColor: 'rgba(190, 225, 255, 0.65)',
          particleType: 'stars',
          speed: 0.3,
          densityFactor: 1
        };
      }
    }
  }, [activeMission, isInHeroView]);

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

    const PARTICLE_COUNT = 85;
    let particles = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.2 + 0.6,
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

      // Smooth color morphing (frame-by-frame interpolation)
      cur.topR = lerp(cur.topR, tgt.topR, 0.035);
      cur.topG = lerp(cur.topG, tgt.topG, 0.035);
      cur.topB = lerp(cur.topB, tgt.topB, 0.035);

      cur.botR = lerp(cur.botR, tgt.botR, 0.035);
      cur.botG = lerp(cur.botG, tgt.botG, 0.035);
      cur.botB = lerp(cur.botB, tgt.botB, 0.035);

      // Radial atmospheric backdrop
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        40,
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
          // Martian reddish iron-oxide dust
          ctx.fillStyle = tgt.particleColor.replace('0.7', `${currentAlpha}`);
        } else {
          // Lunar stars / regolith glimmer
          ctx.fillStyle = tgt.particleColor.replace('0.6', `${currentAlpha}`);
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-1000">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle vignette filter */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.85) 100%)',
        }}
      />
    </div>
  );
}
