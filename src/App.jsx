import { useEffect } from "react";
import {
  AppWindow,
  ArrowRight,
  Braces,
  Database,
  FileCheck2,
  Mail,
  ScanText,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import DocumentSystem from "./components/DocumentSystem.jsx";
import HeroSystemVisual from "./components/HeroSystemVisual.jsx";
import OtherProjects from "./components/OtherProjects.jsx";
import PublicProject from "./components/PublicProject.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import { otherProjects, publicProject } from "./data/projects.js";

const scrollSectionIds = [
  "algus",
  "valdkonnad",
  "moodulid",
  "raim-ruudus",
  "muud-projektid",
  "lahenemine",
  "tehnoloogiad",
  "kontakt",
];

function useScrollSectionHash() {
  useEffect(() => {
    let animationFrame = null;

    const updateHash = () => {
      animationFrame = null;
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 240);
      const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let activeId = scrollSectionIds[0];

      for (const id of scrollSectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) activeId = id;
      }

      if (atPageBottom) activeId = scrollSectionIds.at(-1);

      if (window.location.hash !== `#${activeId}`) {
        window.history.replaceState(null, "", `#${activeId}`);
      }
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateHash);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);
}

const expertise = [
  {
    icon: AppWindow,
    title: "Töövoo automatiseerimine",
    text: "Seon korduvad tööetapid üheks sujuvaks protsessiks, et käsitsi tehtavaid samme ja ümberlülitumist oleks vähem.",
  },
  {
    icon: ScanText,
    title: "Info automaatne töötlemine",
    text: "Rakendused loevad sisendit, korrastavad selle ning valmistavad tulemuse järgmise tööetapi jaoks ette.",
  },
  {
    icon: Settings2,
    title: "Vähem rutiinset tööd",
    text: "Korduvad ja ajamahukad tegevused saavad kindlad reeglid, et inimene saaks keskenduda otsustamist vajavale tööle.",
  },
  {
    icon: FileCheck2,
    title: "Kvaliteet ja kontroll",
    text: "Automaatkontrollid toovad vead ja erandid selgelt esile ning jätavad ebaselged juhtumid inimese kinnitada.",
  },
  {
    icon: Database,
    title: "Süsteemide ühendamine",
    text: "Ühendan töövahendid tabelite, andmebaaside ja teiste süsteemidega, et sama infot ei peaks korduvalt sisestama.",
  },
  {
    icon: Braces,
    title: "Selged töövahendid",
    text: "Ehitan töölaua- ja veebirakendusi, kus vajalik info, tegevused ja tulemused on kasutajale ühes kohas nähtavad.",
  },
];

const approachSteps = [
  {
    title: "Vaatan töö läbi",
    text: "Kaardistan praeguse töövoo, käsitsi tehtavad sammud, otsustuskohad ja kõige sagedasemad erandid.",
  },
  {
    title: "Piiran esimese versiooni",
    text: "Valin ühe põhiülesande. Esimene versioon peab selle algusest lõpuni ära tegema, mitte kõike korraga proovima.",
  },
  {
    title: "Lisan kontrollkohad",
    text: "Automaatne osa saab reeglid ja logi. Ebaselge tulemus jääb kasutajale kinnitamiseks, mitte ei liigu vaikselt edasi.",
  },
  {
    title: "Jätan süsteemi hooldatavaks",
    text: "Seadistused, keskkonnamuutujad, uuendamine ja käivitamine peavad olema arusaadavad ka pärast arenduse lõppu.",
  },
];

const technologyGroups = [
  {
    title: "Töölauarakendused",
    items: ["Python", "C#", ".NET 8", "WPF", "PyQt6", "CustomTkinter"],
  },
  {
    title: "Veeb",
    items: ["React", "Vite", "Supabase", "GitHub Pages", "SEO", "Google Analytics"],
  },
  {
    title: "Andmed",
    items: ["PostgreSQL", "SQL", "Excel", "XML"],
  },
  {
    title: "Dokumendid",
    items: ["OCR", "Tesseract", "Poppler", "PDF", "Lokaalne AI"],
  },
];

