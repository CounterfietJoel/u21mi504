(function() {
  'use strict';

// U21MI503 - Unmanned Aerial Vehicle Technology (Regulation 2021)
// UNIT I: UAS Systems Architecture Lab - Educational Data Contract

const UNIT1_DATA = {
  meta: {
    courseCode: "U21MI503",
    courseName: "Unmanned Aerial Vehicle Technology",
    unitNumber: "I",
    unitTitle: "Introduction to UAV & UAS Systems Architecture",
    labTitle: "UAS Systems Architecture Lab",
    subtitle: "Interactive Foundations & System Boundary Explorer",
    targetAudience: "Second-Year Mechatronics Engineering Students",
    prerequisiteNote: "Students are expected to have read Chapter 1: Foundations of Unmanned Aerial Systems before completing this lab."
  },

  calibrationProbes: [
    {
      id: "probe_1",
      question: "Which statement best captures the formal engineering relationship between a UAV and a UAS?",
      options: [
        { text: "A UAV is the commercial term, while UAS is strictly the military terminology.", correct: false, reason: "UAV and UAS are formal engineering distinctions across both civil and military sectors, not branch-specific jargon." },
        { text: "A UAV is strictly the airborne platform; a UAS is the complete interconnected ecosystem of air vehicle, ground control station, data links, payloads, support equipment, and operating personnel.", correct: true, reason: "Correct! The UAV is only the airborne platform. A complete UAS includes all enabling ground, link, payload, support, and human elements (Textbook Section 1.3)." },
        { text: "A UAV has autonomous flight capability, whereas a UAS relies on manual ground control.", correct: false, reason: "Autonomy levels vary in both; the distinction is strictly about the system boundary." }
      ]
    },
    {
      id: "probe_2",
      question: "Why cannot an off-the-shelf recreational radio-controlled (RC) model airplane be considered a functional UAV prototype?",
      options: [
        { text: "Because recreational aeromodels are always smaller than 250 grams.", correct: false, reason: "RC model aircraft can weigh over 20 kg; mass alone does not define a UAV prototype." },
        { text: "Because recreational models operate open-loop under direct manual stick commands without multi-sensor fusion, telemetry logging, or deterministic fail-safe recovery logic.", correct: true, reason: "Correct! Functional UAV prototypes operate under closed-loop autopilot control with sensor fusion, telemetry, and deterministic fail-safes adhering to formal engineering requirements (Textbook Section 1.4)." },
        { text: "Because model airplanes cannot fly in visual line of sight.", correct: false, reason: "Model airplanes almost exclusively fly in Visual Line of Sight (VLOS)." }
      ]
    },
    {
      id: "probe_3",
      question: "When a multirotor executes a pre-programmed sequence of GPS waypoints at a fixed altitude, which capability is it demonstrating?",
      options: [
        { text: "Full contextual autonomy with dynamic replanning.", correct: false, reason: "Executing fixed coordinates without dynamic obstacle avoidance or environmental reasoning is not full autonomy." },
        { text: "Deterministic programmed automation.", correct: true, reason: "Correct! Following hard-coded coordinates is deterministic automation. True autonomy requires closed-loop real-time perception, state estimation under uncertainty, and dynamic adaptation (Textbook Section 1.6)." },
        { text: "Direct manual remote piloting with rate gyro damping.", correct: false, reason: "Waypoint following uses autopilot guidance, not direct manual pilot stick inputs." }
      ]
    }
  ],

  historyActivity: {
    title: "Historical Evolution & Technological Drivers",
    figureRef: "Figure 1.1: Chronological Milestones in the Evolution of Unmanned Aviation (1917–Present)",
    figurePath: "assets/figures/fig_1_1_timeline_evolution.svg",
    textbookSection: "Section 1.1",
    instructions: "Unmanned aviation progressed through discrete technological epochs driven by control engineering and sensor breakthroughs. For each historical milestone, match its Primary Enabling Breakthrough and its Fatal Operational Bottleneck.",
    platforms: [
      {
        id: "plat_kettering",
        name: "Kettering Aerial Torpedo ('Kettering Bug', 1918)",
        era: "Pioneering Aerial Torpedoes (1917–1918)",
        description: "Expendable biplane constructed of papier-mâché and wood with a 40 hp engine, designed to fly a preset distance before shedding its wings to dive on target.",
        correctBreakthrough: "Pneumatic gyroscopes & mechanical revolution counters for preset stabilization and distance timing",
        correctBottleneck: "Open-loop gyroscopic drift and lack of an active RF command link to correct for crosswinds in flight",
        debrief: "The Kettering Bug proved unmanned flight was aerodynamically viable, but without radio control to update its trajectory, gyro drift caused severe inaccuracy."
      },
      {
        id: "plat_queenbee",
        name: "de Havilland DH.82B Queen Bee (1935)",
        era: "Target Drones & Genesis of Radio Control (1930s–1940s)",
        description: "Modified Tiger Moth biplane fitted with pneumatic servos and an RF command link, used by the British Royal Navy as a returnable target drone.",
        correctBreakthrough: "Vacuum-tube radio-frequency (RF) remote command link enabling real-time steering and safe landing",
        correctBottleneck: "Short line-of-sight command range and heavy, fragile vacuum-tube electronics",
        debrief: "The Queen Bee was the first reliable, reusable, returnable unmanned aircraft. The word 'drone' was coined in reference to its sluggish flight and engine hum."
      },
      {
        id: "plat_firebee",
        name: "Ryan BQM-34 / Model 147 'Lightning Bug' (1960s–1970s)",
        era: "Jet Reconnaissance & Vietnam War (1960s–1970s)",
        description: "Air-launched turbojet drone operating at 800+ km/h and altitudes from 150 m to 20,000 m, flying over 3,400 combat reconnaissance sorties in Southeast Asia.",
        correctBreakthrough: "Doppler radar & autonomous dead-reckoning navigation with wet-film high-resolution cameras and Mid-Air Retrieval System (MARS)",
        correctBottleneck: "Inability to transmit sensor imagery in real time; high operational cost requiring DC-130 launch planes and helicopter recovery",
        debrief: "Lightning Bugs established UAVs as premier intelligence assets, but commanders had to wait for film processing after mid-air helicopter snag recovery."
      },
      {
        id: "plat_scout",
        name: "IAI Scout & Tadiran Mastiff (1982 Bekaa Valley)",
        era: "Tactical Mini-RPVs (1970s–1980s)",
        description: "Small twin-boom pusher platforms with 22 hp engines carrying stabilized TV cameras, deployed as decoys and real-time spotters against Syrian SAM batteries.",
        correctBreakthrough: "Real-time analog microwave video downlink allowing ground commanders to view battlefield imagery live",
        correctBottleneck: "Limited to direct line-of-sight communications with low payload capacity and short operational radius",
        debrief: "The 1982 Bekaa Valley campaign proved that small, low-cost tactical drones broadcasting live video could neutralize integrated air defense networks."
      },
      {
        id: "plat_multirotor",
        name: "Modern Small Multirotors & Open-Source Autopilots (2000s–Present)",
        era: "Commercial sUAS & Consumer Electronics Convergence",
        description: "High-agility vertical takeoff platforms utilizing multi-rotor thrust, silicon micro-sensors, and open-source flight stacks (ArduPilot/PX4).",
        correctBreakthrough: "Convergence of solid-state MEMS inertial sensors, high-energy-density LiPo batteries, brushless DC motors, and open-source control algorithms",
        correctBottleneck: "High induced power requirements in continuous hover limiting battery endurance to typically under 45 minutes",
        debrief: "Consumer smartphone technology democratized autonomous flight, enabling precise hover at the expense of aerodynamic energy efficiency compared to fixed-wing platforms."
      }
    ],
    breakthroughPool: [
      "Pneumatic gyroscopes & mechanical revolution counters for preset stabilization and distance timing",
      "Vacuum-tube radio-frequency (RF) remote command link enabling real-time steering and safe landing",
      "Doppler radar & autonomous dead-reckoning navigation with wet-film high-resolution cameras and Mid-Air Retrieval System (MARS)",
      "Real-time analog microwave video downlink allowing ground commanders to view battlefield imagery live",
      "Convergence of solid-state MEMS inertial sensors, high-energy-density LiPo batteries, brushless DC motors, and open-source control algorithms"
    ],
    bottleneckPool: [
      "Open-loop gyroscopic drift and lack of an active RF command link to correct for crosswinds in flight",
      "Short line-of-sight command range and heavy, fragile vacuum-tube electronics",
      "Inability to transmit sensor imagery in real time; high operational cost requiring DC-130 launch planes and helicopter recovery",
      "Limited to direct line-of-sight communications with low payload capacity and short operational radius",
      "High induced power requirements in continuous hover limiting battery endurance to typically under 45 minutes"
    ]
  },

  taxonomyActivity: {
    title: "Multi-Axis UAV Classification & Trade-Off Workbench",
    figureRef: "Figure 1.2: Multi-Axis Engineering Taxonomy & Figure 1.3: Airspace Envelopes",
    figurePathTaxonomy: "assets/figures/fig_1_2_taxonomy_tree.svg",
    figurePathEnvelopes: "assets/figures/fig_1_3_airspace_envelopes.svg",
    textbookSection: "Section 1.2",
    instructions: "UAV engineering classification spans multiple independent axes. For each real-world mission scenario, configure the system across all 4 axes and review the operational trade-offs.",
    axes: {
      liftMechanisms: [
        { id: "fixed_wing", label: "Fixed-Wing", desc: "High aerodynamic efficiency (L/D ~10-25), extended range & endurance, requires forward airspeed (cannot hover)" },
        { id: "multirotor", label: "Multirotor (Rotary-Wing)", desc: "True VTOL, precise zero-airspeed hover and station-keeping, omnidirectional flight, high induced power (short endurance)" },
        { id: "hybrid_vtol", label: "Hybrid VTOL (Lift+Cruise / Tilt-Rotor)", desc: "VTOL capability paired with wing-borne cruise efficiency; eliminates runways with 3-4x multirotor range" }
      ],
      massClasses: [
        { id: "micro", label: "Micro / Nano (< 250 g)", desc: "Minimal kinetic hazard (< 80 J), open regulatory category" },
        { id: "small_micro", label: "Very Small (250 g – 2 kg)", desc: "Low kinetic hazard, lightweight inspection / local survey" },
        { id: "suas_small", label: "Small (sUAS: 2 kg – 25 kg)", desc: "Core commercial survey and industrial mapping category" },
        { id: "medium", label: "Medium (25 kg – 150 kg)", desc: "Heavy agricultural spraying, regional cargo, tactical defense" },
        { id: "large", label: "Large / Heavy (> 150 kg)", desc: "Full civil airworthiness certification required, high kinetic hazard" }
      ],
      rangeAltitudeClasses: [
        { id: "close_range", label: "Close Range (< 10 km, ≤ 300 m AGL)", desc: "Local asset inspection and visual line of sight" },
        { id: "short_range", label: "Short Range (10 – 50 km, ≤ 3,000 m AGL)", desc: "Corridor infrastructure surveys and regional monitoring" },
        { id: "medium_range", label: "Medium Range (50 – 200 km, ≤ 5,000 m AGL)", desc: "Wide-area watershed and coastal patrol" }
      ],
      airspaceEnvelopes: [
        { id: "vlos", label: "VLOS (Visual Line of Sight, < 500 m)", desc: "Direct, unaided visual contact by Remote Pilot in Command" },
        { id: "evlos", label: "EVLOS (Extended Visual Line of Sight)", desc: "Visual contact maintained by daisy-chained Visual Observers" },
        { id: "bvlos", label: "BVLOS (Beyond Visual Line of Sight)", desc: "Piloted via telemetry, instruments, and fail-safe automation" }
      ]
    },
    scenarios: [
      {
        id: "scen_pipeline",
        title: "Mission 1: 35 km Linear Natural Gas Pipeline Inspection",
        parameters: "Total Corridor: 35 km | Operating Environment: Remote Mountain Valley | Payload: 800 g High-Res RGB Camera | Runway: No paved runway available, small clearings only.",
        validLift: ["fixed_wing", "hybrid_vtol"],
        preferredLift: "hybrid_vtol",
        validMass: ["suas_small"],
        validRange: ["short_range"],
        validAirspace: ["bvlos"],
        tradeoffNotes: {
          multirotor: "Rejected: A standard battery multirotor consumes excessive power in hover/low-speed transit, failing to cover a 35 km linear corridor on a single charge.",
          fixed_wing: "Valid with Catapult/Parachute: Highly efficient (L/D > 15), but requires launch/recovery gear due to lack of paved runway.",
          hybrid_vtol: "Optimal: Combines zero-runway VTOL from small forest clearings with wing-borne aerodynamic cruise efficiency for 35+ km."
        },
        debrief: "A 35 km linear corridor operating beyond visual sight requires a BVLOS envelope, Short Range class (10–50 km), sUAS Small mass class (2–25 kg), and high aerodynamic efficiency (Hybrid VTOL or Catapult-launched Fixed-Wing)."
      },
      {
        id: "scen_bridge",
        title: "Mission 2: Suspension Bridge Under-Deck Structural Crack Inspection",
        parameters: "Target: Bridge concrete piers and steel truss underside | Operational Area: Within 200 m radius | Payload: 600 g Upward-facing Gimbal Optical Sensor | Requirement: Zero-airspeed station-keeping under bridge decks.",
        validLift: ["multirotor"],
        preferredLift: "multirotor",
        validMass: ["small_micro", "suas_small"],
        validRange: ["close_range"],
        validAirspace: ["vlos"],
        tradeoffNotes: {
          multirotor: "Optimal: Zero-airspeed station-keeping and precise multi-axis translation allow close-proximity inspection under the bridge structure.",
          fixed_wing: "Rejected: Fixed-wing aircraft cannot hover and stall if forward speed drops below stall velocity, making close-proximity structure inspection impossible.",
          hybrid_vtol: "Inefficient: Carrying wing structure adds dead weight during sustained hover under a bridge."
        },
        debrief: "Close-proximity structural inspection demands zero-airspeed hover and multi-directional position hold, making the Multirotor in VLOS and Close Range the only defensible engineering choice."
      },
      {
        id: "scen_medical",
        title: "Mission 3: Urgent Blood & Vaccine Delivery Between Remote Rural Clinics",
        parameters: "Transit Distance: 25 km direct line | Cargo Mass: 1.5 kg temperature-controlled payload | Origin/Destination: Hospital rooftop / rural clinic lawn (no runway) | Time-critical: Fast cruise speed required.",
        validLift: ["hybrid_vtol", "fixed_wing"],
        preferredLift: "hybrid_vtol",
        validMass: ["suas_small"],
        validRange: ["short_range"],
        validAirspace: ["bvlos"],
        tradeoffNotes: {
          multirotor: "Marginal: High payload mass (1.5 kg) coupled with 25 km distance severely challenges multirotor battery energy density.",
          fixed_wing: "Valid if Belly/Parachute Landing Permitted: High cruise speed, but requires clear approach path.",
          hybrid_vtol: "Optimal: Takes off vertically from hospital rooftop, cruises on fixed wing at high speed, and lands vertically on the rural clinic lawn."
        },
        debrief: "A 25 km medical transit requiring vertical landing at both ends without runways is best served by a Hybrid VTOL (Lift+Cruise) operating BVLOS in the sUAS class."
      }
    ]
  },

  boundaryActivity: {
    title: "The UAS Functional Boundary & Subsystem Omission Simulator",
    figureRef: "Figure 1.4: The Complete Unmanned Aircraft System (UAS) Functional Boundary",
    figurePath: "assets/figures/fig_1_4_uas_system_boundary.svg",
    textbookSection: "Section 1.3",
    instructions: "An unmanned aircraft is only one subsystem of a complete UAS. Build the full UAS ecosystem across 4 functional domains, then simulate field deployments with intentional omissions to observe failure mechanisms.",
    subsystems: [
      { id: "sub_airframe", name: "Air Vehicle (UAV)", category: "airborne", role: "Airframe structure, propulsion motors, flight control computer, navigation sensors (IMU/GNSS)", flightEssential: true },
      { id: "sub_payload", name: "Mission Payload", category: "airborne", role: "EO/IR sensors, LiDAR, thermal cameras, cargo release mechanisms", flightEssential: false },
      { id: "sub_gcs", name: "Ground Control Station (GCS / MPCS)", category: "terrestrial", role: "Primary flight display, moving map, mission planning console, emergency disarm controls", flightEssential: true },
      { id: "sub_datalink", name: "Communications & Data Links", category: "link", role: "C2 command uplink, telemetry state downlink, payload video stream", flightEssential: true },
      { id: "sub_lre", name: "Launch & Recovery Equipment (LRE)", category: "ground_support", role: "Pneumatic catapults, runway wheels, arrestment nets, recovery parachutes", flightEssential: true },
      { id: "sub_gse", name: "Ground Support Equipment (GSE)", category: "ground_support", role: "Smart balancing field battery chargers, IMU level calibration tables, maintenance toolkits", flightEssential: true },
      { id: "sub_crew", name: "Human Crew & Operating Procedures", category: "human", role: "Remote Pilot in Command (RPIC), Visual Observer (VO), pre-flight checklists, emergency SOPs", flightEssential: true }
    ],
    omissionScenarios: [
      {
        id: "omit_gse",
        omittedId: "sub_gse",
        title: "Field Deployment Without Ground Support Equipment (GSE)",
        consequence: "MISSION ABORT AT PRE-FLIGHT: After the first 25-minute flight, field batteries cannot be balanced-charged without GSE charging stations. Furthermore, without the pre-flight IMU leveling table, gyro zero-bias calibration drifts, grounding the fleet for the remainder of the day.",
        takeaway: "Excluding ground support equipment from the UAS boundary creates field operational failure despite a fully functional air vehicle."
      },
      {
        id: "omit_vo",
        omittedId: "sub_crew",
        title: "EVLOS Operation Without Trained Operating Crew / Visual Observers",
        consequence: "REGULATORY GROUNDING & COLLISION HAZARD: Flying beyond direct pilot sight without daisy-chained Visual Observers leaves the RPIC blind to non-transponder general aviation traffic in the corridor, violating civil aviation safety mandates.",
        takeaway: "Trained operating personnel and Standard Operating Procedures (SOPs) are essential components inside the UAS system boundary."
      },
      {
        id: "omit_gcs",
        omittedId: "sub_gcs",
        title: "Mission Execution Without a Ground Control Station (GCS)",
        consequence: "LOSS OF SITUATIONAL AWARENESS: Without the GCS human-machine interface, the remote pilot cannot monitor battery voltage, GPS satellite count, or navigation mode annunciations, making safe flight supervision impossible.",
        takeaway: "The GCS provides the critical window into aircraft state estimation and mode awareness."
      }
    ]
  },

  prototypeActivity: {
    title: "Model Aircraft vs. Functional UAV Prototypes & Systems Engineering",
    figureRef: "Figure 1.5: The Systems Engineering V-Model for UAV Lifecycle Development",
    figurePath: "assets/figures/fig_1_5_v_model.svg",
    textbookSection: "Section 1.4",
    instructions: "Aerospace systems engineering requires converting vague qualitative goals into verifiable technical specifications tested across the V-Model lifecycle. Complete the feature distinction and requirement formulation tasks.",
    featureComparisons: [
      { feature: "Primary Purpose", model: "Recreational aeromodelling, hobby sport", prototype: "Payload delivery, data acquisition, industrial/scientific mission" },
      { feature: "Control Loop Topology", model: "Direct open-loop manual stick commands", prototype: "Closed-loop autopilot attitude and trajectory tracking" },
      { feature: "Navigation Capability", model: "Direct visual tracking by pilot on the ground", prototype: "Multi-sensor fusion (IMU + GNSS + Barometer) waypoint navigation" },
      { feature: "Telemetry & Black-Box Logging", model: "Minimal or absent", prototype: "High-rate (>50 Hz) sensor and state logging for post-flight verification" },
      { feature: "Fail-Safe Recovery Behavior", model: "Engine cut / unguided glide on signal loss", prototype: "Deterministic state machine (RTL, geofence, parachute)" }
    ],
    requirementsMatching: [
      {
        id: "req_1",
        vagueStatement: "“The UAV must fly for a long time on one battery.”",
        options: [
          { text: "“The UAV shall be equipped with the biggest lithium battery available in the lab.”", correct: false, reason: "Specifying a large battery is a design choice, not a verifiable operational performance requirement." },
          { text: "“The UAV shall maintain steady level cruise at 16.0 ± 1.0 m/s for ≥ 45 minutes at MSL with a 500 g payload, landing with ≥ 15% battery reserve.”", correct: true, reason: "Correct! Quantifies airspeed, duration, atmospheric condition, payload mass, and reserve energy." },
          { text: "“The UAV shall have high energy efficiency and low drag.”", correct: false, reason: "Qualitative statement with no measurable pass/fail metric." }
        ],
        verificationMethod: "Flight Test (Timed endurance flight with calibrated telemetry current/voltage logging)"
      },
      {
        id: "req_2",
        vagueStatement: "“The drone structure should be lightweight and strong.”",
        options: [
          { text: "“The airframe shall be manufactured exclusively out of expensive high-modulus carbon fiber weave.”", correct: false, reason: "Specifying material is an implementation detail, not a structural load requirement." },
          { text: "“The total dry structural mass of the airframe shall not exceed 1.85 kg, and the wing spar shall withstand a static +3.8g limit load without permanent plastic deformation.”", correct: true, reason: "Correct! Specifies exact mass ceiling and verifiable structural load limit." },
          { text: "“The airframe shall survive rough landings in the field without breaking.”", correct: false, reason: "“Rough landings” is subjective and cannot be objectively measured on a test bench." }
        ],
        verificationMethod: "Inspection & Structural Proof Load Test (Sandbag load distribution test on the wing spar)"
      },
      {
        id: "req_3",
        vagueStatement: "“The radio control link must be very reliable.”",
        options: [
          { text: "“The C2 uplink shall maintain a packet error rate (PER) < 1.0% and round-trip latency < 100 ms at a line-of-sight range of 15.0 km under 100 mW EIRP.”", correct: true, reason: "Correct! Defines measurable packet error rate, latency ceiling, distance, and transmission power." },
          { text: "“The radio transmitters shall use high-gain omnidirectional antennas.”", correct: false, reason: "Antenna selection does not define the measurable communication performance criteria." },
          { text: "“The connection between the remote pilot and aircraft should never disconnect.”", correct: false, reason: "“Never disconnect” is physically unverifiable; real engineering requires defined packet loss thresholds." }
        ],
        verificationMethod: "Ground & RF Range Test (Bench RF attenuation simulation and calibrated long-range flight test)"
      }
    ]
  },

  datalinksActivity: {
    title: "Functional Data Links & Ground Control Station Architecture",
    figureRef: "Figure 1.6: Functional Subsystem Layout of a GCS & Figure 1.7: Tri-Band Data Link Architecture",
    figurePathGCS: "assets/figures/fig_1_6_gcs_hmi_layout.svg",
    figurePathLinks: "assets/figures/fig_1_7_datalink_architecture.svg",
    textbookSection: "Section 1.5.2 & 1.5.4",
    instructions: "A robust UAS maintains three distinct wireless data streams and a structured GCS interface. Assign each communication stream to its proper direction, purpose, and criticality, then evaluate mode confusion mitigation.",
    streams: [
      {
        id: "stream_c2",
        name: "Command and Control (C2 Uplink)",
        direction: "Uplink: GCS → Air Vehicle",
        dataTypes: "Manual stick commands, waypoint updates, flight mode changes, emergency disarm commands",
        bandwidthProfile: "Low Bandwidth (< 50 kbps), Ultra-Low Latency (< 50 ms)",
        criticality: "Flight-Critical",
        failureConsequence: "Loss of C2 uplink halts real-time pilot command authority and triggers automated failsafe logic (e.g., Return-to-Launch after timeout)."
      },
      {
        id: "stream_telemetry",
        name: "Aircraft Telemetry (State & Health Stream)",
        direction: "Downlink: Air Vehicle → GCS",
        dataTypes: "GPS position, barometric altitude, attitude (roll/pitch/yaw), battery voltage/current, sensor health, mode annunciations",
        bandwidthProfile: "Low Bandwidth (~100 kbps), Low Latency (< 100 ms)",
        criticality: "Safety-Critical",
        failureConsequence: "Loss of telemetry blinds the remote pilot to aircraft health and state, preventing informed decision-making even if the aircraft continues flying."
      },
      {
        id: "stream_payload",
        name: "Mission Payload Data (HD Video / Sensor Data)",
        direction: "Downlink: Payload → GCS / Video Display",
        dataTypes: "Live HD video stream, thermal infrared imagery, multispectral sensor data packets",
        bandwidthProfile: "High Bandwidth (5 to 50 Mbps), Moderate Latency (100–300 ms)",
        criticality: "Mission-Essential (Non-Flight-Critical)",
        failureConsequence: "Loss of payload video degrades mission data collection, but does NOT endanger the safe flight or controlled recovery of the aircraft."
      }
    ],
    modeConfusionChecks: [
      {
        question: "Why is a large, persistent Visual Mode Annunciator required on the GCS display?",
        correctOption: "To prevent pilot mode confusion (e.g., pilot assuming aircraft is in manual mode while autopilot is executing an autonomous waypoint hold).",
        distractors: [
          "To show the manufacturer's logo and serial number during flight.",
          "To adjust the brightness of the ground station monitor automatically."
        ],
        explanation: "Mode confusion occurs when the pilot's mental model diverges from the autopilot's active state, historically causing severe flight accidents."
      },
      {
        question: "Why are physical, hardware-guarded toggle switches used for emergency actions (e.g., Motor Disarm / Parachute Deploy) instead of software on-screen buttons?",
        correctOption: "To allow immediate, tactile emergency execution without searching through software drop-down menus during high-stress anomalies.",
        distractors: [
          "Because physical switches use less battery power than computer mice.",
          "Because software menus cannot send commands to a flight controller."
        ],
        explanation: "Hardware guards and dedicated switches ensure emergency safety commands can be executed in milliseconds without menu latency."
      }
    ]
  },

  autonomyActivity: {
    title: "Automation vs. Autonomy Cycle & Safety Architectures",
    figureRef: "Figure 1.8: The Closed-Loop Autonomy Cycle for Unmanned Systems",
    figurePath: "assets/figures/fig_1_8_autonomy_cycle.svg",
    textbookSection: "Section 1.6",
    instructions: "Understand the closed-loop Sense-Estimate-Plan-Act cycle and the distinction between deterministic automation and adaptive autonomy.",
    cycleSteps: [
      {
        step: 1,
        name: "1. Sense",
        domain: "Proprioceptive & Exteroceptive Sensors",
        description: "Onboard IMU gyros/accelerometers measure internal dynamics; GNSS, barometer, and rangefinders measure external environment.",
        failureScenario: "Accelerometer experiences severe vibration noise or GNSS loses satellite lock."
      },
      {
        step: 2,
        name: "2. Estimate",
        domain: "State Estimation & Sensor Fusion",
        description: "Autopilot algorithms fuse noisy multi-sensor data to calculate the optimal estimated position, velocity, and attitude.",
        failureScenario: "Sensor conflict between barometer and GPS altitude creates estimation divergence."
      },
      {
        step: 3,
        name: "3. Plan",
        domain: "Trajectory Generation & Decision Logic",
        description: "Autonomy algorithms plan a collision-free path toward mission goals while observing geofence and terrain limits.",
        failureScenario: "Dynamic obstacle blocks the planned flight corridor."
      },
      {
        step: 4,
        name: "4. Act",
        domain: "Inner-Loop Flight Control & Actuation",
        description: "Flight controller commands motor ESC speeds and servo deflections to follow the planned trajectory.",
        failureScenario: "Control surface reaches maximum deflection saturation."
      },
      {
        step: 5,
        name: "Supervisor: Health Monitor",
        domain: "Continuous Safety Supervisor",
        description: "Continuously monitors subsystem integrity; if sensor confidence drops or link is lost, triggers a deterministic safe state (e.g., Return-to-Launch).",
        failureScenario: "Detects lost C2 heartbeat and overrides the active mission with Return-to-Launch."
      }
    ],
    failsafePrinciples: [
      {
        name: "Lost-Link Failsafe (Return-to-Launch, RTL)",
        mechanism: "When the C2 heartbeat link is lost for longer than a predefined threshold, the flight controller autonomously commands the aircraft to climb to obstacle clearance altitude, navigate to home coordinates, and execute a controlled landing."
      },
      {
        name: "3D Geofencing",
        mechanism: "Virtual spatial boundaries programmed into the autopilot memory. If the aircraft approaches the boundary, the flight controller overrides active commands to keep the vehicle contained inside approved airspace."
      },
      {
        name: "Dissimilar Redundancy",
        mechanism: "Using different physical sensor principles (e.g., combining barometric pressure with GNSS altitude and optical flow) to prevent common-cause failure from a single environmental trigger."
      }
    ]
  },

  capstoneMission: {
    title: "Capstone UAS Conceptual Architecture & System Sign-Off",
    scenarioTitle: "Project Hydro-Shield: Remote Catchment Environmental Survey",
    scenarioBrief: {
      missionGoal: "Conduct a systematic environmental and water-ingress survey along a 35 km rugged mountain river catchment supplying a hydroelectric reservoir.",
      corridorLength: "35 km linear corridor in mountainous terrain.",
      airspaceContext: "Beyond Visual Line of Sight (BVLOS), maximum altitude 1,500 m MSL.",
      terrainConstraints: "Dense mountain forest; NO paved runways available; operations staged from a remote forestry clearing.",
      payloadRequirements: "Simultaneous high-resolution optical mapping (RGB) + Long-Wave Infrared (LWIR) thermal sensor.",
      logisticsContext: "Field team deployed for 3 days at a base camp powered by a portable generator."
    },
    decisionStages: [
      {
        stageId: "stage_platform",
        stageTitle: "1. Air Vehicle Configuration Selection",
        prompt: "Select the most defensible broad UAV airframe configuration for this 35 km mountain corridor mission:",
        options: [
          {
            id: "opt_multirotor",
            label: "Pure Multirotor (Hexacopter)",
            valid: false,
            feedback: "Technical Rejection: A pure multirotor incurs high induced power in continuous hover/translation, limiting endurance to < 35 minutes. It cannot cover a 35 km linear mountain corridor on a single flight battery."
          },
          {
            id: "opt_fixed_catapult",
            label: "Fixed-Wing with Pneumatic Catapult Launcher & Parachute Recovery",
            valid: true,
            isAlternateValid: true,
            feedback: "Technically Defensible! Fixed-wing aerodynamics provide high L/D and long range, while the catapult and parachute solve the lack of a paved runway in the mountain clearing."
          },
          {
            id: "opt_hybrid_vtol",
            label: "Hybrid VTOL (Lift + Cruise / QuadPlane)",
            valid: true,
            isPreferred: true,
            feedback: "Optimal Engineering Choice! Provides runway-free vertical takeoff from the small forest clearing, transitions to efficient wing-borne cruise for the 35 km corridor, and lands vertically without parachute damage."
          }
        ]
      },
      {
        stageId: "stage_taxonomy",
        stageTitle: "2. Systematic Taxonomy Classification",
        prompt: "Specify the correct classification profile across all 4 axes for the selected Hydro-Shield platform:",
        fields: [
          { name: "Mass Category", options: ["Micro (<250g)", "Small sUAS (2–25 kg)", "Large (>150 kg)"], correct: "Small sUAS (2–25 kg)" },
          { name: "Operational Range", options: ["Close Range (<10 km)", "Short Range (10–50 km)", "HALE Global Range"], correct: "Short Range (10–50 km)" },
          { name: "Airspace Envelope", options: ["VLOS (<500 m)", "EVLOS with Visual Observers", "BVLOS (Beyond Visual Line of Sight)"], correct: "BVLOS (Beyond Visual Line of Sight)" }
        ]
      },
      {
        stageId: "stage_subsystems",
        stageTitle: "3. Complete UAS Ecosystem Identification",
        prompt: "Select ALL essential subsystems required to make this a complete, functional UAS ecosystem (select all that apply):",
        checklist: [
          { id: "chk_airframe", label: "Air Vehicle with flight computer, navigation sensors (IMU/GNSS), and propulsion", required: true },
          { id: "chk_gcs", label: "Ground Control Station (GCS) with moving map, flight instruments, and annunciators", required: true },
          { id: "chk_comms", label: "Data Link Subsystem (C2 uplink, telemetry downlink, payload video stream)", required: true },
          { id: "chk_payload", label: "Dual Mission Payload (High-Res RGB Camera + LWIR Thermal Sensor)", required: true },
          { id: "chk_gse", label: "Ground Support Equipment (Smart balancing field battery chargers, IMU level jig)", required: true },
          { id: "chk_crew", label: "Operating Personnel (Remote Pilot in Command, Visual Observer / Tech) & SOPs", required: true }
        ]
      },
      {
        stageId: "stage_datalink",
        stageTitle: "4. Communications & Data Link Routing",
        prompt: "Designate the functional communication channel properties for this 35 km BVLOS mission:",
        pairs: [
          { link: "Command & Control (C2 Uplink)", assignment: "Flight-Critical | GCS → UAV | Ultra-Low Latency" },
          { link: "Aircraft State Telemetry", assignment: "Safety-Critical | UAV → GCS | Low Latency State Stream" },
          { link: "RGB / Thermal Payload Stream", assignment: "Mission-Essential | Payload → GCS | High Bandwidth Video" }
        ]
      },
      {
        stageId: "stage_safety",
        stageTitle: "5. Autonomy & Failsafe Configuration",
        prompt: "Specify the primary safety failsafe parameter to ensure safe operation in rugged mountain terrain:",
        options: [
          { text: "Immediate motor cut on signal loss to drop the aircraft instantly.", correct: false, reason: "Dropping the aircraft into mountain forests causes vehicle destruction and environmental hazard." },
          { text: "Deterministic Lost-Link Return-to-Launch (RTL) climbing to pre-set mountain clearance altitude before navigating to home coordinates.", correct: true, reason: "Correct! RTL with obstacle clearance altitude ensures safe return if communication is masked by mountain ridges." },
          { text: "Continue flying in open-loop straight line until battery is exhausted.", correct: false, reason: "Fly-away condition violates civil aviation safety rules." }
        ]
      },
      {
        stageId: "stage_defense",
        stageTitle: "6. System Architecture Defense",
        prompt: "Justify why this engineered architecture represents a complete functional UAS concept/prototype rather than a recreational aeromodel:",
        justificationOptions: [
          { text: "Because it incorporates closed-loop multi-sensor navigation, telemetry health logging, verifiable failsafe logic, and complete ground support infrastructure.", correct: true, reason: "Exceptional! This captures the foundational systems-engineering criteria separating functional UAS prototypes from hobby aeromodels." },
          { text: "Because it has a painted fuselage and costs more than a toy.", correct: false, reason: "Aesthetic appearance and cost do not define systems-engineering rigor." },
          { text: "Because recreational model aircraft are not allowed to have wings.", correct: false, reason: "Model airplanes commonly have wings; the distinction lies in systems composition and control loop." }
        ]
      }
    ]
  }
};

// U21MI503 – Unmanned Aerial Vehicle Technology
// UNIT I: UAS Systems Architecture Lab – Reactive State & Persistence Manager

const STORAGE_KEY = 'u21mi503_unit1_state_v1';

class LabStateManager {
  constructor() {
    this.listeners = [];
    this.state = this.loadInitialState();
  }

  loadInitialState() {
    const defaultState = {
      activeTab: 'overview',
      studentInfo: {
        name: 'Mechatronics Engineer',
        rollNo: '24MI---',
        date: new Date().toISOString().split('T')[0]
      },
      settings: {
        presentationMode: false,
        themeLight: false
      },
      calibration: {
        completed: false,
        answers: {},
        score: 0
      },
      history: {
        completed: false,
        attempts: 0,
        matches: {}, // plat_id -> { breakthrough, bottleneck }
        score: 0
      },
      taxonomy: {
        completed: false,
        scenarioChoices: {}, // scen_id -> { lift, mass, range, airspace }
        validatedScenarios: {}, // scen_id -> boolean
        score: 0
      },
      boundary: {
        completed: false,
        testedOmissions: {}, // omit_id -> boolean
        placedSubsystems: [],
        score: 0
      },
      prototype: {
        completed: false,
        featureAnswers: {},
        requirementAnswers: {}, // req_id -> option index
        score: 0
      },
      datalinks: {
        completed: false,
        streamAssignments: {}, // stream_id -> { direction, criticality }
        quizAnswers: {},
        score: 0
      },
      autonomy: {
        completed: false,
        activeCycleStep: 1,
        testedFailsafes: {},
        score: 0
      },
      capstone: {
        completed: false,
        decisions: {}, // stage_id -> value
        cleared: false,
        score: 0
      },
      domainScores: {
        history: 0,
        taxonomy: 0,
        boundary: 0,
        prototypes: 0,
        comms_autonomy: 0
      },
      overallReadiness: 0
    };

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not load saved state from localStorage:', e);
    }
    return defaultState;
  }

  saveState() {
    this.calculateScores();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save state to localStorage:', e);
    }
    this.notify();
  }

  calculateScores() {
    // 1. History Domain Score (0-100)
    let histScore = this.state.history.completed ? 100 : (this.state.history.score || 0);
    this.state.domainScores.history = histScore;

    // 2. Taxonomy Domain Score (0-100)
    const validScens = Object.values(this.state.taxonomy.validatedScenarios || {}).filter(Boolean).length;
    let taxScore = Math.round((validScens / 3) * 100);
    if (this.state.taxonomy.completed) taxScore = Math.max(taxScore, 100);
    this.state.domainScores.taxonomy = taxScore;

    // 3. Boundary Domain Score (0-100)
    const testedOmitCount = Object.keys(this.state.boundary.testedOmissions || {}).length;
    let boundScore = Math.min(100, Math.round((testedOmitCount / 3) * 100));
    if (this.state.boundary.completed) boundScore = 100;
    this.state.domainScores.boundary = boundScore;

    // 4. Prototypes & Requirements Domain Score (0-100)
    let protoScore = this.state.prototype.completed ? 100 : (this.state.prototype.score || 0);
    this.state.domainScores.prototypes = protoScore;

    // 5. Communications & Autonomy Domain Score (0-100)
    let commsScore = (this.state.datalinks.completed ? 50 : (this.state.datalinks.score / 2 || 0)) +
                     (this.state.autonomy.completed ? 50 : (this.state.autonomy.score / 2 || 0));
    this.state.domainScores.comms_autonomy = Math.min(100, Math.round(commsScore));

    // Overall Systems Architecture Readiness Index
    const weights = {
      history: 0.15,
      taxonomy: 0.25,
      boundary: 0.20,
      prototypes: 0.20,
      comms_autonomy: 0.20
    };

    let total = (this.state.domainScores.history * weights.history) +
                (this.state.domainScores.taxonomy * weights.taxonomy) +
                (this.state.domainScores.boundary * weights.boundary) +
                (this.state.domainScores.prototypes * weights.prototypes) +
                (this.state.domainScores.comms_autonomy * weights.comms_autonomy);

    if (this.state.capstone.cleared) {
      total = Math.max(total, 95);
    }

    this.state.overallReadiness = Math.min(100, Math.round(total));
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  setActiveTab(tabId) {
    this.state.activeTab = tabId;
    this.saveState();
  }

  setStudentInfo(info) {
    this.state.studentInfo = { ...this.state.studentInfo, ...info };
    this.saveState();
  }

  togglePresentationMode() {
    this.state.settings.presentationMode = !this.state.settings.presentationMode;
    this.saveState();
  }

  toggleTheme() {
    this.state.settings.themeLight = !this.state.settings.themeLight;
    this.saveState();
  }

  resetProgress() {
    if (confirm('Are you sure you want to reset all lab progress? This will clear your saved activity answers and readiness score.')) {
      localStorage.removeItem(STORAGE_KEY);
      this.state = this.loadInitialState();
      this.notify();
      window.location.reload();
    }
  }
}

const labState = new LabStateManager();


function renderHistoryActivity(container) {
  const data = UNIT1_DATA.historyActivity;
  const state = (labState.state && labState.state.history) ? labState.state.history : { matches: {}, attempts: 0, score: 0 };
  if (!state.matches) state.matches = {};
  const matches = state.matches;

  container.innerHTML = `
    <div class="activity-card">
      <div class="activity-header">
        <span class="activity-tag">Activity U1-01 · Systems Evolution</span>
        <h2 class="activity-title">${data.title}</h2>
        <p class="activity-instructions">${data.instructions}</p>
      </div>

      <div class="discussion-prompt">
        <div class="discussion-prompt-title">Faculty Discussion Prompt</div>
        <p><strong>Ask Class:</strong> Why did the 1918 Kettering Bug fail to achieve tactical accuracy despite having functional gyroscopic stabilization?</p>
      </div>

      <div class="figure-panel">
        <img src="${data.figurePath}" alt="${data.figureRef}" loading="lazy">
        <div class="figure-caption">${data.figureRef} (Source: Textbook Section 1.1)</div>
      </div>

      <div class="workbench-grid" id="history-platforms-grid">
        ${data.platforms.map((plat) => {
          const savedMatch = matches[plat.id] || {};
          return `
            <div class="workbench-card" id="card-${plat.id}">
              <span class="brand-badge">${plat.era}</span>
              <h3>${plat.name}</h3>
              <p>${plat.description}</p>

              <div class="selector-group">
                <label class="selector-label" for="bt-${plat.id}">Enabling Breakthrough:</label>
                <select class="select-custom history-select" id="bt-${plat.id}" data-plat="${plat.id}" data-type="breakthrough">
                  <option value="">-- Select Technological Breakthrough --</option>
                  ${data.breakthroughPool.map(bt => `
                    <option value="${bt}" ${savedMatch.breakthrough === bt ? 'selected' : ''}>${bt}</option>
                  `).join('')}
                </select>
              </div>

              <div class="selector-group">
                <label class="selector-label" for="bn-${plat.id}">Fatal Bottleneck / Limitation:</label>
                <select class="select-custom history-select" id="bn-${plat.id}" data-plat="${plat.id}" data-type="bottleneck">
                  <option value="">-- Select Era Bottleneck --</option>
                  ${data.bottleneckPool.map(bn => `
                    <option value="${bn}" ${savedMatch.bottleneck === bn ? 'selected' : ''}>${bn}</option>
                  `).join('')}
                </select>
              </div>

              <div class="feedback-box feedback-info" id="feedback-${plat.id}" style="display: ${state.completed ? 'block' : 'none'};">
                ${plat.debrief}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div id="history-overall-feedback"></div>

      <div class="action-bar">
        <button class="btn-secondary" id="btn-history-hint">Get Conceptual Hint</button>
        <button class="btn-primary" id="btn-history-validate">Validate Historical Lineage →</button>
      </div>
    </div>
  `;

  container.querySelectorAll('.history-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const platId = e.target.dataset.plat;
      const type = e.target.dataset.type;
      if (!labState.state.history) labState.state.history = { matches: {}, attempts: 0, score: 0 };
      if (!labState.state.history.matches) labState.state.history.matches = {};
      if (!labState.state.history.matches[platId]) labState.state.history.matches[platId] = {};
      labState.state.history.matches[platId][type] = e.target.value;
      labState.saveState();
    });
  });

  const btnValidate = container.querySelector('#btn-history-validate');
  const overallFb = container.querySelector('#history-overall-feedback');

  btnValidate?.addEventListener('click', () => {
    let allCorrect = true;
    let correctCount = 0;
    const m = (labState.state.history && labState.state.history.matches) ? labState.state.history.matches : {};

    data.platforms.forEach(plat => {
      const match = m[plat.id] || {};
      const card = container.querySelector(`#card-${plat.id}`);
      const isBtCorrect = match.breakthrough === plat.correctBreakthrough;
      const isBnCorrect = match.bottleneck === plat.correctBottleneck;

      if (isBtCorrect && isBnCorrect) {
        if (card) card.style.borderColor = 'var(--emerald-pass)';
        const fb = container.querySelector(`#feedback-${plat.id}`);
        if (fb) fb.style.display = 'block';
        correctCount++;
      } else {
        if (card) card.style.borderColor = 'var(--rose-fail)';
        allCorrect = false;
      }
    });

    if (!labState.state.history) labState.state.history = { matches: {}, attempts: 0, score: 0 };
    labState.state.history.attempts = (labState.state.history.attempts || 0) + 1;
    labState.state.history.score = Math.round((correctCount / data.platforms.length) * 100);

    if (allCorrect) {
      labState.state.history.completed = true;
      if (overallFb) {
        overallFb.innerHTML = `
          <div class="feedback-box feedback-pass">
            <strong>Historical Lineage Mastered! (100% Score)</strong><br>
            You have successfully mapped the evolutionary drivers from preset mechanical torpedoes (Kettering Bug) to radio-controlled target drones (Queen Bee), Cold War jet reconnaissance (Lightning Bug), tactical microwave mini-RPVs (Scout), and modern MEMS-driven multirotors.
          </div>
        `;
      }
      labState.saveState();
    } else {
      if (overallFb) {
        overallFb.innerHTML = `
          <div class="feedback-box feedback-fail">
            <strong>Validation Incomplete (${correctCount}/${data.platforms.length} Platforms Correct):</strong><br>
            Review the highlighted platforms. Remember: The Kettering Bug lacked radio control (open-loop gyro drift); the Queen Bee introduced RF command links; the Lightning Bug had dead-reckoning but wet film requiring mid-air snag; the Scout introduced live microwave video; and multirotors rely on MEMS/LiPo convergence.
          </div>
        `;
      }
    }
  });

  container.querySelector('#btn-history-hint')?.addEventListener('click', () => {
    alert('Hint: Check Textbook Section 1.1. Control evolved from open-loop gyroscopes (1918) to vacuum-tube RF remote command (1935), dead-reckoning radar (1965), real-time microwave video (1982), and smartphone solid-state MEMS sensors (2000s).');
  });
}


