/**
 * Interactive Mission Timeline Dataset
 * Spans six pivotal decades: 1960s to 2020s
 */

export const TIMELINE_ERAS = [
  {
    id: "1960s",
    eraName: "1960s",
    headline: "The Dawn of Lunar Exploration & First Touchdowns",
    description: "Humanity makes its first soft landings on another celestial body, laying the robotic foundation for human Apollo footprints.",
    missions: [
      {
        id: "surveyor3-apollo12",
        name: "Surveyor 3",
        year: 1967,
        world: "moon",
        date: "April 20, 1967",
        type: "Lander",
        status: "Dormant (Inspected by Apollo 12 in 1969)",
        achievement: "First robotic trench dug in lunar soil; proved lunar regolith could support a spacecraft.",
        location: "Ocean of Storms (-3.015° N, -23.418° W)"
      },
      {
        id: "apollo11-lrrr",
        name: "Apollo 11 Laser Retroreflector (LRRR)",
        year: 1969,
        world: "moon",
        date: "July 21, 1969",
        type: "Experiment",
        status: "Permanently Active (Operational Passive Optical Reflector)",
        achievement: "Deployed by Neil Armstrong & Buzz Aldrin; measured Earth-Moon distance to millimeter precision for 55+ years.",
        location: "Mare Tranquillitatis (0.6734° N, 23.4731° E)"
      }
    ]
  },
  {
    id: "1970s",
    eraName: "1970s",
    headline: "Apollo Wheels & The First Martian Landers",
    description: "Astronauts drive the first electric cars across the lunar mountains, while robotic Viking landers send back the first panoramic photographs from the surface of Mars.",
    missions: [
      {
        id: "apollo15-lrv",
        name: "Apollo 15 Lunar Roving Vehicle (LRV-001)",
        year: 1971,
        world: "moon",
        date: "July 31, 1971",
        type: "Rover",
        status: "Parked permanently at Hadley Rille VIP site",
        achievement: "First wheeled vehicle driven on the Moon; allowed crew to travel 27.8 km and find the 4.1-billion-year-old Genesis Rock.",
        location: "Hadley-Apennine (26.1322° N, 3.6339° E)"
      },
      {
        id: "apollo17-alsep",
        name: "Apollo 17 ALSEP Station & LRV-003",
        year: 1972,
        world: "moon",
        date: "December 11, 1972",
        type: "Scientific Instrument Package",
        status: "Dormant on the Taurus-Littrow floor",
        achievement: "Deep lunar seismic network and atmospheric mass spectrometer operated continuously until 1977.",
        location: "Taurus-Littrow (20.1908° N, 30.7717° E)"
      },
      {
        id: "viking1-lander",
        name: "Viking 1 Lander",
        year: 1976,
        world: "mars",
        date: "July 20, 1976",
        type: "Lander",
        status: "Silenced in 1982 by accidental uplink command",
        achievement: "First successful long-duration operational mission to the surface of Mars; sent first clear color photo of red Martian dirt.",
        location: "Chryse Planitia (22.697° N, -48.222° W)"
      }
    ]
  },
  {
    id: "1990s",
    eraName: "1990s",
    headline: "The Rover Revolution: Mars Pathfinder & Sojourner",
    description: "After a 20-year hiatus on the Martian surface, a tiny 10-kilogram microwave-sized rover proves that wheels can roam the Red Planet.",
    missions: [
      {
        id: "sojourner",
        name: "Mars Pathfinder & Sojourner Rover",
        year: 1997,
        world: "mars",
        date: "July 4, 1997",
        type: "Rover & Lander",
        status: "Silenced (Battery drained, Sol 83)",
        achievement: "First wheeled mobile rover on Mars; analyzed rocks 'Barnacle Bill' and 'Yogi' and demonstrated the rocker-bogie mobility system.",
        location: "Ares Vallis (19.33° N, -33.55° W)"
      }
    ]
  },
  {
    id: "2000s",
    eraName: "2000s",
    headline: "The Golden Era: The Twin Mars Rovers & Arctic Ice",
    description: "Spirit and Opportunity embark on historic overland marathons searching for ancient water, while Phoenix touches pure water ice near the Martian north pole.",
    missions: [
      {
        id: "spirit-rover",
        name: "Spirit Rover (MER-A)",
        year: 2004,
        world: "mars",
        date: "January 4, 2004",
        type: "Rover",
        status: "Entrenched at Home Plate (Last signal March 2010)",
        achievement: "Conquered Husband Hill; discovered ancient hydrothermal silica vents proving past volcanic hot springs.",
        location: "Gusev Crater (-14.5684° N, 175.4726° E)"
      },
      {
        id: "opportunity",
        name: "Opportunity Rover (MER-B)",
        year: 2004,
        world: "mars",
        date: "January 25, 2004",
        type: "Rover",
        status: "Silenced by 2018 global dust storm (Sol 5,111)",
        achievement: "Drove 45.16 kilometers; discovered 'hematite blueberries' and confirmed persistent standing liquid water on ancient Mars.",
        location: "Perseverance Valley (-1.9462° N, -5.5266° W)"
      },
      {
        id: "phoenix-lander",
        name: "Phoenix Mars Lander",
        year: 2008,
        world: "mars",
        date: "May 25, 2008",
        type: "Lander",
        status: "Crushed by polar winter CO2 ice sheet",
        achievement: "Exposed and photographed pure subsurface water ice; discovered perchlorate salts in the arctic Martian permafrost.",
        location: "Vastitas Borealis (68.2188° N, -125.7492° W)"
      }
    ]
  },
  {
    id: "2010s",
    eraName: "2010s",
    headline: "Probing the Interior: Seismology on the Red Planet",
    description: "NASA places a high-precision seismometer under a wind shield on Mars, recording the deep rumblings and internal pulse of a neighboring world.",
    missions: [
      {
        id: "insight-lander",
        name: "InSight Lander",
        year: 2018,
        world: "mars",
        date: "November 26, 2018",
        type: "Lander / Seismology",
        status: "Silenced by dust accumulation on solar arrays (Dec 2022)",
        achievement: "Detected 1,300+ marsquakes, mapped Mars' crustal thickness, and measured the radius of its molten iron-sulfur core.",
        location: "Elysium Planitia (4.502° N, 135.623° E)"
      }
    ]
  },
  {
    id: "2020s",
    eraName: "2020s",
    headline: "The Artemis Dawn & The Living Legacy",
    description: "The robotic pioneers left behind become designated archaeological heritage sites as humanity prepares permanent return to the Moon and human missions to Mars.",
    missions: [
      {
        id: "artemis-heritage",
        name: "Lunar Heritage & Preserved Machines",
        year: 2026,
        world: "moon",
        date: "Ongoing",
        type: "Heritage Zone",
        status: "Protected under NASA Artemis Accords & One Small Step Act",
        achievement: "Apollo landing sites and robotic stations established as historic exploration monuments to protect them from future rocket exhaust.",
        location: "All Apollo & Surveyor Lunar Sites"
      }
    ]
  }
];
