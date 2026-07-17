export const projects = [
  {
    title: "Dokumenditöötluse töövoog",
    type: "Sisemine töövahend · automatiseerimine",
    image: "images/dokumenditootlus-launcher.png",
    imageAlt: "Dokumenditöötluse rakenduse moodulite käivitusvaade",
    gallery: [
      {
        src: "images/dokumenditootlus-launcher.png",
        alt: "Dokumenditöötluse rakenduse moodulite käivitusvaade",
        label: "Moodulite käivitusvaade",
      },
      {
        src: "images/ocr-module.png",
        alt: "OCR ja pööramise moodul serveriprofiili seadistusega",
        label: "OCR ja pööramine",
      },
      {
        src: "images/smartmeta.png",
        alt: "SmartMeta metaandmete tuvastamise ja kontrolli vaade",
        label: "SmartMeta metaandmed",
      },
      {
        src: "images/excel-control.png",
        alt: "Exceli kontrolli moodul",
        label: "Exceli kontroll",
      },
    ],
    problem:
      "Mahukas skannipakk tuli käsitsi pöörata, tekstina tuvastada, dokumentideks jagada, metaandmetega siduda ja andmebaasiga võrrelda.",
    simplified:
      "Viis järjestikust tööetappi said ühise töövoo. Automaatika teeb põhitöö ning kasutaja kontrollib ainult erandeid ja ebaselgeid tulemusi.",
    role:
      "Kaardistasin protsessi ning ehitasin moodulid, kasutajavaated, kontrollireeglid, logid ja PostgreSQL-i uuendamise loogika.",
    technologies: ["Python", "OCR", "Excel", "XML", "PostgreSQL", "SQL"],
    supportingDocument: "documents/naidisdokument.pdf",
  },
  {
    title: "Kontopildi sorteerija",
    type: "Sisemine töövahend · Windows",
    visualLabel: "Fail → tuvastus → kontroll → õige kaust",
    problem:
      "Pildifaililt tuli käsitsi leida kontonumber, kontrollida selle olemasolu PostgreSQL-is või Excelis ning tõsta fail õigesse kausta.",
    simplified:
      "Rakendus jälgib sisendkausta, tuvastab numbri ja võrdleb tulemust andmeallikaga. Ebakindel tulemus jääb inimesele kontrollida.",
    role:
      "Ehitasin kasutajaliidese, kaustajälgija, töötlemisjärjekorra, lokaalse AI ühenduse, andmekontrollid ja tegevuslogi.",
    technologies: ["C#", ".NET 8", "WPF", "AI-nägemine", "PostgreSQL"],
  },
  {
    title: "Räim Ruudus",
    type: "Avalik veebilahendus",
    image: "images/raim-ruudus-home.png",
    imageAlt: "Räim Ruudus veebilehe avaleht",
    problem:
      "Baari info, menüü, asukoht ja kontaktid vajasid ühist veebivaadet ning sisu pidi saama muuta lähtekoodi avamata.",
    simplified:
      "Külastaja leiab vajaliku info ühest kohast. Haldaja saab menüüd ja muud sisu ise admin-vaates ajakohastada.",
    role:
      "Tegin kujunduse, kasutajaliidese, sisuhalduse ühenduse ja admin-vaate ning seadistasin avaldamise, domeeni, SEO ja analüütika.",
    technologies: ["React", "Vite", "Supabase", "GitHub Pages", "SEO"],
    liveUrl: "https://www.raimruudus.ee/",
  },
];
