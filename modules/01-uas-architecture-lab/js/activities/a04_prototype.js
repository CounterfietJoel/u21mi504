import { UNIT1_DATA } from '../data/unit1_data.js';
import { labState } from '../state.js';

export function renderPrototypeActivity(container) {
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