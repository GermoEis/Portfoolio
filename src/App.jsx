import {
  AppWindow,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Database,
  FileCheck2,
  GraduationCap,
  Mail,
  Plug,
  Settings2,
  Workflow,
} from "lucide-react";
import ProjectCard from "./components/ProjectCard.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import { projects } from "./data/projects.js";

const approachSteps = [
  {
    title: "Kaardistan praeguse töö",
    text: "Vaatan läbi, kuidas protsess täna käib, kus kulub enim aega ning millised erandid vajavad inimese otsust.",
  },
  {
    title: "Piiran lahenduse ulatuse",
    text: "Selgitan välja tegeliku vajaduse ja automatiseerin ainult selle osa, mis päriselt aega võtab. Mugavad lisad võivad oodata.",
  },
  {
    title: "Ehitan olemasoleva ümber",
    text: "Kasutan võimalusel juba kasutusel olevaid töövahendeid ning valin väikseima tehnilise lahenduse, mis põhiülesande ära teeb.",
  },
  {
    title: "Testin ja jätan kontrollkoha",
    text: "Proovin lahendust päris tööjuhtumitega. Ebaselged tulemused jäävad inimese kinnitada ning täiendused sünnivad tegelikust kasutusest.",
  },
];

const services = [
  {
    icon: Workflow,
    index: "01",
    title: "Automatiseerimine ja failitöö",
    text: "Seon korduvad sammud üheks arusaadavaks töövooks, et vähendada käsitsi sisestamist, kopeerimist ja failide liigutamist.",
    items: ["Korduvad tööetapid", "Excel, PDF ja XML", "Failide ja kaustade liikumine"],
  },
  {
    icon: Database,
    index: "02",
    title: "Andmed ja kontroll",
    text: "Korrastan sisendandmed, võrdlen neid reeglitega ning toon vead ja erandid selgelt välja.",
    items: ["SQL ja PostgreSQL", "Andmete valideerimine", "Kontrollitavad uuendused"],
  },
  {
    icon: AppWindow,
    index: "03",
    title: "Sisemised tööriistad",
    text: "Teen konkreetse ülesandega Pythoni tööriistu, töölauarakendusi ja lihtsaid veebivaateid.",
    items: ["Python", "Töölauarakendused", "Sisemised veebivaated"],
  },
  {
    icon: Plug,
    index: "04",
    title: "Süsteemide ühendamine",
    text: "Panen olemasolevad töövahendid infot vahetama ning kasutan AI-d seal, kus see aitab infot tuvastada või eeltöödelda.",
    items: ["API-d ja andmevahetus", "AI tööprotsessi toeks", "Inimese kontroll eranditele"],
  },
];

