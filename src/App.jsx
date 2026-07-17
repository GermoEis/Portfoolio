import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Database,
  FileCheck2,
  GraduationCap,
  Mail,
  Recycle,
  Scissors,
  UserCheck,
  Workflow,
} from "lucide-react";
import FeaturedProject from "./components/FeaturedProject.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import { projects } from "./data/projects.js";

const approachPrinciples = [
  {
    icon: Scissors,
    title: "Ehitan ainult vajaliku",
    text: "Automatiseerin selle osa, mis päriselt aega võtab. Mugavad lisad jäävad ootele, kuni neid päriselt vaja on.",
  },
  {
    icon: Recycle,
    title: "Automatiseerin korduva töö",
    text: "Käsitsi tehtavad kordused — kopeerimine, sisestamine, failide liigutamine — panen ühte selgesse töövoogu.",
  },
  {
    icon: Boxes,
    title: "Kasutan olemasolevaid vahendeid",
    text: "Enne uue süsteemi ehitamist vaatan, mida juba kasutatakse, ja valin väikseima lahenduse, mis töö ära teeb.",
  },
  {
    icon: UserCheck,
    title: "Ebaselge jääb inimesele",
    text: "Kindlad juhtumid liiguvad automaatselt edasi, ebaselged tulemused jäävad selgelt inimesele kinnitada.",
  },
];

const services = [
  {
    icon: Workflow,
    index: "01",
    title: "Automatiseerimine ja failitöö",
    text: "Seon korduvad sammud üheks arusaadavaks töövooks — käsitsi sisestamine, kopeerimine ja failide liigutamine kaovad taustale.",
    items: ["Korduvad tööetapid", "Excel, PDF ja XML", "Failide ja kaustade liikumine", "Pythoni tööriistad"],
  },
  {
    icon: Database,
    index: "02",
    title: "Andmed ja kontroll",
    text: "Korrastan sisendandmed, võrdlen neid reeglitega ning toon vead ja erandid selgelt välja — ka läbi API-de ja AI eeltöötluse.",
    items: ["SQL ja PostgreSQL", "Andmete valideerimine", "API-d ja andmevahetus", "AI tuvastuse toeks"],
  },
  {
    icon: FileCheck2,
    index: "03",
    title: "Sisemised tööriistad",
    text: "Teen konkreetse ülesandega töölauarakendusi ja veebivaateid, kus kindel töö liigub ise ja erandid jäävad inimesele.",
    items: ["Töölauarakendused", "Sisemised veebivaated", "Kontrollkohad kasutajale"],
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
                Räägi oma vajadusest <ArrowRight size={16} />
              </a>
              <a className="button button-secondary" href="#projektid">
                Vaata tehtud töid
              </a>
            </div>
            <dl className="hero-stats" aria-label="Ülevaade">
              <div>
                <dt>Fookus</dt>
                <dd>Praktilised töövood</dd>
              </div>
              <div>
                <dt>Peamised</dt>
                <dd>Python · SQL · React</dd>
              </div>
              <div>
                <dt>Põhimõte</dt>
                <dd>Väikseim toimiv lahendus</dd>
              </div>
            </dl>
          </div>

          <figure className="workflow" aria-label="Näide praktilise automatiseerimise töövoost">
            <figcaption className="workflow-toolbar">
              <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
              <code>workflow.py</code>
              <small>praktiline töövoog</small>
            </figcaption>
            <div className="workflow-canvas">
              <div className="workflow-step">
                <span>01</span>
                <div>
                  <strong>Leia päris ajakulu</strong>
                  <code>käsitöö · kordused · vead</code>
                </div>
              </div>
              <div className="workflow-connector" aria-hidden="true" />
              <div className="workflow-step is-action">
                <span>02</span>
                <div>
                  <strong>Automatiseeri vajalik osa</strong>
                  <code>Python · SQL · API</code>
                </div>
              </div>
              <div className="workflow-connector is-fork" aria-hidden="true" />
              <div className="workflow-branch">
                <div className="branch-option">
                  <small>Kindel</small>
                  <strong>Jätka olemasolevas süsteemis</strong>
                </div>
                <div className="branch-option is-human">
                  <small>Ebaselge</small>
                  <strong>Jäta inimesele kontrollida</strong>
                </div>
              </div>
            </div>
          </figure>
        </section>

        <section id="tooviis" className="approach-band">
          <div className="section-shell approach-section">
            <div className="approach-intro">
              <span className="eyebrow">Kuidas ma töötan</span>
              <h2>Neli põhimõtet, mille järgi lahenduse ehitan.</h2>
              <p>
                Ma ei alusta tehnoloogiast, vaid probleemist. Hea lahendus ei pea
                tegema kõike — see peab eemaldama tüütuima käsitöö ja jätma
                otsustamist vajavad kohad nähtavaks.
              </p>
            </div>
            <ul className="approach-list">
              {approachPrinciples.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="approach-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="lahendused" className="services-band">
          <div className="section-shell services-section">
            <div className="services-head">
              <span className="eyebrow">Milliseid lahendusi teen</span>
              <h2>Kolm valdkonda, üks eesmärk: vähem käsitööd.</h2>
            </div>
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

            <div className="python-banner">
              <div className="python-banner-icon" aria-hidden="true">
                <GraduationCap size={20} />
              </div>
              <div className="python-banner-copy">
                <strong>Python praktiliste tööriistade loomiseks</strong>
                <p>
                  Kasutan Pythonit automatiseerimiseks, andmetöötluseks ja
                  tööriistade loomiseks. Õppimine jätkub projektide kaudu.
                </p>
              </div>
              <a
                className="button button-secondary python-banner-link"
                href={certificateUrl}
                target="_blank"
                rel="noreferrer"
              >
                Vaata sertifikaati <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="projektid" className="projects-band">
          <div className="section-shell projects-section">
            <div className="projects-head">
              <span className="eyebrow">Valik tehtud lahendusi</span>
              <h2>Probleem, lihtsustus ja tulemus.</h2>
            </div>
            <FeaturedProject project={projects[0]} />
            <div className="secondary-projects">
              {projects.slice(1).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
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
                Kui ülesande saab lahendada väikese automatiseeringu või
                olemasolevate vahendite ühendamisega, ei ole põhjust ehitada suurt
                süsteemi.
              </p>
              <ul className="about-principles">
                <li><CheckCircle2 size={16} /> Väikseim toimiv lahendus</li>
                <li><CheckCircle2 size={16} /> Nähtavad erandid</li>
                <li><CheckCircle2 size={16} /> Täiendused päris kasutusest</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact-band">
          <div className="section-shell contact-section">
            <div className="contact-copy">
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
              <Mail size={19} />
              <span>
                <small>E-post</small>
                germo.eismann@example.com
              </span>
              <ArrowRight size={16} />
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
