export const publicProject = {
  title: "Räim Ruudus",
  type: "Töötav avalik veebileht",
  image: "/images/raim-ruudus-home.png",
  imageAlt: "Räim Ruudus töötava veebilehe avaleht",
  summary:
    "Naissaare baari veebileht ja haldusvaade. Leht on avalik ning päriselt kasutuses.",
  problem:
    "Baari info, menüü, asukoht ja kontaktid olid vaja tuua ühte kohta. Sisu pidi saama muuta ilma lähtekoodi avamata.",
  solution:
    "Tegin Reacti ja Vitega veebilehe. Supabase hoiab muudetavat sisu ning GitHub Pages avaldab lehe. Lisatud on kohandatud domeen, PDF-menüü, SEO ja Google Analytics.",
  role:
    "Tegin kujunduse, kasutajaliidese, Supabase'i ühenduse ja admin-vaate. Seadistasin avaldamise, domeeni, analüütika ning otsingumootorite metaandmed.",
  result:
    "Veebileht töötab aadressil raimruudus.ee. Külastaja leiab vajaliku info ühest kohast ja haldaja saab sisu admin-vaates muuta.",
  liveUrl: "https://www.raimruudus.ee/",
  tags: ["React", "Vite", "Supabase", "GitHub Pages", "SEO", "Google Analytics"],
};

export const otherProjects = [
  {
    title: "Kontopildi sorteerija",
    type: "Sisemine automatiseerimine · Windows",
    problem:
      "Pildifailid saabuvad kausta ning kontonumber tuleb pildilt käsitsi leida. Seejärel tuleb kontrollida, kas konto on PostgreSQL-is või Excelis olemas, ja fail õigesse kohta tõsta.",
    solution:
      "Windowsi rakendus jälgib kausta, loeb kontonumbri lokaalse nägemismudeliga ning võrdleb tulemust andmeallikaga. Selge vaste liigub edasi, ebakindel tulemus jääb kontrollimiseks.",
    role:
      "Ehitasin WPF-i kasutajaliidese, kaustajälgija, töötlemisjärjekorra, lokaalse AI ühenduse ning PostgreSQL-i ja Exceli kontrollid.",
    result:
      "Faili liikumine ja kontrolli põhjus on kasutajale nähtav. Rakendus ei otsusta ebaselget juhtumit inimese eest ning kirjutab tegevused logisse.",
    tags: [".NET 8", "WPF", "C#", "AI-nägemine", "PostgreSQL"],
  },
  {
    title: "Töövoo abitööriistad",
    type: "Toetav tarkvaraarendus",
    problem:
      "Exceli, XML-i, PDF-i ja andmebaasi vahel korduvad samad väikesed kontrollid, ümbernimetamised ning vormingu muutmised.",
    solution:
      "Teen ühe ülesandega Pythoni tööriistu: failide kontroll, andmete võrdlus, XML-i muutmine, PDF-i töötlemine või tulemuse eksport.",
    role:
      "Kaardistan käsitsi tehtavad sammud, kirjutan kontrollireeglid ja teen kasutajale lihtsa käivitusvaate või käsurea tööriista.",
    result:
      "Sama kontroll käib iga kord samade reeglite järgi. Vead ja vahele jäetud failid jäävad nähtavasse tulemusse, mitte ei kao vaikides ära.",
    tags: ["Python", "Excel", "XML", "PDF", "Automatiseerimine"],
  },
];
