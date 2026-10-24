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

export const labState = new LabStateManager();
