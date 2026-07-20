const sharedImages = {
  documentWorkflow: "images/dokumenditootlus-launcher.png",
  ocr: "images/ocr-module-sanitized.png",
  smartMeta: "images/smartmeta.png",
  excel: "images/excel-control-blurred.png",
  raimRuudus: "images/raim-ruudus-home.png",
};

export const projectsByLanguage = {
  et: [
    {
      title: "Dokumenditöötluse rakendus",
      type: "Sisemise töövoo automatiseerimine",
      image: sharedImages.documentWorkflow,
      imageAlt: "Dokumenditöötluse rakenduse moodulite käivitusvaade",
      gallery: [
        {
          src: sharedImages.documentWorkflow,
          alt: "Dokumenditöötluse rakenduse moodulite käivitusvaade",
          label: "Moodulite käivitusvaade",
        },
        {
          src: sharedImages.ocr,
          alt: "OCR ja pööramise moodul serveriprofiili seadistusega",
          label: "OCR ja pööramine",
        },
        {
          src: sharedImages.smartMeta,
          alt: "SmartMeta metaandmete tuvastamise ja kontrolli vaade",
          label: "SmartMeta metaandmed",
        },
        {
          src: sharedImages.excel,
          alt: "Exceli kontrolli moodul",
          label: "Exceli kontroll",
        },
      ],
      problem:
        "Dokumenditöö koosnes mitmest üksteisele järgnevast etapist, mille vahel tuli faile käsitsi liigutada, andmeid kontrollida ja parandada. See võttis aega, tekitas ootejärjekordi ja suurendas riski, et mõni viga liigub järgmisse etappi.",
      system:
        "Ehitasin ühe käivitusvaatega töövoo: OCR valmistab materjali ette, Splittija eraldab dokumendid, SmartMeta leiab metaandmed, Exceli kontroll võrdleb välju ja kinnitatud tulemus liigub PostgreSQL-i. Moodulid annavad töö automaatselt üksteisele edasi.",
      simplified:
        "Kasutaja käivitab protsessi ühest kohast. Kindlad juhud liiguvad automaatselt ühe töövoona ning kontrolli vajavad erandid koonduvad ühte selgesse kohta. Nii on vähem käsitööd, ootamist, korduvat kontrolli ja hilisemat vigade parandamist.",
      role:
        "Kaardistasin olemasoleva töö, ehitasin moodulid ühiseks süsteemiks ning lõin reeglid, logid ja kontrollpunktid, mis hoiavad protsessi jälgitava ja kasutaja kontrolli all.",
      technologies: ["Python", "OCR", "SmartMeta", "Excel", "XML", "PostgreSQL", "SQL"],
      supportingDocument: "documents/naidisdokument.pdf",
    },
    {
      title: "Kontopildi sorteerija",
      type: "AI-toega sisemine automatiseerimine",
      visualLabel: "Fail → tuvastus → kontroll → õige kaust",
      problem:
        "Iga uue pildi puhul pidi inimene leidma kontonumbri, kontrollima selle andmeallikast ja paigutama faili õigesse kohta. Sama otsustusjada kordus fail faili järel ning eksimus tähendas hilisemat otsimist ja parandamist.",
      simplified:
        "Tööriist jälgib uusi faile, kasutab numbri tuvastamiseks kohalikku AI-d ja kontrollib tulemust andmeallikast. Kindel vaste liigub automaatselt õigesse kohta; ebaselged juhud jäävad inimesele ülevaatamiseks. Nii muutus igapäevane sorteerimine kiiremaks erandipõhiseks kontrolliks, kus on vähem käsitööd ja parem ülevaade.",
      role:
        "Kaardistasin otsustusloogika ning ehitasin kasutajaliidese, kaustajälgija, tööjärjekorra, kohaliku AI ühenduse, andmekontrollid ja tegevuslogi.",
      technologies: ["C#", ".NET 8", "WPF", "AI-nägemine", "PostgreSQL"],
    },
    {
      title: "Räim Ruudus",
      type: "Ettevõtte veeb ja iseteeninduslik sisuhaldus",
      image: sharedImages.raimRuudus,
      imageAlt: "Räim Ruudus veebilehe avaleht",
      problem:
        "Naissaarel tegutseval ettevõttel oli vaja selget veebilehte, kus külastaja leiaks kiiresti menüü, lahtiolekuajad, asukoha ja kontaktid. Omanik pidi saama muutuvat infot ise hallata, ilma et iga uuendus vajaks arendaja abi.",
      simplified:
        "Ettevõttel on nüüd selge avalik veeb ja lihtne admin-vaade, kus omanik saab sisu iseseisvalt uuendada. Külastaja leiab vajaliku info kiiremini, omanikul on muudatustest parem ülevaade ning igapäevased uuendused ei jää arendaja järel ootama.",
      role:
        "Ehitasin Reacti ja Vite'iga avaliku vaate ning admin-vaate, ühendasin Supabase'i sisuhalduse ja seadistasin avaldamise, domeeni, SEO ning analüütika.",
      technologies: ["React", "Vite", "Supabase", "GitHub Pages", "SEO"],
      liveUrl: "https://www.raimruudus.ee/",
    },
  ],
  en: [
    {
      title: "Document processing application",
      type: "Internal workflow automation",
      image: sharedImages.documentWorkflow,
      imageAlt: "Launcher view for the document processing application",
      gallery: [
        {
          src: sharedImages.documentWorkflow,
          alt: "Launcher view for the document processing application",
          label: "Module launcher",
        },
        {
          src: sharedImages.ocr,
          alt: "OCR and rotation module with server profile settings",
          label: "OCR and rotation",
        },
        {
          src: sharedImages.smartMeta,
          alt: "SmartMeta metadata recognition and validation view",
          label: "SmartMeta metadata",
        },
        {
          src: sharedImages.excel,
          alt: "Excel validation module",
          label: "Excel validation",
        },
      ],
      problem:
        "Document work consisted of several consecutive stages. Files had to be moved, checked and corrected by hand between them, which created delays and increased the risk of mistakes moving into the next step.",
      system:
        "I built a workflow with one launcher: OCR prepares the material, Splitter separates the documents, SmartMeta identifies metadata, Excel validation compares fields and approved results move to PostgreSQL. Each module hands the work to the next automatically.",
      simplified:
        "The user starts the process in one place. Clear cases move automatically through the full workflow, while exceptions are gathered in one clear review point. Manual file handling, repeated checks and later corrections were reduced.",
      role:
        "I mapped the existing work, brought the modules into one system and built the rules, logs and checkpoints that keep the process traceable and under the user’s control.",
      technologies: ["Python", "OCR", "SmartMeta", "Excel", "XML", "PostgreSQL", "SQL"],
      supportingDocument: "documents/naidisdokument.pdf",
    },
    {
      title: "Account image sorter",
      type: "AI-assisted internal automation",
      visualLabel: "File → recognition → validation → correct folder",
      problem:
        "For every new image, someone had to find the account number, verify it against a data source and place the file in the right location. The same decision chain repeated file after file, and mistakes created extra searching and rework.",
      simplified:
        "The tool watches for new files, uses local AI to identify the number and verifies it against the data source. Confirmed matches move automatically; unclear cases are left for review. Daily sorting became an exception-based check instead of a manual routine.",
      role:
        "I mapped the decision logic and built the interface, folder watcher, processing queue, local AI integration, data checks and activity log.",
      technologies: ["C#", ".NET 8", "WPF", "AI vision", "PostgreSQL"],
    },
    {
      title: "Räim Ruudus",
      type: "Business website with self-service content management",
      image: sharedImages.raimRuudus,
      imageAlt: "Räim Ruudus website home page",
      problem:
        "A business on Naissaar needed a clear website where visitors could quickly find the menu, opening hours, location and contact details. The owner also needed to update changing information without relying on a developer.",
      simplified:
        "The business now has a clear public website and a simple admin view for managing content independently. Visitors find the essential information quickly, routine updates no longer require a developer and usage can be followed through analytics.",
      role:
        "I built the public and admin views with React and Vite, connected Supabase content management, and configured deployment, the domain, SEO and analytics.",
      technologies: ["React", "Vite", "Supabase", "GitHub Pages", "SEO"],
      liveUrl: "https://www.raimruudus.ee/",
    },
  ],
};

export const projects = projectsByLanguage.et;
