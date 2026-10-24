import { UNIT1_DATA } from '../data/unit1_data.js';
import { labState } from '../state.js';

export function renderAutonomyActivity(container) {
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