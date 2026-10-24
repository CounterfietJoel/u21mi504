import { UNIT1_DATA } from '../data/unit1_data.js';
import { labState } from '../state.js';

export function renderTaxonomyActivity(container) {
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
