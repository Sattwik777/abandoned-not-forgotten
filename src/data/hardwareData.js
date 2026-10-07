/**
 * NASA Discarded Hardware & Monument Registry
 * Data derived from:
 * - NASA Open Data Portal (data.nasa.gov)
 * - NASA Planetary Data System (PDS)
 * - NASA JPL Mission Archives & NSSDC Master Catalog
 * - USGS Astrogeology Science Center
 * - ESA Planetary Science Archive
 */

export const HARDWARE_REGISTRY = [
  {
    id: "opportunity",
    name: "Opportunity (MER-B)",
    nickname: "Oppy: The 15-Year Marathon Runner",
    celestialBody: "mars",
    type: "rover",
    coordinates: {
      latitude: -1.9462,
      longitude: 354.4734,
      displayCoords: "1.9462° S, 354.4734° E",
      siteName: "Perseverance Valley, Endeavour Crater, Meridiani Planum"
    },
    timeline: {
      launched: "July 7, 2003",
      landed: "January 25, 2004",
      lastContact: "June 10, 2018 (Sol 5,111)",
      missionDuration: "14 years, 136 days (Designed for 90 days!)",
      distanceTraveled: "45.16 km (28.06 miles) — Solar System Marathon Record"
    },
    status: "Silenced by a planet-encircling Martian dust storm",
    currentCondition: "Stationed on the upper slopes of Perseverance Valley, blanketed in fine reddish iron-oxide dust under the thin Martian sky.",
    atmosphericTheme: {
      gradient: "radial-gradient(ellipse at 50% 20%, #4a1c11 0%, #200b08 45%, #0d0403 100%)",
      particleColor: "rgba(224, 102, 60, 0.65)",
      particleType: "dust",
      glowColor: "rgba(255, 107, 74, 0.25)"
    },
    story: {
      audioGreeting: "opportunity_wind.mp3",
      heroQuote: "My battery is low and it's getting dark.",
      intro: "Hi, Earth friends! I'm Opportunity, though the engineers at NASA called me Oppy. I was built as a twin alongside my sister Spirit. NASA designed me to survive just 90 Martian days (sols). They wondered if I could even drive 1 kilometer. Little did they know, I would stay awake for almost 15 Earth years, rolling over 45 kilometers across the red desert!",
      chapters: [
        {
          title: "1. The Airbag Bounce & The Hole-in-One",
          content: "On January 25, 2004, I didn't land with rockets—I was wrapped inside a giant cocoon of 24 bouncing airbags! I bounced across the Martian desert dozens of times like an enormous beach ball before rolling right into a tiny crater called Eagle Crater. NASA scientists cheered and called it the ultimate 'hole-in-one' in cosmic history!"
        },
        {
          title: "2. The Secret of the Martian 'Blueberries'",
          content: "As soon as I turned on my microscopic imager, I saw something unbelievable: tiny, spherical grey beads scattered across the reddish soil. Scientists nicknamed them 'Martian blueberries.' By analyzing them with my Mössbauer Spectrometer, we discovered they were made of hematite—a mineral that forms inside ancient, liquid, bubbly water! I proved to all of humanity that ancient Mars had lakes and soaking groundwater."
        },
        {
          title: "3. Surviving Against All Odds",
          content: "I survived the harsh freeze of Martian winters, got stuck in sand dunes for weeks (my engineers had to drive me backwards sol after sol to wiggle free!), and had my solar panels cleaned by lucky Martian 'dust devils' (whirlwinds) that swept my panels clean like robotic car washes."
        },
        {
          title: "4. The Final Great Dust Storm",
          content: "In June 2018, a monster storm began. Not a regular dust storm—a planet-encircling tempest so thick it blotted out 99% of the sunlight. With my solar panels starved of energy, my batteries dwindled. On Sol 5111, I sent my final telemetry packet. NASA engineers sent me over a thousand wake-up commands and played Billie Holiday's 'I'll Be Seeing You,' but the silence remained. I had run my race."
        },
        {
          title: "5. My Monument for Future Astronauts",
          content: "Today, I sit silently overlooking Endeavour Crater. One day, when human boots step on Mars, astronauts will hike up Perseverance Valley, brush the red dust off my solar panels, and read my tracks preserved forever in the soil."
        }
      ]
    },
    hardwareAnatomy: [
      {
        part: "Pancake Solar Arrays",
        description: "Triple-junction gallium arsenide cells producing up to 140 watts at noon. Dust buildup slowly reduced efficiency until the 2018 storm."
      },
      {
        part: "Pancam & Navcam Mast",
        description: "Stereo panoramic cameras mounted 1.5 meters high, providing the robotic equivalent of human eyes with 360-degree vision."
      },
      {
        part: "Rock Abrasion Tool (RAT)",
        description: "A diamond-tipped high-speed grinder on my robotic arm used to scrape off weathered rock crust and inspect fresh interior rock."
      },
      {
        part: "Mössbauer & APXS Spectrometers",
        description: "Nuclear detectors that fired alpha particles and gamma rays into rocks to identify iron minerals and elemental recipes."
      },
      {
        part: "Rocker-Bogie Suspension",
        description: "Six cleated aluminum wheels capable of climbing rocks twice their diameter without tilting the body over."
      }
    ],
    scienceHighlights: [
      "Confirmed ancient acidic water once soaked the surface of Meridiani Planum.",
      "Discovered hydrated clay minerals (smectite) in Endeavour Crater indicating neutral, life-friendly water.",
      "First rover to discover an iron-nickel meteorite on another planet ('Heat Shield Rock').",
      "Set the all-time extraterrestrial driving distance record (45.16 km)."
    ],
    quiz: {
      question: "What famous mineral spherules did Opportunity discover that proved ancient Mars had water?",
      options: [
        "Martian Blueberries (Hematite)",
        "Red Rubies",
        "Liquid Mercury Drops",
        "Granite Pebbles"
      ],
      correctIndex: 0,
      explanation: "Correct! The 'blueberries' were hematite concretions that precipitation from ancient liquid groundwater."
    },
    nasaDataSources: [
      {
        name: "NASA PDS Mars Exploration Rover Archive",
        datasetId: "PDS-MER-APXS-EDR-V1.0",
        url: "https://data.nasa.gov/dataset/Mars-Exploration-Rover-Opportunity-Science-Data/pds-mer",
        description: "Full trajectory telemetry, sol timestamps, and raw Mössbauer spectrometer counts."
      },
      {
        name: "NASA Image & Video Library (PIA16918)",
        datasetId: "PIA16918",
        url: "https://images.nasa.gov/details/PIA16918",
        description: "Opportunity's self-portrait and Perseverance Valley final panorama."
      },
      {
        name: "USGS Astrogeology Gazetteer: Meridiani Planum",
        datasetId: "USGS-FEATURE-3856",
        url: "https://planetarynames.wr.usgs.gov/Feature/3856",
        description: "Official planetary nomenclature and elevation contours of the landing ellipse."
      }
    ]
  },
  {
    id: "apollo15-lrv",
    name: "Apollo 15 Lunar Roving Vehicle (LRV-001)",
    nickname: "The First Car on the Moon: Parked Forever at Hadley Rille",
    celestialBody: "moon",
    type: "rover",
    coordinates: {
      latitude: 26.1322,
      longitude: 3.6339,
      displayCoords: "26.1322° N, 3.6339° E",
      siteName: "Hadley-Apennine Basin, Mare Imbrium"
    },
    timeline: {
      launched: "July 26, 1971",
      landed: "July 30, 1971",
      lastContact: "August 2, 1971 (Parked to film Falcon liftoff)",
      missionDuration: "3 days on lunar surface",
      distanceTraveled: "27.76 km (17.25 miles)"
    },
    status: "Parked facing Lunar Module Falcon; intact in the lunar vacuum",
    currentCondition: "Pristine condition. Because the Moon has no wind, rain, or atmosphere, its tire tracks and chassis look virtually identical to the moment astronaut Dave Scott stepped out 50+ years ago.",
    atmosphericTheme: {
      gradient: "radial-gradient(ellipse at 50% 20%, #262930 0%, #111317 45%, #050608 100%)",
      particleColor: "rgba(220, 230, 245, 0.45)",
      particleType: "lunar_regolith",
      glowColor: "rgba(180, 205, 240, 0.2)"
    },
    story: {
      heroQuote: "Man's greatest drive across the silver plains.",
      intro: "Vroom! Or rather, *complete silence*—because sound cannot travel in a vacuum! I was the very first vehicle humanity ever drove on another world. Astronauts David Scott and Jim Irwin unfolded me like an origami transformer from the side of the Apollo 15 Lunar Module 'Falcon.'",
      chapters: [
        {
          title: "1. The Origami Space Car",
          content: "How do you fit a 10-foot-long electric dune buggy inside a cramped lunar lander? NASA Boeing engineers folded me into four sections like a pocket knife! Once the astronauts pulled two nylon lanyards on the Moon, springs and pulleys automatically deployed my wheels and chassis onto the pristine grey soil."
        },
        {
          title: "2. The Piano-Wire Wheels",
          content: "Rubber tires would burst in the harsh vacuum and freeze brittle in the -150°C cold of space. So engineers built my wheels from woven piano-wire zinc-coated steel mesh with titanium chevron treads! I floated over the powdery lunar soil at speeds up to 13 km/h (8 mph), kicking up famous 'rooster tails' of dust."
        },
        {
          title: "3. The Discovery of the 'Genesis Rock'",
          content: "Before me, astronauts could only walk a few hundred meters from the lander. With me, Dave and Jim drove nearly 5 kilometers away to the base of Mons Hadley Delta. There, they spotted a gleaming white crystalline rock perched on the rim of Spur Crater: the 'Genesis Rock' (anorthosite), dating back 4.1 billion years to when the Moon's original crust first solidified!"
        },
        {
          title: "4. The Ultimate Parking Job",
          content: "When it was time for the astronauts to fly home, Commander Dave Scott drove me 90 meters away from the Lunar Module Falcon. He deliberately parked me and pointed my remote-controlled color television camera right at the spaceship. An engineer back in Houston, Ed Fendell, controlled my camera joystick over a 2.5-second radio delay to track Falcon as its rocket engine fired, sending humanity the first live broadcast of a lunar liftoff!"
        },
        {
          title: "5. A Timeless Lunar Monument",
          content: "Because the Moon has no atmosphere, water, or weather to erode anything, my odometer still reads 27.76 kilometers. My ignition switch is still in the 'OFF' position. I am an open-air museum awaiting humanity's return in the Artemis program."
        }
      ]
    },
    hardwareAnatomy: [
      {
        part: "Chevron Wire Mesh Wheels",
        description: "0.8-meter diameter wheels made of spun piano-wire zinc mesh with chevron titanium treads for traction on regolith."
      },
      {
        part: "T-Handle Steering Controller",
        description: "No steering wheel! Astronauts gripped a single central T-handle joy-stick to steer, accelerate, and apply drum brakes."
      },
      {
        part: "Lunar Communications Relay Unit (LCRU)",
        description: "A silver box mounted on the front bumper that transmitted live color television and astronaut biosignals directly to Earth."
      },
      {
        part: "High-Gain Parabolic Mesh Antenna",
        description: "An umbrella-like dish pointed by hand using an optical sighting scope directly at Earth hovering in the lunar sky."
      },
      {
        part: "Dual 36-Volt Silver-Zinc Batteries",
        description: "Non-rechargeable silver-zinc batteries designed to operate for 121 amp-hours across the lunar daytime heat."
      }
    ],
    scienceHighlights: [
      "Allowed astronauts to cover 27.8 km and collect 77 kg of lunar geologic samples.",
      "Retrieved sample 15415 ('Genesis Rock'), providing the cornerstone evidence for the Lunar Magma Ocean hypothesis.",
      "Investigated the mysterious volcanic collapse canyon Hadley Rille (1.5 km wide, 300 m deep).",
      "Demonstrated off-world mobility mechanics that paved the way for all future planetary rovers."
    ],
    quiz: {
      question: "What were the tires of the Apollo Lunar Roving Vehicle made of instead of rubber?",
      options: [
        "Woven steel piano wire with titanium treads",
        "Solid cast iron",
        "Carved oak wood",
        "Pressurized carbon fiber bags"
      ],
      correctIndex: 0,
      explanation: "Correct! Rubber would freeze or pop in the lunar vacuum, so engineers crafted tires out of flexible woven steel wire with titanium chevrons."
    },
    nasaDataSources: [
      {
        name: "NASA data.nasa.gov: Apollo Landing Sites Catalog",
        datasetId: "NASA-DATA-APOLLO15-SITES",
        url: "https://data.nasa.gov/dataset/Apollo-15-Lunar-Surface-Journal-Sample-Catalog/nasa-ap15",
        description: "Surface traverse coordinates, sample extraction GPS/telemetry, and photographic logs."
      },
      {
        name: "NASA NSSDC Master Catalog: LRV-1",
        datasetId: "1971-063C",
        url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C",
        description: "Detailed hardware engineering specifications and mission flight chronology."
      },
      {
        name: "NASA Moon Trek Interactive GIS Service",
        datasetId: "JPL-MOON-TREK-AP15",
        url: "https://trek.nasa.gov/moon/",
        description: "LOLA and LROC high-resolution topography of Hadley Rille and landing stage coordinates."
      }
    ]
  },
  {
    id: "insight-lander",
    name: "InSight Lander",
    nickname: "The Geophysicist: Listening to the Red Planet's Heartbeat",
    celestialBody: "mars",
    type: "lander",
    coordinates: {
      latitude: 4.5024,
      longitude: 135.6234,
      displayCoords: "4.5024° N, 135.6234° E",
      siteName: "Elysium Planitia ('The Biggest Parking Lot on Mars')"
    },
    timeline: {
      launched: "May 5, 2018",
      landed: "November 26, 2018",
      lastContact: "December 15, 2022 (Sol 1,440)",
      missionDuration: "4 years, 19 days (Twice its original primary mission!)",
      distanceTraveled: "0 km (Stationary Geophysical Observatory)"
    },
    status: "Solar panels blanketed in thick red dust; powered down gracefully",
    currentCondition: "Stationed quietly on the flat plains of Elysium Planitia, its two 7-foot circular solar arrays caked in atmospheric dust, instruments resting on the soil beside it.",
    atmosphericTheme: {
      gradient: "radial-gradient(ellipse at 50% 20%, #44201a 0%, #1f0f0c 45%, #080302 100%)",
      particleColor: "rgba(235, 120, 80, 0.6)",
      particleType: "dust",
      glowColor: "rgba(240, 110, 60, 0.2)"
    },
    story: {
      heroQuote: "My time here has been both productive and serene.",
      intro: "While rovers love to drive and climb over rocks, I had a very different mission: I came to Mars to sit completely still, hold my breath, and listen to the pulse of the planet's interior deep beneath the crust.",
      chapters: [
        {
          title: "1. The Ultra-Sensitive Ear to the Ground",
          content: "On November 26, 2018, I touched down on the smoothest, flattest plain on Mars: Elysium Planitia. I used my robotic arm to pick up a precious golden dome called SEIS (Seismic Experiment for Interior Structure) and placed it gently directly onto the Martian dirt. It was shielded by a heavy aerodynamic wind-and-thermal cover so gusts of Martian wind wouldn't shake it."
        },
        {
          title: "2. The First Sounds of Martian Wind & Marsquakes",
          content: "SEIS was so mind-bogglingly sensitive it could detect vibrations smaller than the width of a single hydrogen atom! I detected over 1,318 marsquakes, including a massive magnitude 4.7 quake that rumbled the entire planet for ten hours. When meteorite impacts slammed into Mars, I recorded the shockwaves traveling through the mantle!"
        },
        {
          title: "3. Mapping the Martian Deep Core",
          content: "By analyzing how earthquake waves bounced and reflected through the interior, my science team proved that Mars has a giant, molten liquid iron-nickel core about 1,830 kilometers across, and a crust divided into two or three distinct layers. We literally drew the first medical ultrasound of Mars!"
        },
        {
          title: "4. The Slow Farewell of the Dust",
          content: "Unlike rovers with nuclear generators, I relied entirely on two beautiful circular solar panels. As months turned into years, fine Martian dust drifted from the sky like red snow, settling over the glass. My daily energy dropped from 5,000 watt-hours to less than 400 watt-hours. On Sol 1440, I sent my final picture and signed off with gratitude to the human team on Earth."
        },
        {
          title: "5. An Eternal Monument to Deep Planet Science",
          content: "My instruments remain intact on the Martian soil. The seismometer data I broadcast back to Earth is studied in universities across 50 countries every day, revealing how rocky planets like Earth and Mars were born 4.5 billion years ago."
        }
      ]
    },
    hardwareAnatomy: [
      {
        part: "SEIS (Seismometer)",
        description: "Ultra-high-frequency French-built seismometer inside a vacuum sphere, covered with a thermal-aerodynamic RWEB dome to block wind noise."
      },
      {
        part: "Twin UltraFlex Solar Arrays",
        description: "Two 2.15-meter circular fan-like solar panels that unfolded like hand-fans upon landing, supplying all mission power."
      },
      {
        part: "HP³ ('The Mole')",
        description: "A self-hammering heat flow probe engineered by DLR to burrow 3-5 meters underground to measure the planet's geothermal temperature."
      },
      {
        part: "Instrument Deployment Arm (IDA)",
        description: "A 1.9-meter robotic arm equipped with a five-claw wax grapple that carefully hoisted instruments from the deck to the surface."
      },
      {
        part: "RISE Antennas",
        description: "Radio science transponders that tracked the tiny wobble of Mars's North Pole as the planet spins, revealing its liquid core size."
      }
    ],
    scienceHighlights: [
      "Detected 1,318+ marsquakes, establishing the first seismic catalog of another planet.",
      "Measured Mars's molten core radius at ~1,830 km (larger and less dense than earlier models).",
      "Calculated crust thickness at 24 to 72 kilometers.",
      "Captured the first direct acoustic audio recordings of Martian wind blowing past the lander."
    ],
    quiz: {
      question: "What instrument did InSight place directly on the Martian soil to detect marsquakes?",
      options: [
        "SEIS (Seismometer under a vacuum dome)",
        "A laser cannon",
        "A weather balloon",
        "A microscope"
      ],
      correctIndex: 0,
      explanation: "Correct! SEIS was placed gently on the ground and shielded with a wind cover to detect microscopic planetary vibrations."
    },
    nasaDataSources: [
      {
        name: "NASA PDS Geosciences Node: InSight SEIS Catalog",
        datasetId: "INSIGHT-SEIS-EVENT-V2",
        url: "https://data.nasa.gov/dataset/InSight-Mars-Lander-SEIS-Seismic-Event-Catalog/pds-seis",
        description: "Full event catalog of 1,318 marsquakes and Sol-by-Sol solar power telemetry."
      },
      {
        name: "NASA InSight Raw Audio & Image Archives",
        datasetId: "PIA23168",
        url: "https://images.nasa.gov/details/PIA23168",
        description: "Raw microphone pressure sensor sound files of Martian winds and sol 1440 last image."
      },
      {
        name: "ESA Mars Express Comparative Atmospheric Density",
        datasetId: "ESA-MEX-HRSC-ATMOS",
        url: "https://www.cosmos.esa.int/web/psa/mars-express",
        description: "Third-party atmospheric opacity and dust storm tracking cross-correlated with InSight telemetry."
      }
    ]
  },
  {
    id: "apollo11-lrrr",
    name: "Apollo 11 Retroreflector (LRRR)",
    nickname: "The Mirror That Still Talks to Earth After 50+ Years",
    celestialBody: "moon",
    type: "instrument",
    coordinates: {
      latitude: 0.6741,
      longitude: 23.4730,
      displayCoords: "0.6741° N, 23.4730° E",
      siteName: "Statio Tranquillitatis, Mare Tranquillitatis"
    },
    timeline: {
      launched: "July 16, 1969",
      landed: "July 20, 1969",
      lastContact: "STILL ACTIVE TODAY! (Laser return recorded weekly in 2026)",
      missionDuration: "Over 57 years of non-stop scientific duty!",
      distanceTraveled: "0 km (Passive Optical Precision Monument)"
    },
    status: "100% Operational! Passively reflecting Earth lasers today",
    currentCondition: "Sitting calmly in the Sea of Tranquility, its 100 quartz prisms still pointing back at Earth, glistening under the direct glare of the Sun and the lunar night.",
    atmosphericTheme: {
      gradient: "radial-gradient(ellipse at 50% 20%, #1e232e 0%, #0d1017 45%, #030406 100%)",
      particleColor: "rgba(180, 220, 255, 0.5)",
      particleType: "stars",
      glowColor: "rgba(100, 180, 255, 0.3)"
    },
    story: {
      heroQuote: "No batteries. No wires. Just pure light reflecting across 384,400 kilometers.",
      intro: "I am probably the most magical machine on this list because I have no wires, no battery, and no computer chip. Yet while every other Apollo instrument ran out of power decades ago, I am still actively working right now!",
      chapters: [
        {
          title: "1. The 100 Prisms in the Moon Dust",
          content: "On July 21, 1969, Buzz Aldrin carried a small white suitcase-sized aluminum palette off the Lunar Module Eagle. Inside were 100 precision 'corner-cube' prisms made of ultra-pure fused quartz silica. He aimed me carefully towards Earth and set me on the lunar dust."
        },
        {
          title: "2. How Corner-Cube Prisms Work",
          content: "If you bounce a ball into the corner of a room, it bounces off three walls and returns right back to your hand. That is the genius of a corner-cube prism: any beam of light entering the prism reflects 180 degrees backwards in the exact direction it came from!"
        },
        {
          title: "3. Shooting Lasers at the Moon",
          content: "Astronomers on Earth at the McDonald Observatory in Texas and the Apache Point Observatory in New Mexico fire ultra-powerful laser pulses through giant telescopes right at my coordinates. Out of 100 quadrillion laser photons sent, only one single photon bounces off my prisms and makes it back to the telescope detector 2.5 seconds later!"
        },
        {
          title: "4. The Moon is Drifting Away!",
          content: "By timing the laser pulse's round trip down to picoseconds, scientists calculated the distance from Earth to the Moon to within a millimeter! Over the decades, we discovered something astonishing: the Moon is spiraling away from Earth at 3.8 centimeters per year (about the speed human fingernails grow) due to ocean tidal friction!"
        },
        {
          title: "5. Testing Albert Einstein",
          content: "Because we have tracked the Moon's orbit so precisely for over 50 years, physicists have used my laser returns to test Einstein's General Theory of Relativity to the highest precision ever achieved in modern physics. I am human ingenuity immortalized in glass."
        }
      ]
    },
    hardwareAnatomy: [
      {
        part: "100 Fused-Silica Corner Cubes",
        description: "3.8 cm diameter corner cubes with total internal reflection, engineered to resist thermal distortion from -170°C to +120°C."
      },
      {
        part: "Teflon & Aluminum Mounting Tray",
        description: "An angled thermal-isolation frame designed to let solar heat escape without warping the prism alignment."
      },
      {
        part: "Sun-Compass Alignment Pointer",
        description: "A small gnomon cast a shadow on landing day so astronaut Buzz Aldrin could orient the array directly towards planet Earth."
      },
      {
        part: "Passive Open-Optics Architecture",
        description: "Zero moving parts, zero chemical batteries, zero radio transmitters—making it impervious to electronic obsolescence."
      }
    ],
    scienceHighlights: [
      "Measured Earth-Moon distance (approx. 384,400 km) with millimeter precision.",
      "Discovered the Moon is drifting away from Earth at 3.8 cm/year.",
      "Proved the Moon possesses a fluid outer core.",
      "Provided the world's most rigorous long-term test of Einstein's Equivalence Principle."
    ],
    quiz: {
      question: "How fast is the Moon spiraling away from Earth according to laser retroreflector measurements?",
      options: [
        "3.8 centimeters per year",
        "10 kilometers per hour",
        "It is not moving away at all",
        "5 meters per day"
      ],
      correctIndex: 0,
      explanation: "Correct! The Moon recedes from Earth at approximately 3.8 cm per year due to tidal interactions in Earth's oceans."
    },
    nasaDataSources: [
      {
        name: "NASA PDS Lunar Laser Ranging Archive",
        datasetId: "PDS-LLRR-OBS-1969-2026",
        url: "https://data.nasa.gov/dataset/Apollo-Lunar-Surface-Experiments-Package-ALSEP-LLRR/pds-llr",
        description: "Five decades of photon-arrival timing logs from McDonald, Apache Point, and Grasse observatories."
      },
      {
        name: "NASA Apollo 11 Lunar Surface Journal: EASEP Deployment",
        datasetId: "ALSJ-AP11-EASEP",
        url: "https://www.nasa.gov/history/alsj/a11/a11.easep.html",
        description: "Astronaut transcripts, deployment coordinates, and high-res Apollo 11 surface photographs."
      },
      {
        name: "USGS Lunar Geologic Map (Mare Tranquillitatis)",
        datasetId: "USGS-I-722",
        url: "https://astrogeology.usgs.gov/search/map/Moon/Geology/Apollo11",
        description: "USGS astrogeology regional stratigraphic mapping of the Apollo 11 Tranquility Base site."
      }
    ]
  },
  {
    id: "sojourner",
    name: "Sojourner (Mars Pathfinder)",
    nickname: "The 23-Pound Pioneer: The Skateboard That Conquered Mars",
    celestialBody: "mars",
    type: "rover",
    coordinates: {
      latitude: 19.13,
      longitude: 326.78,
      displayCoords: "19.13° N, 33.22° W",
      siteName: "Ares Vallis (The Valley of War)"
    },
    timeline: {
      launched: "December 4, 1996",
      landed: "July 4, 1997",
      lastContact: "September 27, 1997 (Sol 83)",
      missionDuration: "83 Martian sols (Designed for only 7 sols!)",
      distanceTraveled: "100 meters (0.06 miles)"
    },
    status: "Silent on the ancient floodplains beside the Carl Sagan Memorial Station",
    currentCondition: "Resting beside its ramp and lander in Ares Vallis, surrounded by rocks named Barnacle Bill, Yogi, and Casper.",
    atmosphericTheme: {
      gradient: "radial-gradient(ellipse at 50% 20%, #4a2916 0%, #24130a 45%, #0a0502 100%)",
      particleColor: "rgba(240, 140, 80, 0.55)",
      particleType: "dust",
      glowColor: "rgba(240, 120, 50, 0.2)"
    },
    story: {
      heroQuote: "Small in size, titan in courage.",
      intro: "Before me, no wheeled vehicle had ever rolled across another planet. Many critics said a rover on Mars was impossible—that wheels would slip in the sand, computers would freeze, and we would get lost. I proved them all wrong!",
      chapters: [
        {
          title: "1. The Microwave Oven on Wheels",
          content: "I weighed only 11.5 kilograms (25 pounds)—about the size of a microwave oven or a skateboard. I was named 'Sojourner' in honor of Sojourner Truth, the legendary civil rights activist. On July 4, 1997, our lander bounced to a stop inside Ares Vallis, and I rolled down my ramps onto the rust-red soil!"
        },
        {
          title: "2. Rock Hugger of Mars",
          content: "I drove slowly—about 1 centimeter per second. I drove up to intriguing Martian rocks and pressed my Alpha Particle X-Ray Spectrometer (APXS) directly against them like a warm hug. I analyzed 'Barnacle Bill' and found it was rich in silica, resembling andesite volcanic rocks found in the Andes mountains on Earth!"
        },
        {
          title: "3. Surviving the Ancient Floodplain",
          content: "Ares Vallis is one of the most gigantic catastrophic flood channels in the solar system. Millions of years ago, a rush of water hundreds of times greater than the Amazon River carved this canyon and dumped smooth, rounded boulders everywhere. I proved that Mars once possessed cataclysmic water currents!"
        },
        {
          title: "4. The Faithful Guardian",
          content: "My lander base station suffered a battery failure on Sol 83. Because I was programmed to circle back to the lander if communication stopped, aerospace historians believe I circled the lander repeatedly, waiting faithfully for a signal from Earth until my batteries finally froze."
        },
        {
          title: "5. The Grandmother of Modern Rovers",
          content: "Without me, there would be no Spirit, no Opportunity, no Curiosity, and no Perseverance. I proved that rovers could navigate alien worlds independently. I am the brave little pioneer that started a new era."
        }
      ]
    },
    hardwareAnatomy: [
      {
        part: "0.22 m² Solar Panel",
        description: "Small solar panel producing just 16 Watts of peak electricity—less than a single household nightlight!"
      },
      {
        part: "Alpha Particle X-Ray Spectrometer",
        description: "Curium-244 radioactive source that irradiated rocks to reveal their exact atomic proportions."
      },
      {
        part: "Three Monochrome Cameras",
        description: "Two stereo front cameras for obstacle hazard detection and one color camera on the rear."
      },
      {
        part: "Original 6-Wheel Rocker Bogie",
        description: "The historical prototype of the rocker-bogie mechanism now used on Curiosity and Perseverance."
      }
    ],
    scienceHighlights: [
      "First successful robotic mobile rover operation on any extraterrestrial planet.",
      "Proved volcanic differentiation on Mars by discovering high-silica andesitic volcanic rock.",
      "Confirmed Ares Vallis formed through monumental paleofloods of liquid water.",
      "Demonstrated autonomous hazard avoidance on an extraterrestrial surface."
    ],
    quiz: {
      question: "How fast did the Sojourner rover drive across Mars?",
      options: [
        "About 1 centimeter per second",
        "60 miles per hour",
        "The speed of sound",
        "1 meter per millisecond"
      ],
      correctIndex: 0,
      explanation: "Correct! Sojourner moved deliberately at about 1 cm/s (0.02 mph) to safely detect and avoid rocks."
    },
    nasaDataSources: [
      {
        name: "NASA PDS Mars Pathfinder Science Archive",
        datasetId: "MPF-M-APXS-2-EDR-V1.0",
        url: "https://data.nasa.gov/dataset/Mars-Pathfinder-Sojourner-Telemetry-Archive/pds-mpf",
        description: "Traverse navigation vectors, sol battery voltages, and chemical spectrometry logs."
      },
      {
        name: "NASA JPL Mars Pathfinder Historical Gallery",
        datasetId: "JPL-MPF-IMAGERY",
        url: "https://images.nasa.gov/details/PIA01551",
        description: "First color rover panorama from Sol 1 and APXS deployment against rock 'Yogi'."
      },
      {
        name: "USGS Mars Astrogeology Geologic Map: Ares Vallis",
        datasetId: "USGS-SIM-3171",
        url: "https://pubs.usgs.gov/sim/3171/",
        description: "USGS scientific investigation map of the catastrophic outflow channel of Ares Vallis."
      }
    ]
  }
];