const certificateUrl = `${import.meta.env.BASE_URL}sertifikaat.pdf`;

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#algus" aria-label="Germo Eismanni avaleht">
          <span className="brand-mark">GE</span>
          <span className="brand-copy">
            <strong>Germo Eismann</strong>
            <small>arendus · automatiseerimine</small>
          </span>
        </a>
        <nav className="nav" aria-label="Peamenüü">
          <a href="#tooviis">Kuidas töötan</a>
          <a href="#lahendused">Lahendused</a>
          <a href="#projektid">Tehtud tööd</a>
          <a href="#minust">Minust</a>
          <a className="nav-contact" href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main>
        <section id="algus" className="hero section-shell">
          <div className="hero-copy">
            <span className="eyebrow">Arendus · automatiseerimine · andmed</span>
            <h1>Rätseplahendused tööprotsesside lihtsustamiseks.</h1>
            <p className="hero-lead">
              Loon automatiseeringuid, andmelahendusi ja veebitööriistu tegeliku
              vajaduse järgi. Automatiseerin ainult selle osa, mis päriselt aega
              võtab — ilma üleliigsete funktsioonide ja ebavajaliku keerukuseta.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#kontakt">
                Räägi oma vajadusest <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href="#lahendused">
                Vaata, kuidas saan aidata
              </a>
            </div>
            <div className="hero-principles" aria-label="Lahenduste põhimõtted">
              <span><Settings2 size={16} /> Ei suuremat süsteemi kui vaja</span>
              <span><Workflow size={16} /> Olemasolevad töövahendid enne uut</span>
              <span><FileCheck2 size={16} /> Ebaselge tulemus inimesele</span>
            </div>
          </div>

          <div className="developer-workflow" aria-label="Näide praktilise automatiseerimise töövoost">
            <div className="workflow-toolbar">
              <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
              <code>workflow.py</code>
              <small>praktiline töövoog</small>
            </div>
            <div className="workflow-canvas">
              <div className="workflow-step is-source">
                <span>01</span>
                <div>
                  <strong>Leia päris ajakulu</strong>
                  <code>käsitöö · kordused · vead</code>
                </div>
              </div>
              <div className="workflow-line"><ArrowDown size={16} /></div>
              <div className="workflow-step is-action">
                <span>02</span>
                <div>
                  <strong>Automatiseeri vajalik osa</strong>
                  <code>Python · SQL · API</code>
                </div>
              </div>
              <div className="workflow-branch">
                <div className="branch-question"><span>?</span> Kas tulemus on kindel?</div>
                <div className="branch-options">
                  <div><small>JAH</small><strong>Jätka olemasolevas süsteemis</strong></div>
                  <div className="is-human"><small>EI</small><strong>Jäta inimesele kontrollida</strong></div>
                </div>
              </div>
              <div className="workflow-note">
                <CheckCircle2 size={17} />
                <span><strong>Põhimõte:</strong> ehitan ainult selle, mida töö päriselt vajab.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="tooviis" className="process-band">
          <div className="section-shell process-section">
            <div className="process-intro">
              <SectionHeader eyebrow="Kuidas ma töötan" title="Probleemist toimiva tööriistani">
                Enne arendamist tuleb aru saada, milline osa tööst vajab muutmist.
                Tehnoloogia on vahend, mitte lähtekoht.
              </SectionHeader>
              <p className="process-callout">
                Hea lahendus ei pea tegema kõike. See peab eemaldama kõige tüütuma
                käsitöö ja jätma otsustamist vajavad kohad nähtavaks.
              </p>
            </div>
            <ol className="process-steps">
              {approachSteps.map((step) => (
                <li key={step.title}>
                  <span className="process-number" aria-hidden="true" />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="lahendused" className="services-band">
          <div className="section-shell services-section">
            <SectionHeader eyebrow="Milliseid lahendusi teen" title="Neli praktilist võimekust">
              Lahendus võib olla väike skript, andmebaasipäring, sisemine veebivaade
              või mitut süsteemi ühendav töövoog. Maht sõltub ülesandest.
            </SectionHeader>
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  index={service.index}
                  items={service.items}
                  title={service.title}
                >
                  {service.text}
                </ServiceCard>
              ))}
            </div>
          </div>
        </section>

        <section id="python" className="section-shell python-section">
          <div className="python-heading">
            <span className="eyebrow">Python ja õppimine</span>
            <h2>Python praktiliste tööriistade loomiseks</h2>
          </div>
          <div className="python-copy">
            <p>
              Olen õppinud Pythonit ning kasutan seda automatiseerimise,
              andmetöötluse ja praktiliste tööriistade loomiseks. Õppimine jätkub
              projektide kaudu: uus tehniline võimalus on kasulik siis, kui oskan
              selle siduda konkreetse töö ja arusaadava tulemusega.
            </p>
            <div className="python-tags" aria-label="Pythoni kasutusvaldkonnad">
              <span>Failid ja dokumendid</span>
              <span>Andmete kontroll</span>
              <span>Automatiseerimine</span>
              <span>Lihtsad kasutajavaated</span>
            </div>
          </div>
          <a
            className="button button-secondary certificate-link"
            href={certificateUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GraduationCap size={18} /> Vaata Pythoni sertifikaati
          </a>
        </section>

        <section id="projektid" className="projects-band">
          <div className="section-shell projects-section">
            <SectionHeader eyebrow="Valik tehtud lahendusi" title="Probleem, lihtsustus ja tulemus">
              Kolm erineva mahuga näidet sellest, kuidas tehniline lahendus saab
              konkreetset tööd vähem käsitsi tehtavaks muuta.
            </SectionHeader>
            <div className="projects-layout">
              <ProjectCard project={projects[0]} featured />
              <div className="secondary-projects">
                {projects.slice(1).map((project) => (
                  <ProjectCard key={project.title} project={project} compact />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="minust" className="about-band">
          <div className="section-shell about-section">
            <div className="about-heading">
              <span className="eyebrow">Minust</span>
              <h2>Protsessi mõistmine enne koodi.</h2>
            </div>
            <div className="about-copy">
              <p>
                Olen praktilise mõtlemisega arendaja. Mind huvitab enne koodi see,
                kuidas töö päriselt käib: kes seda teeb, millist infot on vaja ja
                millistes kohtades tekib ajakulu või eksimisvõimalus.
              </p>
              <p>
                Ma ei alusta tehnoloogiast, vaid probleemist. Kui ülesande saab
                lahendada väikese automatiseeringu või olemasolevate vahendite
                ühendamisega, ei ole põhjust ehitada suurt süsteemi.
              </p>
            </div>
            <ul className="about-principles">
              <li><CheckCircle2 size={17} /> Väikseim toimiv lahendus</li>
              <li><CheckCircle2 size={17} /> Nähtavad erandid</li>
              <li><CheckCircle2 size={17} /> Täiendused päris kasutusest</li>
            </ul>
          </div>
        </section>

        <section id="kontakt" className="contact-band">
          <div className="section-shell contact-section">
            <div>
              <span className="eyebrow">Kontakt</span>
              <h2>Kas mõni tööetapp võtab liiga palju käsitööd?</h2>
              <p>
                Kirjelda mulle olukorda. Vaatan, kas seda saab mõistlikult
                lihtsustada või automatiseerida.
              </p>
            </div>
            <a
              className="contact-card"
              href="mailto:germo.eismann@example.com"
              aria-label="Kirjuta Germo Eismannile e-postiga"
            >
              <Mail size={20} />
              <span>
                <small>E-post</small>
                germo.eismann@example.com
              </span>
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <span>© {new Date().getFullYear()} Germo Eismann</span>
          <span>Rätseplahendused · automatiseerimine · andmetöö</span>
        </div>
      </footer>
    </>
  );
}

export default App;