function App() {
  useScrollSectionHash();

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#algus" aria-label="Töövoo automatiseerimise avaleht">
          <span>TA</span>
          Töövoo automatiseerimine
        </a>
        <nav className="nav" aria-label="Peamenüü">
          <a href="#valdkonnad">Mida ma ehitan</a>
          <a href="#moodulid">Projektid</a>
          <a href="#lahenemine">Lähenemine</a>
          <a href="#tehnoloogiad">Tehnoloogiad</a>
          <a className="nav-contact" href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main>
        <section id="algus" className="hero section-shell">
          <div className="hero-copy">
            <span className="eyebrow">Targemad töövood · vähem käsitööd</span>
            <h1>Teen inimeste töö lihtsamaks, kiiremaks ja kvaliteetsemaks.</h1>
            <p className="hero-lead">
              Automatiseerin korduvaid tööetappe ja ehitan selgeid töövahendeid,
              mis vähendavad käsitööd, ennetavad vigu ja hoiavad aega kokku.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#moodulid">
                Vaata projekte <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#valdkonnad">Mida ma ehitan</a>
            </div>
            <div className="hero-trust" aria-label="Töövaldkonnad">
              <span><Workflow size={17} /> Terviklikud töövood</span>
              <span><Settings2 size={17} /> Vähem korduvat tööd</span>
              <span><FileCheck2 size={17} /> Kindlam kvaliteet</span>
              <span><AppWindow size={17} /> Lihtsad töövahendid</span>
            </div>
          </div>
          <HeroSystemVisual />
        </section>

        <section id="valdkonnad" className="services-band">
          <div className="section-shell services-section">
            <SectionHeader eyebrow="Töövaldkonnad" title="Mida ma ehitan">
              Lähenen automatiseerimisele töö, mitte failivormingu kaudu. Eesmärk on
              eemaldada tarbetud sammud, kiirendada protsessi ja muuta tulemus
              ühtlasemaks ning usaldusväärsemaks.
            </SectionHeader>
            <div className="services-grid">
              {expertise.map((item) => (
                <ServiceCard key={item.title} icon={item.icon} title={item.title}>
                  {item.text}
                </ServiceCard>
              ))}
            </div>
          </div>
        </section>

        <section id="moodulid" className="section-shell work-section">
          <SectionHeader eyebrow="Põhirakendus" title="Dokumenditöötluse terviktöövoog">
            Viis järjestikust moodulit viivad ligikaudu 150-leheküljelise skanni
            töötlemisest ja dokumentide eraldamisest kuni metaandmete kontrolli ning
            PostgreSQL-i uuendamiseni. Automaatika teeb põhitöö, inimene sekkub ainult
            siis, kui tulemus vajab otsustamist või parandamist.
          </SectionHeader>
          <DocumentSystem />
        </section>

        <section id="raim-ruudus" className="section-shell public-work-section">
          <SectionHeader eyebrow="Avalik veebiprojekt" title="Räim Ruudus">
            Naissaare baari veebileht on avalik ja kasutuses. All on päris lehe
            ekraanipilt, mitte kujundusmakett.
          </SectionHeader>
          <PublicProject project={publicProject} />
        </section>

        <section id="muud-projektid" className="section-shell other-work-section">
          <SectionHeader eyebrow="Muud projektid" title="Väiksemad tööriistad">
            Need projektid lahendavad konkreetseid korduvaid tööülesandeid ja
            vähendavad aega, mis kulub käsitsi kontrollimisele või info sisestamisele.
          </SectionHeader>
          <OtherProjects projects={otherProjects} />
        </section>

        <section id="lahenemine" className="section-shell about-section">
          <div className="about-heading">
            <span className="eyebrow">Minu lähenemine</span>
            <h2>Alustan tööst, mitte tehnoloogiast.</h2>
            <p>
              Enamik minu projekte algab päris tööprobleemist: mõni tegevus kordub
              iga päev, info tuleb mitu korda ümber sisestada või kvaliteedi
              tagamiseks kulub liiga palju aega käsitsi kontrollimisele.
            </p>
          </div>
          <ol className="approach-steps">
            {approachSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="security-note">
            <ShieldCheck size={18} />
            Lehel on päris rakenduste vaated. Näidisdokumendid on fiktiivsed ning
            paroolid, sisevõrgu aadressid ja päris tööandmed on eemaldatud.
          </p>
        </section>

        <section id="tehnoloogiad" className="section-shell tech-section">
          <SectionHeader eyebrow="Tehnoloogiad" title="Vahendid, mida ma kasutan">
            Valin tehnoloogia selle järgi, kus tööriist töötab, milliseid andmeid
            see kasutab ja kuidas seda hiljem hooldada saab.
          </SectionHeader>
          <div className="technology-groups">
            {technologyGroups.map((group) => (
              <section key={group.title} className="technology-group">
                <h3>{group.title}</h3>
                <div className="tech-list">
                  {group.items.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section id="kontakt" className="contact-band">
          <div className="section-shell contact-section">
            <div>
              <span className="eyebrow">Kontakt</span>
              <h2>Kirjelda tööd, mis võtab praegu liiga palju käsitsi tegemist.</h2>
              <p>
                Piisab lühikesest näitest: kuidas töö praegu käib, millised sammud
                võtavad kõige rohkem aega ja milline võiks olla parem lõpptulemus.
              </p>
            </div>
            <a
              className="contact-card"
              href="mailto:germo.eismann@example.com"
              aria-label="Kirjuta Germo Eismannile e-postiga"
            >
              <Mail size={21} />
              <span>
                <small>E-post</small>
                germo.eismann@example.com
              </span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <span>© {new Date().getFullYear()} Germo Eismann</span>
          <span>Töövoo automatiseerimine · kiirem töö · kindlam kvaliteet</span>
        </div>
      </footer>
    </>
  );
}

export default App;
