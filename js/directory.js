/* directory.js — rendert das Therapeut*innen-Verzeichnis nach Bezirken,
   inkl. Suche, Bezirksfilter und Schema.org-Daten für SEO.
   Benötigt: js/data.js (THERAPISTS, LIST_DATE) */

(function () {
  const groupsEl = document.getElementById('dir-groups');
  if (!groupsEl) return;

  const searchEl = document.getElementById('dir-search');
  const countEl  = document.getElementById('dir-count');
  const chipsEl  = document.getElementById('dir-chips');
  const emptyEl  = document.getElementById('dir-empty');
  const dateEls  = document.querySelectorAll('[data-list-date]');

  dateEls.forEach(function (el) { el.textContent = LIST_DATE; });

  /* ---------- Helpers ---------- */
  function initials(name) {
    const parts = name.trim().split(/\s+/);
    const first = parts[0] ? parts[0][0] : '';
    const last  = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  }

  function fullName(t) {
    return [t.title, t.name, t.suffix].filter(Boolean).join(' ');
  }

  function telHref(phone) {
    return 'tel:' + phone.replace(/[^+\d]/g, '');
  }

  function prettyUrl(url) {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }

  // Icons
  const IC = {
    pin:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    web:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>'
  };

  /* ---------- Gruppieren nach Bezirk ---------- */
  function buildGroups(list) {
    const map = {};
    list.forEach(function (t) {
      const key = t.plz || '____';
      if (!map[key]) map[key] = { plz: t.plz, bezirk: t.bezirk, items: [] };
      map[key].items.push(t);
    });
    // sortiere: PLZ aufsteigend, "ohne" ganz ans Ende
    return Object.values(map).sort(function (a, b) {
      if (!a.plz) return 1;
      if (!b.plz) return -1;
      return a.plz.localeCompare(b.plz);
    });
  }

  /* ---------- Karte rendern ---------- */
  function cardHTML(t) {
    const rows = [];
    if (t.address) {
      const addr = t.address + (t.addressNote ? ' · ' + t.addressNote : '') +
                   (t.plz ? ', ' + t.plz + ' Wien' : '');
      const maps = 'https://www.google.com/maps/search/?api=1&query=' +
                   encodeURIComponent(t.address + ', ' + t.plz + ' Wien');
      rows.push('<div class="t-row">' + IC.pin +
        '<a href="' + maps + '" target="_blank" rel="noopener">' + addr + '</a></div>');
    }
    if (t.phone) {
      rows.push('<div class="t-row">' + IC.phone +
        '<a href="' + telHref(t.phone) + '">' + t.phone + '</a></div>');
    }
    if (t.email) {
      rows.push('<div class="t-row">' + IC.mail +
        '<a href="mailto:' + t.email + '">' + t.email + '</a></div>');
    }
    if (t.website) {
      rows.push('<div class="t-row">' + IC.web +
        '<a href="' + t.website + '" target="_blank" rel="noopener">' + prettyUrl(t.website) + '</a></div>');
    }

    const tags = [];
    (t.specializations || []).forEach(function (s) {
      tags.push('<span class="tag">' + s + '</span>');
    });
    (t.languages || []).forEach(function (l) {
      tags.push('<span class="tag lang">' + l + '</span>');
    });

    const noteHTML = t.note
      ? '<div class="t-row" style="margin-top:.3rem"><span class="tag note">ℹ ' + t.note + '</span></div>'
      : '';

    return '' +
      '<article class="t-card">' +
        '<div class="t-card-top">' +
          '<div class="t-avatar" aria-hidden="true">' + initials(t.name) + '</div>' +
          '<div>' +
            '<h3 class="t-name">' + fullName(t) + '</h3>' +
            (t.address ? '<div class="t-address">' + (t.bezirk || '') + '</div>' :
                         '<div class="t-address">Kontakt online</div>') +
          '</div>' +
        '</div>' +
        '<div class="t-meta">' + (rows.join('') || '<div class="t-row" style="color:var(--muted)">Kontaktdaten folgen</div>') + noteHTML + '</div>' +
        (tags.length ? '<div class="t-tags">' + tags.join('') + '</div>' : '') +
      '</article>';
  }

  /* ---------- Gruppen rendern ---------- */
  function render(list) {
    const groups = buildGroups(list);
    let total = 0;
    let html = '';

    groups.forEach(function (g) {
      total += g.items.length;
      const title = g.bezirk || 'Ohne feste Praxisadresse';
      const plzBadge = g.plz ? '<span class="plz">' + g.plz + '</span>' : '';
      const cards = g.items.map(cardHTML).join('');
      html += '' +
        '<section class="district" id="bz-' + (g.plz || 'online') + '">' +
          '<div class="district-head">' +
            '<h2>' + plzBadge + title + '</h2>' +
            '<span class="cnt">' + g.items.length +
              (g.items.length === 1 ? ' Therapeut:in' : ' Therapeut:innen') + '</span>' +
          '</div>' +
          '<div class="therapist-grid">' + cards + '</div>' +
        '</section>';
    });

    groupsEl.innerHTML = html;
    if (emptyEl) emptyEl.style.display = total === 0 ? 'block' : 'none';
    if (countEl) {
      countEl.textContent = total + (total === 1 ? ' Eintrag' : ' Einträge');
    }
  }

  /* ---------- Filter-Logik ---------- */
  let activeDistrict = 'all';

  function applyFilters() {
    const q = (searchEl ? searchEl.value : '').trim().toLowerCase();
    const filtered = THERAPISTS.filter(function (t) {
      const matchDistrict = activeDistrict === 'all' || t.plz === activeDistrict ||
                            (activeDistrict === 'online' && !t.plz);
      if (!matchDistrict) return false;
      if (!q) return true;
      const hay = [
        t.name, t.title, t.suffix, t.bezirk, t.plz, t.address,
        (t.languages || []).join(' '),
        (t.specializations || []).join(' ')
      ].join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    render(filtered);
  }

  /* ---------- Chips bauen ---------- */
  function buildChips() {
    if (!chipsEl) return;
    const groups = buildGroups(THERAPISTS);
    let html = '<button class="chip active" data-d="all">Alle Bezirke</button>';
    groups.forEach(function (g) {
      const val = g.plz || 'online';
      const label = g.plz ? g.plz + ' ' + g.bezirk : 'Online';
      html += '<button class="chip" data-d="' + val + '">' + label + '</button>';
    });
    chipsEl.innerHTML = html;

    chipsEl.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () {
        chipsEl.querySelectorAll('.chip').forEach(function (x) { x.classList.remove('active'); });
        c.classList.add('active');
        activeDistrict = c.getAttribute('data-d');
        applyFilters();
      });
    });
  }

  /* ---------- Schema.org für SEO ---------- */
  function injectSchema() {
    const items = THERAPISTS.map(function (t, i) {
      const node = {
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": ["MedicalBusiness", "Psychiatric"],
          "name": fullName(t),
          "medicalSpecialty": "Psychotherapy",
          "description": "Psychoanalytisch orientierte Psychotherapie (POP)" +
            (t.specializations && t.specializations.length ? " — " + t.specializations.join(", ") : "")
        }
      };
      if (t.address) {
        node.item.address = {
          "@type": "PostalAddress",
          "streetAddress": t.address,
          "postalCode": t.plz,
          "addressLocality": "Wien",
          "addressCountry": "AT"
        };
      }
      if (t.phone)   node.item.telephone = t.phone;
      if (t.email)   node.item.email = t.email;
      if (t.website) node.item.url = t.website;
      if (t.languages && t.languages.length) node.item.availableLanguage = t.languages;
      return node;
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "POP-Therapeut:innen mit freien Therapieplätzen in Wien",
      "itemListElement": items
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  }

  /* ---------- Init ---------- */
  buildChips();
  render(THERAPISTS);
  injectSchema();
  if (searchEl) searchEl.addEventListener('input', applyFilters);
})();
