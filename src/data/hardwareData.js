/**
 * OFFWORLD LEGACY — Official Hardware Registry
 * Scientifically verified dataset of NASA discarded equipment on the Moon and Mars.
 * Primary Sources:
 * - NASA Open Data Portal (data.nasa.gov)
 * - NASA Planetary Data System (PDS)
 * - NASA JPL Solar System Treks
 * - USGS Astrogeology Planetary Nomenclature
 * - Apollo Lunar Surface Journals (ALSJ)
 */

export const PLANETARY_GEOLOGY_LABELS = {
  moon: [
    { name: "MARE IMBRIUM", lat: 34, lon: -15, type: "mare" },
    { name: "Oceanus Procellarum", lat: 20, lon: -56, type: "oceanus" },
    { name: "MARE SERENITATIS", lat: 27, lon: 18, type: "mare" },
    { name: "MARE TRANQUILLITATIS", lat: 8, lon: 31, type: "mare" },
    { name: "MARE CRISIUM", lat: 17, lon: 59, type: "mare" },
    { name: "MARE FECUNDITATIS", lat: -4, lon: 52, type: "mare" },
    { name: "MARE NECTARIS", lat: -15, lon: 35, type: "mare" },
    { name: "MARE NUBIUM", lat: -21, lon: -16, type: "mare" },
    { name: "Montes Apenninus", lat: 20, lon: -2, type: "montes" },
    { name: "Tycho Crater", lat: -43, lon: -11, type: "crater" },
    { name: "Copernicus Crater", lat: 9, lon: -20, type: "crater" },
  ],
  mars: [
    { name: "Olympus Mons", lat: 18.6, lon: -133.8, type: "volcano" },
    { name: "Valles Marineris", lat: -14, lon: -59, type: "canyon" },
    { name: "Elysium Planitia", lat: 3, lon: 154, type: "planitia" },
    { name: "Meridiani Planum", lat: 0, lon: -3, type: "planum" },
    { name: "Gusev Crater", lat: -14.5, lon: 175.4, type: "crater" },
    { name: "Gale Crater", lat: -5.4, lon: 137.8, type: "crater" },
    { name: "Jezero Crater", lat: 18.4, lon: 77.5, type: "crater" },
    { name: "Acidalia Planitia", lat: 46, lon: -21, type: "planitia" },
    { name: "Hellas Planitia", lat: -42, lon: 70, type: "basin" },
    { name: "Syrtis Major", lat: 8, lon: 69, type: "plateau" },
  ]
};

export const NASA_OPEN_DATA_REPOSITORIES = [
  {
    agency: "NASA Open Data Portal",
    category: "data.nasa.gov",
    datasetName: "NASA Planetary Exploration & Hardware Trajectory Dataset",
    datasetId: "NASA-ODP-2026",
    url: "https://data.nasa.gov",
    description: "Official clearinghouse for NASA spacecraft locations, trajectories, and flight logs."
  },
  {
    agency: "NASA Planetary Data System (PDS)",
    category: "pds.nasa.gov",
    datasetName: "Planetary Science Telemetry & Raw Instrument Catalogs",
    datasetId: "PDS-GEO-MER-VL",
    url: "https://pds.nasa.gov",
    description: "Primary peer-reviewed archive for all NASA planetary surface science data."
  },
  {
    agency: "NASA APIs",
    category: "api.nasa.gov",
    datasetName: "NASA Image & Video Library and Planetary REST APIs",
    datasetId: "NASA-REST-APIS",
    url: "https://api.nasa.gov",
    description: "Direct REST API providing archival photographs, APOD, and mission metadata."
  },
  {
    agency: "USGS Astrogeology Science Center",
    category: "planetarynames.wr.usgs.gov",
    datasetName: "Gazetteer of Planetary Nomenclature & Elevation Mosaics",
    datasetId: "USGS-IAU-NOMENCLATURE",
    url: "https://planetarynames.wr.usgs.gov",
    description: "IAU certified coordinates and geographic nomenclature for Moon and Mars."
  }
];

