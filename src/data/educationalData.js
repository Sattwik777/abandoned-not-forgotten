/**
 * Educational Data: "LEARN LIKE A SPACE SCIENTIST"
 * Features:
 * - Did You Know? curiosity cards
 * - Mission Challenges: "What Would You Do?" interactive simulations
 * - STEM Classroom resources
 */

export const DID_YOU_KNOW_FACTS = [
  {
    id: 1,
    category: "MOON",
    title: "The Apollo 15 Rover Had No Key",
    fact: "The Lunar Roving Vehicle didn't have an ignition key or a steering wheel! It was driven using a simple T-shaped hand controller placed between the two astronaut seats so either astronaut could steer it.",
    badge: "Lunar Mechanics"
  },
  {
    id: 2,
    category: "MARS",
    title: "Martian Dust Devils are Like Robotic Car Washes",
    fact: "Opportunity was only supposed to survive for 90 days because dust would cover its solar panels. But lucky Martian mini-tornadoes called 'dust devils' swept over the rover dozens of times, blowing the dust off and giving it a fresh battery charge!",
    badge: "Atmospheric Weather"
  },
  {
    id: 3,
    category: "MOON",
    title: "Apollo 11's Experiment is Still Working Today",
    fact: "Neil Armstrong and Buzz Aldrin set down a small prism mirror on July 21, 1969. Because it requires zero electricity, laser observatories on Earth still shoot green lasers at it every week to measure the Moon's distance to millimeter accuracy!",
    badge: "Optics & Relativity"
  },
  {
    id: 4,
    category: "MARS",
    title: "Spirit Made Its Best Discovery Because It Broke",
    fact: "In 2006, Spirit's front-right wheel stopped turning. Dragging the locked wheel backwards carved a trench into the dirt, exposing brilliant white silica that proved volcanic hot springs once bubbled on Mars. A broken part made history!",
    badge: "Serendipitous Science"
  },
  {
    id: 5,
    category: "MOON",
    title: "The Moon is 3.8 cm Farther Away Each Year",
    fact: "Using data from the discarded Apollo laser retroreflectors, physicists discovered that tidal friction in Earth's oceans transfers rotational energy to the Moon, pushing its orbit outward by about the speed your fingernails grow!",
    badge: "Orbital Dynamics"
  },
  {
    id: 6,
    category: "MARS",
    title: "Mars Soil Freezes at -70°C Because of Salt",
    fact: "Phoenix discovered perchlorate salts in arctic Martian soil. Just like road salt prevents icy streets on Earth, perchlorates lower the freezing point of water so deeply that brines can momentarily remain liquid in the sub-zero cold.",
    badge: "Extraterrestrial Chemistry"
  }
];

export const MISSION_CHALLENGES = [
  {
    id: "challenge-dust-storm",
    title: "The Great Martian Tempest",
    world: "mars",
    context: "You are the Flight Director at NASA Jet Propulsion Laboratory. A monstrous, planet-encircling dust storm has engulfed Opportunity rover at Endeavour Crater. Sunlight has dropped by 99.5%, and battery storage is falling below critical thresholds.",
    problem: "How do you configure the rover to survive the prolonged dark freeze?",
    options: [
      {
        id: "a",
        label: "Keep all science heaters on high power to protect the instruments from freezing.",
        isCorrect: false,
        feedback: "Power drained too quickly! Running active heating with zero incoming solar energy depletes batteries in under 48 hours, causing a permanent low-power shutdown."
      },
      {
        id: "b",
        label: "Shut down all non-essential subsystems, disable science payloads, and enter deep hibernation.",
        isCorrect: true,
        feedback: "Correct! This is exactly what NASA engineers did. Conserving every milliwatt allows the rover to rely on passive radioisotope thermal units and sleep through the dark storm."
      },
      {
        id: "c",
        label: "Spin the rover wheels at maximum speed to blow dust off the solar panels.",
        isCorrect: false,
        feedback: "Wheels cannot clean top-mounted solar arrays, and high-speed spinning drains valuable battery reserves while risking mechanical stalls."
      }
    ]
  },
  {
    id: "challenge-stuck-wheel",
    title: "Trapped in the Sands of 'Troy'",
    world: "mars",
    context: "Spirit's wheels have broken through a thin crust of reddish soil into a hidden sand trap of extremely soft, fluffy sulfate dust. Forward driving only causes the wheels to sink deeper, until the rover's underbelly rests on a hidden buried rock.",
    problem: "What is your engineering strategy to rescue the trapped explorer?",
    options: [
      {
        id: "a",
        label: "Floor the accelerator at full motor torque to power through the sand bank.",
        isCorrect: false,
        feedback: "Spinning wheels at full torque digs deeper trenches, embedding the rover's chassis permanently."
      },
      {
        id: "b",
        label: "Build an exact replica sandbox on Earth at JPL, test centimeter-by-centimeter crab maneuvers, and use the robotic arm to push.",
        isCorrect: true,
        feedback: "Outstanding engineering! NASA created a high-fidelity test sandbox in Pasadena with simulated Martian soil to test every single wheel turn before sending commands to Mars."
      },
      {
        id: "c",
        label: "Wait for a dust devil to lift the rover out of the trench.",
        isCorrect: false,
        feedback: "Martian atmospheric density is only 1% of Earth's—dust devils can sweep away light dust, but lack aerodynamic force to lift a 180 kg rover."
      }
    ]
  },
  {
    id: "challenge-lunar-night",
    title: "Surviving the 14-Earth-Day Lunar Night",
    world: "moon",
    context: "On the Moon, a single night lasts 354 Earth hours (nearly two weeks). Temperatures plunge to -130°C (-202°F). You are deploying the Apollo 17 ALSEP geophysical experiment station.",
    problem: "How can the instrument transmitters stay powered with zero sunlight for two weeks?",
    options: [
      {
        id: "a",
        label: "Install giant wind turbines to capture lunar breezes.",
        isCorrect: false,
        feedback: "The Moon has an extreme vacuum with no atmosphere, so wind power is physically impossible."
      },
      {
        id: "b",
        label: "Equip the station with a Radioisotope Thermoelectric Generator (RTG) fueled by Plutonium-238 decay heat.",
        isCorrect: true,
        feedback: "Precisely! The SNAP-27 RTG generated continuous heat and 70 Watts of electrical power through radioactive decay, keeping ALSEP operating night and day for years."
      },
      {
        id: "c",
        label: "Run a heavy extension cord from the Apollo Command Module in orbit.",
        isCorrect: false,
        feedback: "Orbital mechanics make a tether between an orbiting spacecraft (traveling at 1.6 km/s) and the surface impossible."
      }
    ]
  }
];
