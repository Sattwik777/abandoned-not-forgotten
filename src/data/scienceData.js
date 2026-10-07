/**
 * Scientific Discoveries Dataset: "WHAT DID THESE MACHINES TEACH US?"
 * Organized across 7 core planetary science disciplines:
 * 1. 💧 WATER
 * 2. 🌋 GEOLOGY
 * 3. 🌡️ CLIMATE
 * 4. 🧪 CHEMISTRY
 * 5. 🌍 PLANETARY HISTORY
 * 6. 🦠 HABITABILITY
 * 7. 🌌 SPACE EXPLORATION
 *
 * Each entry strictly answers:
 * - QUESTION: What did scientists want to know?
 * - EVIDENCE: Which mission/equipment provided evidence?
 * - DISCOVERY: What was learned?
 * - WHY IT MATTERS: Why is this important?
 */

export const SCIENCE_DOMAINS = [
  {
    id: "water",
    title: "Water on Other Worlds",
    icon: "Droplets",
    symbol: "💧",
    themeColor: "from-blue-500 to-cyan-400",
    summary: "From ancient standing lakes on Mars to water locked inside lunar volcanic glass, discarded machines revolutionized our understanding of water beyond Earth.",
    topics: [
      {
        id: "martian-groundwater",
        title: "Did liquid water ever flow across the surface of Mars?",
        question: "Could the dry, frozen red planet have once sustained liquid, bubbling groundwater and standing lakes capable of supporting life?",
        evidence: {
          mission: "Opportunity (MER-B) & Spirit (MER-A)",
          equipment: "Mössbauer Spectrometer, Microscopic Imager, Alpha Particle X-Ray Spectrometer (APXS)",
          site: "Meridiani Planum (Eagle & Endurance Craters)"
        },
        discovery: "Opportunity discovered gray hematite spherules ('Martian Blueberries') embedded in layered sedimentary sulfate bedrock. These concretions could only form through sustained precipitation inside liquid groundwater. Spirit additionally found cross-bedded ripple sands shaped by wave motion.",
        whyItMatters: "Proved beyond doubt that Mars was not always a desolate desert. For hundreds of millions of years in its ancient past, Mars had an active hydrological cycle with soaking groundwater and saline lakes."
      },
      {
        id: "subsurface-ice",
        title: "Does water ice survive just inches beneath the Martian soil today?",
        question: "Is there water trapped today on Mars that future human explorers could excavate for drinking, oxygen, and rocket fuel?",
        evidence: {
          mission: "Phoenix Mars Lander",
          equipment: "Robotic Arm Trenching Scoop & Thermal and Evolved-Gas Analyzer (TEGA)",
          site: "Green Valley, Vastitas Borealis (Martian Arctic)"
        },
        discovery: "Phoenix dug shallow trenches nicknamed 'Dodo-Goldilocks' and exposed bright white patches. Over four sols, the white chunks sublimated directly into vapor, definitively proving they were pure water ice rather than salt deposits.",
        whyItMatters: "Showed that vast reserves of pure water ice exist just centimeters beneath the surface in the Martian polar regions, serving as a critical in-situ resource for future human settlements."
      },
      {
        id: "lunar-water-glass",
        title: "Is the Moon completely bone-dry, or is water trapped in lunar rock?",
        question: "Did the Moon lose all volatile elements during the giant collision that formed it, or did water survive deep within the lunar mantle?",
        evidence: {
          mission: "Apollo 15 Lunar Roving Vehicle (LRV) & Apollo 17 ALSEP",
          equipment: "Astronaut Geological Sampling Tongs & Long-Term Core Drills",
          site: "Hadley Rille & Shorty Crater (Taurus-Littrow)"
        },
        discovery: "Samples returned from the sites where the Lunar Rovers were parked (such as the orange volcanic glass beads collected at Shorty Crater) contained micro-droplets of water trapped inside melt inclusions, with water concentrations comparable to Earth's upper mantle.",
        whyItMatters: "Overturned the 40-year scientific dogma that the Moon was completely dry. The discovery proved that the Moon's interior retained primordial water from the early solar system."
      }
    ]
  },
  {
    id: "geology",
    title: "Planetary Geology & Volcanism",
    icon: "Mountain",
    symbol: "🌋",
    themeColor: "from-amber-500 to-red-500",
    summary: "How planetary crusts, massive rift canyons, ancient lava tubes, and meteor craters formed across billions of years.",
    topics: [
      {
        id: "hadley-rille-formation",
        title: "How did the giant canyons and basalt plains of the Moon form?",
        question: "Were the mysterious meandering lunar valleys (rilles) carved by water, or were they collapsed lava tubes from massive ancient volcanic eruptions?",
        evidence: {
          mission: "Apollo 15 Lunar Roving Vehicle",
          equipment: "Ground Traverse Geologic Hammer, 500mm Telephoto Camera, Surface Rake",
          site: "Hadley Rille (Montes Apenninus)"
        },
        discovery: "By driving the LRV to the rim of Hadley Rille (a 300-meter deep gorge), astronauts photographed layered basalt strata on the far canyon wall, proving rilles are ancient collapsed lava conduits that flowed over 3.3 billion years ago.",
        whyItMatters: "Revealed that the Moon once experienced catastrophic, flood-basalt volcanism on a scale far surpassing any modern volcanic flows on Earth."
      },
      {
        id: "genesis-rock",
        title: "How old is the primordial lunar crust?",
        question: "Can we find pristine samples of the Moon's original floating crust from the epoch of the Lunar Magma Ocean?",
        evidence: {
          mission: "Apollo 15 LRV (Station 7 at Spur Crater)",
          equipment: "LRV traverse mobility system & tongs",
          site: "Spur Crater, Apennine Front"
        },
        discovery: "Astronauts drove the rover up the steep slope of Spur Crater and retrieved sample 15415—an anorthosite composed of 98% plagioclase feldspar nicknamed the 'Genesis Rock', dated to 4.1 billion years old.",
        whyItMatters: "Confirmed the Magma Ocean Hypothesis: that the newborn Moon was once completely melted, and lightweight feldspar crystals floated to the surface to crystallize into the lunar highlands."
      }
    ]
  },
  {
    id: "climate",
    title: "Atmosphere & Climate Evolution",
    icon: "CloudRain",
    symbol: "🌡️",
    themeColor: "from-sky-400 to-indigo-500",
    summary: "Tracking how a habitable world lost its air, and monitoring dust storms and atmospheric pressure changes.",
    topics: [
      {
        id: "martian-atmospheric-loss",
        title: "Why did Mars lose its thick atmosphere?",
        question: "How did a warm, wet planet transition into a frozen near-vacuum with atmospheric pressure less than 1% of Earth's?",
        evidence: {
          mission: "Viking 1 Lander & InSight Lander",
          equipment: "Meteorology Sensors, Gas Chromatograph Mass Spectrometer (GCMS)",
          site: "Chryse Planita & Elysium Planitia"
        },
        discovery: "Viking 1 and InSight continuously tracked daily atmospheric pressure swings, seasonal carbon dioxide freeze-out onto polar caps, and isotope ratios (argon, nitrogen) showing that the solar wind stripped away the majority of Mars' primordial atmosphere after its global magnetic dynamo shut down.",
        whyItMatters: "Provides a sobering cosmic lesson on planetary habitability: without a protective magnetic field, even oceans and thick skies can be stripped away into the vacuum of space."
      },
      {
        id: "global-dust-cycles",
        title: "How do planet-encircling dust storms behave?",
        question: "What triggers the massive dust storms that engulf the entire Martian globe every few Martian years?",
        evidence: {
          mission: "Opportunity & Spirit Rovers, Viking 1 Lander",
          equipment: "Solar Array Pyranometers & Mastcam Optical Depth (Tau) sensors",
          site: "Global coverage across Meridiani and Gusev"
        },
        discovery: "Recorded the thermal mechanics of solar heating on airborne dust. The 2018 storm witnessed by Opportunity reached an opacity (Tau) greater than 10.8—blocking over 99.5% of sunlight and causing intense atmospheric thermal expansion.",
        whyItMatters: "Essential for mission planners designing solar power arrays, atmospheric entry parachutes, and life support systems for future human Mars expeditions."
      }
    ]
  },
  {
    id: "chemistry",
    title: "Planetary Chemistry & Soil",
    icon: "FlaskConical",
    symbol: "🧪",
    themeColor: "from-emerald-400 to-teal-500",
    summary: "Analyzing the elemental building blocks, toxic salts, and exotic mineral compounds of extraterrestrial ground.",
    topics: [
      {
        id: "perchlorate-salts",
        title: "Is Martian soil fertile or toxic?",
        question: "What chemical oxidants and minerals make up the red dust covering Mars?",
        evidence: {
          mission: "Phoenix Mars Lander",
          equipment: "Wet Chemistry Laboratory (MECA)",
          site: "Vastitas Borealis"
        },
        discovery: "Phoenix discovered perchlorate salts (ClO4-) at concentrations of 0.5% to 1.0% in the soil. Perchlorates are powerful oxidizers that act as antifreeze, lowering the freezing point of water to -70°C.",
        whyItMatters: "Revolutionized planetary chemistry: while perchlorates lower the freezing point so briny liquid water can momentarily exist on Mars today, they are toxic to human thyroids and must be filtered out for human farming."
      },
      {
        id: "volcanic-hydrothermal-silica",
        title: "Were there ever boiling hot springs on Mars?",
        question: "Did Mars ever have volcanic hydrothermal systems like Yellowstone National Park?",
        evidence: {
          mission: "Spirit Rover (MER-A)",
          equipment: "Stuck Front-Right Wheel & Alpha Particle X-Ray Spectrometer (APXS)",
          site: "Home Plate, Gusev Crater"
        },
        discovery: "Spirit's jammed wheel gouged open a trench revealing 90% pure amorphous silica. On Earth, deposits of this purity only precipitate in volcanic fumaroles or boiling hydrothermal hot springs.",
        whyItMatters: "Hot springs on Earth are prime incubators for the emergence of microbial life, making Home Plate one of the highest-priority astrobiological targets in the solar system."
      }
    ]
  },
  {
    id: "planetary-history",
    title: "Planetary Interiors & Seismology",
    icon: "Globe",
    symbol: "🌍",
    themeColor: "from-violet-500 to-purple-600",
    summary: "Peering beneath the solid crust to measure planetary cores, mantle layers, and deep quakes.",
    topics: [
      {
        id: "martian-liquid-core",
        title: "Does Mars have an active interior with quakes and a molten core?",
        question: "Is Mars completely geologically dead, or does it still rumble with marsquakes and have a liquid iron core?",
        evidence: {
          mission: "InSight Lander",
          equipment: "Seismic Experiment for Interior Structure (SEIS)",
          site: "Elysium Planitia"
        },
        discovery: "InSight detected over 1,300 marsquakes, including a magnitude 4.7 quake in May 2022. By analyzing how seismic shear and pressure waves refracted, InSight proved Mars has a large, molten liquid core (radius ~1,830 km) rich in sulfur and light elements.",
        whyItMatters: "First time humanity mapped the three-dimensional internal crust, mantle, and core structure of another rocky planet beside Earth."
      },
      {
        id: "deep-moonquakes",
        title: "Does the Moon experience quakes even without tectonic plates?",
        question: "How does the gravitational tidal pull of Earth affect the Moon's interior?",
        evidence: {
          mission: "Apollo 11 LRRR & Apollo 17 ALSEP Passive Seismic Experiment",
          equipment: "Four-station lunar seismic network & Laser Retroreflectors",
          site: "Tranquility, Ocean of Storms, Fra Mauro, Taurus-Littrow"
        },
        discovery: "The ALSEP network recorded over 12,000 seismic events, demonstrating that the Moon experiences deep moonquakes (700–1200 km below the surface) triggered synchronously by Earth's tidal stress during perigee.",
        whyItMatters: "Revealed that the Moon's interior is not an inert lump of rock, but still flexes and cracks under gravitational tidal torque."
      }
    ]
  },
  {
    id: "habitability",
    title: "Astrobiology & Ancient Habitability",
    icon: "Dna",
    symbol: "🦠",
    themeColor: "from-green-400 to-emerald-600",
    summary: "Searching for the physical and chemical conditions where extraterrestrial life could have thrived.",
    topics: [
      {
        id: "neutral-ph-water",
        title: "Was Martian water too acidic for life, or ever drinkable?",
        question: "Did Mars only have caustic, battery-acid like waters, or did it have benign, life-friendly neutral pH water?",
        evidence: {
          mission: "Opportunity (MER-B) at Cape York",
          equipment: "Rock Abrasion Tool & APXS",
          site: "Endeavour Crater rim"
        },
        discovery: "After driving 30 kilometers, Opportunity discovered bright white veins of calcium sulfate (gypsum) and smectite clay minerals at Matijevic Hill that formed in neutral, non-acidic, potable water.",
        whyItMatters: "Proved that the earliest era of Mars (the Noachian Epoch) had benign, drinkable water that met all conditions required for life as we know it."
      },
      {
        id: "viking-labeled-release",
        title: "Did Viking detect signs of microbial metabolism in 1976?",
        question: "Could microbes be living in the topsoil of Chryse Planitia?",
        evidence: {
          mission: "Viking 1 Lander",
          equipment: "Biology Instrument (Labeled Release Experiment)",
          site: "Chryse Planitia"
        },
        discovery: "When radioactive nutrient broth was added to Martian soil, a rapid release of radioactive CO2 was measured—matching what microbial metabolism would do! However, the absence of organic molecules in the GCMS led NASA to conclude reactive peroxides in the soil caused the reaction.",
        whyItMatters: "Spurred 50 years of rigorous development in biosignature detection standards and planetary protection protocols."
      }
    ]
  },
  {
    id: "space-exploration",
    title: "Space Physics & Future Exploration",
    icon: "Compass",
    symbol: "🌌",
    themeColor: "from-fuchsia-500 to-pink-500",
    summary: "How hardware left behind continues testing fundamental laws of physics and paving the way for Artemis and Mars astronauts.",
    topics: [
      {
        id: "general-relativity-drift",
        title: "Is the Moon slowly drifting away from Earth?",
        question: "Can we test Einstein's theory of General Relativity by measuring the distance to the Moon down to millimeter precision?",
        evidence: {
          mission: "Apollo 11 Lunar Laser Ranging Retroreflector (LRRR)",
          equipment: "100-corner-cube fused silica retroreflector array",
          site: "Mare Tranquillitatis"
        },
        discovery: "By bouncing pulsed lasers off the Apollo 11 reflector from Earth observatories continuously for 55+ years, scientists determined that the Moon drifts away from Earth at exactly 3.8 centimeters per year due to ocean tidal friction.",
        whyItMatters: "Provided the most precise tests of Einstein's Equivalence Principle in cosmic history and proved the Moon's core is partially liquid."
      },
      {
        id: "long-term-space-exposure",
        title: "What happens to machines after years in the space vacuum?",
        question: "How do radiation, extreme temperature swings (+120°C to -130°C), and micrometeorites degrade human materials over time?",
        evidence: {
          mission: "Surveyor 3 & Apollo 12 Astronaut Rendezvous",
          equipment: "Surveyor 3 Optical TV Camera & Soil Scoop returned by Apollo 12",
          site: "Ocean of Storms"
        },
        discovery: "Apollo 12 astronauts retrieved Surveyor 3's camera after 31 months on the Moon. Back in sterile labs on Earth, scientists discovered optical coatings had browned from solar wind protons and insulation had embrittled from micrometeoroid sandblasting.",
        whyItMatters: "The single most important real-world empirical test of long-term space material degradation, directly guiding the design of the International Space Station, Hubble Space Telescope, and the Artemis lunar base."
      }
    ]
  }
];
