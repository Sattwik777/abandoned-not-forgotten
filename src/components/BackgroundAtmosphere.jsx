import React, { useEffect, useRef } from 'react';

/**
 * BackgroundAtmosphere
 * Canvas engine that creates smooth, cinematic transitions between planetary environments
 * (e.g., deep space stars, dusty reddish Mars, silken silvery Moon regolith).
 * Uses frame-by-frame linear interpolation (LERP) for buttery-smooth visual fades on scroll.
 */
export default function BackgroundAtmosphere({ activeMission, celestialBody }) {
  const canvasRef = useRef(null);
  const targetThemeRef = useRef({
    topR: 15, topG: 18, topB: 28,
    botR: 5, botG: 6, botB: 10,
    particleColor: 'rgba(180, 210, 255, 0.5)',
    particleType: 'stars',
    speed: 0.3
  });
  const currentThemeRef = useRef({
    topR: 15, topG: 18, topB: 28,
    botR: 5, botG: 6, botB: 10,
    particleColor: 'rgba(180, 210, 255, 0.5)',
    particleType: 'stars',
    speed: 0.3
  });

  // Update target theme when active mission changes
  useEffect(() => {
    if (!activeMission) return;

    if (activeMission.celestialBody === 'mars') {
      if (activeMission.id === 'opportunity') {
        // Deep dusty rust red
        targetThemeRef.current = {
          topR: 62, topG: 22, topB: 15,
          botR: 18, botG: 6, botB: 5,
          particleColor: 'rgba(235, 110, 70, 0.7)',
          particleType: 'dust',
          speed: 0.7
        };
      } else if (activeMission.id === 'insight-lander') {
        // Hazy twilight amber & dust
        targetThemeRef.current = {
          topR: 55, topG: 25, topB: 18,
          botR: 15, botG: 7, botB: 6,
          particleColor: 'rgba(245, 130, 85, 0.65)',
          particleType: 'dust',
          speed: 0.5
        };
      } else {
        // Sojourner / rocky warm red
        targetThemeRef.current = {
          topR: 58, topG: 30, topB: 18,
          botR: 20, botG: 10, botB: 6,
          particleColor: 'rgba(245, 140, 90, 0.6)',
          particleType: 'dust',
          speed: 0.6
        };
      }
    } else {
      // Moon missions
      if (activeMission.id === 'apollo15-lrv') {
        // Silvery dark lunar basalt
        targetThemeRef.current = {
          topR: 28, topG: 32, topB: 40,
          botR: 8, botG: 9, botB: 12,
          particleColor: 'rgba(215, 230, 250, 0.5)',
          particleType: 'lunar_regolith',
          speed: 0.4
        };
      } else {
        // Apollo 11 LRRR / deep optical starry vacuum
        targetThemeRef.current = {
          topR: 18, topG: 25, topB: 42,
          botR: 6, botG: 8, botB: 15,
          particleColor: 'rgba(190, 225, 255, 0.6)',
          particleType: 'stars',
          speed: 0.3
        };
      }
    }
  }, [activeMission]);

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

    // Particle pool
    const PARTICLE_COUNT = 75;
    let particles = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.2 + 0.6,
          vx: (Math.random() - 0.5) * 0.4,
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

      // Smooth color morphing
      cur.topR = lerp(cur.topR, tgt.topR, 0.04);
      cur.topG = lerp(cur.topG, tgt.topG, 0.04);
      cur.topB = lerp(cur.topB, tgt.topB, 0.04);

      cur.botR = lerp(cur.botR, tgt.botR, 0.04);
      cur.botG = lerp(cur.botG, tgt.botG, 0.04);
      cur.botB = lerp(cur.botB, tgt.botB, 0.04);

      // Create radial atmospheric gradient
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.25,
        50,
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

      // Draw planetary particles / dust motes
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

        // Dust has slight tail if on Mars
        if (tgt.particleType === 'dust') {
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
      {/* Subtle scanline / vignette texture */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />
    </div>
  );
}
