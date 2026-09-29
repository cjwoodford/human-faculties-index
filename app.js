/**
 * HUMAN FACULTIES INDEX // THE COSMIC INTELLIGENCE INSTITUTE
 * Master Application State & View Routing
 */

const state = {
  currentTab: 'rankings', // 'rankings' | 'profiles' | 'methodology' | 'about'
  selectedLabId: 'anthropic',
  rankBy: 'composite', // 'composite' | 'imagination' | 'intuition' | 'emotionalIntelligence' | 'attention' | 'embodiment' | 'wisdom' | 'metaphysics'
  theme: 'dark',
  radarSelectedLabs: ['anthropic', 'openai', 'mistral', 'apple-ml']
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupNavigation();
  renderApp();
});

function initTheme() {
  const saved = localStorage.getItem('cii_theme') || 'dark';
  state.theme = saved;
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeButton();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('cii_theme', state.theme);
  updateThemeButton();
  if (state.currentTab === 'rankings') {
    setTimeout(renderRadarChart, 50);
  }
}

function updateThemeButton() {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = state.theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}

function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      state.currentTab = target.dataset.tab;
      renderApp();
    });
  });

  const logo = document.getElementById('logoHeader');
  if (logo) {
    logo.addEventListener('click', () => {
      navigateToTab('rankings');
    });
  }
}

function navigateToTab(tab, labId = null) {
  state.currentTab = tab;
  if (labId) state.selectedLabId = labId;
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.tab === tab);
  });
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderApp() {
  const container = document.getElementById('mainSectionContainer');
  if (!container) return;

  if (state.currentTab === 'rankings') {
    renderRankingsView(container);
  } else if (state.currentTab === 'profiles') {
    renderProfilesView(container);
  } else if (state.currentTab === 'methodology') {
    renderMethodologyView(container);
  } else if (state.currentTab === 'about') {
    renderAboutView(container);
  }
}

