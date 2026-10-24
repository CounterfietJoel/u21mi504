import { UNIT1_DATA } from '../data/unit1_data.js';
import { labState } from '../state.js';

export function renderBoundaryActivity(container) {
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
