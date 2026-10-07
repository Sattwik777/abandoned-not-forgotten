# OFFWORLD LEGACY

> **"Exploring the machines that carried science beyond Earth."**
> 
> *A submission for the 2026 NASA Space Apps Challenge*  
> **Challenge:** *"Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars"*

---

## 🚀 Overview

**Offworld Legacy** is an immersive digital storytelling experience and virtual museum celebrating NASA's robotic pioneers—the rovers, landers, scientific experiments, and instruments that were left behind on the Moon and Mars.

Rather than a static catalog, Offworld Legacy is designed as one continuous space journey:
$$\text{Galaxy} \longrightarrow \text{Deep Space} \longrightarrow \text{Solar System} \longrightarrow \text{Moon / Mars} \longrightarrow \text{Mission} \longrightarrow \text{Equipment} \longrightarrow \text{Discovery} \longrightarrow \text{Science} \longrightarrow \text{Legacy} \longrightarrow \text{Return to Earth}$$

The core message of the experience:
> **"These machines may have been left behind, but the science they produced continues to matter."**

---

## 🏛️ Digital Museum Structure

1. **Home / Cinematic Intro:** Opens in deep space with multi-tiered parallax starfields and nebulae. Follows a scroll-driven journey into the Solar System with clickable orbital waypoints.
2. **Artifact Explorer:** Museum-grade archive with instant debounced search, multi-factor filtering (by Celestial World, Equipment Type, Status), and launch year sorting.
3. **Destination: Moon:** Dedicated lunar surface experience with verified landing site coordinates and topography.
4. **Destination: Mars:** Dedicated Martian surface experience highlighting rovers across iron oxide desert basins and crater floors.
5. **Artifact Story Pages:** Structured 9-step narrative journey for each piece of equipment:
   - **Artifact Hero:** Authentic specifications, dates, and official NASA public domain imagery.
   - **The Journey:** Chronological trajectory from launch to final resting place.
   - **Why Was It There?:** The primary scientific mission objectives.
   - **The Challenge:** Extreme thermal, radiation, and environmental obstacles overcome.
   - **What Did It Discover?:** Plain-language scientific breakthroughs with diagrams.
   - **The Human Story:** The engineers, flight directors, and scientists on Earth.
   - **The Legacy:** Direct impact on modern exploration (Curiosity, Perseverance, Artemis).
   - **Where Is It Now?:** Exact coordinates and current physical status on the surface.
   - **NASA Sources:** Direct links to PDS archives, USGS gazetteers, and NASA catalogs.
   - **Mission Ending & Return to Space:** Cinematic conclusion with *"Some explorers came home. Some never did. But none of them were forgotten."*
6. **Mission Timeline:** Interactive chronological expedition guide spanning six decades from the 1960s to the 2020s.
7. **Planetary Cartography Atlas:** High-definition equirectangular orbital photographic maps of the Moon and Mars with verified IAU geological nomenclature and radar beacons.
8. **Science Wing ("What Did These Machines Teach Us?"):** 7 planetary science disciplines:
   - 💧 **Water** (Hematite blueberries, subsurface polar ice, lunar volcanic glass)
   - 🌋 **Geology** (Hadley Rille, Genesis Rock, basaltic volcanism)
   - 🌡️ **Climate** (Martian atmospheric loss, global dust storms)
   - 🧪 **Chemistry** (Perchlorate oxidants, hydrothermal silica)
   - 🌍 **Planetary History** (1,300+ marsquakes, molten iron core, tidal moonquakes)
   - 🦠 **Habitability** (Ancient neutral pH waters, biosignature search criteria)
   - 🌌 **Space Exploration** (Lunar laser ranging drift, long-term vacuum material exposure)
9. **Educational Mode ("Learn Like a Space Scientist"):**
   - *"Did You Know?"* curiosity cards
   - *"Mission Challenge: What Would You Do?"* engineering decision scenarios
   - *Laser Bounce Lab* (Speed-of-light lunar laser ranging simulator)
   - *Dust Cleaning Lab* (Martian dust devil solar panel restoration simulator)
   - *Junior Cosmic Explorer Logbook* (Earn 10 collectible mission badges)
10. **NASA Sources & API Explorer:** Fact vs. narrative transparency guide and live query tool for the official NASA Image and Video Library.

---

## 🛰️ Verified Hardware Registry

| Machine | Celestial Body | Type | Launch Year | Verified Location |
| :--- | :---: | :---: | :---: | :--- |
| **Opportunity (MER-B)** | Mars | Rover | 2003 | Perseverance Valley, Endeavour Crater (-1.9462°, -5.5266°) |
| **Spirit (MER-A)** | Mars | Rover | 2003 | Home Plate, Gusev Crater (-14.5684°, 175.4726°) |
| **Apollo 15 LRV (LRV-001)** | Moon | Rover | 1971 | Hadley Rille, Montes Apenninus (26.1322°, 3.6339°) |
| **Surveyor 3** | Moon | Lander | 1967 | Ocean of Storms (-3.0150°, -23.4180°) |
| **InSight Lander** | Mars | Lander | 2018 | Elysium Planitia (4.5020°, 135.6230°) |
| **Apollo 11 LRRR** | Moon | Experiment | 1969 | Mare Tranquillitatis (0.6734°, 23.4731°) |
| **Viking 1 Lander** | Mars | Lander | 1975 | Chryse Planitia (22.6970°, -48.2220°) |
| **Sojourner (Pathfinder)** | Mars | Rover | 1996 | Ares Vallis (19.3300°, -33.5500°) |
| **Phoenix Mars Lander** | Mars | Lander | 2007 | Vastitas Borealis (68.2188°, -125.7492°) |
| **Apollo 17 ALSEP Suite** | Moon | Experiment | 1972 | Taurus-Littrow Valley (20.1908°, 30.7717°) |

---

## 📡 NASA Open Data & API Integration

Primary sources utilized:
- **NASA Open Data:** [data.nasa.gov](https://data.nasa.gov/)
- **NASA Open Source Code:** [code.nasa.gov](https://code.nasa.gov/)
- **NASA APIs:** [api.nasa.gov](https://api.nasa.gov/)
- **NASA Planetary Data System (PDS):** [pds.nasa.gov](https://pds.nasa.gov/)
- **NASA Image and Video Library:** [images-api.nasa.gov](https://images-api.nasa.gov/)
- **USGS Astrogeology Gazetteer:** [planetarynames.wr.usgs.gov](https://planetarynames.wr.usgs.gov/)

### Environment Configuration
The application supports an optional NASA API key via environment variable:
```env
VITE_NASA_API_KEY=your_key_here
```
If omitted, it defaults gracefully to `DEMO_KEY` with automated fallback caching.

---

## ⚡ Performance & Accessibility Highlights

- **60 FPS HTML5 Canvas Particle Engine:** Smooth LERP color and velocity interpolation between deep space, lunar vacuum, and Martian dust storms.
- **Adaptive Mobile Throttling:** Automatically halves particle and star counts on mobile screens to preserve battery and frame rate.
- **Accessibility:** Full `prefers-reduced-motion` detection and user toggle; Web Speech API audio narration for classroom accessibility.
- **Audio Acoustics:** Web Audio API synthesizer modeling thin Martian wind noise and Apollo Capcom Quindar radio beeps (2525 Hz).
- **Zero Layout Thrashing:** Hardware-accelerated GPU transforms and opacity transitions.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4
- **Graphics & Sound:** HTML5 Canvas, Web Audio API, Web Speech API
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 💻 Local Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

*Submitted to the 2026 NASA Space Apps Challenge.*