export const HARDWARE_REGISTRY = [
  {
    id: "opportunity",
    name: "Opportunity (MER-B)",
    mission: "Mars Exploration Rover Mission",
    world: "mars",
    celestialBody: "mars",
    type: "rover",
    launchDate: "July 7, 2003",
    landingDate: "January 25, 2004",
    missionStart: "January 25, 2004",
    missionEnd: "June 10, 2018 (Sol 5,111)",
    status: "Silenced by planet-encircling dust storm (June 2018)",
    location: "Perseverance Valley, Endeavour Crater, Meridiani Planum",
    latitude: -1.9462,
    longitude: -5.5266,
    purpose: "Search for geological clues of ancient liquid water environments that could have supported past microbial life.",
    story: {
      hook: "Millions of kilometers from Earth, a marathon runner sits exactly where the dark dust engulfed it.",
      intro: "NASA built Opportunity to survive 90 Martian days and drive 1,000 meters. Instead, this resilient machine survived nearly 15 Earth years, completed an extraterrestrial marathon of 45.16 kilometers, and unlocked the aqueous history of Mars.",
      chapters: [
        {
          title: "1. The Airbag Hole-in-One",
          content: "On January 25, 2004, Opportunity bounced across the Martian desert cocooned in 24 gas airbags. It rolled directly into the bowl of Eagle Crater—an unprecedented 'interplanetary hole-in-one' that placed its cameras right in front of layered bedrock."
        },
        {
          title: "2. The Mystery of the Martian Blueberries",
          content: "Upon examining the soil with its Microscopic Imager, Opportunity photographed countless millimeter-scale gray spheres. Spectrometers identified them as hematite concretions ('blueberries'), which could only precipitate inside active, bubbling groundwater."
        },
        {
          title: "3. Surviving 14 Years of Martian Hazards",
          content: "Opportunity survived frigid winters, dug its wheels out of Purgatory Dune after five weeks of spinning in place, and was repeatedly rescued by fortunate dust devils that blew its solar panels clean."
        },
        {
          title: "4. The Final Great Dust Storm",
          content: "In June 2018, a catastrophic dust storm enveloped the entire planet. With 99% of sunlight blocked, solar arrays fell below minimum power. On Sol 5111, its telemetry ceased. After more than a thousand recovery transmissions, NASA declared the mission complete in February 2019."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Constructed at NASA JPL in Pasadena, California with sister rover Spirit." },
      { stage: "Launch", desc: "Launched aboard a Delta II Heavy rocket from Cape Canaveral on July 7, 2003." },
      { stage: "Space Transit", desc: "Traveled 456 million kilometers across interplanetary space over 6 months." },
      { stage: "Landing", desc: "Direct atmospheric entry at 19,000 km/h; airbag bounce into Eagle Crater." },
      { stage: "Mission Operations", desc: "Traversed 45.16 kilometers across Meridiani Planum, exploring Victoria & Endeavour Craters." },
      { stage: "Groundbreaking Discovery", desc: "Discovered hematite blueberries and gypsum veins proving ancient neutral liquid water." },
      { stage: "Mission End", desc: "Engulfed by a global dust storm in June 2018 at Perseverance Valley." },
      { stage: "Current Resting Place", desc: "Overlooking the floor of Endeavour Crater, draped in reddish iron-oxide dust." }
    ],
    challenges: [
      "Severe solar array dust buildup requiring episodic cleaning by atmospheric dust devils.",
      "Becoming deeply entrenched in the soft sand drifts of 'Purgatory Dune' for over five weeks.",
      "Loss of right-front steering actuator, requiring complex multi-wheel steering compensation.",
      "Extreme thermal fluctuations dropping to -105°C during southern hemisphere winter solstices."
    ],
    discoveries: [
      "Hematite spherules ('blueberries') proving persistent standing liquid groundwater in ancient Mars.",
      "Calcium sulfate (gypsum) veins at Endeavour Crater indicating neutral, non-acidic, life-friendly water.",
      "First meteorite discovered on another world ('Heat Shield Rock', an iron-nickel meteorite).",
      "Solar system driving endurance record: 45.16 kilometers (28.06 miles)."
    ],
    humanStory: "Engineers worked on 'Mars time' (24 hours and 39 minutes per sol), shifting their waking schedules daily. When Opportunity fell silent in 2018, the team beamed Billie Holiday's 'I'll Be Seeing You' as a final radio salute from the Deep Space Network.",
    legacy: "Opportunity proved that wheeled robotic geology is capable of multi-year field campaigns, laying the direct engineering blueprints for Curiosity and Perseverance.",
    ending: {
      question: "Could a rover designed for 90 days travel across an alien desert and rewrite the history of water?",
      answer: "Opportunity drove for 5,111 sols and completed an interplanetary marathon.",
      conclusion: "Its battery finally died in the greatest dust storm of the decade, but its geological legacy is immortal.",
      eternalStatus: "Stationed on the upper slopes of Perseverance Valley, Endeavour Crater."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/PIA16918/PIA16918~medium.jpg",
        caption: "Opportunity rover self-portrait assembled from panoramic camera exposures.",
        credit: "NASA/JPL-Caltech/Cornell",
        alt: "Opportunity rover on Mars"
      },
      {
        url: "https://images-assets.nasa.gov/image/PIA05215/PIA05215~medium.jpg",
        caption: "Microscopic view of the famous 'Martian Blueberries' (hematite spheres).",
        credit: "NASA/JPL-Caltech/USGS",
        alt: "Hematite blueberries in Martian soil"
      }
    ],
    sources: [
      {
        name: "NASA PDS Mars Exploration Rover Opportunity Archive",
        datasetId: "PDS-MER-APXS-EDR-V1.0",
        url: "https://data.nasa.gov/dataset/Mars-Exploration-Rover-Opportunity-Science-Data/pds-mer",
        description: "Full trajectory telemetry, sol timestamps, and APXS elemental spectroscopy."
      },
      {
        name: "NASA Jet Propulsion Laboratory Mission Archives",
        datasetId: "JPL-MER-B-END",
        url: "https://mars.nasa.gov/mer/mission/status_opportunity.html",
        description: "Official sol-by-sol mission operational logs and telemetry records."
      },
      {
        name: "USGS Astrogeology Gazetteer: Meridiani Planum",
        datasetId: "USGS-FEATURE-3856",
        url: "https://planetarynames.wr.usgs.gov/Feature/3856",
        description: "Verified geographical coordinates and feature nomenclature."
      }
    ],
    hardwareAnatomy: [
      { part: "Triple-Junction Solar Panels", description: "Gallium arsenide solar cells generating 140W at noon." },
      { part: "Pancam & Navcam Stereo Mast", description: "High-resolution stereo cameras positioned at human eye height (1.5m)." },
      { part: "Rock Abrasion Tool (RAT)", description: "Diamond-tipped cutter used to scrape off weathered rind to analyze fresh rock interiors." },
      { part: "Mössbauer & APXS Spectrometers", description: "Nuclear alpha/gamma ray sensors that mapped iron mineral chemistry." },
      { part: "Rocker-Bogie Suspension", description: "Six independent cleated aluminum wheels capable of surmounting rocks larger than wheel diameter." }
    ],
    quiz: {
      question: "What mineral spherules did Opportunity discover that proved ancient Mars was soaked in liquid water?",
      options: [
        "Hematite 'Blueberries'",
        "Quartz crystals",
        "Liquid mercury droplets",
        "Granite pebbles"
      ],
      correctIndex: 0,
      explanation: "Correct! The 'blueberries' were hematite concretions that precipitated inside ancient groundwater."
    }
  },

  {
    id: "spirit-rover",
    name: "Spirit (MER-A)",
    mission: "Mars Exploration Rover Mission",
    world: "mars",
    celestialBody: "mars",
    type: "rover",
    launchDate: "June 10, 2003",
    landingDate: "January 4, 2004",
    missionStart: "January 4, 2004",
    missionEnd: "March 22, 2010 (Sol 2,210)",
    status: "Entrenched in sulfate sand trap; frozen during Martian winter (2010)",
    location: "Home Plate, Columbia Hills, Gusev Crater",
    latitude: -14.5684,
    longitude: 175.4726,
    purpose: "Explore the floor of Gusev Crater to determine whether it once held a massive crater lake.",
    story: {
      hook: "A machine that broke its own wheel turned that malfunction into one of the greatest discoveries in astrobiology.",
      intro: "Opportunity's twin sister Spirit landed on the rugged volcanic plains of Gusev Crater. Facing rough terrain, steep mountain slopes, and mechanical failure, Spirit demonstrated human resilience across six grueling years.",
      chapters: [
        {
          title: "1. The Mountain Climber of Columbia Hills",
          content: "Engineers directed Spirit to climb Husband Hill—scaling 107 vertical meters up 30-degree slopes to take breathtaking 360-degree panoramas of the ancient crater floor."
        },
        {
          title: "2. The Broken Wheel that Made History",
          content: "In 2006, Spirit's right-front wheel seized up completely. Engineers drove the rover backwards, dragging the dead wheel like a plow. The dragging wheel tore open a 10-centimeter trench, churning up brilliant white 90% pure silica. On Earth, deposits of this purity only form in volcanic hot springs or fumaroles!"
        },
        {
          title: "3. Trapped at Troy",
          content: "In May 2009, Spirit's wheels broke through crusty soil into a sand trap of iron sulfates nicknamed 'Troy'. Months of test maneuvers at JPL could not free the rover, whose chassis rested on a buried rock."
        },
        {
          title: "4. The Freeze of Sol 2210",
          content: "Unable to tilt its solar panels toward the winter sun, Spirit could not produce enough electricity to run its survival heaters. In March 2010, the rover slipped into an unbreakable hibernation."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Constructed alongside Opportunity at JPL in Pasadena." },
      { stage: "Launch", desc: "Launched on June 10, 2003 aboard a Delta II 7925 rocket." },
      { stage: "Space Transit", desc: "Navigated 487 million km during the six-month interplanetary voyage." },
      { stage: "Landing", desc: "Airbag touchdown on the basalt lava floor of Gusev Crater." },
      { stage: "Mission Operations", desc: "Ascended Husband Hill and drove 7.73 kilometers across rugged volcanic terrain." },
      { stage: "Groundbreaking Discovery", desc: "Exposed 90% pure silica deposits indicating ancient hydrothermal vents." },
      { stage: "Mission End", desc: "Trapped in soft sand at Troy; communication ceased March 22, 2010." },
      { stage: "Current Resting Place", desc: "Rests adjacent to Home Plate in Gusev Crater, angled toward the southern sky." }
    ],
    challenges: [
      "Loss of right-front drive motor, requiring backward driving for four years.",
      "Climbing steep 30-degree rocky scree slopes on Husband Hill.",
      "Severe winter dust storms attenuating solar power down to 130 Wh/sol.",
      "Hidden sulfate sand traps with insufficient wheel traction."
    ],
    discoveries: [
      "90% pure amorphous silica proving past volcanic hydrothermal hot springs existed on Mars.",
      "First video recording of active extraterrestrial dust devils sweeping across a planetary surface.",
      "Carbonate minerals in the Comanche outcrop indicating ancient neutral waters.",
      "First ascent and summiting of a mountain on another planet."
    ],
    humanStory: "When Spirit became stuck at Troy, engineers reconstructed an exact replica of the sand trap in JPL's sandbox, testing centimeter-scale wiggle commands for six months before sending the signals to Mars.",
    legacy: "Spirit demonstrated that hydrothermal systems—the prime habitat for early life on Earth—existed on Mars, directly inspiring the landing site selection of Jezero Crater for Perseverance.",
    ending: {
      question: "Could a rover conquer mountains and turn mechanical disaster into scientific triumph?",
      answer: "Spirit climbed Husband Hill and dragged a broken wheel that uncovered hot spring silica.",
      conclusion: "Frozen in the winter cold of Sol 2,210, it remains an immortal symbol of grit on Mars.",
      eternalStatus: "Resting beside Home Plate, Columbia Hills, Gusev Crater."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/PIA05560/PIA05560~medium.jpg",
        caption: "Spirit rover lookback from the slopes of Columbia Hills.",
        credit: "NASA/JPL-Caltech/Cornell",
        alt: "Spirit rover on Mars"
      },
      {
        url: "https://images-assets.nasa.gov/image/PIA09248/PIA09248~medium.jpg",
        caption: "Bright white silica exposed in the trench churned by Spirit's locked wheel.",
        credit: "NASA/JPL-Caltech/USGS",
        alt: "White silica trench on Mars"
      }
    ],
    sources: [
      {
        name: "NASA PDS Spirit Science Archive",
        datasetId: "PDS-MER-SPIRIT-EDR-V1.0",
        url: "https://data.nasa.gov/dataset/Mars-Exploration-Rover-Spirit-Data/pds-mer1",
        description: "Gusev Crater traverse track coordinates and Mini-TES thermal emission spectra."
      },
      {
        name: "NASA JPL Spirit Mission Logs",
        datasetId: "JPL-MER-A-LOG",
        url: "https://mars.nasa.gov/mer/mission/status_spirit.html",
        description: "Engineering telemetry, wheel electrical current records, and solar array dust logs."
      }
    ],
    hardwareAnatomy: [
      { part: "Jammed Front-Right Wheel", description: "Locked wheel dragged for 4 years that accidentally served as a geological trenching plow." },
      { part: "Mini-TES Spectrometer", description: "Infrared mineral sensor mounted in the mast that identified distant silica outcrops." },
      { part: "Hazard Cameras (Hazcams)", description: "Four black-and-white fisheye cameras monitoring ground clearance and wheel sinkage." },
      { part: "Instrument Deployment Arm", description: "Five-jointed titanium robotic arm holding the microscope, grinder, and spectrometers." }
    ],
    quiz: {
      question: "How did Spirit discover 90% pure silica hot spring deposits on Mars?",
      options: [
        "Dragging its locked front wheel carved open a trench in the soil",
        "It fired a high-energy laser drill",
        "A meteorite crashed nearby and exposed the rock",
        "It analyzed dust blown off its solar panels"
      ],
      correctIndex: 0,
      explanation: "Correct! When Spirit's front wheel seized up, dragging it backwards gouged open the brilliant white silica beds."
    }
  },

  {
    id: "apollo15-lrv",
    name: "Apollo 15 Lunar Roving Vehicle (LRV-001)",
    mission: "Apollo 15",
    world: "moon",
    celestialBody: "moon",
    type: "rover",
    launchDate: "July 26, 1971",
    landingDate: "July 30, 1971",
    missionStart: "July 31, 1971",
    missionEnd: "August 2, 1971",
    status: "Parked permanently at 'The VIP Site' east of Falcon Descent Stage",
    location: "Hadley Rille, Montes Apenninus, Mare Imbrium",
    latitude: 26.1322,
    longitude: 3.6339,
    purpose: "Provide high-speed electric mobility for astronauts to sample distant lunar geological formations.",
    story: {
      hook: "Humanity's first electric car is parked at the edge of a lunar canyon, where its antenna still points toward Earth.",
      intro: "Before Apollo 15, astronauts walked on foot, tethered to within a kilometer of their lander. LRV-001 gave astronauts David Scott and James Irwin the mobility to traverse 27.8 kilometers across lunar mountains and canyons.",
      chapters: [
        {
          title: "1. Unfolding like an Origami Car",
          content: "The Rover was folded into a compact triangle packed against the side of Lunar Module Falcon. On July 31, 1971, astronauts pulled two lanyards and the chassis unfolded by gravity and springs onto the lunar regolith."
        },
        {
          title: "2. The T-Handle and Mesh Wheels",
          content: "The Rover featured four independent 0.25-horsepower electric motors and wheels woven from zinc-coated piano wire mesh with titanium chevrons. It was steered with a single center-mounted T-shaped joystick."
        },
        {
          title: "3. Finding the 4-Billion-Year-Old Genesis Rock",
          content: "Driving up the steep flanks of Montes Apenninus to Spur Crater, Scott spotted anorthosite specimen 15415—the 'Genesis Rock'—which confirmed that the early Moon was once an ocean of liquid magma."
        },
        {
          title: "4. The Final VIP Parking Spot",
          content: "At the mission's conclusion, Dave Scott drove LRV-001 300 meters away from the Lunar Module to 'The VIP Site.' Its television camera was aimed back at Falcon to broadcast humanity's first live lunar liftoff to Earth."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Engineered and manufactured by Boeing and Delco in 17 months." },
      { stage: "Launch", desc: "Launched July 26, 1971 atop the massive Saturn V rocket." },
      { stage: "Space Transit", desc: "Transited 384,400 km folded in Lunar Module Falcon's descent stage." },
      { stage: "Landing", desc: "Touched down in the scenic valley between Hadley Rille and Montes Apenninus." },
      { stage: "Mission Operations", desc: "Traversed 27.8 kilometers across three Extravehicular Activities (EVAs)." },
      { stage: "Groundbreaking Discovery", desc: "Enabled the collection of 77 kg of lunar samples including the Genesis Rock." },
      { stage: "Mission End", desc: "Parked 300 meters east of LM Falcon; broadcast the ascent stage launch." },
      { stage: "Current Resting Place", desc: "Preserved in vacuum at Hadley-Apennine, wheels intact under the solar wind." }
    ],
    challenges: [
      "Rigid weight budget requiring an ultra-lightweight aluminum frame of just 210 kg.",
      "Front-wheel steering failed initially on EVA 1, requiring rear-wheel steering alone.",
      "Lunar dust roostertails kicked up by mesh wheels, requiring astronauts to tape a replacement fender.",
      "Extreme thermal radiation: batteries cooled by thermal wax and radiator mirrors."
    ],
    discoveries: [
      "Sample 15415 ('Genesis Rock'), anorthosite dated to 4.1 billion years proving the Lunar Magma Ocean.",
      "First close-up photography of Hadley Rille's basalt cliffs proving collapsed volcanic lava tubes.",
      "Measurement of lunar heat flow and deep regolith temperature gradients.",
      "Validation of high-speed wheeled mobility in 1/6th gravity."
    ],
    humanStory: "When astronaut Dave Scott accidentally broke the rover's rear fender with his hammer holster, lunar dust began raining over the crew and electronics. Working with Mission Control in Houston, the crew taped four plastic geology maps together with gray duct tape to build an impromptu fender that saved the mission.",
    legacy: "The Apollo Rover transformed lunar exploration from localized footprints into wide-ranging regional field geology, inspiring all future planetary rover chassis from Sojourner to Artemis LTV.",
    ending: {
      question: "Could a folding electric car driven on another world unlock the birth of the Moon?",
      answer: "LRV-001 traveled 27.8 kilometers and helped recover the 4.1-billion-year-old Genesis Rock.",
      conclusion: "Parked at the VIP spot with its color camera aimed at the sky, it waits for the next humans to visit.",
      eternalStatus: "Permanently parked at Hadley Rille, Mare Imbrium (26.1322° N, 3.6339° E)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg",
        caption: "James Irwin stands beside Lunar Roving Vehicle 1 at the foot of Mount Hadley.",
        credit: "NASA/Dave Scott",
        alt: "Apollo 15 Lunar Rover"
      },
      {
        url: "https://images-assets.nasa.gov/image/S71-39617/S71-39617~medium.jpg",
        caption: "Engineering checkout of the Lunar Roving Vehicle qualification unit.",
        credit: "NASA/Boeing",
        alt: "Lunar Rover engineering test"
      }
    ],
    sources: [
      {
        name: "NASA Apollo 15 Flight Operations Plan & PDS Archives",
        datasetId: "NASA-DATA-APOLLO15-SITES",
        url: "https://data.nasa.gov/dataset/Apollo-15-Landing-Site-and-Surface-Activities/ap15-data",
        description: "Official traverse GPS coordinates, EVA battery telemetry, and sample catalogs."
      },
      {
        name: "Apollo Lunar Surface Journal: Apollo 15",
        datasetId: "ALSJ-AP15-LRV",
        url: "https://www.nasa.gov/history/alsj/a15/a15.html",
        description: "Complete astronaut voice transcripts, technical debriefs, and photo archives."
      }
    ],
    hardwareAnatomy: [
      { part: "Woven Wire Mesh Tires", description: "Zinc-coated steel piano wire with titanium chevron treads for traction in soft regolith." },
      { part: "T-Handle Steering Controller", description: "Center console joystick controlling four independent 1/4 HP DC drive motors." },
      { part: "High-Gain Umbrella Antenna", description: "Steerable mesh dish antenna providing direct S-band communications with Earth." },
      { part: "Ground-Controlled Television Camera", description: "Color TV camera controlled remotely from Houston to track astronauts and the LM liftoff." }
    ],
    quiz: {
      question: "What historic 4.1-billion-year-old rock did the Apollo 15 crew discover thanks to their Lunar Rover?",
      options: [
        "The Genesis Rock",
        "The Rosetta Stone",
        "The Meteorite of Hadley",
        "The Diamond of Imbrium"
      ],
      correctIndex: 0,
      explanation: "Correct! The anorthosite 'Genesis Rock' proved that the newborn Moon was once covered in an ocean of molten magma."
    }
  },

  {
    id: "surveyor3-apollo12",
    name: "Surveyor 3 (and Apollo 12 Rendezvous)",
    mission: "Surveyor Program & Apollo 12",
    world: "moon",
    celestialBody: "moon",
    type: "lander",
    launchDate: "April 17, 1967",
    landingDate: "April 20, 1967",
    missionStart: "April 20, 1967",
    missionEnd: "May 4, 1967 (Inspected Nov 19, 1969)",
    status: "Dormant inside Surveyor Crater; camera retrieved by Apollo 12",
    location: "Ocean of Storms (Oceanus Procellarum)",
    latitude: -3.015,
    longitude: -23.418,
    purpose: "Demonstrate soft lunar landing and dig the first robotic trench in extraterrestrial soil to verify ground bearing strength.",
    story: {
      hook: "A lonely robot landed on the Moon in 1967. Two years later, two astronauts walked down into the crater and tapped it on the shoulder.",
      intro: "Surveyor 3 was the first robot to dig into the surface of the Moon, proving the ground was firm enough for human landers. In November 1969, Apollo 12 performed an unprecedented pinpoint landing 160 meters away, allowing astronauts Pete Conrad and Alan Bean to walk up to the machine.",
      chapters: [
        {
          title: "1. The Bouncing Robot",
          content: "When Surveyor 3 touched down on April 20, 1967, its radar lost lock on the crater slope and its descent engines did not shut down in time. The robot bounced twice—leaping 10 meters on its first bounce—before coming to rest on the 14-degree slope of Surveyor Crater."
        },
        {
          title: "2. The First Robotic Trench",
          content: "Surveyor 3 extended its pantograph soil-mechanics scoop and dug four trenches up to 17 centimeters deep. It proved the lunar soil was cohesive, fine-grained, and could bear the weight of Apollo's Lunar Module without sinking."
        },
        {
          title: "3. The Cosmic Reunion",
          content: "On November 19, 1969, Apollo 12's Lunar Module Intrepid touched down just 160 meters away. Conrad and Bean hiked down into the crater, took photographs, and cut off Surveyor 3's television camera, scoop, and tubing to return to Earth."
        },
        {
          title: "4. The Science of Deep Space Exposure",
          content: "Back in sterile laboratories on Earth, scientists analyzed how 31 months in the lunar vacuum affected mirrors, cables, and structural metals. The findings directly influenced the engineering of every future spacecraft."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Built by Hughes Aircraft Company under NASA JPL direction." },
      { stage: "Launch", desc: "Launched on an Atlas-Centaur rocket on April 17, 1967." },
      { stage: "Space Transit", desc: "65-hour direct trajectory transiting to the Moon." },
      { stage: "Landing", desc: "Radar glitch caused two bounces before settling in Surveyor Crater." },
      { stage: "Mission Operations", desc: "Dug four trenches and returned 6,315 television images over 14 days." },
      { stage: "Groundbreaking Discovery", desc: "Proved lunar soil has bearing strength sufficient for human astronaut boots." },
      { stage: "Mission End", desc: "Power ceased during the lunar night on May 4, 1967." },
      { stage: "Current Resting Place", desc: "Still stands in Surveyor Crater; its missing camera resides in the Smithsonian." }
    ],
    challenges: [
      "Radar altimeter loss causing the descent engines to fire through two surface bounces.",
      "Operating on a steep 14-degree interior crater slope without toppling over.",
      "Surviving temperature swings between +120°C and -130°C in the total vacuum.",
      "First astronaut rendezvous requiring pinpoint orbital guidance."
    ],
    discoveries: [
      "First empirical measurement of lunar soil shear strength and density.",
      "Direct measurement of micrometeorite bombardment and solar proton browning on spacecraft surfaces.",
      "Demonstration of pinpoint landing navigation in lunar orbit.",
      "Recovery and laboratory analysis of materials exposed to deep space environment."
    ],
    humanStory: "When Pete Conrad walked up to Surveyor 3, he looked at its television camera and noticed that the white paint had turned dark tan from solar wind radiation and dust. He carefully clipped the camera with bolt cutters and packed it into Apollo 12's sample carrier.",
    legacy: "Surveyor 3 enabled the Apollo 11 and 12 landings, and the parts retrieved from it provided humanity's baseline engineering data for long-term space material durability.",
    ending: {
      question: "Could a robot verify the safety of alien soil and then greet human visitors two years later?",
      answer: "Surveyor 3 dug the first trench, proved the Moon could support human footprints, and was inspected by Apollo 12.",
      conclusion: "Its tripod chassis still stands in Surveyor Crater, an enduring monument to robotic-human teamwork.",
      eternalStatus: "Surveyor Crater, Ocean of Storms (-3.015° N, -23.418° W)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/as12-48-7134/as12-48-7134~medium.jpg",
        caption: "Apollo 12 Commander Pete Conrad examines the Surveyor 3 spacecraft on the lunar surface.",
        credit: "NASA/Alan Bean",
        alt: "Apollo 12 astronaut visiting Surveyor 3"
      }
    ],
    sources: [
      {
        name: "NASA SP-284: Analysis of Surveyor 3 Material and Photographs Returned by Apollo 12",
        datasetId: "NASA-SP-284-SURVEYOR3",
        url: "https://ntrs.nasa.gov/citations/19720019239",
        description: "Official technical report on material degradation, micrometeoroids, and radiation effects."
      },
      {
        name: "Apollo 12 Lunar Surface Journal",
        datasetId: "ALSJ-AP12-SURVEYOR",
        url: "https://www.nasa.gov/history/alsj/a12/a12.html",
        description: "Astronaut audio transcripts and photographic documentation of the Surveyor 3 site."
      }
    ],
    hardwareAnatomy: [
      { part: "Surface Sampler Arm", description: "Motorized scissor-arm scoop used to dig trenches and drop rocks into the lander's footpads." },
      { part: "Surveyor Television Camera", description: "Rotating mirror optical camera that sent 6,315 scanlines back to Goldstone Earth station." },
      { part: "Crushable Aluminum Footpads", description: "Three honeycombed pads with strain gauges that absorbed impact energy on landing." }
    ],
    quiz: {
      question: "Which Apollo mission sent astronauts to walk up to Surveyor 3 and retrieve its camera?",
      options: [
        "Apollo 12",
        "Apollo 11",
        "Apollo 13",
        "Apollo 17"
      ],
      correctIndex: 0,
      explanation: "Correct! Apollo 12 Commander Pete Conrad and LMP Alan Bean landed 160 meters away and retrieved its camera."
    }
  },

  {
    id: "insight-lander",
    name: "InSight Lander",
    mission: "Interior Exploration using Seismic Investigations, Geodesy and Heat Transport",
    world: "mars",
    celestialBody: "mars",
    type: "lander",
    launchDate: "May 5, 2018",
    landingDate: "November 26, 2018",
    missionStart: "November 26, 2018",
    missionEnd: "December 15, 2022",
    status: "Silenced by dust accumulation on solar arrays (Dec 2022)",
    location: "Elysium Planitia ('The Biggest Parking Lot on Mars')",
    latitude: 4.502,
    longitude: 135.623,
    purpose: "Map the internal depth, composition, and temperature of Mars' crust, mantle, and molten core.",
    story: {
      hook: "A stationary robot that pressed its ear to the red dirt and listened to the heartbeat of Mars.",
      intro: "Unlike rovers that rolled across the surface, InSight stayed completely still. It placed an ultra-sensitive seismometer on the Martian surface under a protective dome, detecting over 1,300 marsquakes that revealed the planet's hidden interior.",
      chapters: [
        {
          title: "1. The Touchdown at Elysium Planitia",
          content: "On November 26, 2018, InSight touched down on the smooth, rock-free volcanic plains of Elysium Planitia. Its robotic arm carefully picked up SEIS (the seismometer) and set it directly onto the dirt."
        },
        {
          title: "2. The Wind and Thermal Shield",
          content: "To detect vibrations smaller than the width of a hydrogen atom, InSight placed a protective aerodynamic dome over the seismometer, shielding it from wind gusts and day-night temperature swings."
        },
        {
          title: "3. 1,300 Marsquakes",
          content: "InSight recorded over 1,300 seismic rumbles, including a magnitude 4.7 monster quake on May 4, 2022 that reverberated for over six hours. The seismic waves revealed Mars has a molten iron-rich core with a radius of approximately 1,830 kilometers."
        },
        {
          title: "4. The Final Farewell",
          content: "Over four years, a thick blanket of reddish dust coated InSight's solar panels, reducing power from 5,000 watt-hours to under 400 watt-hours. In December 2022, its final radio signal arrived at Earth, concluding its historic seismic campaign."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Constructed by Lockheed Martin Space with seismometers from CNES/IPGP." },
      { stage: "Launch", desc: "First interplanetary mission launched from Vandenberg Space Force Base, California." },
      { stage: "Space Transit", desc: "Accompanied by twin Mars Cube One (MarCO) communications CubeSats." },
      { stage: "Landing", desc: "Supersonic parachute descent and pulsed retro-rocket touchdown on Elysium Planitia." },
      { stage: "Mission Operations", desc: "Monitored atmospheric pressure, wind, and seismic tremors for over four Earth years." },
      { stage: "Groundbreaking Discovery", desc: "Mapped Mars' crustal thickness and measured the molten liquid core." },
      { stage: "Mission End", desc: "Solar panel output declined below operational thresholds; last transmission Dec 15, 2022." },
      { stage: "Current Resting Place", desc: "Rests on the plains of Elysium Planitia, coated in a blanket of red dust." }
    ],
    challenges: [
      "The HP3 'Mole' heat probe could not burrow deep due to unexpectedly cohesive, cement-like duricrust.",
      "Gradual dust buildup on stationary solar panels without cleaning mechanisms.",
      "Extremely subtle seismic signals requiring isolation from atmospheric wind turbulence.",
      "Operating during cold aphelion when Mars is farthest from the Sun."
    ],
    discoveries: [
      "Detected 1,318 marsquakes, proving Mars is seismically active.",
      "Determined Mars' crust is layered and 24 to 72 kilometers thick.",
      "Measured the radius of Mars' molten metallic core (~1,830 km) and found it enriched in sulfur.",
      "Recorded the acoustic rumble of meteorite impacts creating brand-new craters on Mars."
    ],
    humanStory: "To clean dust off the panels in 2021, engineers devised a counterintuitive trick: they used the robotic scoop to drop coarse sand grains next to the panels on a windy day. The bouncing sand grains picked up fine dust and carried it away, generating a 5% bump in power that kept the mission alive for another year.",
    legacy: "InSight provided the very first complete structural cross-section of another rocky planet's interior, bridging comparative geophysics between Earth and Mars.",
    ending: {
      question: "Could a stationary machine listening in the silence discover the hidden molten core of another planet?",
      answer: "InSight detected 1,318 marsquakes and measured the core of Mars.",
      conclusion: "Under its coating of red dust, it left humanity with the first 3D map of an alien world's interior.",
      eternalStatus: "Elysium Planitia (4.502° N, 135.623° E)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/PIA23168/PIA23168~medium.jpg",
        caption: "InSight lander selfie displaying its dust-covered solar arrays and the SEIS dome on the surface.",
        credit: "NASA/JPL-Caltech",
        alt: "InSight lander on Mars"
      }
    ],
    sources: [
      {
        name: "NASA PDS InSight Mars Mission Science Archive",
        datasetId: "INSIGHT-SEIS-EVENT-V2",
        url: "https://data.nasa.gov/dataset/InSight-Mars-Lander-Seismic-and-Atmospheric-Data/seis-in",
        description: "Continuous raw marsquake waveforms, wind speeds, and solar array voltages."
      },
      {
        name: "NASA JPL InSight Mission End Status Report",
        datasetId: "PIA23168",
        url: "https://mars.nasa.gov/insight/mission/overview/",
        description: "Final engineering telemetry, dust accumulation logs, and seismic catalogs."
      }
    ],
    hardwareAnatomy: [
      { part: "SEIS (Seismic Experiment for Interior Structure)", description: "Ultra-sensitive French/European seismometer measuring ground motions smaller than an atom." },
      { part: "Wind and Thermal Shield (WTS)", description: "Aerodynamic dome placed over SEIS with a chainmail skirt to seal out wind gusts." },
      { part: "UltraFlex Solar Arrays", description: "Two 2.2-meter diameter accordion-folding solar arrays providing 600-700W at landing." },
      { part: "Instrument Deployment Arm (IDA)", description: "Robotic arm equipped with a motorized claw (wax-actuated grapple) that deployed SEIS onto the dirt." }
    ],
    quiz: {
      question: "What major discovery did InSight make by measuring seismic waves from marsquakes?",
      options: [
        "Mars has a molten, liquid iron-rich core",
        "Mars has underground rivers of liquid water",
        "The Moon was once part of Mars",
        "Mars has active tectonic plates moving like Earth"
      ],
      correctIndex: 0,
      explanation: "Correct! InSight's seismic waves proved Mars has a large, molten liquid metallic core with a radius of about 1,830 km."
    }
  },

  {
    id: "apollo11-lrrr",
    name: "Apollo 11 Lunar Laser Ranging Retroreflector (LRRR)",
    mission: "Apollo 11",
    world: "moon",
    celestialBody: "moon",
    type: "experiment",
    launchDate: "July 16, 1969",
    landingDate: "July 20, 1969",
    missionStart: "July 21, 1969",
    missionEnd: "Still Operational (Passive Retroreflector)",
    status: "Permanently Active and Operational (Zero Power Required)",
    location: "Tranquility Base, Mare Tranquillitatis",
    latitude: 0.6734,
    longitude: 23.4731,
    purpose: "Provide an eternal optical target for laser pulses from Earth observatories to measure the Earth-Moon distance with millimeter accuracy.",
    story: {
      hook: "Neil Armstrong set it on the Moon in 1969. It has no battery, no computer, and no moving parts—yet it is still working today.",
      intro: "Of all the instruments left on the Moon by Apollo 11, only one is still actively used for cutting-edge science today: the Lunar Laser Ranging Retroreflector. For over 55 years, scientists have bounced green laser pulses off its corner-cube prisms.",
      chapters: [
        {
          title: "1. The Deployment at Tranquility Base",
          content: "Just minutes before re-entering the Lunar Module Eagle on July 21, 1969, Buzz Aldrin carried the LRRR pallet 15 meters south of the lander and leveled its bubble indicator, pointing its array of 100 quartz prisms directly at Earth."
        },
        {
          title: "2. Bouncing Light Off the Moon",
          content: "Observatories on Earth (like the McDonald Observatory in Texas) fire intense laser pulses through giant telescopes. Photons travel 384,400 km in 1.28 seconds, bounce off the corner cubes, and return to Earth in 2.56 seconds."
        },
        {
          title: "3. Testing Einstein's Universe",
          content: "By timing this photon round-trip to picosecond accuracy, physicists can measure the distance to the Moon down to a single millimeter. This data has verified Einstein's Theory of General Relativity to unprecedented precision."
        },
        {
          title: "4. The Drifting Moon",
          content: "The laser data revealed that the Moon is not in a fixed orbit: tidal friction in Earth's oceans drains Earth's rotational momentum, pushing the Moon outward by exactly 3.8 centimeters every single year."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Prisms manufactured by Bendix Corporation from suprasil fused silica." },
      { stage: "Launch", desc: "Launched July 16, 1969 aboard the Saturn V with the EASEP experiment package." },
      { stage: "Space Transit", desc: "Transited translunar injection inside Eagle's scientific equipment bay." },
      { stage: "Landing", desc: "Touched down on the basalt plains of Mare Tranquillitatis." },
      { stage: "Mission Operations", desc: "Deployed by Buzz Aldrin; first laser bounce detected from Lick Observatory Aug 1, 1969." },
      { stage: "Groundbreaking Discovery", desc: "Proved the Moon's 3.8 cm/year orbital recession and verified gravitational equivalence." },
      { stage: "Mission End", desc: "Never ends—because it is purely optical, it will function for centuries." },
      { stage: "Current Resting Place", desc: "Tranquility Base, Mare Tranquillitatis; prisms gleaming in the lunar sunlight." }
    ],
    challenges: [
      "Extreme temperature swings (+120°C to -130°C) causing thermal distortion of fused silica prisms.",
      "Micrometeorite impacts and electrostatic dust levitation gradually dimming optical reflectivity.",
      "Photons returning are extraordinarily rare: out of 10^17 photons fired from Earth, only 1 or 2 photons return.",
      "Astronaut EVA time constraint: deployed in under 5 minutes during the brief 2.5-hour Apollo 11 moonwalk."
    ],
    discoveries: [
      "The Moon is moving away from Earth at 3.8 centimeters per year due to ocean tidal friction.",
      "The Moon has a fluid outer core that dissipates rotational energy.",
      "Confirmed Einstein's Equivalence Principle: Earth and Moon fall toward the Sun at the identical gravitational rate to 1 part in 10^14.",
      "Measured Earth's subtle rotational wobble (nutation and precession) with millimeter accuracy."
    ],
    humanStory: "On August 1, 1969, scientists at the Lick Observatory in California fired pulses into the night sky. In the receiving detector, single photons trickled in at exactly 2.56 seconds. The room erupted in cheers—humanity had established an enduring optical bridge between two worlds.",
    legacy: "The Apollo 11 LRRR is the only Apollo experiment still providing active scientific data in the 21st century, continuing to test quantum physics and cosmic relativity.",
    ending: {
      question: "Can a passive tray of glass prisms survive half a century and continuously test the laws of the universe?",
      answer: "The Apollo 11 Retroreflector still reflects Earth's lasers every week.",
      conclusion: "It proves that true scientific design can outlive generations without needing a single watt of battery power.",
      eternalStatus: "Mare Tranquillitatis, Tranquility Base (0.6734° N, 23.4731° E)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/AS11-40-5952/AS11-40-5952~medium.jpg",
        caption: "The Apollo 11 Lunar Laser Ranging Retroreflector sitting on the regolith of Tranquility Base.",
        credit: "NASA/Neil Armstrong",
        alt: "Apollo 11 LRRR on the Moon"
      }
    ],
    sources: [
      {
        name: "NASA PDS Lunar Laser Ranging Observational Archive",
        datasetId: "PDS-LLRR-OBS-1969-2026",
        url: "https://data.nasa.gov/dataset/Apollo-11-Laser-Ranging-Retroreflector-Observations/llrr-pds",
        description: "Complete time-of-flight laser photon detection database from Apache Point and McDonald Observatories."
      },
      {
        name: "Apollo 11 Lunar Surface Journal: EASEP Deployment",
        datasetId: "ALSJ-AP11-EASEP",
        url: "https://www.nasa.gov/history/alsj/a11/a11.html",
        description: "Official transcript of Buzz Aldrin and Neil Armstrong deploying the retroreflector."
      }
    ],
    hardwareAnatomy: [
      { part: "100 Corner-Cube Prisms", description: "Fused silica tetrahedral prisms designed to reflect light back in the exact opposite direction it arrived." },
      { part: "Teflon & Aluminum Mounting Tray", description: "Lightweight tray with thermal isolation tabs to prevent prism distortion during lunar day/night." },
      { part: "Sun-Compass & Level Indicator", description: "Bubble level and shadow pointer allowing astronauts to aim the array directly toward Earth." }
    ],
    quiz: {
      question: "How fast does laser light travel from Earth to the Moon and bounce back to Earth?",
      options: [
        "About 2.56 seconds",
        "About 10 minutes",
        "Less than 0.01 seconds",
        "Exactly 1 hour"
      ],
      correctIndex: 0,
      explanation: "Correct! The round trip distance is ~768,800 km. At the speed of light (300,000 km/s), it takes ~2.56 seconds."
    }
  },

  {
    id: "viking1-lander",
    name: "Viking 1 Lander",
    mission: "Viking Project",
    world: "mars",
    celestialBody: "mars",
    type: "lander",
    launchDate: "August 20, 1975",
    landingDate: "July 20, 1976",
    missionStart: "July 20, 1976",
    missionEnd: "November 11, 1982",
    status: "Silenced in 1982 by accidental uplink overwrite",
    location: "Chryse Planitia ('Plains of Gold')",
    latitude: 22.697,
    longitude: -48.222,
    purpose: "Search for biosignatures in Martian soil, take high-resolution panoramic photographs, and track Martian weather.",
    story: {
      hook: "The first robot to send back a crystal-clear color photograph of the red sands of Mars.",
      intro: "On July 20, 1976—exactly seven years after the Apollo 11 moonwalk—Viking 1 became the first spacecraft to successfully land on Mars and complete its mission. It operated for more than six years on the volcanic plain of Chryse Planitia.",
      chapters: [
        {
          title: "1. The First Photograph of Mars",
          content: "Just 25 seconds after touching down, Viking 1's mechanical scanner camera began building a line-by-line image of its own footpad resting in reddish dust and pebbles. Minutes later, the first color panoramic vista revealed a pinkish-orange sky."
        },
        {
          title: "2. The Search for Life",
          content: "Viking 1 scooped soil into three automated miniature biology experiments: Gas Exchange, Pyrolytic Release, and Labeled Release. The Labeled Release experiment detected a surprising release of radioactive gas, sparking debate that continues to this day."
        },
        {
          title: "3. Six Years of Martian Weather",
          content: "While Viking's Gas Chromatograph Mass Spectrometer found no organic molecules, its meteorology boom recorded daily temperatures, wind speeds, and seasonal atmospheric pressure drops caused by polar carbon dioxide freezing."
        },
        {
          title: "4. The Accidental Silence",
          content: "In November 1982, ground controllers sent a software update intended to improve battery management. An errant command accidentally overwrote the antenna pointing parameters, turning the high-gain antenna away from Earth. Despite repeated recovery attempts, contact was lost."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Constructed by Martin Marietta under management of NASA Langley Research Center." },
      { stage: "Launch", desc: "Launched aboard a Titan IIIE-Centaur rocket from Cape Canaveral." },
      { stage: "Space Transit", desc: "Spent 10 months in transit before entering Mars orbit on June 19, 1976." },
      { stage: "Landing", desc: "Separated from orbiter, decelerated with aeroshell, parachute, and terminal thrusters." },
      { stage: "Mission Operations", desc: "Operated for 2,307 Earth days (2,245 sols), returning thousands of images." },
      { stage: "Groundbreaking Discovery", desc: "First in-situ analysis of Martian soil chemistry and long-term climate cycles." },
      { stage: "Mission End", desc: "Communications lost in November 1982 due to accidental antenna misorientation." },
      { stage: "Current Resting Place", desc: "Stationed in Chryse Planitia; renamed the Thomas A. Mutch Memorial Station." }
    ],
    challenges: [
      "Sterilization bake at 112°C for 40 hours prior to launch to prevent contaminating Mars with Earth microbes.",
      "Landing in uncharted boulder fields with only low-resolution orbital imaging reconnaissance.",
      "Interpreting anomalous chemical reactions in biological experiments without detecting organic compounds.",
      "Extreme thermal cycling on radioisotope thermoelectric generators across six years."
    ],
    discoveries: [
      "First clear color photographs of Mars' surface showing iron-oxide rich regolith and a salmon-pink sky.",
      "First continuous multi-year meteorological monitoring of Martian seasons and pressure drops.",
      "Demonstrated that Martian soil lacks complex organic molecules at parts-per-billion sensitivity.",
      "Discovered strong chemical oxidants (such as peroxides) in the topsoil that mimic metabolic reactions."
    ],
    humanStory: "The team scheduled the landing for July 4, 1976 (the American Bicentennial), but orbital photos showed the original landing site was treacherous with canyons and boulders. Flight Director James Martin delayed the landing by 16 days until Chryse Planitia was deemed safe, saving the spacecraft from disaster.",
    legacy: "Viking 1 established modern planetary protection protocols and proved long-duration survival on Mars was possible, serving as the benchmark for all future Mars missions.",
    ending: {
      question: "Could a 1970s lander touch the surface of Mars and conduct the first search for extraterrestrial life?",
      answer: "Viking 1 operated for 2,245 sols and sent back the first color panoramas of another world.",
      conclusion: "Silenced by an accidental software glitch in 1982, it remains our first permanent monument on Mars.",
      eternalStatus: "Thomas A. Mutch Memorial Station, Chryse Planitia (22.697° N, -48.222° W)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/PIA00563/PIA00563~medium.jpg",
        caption: "First historic photograph taken on the surface of Mars by Viking 1 Lander, showing its footpad in the red soil.",
        credit: "NASA/JPL",
        alt: "First photo from Mars surface"
      },
      {
        url: "https://images-assets.nasa.gov/image/PIA00564/PIA00564~medium.jpg",
        caption: "Viking 1 panoramic vista of the boulder-strewn landscape of Chryse Planitia.",
        credit: "NASA/JPL",
        alt: "Viking 1 panorama"
      }
    ],
    sources: [
      {
        name: "NASA PDS Viking Lander 1 Science Archives",
        datasetId: "NASA-PDS-VL1-ROCKS",
        url: "https://data.nasa.gov/dataset/Viking-Lander-1-Surface-Science-Data/vl1-data",
        description: "Official meteorological tables, camera scans, and biology payload raw measurements."
      },
      {
        name: "NASA History Office: On Mars - Exploration of the Red Planet 1958-1978",
        datasetId: "NASA-SP-4212",
        url: "https://history.nasa.gov/SP-4212/on-mars.html",
        description: "Comprehensive historical chronicle of the Viking Project design and operations."
      }
    ],
    hardwareAnatomy: [
      { part: "Facsimile Scanner Cameras", description: "Two mechanical scanning cameras with nodding mirrors that scanned scenes line-by-line." },
      { part: "Miniature Biology Laboratory", description: "Three automated biological experiments contained inside a single cubic foot box." },
      { part: "Surface Sampler Collector Head", description: "Extendable boom with a backhoe scoop, temperature sensor, and sieve that passed soil into sample funnels." },
      { part: "SNAP-19 RTGs", description: "Twin plutonium-fueled radioisotope generators producing 70W of electrical power." }
    ],
    quiz: {
      question: "What year did Viking 1 make history by transmitting the first clear photo from the surface of Mars?",
      options: [
        "1976",
        "1969",
        "1989",
        "2004"
      ],
      correctIndex: 0,
      explanation: "Correct! Viking 1 touched down on July 20, 1976 and sent the first photograph within 25 seconds."
    }
  },

  {
    id: "sojourner",
    name: "Sojourner (Mars Pathfinder)",
    mission: "Mars Pathfinder",
    world: "mars",
    celestialBody: "mars",
    type: "rover",
    launchDate: "December 4, 1996",
    landingDate: "July 4, 1997",
    missionStart: "July 4, 1997",
    missionEnd: "September 27, 1997 (Sol 83)",
    status: "Silenced by Pathfinder base station battery failure (Sept 1997)",
    location: "Ares Vallis ('The Ancient Catastrophic Flood Channel')",
    latitude: 19.33,
    longitude: -33.55,
    purpose: "Demonstrate that low-cost, lightweight mobile rovers can navigate the Martian surface and analyze rocks in-situ.",
    story: {
      hook: "The size of a microwave oven, this tiny explorer proved that rovers could roam the Red Planet.",
      intro: "Named after abolitionist Sojourner Truth, this 10.5-kilogram micro-rover proved the concept of mobile extraterrestrial robotics. Packed inside the Pathfinder lander, Sojourner rolled down two ramps on July 4, 1997, and opened the modern era of Mars rovers.",
      chapters: [
        {
          title: "1. The Airbag Revolution",
          content: "Pathfinder eliminated heavy retrorockets in favor of giant airbags. After bouncing across Ares Vallis, its three solar-powered petals unfolded, revealing tiny Sojourner strapped inside."
        },
        {
          title: "2. The Rocker-Bogie Demonstration",
          content: "Equipped with a six-wheel articulated suspension system called 'rocker-bogie', Sojourner proved that a small rover could crawl over boulders larger than its own wheels without tipping over."
        },
        {
          title: "3. Sniffing Martian Rocks",
          content: "Sojourner pressed its Alpha Particle X-Ray Spectrometer (APXS) against rocks nicknamed 'Barnacle Bill' and 'Yogi', discovering volcanic andesite that proved Mars had complex volcanic differentiation."
        },
        {
          title: "4. The Final Orbit",
          content: "Designed for seven days, Sojourner worked for 83 sols until the Pathfinder base station battery depleted. Because Sojourner was programmed to circle the lander if communication stopped, it likely circled Pathfinder repeatedly before stopping forever."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Built at NASA JPL under the 'Faster, Better, Cheaper' discovery initiative." },
      { stage: "Launch", desc: "Launched December 4, 1996 aboard a Delta II 7925 rocket." },
      { stage: "Space Transit", desc: "Seven-month direct cruise trajectory to Mars." },
      { stage: "Landing", desc: "Airbag landing on an ancient catastrophic flood plain at Ares Vallis." },
      { stage: "Mission Operations", desc: "Drove approximately 100 meters, completed 15 chemical analyses of rocks." },
      { stage: "Groundbreaking Discovery", desc: "Demonstrated extraterrestrial autonomous navigation and verified volcanic rock compositions." },
      { stage: "Mission End", desc: "Base station communications failed on Sol 83 due to battery depletion." },
      { stage: "Current Resting Place", desc: "Stationed beside the Carl Sagan Memorial Station in Ares Vallis." }
    ],
    challenges: [
      "Rigid mass limit: entire rover weighed just 10.5 kg (23 lbs) on Earth.",
      "Computing limits: powered by a 0.1 MHz 8-bit Intel 80C85 processor with 512 KB of RAM.",
      "Navigating rock-strewn terrain with an 8-minute radio delay using simple autonomous laser striper sensors.",
      "Relying entirely on the Pathfinder base station for radio relay back to Earth."
    ],
    discoveries: [
      "Validated the Rocker-Bogie suspension geometry that became the standard for all subsequent NASA rovers.",
      "Discovered volcanic andesite rocks at Ares Vallis, indicating crustal melting and remelting on early Mars.",
      "Confirmed Ares Vallis was formed by catastrophic prehistoric floods of liquid water.",
      "Proved rovers could be operated remotely by public scientists and university researchers."
    ],
    humanStory: "In July 1997, the Pathfinder website received 565 million hits in a single week—one of the largest internet events in human history at the dawn of the World Wide Web. Millions of school students around the world watched Sojourner roll down its ramp.",
    legacy: "Every Mars rover that followed—Spirit, Opportunity, Curiosity, and Perseverance—is a direct engineering descendant of Sojourner's suspension and mobility design.",
    ending: {
      question: "Could a microwave-sized robot make humanity fall in love with rolling across another planet?",
      answer: "Sojourner drove across Ares Vallis and founded the modern era of Mars exploration.",
      conclusion: "Parked beside its lander in the ancient flood plains, it blazed the trail for all future rovers.",
      eternalStatus: "Carl Sagan Memorial Station, Ares Vallis (19.33° N, -33.55° W)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/PIA01120/PIA01120~medium.jpg",
        caption: "Sojourner rover taking an APXS chemical measurement on the rock nicknamed 'Yogi'.",
        credit: "NASA/JPL",
        alt: "Sojourner analyzing rock Yogi"
      }
    ],
    sources: [
      {
        name: "NASA PDS Mars Pathfinder & Sojourner Archive",
        datasetId: "MPF-M-APXS-2-EDR-V1.0",
        url: "https://data.nasa.gov/dataset/Mars-Pathfinder-Sojourner-Science-Data/mpf-data",
        description: "APXS rock spectra, rover driving logs, and temperature engineering telemetry."
      },
      {
        name: "NASA JPL Mars Pathfinder Mission Page",
        datasetId: "JPL-MPF-IMAGERY",
        url: "https://mars.nasa.gov/mpf/index.html",
        description: "Official mission overview, Sol-by-Sol driving logs, and photographic catalogs."
      }
    ],
    hardwareAnatomy: [
      { part: "Rocker-Bogie 6-Wheel Chassis", description: "Pioneering suspension allowing all six wheels to maintain ground contact over obstacles." },
      { part: "Alpha Particle X-Ray Spectrometer", description: "Sensor arm containing Curium-244 that bombarded rocks to analyze elemental chemical recipes." },
      { part: "Solar Panel Deck", description: "GaAs solar array producing 16W of power during peak Martian midday." },
      { part: "Laser Hazard Detection Stripers", description: "Forward-projecting laser diodes that detected sudden drops and large rocks." }
    ],
    quiz: {
      question: "What innovative suspension system did Sojourner test that NASA used on every Mars rover since?",
      options: [
        "Rocker-Bogie Suspension",
        "Air Suspension with shock absorbers",
        "Magnetic Levitation tracks",
        "Caterpillar treads"
      ],
      correctIndex: 0,
      explanation: "Correct! The rocker-bogie mechanism lets rovers climb obstacles without tipping over and is used on Curiosity and Perseverance today."
    }
  },

  {
    id: "phoenix-lander",
    name: "Phoenix Mars Lander",
    mission: "Mars Scout Program",
    world: "mars",
    celestialBody: "mars",
    type: "lander",
    launchDate: "August 4, 2007",
    landingDate: "May 25, 2008",
    missionStart: "May 25, 2008",
    missionEnd: "November 2, 2008",
    status: "Crushed by severe polar winter carbon dioxide ice sheet (2008)",
    location: "Green Valley, Vastitas Borealis (Martian Arctic)",
    latitude: 68.2188,
    longitude: -125.7492,
    purpose: "Land in the arctic plains of Mars to touch and analyze pure subsurface water ice and test for habitability.",
    story: {
      hook: "In the frozen north of Mars, this lander scraped away the red dust and touched pure extraterrestrial water ice.",
      intro: "Phoenix landed far above the Martian arctic circle in the polygonal permafrost of Vastitas Borealis. Equipped with a motorized backhoe trenching arm, it became the first mission to directly dig up and photograph pure water ice on Mars.",
      chapters: [
        {
          title: "1. The Arctic Landing",
          content: "On May 25, 2008, Phoenix touched down in Green Valley using pulsed hydrazine thrusters, landing safely on polygonal permafrost ground resembling the arctic tundra of northern Canada."
        },
        {
          title: "2. Scraping Down to Pure Ice",
          content: "Using its 2.35-meter robotic arm, Phoenix dug trenches in the soil. Just five centimeters beneath the red dust, the scoop hit a hard, blindingly white layer. Within four days, exposed dice-sized white chunks sublimated into gas, proving definitively they were water ice."
        },
        {
          title: "3. Perchlorate Salts and Snow",
          content: "Phoenix delivered soil samples to its miniature ovens (TEGA) and wet chemistry laboratory (MECA), discovering perchlorate salts that lower water's freezing point. Its laser radar (LIDAR) even detected cirrus clouds dropping real water-ice snowflakes from the Martian sky."
        },
        {
          title: "4. The Crushing Polar Winter",
          content: "As the northern winter approached, the Sun dipped below the horizon for months. Temperatures dropped past -120°C as meters of dry-ice (frozen CO2) snow buried the lander. In 2010, orbital photos showed its solar arrays had snapped under the weight of the winter ice sheet."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Constructed using flight-ready components from canceled 2001 Mars Surveyor lander." },
      { stage: "Launch", desc: "Launched August 4, 2007 aboard a Delta II 7925 rocket from Cape Canaveral." },
      { stage: "Space Transit", desc: "Traveled 679 million kilometers on an arc to Mars' northern polar permafrost." },
      { stage: "Landing", desc: "Pulsed liquid-propellant retro-rocket touchdown in arctic Vastitas Borealis." },
      { stage: "Mission Operations", desc: "Dug multiple trenches, baked permafrost soil, and monitored polar weather for 5 months." },
      { stage: "Groundbreaking Discovery", desc: "First in-situ confirmation of pure subsurface water ice and detection of falling Martian snow." },
      { stage: "Mission End", desc: "Lost power in November 2008 as continuous polar darkness enveloped the arctic." },
      { stage: "Current Resting Place", desc: "Rests beneath seasonal seasonal dry-ice caps in Vastitas Borealis." }
    ],
    challenges: [
      "Landing in polar terrain where freezing permafrost creates deep polygonal cracking trenches.",
      "Digging into rock-hard frozen cryogenic ice with a lightweight robotic backhoe scoop.",
      "Soil clumps sticking to the scoop screens, requiring vibrational shakers to deliver samples to ovens.",
      "Surviving the total solar blackout of the multi-month northern Martian polar winter."
    ],
    discoveries: [
      "Direct discovery of pure water ice just 5 cm beneath the topsoil in the Martian arctic.",
      "Discovered perchlorate salts (ClO4-) acting as an antifreeze agent in extraterrestrial soils.",
      "First observation of snow falling from clouds in the Martian atmosphere (detected by laser LIDAR).",
      "Demonstrated that the pH of Martian arctic soil is alkaline (7.7), similar to terrestrial sea water."
    ],
    humanStory: "When TEGA's sample screen remained jammed with sticky soil for days, the engineering team at the University of Arizona turned on the soil shaker for hours. When a tiny grain finally fell into the oven, the scientists cheered in relief as heating curves revealed pure water vapor.",
    legacy: "Phoenix proved that vast reservoirs of accessible water ice exist right beneath the Martian surface, transforming our plans for future human landings and long-term bases on Mars.",
    ending: {
      question: "Could a robotic explorer survive arctic conditions to scrape away dirt and touch pure ice?",
      answer: "Phoenix photographed sublimating water ice and proved Mars has accessible water reserves.",
      conclusion: "Buried beneath meters of winter carbon dioxide ice, its discovery guarantees humans will follow in its tracks.",
      eternalStatus: "Green Valley, Vastitas Borealis (68.2188° N, -125.7492° W)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/PIA10738/PIA10738~medium.jpg",
        caption: "Sublimating water-ice chunks photographed over 4 days in Phoenix's trench 'Dodo-Goldilocks'.",
        credit: "NASA/JPL-Caltech/University of Arizona",
        alt: "Subsurface water ice on Mars"
      }
    ],
    sources: [
      {
        name: "NASA PDS Phoenix Mars Lander Archive",
        datasetId: "PHX-M-RA-2-EDR-V1.0",
        url: "https://data.nasa.gov/dataset/Phoenix-Mars-Lander-Surface-Science-Data/phx-pds",
        description: "Robotic arm trench coordinates, TEGA evolved gas spectra, and MECA wet chemistry data."
      },
      {
        name: "University of Arizona Phoenix Science Operations",
        datasetId: "UA-PHX-OVERVIEW",
        url: "https://www.nasa.gov/mission_pages/phoenix/main/index.html",
        description: "Official mission overview, weather LIDAR profiles, and high-resolution arctic imagery."
      }
    ],
    hardwareAnatomy: [
      { part: "2.35-Meter Robotic Arm", description: "Articulated titanium arm with a motorized rasp and scoop capable of cutting into frozen ice." },
      { part: "TEGA (Thermal & Evolved-Gas Analyzer)", description: "Eight miniature high-temperature ovens that baked soil up to 1000°C to analyze vaporized gases." },
      { part: "MECA Wet Chemistry Laboratory", description: "Four beakers that added pure water to soil to measure electrical conductivity, pH, and dissolved ions." },
      { part: "Meteorological Laser LIDAR", description: "Canadian Space Agency pulsed laser that probed clouds and detected falling snow in the atmosphere." }
    ],
    quiz: {
      question: "What proof did Phoenix discover that the white material in its trenches was real water ice?",
      options: [
        "The white chunks vanished (sublimated) over four days",
        "It turned into blue liquid puddles instantly",
        "It tasted like table salt",
        "It caught fire when heated"
      ],
      correctIndex: 0,
      explanation: "Correct! In the thin Martian atmosphere, water ice sublimates directly from solid to gas, causing the white chunks to disappear."
    }
  },

  {
    id: "apollo17-alsep",
    name: "Apollo 17 ALSEP Station & Geophysics Suite",
    mission: "Apollo 17",
    world: "moon",
    celestialBody: "moon",
    type: "experiment",
    launchDate: "December 7, 1972",
    landingDate: "December 11, 1972",
    missionStart: "December 11, 1972",
    missionEnd: "September 30, 1977",
    status: "Dormant (Operated continuously for 5 years until shut down by NASA budgetary decision)",
    location: "Taurus-Littrow Valley",
    latitude: 20.1908,
    longitude: 30.7717,
    purpose: "Measure lunar internal heat flow, detect deep moonquakes, and analyze the trace lunar atmosphere.",
    story: {
      hook: "Humanity's final Apollo footprints left behind a nuclear-powered scientific station that recorded moonquakes for five years.",
      intro: "On December 11, 1972, Apollo 17 astronauts Gene Cernan and Harrison Schmitt set down humanity's most comprehensive lunar laboratory in the Taurus-Littrow valley. Powered by a plutonium nuclear generator, the ALSEP station transmitted science daily until September 1977.",
      chapters: [
        {
          title: "1. The Nuclear Power Plant",
          content: "To operate continuously during the freezing two-week lunar nights, astronauts installed the SNAP-27 Radioisotope Thermoelectric Generator (RTG). Fueling it with a glowing rod of Plutonium-238, they generated 70 Watts of uninterrupted electricity."
        },
        {
          title: "2. Listening to Moonquakes",
          content: "Apollo 17 deployed the Lunar Seismic Profiling Experiment along with four surface geophones. They laid out explosive charges that were detonated after the crew left to produce artificial seismic waves that mapped the lunar crust."
        },
        {
          title: "3. Sniffing the Lunar Exosphere",
          content: "The Lunar Atmospheric Composition Experiment (LACE) measured the Moon's trace exosphere, detecting atoms of helium, neon, and argon, proving the Moon possesses an ultra-tenuous dynamic atmosphere driven by the solar wind."
        },
        {
          title: "4. The 1977 Shutdown",
          content: "By 1977, the entire Apollo ALSEP network had transmitted over 12,000 seismic events. Due to NASA budget reallocation toward the Space Shuttle, NASA officially commanded the radio transmitters off on September 30, 1977."
        }
      ]
    },
    journey: [
      { stage: "Earth", desc: "Manufactured by Bendix Corporation Aerospace Systems Division." },
      { stage: "Launch", desc: "Launched December 7, 1972 on the final Saturn V lunar flight." },
      { stage: "Space Transit", desc: "Stowed in the scientific equipment bay of LM Challenger." },
      { stage: "Landing", desc: "Touched down on the floor of the dramatic Taurus-Littrow valley." },
      { stage: "Mission Operations", desc: "Operated 24/7 for nearly five full years, sending continuous data to Earth." },
      { stage: "Groundbreaking Discovery", desc: "Measured lunar heat flow, detected deep tidal moonquakes, and sampled the exosphere." },
      { stage: "Mission End", desc: "Transmitters commanded to power down by NASA on September 30, 1977." },
      { stage: "Current Resting Place", desc: "Central Station, RTG, and sensors remain in Taurus-Littrow valley." }
    ],
    challenges: [
      "Drilling deep into dense basalt and regolith to insert heat-flow temperature probes.",
      "Handling the extremely hot Plutonium-238 fuel cask with special handling tools.",
      "Keeping sensitive mass spectrometers free from contamination by astronaut spacesuit outgassing.",
      "Surviving the extreme temperature differential between lunar noon and midnight."
    ],
    discoveries: [
      "Recorded thousands of deep moonquakes occurring synchronously with Earth tidal stress at perigee.",
      "Measured the lunar heat flow from radioactive decay in the mantle (approx. 14-18 mW/m²).",
      "First in-situ direct identification of the native lunar exosphere (argon, helium, neon gases).",
      "Determined that the Moon's upper basalt crust in Taurus-Littrow is 1.4 kilometers thick."
    ],
    humanStory: "Harrison Schmitt was the first trained professional geologist to walk on the Moon. When he drilled the 3-meter core hole for the heat-flow probes, the titanium drill bit jammed in the dense rock. He and Gene Cernan spent an hour of precious oxygen wrestling it out of the ground to secure the thermal data.",
    legacy: "The Apollo 17 ALSEP station provided the definitive long-baseline geophysical dataset for the Moon, which NASA is now building upon for the permanent Artemis Base Camp.",
    ending: {
      question: "Could a nuclear-powered scientific station monitor an alien world for half a decade without a human crew?",
      answer: "Apollo 17 ALSEP transmitted data for 1,754 days and mapped thousands of moonquakes.",
      conclusion: "Turned off only due to budget cuts in 1977, its hardware still rests under the Apennine peaks.",
      eternalStatus: "Taurus-Littrow Valley (20.1908° N, 30.7717° E)."
    },
    images: [
      {
        url: "https://images-assets.nasa.gov/image/as17-134-20448/as17-134-20448~medium.jpg",
        caption: "Commander Gene Cernan stands by the Rover with the ALSEP deployment site in the background.",
        credit: "NASA/Harrison Schmitt",
        alt: "Apollo 17 ALSEP site"
      }
    ],
    sources: [
      {
        name: "NASA PDS Apollo 17 ALSEP Science Archive",
        datasetId: "PDS-A17-ALSEP-DATA",
        url: "https://data.nasa.gov/dataset/Apollo-17-ALSEP-Geophysical-Data/a17-pds",
        description: "Heat flow telemetry, seismic event logs, and lunar atmospheric mass spectrometer readings."
      },
      {
        name: "Apollo 17 Lunar Surface Journal",
        datasetId: "ALSJ-AP17-ALSEP",
        url: "https://www.nasa.gov/history/alsj/a17/a17.html",
        description: "Complete astronaut voice transcripts, deployment photography, and technical debriefs."
      }
    ],
    hardwareAnatomy: [
      { part: "Central Station Transmitter", description: "Command telemetry hub with helical antenna providing telemetry downlink to Earth." },
      { part: "SNAP-27 Radioisotope Thermoelectric Generator", description: "Nuclear power generator with beryllium radiator fins converting heat from Plutonium-238 into 70W." },
      { part: "Lunar Surface Gravimeter", description: "High-precision spring gravimeter designed to detect cosmic gravitational waves and lunar tides." },
      { part: "Heat Flow Probes", description: "Two platinum resistance thermometer cables inserted 2.5 meters deep into the lunar crust." }
    ],
    quiz: {
      question: "What powered the Apollo 17 ALSEP station to keep it running for five years through freezing two-week lunar nights?",
      options: [
        "A Plutonium-238 nuclear radioisotope generator (RTG)",
        "Standard AA alkaline batteries",
        "A diesel generator",
        "Giant solar mirrors"
      ],
      correctIndex: 0,
      explanation: "Correct! The SNAP-27 RTG converted heat from radioactive decay of Plutonium-238 into continuous electricity."
    }
  }
];
