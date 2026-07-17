import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  about,
  approachPrinciples,
  base,
  certificateUrl,
  contact,
  contactEmail,
  featuredFacts,
  hero,
  nav,
  projects,
  services,
} from "../data/content.js";

function FeaturedViewer({ project }) {
  const gallery = project.gallery ?? [];
  const [active, setActive] = useState(0);
  const current = gallery[active] ?? { src: project.image, alt: project.imageAlt };

  return (
    <div className="gr-viewer">
      <div className="gr-stage">
        <img src={`${base}${current.src}`} alt={current.alt} loading="lazy" />
      </div>
      {gallery.length > 1 ? (
        <div className="gr-tabs" role="tablist" aria-label={`${project.title} vaated`}>
          {gallery.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`gr-tab${index === active ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span className="gr-tab-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="gr-tab-label">{shot.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function GridDesign() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <div className="gr">
      <header className="gr-header">
        <a className="gr-brand" href="#algus">Germo Eismann</a>
        <nav className="gr-nav" aria-label="Peamenüü">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="algus" className="gr-hero">
          <p className="gr-kicker"><i className="gr-dot" />{hero.eyebrow}</p>
          <h1 className="gr-hero-title">
            Rätseplahendused<br />tööprotsesside<br /><mark>lihtsustamiseks.</mark>
          </h1>
          <div className="gr-hero-foot">
            <p className="gr-hero-lead">{hero.lead}</p>
            <dl className="gr-hero-stats">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="gr-hero-actions">
              <a className="gr-button" href="#kontakt">Räägi oma vajadusest <ArrowRight size={16} /></a>
              <a className="gr-button gr-button-ghost" href="#projektid">Vaata tehtud töid</a>
            </div>
          </div>
        </section>

        <section id="tooviis" className="gr-section">
          <div className="gr-rowhead">
            <span className="gr-label">01 / Kuidas ma töötan</span>
            <h2 className="gr-h2">Neli põhimõtet, mille järgi lahenduse ehitan.</h2>
            <p className="gr-rowhead-lead">
              Ma ei alusta tehnoloogiast, vaid probleemist. Hea lahendus ei pea tegema
              kõike — see peab eemaldama tüütuima käsitöö ja jätma otsustamist vajavad
              kohad nähtavaks.
            </p>
          </div>
          <ol className="gr-grid-4">
            {approachPrinciples.map((principle, index) => (
              <li key={principle.title} className="gr-cell">
                <span className="gr-cell-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="lahendused" className="gr-section">
          <div className="gr-rowhead">
            <span className="gr-label">02 / Milliseid lahendusi teen</span>
            <h2 className="gr-h2">Kolm valdkonda, üks eesmärk: vähem käsitööd.</h2>
          </div>
          <div className="gr-grid-3">
            {services.map((service) => (
              <article key={service.title} className="gr-cell">
                <span className="gr-cell-num">{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="gr-ticklist">
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="gr-python">
            <span className="gr-label">Python</span>
            <p>
              Kasutan Pythonit automatiseerimiseks, andmetöötluseks ja praktiliste
              tööriistade loomiseks. Õppimine jätkub projektide kaudu.
            </p>
            <a href={certificateUrl} target="_blank" rel="noreferrer">
              Vaata sertifikaati <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section id="projektid" className="gr-section gr-projects">
          <div className="gr-rowhead">
            <span className="gr-label">03 / Valik tehtud lahendusi</span>
            <h2 className="gr-h2">Probleem, lihtsustus ja tulemus.</h2>
          </div>

          <article className="gr-featured">
            <div className="gr-featured-meta">
              <span className="gr-flag"><i className="gr-dot" />Esiletõstetud töö</span>
              <p className="gr-project-type">{featured.type}</p>
              <h3>{featured.title}</h3>
              <dl className="gr-facts">
                {featuredFacts.map(([key, label]) => (
                  <div key={key}>
                    <dt>{label}</dt>
                    <dd>{featured[key]}</dd>
                  </div>
                ))}
              </dl>
              <ul className="gr-tags">
                {featured.technologies.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
            </div>
            <FeaturedViewer project={featured} />
          </article>

          <div className="gr-grid-2">
            {others.map((project) => (
              <article key={project.title} className="gr-project">
                <div className="gr-project-media">
                  {project.image ? (
                    <img src={`${base}${project.image}`} alt={project.imageAlt} loading="lazy" />
                  ) : (
                    <div className="gr-project-placeholder" aria-hidden="true">
                      <code>{project.visualLabel}</code>
                    </div>
                  )}
                </div>
                <p className="gr-project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="gr-project-summary">{project.simplified}</p>
                <ul className="gr-tags">
                  {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
                {project.liveUrl ? (
                  <a className="gr-textlink" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ava veebileht <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="minust" className="gr-section gr-about">
          <div className="gr-rowhead">
            <span className="gr-label">04 / Minust</span>
            <h2 className="gr-h2">{about.title}</h2>
          </div>
          <div className="gr-about-grid">
            <div className="gr-about-copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="gr-about-principles">
              {about.principles.map((item) => (
                <li key={item}><i className="gr-dot" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontakt" className="gr-section gr-contact">
          <span className="gr-label">05 / Kontakt</span>
          <h2 className="gr-contact-title">{contact.title}</h2>
          <p className="gr-contact-lead">{contact.text}</p>
          <a className="gr-contact-mail" href={`mailto:${contactEmail}`}>
            <span>{contactEmail}</span>
            <ArrowRight size={22} />
          </a>
        </section>
      </main>

      <footer className="gr-footer">
        <span>© {new Date().getFullYear()} Germo Eismann</span>
        <span>Rätseplahendused · automatiseerimine · andmetöö</span>
      </footer>
    </div>
  );
}
