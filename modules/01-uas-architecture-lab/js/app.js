// U21MI503 – Unmanned Aerial Vehicle Technology (Regulation 2021)
// UNIT I: UAS Systems Architecture Lab – Main Controller & Router

import { UNIT1_DATA } from './data/unit1_data.js';
import { labState } from './state.js';
import { renderHistoryActivity } from './activities/a01_history.js';
import { renderTaxonomyActivity } from './activities/a02_taxonomy.js';
import { renderBoundaryActivity } from './activities/a03_boundary.js';
import { renderPrototypeActivity } from './activities/a04_prototype.js';
import { renderDataLinksActivity } from './activities/a05_datalinks.js';
import { renderAutonomyActivity } from './activities/a06_autonomy.js';
import { renderCapstoneActivity } from './activities/a07_capstone.js';

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