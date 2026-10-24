import { UNIT1_DATA } from '../data/unit1_data.js';
import { labState } from '../state.js';

export function renderHistoryActivity(container) {
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
