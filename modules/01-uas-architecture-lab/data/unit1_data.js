// U21MI503 - Unmanned Aerial Vehicle Technology (Regulation 2021)
// UNIT I: UAS Systems Architecture Lab - Educational Data Contract

export const UNIT1_DATA = {
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
