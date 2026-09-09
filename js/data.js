/* ============================================================================
   THERAPEUT*INNEN-DATEN  —  psychotherapie-pop.at
   ----------------------------------------------------------------------------
   So aktualisieren Sie die Liste (z. B. monatlich):

   1. Jeder Eintrag ist ein { ... } Block, getrennt durch Komma.
   2. Felder:
        name      : Vor- und Nachname (Pflicht)
        title     : akademischer Titel, z. B. "Dr.", "MMag." (oder "")
        suffix    : nachgestellt, z. B. "BA MA", "MA" (oder "")
        plz        : Postleitzahl als Text, z. B. "1010"  -> bestimmt den Bezirk
        bezirk     : Bezirksname, z. B. "Innere Stadt"
        address    : Straße + Hausnummer (oder "" wenn nur online)
        addressNote: Zusatz zur Adresse, z. B. "Praxis am Kutschkermarkt" (oder "")
        phone      : Telefonnummer (oder "")
        email      : E-Mail (oder "")
        website    : volle URL inkl. https:// (oder "")
        languages  : Liste der Sprachen, z. B. ["Deutsch","Englisch"]
        specializations : Liste, z. B. ["Persönlichkeitsstörungen"] (oder [])
        note       : Hinweis/Vermerk, z. B. "ab November 2026" (oder "")

   3. Zum ENTFERNEN: ganzen { ... } Block samt Komma loeschen.
   4. Zum HINZUFUEGEN: einen Block kopieren und Werte aendern.
   5. PLZ ohne erkannten Bezirk landen automatisch unter "Ohne feste Praxisadresse".
   6. Die Reihenfolge der Bezirke wird auf der Website bei jedem Aufruf zufaellig
      angeordnet - die Reihenfolge hier in der Datei spielt keine Rolle.

   WICHTIG - gesetzliche Bezeichnung:
      Bis einschliesslich 30. September 2026 lautet sie "in Ausbildung unter
      Supervision". Ab 1. Oktober 2026 lautet sie "in Fachausbildung unter
      Lehrsupervision". Zum Umstellen: unten AUSBILDUNG auf AUSB_NEU setzen.

   Stand der Liste (bitte bei Aenderung anpassen):
============================================================================ */

const LIST_DATE = "Herbst 2026";

/* Gesetzliche Bezeichnung - ab 1. Oktober 2026 auf AUSB_NEU umstellen. */
const AUSB_ALT = "in Ausbildung unter Supervision";
const AUSB_NEU = "in Fachausbildung unter Lehrsupervision";
const AUSBILDUNG = AUSB_NEU;

