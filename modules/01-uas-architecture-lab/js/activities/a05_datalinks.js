import { UNIT1_DATA } from '../data/unit1_data.js';
import { labState } from '../state.js';

export function renderDataLinksActivity(container) {
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