export const NASA_OPEN_DATA_REPOSITORIES = [
  {
    agency: "NASA Open Data Portal (data.nasa.gov)",
    category: "Primary Open Data",
    description: "Official public datasets including landing site coordinates, ALSEP telemetry, Apollo sample catalogs, and rover traverse tracks.",
    url: "https://data.nasa.gov"
  },
  {
    agency: "NASA Planetary Data System (PDS)",
    category: "Scientific Telemetry & Archives",
    description: "Peer-reviewed scientific archives of all NASA planetary missions (InSight SEIS, MER APXS, Mars Pathfinder).",
    url: "https://pds.jpl.nasa.gov"
  },
  {
    agency: "NASA Image & Video Library (images-api.nasa.gov)",
    category: "High-Resolution Imagery",
    description: "Open API delivering raw mission photography, descent panoramas, and rover self-portraits.",
    url: "https://images.nasa.gov"
  },
  {
    agency: "NASA JPL Solar System Treks (Mars Trek & Moon Trek)",
    category: "Planetary GIS Basemaps",
    description: "Web Map Tile Services (WMTS) rendering high-resolution LOLA/LROC and MOLA/HiRISE orbital surfaces.",
    url: "https://trek.nasa.gov"
  },
  {
    agency: "USGS Astrogeology Science Center",
    category: "Third-Party / USGS Partner Data",
    description: "Official IAU planetary nomenclature gazetteer and stratigraphic geologic quadrangle maps.",
    url: "https://astrogeology.usgs.gov"
  },
  {
    agency: "ESA Planetary Science Archive (PSA)",
    category: "International Partner Data",
    description: "European Space Agency Mars Express and ExoMars atmospheric monitoring data correlating dust storms.",
    url: "https://www.cosmos.esa.int/web/psa"
  }
];
