#!/usr/bin/env node
/* build-verzeichnis.js
   Schreibt das Therapeut:innen-Verzeichnis aus js/data.js fest in die HTML-Seiten,
   damit Suchmaschinen alle Einträge (inkl. Website-Links) direkt im Quelltext sehen.

   Aktualisiert:
     verzeichnis.html : Bezirksgruppen, Filter-Chips, Anzahl, Listen-Stand, Schema.org
     index.html       : Zahl der Therapeut:innen und der Wiener Bezirke

   Aufruf (im Repo-Ordner):  node tools/build-verzeichnis.js
   Läuft automatisch über .github/workflows/build-verzeichnis.yml,
   sobald js/data.js auf GitHub geändert wird. */

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

/* data.js und directory.js in einer abgeschlossenen Umgebung laden,
   genau wie der Browser sie lädt (ohne document). */
const ctx = vm.createContext({});
vm.runInContext(read('js/data.js'), ctx, { filename: 'js/data.js' });
vm.runInContext(read('js/directory.js'), ctx, { filename: 'js/directory.js' });
const { THERAPISTS, LIST_DATE, POPDir } = vm.runInContext(
  '({ THERAPISTS, LIST_DATE, POPDir: globalThis.POPDir })', ctx);

if (!Array.isArray(THERAPISTS) || THERAPISTS.length === 0) {
  throw new Error('THERAPISTS in js/data.js ist leer oder fehlt.');
}

const total = THERAPISTS.length;
const wienBezirke = new Set(
  THERAPISTS.map((t) => t.plz).filter((plz) => /^1[0-2]\d0$/.test(plz || ''))
).size;

/* Marker <!-- BUILD:name -->…<!-- /BUILD:name --> ersetzen */
function fill(html, name, content) {
  const re = new RegExp('(<!-- BUILD:' + name + ' -->)[\\s\\S]*?(<!-- /BUILD:' + name + ' -->)');
  if (!re.test(html)) throw new Error('Marker BUILD:' + name + ' nicht gefunden.');
  return html.replace(re, (m, a, b) => a + content + b);
}

function escHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------- verzeichnis.html ---------- */
let v = read('verzeichnis.html');
const groups = POPDir.buildGroups(THERAPISTS, false);
const schemaJson = JSON.stringify(POPDir.schemaObject(THERAPISTS)).replace(/</g, '\\u003c');

v = fill(v, 'groups', POPDir.groupsHTML(groups));
v = fill(v, 'chips', POPDir.chipsHTML(THERAPISTS));
v = fill(v, 'count', POPDir.countText(total));
v = fill(v, 'schema', '<script type="application/ld+json" id="dir-schema">' + schemaJson + '</script>');
v = v.replace(/(<strong data-list-date>)[\s\S]*?(<\/strong>)/, (m, a, b) => a + escHtml(LIST_DATE) + b);
fs.writeFileSync(path.join(root, 'verzeichnis.html'), v);

/* ---------- index.html ---------- */
let idx = read('index.html');
const setNum = (html, key, value) => {
  const re = new RegExp('(<div class="num" data-build="' + key + '">)[^<]*(</div>)');
  if (!re.test(html)) throw new Error('data-build="' + key + '" in index.html nicht gefunden.');
  return html.replace(re, (m, a, b) => a + value + b);
};
idx = setNum(idx, 'count', total);
idx = setNum(idx, 'bezirke', wienBezirke);
fs.writeFileSync(path.join(root, 'index.html'), idx);

console.log('Verzeichnis erzeugt: ' + total + ' Einträge, ' + wienBezirke +
            ' Wiener Bezirke, Stand "' + LIST_DATE + '".');
