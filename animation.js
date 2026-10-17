var currentIndex = 0;
var currentCategory = 'all';
var GITHUB_USER = 'chisaki167';
var GITHUB_REPO = 'chisaki167.github.io'; 

var MANUAL_RSP_LIST = [
  { name: "RSP by chisaki167 (Nakano Miku).zip", driveUrl: "https://drive.google.com/file/d/1FVI24eQCYtYzjeaYVLBPpwP7sfUlpPII/view?usp=drivesdk" },
  { name: "RSP by chisaki167 (Alya).zip", driveUrl: "https://drive.google.com/file/d/19JFlifbPNEAZx9t6iQ5lPh_Nerh6vY6z/view?usp=drivesdk" },
  { name: "RSP by chisaki167 (Haimiya Mio).zip", driveUrl: "https://drive.google.com/file/d/1jRp8GNE3T6n0ZrFtRuY9YcwudJ-fmxF3/view?usp=drivesdk" }
];

function convertDriveLink(url) {
  var match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) return 'https://drive.google.com/uc?export=download&id=' + match[1];
  return url;
}

function updateLiquidPill(btn) {
  var pill = document.getElementById('liquidPill');
  if (pill && btn) {
    pill.style.left = btn.offsetLeft + 'px';
    pill.style.width = btn.offsetWidth + 'px';
  }
}

function toggleBackground() {
  var v = document.getElementById('bgVideo');
  var o = document.getElementById('bgOverlay');
  var b = document.getElementById('bgToggleBtn');

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

function applyFilters() {
  var query = document.getElementById('searchInput').value.toLowerCase().trim();
  var cards = document.querySelectorAll('.card');
  for (var m = 0; m < cards.length; m++) {
    var card = cards[m];
    var title = card.querySelector('h2').innerText.toLowerCase();
    var filename = card.querySelector('p').innerText.toLowerCase();
    var matchesCategory = (currentCategory === 'all' || card.dataset.category === currentCategory);
    var matchesSearch = (query === '' || title.indexOf(query) !== -1 || filename.indexOf(query) !== -1);
    
    if (matchesCategory && matchesSearch) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  }
}

function handleSearch() {
  applyFilters();
}

function filterItems(category, event) {
  var clickedBtn = event.currentTarget;
  var newIndex = parseInt(clickedBtn.getAttribute('data-index'));
  
  if (newIndex === currentIndex && category === currentCategory) return;

  var buttons = document.querySelectorAll('.filter-btn');
  for (var k = 0; k < buttons.length; k++) buttons[k].classList.remove('active');
  clickedBtn.classList.add('active');

  updateLiquidPill(clickedBtn);

  var grid = document.getElementById('itemGrid');
  var dirClass = newIndex > currentIndex ? 'slide-out-left' : 'slide-in-right';
  var enterClass = newIndex > currentIndex ? 'slide-in-right' : 'slide-out-left';

  grid.classList.add(dirClass);

  currentCategory = category;

  setTimeout(function() {
    applyFilters();

    grid.classList.remove(dirClass);
    grid.classList.add(enterClass);
    
    void grid.offsetWidth;
    grid.classList.remove('slide-in-right', 'slide-out-left');

    currentIndex = newIndex;
  }, 300);
}

async function fetchFolderContent(folderPath, category, badgeText, allowedExt) {
  try {
    var apiUrl = 'https://api.github.com/repos/' + GITHUB_USER + '/' + GITHUB_REPO + '/contents/' + folderPath + '?per_page=100';
    var response = await fetch(apiUrl);
    if (response.ok) {
      var data = await response.json();
      var list = [];
      data.forEach(function(file) {
        var isAllowed = false;
        for (var j = 0; j < allowedExt.length; j++) {
          if (file.name.endsWith(allowedExt[j])) { isAllowed = true; break; }
        }
        if (isAllowed) {
          list.push({
            name: file.name,
            category: category,
            badgeText: badgeText,
            download_url: file.download_url,
            size: file.size
          });
        }
      });
      return list;
    }
  } catch (err) {}
  return [];
}

async function loadAllContent() {
  var grid = document.getElementById('itemGrid');
  var allItems = [];

  var mods = await fetchFolderContent('mods', 'mod', 'Mod', ['.jar']);
  var rsps = MANUAL_RSP_LIST.map(function(rsp) {
    return {
      name: rsp.name,
      category: 'rsp',
      badgeText: 'Resource Pack',
      download_url: convertDriveLink(rsp.driveUrl),
      size: null
    };
  });
  var litematics = await fetchFolderContent('litematicas', 'litematica', 'Litematica', ['.litematic', '.zip']);
  var maps = await fetchFolderContent('saves', 'map', 'Map', ['.zip']);

  allItems = allItems.concat(mods, rsps, litematics, maps);

  if (allItems.length === 0) {
    grid.innerHTML = '<div class="loading">Không tìm thấy tài nguyên nào.</div>';
    return;
  }

  var htmlContent = '';
  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i];
    var displayName = item.name.substring(0, item.name.lastIndexOf('.')) || item.name;
    var fileSizeMB = item.size ? (item.size / (1024 * 1024)).toFixed(1) : 'Google Drive';

    htmlContent += '\
      <div class="card" data-category="' + item.category + '">\
        <div class="card-header">\
          <span class="badge ' + item.category + '">' + item.badgeText + '</span>\
          <span class="version">Java Edition</span>\
        </div>\
        <h2>' + displayName + '</h2>\
        <p>File: ' + item.name + '</p>\
        <div class="card-footer">\
          <span class="version">' + fileSizeMB + ' ' + (item.size ? 'MB' : '') + '</span>\
          <a href="' + item.download_url + '" class="btn-dl" target="_blank" download>Tải xuống →</a>\
        </div>\
      </div>\
    ';
  }

  grid.innerHTML = htmlContent;
  applyFilters();
}

window.addEventListener('DOMContentLoaded', function() {
  var bgStatus = localStorage.getItem('bg_enabled');
  if (bgStatus === 'false') {
    var v = document.getElementById('bgVideo');
    var o = document.getElementById('bgOverlay');
    var b = document.getElementById('bgToggleBtn');
    v.classList.add('hidden');
    o.classList.add('hidden');
    b.innerHTML = '<span>🎬 Nền: Tắt</span>';
  }
  
  var activeBtn = document.querySelector('.filter-btn.active');
  if (activeBtn) updateLiquidPill(activeBtn);

  loadAllContent();
});