function renderTaxonomyActivity(container) {
  const data = UNIT1_DATA.taxonomyActivity;
  const state = (labState.state && labState.state.taxonomy) ? labState.state.taxonomy : { scenarioChoices: {}, validatedScenarios: {} };
  if (!state.scenarioChoices) state.scenarioChoices = {};
  if (!state.validatedScenarios) state.validatedScenarios = {};
  const scenarioChoices = state.scenarioChoices;
  const validatedScenarios = state.validatedScenarios;

  let activeScenIndex = 0;

  function renderScenario() {
    const scen = data.scenarios[activeScenIndex];
    const saved = scenarioChoices[scen.id] || { lift: '', mass: '', range: '', airspace: '' };

    container.innerHTML = `
      <div class="activity-card">
        <div class="activity-header">
          <span class="activity-tag">Activity U1-02 · Multi-Axis Taxonomy</span>
          <h2 class="activity-title">${data.title}</h2>
          <p class="activity-instructions">${data.instructions}</p>
        </div>

        <div class="discussion-prompt">
          <div class="discussion-prompt-title">Faculty Discussion Prompt</div>
          <p><strong>Ask Class:</strong> Why is carrying a 1.5 kg payload on a multirotor over a 35 km linear corridor physically inefficient compared to a fixed-wing or hybrid VTOL platform?</p>
        </div>

        <div class="figure-panel">
          <img src="${data.figurePathTaxonomy}" alt="${data.figureRef}" loading="lazy">
          <div class="figure-caption">Figure 1.2 & 1.3: Multi-Axis Taxonomy & Airspace Envelopes (Textbook Section 1.2)</div>
        </div>

        <!-- Scenario Selector Tabs -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem; flex-wrap: wrap;">
          ${data.scenarios.map((s, idx) => `
            <button class="btn-ctrl ${idx === activeScenIndex ? 'active' : ''}" id="tab-scen-${idx}" style="${idx === activeScenIndex ? 'background: var(--bg-card); border-color: var(--cyan-accent); color: var(--cyan-accent); font-weight: 700;' : ''}">
              ${s.title.split(':')[0]} ${validatedScenarios[s.id] ? '✓' : ''}
            </button>
          `).join('')}
        </div>

        <!-- Active Scenario Card -->
        <div class="workbench-card" style="margin-bottom: 1.5rem; border-left: 5px solid var(--blue-brand);">
          <h3 style="color: var(--cyan-accent);">${scen.title}</h3>
          <p><strong>Mission Profile:</strong> ${scen.parameters}</p>
        </div>

        <!-- 4-Axis Multi-Selector Grid -->
        <div class="workbench-grid">
          <div class="workbench-card">
            <span class="selector-label">Axis 1: Aerodynamic Lift Mechanism</span>
            <div class="btn-choice-group">
              ${data.axes.liftMechanisms.map(opt => `
                <button class="btn-choice ${saved.lift === opt.id ? 'selected' : ''}" data-axis="lift" data-val="${opt.id}">
                  <strong>${opt.label}</strong><br>
                  <small style="color: var(--text-muted); font-size: 0.78rem;">${opt.desc}</small>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="workbench-card">
            <span class="selector-label">Axis 2: Maximum Take-Off Mass (MTOM)</span>
            <div class="btn-choice-group">
              ${data.axes.massClasses.map(opt => `
                <button class="btn-choice ${saved.mass === opt.id ? 'selected' : ''}" data-axis="mass" data-val="${opt.id}">
                  <strong>${opt.label}</strong><br>
                  <small style="color: var(--text-muted); font-size: 0.78rem;">${opt.desc}</small>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="workbench-card">
            <span class="selector-label">Axis 3: Range & Altitude Class</span>
            <div class="btn-choice-group">
              ${data.axes.rangeAltitudeClasses.map(opt => `
                <button class="btn-choice ${saved.range === opt.id ? 'selected' : ''}" data-axis="range" data-val="${opt.id}">
                  <strong>${opt.label}</strong><br>
                  <small style="color: var(--text-muted); font-size: 0.78rem;">${opt.desc}</small>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="workbench-card">
            <span class="selector-label">Axis 4: Airspace Operational Envelope</span>
            <div class="btn-choice-group">
              ${data.axes.airspaceEnvelopes.map(opt => `
                <button class="btn-choice ${saved.airspace === opt.id ? 'selected' : ''}" data-axis="airspace" data-val="${opt.id}">
                  <strong>${opt.label}</strong><br>
                  <small style="color: var(--text-muted); font-size: 0.78rem;">${opt.desc}</small>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div id="scenario-feedback-area"></div>

        <div class="action-bar">
          <button class="btn-secondary" id="btn-tax-prev" ${activeScenIndex === 0 ? 'disabled' : ''}>← Previous Mission</button>
          <button class="btn-primary" id="btn-tax-eval">Evaluate Mission Trade-offs →</button>
          <button class="btn-secondary" id="btn-tax-next" ${activeScenIndex === data.scenarios.length - 1 ? 'disabled' : ''}>Next Mission →</button>
        </div>
      </div>
    `;

    container.querySelectorAll('.btn-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const axis = btn.dataset.axis;
        const val = btn.dataset.val;
        if (!labState.state.taxonomy) labState.state.taxonomy = { scenarioChoices: {}, validatedScenarios: {} };
        if (!labState.state.taxonomy.scenarioChoices) labState.state.taxonomy.scenarioChoices = {};
        if (!labState.state.taxonomy.scenarioChoices[scen.id]) {
          labState.state.taxonomy.scenarioChoices[scen.id] = { lift: '', mass: '', range: '', airspace: '' };
        }
        labState.state.taxonomy.scenarioChoices[scen.id][axis] = val;
        labState.saveState();
        renderScenario();
      });
    });

    data.scenarios.forEach((s, idx) => {
      container.querySelector(`#tab-scen-${idx}`)?.addEventListener('click', () => {
        activeScenIndex = idx;
        renderScenario();
      });
    });

    container.querySelector('#btn-tax-prev')?.addEventListener('click', () => {
      if (activeScenIndex > 0) { activeScenIndex--; renderScenario(); }
    });

    container.querySelector('#btn-tax-next')?.addEventListener('click', () => {
      if (activeScenIndex < data.scenarios.length - 1) { activeScenIndex++; renderScenario(); }
    });

    const evalBtn = container.querySelector('#btn-tax-eval');
    const fbArea = container.querySelector('#scenario-feedback-area');

    evalBtn?.addEventListener('click', () => {
      const curMap = (labState.state.taxonomy && labState.state.taxonomy.scenarioChoices) ? labState.state.taxonomy.scenarioChoices : {};
      const current = curMap[scen.id] || {};
      const isLiftValid = scen.validLift.includes(current.lift);
      const isMassValid = scen.validMass.includes(current.mass);
      const isRangeValid = scen.validRange.includes(current.range);
      const isAirspaceValid = scen.validAirspace.includes(current.airspace);

      if (!current.lift || !current.mass || !current.range || !current.airspace) {
        if (fbArea) {
          fbArea.innerHTML = `
            <div class="feedback-box feedback-fail">
              <strong>Incomplete Configuration:</strong> Please select a value across all 4 engineering axes before evaluating trade-offs.
            </div>
          `;
        }
        return;
      }

      if (!labState.state.taxonomy) labState.state.taxonomy = { scenarioChoices: {}, validatedScenarios: {} };
      if (!labState.state.taxonomy.validatedScenarios) labState.state.taxonomy.validatedScenarios = {};

      if (isLiftValid && isMassValid && isRangeValid && isAirspaceValid) {
        labState.state.taxonomy.validatedScenarios[scen.id] = true;
        const note = scen.tradeoffNotes[current.lift] || '';
        if (fbArea) {
          fbArea.innerHTML = `
            <div class="feedback-box feedback-pass">
              <strong>Technically Defensible & Compliant Configuration!</strong><br>
              ${note}<br><br>
              <em>${scen.debrief}</em>
            </div>
          `;
        }
      } else {
        labState.state.taxonomy.validatedScenarios[scen.id] = false;
        let reasons = [];
        if (!isLiftValid) reasons.push(`• <strong>Lift Mechanism Conflict:</strong> ${scen.tradeoffNotes[current.lift] || 'Inappropriate lift mechanism for mission parameters.'}`);
        if (!isMassValid) reasons.push(`• <strong>Mass Class Conflict:</strong> Expected class based on payload and airframe scale is ${scen.validMass.join(' or ')}.`);
        if (!isRangeValid) reasons.push(`• <strong>Range/Altitude Mismatch:</strong> Operating distance requires ${scen.validRange.join(' or ')}.`);
        if (!isAirspaceValid) reasons.push(`• <strong>Airspace Regulatory Conflict:</strong> Distance dictates ${scen.validAirspace.join(' or ')} operational envelope.`);

        if (fbArea) {
          fbArea.innerHTML = `
            <div class="feedback-box feedback-fail">
              <strong>Engineering Discrepancies Detected:</strong><br>
              ${reasons.join('<br>')}
            </div>
          `;
        }
      }

      const allDone = data.scenarios.every(s => labState.state.taxonomy?.validatedScenarios?.[s.id]);
      if (allDone) {
        labState.state.taxonomy.completed = true;
      }
      labState.saveState();
    });
  }

  renderScenario();
}


function renderBoundaryActivity(container) {
  const data = UNIT1_DATA.boundaryActivity;
  const state = (labState.state && labState.state.boundary) ? labState.state.boundary : { testedOmissions: {} };
  if (!state.testedOmissions) state.testedOmissions = {};
  const testedOmissions = state.testedOmissions;

  container.innerHTML = `
    <div class="activity-card">
      <div class="activity-header">
        <span class="activity-tag">Activity U1-03 · System Composition</span>
        <h2 class="activity-title">${data.title}</h2>
        <p class="activity-instructions">${data.instructions}</p>
      </div>

      <div class="discussion-prompt">
        <div class="discussion-prompt-title">Faculty Discussion Prompt</div>
        <p><strong>Ask Class:</strong> An engineering team brings a fully operational UAV and GCS to a remote field site, but forgets the battery balancing charger and IMU leveling table. Why does the entire UAS mission fail?</p>
      </div>

      <div class="figure-panel">
        <img src="${data.figurePath}" alt="${data.figureRef}" loading="lazy">
        <div class="figure-caption">${data.figureRef} (Textbook Section 1.3)</div>
      </div>

      <h3 style="color: var(--text-bright); margin-bottom: 0.75rem;">1. UAS Subsystem Functional Inventory</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">Review the 7 primary functional elements comprising the complete UAS ecosystem:</p>

      <div class="workbench-grid">
        ${data.subsystems.map(sub => `
          <div class="workbench-card" style="border-top: 4px solid ${sub.flightEssential ? 'var(--cyan-accent)' : 'var(--blue-brand)'};">
            <span class="brand-badge" style="font-size: 0.72rem;">${sub.category.toUpperCase()}</span>
            <h4>${sub.name}</h4>
            <p style="font-size: 0.82rem; margin-top: 0.35rem;">${sub.role}</p>
            <div style="margin-top: 0.5rem;">
              <span style="font-size: 0.75rem; font-family: var(--font-mono); color: ${sub.flightEssential ? 'var(--cyan-accent)' : 'var(--amber-alert)'};">
                ${sub.flightEssential ? '● FLIGHT-ESSENTIAL' : '○ MISSION-ESSENTIAL'}
              </span>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="color: var(--text-bright); margin: 1.75rem 0 0.75rem;">2. Interactive Subsystem Omission Simulator</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        Click each test scenario below to simulate the operational consequences of omitting non-airframe subsystems during field deployment:
      </p>

      <div class="btn-choice-group" style="margin-bottom: 1.25rem;">
        ${data.omissionScenarios.map(scen => {
          const isTested = testedOmissions[scen.id];
          return `
            <div class="workbench-card" id="card-${scen.id}" style="margin-bottom: 0.75rem; border-left: 5px solid ${isTested ? 'var(--emerald-pass)' : 'var(--border-subtle)'};">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                <h4 style="color: var(--text-bright);">${scen.title}</h4>
                <button class="btn-ctrl btn-test-omission" data-id="${scen.id}">
                  ${isTested ? 'Re-run Simulation' : 'Run Omission Test ▶'}
                </button>
              </div>
              <div class="omission-result" id="res-${scen.id}" style="display: ${isTested ? 'block' : 'none'}; margin-top: 0.75rem;">
                <div class="feedback-box feedback-fail" style="margin-top: 0.5rem;">
                  <strong>CONSEQUENCE:</strong> ${scen.consequence}
                </div>
                <div class="feedback-box feedback-info" style="margin-top: 0.5rem;">
                  <strong>ENGINEERING PRINCIPLE:</strong> ${scen.takeaway}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div id="boundary-overall-feedback"></div>

      <div class="action-bar">
        <button class="btn-primary" id="btn-boundary-complete">Confirm Subsystem Boundary Mastery →</button>
      </div>
    </div>
  `;

  container.querySelectorAll('.btn-test-omission').forEach(btn => {
    btn.addEventListener('click', () => {
      const scenId = btn.dataset.id;
      if (!labState.state.boundary) labState.state.boundary = { testedOmissions: {} };
      if (!labState.state.boundary.testedOmissions) labState.state.boundary.testedOmissions = {};
      labState.state.boundary.testedOmissions[scenId] = true;
      const resDiv = container.querySelector(`#res-${scenId}`);
      if (resDiv) resDiv.style.display = 'block';
      const card = container.querySelector(`#card-${scenId}`);
      if (card) card.style.borderLeftColor = 'var(--emerald-pass)';
      btn.textContent = 'Re-run Simulation';
      labState.saveState();
    });
  });

  container.querySelector('#btn-boundary-complete')?.addEventListener('click', () => {
    const tMap = (labState.state.boundary && labState.state.boundary.testedOmissions) ? labState.state.boundary.testedOmissions : {};
    const testedCount = Object.keys(tMap).length;
    const overallFb = container.querySelector('#boundary-overall-feedback');
    if (testedCount >= data.omissionScenarios.length) {
      if (!labState.state.boundary) labState.state.boundary = { testedOmissions: {} };
      labState.state.boundary.completed = true;
      if (overallFb) {
        overallFb.innerHTML = `
          <div class="feedback-box feedback-pass">
            <strong>UAS Functional Boundary Mastered! (100% Score)</strong><br>
            You have demonstrated that the airframe is only one node in the UAS ecosystem. Operational airworthiness strictly depends on ground support equipment (GSE), communications integrity, and trained personnel following standard operating procedures.
          </div>
        `;
      }
      labState.saveState();
    } else {
      if (overallFb) {
        overallFb.innerHTML = `
          <div class="feedback-box feedback-fail">
            <strong>Please test all omission scenarios:</strong> Run the simulation for all 3 omission test cases above before finalizing boundary mastery.
          </div>
        `;
      }
    }
  });
}


function renderPrototypeActivity(container) {
  const data = UNIT1_DATA.prototypeActivity;
  const state = (labState.state && labState.state.prototype) ? labState.state.prototype : {};

  container.innerHTML = `
    <div class="activity-card">
      <div class="activity-header">
        <span class="activity-tag">Activity U1-04 · Models & Systems Engineering</span>
        <h2 class="activity-title">${data.title}</h2>
        <p class="activity-instructions">${data.instructions}</p>
      </div>

      <div class="discussion-prompt">
        <div class="discussion-prompt-title">Faculty Discussion Prompt</div>
        <p><strong>Ask Class:</strong> Why is "The drone should be lightweight and strong" impossible to verify on an engineering test bench, whereas "The empty structural mass shall not exceed 1.85 kg and spar withstand +3.8g" is verifiable?</p>
      </div>

      <div class="figure-panel">
        <img src="${data.figurePath}" alt="${data.figureRef}" loading="lazy">
        <div class="figure-caption">${data.figureRef} (Textbook Section 1.4)</div>
      </div>

      <h3 style="color: var(--text-bright); margin-bottom: 0.75rem;">1. Model Aircraft vs. Functional Prototype Distinction</h3>
      <div style="overflow-x: auto; margin-bottom: 1.75rem;">
        <table class="slip-table" style="font-size: 0.85rem; width: 100%;">
          <thead>
            <tr>
              <th style="width: 25%;">Engineering Feature</th>
              <th style="width: 37%;">Recreational RC Model Aircraft</th>
              <th style="width: 38%;">Airworthy UAV Prototype</th>
            </tr>
          </thead>
          <tbody>
            ${data.featureComparisons.map(row => `
              <tr>
                <td><strong>${row.feature}</strong></td>
                <td style="color: var(--text-muted);">${row.model}</td>
                <td style="color: var(--cyan-accent); font-weight: 600;">${row.prototype}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h3 style="color: var(--text-bright); margin-bottom: 0.75rem;">2. Systems Engineering V-Model: Requirements Formulation Board</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        Transform each qualitative stakeholder statement into a verifiable engineering requirement tested on the V-Model:
      </p>

      <div class="workbench-grid" style="grid-template-columns: 1fr;">
        ${data.requirementsMatching.map(req => {
          const savedOpt = (state.requirementAnswers = state.requirementAnswers || {})[req.id];
          return `
            <div class="workbench-card" id="req-card-${req.id}" style="margin-bottom: 1rem;">
              <div style="background: rgba(56, 189, 248, 0.1); padding: 0.75rem; border-radius: var(--radius-sm); margin-bottom: 0.85rem;">
                <span class="selector-label" style="color: var(--blue-brand);">Qualitative Stakeholder Statement:</span>
                <strong style="color: var(--text-bright); font-size: 1rem;">${req.vagueStatement}</strong>
              </div>

              <span class="selector-label">Select Rigorous Verifiable Specification:</span>
              <div class="btn-choice-group" style="margin-bottom: 0.85rem;">
                ${req.options.map((opt, idx) => `
                  <button class="btn-choice req-opt-btn ${savedOpt === idx ? 'selected' : ''}" data-req="${req.id}" data-idx="${idx}">
                    ${opt.text}
                  </button>
                `).join('')}
              </div>

              <div class="feedback-box feedback-info" style="font-size: 0.82rem; margin-top: 0.5rem;">
                <strong>V-Model Verification Method:</strong> ${req.verificationMethod}
              </div>

              <div class="req-feedback-area" id="req-fb-${req.id}" style="display: ${savedOpt !== undefined ? 'block' : 'none'}; margin-top: 0.5rem;">
                ${savedOpt !== undefined ? `
                  <div class="feedback-box ${req.options[savedOpt]?.correct ? 'feedback-pass' : 'feedback-fail'}">
                    ${req.options[savedOpt]?.reason}
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div id="prototype-overall-feedback"></div>

      <div class="action-bar">
        <button class="btn-primary" id="btn-prototype-validate">Validate Requirements V-Model →</button>
      </div>
    </div>
  `;

  // Attach Option Click Handlers
  container.querySelectorAll('.req-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const reqId = btn.dataset.req;
      const idx = parseInt(btn.dataset.idx, 10);
      (state.requirementAnswers = state.requirementAnswers || {})[reqId] = idx;
      labState.saveState();
      renderPrototypeActivity(container);
    });
  });

  // Validate Button Handler
  const btnVal = container.querySelector('#btn-prototype-validate');
  const overallFb = container.querySelector('#prototype-overall-feedback');

  btnVal.addEventListener('click', () => {
    let allCorrect = true;
    let correctCount = 0;

    data.requirementsMatching.forEach(req => {
      const chosenIdx = (state.requirementAnswers = state.requirementAnswers || {})[req.id];
      if (chosenIdx !== undefined && req.options[chosenIdx]?.correct) {
        correctCount++;
      } else {
        allCorrect = false;
      }
    });

    state.score = Math.round((correctCount / data.requirementsMatching.length) * 100);

    if (allCorrect) {
      state.completed = true;
      overallFb.innerHTML = `
        <div class="feedback-box feedback-pass">
          <strong>Requirements Engineering Mastered! (100% Score)</strong><br>
          You have successfully formulated quantifiable, verifiable engineering requirements with defined test verification methods across the V-Model lifecycle.
        </div>
      `;
      labState.saveState();
    } else {
      overallFb.innerHTML = `
        <div class="feedback-box feedback-fail">
          <strong>Validation Incomplete (${correctCount}/${data.requirementsMatching.length} Correct):</strong><br>
          Make sure every requirement specifies measurable numerical bounds, atmospheric conditions, and pass/fail thresholds rather than design choices or qualitative adjectives.
        </div>
      `;
    }
  });
}


function renderDataLinksActivity(container) {
  const data = UNIT1_DATA.datalinksActivity;
  const state = (labState.state && labState.state.datalinks) ? labState.state.datalinks : {};

  container.innerHTML = `
    <div class="activity-card">
      <div class="activity-header">
        <span class="activity-tag">Activity U1-05 · Data Links & Ground Control</span>
        <h2 class="activity-title">${data.title}</h2>
        <p class="activity-instructions">${data.instructions}</p>
      </div>

      <div class="discussion-prompt">
        <div class="discussion-prompt-title">Faculty Discussion Prompt</div>
        <p><strong>Ask Class:</strong> Why is losing the 5.8 GHz payload video downlink considered "Mission-Essential" failure, while losing the 433/915 MHz C2 uplink triggers immediate automated failsafe (Flight-Critical)?</p>
      </div>

      <div class="workbench-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
        <div class="figure-panel">
          <img src="${data.figurePathLinks}" alt="Tri-Band Data Link Architecture" loading="lazy">
          <div class="figure-caption">Figure 1.7: Tri-Band Data Link Architecture (Textbook Section 1.5.4)</div>
        </div>
        <div class="figure-panel">
          <img src="${data.figurePathGCS}" alt="GCS HMI Layout" loading="lazy">
          <div class="figure-caption">Figure 1.6: GCS Functional Layout (Textbook Section 1.5.2)</div>
        </div>
      </div>

      <h3 style="color: var(--text-bright); margin-bottom: 0.75rem;">1. Functional Communication Channel Dispatcher</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        Examine the three core data streams. Verify their directional flow, bandwidth profile, and flight safety criticality:
      </p>

      <div class="workbench-grid">
        ${data.streams.map(stream => {
          const isAssigned = (state.streamAssignments = state.streamAssignments || {})[stream.id];
          return `
            <div class="workbench-card" style="border-left: 5px solid ${stream.criticality === 'Flight-Critical' ? 'var(--rose-fail)' : stream.criticality === 'Safety-Critical' ? 'var(--amber-alert)' : 'var(--blue-brand)'};">
              <span class="brand-badge" style="font-size: 0.72rem;">${stream.criticality.toUpperCase()}</span>
              <h4>${stream.name}</h4>
              <p style="font-size: 0.84rem; margin-top: 0.35rem;"><strong>Direction:</strong> ${stream.direction}</p>
              <p style="font-size: 0.84rem;"><strong>Data Carried:</strong> ${stream.dataTypes}</p>
              <p style="font-size: 0.84rem;"><strong>Profile:</strong> ${stream.bandwidthProfile}</p>

              <div class="feedback-box feedback-info" style="margin-top: 0.75rem; font-size: 0.8rem;">
                <strong>Failure Consequence:</strong> ${stream.failureConsequence}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <h3 style="color: var(--text-bright); margin: 1.75rem 0 0.75rem;">2. GCS Human Factors & Mode Confusion Mitigation</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        Answer the following systems safety questions regarding GCS console design:
      </p>

      <div class="workbench-grid" style="grid-template-columns: 1fr;">
        ${data.modeConfusionChecks.map((mc, idx) => {
          const savedAns = (state.quizAnswers = state.quizAnswers || {})[idx];
          return `
            <div class="workbench-card" style="margin-bottom: 0.75rem;">
              <h4 style="color: var(--text-bright); margin-bottom: 0.5rem;">${mc.question}</h4>
              <div class="btn-choice-group">
                <button class="btn-choice mc-btn ${savedAns === mc.correctOption ? 'selected correct' : ''}" data-idx="${idx}" data-val="${mc.correctOption}">
                  ${mc.correctOption}
                </button>
                ${mc.distractors.map(dist => `
                  <button class="btn-choice mc-btn ${savedAns === dist ? 'selected incorrect' : ''}" data-idx="${idx}" data-val="${dist}">
                    ${dist}
                  </button>
                `).join('')}
              </div>
              <div class="feedback-box feedback-pass" id="mc-fb-${idx}" style="display: ${savedAns === mc.correctOption ? 'block' : 'none'}; margin-top: 0.5rem;">
                <strong>Explanation:</strong> ${mc.explanation}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div id="datalinks-overall-feedback"></div>

      <div class="action-bar">
        <button class="btn-primary" id="btn-datalinks-validate">Confirm Data Links & GCS Architecture Mastery →</button>
      </div>
    </div>
  `;

  // Attach Quiz Click Handlers
  container.querySelectorAll('.mc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.idx;
      const val = btn.dataset.val;
      (state.quizAnswers = state.quizAnswers || {})[idx] = val;
      labState.saveState();
      renderDataLinksActivity(container);
    });
  });

  // Validate Button Handler
  const btnVal = container.querySelector('#btn-datalinks-validate');
  const overallFb = container.querySelector('#datalinks-overall-feedback');

  btnVal.addEventListener('click', () => {
    const allQuizCorrect = data.modeConfusionChecks.every((mc, idx) => (state.quizAnswers = state.quizAnswers || {})[idx] === mc.correctOption);

    if (allQuizCorrect) {
      state.completed = true;
      state.score = 100;
      overallFb.innerHTML = `
        <div class="feedback-box feedback-pass">
          <strong>Data Links & GCS Console Architecture Mastered! (100% Score)</strong><br>
          You have mastered the tri-band communications architecture (C2 uplink, telemetry downlink, payload stream) and GCS mode confusion safeguards.
        </div>
      `;
      labState.saveState();
    } else {
      overallFb.innerHTML = `
        <div class="feedback-box feedback-fail">
          <strong>Review Required:</strong> Please correctly answer both GCS mode confusion and emergency switch questions above.
        </div>
      `;
    }
  });
}


function renderAutonomyActivity(container) {
  const data = UNIT1_DATA.autonomyActivity;
  const state = (labState.state && labState.state.autonomy) ? labState.state.autonomy : {};

  let activeStep = state.activeCycleStep || 1;

  function renderCycle() {
    container.innerHTML = `
      <div class="activity-card">
        <div class="activity-header">
          <span class="activity-tag">Activity U1-06 · Autonomy & Safety</span>
          <h2 class="activity-title">${data.title}</h2>
          <p class="activity-instructions">${data.instructions}</p>
        </div>

        <div class="discussion-prompt">
          <div class="discussion-prompt-title">Faculty Discussion Prompt</div>
          <p><strong>Ask Class:</strong> What is the core difference between deterministic programmed automation (e.g. waypoint following) and true closed-loop autonomy (Sense-Estimate-Plan-Act)?</p>
        </div>

        <div class="figure-panel">
          <img src="${data.figurePath}" alt="${data.figureRef}" loading="lazy">
          <div class="figure-caption">${data.figureRef} (Textbook Section 1.6)</div>
        </div>

        <h3 style="color: var(--text-bright); margin-bottom: 0.75rem;">1. The Closed-Loop Autonomy Cycle Explorer</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
          Step through the 5 stages of the closed-loop perception-action cycle:
        </p>

        <!-- Stepper Buttons for Cycle -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem; flex-wrap: wrap;">
          ${data.cycleSteps.map(s => `
            <button class="btn-ctrl btn-cycle-step ${s.step === activeStep ? 'active' : ''}" data-step="${s.step}" style="${s.step === activeStep ? 'background: var(--bg-card); border-color: var(--cyan-accent); color: var(--cyan-accent); font-weight: 700;' : ''}">
              ${s.name}
            </button>
          `).join('')}
        </div>

        <!-- Active Cycle Card -->
        ${(() => {
          const current = data.cycleSteps.find(s => s.step === activeStep) || data.cycleSteps[0];
          return `
            <div class="workbench-card" style="border-left: 5px solid var(--cyan-accent); margin-bottom: 1.5rem;">
              <span class="brand-badge">${current.domain}</span>
              <h3 style="color: var(--cyan-accent); margin-top: 0.4rem;">${current.name}</h3>
              <p style="font-size: 0.95rem; margin-top: 0.5rem;">${current.description}</p>
              
              <div class="feedback-box feedback-fail" style="margin-top: 0.85rem;">
                <strong>Anomalous Condition / Sensor Uncertainty:</strong> ${current.failureScenario}
              </div>
            </div>
          `;
        })()}

        <h3 style="color: var(--text-bright); margin: 1.75rem 0 0.75rem;">2. Foundational Safety & Failsafe Architectures</h3>
        <div class="workbench-grid">
          ${data.failsafePrinciples.map(fs => `
            <div class="workbench-card">
              <h4 style="color: var(--cyan-accent);">${fs.name}</h4>
              <p style="font-size: 0.86rem; margin-top: 0.4rem;">${fs.mechanism}</p>
            </div>
          `).join('')}
        </div>

        <div id="autonomy-overall-feedback"></div>

        <div class="action-bar">
          <button class="btn-primary" id="btn-autonomy-complete">Confirm Autonomy & Safety Mastery →</button>
        </div>
      </div>
    `;

    // Step Button Click Handlers
    container.querySelectorAll('.btn-cycle-step').forEach(btn => {
      btn.addEventListener('click', () => {
        activeStep = parseInt(btn.dataset.step, 10);
        state.activeCycleStep = activeStep;
        labState.saveState();
        renderCycle();
      });
    });

    // Completion Handler
    const btnComp = container.querySelector('#btn-autonomy-complete');
    const overallFb = container.querySelector('#autonomy-overall-feedback');

    btnComp.addEventListener('click', () => {
      state.completed = true;
      state.score = 100;
      overallFb.innerHTML = `
        <div class="feedback-box feedback-pass">
          <strong>Autonomy & Safety Architectures Mastered! (100% Score)</strong><br>
          You have mastered the closed-loop Sense-Estimate-Plan-Act cycle, the supervisory Health Monitor, and the foundational safety mechanisms of geofencing and lost-link Return-to-Launch (RTL).
        </div>
      `;
      labState.saveState();
    });
  }

  renderCycle();
}


function renderCapstoneActivity(container) {
  const cap = UNIT1_DATA.capstoneMission;
  const state = (labState.state && labState.state.capstone) ? labState.state.capstone : {};
  const decisions = state.decisions || {};

  container.innerHTML = `
    <div class="activity-card">
      <div class="activity-header">
        <span class="activity-tag">Activity U1-07 · Capstone Synthesis</span>
        <h2 class="activity-title">${cap.title}</h2>
        <p class="activity-instructions">
          Synthesize all Unit I concepts to engineer and defend a complete functional UAS architecture for a challenging real-world industrial mission.
        </p>
      </div>

      <!-- Mission Briefing Panel -->
      <div class="workbench-card" style="border-left: 5px solid var(--cyan-accent); margin-bottom: 1.75rem; background: rgba(14, 116, 144, 0.15);">
        <span class="brand-badge" style="background: var(--cyan-accent); color: #0b1329;">MISSION CONOPS BRIEFING</span>
        <h3 style="color: var(--text-bright); margin-top: 0.35rem;">${cap.scenarioTitle}</h3>
        
        <div class="workbench-grid" style="margin-top: 0.85rem; font-size: 0.85rem;">
          <div>
            <strong>Operational Objective:</strong> ${cap.scenarioBrief.missionGoal}<br>
            <strong>Corridor Geometry:</strong> ${cap.scenarioBrief.corridorLength}<br>
            <strong>Airspace Regime:</strong> ${cap.scenarioBrief.airspaceContext}
          </div>
          <div>
            <strong>Terrain Constraints:</strong> ${cap.scenarioBrief.terrainConstraints}<br>
            <strong>Mission Payload:</strong> ${cap.scenarioBrief.payloadRequirements}<br>
            <strong>Field Logistics:</strong> ${cap.scenarioBrief.logisticsContext}
          </div>
        </div>
      </div>

      <!-- Decision Stages Form -->
      <div id="capstone-form">
        <!-- Stage 1: Air Vehicle Configuration -->
        <div class="workbench-card" style="margin-bottom: 1.25rem;">
          <h4 style="color: var(--cyan-accent);">${cap.decisionStages[0].stageTitle}</h4>
          <p style="font-size: 0.88rem; margin: 0.35rem 0 0.75rem;">${cap.decisionStages[0].prompt}</p>
          <div class="btn-choice-group">
            ${cap.decisionStages[0].options.map(opt => `
              <button class="btn-choice cap-stage-btn ${decisions.platform === opt.id ? 'selected' : ''}" data-stage="platform" data-val="${opt.id}">
                <strong>${opt.label}</strong>
              </button>
            `).join('')}
          </div>
          <div class="feedback-box feedback-info" id="cap-fb-platform" style="display: ${decisions.platform ? 'block' : 'none'}; margin-top: 0.6rem;">
            ${cap.decisionStages[0].options.find(o => o.id === decisions.platform)?.feedback || ''}
          </div>
        </div>

        <!-- Stage 2: Taxonomy Profile -->
        <div class="workbench-card" style="margin-bottom: 1.25rem;">
          <h4 style="color: var(--cyan-accent);">${cap.decisionStages[1].stageTitle}</h4>
          <p style="font-size: 0.88rem; margin: 0.35rem 0 0.75rem;">${cap.decisionStages[1].prompt}</p>
          <div class="workbench-grid">
            ${cap.decisionStages[1].fields.map((f, fIdx) => `
              <div class="selector-group">
                <label class="selector-label">${f.name}:</label>
                <select class="select-custom cap-tax-select" data-field="${f.name}">
                  <option value="">-- Select ${f.name} --</option>
                  ${f.options.map(opt => `
                    <option value="${opt}" ${decisions['tax_' + f.name] === opt ? 'selected' : ''}>${opt}</option>
                  `).join('')}
                </select>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Stage 3: Complete UAS Ecosystem Checklist -->
        <div class="workbench-card" style="margin-bottom: 1.25rem;">
          <h4 style="color: var(--cyan-accent);">${cap.decisionStages[2].stageTitle}</h4>
          <p style="font-size: 0.88rem; margin: 0.35rem 0 0.75rem;">${cap.decisionStages[2].prompt}</p>
          ${cap.decisionStages[2].checklist.map(item => {
            const checked = decisions['chk_' + item.id];
            return `
              <label class="checklist-item">
                <input type="checkbox" class="cap-sub-check" data-id="${item.id}" ${checked ? 'checked' : ''}>
                <div>
                  <strong style="color: var(--text-bright);">${item.label.split('(')[0]}</strong>
                  <div style="font-size: 0.82rem; color: var(--text-muted);">${item.label}</div>
                </div>
              </label>
            `;
          }).join('')}
        </div>

        <!-- Stage 4: Data Links -->
        <div class="workbench-card" style="margin-bottom: 1.25rem;">
          <h4 style="color: var(--cyan-accent);">${cap.decisionStages[3].stageTitle}</h4>
          <p style="font-size: 0.88rem; margin: 0.35rem 0 0.75rem;">${cap.decisionStages[3].prompt}</p>
          <div class="workbench-grid">
            ${cap.decisionStages[3].pairs.map(p => `
              <div class="workbench-card" style="background: var(--bg-surface);">
                <strong style="color: var(--cyan-accent);">${p.link}</strong>
                <div style="font-size: 0.84rem; color: var(--text-main); margin-top: 0.25rem;">${p.assignment}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Stage 5: Autonomy & Failsafe -->
        <div class="workbench-card" style="margin-bottom: 1.25rem;">
          <h4 style="color: var(--cyan-accent);">${cap.decisionStages[4].stageTitle}</h4>
          <p style="font-size: 0.88rem; margin: 0.35rem 0 0.75rem;">${cap.decisionStages[4].prompt}</p>
          <div class="btn-choice-group">
            ${cap.decisionStages[4].options.map((opt, optIdx) => `
              <button class="btn-choice cap-safety-btn ${decisions.safety === optIdx ? 'selected' : ''}" data-idx="${optIdx}">
                ${opt.text}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Stage 6: Architecture Defense -->
        <div class="workbench-card" style="margin-bottom: 1.25rem;">
          <h4 style="color: var(--cyan-accent);">${cap.decisionStages[5].stageTitle}</h4>
          <p style="font-size: 0.88rem; margin: 0.35rem 0 0.75rem;">${cap.decisionStages[5].prompt}</p>
          <div class="btn-choice-group">
            ${cap.decisionStages[5].justificationOptions.map((opt, jIdx) => `
              <button class="btn-choice cap-defense-btn ${decisions.defense === jIdx ? 'selected' : ''}" data-idx="${jIdx}">
                ${opt.text}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div id="capstone-overall-feedback"></div>

      <div class="action-bar">
        <button class="btn-primary" id="btn-capstone-submit">Submit UAS Architecture for Flight Clearance →</button>
      </div>
    </div>
  `;

  // Attach Platform Handlers
  container.querySelectorAll('.cap-stage-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;
      if (!state.decisions) state.decisions = {};
      state.decisions.platform = val;
      labState.saveState();
      renderCapstoneActivity(container);
    });
  });

  // Attach Taxonomy Select Handlers
  container.querySelectorAll('.cap-tax-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const field = e.target.dataset.field;
      if (!state.decisions) state.decisions = {};
      (state.decisions = state.decisions || {})['tax_' + field] = e.target.value;
      labState.saveState();
    });
  });

  // Attach Checkbox Handlers
  container.querySelectorAll('.cap-sub-check').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      if (!state.decisions) state.decisions = {};
      (state.decisions = state.decisions || {})['chk_' + id] = e.target.checked;
      labState.saveState();
    });
  });

  // Attach Safety Handlers
  container.querySelectorAll('.cap-safety-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      if (!state.decisions) state.decisions = {};
      state.decisions.safety = idx;
      labState.saveState();
      renderCapstoneActivity(container);
    });
  });

  // Attach Defense Handlers
  container.querySelectorAll('.cap-defense-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      if (!state.decisions) state.decisions = {};
      state.decisions.defense = idx;
      labState.saveState();
      renderCapstoneActivity(container);
    });
  });

  // Submission & Validation Handler
  const btnSub = container.querySelector('#btn-capstone-submit');
  const overallFb = container.querySelector('#capstone-overall-feedback');

  btnSub.addEventListener('click', () => {
    const d = state.decisions || {};
    const platChoice = cap.decisionStages[0].options.find(o => o.id === d.platform);
    const isPlatValid = platChoice && platChoice.valid;

    const isTaxValid = d['tax_Mass Category'] === 'Small sUAS (2–25 kg)' &&
                       d['tax_Operational Range'] === 'Short Range (10–50 km)' &&
                       d['tax_Airspace Envelope'] === 'BVLOS (Beyond Visual Line of Sight)';

    const allChecked = cap.decisionStages[2].checklist.every(item => d['chk_' + item.id]);

    const isSafetyValid = d.safety !== undefined && cap.decisionStages[4].options[d.safety]?.correct;
    const isDefenseValid = d.defense !== undefined && cap.decisionStages[5].justificationOptions[d.defense]?.correct;

    if (!d.platform || d.safety === undefined || d.defense === undefined) {
      overallFb.innerHTML = `
        <div class="feedback-box feedback-fail">
          <strong>Incomplete Submission:</strong> Please complete all 6 architectural decision stages above before submitting for clearance.
        </div>
      `;
      return;
    }

    if (isPlatValid && isTaxValid && allChecked && isSafetyValid && isDefenseValid) {
      state.completed = true;
      state.cleared = true;
      state.score = 100;

      overallFb.innerHTML = `
        <div class="feedback-box feedback-pass">
          <strong>ARCHITECTURAL FLIGHT CLEARANCE GRANTED! (100% Score)</strong><br>
          Your UAS conceptual architecture for <em>Project Hydro-Shield</em> is fully certified. You have demonstrated a complete functional UAS ecosystem comprising aerodynamically defensible airframe selection (${platChoice.label}), rigorous 4-axis classification, complete 6-subsystem integration, verified tri-band communications, robust RTL safety failsafes, and systems-engineering justification distinguishing it from a recreational aeromodel.<br><br>
          <button class="btn-primary" id="btn-view-certificate" style="margin-top: 0.5rem;">View Official Verification Slip →</button>
        </div>
      `;

      container.querySelector('#btn-view-certificate')?.addEventListener('click', () => {
        labState.setActiveTab('ledger');
      });

      labState.saveState();
    } else {
      let issues = [];
      if (!isPlatValid) issues.push('• <strong>Airframe Sizing Issue:</strong> Selected airframe lacks sufficient aerodynamic range or requires paved runways absent in the mountain clearing.');
      if (!isTaxValid) issues.push('• <strong>Taxonomy Mismatch:</strong> Recheck Mass, Range (10–50 km corridor), and Airspace (BVLOS).');
      if (!allChecked) issues.push('• <strong>Incomplete Ecosystem:</strong> All 6 subsystems (including GSE and trained crew) must be checked.');
      if (!isSafetyValid) issues.push('• <strong>Safety Protocol Flaw:</strong> Lost-link failsafe must climb to obstacle clearance altitude and execute RTL.');
      if (!isDefenseValid) issues.push('• <strong>Architecture Defense Flaw:</strong> Systems engineering criteria require closed-loop autopilot control, telemetry, and deterministic fail-safes.');

      overallFb.innerHTML = `
        <div class="feedback-box feedback-fail">
          <strong>Clearance Denied – Architectural Flaws Detected:</strong><br>
          ${issues.join('<br>')}
        </div>
      `;
    }
  });
}

// U21MI503 – Unmanned Aerial Vehicle Technology (Regulation 2021)
// UNIT I: UAS Systems Architecture Lab – Main Controller & Router


class AppController {
  constructor() {
    this.container = document.getElementById('app-main-content');
    this.readinessGauge = document.getElementById('header-readiness-val');
    this.init();
  }

  init() {
    // Setup Theme & Presentation Mode from state
    if (labState.state.settings.themeLight) document.body.classList.add('theme-light');
    if (labState.state.settings.presentationMode) document.body.classList.add('presentation-mode');

    // Attach Header Controls
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => {
      labState.toggleTheme();
      document.body.classList.toggle('theme-light', labState.state.settings.themeLight);
    });

    document.getElementById('btn-toggle-presentation')?.addEventListener('click', () => {
      labState.togglePresentationMode();
      document.body.classList.toggle('presentation-mode', labState.state.settings.presentationMode);
    });

    document.getElementById('btn-reset-lab')?.addEventListener('click', () => {
      labState.resetProgress();
    });

    // Attach Stepper Nav Handlers
    document.querySelectorAll('.nav-step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        labState.setActiveTab(tabId);
      });
    });

    // Subscribe to State Changes
    labState.subscribe((state) => {
      this.updateHeaderAndNav(state);
      this.renderActiveTab(state.activeTab);
    });

    // Initial Render
    this.updateHeaderAndNav(labState.state);
    this.renderActiveTab(labState.state.activeTab);
  }

  updateHeaderAndNav(state) {
    if (!state) return;
    if (this.readinessGauge) {
      this.readinessGauge.textContent = `${state.overallReadiness || 0}%`;
    }

    document.querySelectorAll('.nav-step-btn').forEach(btn => {
      const tab = btn.dataset.tab;
      btn.classList.toggle('active', tab === state.activeTab);

      let isDone = false;
      if (tab === 'history' && state.history?.completed) isDone = true;
      if (tab === 'taxonomy' && state.taxonomy?.completed) isDone = true;
      if (tab === 'boundary' && state.boundary?.completed) isDone = true;
      if (tab === 'prototype' && state.prototype?.completed) isDone = true;
      if (tab === 'datalinks' && state.datalinks?.completed) isDone = true;
      if (tab === 'autonomy' && state.autonomy?.completed) isDone = true;
      if (tab === 'capstone' && state.capstone?.completed) isDone = true;

      btn.classList.toggle('completed', isDone);
      const icon = btn.querySelector('.step-check');
      if (icon) icon.textContent = isDone ? '✓' : '';
    });
  }

  renderActiveTab(tabId) {
    if (!this.container) return;
    this.container.innerHTML = '';

    switch (tabId) {
      case 'overview':
        this.renderOverview(this.container);
        break;
      case 'history':
        renderHistoryActivity(this.container);
        break;
      case 'taxonomy':
        renderTaxonomyActivity(this.container);
        break;
      case 'boundary':
        renderBoundaryActivity(this.container);
        break;
      case 'prototype':
        renderPrototypeActivity(this.container);
        break;
      case 'datalinks':
        renderDataLinksActivity(this.container);
        break;
      case 'autonomy':
        renderAutonomyActivity(this.container);
        break;
      case 'capstone':
        renderCapstoneActivity(this.container);
        break;
      case 'ledger':
        this.renderLedger(this.container);
        break;
      default:
        this.renderOverview(this.container);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderOverview(container) {
    const meta = UNIT1_DATA.meta;
    const probes = UNIT1_DATA.calibrationProbes;
    const calState = (labState.state && labState.state.calibration) ? labState.state.calibration : {};

    container.innerHTML = `
      <div class="activity-card">
        <div class="activity-header">
          <span class="brand-badge">${meta.courseCode} · ${meta.unitTitle}</span>
          <h2 class="activity-title">${meta.labTitle}</h2>
          <p class="activity-instructions">${meta.subtitle}</p>
        </div>

        <div class="workbench-card" style="margin-bottom: 1.5rem; background: rgba(2, 132, 199, 0.1); border-left: 5px solid var(--cyan-accent);">
          <h3 style="color: var(--cyan-accent);">Engineering Learning Objectives (CO1 Alignment)</h3>
          <p style="font-size: 0.9rem; margin-top: 0.4rem;">
            This interactive engineering lab develops systems-level comprehension for second-year Mechatronics students who have completed the Chapter 1 textbook readings. Rather than memorizing isolated facts, you will architect, classify, and verify unmanned aircraft systems across 6 rigorous modules and an integrated capstone mission.
          </p>
          <div style="margin-top: 0.6rem; font-size: 0.84rem; color: var(--text-muted);">
            <em>Prerequisite:</em> ${meta.prerequisiteNote}
          </div>
        </div>

        <h3 style="color: var(--text-bright); margin-bottom: 0.75rem;">Pre-Lab Mental-Model Calibration</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
          Calibrate your engineering mental models across three foundational concepts before entering the design workbench:
        </p>

        <div class="workbench-grid" style="grid-template-columns: 1fr;">
          ${probes.map((p, pIdx) => {
            const savedAns = (calState.answers = calState.answers || {})[p.id];
            return `
              <div class="workbench-card" style="margin-bottom: 1rem;">
                <span class="selector-label">Probe ${pIdx + 1}:</span>
                <h4 style="color: var(--text-bright); margin-bottom: 0.6rem;">${p.question}</h4>
                <div class="btn-choice-group">
                  ${p.options.map((opt, oIdx) => `
                    <button class="btn-choice probe-btn ${savedAns === oIdx ? (opt.correct ? 'selected correct' : 'selected incorrect') : ''}" data-probe="${p.id}" data-idx="${oIdx}">
                      ${opt.text}
                    </button>
                  `).join('')}
                </div>
                <div class="feedback-box ${p.options[savedAns]?.correct ? 'feedback-pass' : 'feedback-fail'}" id="probe-fb-${p.id}" style="display: ${savedAns !== undefined ? 'block' : 'none'}; margin-top: 0.5rem;">
                  ${p.options[savedAns]?.reason || ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="action-bar">
          <div></div>
          <button class="btn-primary" id="btn-enter-lab">Begin Activity U1-01: Systems Evolution →</button>
        </div>
      </div>
    `;

    // Attach Probe Handlers
    container.querySelectorAll('.probe-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const probeId = btn.dataset.probe;
        const idx = parseInt(btn.dataset.idx, 10);
        (calState.answers = calState.answers || {})[probeId] = idx;
        labState.saveState();
        this.renderOverview(container);
      });
    });

    container.querySelector('#btn-enter-lab')?.addEventListener('click', () => {
      labState.setActiveTab('history');
    });
  }

  renderLedger(container) {
    const s = labState.state || {};
    const scores = s.domainScores || {};

    container.innerHTML = `
      <div class="activity-card">
        <div class="activity-header">
          <span class="activity-tag">Assessment & Certification</span>
          <h2 class="activity-title">UAS Systems Architecture Competency Ledger</h2>
          <p class="activity-instructions">
            Summary of demonstrated engineering competencies and formal verification of Unit I completion.
          </p>
        </div>

        <!-- Verification Certificate Slip -->
        <div class="verification-slip" id="printable-slip">
          <div class="slip-header">
            <div>
              <div class="slip-title">U21MI503 · UNMANNED AERIAL VEHICLE TECHNOLOGY</div>
              <div class="slip-sub">Unit I: UAS Systems Architecture Competency Verification Slip</div>
            </div>
            <div class="slip-stamp">
              ${s.capstone?.cleared ? '✓ ARCHITECTURAL CLEARANCE GRANTED' : 'PROVISIONAL / IN PROGRESS'}
            </div>
          </div>

          <div class="slip-grid">
            <div class="slip-field">
              <div class="slip-field-label">Student Engineer Name:</div>
              <input type="text" id="input-student-name" value="${s.studentInfo?.name || 'Mechatronics Engineer'}" style="padding: 0.3rem; border: 1px solid #cbd5e1; border-radius: 4px; width: 100%; font-weight: 600;">
            </div>
            <div class="slip-field">
              <div class="slip-field-label">Roll Number:</div>
              <input type="text" id="input-student-roll" value="${s.studentInfo?.rollNo || '24MI---'}" style="padding: 0.3rem; border: 1px solid #cbd5e1; border-radius: 4px; width: 100%; font-weight: 600;">
            </div>
            <div class="slip-field">
              <div class="slip-field-label">Evaluation Date:</div>
              <div class="slip-field-val">${s.studentInfo?.date || new Date().toISOString().split('T')[0]}</div>
            </div>
            <div class="slip-field">
              <div class="slip-field-label">Overall Systems Readiness Index:</div>
              <div class="slip-field-val" style="font-size: 1.25rem; color: #0284c7;">${s.overallReadiness || 0}%</div>
            </div>
          </div>

          <h4 style="margin: 1.25rem 0 0.5rem; color: #0f2744;">Demonstrated Domain Competencies:</h4>
          <table class="slip-table">
            <thead>
              <tr>
                <th>Foundational Competency Pillar</th>
                <th>Textbook Basis</th>
                <th>Mastery Level</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Historical Evolution & Tech Drivers</strong></td>
                <td>Section 1.1</td>
                <td><strong>${scores.history || 0}%</strong></td>
                <td>${(scores.history || 0) >= 80 ? '✓ Mastered' : 'Needs Review'}</td>
              </tr>
              <tr>
                <td><strong>2. Multi-Axis Taxonomy & Trade-offs</strong></td>
                <td>Section 1.2</td>
                <td><strong>${scores.taxonomy || 0}%</strong></td>
                <td>${(scores.taxonomy || 0) >= 80 ? '✓ Mastered' : 'Needs Review'}</td>
              </tr>
              <tr>
                <td><strong>3. UAS System Boundary & Subsystems</strong></td>
                <td>Section 1.3</td>
                <td><strong>${scores.boundary || 0}%</strong></td>
                <td>${(scores.boundary || 0) >= 80 ? '✓ Mastered' : 'Needs Review'}</td>
              </tr>
              <tr>
                <td><strong>4. Models, Prototypes & Requirements V-Model</strong></td>
                <td>Section 1.4</td>
                <td><strong>${scores.prototypes || 0}%</strong></td>
                <td>${(scores.prototypes || 0) >= 80 ? '✓ Mastered' : 'Needs Review'}</td>
              </tr>
              <tr>
                <td><strong>5. Communications, Autonomy & Safety Protocols</strong></td>
                <td>Section 1.5–1.6</td>
                <td><strong>${scores.comms_autonomy || 0}%</strong></td>
                <td>${(scores.comms_autonomy || 0) >= 80 ? '✓ Mastered' : 'Needs Review'}</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 1.5rem; font-size: 0.82rem; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 0.75rem;">
            <em>This document certifies the candidate has analyzed and architected a complete functional UAS ecosystem for Course U21MI503 (Regulation 2021). Formative laboratory verification record.</em>
          </div>
        </div>

        <div class="action-bar">
          <button class="btn-secondary" id="btn-print-slip">🖨 Print / Save Verification Slip</button>
          <button class="btn-primary" id="btn-return-overview">← Return to Main Console</button>
        </div>
      </div>
    `;

    // Attach Input Handlers
    const nameInput = container.querySelector('#input-student-name');
    const rollInput = container.querySelector('#input-student-roll');

    nameInput?.addEventListener('change', (e) => {
      labState.setStudentInfo({ name: e.target.value });
    });

    rollInput?.addEventListener('change', (e) => {
      labState.setStudentInfo({ rollNo: e.target.value });
    });

    container.querySelector('#btn-print-slip')?.addEventListener('click', () => {
      window.print();
    });

    container.querySelector('#btn-return-overview')?.addEventListener('click', () => {
      labState.setActiveTab('overview');
    });
  }
}

// Bootstrap on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  new AppController();
});


  // Auto-bootstrap AppController safely
  try {
    window.appInstance = new AppController();
  } catch (err) {
    console.error("AppController init error:", err);
  }

})();