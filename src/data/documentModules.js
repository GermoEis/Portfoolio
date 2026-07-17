export const documentModules = [
  {
    id: "ocr-tootlemine",
    shortCode: "OCR",
    accent: "#8a5a00",
    launcherArea: { left: 50.5, top: 25.1, width: 46.5, height: 20.7 },
    name: "OCR töötlemine",
    type: "1. Tekstituvastus ja pööramine",
    image: "/images/ocr-module.png",
    imageAlt: "OCR-i mooduli seadistus- ja käivitusaken",
    caption: "Skannitud dokumendipakk saab otsitava tekstikihi ja lehed pööratakse automaatselt õigesse suunda.",
    problem:
      "Ligikaudu 150 skannitud lehekülge võivad olla eri suundades ning neil puudub otsitav tekst. See takistab nii automaatset eraldamist kui ka info leidmist.",
    solution:
      "Moodul tuvastab lehtede suuna, pöörab need õigeks ja lisab OCR-i tekstikihi. Kogu skannipakk valmistatakse ühe töötlusega järgmise etapi jaoks ette.",
    role:
      "Sidusin Tesseracti ja Poppleri üheks tööks ning lisasin kaustavaliku, paralleeltöötluse, logi ja lokaalse AI profiili seadistused.",
    result:
      "Tulemuseks on õigesti pööratud ja otsitava tekstiga PDF, mille põhjal saab Splittija dokumentide piirid automaatselt leida.",
    sampleOutput: [
      ["Sisend", "~150 skannitud lehte"],
      ["Töötlus", "Pööramine ja OCR"],
      ["Järgmine samm", "Splittimine"],
    ],
    technologies: ["Python", "Tesseract", "Poppler", "Lokaalne AI"],
  },
  {
    id: "splittija",
    shortCode: "SP",
    accent: "#52616a",
    launcherArea: { left: 50.5, top: 47.4, width: 46.5, height: 20.6 },
    name: "Splittimine",
    type: "2. Dokumentide eraldamine",
    image: "/images/splittija.png",
    imageAlt: "PDF-i Splittija režiimivaliku aken",
    caption: "Automaatne splittimine Match Jobsi järgi ning käsitsi parandamine lehti poolitades või kokku pannes.",
    problem:
      "Üks suur skannipakk sisaldab mitut dokumenti. Nende alguste ja lõppude käsitsi leidmine sadade lehekülgede seast on aeglane ning ekslik.",
    solution:
      "Splittija eraldab dokumendid automaatselt Match Jobsi reeglite järgi. Vajadusel saab kasutaja tulemust üle vaadata, valest kohast poolitada või lehed uuesti kokku panna.",
    role:
      "Ehitasin automaatse ja käsitsi režiimi, dokumendipiiride reeglid, ühendamise ja poolitamise ning tulemuste salvestamise loogika.",
    result:
      "Mahukast skannist tekivad õigesti eraldatud dokumendid. Erandite parandamiseks ei pea kogu tööd uuesti alustama.",
    sampleOutput: [
      ["Sisend", "OCR-itud PDF"],
      ["Automaatika", "Match Jobsi reeglid"],
      ["Kontroll", "Poolita või ühenda"],
    ],
    technologies: ["Python", "PDF", "OCR-i reeglid", "Failitöötlus"],
  },
  {
    id: "smartmeta",
    shortCode: "SM",
    accent: "#17624f",
    launcherArea: { left: 2.9, top: 47.4, width: 46.5, height: 20.6 },
    name: "SmartMeta",
    type: "3. Metaandmete tuvastamine",
    image: "/images/smartmeta.png",
    imageAlt: "SmartMeta tööaken PDF-i eelvaate ja metaandmete paneeliga",
    caption: "Eraldatud dokumendid, PDF-i eelvaade ja tuvastatud metaandmed on kontrollimiseks samal ekraanil.",
    problem:
      "Pärast dokumentide eraldamist tuleb igaühelt leida vajalikud metaandmed ning siduda need õige PDF-iga. Käsitsi tehes võtab see palju aega.",
    solution:
      "SmartMeta tuvastab dokumentidelt metaandmed, näitab neid koos PDF-i eelvaatega ja võimaldab väärtused enne kinnitamist üle kontrollida.",
    role:
      "Ehitasin kasutajaliidese, PDF-i eelvaate, OCR-i sidumise, metaandmete väljad ja salvestamise loogika.",
    result:
      "Kinnitatud metaandmed salvestatakse XML-ina ning PDF-id õigesse kausta. Nii on dokumendid järgmise kontrollietapi jaoks ühtlaselt ette valmistatud.",
    sampleOutput: [
      ["Tuvastus", "Dokumendi metaandmed"],
      ["Andmed", "XML-fail"],
      ["Dokument", "PDF õigesse kausta"],
    ],
    technologies: ["Python", "CustomTkinter", "OCR", "Lokaalne AI"],
  },
  {
    id: "excel-kontroll",
    shortCode: "XL",
    accent: "#2f6f4e",
    launcherArea: { left: 2.9, top: 25.1, width: 46.5, height: 20.7 },
    name: "Exceli kontroll",
    type: "4. Reeglid ja võrdlus",
    image: "/images/excel-control.png",
    imageAlt: "Exceli kontrolli tööaken erinevate kontrollitoimingutega",
    caption: "Reeglipõhine kontroll võrdleb tulemusi suure tabeliga ja märgib read vastavalt kontrollivajadusele.",
    problem:
      "Töödeldud kirjete käsitsi kontrollimine reeglite ja suure võrdlustabeli vastu on ajamahukas. Kõik read ei vaja inimese tähelepanu, kuid erandid peavad olema kohe nähtavad.",
    solution:
      "Tööriist rakendab kontrollireegleid ja võrdleb andmeid suure tabeliga. Kontrolli mitteläbinud või ebaselged read tuuakse eraldi esile.",
    role:
      "Kirjutasin kontrollireeglid, Exceli ja XML-i lugemise, suure tabeliga võrdlemise ning tulemuste värvipõhise märgistamise.",
    result:
      "Kontrolli mittevajavad read märgitakse roheliseks. Kontrolli vajavad read on sõltuvalt vea liigist oranžid või punased, nii et inimene näeb kohe, kuhu keskenduda.",
    sampleOutput: [
      ["Roheline", "Kontrolli ei vaja"],
      ["Oranž", "Vajab ülevaatust"],
      ["Punane", "Viga vajab parandamist"],
    ],
    technologies: ["Python", "Excel", "XML", "Valideerimine"],
  },
  {
    id: "postgresql-uuendaja",
    shortCode: "DB",
    accent: "#2f5f70",
    launcherArea: { left: 2.9, top: 69.5, width: 94.2, height: 20.6 },
    name: "PostgreSQL uuendaja",
    type: "5. Lõplik andmeuuendus",
    image: "/images/postgre-updater.png",
    imageAlt: "PostgreSQL-i uuendaja kausta- ja logivaade",
    caption: "Kontrollitud kirjed uuendatakse PostgreSQL-i suures tabelis ning iga tegevus jääb logisse.",
    problem:
      "Pärast kontrolli peavad tehtud töö kirjed jõudma ka suurde põhitabelisse. Nende käsitsi sisestamine tekitaks uue ajakulu ja veaohtu.",
    solution:
      "Uuendaja loeb kontrollitud andmed, valideerib vajalikud väljad ja uuendab vastavad kirjed PostgreSQL-is. Iga kirje tulemus kuvatakse logis.",
    role:
      "Tegin XML-i lugemise, PostgreSQL-i uuendused, eelkontrollid, kaustavaliku ja kasutajale nähtava logi.",
    result:
      "Töövoog lõpeb ajakohase suure tabeliga. Õnnestunud uuendused ja võimalikud erandid on hiljem kontrollitavad.",
    sampleOutput: [
      ["Allikas", "Kontrollitud kirjed"],
      ["Siht", "PostgreSQL"],
      ["Tulemus", "Uuendused ja logi"],
    ],
    technologies: ["Python", "PostgreSQL", "XML", "SQL"],
  },
];
