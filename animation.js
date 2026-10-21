var currentIndex = 0, currentCategory = 'all', GITHUB_USER = 'chisaki167', GITHUB_REPO = 'chisaki167.github.io';

function convertDriveLink(u) {
  var m = u.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (m && m[1]) return 'https://drive.google.com/uc?export=download&id=' + m[1];
  return u;
}

function updateLiquidPill(b) {
  var p = document.getElementById('liquidPill');
  if (p && b) {
    p.style.left = b.offsetLeft + 'px';
    p.style.width = b.offsetWidth + 'px';
  }
}

function toggleBackground() {
  var v = document.getElementById('bgVideo'), o = document.getElementById('bgOverlay'), b = document.getElementById('bgToggleBtn');
  v.classList.toggle('hidden');
  o.classList.toggle('hidden');
  if (v.classList.contains('hidden')) {
    b.innerHTML = '<span>🎬 Nền: Tắt</span>';
    localStorage.setItem('bg_enabled', 'false');
  } else {
    b.innerHTML = '<span>🎬 Nền: Bật</span>';
    localStorage.setItem('bg_enabled', 'true');
  }
}

function initCardSpotlight() {
  var c = document.querySelectorAll('.card');
  c.forEach(function(d) {
    d.addEventListener('mousemove', function(e) {
      var r = d.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      d.style.setProperty('--mouse-x', x + 'px');
      d.style.setProperty('--mouse-y', y + 'px');
    });
  });
}

/* ĐIỀU CHỈNH TƯƠNG TÁC CHUYỂN ĐỘNG LỎNG (LIQUID GLASS) */
function initLiquidGlassInteractions() {
  var glassNav = document.querySelector('.glassContainer');
  var displacementMap = document.getElementById('glassDisplacement');

  if (glassNav && displacementMap) {
    glassNav.addEventListener('mousemove', function(e) {
      var rect = glassNav.getBoundingClientRect();
      var relX = (e.clientX - rect.left) / rect.width;
      // Tạo dao động độ cong lỏng lượn sóng từ 6px đến 18px theo vị trí chuột
      var scaleVal = 6 + Math.sin(relX * Math.PI) * 12;
      displacementMap.setAttribute('scale', scaleVal);
    });

    glassNav.addEventListener('mouseleave', function() {
      // Trả lại độ méo lỏng mặc định mượt mà
      displacementMap.setAttribute('scale', '8');
    });
  }
}

function applyFilters() {
  var q = document.getElementById('searchInput').value.toLowerCase().trim(), cards = document.querySelectorAll('.card'), vi = 0;
  for (var m = 0; m < cards.length; m++) {
    var c = cards[m], t = c.querySelector('h2').innerText.toLowerCase(), f = c.querySelector('p').innerText.toLowerCase(), mc = (currentCategory === 'all' || c.dataset.category === currentCategory), ms = (q === '' || t.indexOf(q) !== -1 || f.indexOf(q) !== -1);
    if (mc && ms) {
      c.classList.remove('is-hidden');
      c.classList.remove('fade-in-anim');
      void c.offsetWidth;
      c.classList.add('fade-in-anim');
      c.style.animationDelay = (vi * 0.05) + 's';
      vi++;
    } else {
      c.classList.add('is-hidden');
    }
  }
  initCardSpotlight();
}

function handleSearch() {
  applyFilters();
}

function filterItems(cat, e) {
  var cb = e.currentTarget, ni = parseInt(cb.getAttribute('data-index'));
  if (ni === currentIndex && cat === currentCategory) return;
  var btns = document.querySelectorAll('.filter-btn');
  for (var k = 0; k < btns.length; k++) btns[k].classList.remove('active');
  cb.classList.add('active');
  updateLiquidPill(cb);
  var g = document.getElementById('itemGrid'), dc = ni > currentIndex ? 'slide-out-left' : 'slide-in-right', ec = ni > currentIndex ? 'slide-in-right' : 'slide-out-left';
  g.classList.add(dc);
  currentCategory = cat;
  setTimeout(function() {
    applyFilters();
    g.classList.remove(dc);
    g.classList.add(ec);
    void g.offsetWidth;
    g.classList.remove('slide-in-right', 'slide-out-left');
    currentIndex = ni;
  }, 250);
}

async function fetchFolderContent(fp, cat, bt, ext) {
  try {
    var api = 'https://api.github.com/repos/' + GITHUB_USER + '/' + GITHUB_REPO + '/contents/' + fp + '?per_page=100', res = await fetch(api);
    if (res.ok) {
      var data = await res.json(), list = [];
      data.forEach(function(file) {
        var ok = false;
        for (var j = 0; j < ext.length; j++) {
          if (file.name.endsWith(ext[j])) { ok = true; break; }
        }
        if (ok) {
          list.push({ name: file.name, category: cat, badgeText: bt, download_url: file.download_url, size: file.size });
        }
      });
      return list;
    }
  } catch (err) {}
  return [];
}

async function loadAllContent() {
  var g = document.getElementById('itemGrid'), allItems = [];
  var mods = await fetchFolderContent('mods', 'mod', 'Mod', ['.jar']);
  var rsps = await fetchFolderContent('rsp', 'rsp', 'Resource Pack', ['.zip']);
  var lit = await fetchFolderContent('litematicas', 'litematica', 'Litematica', ['.litematic', '.zip']);
  var maps = await fetchFolderContent('saves', 'map', 'Map', ['.zip']);

  allItems = allItems.concat(mods, rsps, lit, maps);

  if (allItems.length === 0) {
    g.innerHTML = '<div class="loading">Không tìm thấy tài nguyên nào.</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i], dn = item.name.substring(0, item.name.lastIndexOf('.')) || item.name, fs = item.size ? (item.size / (1024 * 1024)).toFixed(1) : '0.0';
    html += `<div class="card" data-category="${item.category}"><div class="card-header"><span class="badge ${item.category}">${item.badgeText}</span><span class="version">Java Edition</span></div><div class="card-body"><h2>${dn}</h2><p>File: ${item.name}</p></div><div class="card-footer"><span class="version">${fs} MB</span><a href="${item.download_url}" class="btn-dl" target="_blank" download>Tải xuống →</a></div></div>`;
  }

  g.innerHTML = html;
  applyFilters();
}

window.addEventListener('DOMContentLoaded', function() {
  var bs = localStorage.getItem('bg_enabled');
  if (bs === 'false') {
    var v = document.getElementById('bgVideo'), o = document.getElementById('bgOverlay'), b = document.getElementById('bgToggleBtn');
    if (v) v.classList.add('hidden');
    if (o) o.classList.add('hidden');
    if (b) b.innerHTML = '<span>🎬 Nền: Tắt</span>';
  }

  var ab = document.querySelector('.filter-btn.active');
  if (ab) updateLiquidPill(ab);

  window.addEventListener('resize', function() {
    var ca = document.querySelector('.filter-btn.active');
    if (ca) updateLiquidPill(ca);
  });

  initLiquidGlassInteractions();
  loadAllContent();
}); 