/* ============================================================================
   THERAPEUT*INNEN-DATEN  —  psychotherapie-pop.at
   ----------------------------------------------------------------------------
   So aktualisierst du die Liste (z. B. monatlich):

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
        note       : Hinweis/Vermerk, z. B. "freie Plätze ab November 2026" (oder "")

   3. Wenn du jemanden ENTFERNEN willst: ganzen { ... } Block samt Komma löschen.
   4. Wenn du jemanden HINZUFÜGEN willst: einen Block kopieren und Werte ändern.
   5. PLZ ohne erkannten Bezirk landen automatisch unter "Ohne feste Praxisadresse".

   Stand der Liste (bitte bei Änderung anpassen):
============================================================================ */

const LIST_DATE = "01. 06. 2026";

const THERAPISTS = [
  {
    name: "Stephanie Damianitsch", title: "", suffix: "",
    plz: "1010", bezirk: "Innere Stadt",
    address: "Tiefer Graben 8–10/9", addressNote: "",
    phone: "+43 681 81376423",
    email: "praxis@damianitsch.com",
    website: "https://damianitsch.com/praxis/psychotherapie",
    languages: ["Deutsch"],
    specializations: ["Persönlichkeitsstörungen"],
    note: ""
  },
  {
    name: "Laura Greber", title: "", suffix: "",
    plz: "1010", bezirk: "Innere Stadt",
    address: "Tiefer Graben 8–10/9", addressNote: "",
    phone: "+43 670 55 11 993",
    email: "praxis@psychotherapie-greber.at",
    website: "https://psychotherapie-greber.at/",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: "Erstgespräche bis Ende Juli, freie Therapieplätze ab November 2026"
  },
  {
    name: "Leonie Seibold", title: "", suffix: "BA MA",
    plz: "1030", bezirk: "Landstraße",
    address: "Baumgasse 1/10", addressNote: "",
    phone: "0664 5071719",
    email: "kontakt@psychotherapie-seibold.at",
    website: "https://psychotherapie-seibold.at/",
    languages: ["Deutsch"],
    specializations: [],
    note: ""
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
    note: ""
  },
  {
    name: "Rosa Eidelpes", title: "Dr.", suffix: "",
    plz: "1050", bezirk: "Margareten",
    address: "Embelgasse 38–40/13", addressNote: "",
    phone: "+43 681 108 433 51",
    email: "praxis@rosa-eidelpes.at",
    website: "https://www.rosa-eidelpes.at",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: ""
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
    note: ""
  },
  {
    name: "Bianca Arthofer", title: "", suffix: "",
    plz: "1080", bezirk: "Josefstadt",
    address: "Schlösselgasse 11/22", addressNote: "",
    phone: "+43 670 5556614",
    email: "kontakt@diepsychotherapeutin-wien.com",
    website: "https://www.diepsychotherapeutin-wien.com",
    languages: ["Deutsch"],
    specializations: [],
    note: ""
  },
  {
    name: "Clémentine Bénard", title: "", suffix: "",
    plz: "1090", bezirk: "Alsergrund",
    address: "Alser Straße 30/7", addressNote: "",
    phone: "+43 699 19081570",
    email: "c.benard@yahoo.co.uk",
    website: "http://www.clementinebenard.com",
    languages: ["Französisch", "Deutsch", "Englisch"],
    specializations: [],
    note: ""
  },
  {
    name: "Philip Halper", title: "MMag.", suffix: "",
    plz: "1090", bezirk: "Alsergrund",
    address: "Alser Straße 30/7", addressNote: "",
    phone: "",
    email: "kontakt@psychotherapie-halper.at",
    website: "",
    languages: ["Deutsch"],
    specializations: [],
    note: ""
  },
  {
    name: "Eva Pollhammer", title: "", suffix: "",
    plz: "1140", bezirk: "Penzing",
    address: "Cumberlandstraße 52/6", addressNote: "",
    phone: "0664/4208997",
    email: "praxis@psychotherapie-pollhammer.at",
    website: "https://www.psychotherapie-pollhammer.at/",
    languages: [],
    specializations: [],
    note: ""
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
    note: ""
  },
  {
    name: "Christa Salvenmoser", title: "Mag.", suffix: "",
    plz: "1160", bezirk: "Ottakring",
    address: "Erdbrustgasse 84/3", addressNote: "",
    phone: "0664/413 95 94",
    email: "praxis@christa-salvenmoser.at",
    website: "",
    languages: ["Deutsch", "Englisch"],
    specializations: ["Persönlichkeitsstörungen", "Essstörungen", "Psychosomatik"],
    note: "Eingetragen, Kassenzuschuss möglich"
  },
  {
    name: "Victoria Theuer", title: "", suffix: "MA",
    plz: "1170", bezirk: "Hernals",
    address: "Rokitanskygasse 15/4", addressNote: "",
    phone: "",
    email: "",
    website: "",
    languages: ["Deutsch"],
    specializations: [],
    note: "Kontaktmöglichkeiten werden nachgereicht · voraussichtlicher Start Sommer/Herbst 2026"
  },
  {
    name: "Isabella Drozda", title: "", suffix: "",
    plz: "1180", bezirk: "Währing",
    address: "Gentzgasse 25/7", addressNote: "Praxis am Kutschkermarkt",
    phone: "0664/521 50 82",
    email: "isabella.drozda@gmail.com",
    website: "",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: ""
  },
  {
    name: "Hanna Löschl", title: "", suffix: "",
    plz: "1200", bezirk: "Brigittenau",
    address: "Leithastraße 22/20", addressNote: "",
    phone: "+43 670 652 35 01",
    email: "praxis@hanna-loeschl.at",
    website: "https://hanna-loeschl.at",
    languages: ["Deutsch"],
    specializations: ["Kinder- und Jugendtherapie", "Eltern-Säugling/Kleinkind-Kurztherapien"],
    note: ""
  },
  {
    name: "Tanja Feldhofer", title: "", suffix: "",
    plz: "", bezirk: "",
    address: "", addressNote: "",
    phone: "06602710293",
    email: "feldhofer.t@pm.me",
    website: "",
    languages: ["Deutsch", "Englisch"],
    specializations: [],
    note: ""
  }
];