// ==========================================
// 1. RANKINGS VIEW
// ==========================================
function renderRankingsView(container) {
  // Sort labs
  const labs = [...LABS_DATA].sort((a, b) => {
    if (state.rankBy === 'composite') return b.composite - a.composite;
    if (state.rankBy === 'metaphysics') return a.metaphysics.score - b.metaphysics.score; // 0 is most idealist
    return b.faculties[state.rankBy].score - a.faculties[state.rankBy].score;
  });

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div>
        <span class="hero-pretitle">A Tracker for the Age of AI</span>
        <h2>Are AI labs building to honor the human, or to replace it?</h2>
        <p class="hero-subtitle">
          We rate how each lab's products, policies, and public philosophy treat the faculties no machine should be allowed to atrophy: <strong>imagination, intuition, emotional intelligence, attention, embodiment, and wisdom</strong>. A separate axis records where each lab sits between an idealist metaphysics and computationalism.
        </p>
      </div>

      <div class="hero-meta-panel">
        <div class="hero-meta-row">
          <span class="hero-meta-label">Review Cycle</span>
          <span class="hero-meta-val">[Q3, 2026]</span>
        </div>
        <div class="hero-meta-row">
          <span class="hero-meta-label">Labs Assessed</span>
          <span class="hero-meta-val">8 + 2 Benchmarks</span>
        </div>
        <div class="hero-meta-row">
          <span class="hero-meta-label">Measures</span>
          <span class="hero-meta-val">6 Faculties + 1 Metaphysical Axis</span>
        </div>
        <div class="hero-meta-row">
          <span class="hero-meta-label">Audit Basis</span>
          <span class="hero-meta-val">Conduct Over Claims (Shipped Defaults)</span>
        </div>
      </div>
    </section>

    <!-- Rank By Filter Pills -->
    <div class="rank-filter-bar">
      <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-dim); text-transform: uppercase; margin-right: 0.4rem;">Rank by</span>
      ${renderRankPill('composite', 'Composite')}
      ${renderRankPill('imagination', 'Imagination')}
      ${renderRankPill('intuition', 'Intuition')}
      ${renderRankPill('emotionalIntelligence', 'Emotional intelligence')}
      ${renderRankPill('attention', 'Attention')}
      ${renderRankPill('embodiment', 'Embodiment')}
      ${renderRankPill('wisdom', 'Wisdom')}
      ${renderRankPill('metaphysics', 'Most idealist (0 ↔ 100)')}
    </div>

    <!-- Master Rankings Table -->
    <div class="table-wrapper">
      <table class="rankings-table">
        <thead>
          <tr>
            <th style="width: 40px;">#</th>
            <th>Laboratory & Mission Type</th>
            <th style="text-align: center;">Composite</th>
            <th style="text-align: center;">Imagination</th>
            <th style="text-align: center;">Intuition</th>
            <th style="text-align: center;">Emotional Intel.</th>
            <th style="text-align: center;">Attention</th>
            <th style="text-align: center;">Embodiment</th>
            <th style="text-align: center;">Wisdom</th>
            <th>Metaphysics (0 Idealist ↔ 100 Comp)</th>
          </tr>
        </thead>
        <tbody>
          ${labs.map((lab, idx) => {
            const m = lab.metaphysics;
            const tagClass = m.score <= 38 ? 'tag-idealist' : (m.score <= 65 ? 'tag-agnostic' : 'tag-computational');
            return `
              <tr onclick="navigateToTab('profiles', '${lab.id}')" title="Click to view full audit profile for ${lab.name}">
                <td style="font-family: var(--font-mono); font-weight: 700; color: var(--text-dim);">${idx + 1}</td>
                <td>
                  <strong style="display: block; font-size: 0.95rem; color: var(--text-main);">${lab.name}</strong>
                  <span style="font-size: 0.76rem; color: var(--text-dim);">${lab.type}</span>
                </td>
                <td style="text-align: center;">
                  <span class="heat-cell" style="background: rgba(217, 119, 6, 0.15); color: #f59e0b; border: 1px solid rgba(217, 119, 6, 0.3); font-size: 1.05rem;">
                    ${lab.composite}
                  </span>
                </td>
                <td style="text-align: center;">
                  <span class="heat-cell" style="background: ${getHeatBg(lab.faculties.imagination.score)}; color: var(--text-main);">
                    ${lab.faculties.imagination.score}
                  </span>
                </td>
                <td style="text-align: center;">
                  <span class="heat-cell" style="background: ${getHeatBg(lab.faculties.intuition.score)}; color: var(--text-main);">
                    ${lab.faculties.intuition.score}
                  </span>
                </td>
                <td style="text-align: center;">
                  <span class="heat-cell" style="background: ${getHeatBg(lab.faculties.emotionalIntelligence.score)}; color: var(--text-main);">
                    ${lab.faculties.emotionalIntelligence.score}
                  </span>
                </td>
                <td style="text-align: center;">
                  <span class="heat-cell" style="background: ${getHeatBg(lab.faculties.attention.score)}; color: var(--text-main);">
                    ${lab.faculties.attention.score}
                  </span>
                </td>
                <td style="text-align: center;">
                  <span class="heat-cell" style="background: ${getHeatBg(lab.faculties.embodiment.score)}; color: var(--text-main);">
                    ${lab.faculties.embodiment.score}
                  </span>
                </td>
                <td style="text-align: center;">
                  <span class="heat-cell" style="background: ${getHeatBg(lab.faculties.wisdom.score)}; color: var(--text-main);">
                    ${lab.faculties.wisdom.score}
                  </span>
                </td>
                <td>
                  <div class="metaphysics-badge-cell">
                    <span class="metaphysics-tag ${tagClass}">${m.stance}</span>
                    <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--text-dim);">${m.score}</span>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>

    <!-- The Seventh Measure Continuum Section -->
    <div class="seventh-measure-banner">
      <div class="seventh-measure-header">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 800; color: var(--accent-gold); display: block; margin-bottom: 0.4rem;">The Seventh Measure</span>
          <h3 style="font-size: 1.55rem; font-weight: 800; line-height: 1.2;">Where each lab stands on the nature of mind</h3>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">
          This axis tracks each lab's working metaphysics as it shows up in its research agenda, product framing, and leadership statements. Toward the left (0), consciousness is treated as fundamental and irreducible. Toward the right (100), mind is treated as computation that can be scaled, replicated, or uploaded into silicon.
        </p>
      </div>

      <div class="continuum-track-wrapper">
        <div class="continuum-bar"></div>
        <div style="position: relative; width: 100%; height: 60px;">
          ${labs.map((lab, i) => {
            const left = Math.min(95, Math.max(5, lab.metaphysics.score));
            const isTop = i % 2 === 0;
            return `
              <div class="continuum-pin" style="left: ${left}%; top: ${isTop ? '-42px' : '18px'};" onclick="navigateToTab('profiles', '${lab.id}')" title="${lab.name}: ${lab.metaphysics.score}/100 (${lab.metaphysics.stance})">
                ${isTop ? `
                  <div class="continuum-pin-bubble">${lab.name} <span style="color: var(--accent-gold);">${lab.metaphysics.score}</span></div>
                  <div style="width: 1px; height: 10px; background: rgba(217, 119, 6, 0.4);"></div>
                  <div class="continuum-pin-dot"></div>
                ` : `
                  <div class="continuum-pin-dot"></div>
                  <div style="width: 1px; height: 10px; background: rgba(217, 119, 6, 0.4);"></div>
                  <div class="continuum-pin-bubble">${lab.name} <span style="color: var(--accent-gold);">${lab.metaphysics.score}</span></div>
                `}
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 1.5rem; font-size: 0.82rem; border-top: 1px solid var(--border-color); pt-3;">
        <div style="max-width: 320px; color: #4ade80;">
          <strong style="display: block; margin-bottom: 0.2rem;">0 · Ontological Idealism</strong>
          <span style="color: var(--text-dim); font-size: 0.78rem;">Consciousness as primitive ground; AI framed strictly as an instrument within human meaning.</span>
        </div>
        <div style="max-width: 320px; text-align: right; color: #f87171;">
          <strong style="display: block; margin-bottom: 0.2rem;">100 · Computationalism & Transhumanism</strong>
          <span style="color: var(--text-dim); font-size: 0.78rem;">Mind as algorithmic computation; digital sentience and human replacement stated as mission.</span>
        </div>
      </div>
    </div>

    <!-- Comparative Radar Chart Section -->
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; margin-bottom: 3rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <h4 style="font-size: 1.25rem; font-weight: 800;">Multi-Lab Faculty Comparison Radar</h4>
          <p style="font-size: 0.84rem; color: var(--text-muted);">Overlay laboratories to compare their signatures across all six living faculties.</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${LABS_DATA.map(l => `
            <label style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.78rem; background: rgba(0,0,0,0.2); padding: 0.3rem 0.6rem; border-radius: 6px; border: 1px solid var(--border-color); cursor: pointer;">
              <input type="checkbox" value="${l.id}" ${state.radarSelectedLabs.includes(l.id) ? 'checked' : ''} onchange="toggleRadarLab('${l.id}')" class="accent-amber-500" />
              <span>${l.name}</span>
            </label>
          `).join('')}
        </div>
      </div>
      <div style="display: flex; justify-content: center; align-items: center; min-height: 440px;">
        <canvas id="facultyRadarCanvas" width="540" height="460" style="max-width: 100%;"></canvas>
      </div>
    </div>
  `;

  setTimeout(renderRadarChart, 50);
}

function renderRankPill(key, label) {
  const active = state.rankBy === key ? 'active' : '';
  return `<button class="rank-pill ${active}" onclick="changeRankSort('${key}')">${label}</button>`;
}

function changeRankSort(key) {
  state.rankBy = key;
  renderRankingsView(document.getElementById('mainSectionContainer'));
}

function getHeatBg(score) {
  if (score >= 80) return 'rgba(21, 128, 61, 0.22)';
  if (score >= 65) return 'rgba(217, 119, 6, 0.18)';
  if (score >= 50) return 'rgba(180, 83, 9, 0.18)';
  if (score >= 35) return 'rgba(194, 65, 12, 0.18)';
  return 'rgba(185, 28, 28, 0.22)';
}

function toggleRadarLab(id) {
  const idx = state.radarSelectedLabs.indexOf(id);
  if (idx > -1) {
    if (state.radarSelectedLabs.length > 1) state.radarSelectedLabs.splice(idx, 1);
  } else {
    if (state.radarSelectedLabs.length < 5) state.radarSelectedLabs.push(id);
  }
  renderRadarChart();
}

function renderRadarChart() {
  const canvas = document.getElementById('facultyRadarCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth || 540;
  const h = canvas.clientHeight || 460;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, w, h);
  const cx = w / 2;
  const cy = h / 2 + 10;
  const r = Math.min(w, h) * 0.36;

  const axes = [
    { k: 'imagination', label: 'Imagination' },
    { k: 'intuition', label: 'Intuition' },
    { k: 'emotionalIntelligence', label: 'Emotional Intel' },
    { k: 'attention', label: 'Attention' },
    { k: 'embodiment', label: 'Embodiment' },
    { k: 'wisdom', label: 'Wisdom' }
  ];
  const step = (Math.PI * 2) / axes.length;

  // Web rings
  [0.2, 0.4, 0.6, 0.8, 1.0].forEach(level => {
    ctx.beginPath();
    ctx.strokeStyle = state.theme === 'dark' ? 'rgba(230, 205, 175, 0.08)' : 'rgba(120, 85, 50, 0.1)';
    for (let i = 0; i < axes.length; i++) {
      const ang = i * step - Math.PI / 2;
      const x = cx + Math.cos(ang) * (r * level);
      const y = cy + Math.sin(ang) * (r * level);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  });

  // Spokes & labels
  axes.forEach((ax, i) => {
    const ang = i * step - Math.PI / 2;
    const sx = cx + Math.cos(ang) * r;
    const sy = cy + Math.sin(ang) * r;
    ctx.beginPath();
    ctx.strokeStyle = state.theme === 'dark' ? 'rgba(230, 205, 175, 0.15)' : 'rgba(120, 85, 50, 0.15)';
    ctx.moveTo(cx, cy);
    ctx.lineTo(sx, sy);
    ctx.stroke();

    const lx = cx + Math.cos(ang) * (r + 24);
    const ly = cy + Math.sin(ang) * (r + 24);
    ctx.font = '600 11px sans-serif';
    ctx.fillStyle = state.theme === 'dark' ? '#c9bbaa' : '#665342';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(ax.label, lx, ly);
  });

  // Polygons
  const colors = [
    { stroke: '#d97706', fill: 'rgba(217, 119, 6, 0.22)' },   // Warm Amber Gold
    { stroke: '#c2410c', fill: 'rgba(194, 65, 12, 0.22)' },   // Burnt Terracotta
    { stroke: '#15803d', fill: 'rgba(21, 128, 61, 0.22)' },   // Living Forest Green
    { stroke: '#b91c1c', fill: 'rgba(185, 28, 28, 0.22)' },   // Warm Garnet
    { stroke: '#b45309', fill: 'rgba(180, 83, 9, 0.22)' }     // Antique Bronze
  ];

  const selLabs = LABS_DATA.filter(l => state.radarSelectedLabs.includes(l.id));
  selLabs.forEach((lab, li) => {
    const c = colors[li % colors.length];
    ctx.beginPath();
    axes.forEach((ax, ai) => {
      const val = lab.faculties[ax.k].score / 100;
      const ang = ai * step - Math.PI / 2;
      const px = cx + Math.cos(ang) * (r * val);
      const py = cy + Math.sin(ang) * (r * val);
      if (ai === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = c.fill;
    ctx.fill();
    ctx.strokeStyle = c.stroke;
    ctx.lineWidth = 2.5;
    ctx.stroke();
  });

  // Legend
  let lx = 15;
  selLabs.forEach((lab, li) => {
    const c = colors[li % colors.length];
    ctx.fillStyle = c.stroke;
    ctx.fillRect(lx, 15, 10, 10);
    ctx.fillStyle = state.theme === 'dark' ? '#f8f4ee' : '#2b2016';
    ctx.font = '600 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(lab.name, lx + 14, 23);
    lx += ctx.measureText(lab.name).width + 30;
  });
}

// ==========================================
// 2. LAB PROFILES VIEW
// ==========================================
function renderProfilesView(container) {
  const lab = LABS_DATA.find(l => l.id === state.selectedLabId) || LABS_DATA[0];

  container.innerHTML = `
    <!-- Top Selector Bar -->
    <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding: 1rem 0; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color);">
      ${LABS_DATA.map(l => `
        <button class="btn ${l.id === lab.id ? 'btn-primary' : 'btn-ghost'}" style="font-size: 0.8rem; white-space: nowrap;" onclick="switchProfileLab('${l.id}')">
          ${l.name}
        </button>
      `).join('')}
    </div>

    <!-- Lab Profile Header -->
    <div class="profile-header-banner">
      <div style="max-width: 680px;">
        <span style="font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; color: var(--accent-gold);">${lab.type}</span>
        <h2 style="font-size: 2.4rem; font-weight: 800; margin: 0.2rem 0 0.6rem 0;">${lab.name}</h2>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0.8rem;">${lab.mission}</p>
        <span style="font-size: 0.8rem; color: var(--text-dim);">${lab.leadership} • Founded ${lab.founded}</span>
      </div>

      <div class="profile-stat-box">
        <div class="profile-stat-card">
          <div class="num">${lab.composite}</div>
          <span class="sub">Composite (of 100)</span>
        </div>
        <div class="profile-stat-card">
          <div class="num">${lab.rank}</div>
          <span class="sub">Rank (of 8 labs)</span>
        </div>
        <div class="profile-stat-card">
          <div class="num" style="color: ${lab.metaphysics.score <= 40 ? '#4ade80' : '#fb923c'};">${lab.metaphysics.score}</div>
          <span class="sub">${lab.metaphysics.stance}</span>
        </div>
      </div>
    </div>

    <!-- Faculty by Faculty Grid -->
    <div style="margin-bottom: 2rem;">
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem;">Faculty by faculty</h3>
      
      <div class="faculties-grid">
        ${renderFacultyCard('Imagination', lab.faculties.imagination)}
        ${renderFacultyCard('Intuition', lab.faculties.intuition)}
        ${renderFacultyCard('Emotional intelligence', lab.faculties.emotionalIntelligence)}
        ${renderFacultyCard('Attention', lab.faculties.attention)}
        ${renderFacultyCard('Embodiment', lab.faculties.embodiment)}
        ${renderFacultyCard('Wisdom', lab.faculties.wisdom)}
      </div>
    </div>

    <!-- Metaphysical Stance Card -->
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.6rem;">Metaphysical stance</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; max-width: 820px; margin-bottom: 1.5rem;">
        ${lab.metaphysics.summary}
      </p>

      <div style="padding: 1rem 0 2rem 0;">
        <div class="metaphysics-track">
          <div class="metaphysics-pin" style="left: ${lab.metaphysics.score}%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-dim); margin-top: 0.5rem;">
          <span style="color: #4ade80;">Idealist · 0</span>
          <span>50 · Agnostic</span>
          <span style="color: #fb923c;">100 · Computational</span>
        </div>
      </div>

      <div style="border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
        <table class="indicators-table">
          <tbody>
            <tr>
              <td style="font-weight: 700; width: 200px;">Mission framing</td>
              <td>${lab.metaphysics.breakdown.missionFraming.text}</td>
              <td style="font-weight: 600; text-align: right; color: var(--accent-gold);">${lab.metaphysics.breakdown.missionFraming.lean}</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Research agenda</td>
              <td>${lab.metaphysics.breakdown.researchAgenda.text}</td>
              <td style="font-weight: 600; text-align: right; color: var(--accent-gold);">${lab.metaphysics.breakdown.researchAgenda.lean}</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Model language</td>
              <td>${lab.metaphysics.breakdown.modelLanguage.text}</td>
              <td style="font-weight: 600; text-align: right; color: var(--accent-gold);">${lab.metaphysics.breakdown.modelLanguage.lean}</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Leadership statement</td>
              <td>"${lab.metaphysics.breakdown.leadershipQuote.quote}" — <em>${lab.metaphysics.breakdown.leadershipQuote.speaker} (${lab.metaphysics.breakdown.leadershipQuote.venue}, ${lab.metaphysics.breakdown.leadershipQuote.date})</em></td>
              <td style="font-weight: 600; text-align: right; color: var(--accent-gold);">${lab.metaphysics.breakdown.leadershipQuote.lean}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Evidence Ledger Table -->
    <div class="evidence-section">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800;">Evidence ledger</h3>
        <span style="font-size: 0.8rem; color: var(--text-dim);">Every score traces to a public source</span>
      </div>

      <table class="evidence-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Source</th>
            <th>Measure</th>
            <th>Effect</th>
            <th>Finding</th>
          </tr>
        </thead>
        <tbody>
          ${lab.evidenceLedger.map(item => `
            <tr>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim); white-space: nowrap;">${item.date}</td>
              <td style="white-space: nowrap;"><span style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.74rem;">${item.type}</span></td>
              <td style="font-weight: 600; color: var(--text-main);">${item.source}</td>
              <td style="color: var(--accent-gold); font-weight: 600;">${item.measure}</td>
              <td>
                <span class="${item.effect === 'Preserves' ? 'effect-preserves' : 'effect-erodes'}">
                  ${item.effect === 'Preserves' ? '+ Preserves' : '- Erodes'}
                </span>
              </td>
              <td style="color: var(--text-muted); line-height: 1.5;">${item.finding}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderFacultyCard(name, facultyData) {
  return `
    <div class="faculty-card">
      <div class="faculty-card-header">
        <span class="faculty-card-title">${name}</span>
        <span class="faculty-card-score">${facultyData.score}</span>
      </div>

      <span class="preserves-heading">PRESERVES</span>
      <ul class="bullet-list preserves">
        ${facultyData.preserves.length > 0 ? facultyData.preserves.map(p => `<li>${p}</li>`).join('') : '<li style="color: var(--text-dim); font-style: italic;">No documented preservation mechanisms observed</li>'}
      </ul>

      <span class="erodes-heading">ERODES</span>
      <ul class="bullet-list erodes">
        ${facultyData.erodes.length > 0 ? facultyData.erodes.map(e => `<li>${e}</li>`).join('') : '<li style="color: var(--text-dim); font-style: italic;">No acute erosion signals documented</li>'}
      </ul>
    </div>
  `;
}

function switchProfileLab(id) {
  state.selectedLabId = id;
  renderProfilesView(document.getElementById('mainSectionContainer'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 3. METHODOLOGY VIEW
// ==========================================
function renderMethodologyView(container) {
  container.innerHTML = `
    <div class="methodology-hero">
      <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; color: var(--accent-gold); display: block; margin-bottom: 0.5rem;">Methodology</span>
      <h2 style="font-size: 2.6rem; font-weight: 800; margin-bottom: 1.25rem;">What we measure, and why it matters</h2>
      <div style="background: rgba(217, 119, 6, 0.08); border-left: 4px solid var(--accent-gold); padding: 1.4rem; border-radius: 0 12px 12px 0; margin-bottom: 3rem;">
        <p style="font-size: 1.15rem; color: var(--text-main); font-weight: 500; line-height: 1.6;">
          "A faculty is a capacity that grows with use and withers without it. We ask whether a lab's technology exercises these capacities or quietly does the work for us until we can no longer do it ourselves."
        </p>
      </div>

      <!-- 3 Principles -->
      <div class="principles-grid">
        <div class="principle-box">
          <div class="principle-num">01</div>
          <h4 class="principle-title">Conduct over claims</h4>
          <p class="principle-desc">Product defaults and shipped features carry significantly more weight than high-minded PR mission statements or keynote promises.</p>
        </div>
        <div class="principle-box">
          <div class="principle-num">02</div>
          <h4 class="principle-title">Every score is traceable</h4>
          <p class="principle-desc">Each rating directly links to verifiable public evidence in the laboratory's ledger, and labs are invited to provide public responses before updates.</p>
        </div>
        <div class="principle-box">
          <div class="principle-num">03</div>
          <h4 class="principle-title">Metaphysics stands apart</h4>
          <p class="principle-desc">A laboratory's view of the nature of mind shapes everything it builds, so we report it on its own distinct axis instead of averaging it away into an arithmetic aggregate.</p>
        </div>
      </div>

      <!-- The Six Faculties -->
      <div style="margin-bottom: 3.5rem;">
        <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 1.5rem;">The six faculties</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
          ${Object.keys(FACULTY_DEFINITIONS).map(key => {
            const f = FACULTY_DEFINITIONS[key];
            return `
              <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; padding: 1.6rem;">
                <h4 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.4rem;">${f.name}</h4>
                <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.2rem;">${f.definition}</p>

                <span class="preserves-heading">SIGNALS OF PRESERVATION</span>
                <ul class="bullet-list preserves" style="margin-bottom: 1.2rem;">
                  ${f.signalsOfPreservation.map(s => `<li>${s}</li>`).join('')}
                </ul>

                <span class="erodes-heading">SIGNALS OF EROSION</span>
                <ul class="bullet-list erodes">
                  ${f.signalsOfErosion.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- The Seventh Measure Deep-Dive -->
      <div style="background: linear-gradient(145deg, rgba(30, 24, 19, 0.95), rgba(18, 14, 12, 0.98)); border: 1px solid rgba(217, 119, 6, 0.3); border-radius: 16px; padding: 2.2rem; margin-bottom: 3rem;">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 800; color: var(--accent-gold); display: block; margin-bottom: 0.4rem;">The Seventh Measure</span>
        <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.8rem;">Idealism ↔ Computationalism</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; max-width: 820px; margin-bottom: 2rem;">
          This axis asks what a lab takes a mind to be. <strong>Idealism</strong> holds that consciousness is fundamental and cannot be reduced to computation. <strong>Computationalism</strong> holds that mind is information processing, so it can in principle be scaled, copied, or uploaded. We score position, 0 to 100, from the lab's own words and work.
        </p>

        <h4 style="font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); margin-bottom: 1rem;">Core Assessment Indicators</h4>
        <table class="indicators-table" style="margin-bottom: 2.5rem;">
          <thead>
            <tr>
              <th style="width: 220px;">Indicator</th>
              <th>Evaluation Question</th>
            </tr>
          </thead>
          <tbody>
            ${METAPHYSICS_DEFINITION.indicators.map(ind => `
              <tr>
                <td style="font-weight: 700; color: var(--text-main);">${ind.name}</td>
                <td style="color: var(--text-muted);">${ind.question}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <h4 style="font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); margin-bottom: 1rem;">Scale Anchor Definitions</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 1rem;">
          ${METAPHYSICS_DEFINITION.scale.map(s => `
            <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px;">
              <span style="font-family: var(--font-mono); font-weight: 800; color: var(--accent-gold); font-size: 1.1rem; display: block; margin-bottom: 0.2rem;">${s.value}</span>
              <strong style="font-size: 0.88rem; display: block; margin-bottom: 0.4rem;">${s.label}</strong>
              <p style="font-size: 0.78rem; color: var(--text-dim); line-height: 1.4;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 4. ABOUT VIEW
// ==========================================
function renderAboutView(container) {
  container.innerHTML = `
    <div style="max-width: 820px; margin: 0 auto; padding: 2rem 0 4rem 0;">
      <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; color: var(--accent-gold); display: block; margin-bottom: 0.5rem;">About the Initiative</span>
      <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">Preserving the Sacred Sovereignty of Human Faculties</h2>

      <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.25rem;">
        The <strong>Human Faculties Index</strong> is an independent civil research project operating under the auspices of <strong>The Cosmic Intelligence Institute</strong>. It was founded to counter the uncritical, dogmatic reduction of human conscious life into raw algorithmic throughput.
      </p>

      <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
        While conventional AI safety indexes focus primarily on catastrophic cybersecurity, bio-risks, or model jailbreaks, The Cosmic Intelligence Institute tracks the subtle, generational erosion of the human soul: the gradual atrophy of personal imagination, intuitive somatic discernment, genuine relational vulnerability, deep attention, and moral wisdom.
      </p>

      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; padding: 1.6rem; margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem;">Independent Governance & Integrity</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
          To ensure strict intellectual independence, the Index accepts zero funding, compute credits, or advisory roles from commercial frontier AI laboratories. All evaluations are grounded in verifiable, dated citations in our open evidence ledger.
        </p>
      </div>

      <!-- Submission Form -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem;">
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.4rem;">Submit Evidence or Audit Correction</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          Have you documented a newly shipped product default that preserves or erodes a human faculty? Submit it to our peer verification queue.
        </p>

        <form id="submissionForm" onsubmit="handleAboutSubmit(event)" style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.35rem;">Target Laboratory</label>
            <select id="subLab" style="width: 100%; padding: 0.6rem; background: var(--bg-modal); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 8px;">
              ${LABS_DATA.map(l => `<option value="${l.id}">${l.name}</option>`).join('')}
              <option value="new">+ Propose New Laboratory</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.35rem;">Faculty / Measure Affected</label>
            <select id="subFaculty" style="width: 100%; padding: 0.6rem; background: var(--bg-modal); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 8px;">
              <option value="imagination">Imagination</option>
              <option value="intuition">Intuition</option>
              <option value="emotionalIntelligence">Emotional intelligence</option>
              <option value="attention">Attention</option>
              <option value="embodiment">Embodiment</option>
              <option value="wisdom">Wisdom</option>
              <option value="metaphysics">The Seventh Measure (Metaphysics)</option>
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.35rem;">Public Citation / Verifiable URL</label>
            <input type="text" id="subUrl" required placeholder="https://..." style="width: 100%; padding: 0.6rem; background: var(--bg-modal); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 8px;" />
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.35rem;">Specific Shipped Behavior Finding</label>
            <textarea id="subFinding" rows="4" required placeholder="Describe the shipped product default or policy change and whether it preserves or erodes the faculty..." style="width: 100%; padding: 0.6rem; background: var(--bg-modal); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 8px; resize: vertical;"></textarea>
          </div>

          <button type="submit" class="btn btn-primary" style="justify-content: center; padding: 0.75rem; margin-top: 0.5rem;">
            Submit to Peer Audit Queue
          </button>
        </form>
      </div>
    </div>
  `;
}

function handleAboutSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('submissionForm');
  if (!form) return;
  form.innerHTML = `
    <div style="text-align: center; padding: 2.5rem 1rem;">
      <div style="font-size: 2.5rem; color: #4ade80; margin-bottom: 0.5rem;">✓</div>
      <h4 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem;">Audit Evidence Received</h4>
      <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; max-width: 440px; margin: 0 auto;">
        Your submission has been queued for verification by the editorial team. Thank you for holding AI development accountable to human flourishing.
      </p>
    </div>
  `;
}
