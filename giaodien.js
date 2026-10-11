// ========================================================
// HỆ THỐNG GIAO DIỆN (THEMES) - UTARA
// ========================================================

const THEMES = [
  { id: 'default', name: 'Mặc định (Pastel)', icon: '🌸' },
  { id: 'toxic', name: 'Độc Dược (Toxic Cyber)', icon: '☣️' }
];

let currentTheme = localStorage.getItem('utara_current_theme') || 'default';

let hexCanvas, hexCtx;
let toxicHexagons = [];
let hexAnimationId = null;

document.addEventListener('DOMContentLoaded', () => {
  createThemeSwitcherUI();
  setupHexagonCanvas();
  applyTheme(currentTheme);

  window.addEventListener('pointerdown', handleToxicClickRipple);
});

function createThemeSwitcherUI() {
  const container = document.createElement('div');
  container.className = 'theme-switcher-container';
  container.id = 'themeSwitcherContainer';

  const indicator = document.createElement('div');
  indicator.className = 'theme-indicator-arrow';
  indicator.id = 'themeIndicatorArrow';
  indicator.innerHTML = `<span>◀</span>`;

  container.appendChild(indicator);

  THEMES.forEach((theme) => {
    const btn = document.createElement('button');
    btn.className = `theme-btn ${theme.id === currentTheme ? 'active' : ''}`;
    btn.id = `theme-btn-${theme.id}`;
    btn.title = theme.name;
    btn.innerHTML = `<span class="theme-icon">${theme.icon}</span>`;
    
    btn.addEventListener('click', () => {
      applyTheme(theme.id);
    });

    container.appendChild(btn);
  });

  document.body.appendChild(container);
  setTimeout(updateArrowPosition, 100);
}

function updateArrowPosition() {
  if (window.innerWidth <= 768) return;
  
  const activeBtn = document.getElementById(`theme-btn-${currentTheme}`);
  const arrow = document.getElementById('themeIndicatorArrow');
  if (activeBtn && arrow) {
    const offsetTop = activeBtn.offsetTop + (activeBtn.offsetHeight / 2) - (arrow.offsetHeight / 2);
    arrow.style.top = `${offsetTop}px`;
  }
}

function applyTheme(themeId) {
  currentTheme = themeId;
  localStorage.setItem('utara_current_theme', themeId);

  if (themeId === 'toxic') {
    document.body.classList.add('theme-toxic');
    startHexagonAnimation();
  } else {
    document.body.classList.remove('theme-toxic');
    stopHexagonAnimation();
  }

  document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`theme-btn-${themeId}`);
  if (activeBtn) activeBtn.classList.add('active');

  updateArrowPosition();
}

// HIỆU ỨNG RIPPLE
function handleToxicClickRipple(e) {
  if (currentTheme !== 'toxic') return;

  const ripple = document.createElement('div');
  ripple.className = 'toxic-ripple';
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  document.body.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
}

// CANVAS LỤC GIÁC ROBOT
function setupHexagonCanvas() {
  hexCanvas = document.createElement('canvas');
  hexCanvas.id = 'toxic-hex-canvas';
  hexCanvas.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 1;
    display: none;
  `;
  document.body.appendChild(hexCanvas);
  hexCtx = hexCanvas.getContext('2d');

  function resize() {
    hexCanvas.width = window.innerWidth;
    hexCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
}

function drawHexagon(ctx, x, y, r, rotation = 0) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = rotation + (i * Math.PI) / 3;
    const px = x + r * Math.cos(angle);
    const py = y + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function spawnHexagon() {
  if (currentTheme !== 'toxic') return;
  if (toxicHexagons.length > 8) return;

  const radius = Math.random() * 50 + 40;
  toxicHexagons.push({
    x: Math.random() * (window.innerWidth - 100) + 50,
    y: Math.random() * (window.innerHeight - 100) + 50,
    radius: radius,
    rotation: Math.random() * Math.PI,
    rotSpeed: (Math.random() - 0.5) * 0.006,
    alpha: 0,
    state: 'in',
    holdTimer: Math.random() * 80 + 40,
    maxAlpha: Math.random() * 0.45 + 0.35
  });
}

function loopHexagons() {
  hexCtx.clearRect(0, 0, hexCanvas.width, hexCanvas.height);

  if (Math.random() < 0.02) {
    spawnHexagon();
  }

  for (let i = toxicHexagons.length - 1; i >= 0; i--) {
    const h = toxicHexagons[i];

    if (h.state === 'in') {
      h.alpha += 0.008;
      if (h.alpha >= h.maxAlpha) {
        h.alpha = h.maxAlpha;
        h.state = 'hold';
      }
    } else if (h.state === 'hold') {
      h.holdTimer--;
      if (h.holdTimer <= 0) h.state = 'out';
    } else if (h.state === 'out') {
      h.alpha -= 0.006;
      if (h.alpha <= 0) {
        toxicHexagons.splice(i, 1);
        continue;
      }
    }

    h.rotation += h.rotSpeed;

    hexCtx.save();
    hexCtx.strokeStyle = `rgba(57, 255, 20, ${h.alpha})`;
    hexCtx.fillStyle = `rgba(16, 185, 129, ${h.alpha * 0.08})`;
    hexCtx.lineWidth = 1.6;
    hexCtx.shadowColor = '#00ff66';
    hexCtx.shadowBlur = 14;

    drawHexagon(hexCtx, h.x, h.y, h.radius, h.rotation);
    hexCtx.fill();
    hexCtx.stroke();

    hexCtx.shadowBlur = 6;
    hexCtx.lineWidth = 1;
    drawHexagon(hexCtx, h.x, h.y, h.radius * 0.6, -h.rotation);
    hexCtx.stroke();

    hexCtx.beginPath();
    hexCtx.arc(h.x, h.y, 2.5, 0, Math.PI * 2);
    hexCtx.fillStyle = `rgba(57, 255, 20, ${h.alpha * 1.5})`;
    hexCtx.fill();

    hexCtx.restore();
  }

  hexAnimationId = requestAnimationFrame(loopHexagons);
}

function startHexagonAnimation() {
  if (hexCanvas) hexCanvas.style.display = 'block';
  if (!hexAnimationId) {
    loopHexagons();
  }
}

function stopHexagonAnimation() {
  if (hexCanvas) hexCanvas.style.display = 'none';
  if (hexAnimationId) {
    cancelAnimationFrame(hexAnimationId);
    hexAnimationId = null;
  }
  toxicHexagons = [];
}