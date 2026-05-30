# psychotherapie-pop.at

Statische Website über die Psychoanalytisch orientierte Psychotherapie (POP)
mit einem Verzeichnis von Therapeut:innen mit freien Plätzen in Wien,
sortiert nach Bezirken.

Die Seite braucht **keinen Server und keine Datenbank** – reines HTML/CSS/JS.
Sie ist für kostenloses Hosting über **GitHub Pages** vorbereitet.

---

## 📁 Aufbau

```
psychotherapie-pop/
├── index.html          → Startseite
├── pop-methode.html    → Die Methode
├── fuer-wen.html       → Für wen geeignet
├── wirksamkeit.html    → Wirksamkeit & gesetzlicher Rahmen
├── verzeichnis.html    → Therapeut:innen nach Bezirken  ← Kernstück
├── kontakt.html        → Kontakt & FAQ + Krisennummern
├── impressum.html      → Impressum (Platzhalter ausfüllen!)
├── datenschutz.html    → Datenschutz (Platzhalter prüfen!)
├── css/styles.css      → gesamtes Design
├── js/
│   ├── data.js         → DIE THERAPEUT:INNEN-LISTE (hier pflegst du)
│   ├── directory.js    → Logik fürs Verzeichnis (nicht ändern nötig)
│   └── main.js         → Menü
├── CNAME               → enthält: psychotherapie-pop.at
├── robots.txt          → für Suchmaschinen
├── sitemap.xml         → für Suchmaschinen
└── .nojekyll           → technisch nötig für GitHub Pages
```

---

## ✏️ Liste aktualisieren (z. B. monatlich)

Alles passiert in **einer einzigen Datei**: `js/data.js`.

1. Öffne `js/data.js` in einem Texteditor (oder direkt auf GitHub im Browser).
2. Ändere oben das Datum:
   ```js
   const LIST_DATE = "01. 06. 2026";
   ```
3. Jeder Eintrag sieht so aus:
   ```js
   {
     name: "Vorname Nachname", title: "Dr.", suffix: "MA",
     plz: "1010", bezirk: "Innere Stadt",
     address: "Musterstraße 1/2", addressNote: "",
     phone: "+43 ...",
     email: "kontakt@...",
     website: "https://...",
     languages: ["Deutsch", "Englisch"],
     specializations: ["Persönlichkeitsstörungen"],
     note: "freie Plätze ab Herbst 2026"
   },
   ```
   - **Hinzufügen:** einen Block kopieren, Werte ändern, Komma nicht vergessen.
   - **Entfernen:** den ganzen `{ ... },`-Block löschen.
   - **Leeres Feld:** `""` schreiben (Text) bzw. `[]` (Liste).
   - Die **PLZ bestimmt den Bezirk** und die Sortierung automatisch.
   - Einträge ohne PLZ landen automatisch unter „Ohne feste Praxisadresse".
4. Speichern. Fertig – das Verzeichnis sortiert und gruppiert sich von selbst.

> Es ist keine Programmierung nötig. Wichtig ist nur: Anführungszeichen `"`
> und Kommas `,` müssen stehen bleiben.

---

## 🚀 Auf GitHub Pages veröffentlichen

### 1. Repository anlegen
- Auf [github.com](https://github.com) einloggen → **New repository**.
- Name z. B. `psychotherapie-pop` → **Create repository**.

### 2. Dateien hochladen
- Im Repo auf **Add file → Upload files**.
- Alle Dateien und Ordner aus diesem Paket hineinziehen.
- **Commit changes**.

### 3. Pages aktivieren
- Im Repo: **Settings → Pages**.
- Unter *Build and deployment* → *Source*: **Deploy from a branch**.
- Branch: **main**, Ordner: **/ (root)** → **Save**.
- Nach ein paar Minuten ist die Seite unter
  `https://DEIN-NAME.github.io/psychotherapie-pop/` erreichbar.

### 4. Eigene Domain verbinden (psychotherapie-pop.at)
Die Datei `CNAME` ist schon vorbereitet.
- In **Settings → Pages → Custom domain** `psychotherapie-pop.at` eintragen → **Save**.
- Beim Domain-Anbieter (wo du die Domain gekauft hast) im DNS folgendes setzen:

  **A-Records** für `psychotherapie-pop.at` auf die vier GitHub-Pages-IPs:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
  **CNAME-Record** für `www`:
  ```
  www  →  DEIN-NAME.github.io
  ```
- Zurück in GitHub **Enforce HTTPS** aktivieren (sobald verfügbar).
- DNS-Änderungen können einige Stunden dauern.

---

## ✅ Vor dem Livegang prüfen

- [ ] `impressum.html` – echte Daten statt `[Platzhalter]` eingetragen
- [ ] `datenschutz.html` – Platzhalter geprüft, Stand-Datum gesetzt
- [ ] `js/data.js` – Liste aktuell, Datum gesetzt
- [ ] Auf dem Handy getestet (Menü, Suche, Filter)

---

## 🔧 Lokal ansehen

Doppelklick auf `index.html` genügt für eine erste Ansicht.
Tipp für volle Funktion (manche Browser sind streng): einen kleinen
lokalen Server starten, z. B. mit Python:

```bash
cd psychotherapie-pop
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

---

*Diese Seite ist ein unabhängiges Informationsangebot. Die fachspezifische
Ausbildung und der fachliche Rahmen der POP-Methode werden von der Wiener
Psychoanalytischen Akademie verantwortet.*