const THERAPISTS = [
  // ---- 1010 Innere Stadt ----
  {
    name: "Sandra Bär Heuer", title: "", suffix: "",
    plz: "1010", bezirk: "Innere Stadt",
    address: "Laurenzerberg 1/29", addressNote: "",
    phone: "+43 699 1 968 67 27",
    email: "sandra.baerheuer@gmail.com",
    website: "https://www.praxis-baerheuer.at",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG + " · ab Mitte September 2026"
  },
  {
    name: "Sabine Blauhut", title: "Mag.a", suffix: "",
    plz: "1010", bezirk: "Innere Stadt",
    address: "Hegelgasse 19/11", addressNote: "",
    phone: "+43 677 636 020 60",
    email: "info@psychotherapie-blauhut.at",
    website: "https://www.psychotherapie-blauhut.at",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Laura Greber", title: "", suffix: "",
    plz: "1010", bezirk: "Innere Stadt",
    address: "Tiefer Graben 8–10/9", addressNote: "",
    phone: "+43 670 55 11 993",
    email: "praxis@psychotherapie-greber.at",
    website: "https://www.psychotherapie-greber.at/",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG + " · ab November 2026"
  },
  {
    name: "Carlo Zichittella", title: "Dott. Mag.", suffix: "",
    plz: "1010", bezirk: "Innere Stadt",
    address: "Wollzeile 31/13", addressNote: "",
    phone: "+43 660 493 7127",
    email: "praxis@carlozichittella.at",
    website: "https://www.carlozichittella.at",
    languages: ["Deutsch", "Italienisch (Muttersprache)", "Englisch", "Französisch (passiv)"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Oliver Wojtech", title: "Mag.", suffix: "",
    plz: "1010", bezirk: "Innere Stadt",
    address: "Salvatorgasse 10/6/2", addressNote: "",
    phone: "0664 1017023",
    email: "praxis@wojtech.at",
    website: "https://wojtech.at",
    languages: [],
    specializations: [],
    note: ""
  },

  // ---- 1020 Leopoldstadt ----
  {
    name: "Margarethe Engelhardt-Krajanek", title: "Dr.", suffix: "",
    plz: "1020", bezirk: "Leopoldstadt",
    address: "Negerlegasse 9/28", addressNote: "",
    phone: "+43 676 7534836",
    email: "margarethe.engelhardtkrajanek@gmail.com",
    website: "https://www.engelhardt-krajanek.at",
    languages: [],
    specializations: [],
    note: ""
  },
  {
    name: "Lukas Kaindlstorfer", title: "", suffix: "MA MSc",
    plz: "1020", bezirk: "Leopoldstadt",
    address: "Erlafstraße 7/42", addressNote: "",
    phone: "0670 190 42 50",
    email: "kontakt@praterpraxis.at",
    website: "https://www.praterpraxis.at",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Miriam Klauser", title: "", suffix: "",
    plz: "1020", bezirk: "Leopoldstadt",
    address: "Zwerggasse 3/3", addressNote: "",
    phone: "0660 8365583",
    email: "info@miriamklauser.at",
    website: "",
    languages: ["Deutsch"],
    specializations: [],
    note: "Psychoanalytikerin (WAP), " + AUSBILDUNG
  },

  // ---- 1030 Landstraße ----
  {
    name: "Leonie Seibold", title: "", suffix: "BA MA",
    plz: "1030", bezirk: "Landstraße",
    address: "Baumgasse 1/10", addressNote: "",
    phone: "0664 5071719",
    email: "kontakt@psychotherapie-seibold.at",
    website: "https://www.psychotherapie-seibold.at/",
    languages: ["Deutsch"],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1040 Wieden ----
  {
    name: "Nadia Jonigkeit", title: "Mag.", suffix: "MA",
    plz: "1040", bezirk: "Wieden",
    address: "Favoritenstraße 17/2/14", addressNote: "",
    phone: "+43 676 91 15 528",
    email: "jonigkeit@therapie-couch.at",
    website: "https://www.therapie-couch.at",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Ksenia Kowalczyk", title: "", suffix: "",
    plz: "1040", bezirk: "Wieden",
    address: "Schönburgstraße 44/5", addressNote: "",
    phone: "+43 677 648 112 55",
    email: "kontakt@ksenia-kowalczyk.at",
    website: "",
    languages: ["Deutsch", "Polnisch (passiv)"],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1050 Margareten ----
  {
    name: "Rosa Eidelpes", title: "Dr.", suffix: "",
    plz: "1050", bezirk: "Margareten",
    address: "Embelgasse 38–40/13", addressNote: "",
    phone: "+43 681 108 433 51",
    email: "praxis@rosa-eidelpes.at",
    website: "https://www.rosa-eidelpes.at",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Sarah Gold-Ponesch", title: "Mag.a", suffix: "",
    plz: "1050", bezirk: "Margareten",
    address: "Stolberggasse 25/7", addressNote: "",
    phone: "+43 660 502 0552",
    email: "praxis@psychotherapie-gold.at",
    website: "",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Isabelle Köhler", title: "DI(fh)", suffix: "",
    plz: "1050", bezirk: "Margareten",
    address: "Kohlgasse 42/3", addressNote: "",
    phone: "0664 751508766",
    email: "praxis@isabellekoehler.com",
    website: "https://www.isabellekoehler.com",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Nicole Singer", title: "Mag.a", suffix: "",
    plz: "1050", bezirk: "Margareten",
    address: "Embelgasse 57/1", addressNote: "",
    phone: "0676 4831427",
    email: "praxis.nicolesinger@gmail.com",
    website: "",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Paul Tiefenböck", title: "", suffix: "",
    plz: "1050", bezirk: "Margareten",
    address: "Siebenbrunnengasse 65/14", addressNote: "",
    phone: "+43 677 630 619 70",
    email: "psychotherapie@paultiefenboeck.at",
    website: "https://www.paultiefenboeck.at",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1060 Mariahilf ----
  {
    name: "Naser Ayub Abuhelou", title: "", suffix: "BA",
    plz: "1060", bezirk: "Mariahilf",
    address: "Stumpergasse 48/18", addressNote: "",
    phone: "0676 5500748",
    email: "n.abuhelou@me.com",
    website: "",
    languages: ["Deutsch", "Arabisch"],
    specializations: [],
    note: AUSBILDUNG + " · ab 1. Oktober 2026"
  },
  {
    name: "Holger Kekeisen", title: "Mag.", suffix: "",
    plz: "1060", bezirk: "Mariahilf",
    address: "Mariahilfer Straße 53/2/3/24", addressNote: "",
    phone: "0677 631 736 12",
    email: "praxis@holgerkekeisen.com",
    website: "",
    languages: ["Deutsch"],
    specializations: [],
    note: ""
  },

  // ---- 1070 Neubau ----
  {
    name: "Andreas Lehrner", title: "", suffix: "",
    plz: "1070", bezirk: "Neubau",
    address: "Bandgasse 34/3", addressNote: "",
    phone: "0681 203 21 303",
    email: "andreas.lehrner@gmx.at",
    website: "https://www.psychotherapie-lehrner.at",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Elisa Wesely", title: "", suffix: "MSc",
    plz: "1070", bezirk: "Neubau",
    address: "Bandgasse 34/3", addressNote: "",
    phone: "0680 1608876",
    email: "praxis@psychotherapie-wesely.at",
    website: "https://www.psychotherapie-wesely.at",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1080 Josefstadt ----
  {
    name: "Bianca Arthofer", title: "", suffix: "",
    plz: "1080", bezirk: "Josefstadt",
    address: "Schlösselgasse 11/22", addressNote: "",
    phone: "+43 670 5556614",
    email: "kontakt@diepsychotherapeutin-wien.com",
    website: "https://www.diepsychotherapeutin-wien.com",
    languages: ["Deutsch"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Susanne Buchinger", title: "Mag.a", suffix: "",
    plz: "1080", bezirk: "Josefstadt",
    address: "Bennoplatz 6/10", addressNote: "",
    phone: "0677 639 650 03",
    email: "buchinger-praxis@gmx.at",
    website: "",
    languages: [],
    specializations: [],
    note: AUSBILDUNG + " · ab November 2026"
  },

  // ---- 1090 Alsergrund ----
  {
    name: "Philip Halper", title: "MMag.", suffix: "",
    plz: "1090", bezirk: "Alsergrund",
    address: "Alser Straße 30/7", addressNote: "",
    phone: "",
    email: "kontakt@psychotherapie-halper.at",
    website: "https://www.psychotherapie-halper.at",
    languages: ["Deutsch"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Christina Seeböck", title: "Mag.", suffix: "",
    plz: "1090", bezirk: "Alsergrund",
    address: "Säulengasse 10/5", addressNote: "",
    phone: "+43 677 63505355",
    email: "psy.seeboeck@gmx.net",
    website: "",
    languages: [],
    specializations: [],
    note: ""
  },
  {
    name: "Valerie Wiener", title: "Mag.a", suffix: "",
    plz: "1090", bezirk: "Alsergrund",
    address: "Rufgasse 5/28", addressNote: "",
    phone: "0699 17009008",
    email: "valerie.wiener@gmx.at",
    website: "",
    languages: [],
    specializations: [],
    note: ""
  },

  // ---- 1130 Hietzing ----
  {
    name: "Martina Kubacek", title: "Mag.", suffix: "",
    plz: "1130", bezirk: "Hietzing",
    address: "Schweizertalstraße 13/5", addressNote: "",
    phone: "0670 1 908 908",
    email: "praxis-kubacek@gmx.at",
    website: "https://www.praxis-kubacek.at",
    languages: ["Deutsch"],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1140 Penzing ----
  {
    name: "Vincenz Freund", title: "", suffix: "",
    plz: "1140", bezirk: "Penzing",
    address: "Penzinger Straße 67/6", addressNote: "",
    phone: "+43 677 63996003",
    email: "praxis@freund-psychotherapie.at",
    website: "https://freund-psychotherapie.at",
    languages: ["Deutsch"],
    specializations: [],
    note: ""
  },
  {
    name: "Stefanie Pichler-Gnilsen", title: "", suffix: "MA",
    plz: "1140", bezirk: "Penzing",
    address: "Breitenseer Straße 20–22/12", addressNote: "",
    phone: "0676 703 4632",
    email: "praxis@pichler-gnilsen.at",
    website: "",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Eva Pollhammer", title: "", suffix: "",
    plz: "1140", bezirk: "Penzing",
    address: "Cumberlandstraße 52/6", addressNote: "",
    phone: "0664 4208997",
    email: "praxis@psychotherapie-pollhammer.at",
    website: "https://www.psychotherapie-pollhammer.at/",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1150 Rudolfsheim-Fünfhaus ----
  {
    name: "Fabian Gallistl-Kassing", title: "", suffix: "MSc",
    plz: "1150", bezirk: "Rudolfsheim-Fünfhaus",
    address: "Viktoriagasse 14/2/2/20", addressNote: "",
    phone: "+43 676 9236790",
    email: "praxis@psychotherapie1150.at",
    website: "https://www.psychotherapie1150.at",
    languages: [],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Maximilian Veith", title: "", suffix: "",
    plz: "1150", bezirk: "Rudolfsheim-Fünfhaus",
    address: "Holochergasse 49/8", addressNote: "",
    phone: "0664 5074034",
    email: "pop-psychotherapie.veith@gmx.at",
    website: "https://www.psychotherapeutische-praxis-veith.at",
    languages: ["Deutsch"],
    specializations: ["Erwachsene", "Jugendliche"],
    note: AUSBILDUNG
  },

  // ---- 1160 Ottakring ----
  {
    name: "Christa Salvenmoser", title: "Mag.", suffix: "",
    plz: "1160", bezirk: "Ottakring",
    address: "Erdbrustgasse 84/3", addressNote: "",
    phone: "0664 413 95 94",
    email: "praxis@christa-salvenmoser.at",
    website: "",
    languages: ["Deutsch", "Englisch"],
    specializations: ["Persönlichkeitsstörungen", "Essstörungen", "Psychosomatik"],
    note: ""
  },
  {
    name: "Katharina Stahr-Yolcu", title: "Mag.", suffix: "PhD",
    plz: "1160", bezirk: "Ottakring",
    address: "Haberlgasse 34/3", addressNote: "",
    phone: "+43 676 540 4974",
    email: "therapie-stahr@proton.me",
    website: "https://therapie-stahr.at",
    languages: ["Deutsch"],
    specializations: ["Junge Erwachsene", "LGBTQ+"],
    note: ""
  },

  // ---- 1170 Hernals ----
  {
    name: "Sina Meinhardt", title: "", suffix: "MA",
    plz: "1170", bezirk: "Hernals",
    address: "Mariengasse 36/1", addressNote: "",
    phone: "0677 6341 8384",
    email: "praxis.meinhardt@gmx.at",
    website: "https://www.psychotherapie-meinhardt.at",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Victoria Theuer", title: "", suffix: "BA MA",
    plz: "1170", bezirk: "Hernals",
    address: "Rokitanskygasse 15/4", addressNote: "",
    phone: "+43 670 35 11 456",
    email: "praxis-theuer@protonmail.com",
    website: "https://www.psychotherapie-theuer.at",
    languages: ["Deutsch"],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1180 Währing ----
  {
    name: "Clémentine Bénard-Zöchmeister", title: "", suffix: "",
    plz: "1180", bezirk: "Währing",
    address: "Staudgasse 13", addressNote: "",
    phone: "+43 699 19081570",
    email: "c.benard@yahoo.co.uk",
    website: "https://www.clementinebenard.com",
    languages: ["Deutsch", "Französisch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },
  {
    name: "Isabella Drozda", title: "", suffix: "",
    plz: "1180", bezirk: "Währing",
    address: "Gentzgasse 25/7", addressNote: "Praxis beim Kutschkermarkt",
    phone: "0664 521 50 82",
    email: "isabella.drozda@gmail.com",
    website: "",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  },

  // ---- 1200 Brigittenau ----
  {
    name: "Hanna Habitzl", title: "", suffix: "",
    plz: "1200", bezirk: "Brigittenau",
    address: "Leithastraße 22/20", addressNote: "",
    phone: "+43 670 652 35 01",
    email: "praxis@hanna-loeschl.at",
    website: "https://www.hanna-habitzl.at",
    languages: ["Deutsch"],
    specializations: ["Kinder- und Jugendtherapie", "Eltern-Säugling/Kleinkind-Kurztherapien"],
    note: AUSBILDUNG
  },

  // ---- Ohne feste Praxisadresse ----
  {
    name: "Tanja Feldhofer", title: "", suffix: "",
    plz: "", bezirk: "",
    address: "", addressNote: "",
    phone: "0660 2710293",
    email: "feldhofer.t@pm.me",
    website: "",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: AUSBILDUNG
  }
];
