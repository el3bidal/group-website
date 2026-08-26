// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
    const label = document.querySelector('.theme-label');
    if (label) {
        label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeLabel();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll state
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scroll-animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

scrollElements.forEach(el => observer.observe(el));

// Back to top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

// ── Config Population ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USER_CONFIG === 'undefined') return;
  //populateSimpleFields(USER_CONFIG);
  populateStats(USER_CONFIG);
  populateLists(USER_CONFIG);
});

/* function populateSimpleFields(cfg) {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (key === 'role_university') el.innerHTML = `${cfg.role} at ${cfg.university}`;
    else if (cfg[key] !== undefined) el.innerHTML = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
  if (cfg.photo) {
    const av = document.querySelector('.image-placeholder, .hero-photo');
    if (av) av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  }
} */

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

// Keep track of how many publications are currently shown
let visiblePubs = 7; // Initial number of publications to display
const PUBS_PER_LOAD = 7; // How many to show per "Load More" click

function populateLists(cfg) {
  // ── Publications with Load More ──────────────────────────────────────────
  const pubList = document.getElementById('cfg-publications');
  if (pubList && cfg.publications?.length) {
    
    // Function to render the current slice of publications
    function renderPubs() {
      const itemsToRender = cfg.publications.slice(0, visiblePubs);
      
      pubList.innerHTML = itemsToRender.map(p => `
        <article class="pub-card ${p.abstractImg ? 'has-abstract' : ''}" data-year="${p.year}">
          <div class="pub-year">${p.year}</div>

          <div class="pub-content">
            <div class="pub-header">
              <h3 class="pub-title">${p.title}</h3>
              <div class="pub-links">
                ${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k.toUpperCase()}</a>`).join('')}
              </div>
            </div>
            <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
            <p class="pub-venue">${p.venue}</p>
          </div>

          ${p.abstractImg ? `
            <div class="pub-abstract">
              <img src="${p.abstractImg}" alt="Graphical abstract for ${p.title}" class="pub-abstract-img" />
            </div>
          ` : ''}
        </article>
      `).join('');

      // Manage the "Load More" button container
      let btnWrapper = document.getElementById('pub-load-more-wrapper');
      if (!btnWrapper) {
        btnWrapper = document.createElement('div');
        btnWrapper.id = 'pub-load-more-wrapper';
        btnWrapper.className = 'load-more-container';
        pubList.after(btnWrapper);
      }

      // Hide or show the button depending on whether more items remain
      if (visiblePubs >= cfg.publications.length) {
        btnWrapper.innerHTML = '';
      } else {
        btnWrapper.innerHTML = `<button id="load-more-pubs-btn" class="pub-link load-more-btn">Load More Publications</button>`;
        
        // Attach click listener
        document.getElementById('load-more-pubs-btn').onclick = () => {
          visiblePubs += PUBS_PER_LOAD;
          renderPubs();
        };
      }
    }

    renderPubs();
  }

  // ── Projects ─────────────────────────────────────────────────────────────
  const projGrid = document.getElementById('cfg-projects');
  if (projGrid && cfg.projects?.length) {
    projGrid.innerHTML = cfg.projects.map(p => `
      <article class="project-card">
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </article>`).join('');
  }

  // ── News ─────────────────────────────────────────────────────────────────
  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news?.length) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        <div class="news-content">
          <span class="news-badge">${n.badge}</span>
          <span class="news-text">${n.text}</span>
        </div>
      </div>`).join('');
  }

  // ── Experience ───────────────────────────────────────────────────────────
  const expGrid = document.getElementById('cfg-experience');
  if (expGrid) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="exp-category"><h3>Education</h3>${edu.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.degree}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (exp.length) html += `<div class="exp-category"><h3>Experience</h3>${exp.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.role}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (html) expGrid.innerHTML = html;
  }
}

function populateStats(cfg) {
  const statsContainer = document.getElementById('cfg-stats') || document.querySelector('.hero-stats');
  if (!statsContainer || !cfg.stats?.length) return;

  // Get the exact count of items in the publications array (or fall back to 20)
  const publicationCount = cfg.publications ? cfg.publications.length : 20;

  statsContainer.innerHTML = cfg.stats.map(s => {
    // If the label is "Publications", use the dynamic array length
    const valueToDisplay = s.label.toLowerCase() === 'publications' 
      ? `${publicationCount}+` 
      : s.value;

    return `
      <div class="stat">
        <span class="stat-number">${valueToDisplay}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `;
  }).join('');
}