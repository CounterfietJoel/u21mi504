import { UNIT1_DATA } from '../data/unit1_data.js';
import { labState } from '../state.js';

export function renderCapstoneActivity(container) {
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