import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
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

function WindowGallery({ project }) {
  const gallery = project.gallery ?? [];
  const [active, setActive] = useState(0);
  const current = gallery[active] ?? { src: project.image, alt: project.imageAlt, label: project.title };

  return (
    <div className="mn-window">
      <div className="mn-window-bar">
        <span className="mn-dots" aria-hidden="true"><i /><i /><i /></span>
        <code>{current.label ?? project.title}</code>
      </div>
      {gallery.length > 1 ? (
        <div className="mn-tabs" role="tablist" aria-label={`${project.title} vaated`}>
          {gallery.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`mn-tab${index === active ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              {shot.label}
            </button>
          ))}
        </div>
      ) : null}
      <div className="mn-window-body">
        <img src={`${base}${current.src}`} alt={current.alt} loading="lazy" />
      </div>
    </div>
  );
}

export default function MonoDesign() {
  const featured = projects[0];
  const others = projects.slice(1);
  const supportingUrl = featured.supportingDocument
    ? `${base}${featured.supportingDocument}`
    : null;

  return (
    <div className="mn">
      <header className="mn-header">
        <a className="mn-brand" href="#algus">
          <span className="mn-prompt">~/</span>germo-eismann
        </a>
        <nav className="mn-nav" aria-label="Peamenüü">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main className="mn-main">
        <section id="algus" className="mn-hero">
          <p className="mn-eyebrow"><span className="mn-caret">&gt;</span> {hero.eyebrow}</p>
          <h1 className="mn-hero-title">
            Rätseplahendused tööprotsesside lihtsustamiseks<span className="mn-cursor" aria-hidden="true" />
          </h1>
          <p className="mn-hero-lead">{hero.lead}</p>
          <div className="mn-hero-actions">
            <a className="mn-button" href="#kontakt">räägi_oma_vajadusest()</a>
            <a className="mn-button mn-button-ghost" href="#projektid">vaata_tehtud_töid()</a>
          </div>
          <dl className="mn-hero-stats">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="tooviis" className="mn-section">
          <header className="mn-section-head">
            <span className="mn-tag">01_kuidas_töötan</span>
            <h2 className="mn-h2">Neli põhimõtet, mille järgi lahenduse ehitan.</h2>
            <p className="mn-section-lead">
              Ma ei alusta tehnoloogiast, vaid probleemist. Hea lahendus ei pea tegema
              kõike — see peab eemaldama tüütuima käsitöö ja jätma otsustamist vajavad
              kohad nähtavaks.
            </p>
          </header>
          <ol className="mn-principles">
            {approachPrinciples.map((principle, index) => (
              <li key={principle.title}>
                <span className="mn-line">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="lahendused" className="mn-section">
          <header className="mn-section-head">
            <span className="mn-tag">02_lahendused</span>
            <h2 className="mn-h2">Kolm valdkonda, üks eesmärk: vähem käsitööd.</h2>
          </header>
          <div className="mn-services">
            {services.map((service) => (
              <article key={service.title} className="mn-service">
                <span className="mn-service-num">{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="mn-chips">
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mn-python">
            <code># python</code>
            <p>
              Kasutan Pythonit automatiseerimiseks, andmetöötluseks ja praktiliste
              tööriistade loomiseks. Õppimine jätkub projektide kaudu.
            </p>
            <a href={certificateUrl} target="_blank" rel="noreferrer">
              vaata_sertifikaati <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section id="projektid" className="mn-section mn-projects">
          <header className="mn-section-head">
            <span className="mn-tag">03_tehtud_tööd</span>
            <h2 className="mn-h2">Probleem, lihtsustus ja tulemus.</h2>
          </header>

          <article className="mn-featured">
            <WindowGallery project={featured} />
            <div className="mn-featured-copy">
              <span className="mn-flag"><span className="mn-caret">&gt;</span> esiletõstetud töö</span>
              <p className="mn-project-type">{featured.type}</p>
              <h3>{featured.title}</h3>
              <dl className="mn-facts">
                {featuredFacts.map(([key, label]) => (
                  <div key={key}>
                    <dt>{label}</dt>
                    <dd>{featured[key]}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mn-chips">
                {featured.technologies.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
              {supportingUrl ? (
                <a className="mn-textlink" href={supportingUrl} target="_blank" rel="noreferrer">
                  ava_näidis.pdf <ArrowUpRight size={14} />
                </a>
              ) : null}
            </div>
          </article>

          <div className="mn-others">
            {others.map((project) => (
              <article key={project.title} className="mn-other">
                <div className="mn-other-media">
                  {project.image ? (
                    <img src={`${base}${project.image}`} alt={project.imageAlt} loading="lazy" />
                  ) : (
                    <div className="mn-other-placeholder" aria-hidden="true">
                      <code>{project.visualLabel}</code>
                    </div>
                  )}
                </div>
                <div className="mn-other-copy">
                  <p className="mn-project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="mn-other-summary">{project.simplified}</p>
                  <ul className="mn-chips">
                    {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                  {project.liveUrl ? (
                    <a className="mn-textlink" href={project.liveUrl} target="_blank" rel="noreferrer">
                      ava_veebileht <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="minust" className="mn-section mn-about">
          <header className="mn-section-head">
            <span className="mn-tag">04_minust</span>
            <h2 className="mn-h2">{about.title}</h2>
          </header>
          <div className="mn-about-grid">
            <div className="mn-about-copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mn-about-principles">
              {about.principles.map((item) => (
                <li key={item}><span className="mn-caret">&gt;</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontakt" className="mn-section mn-contact">
          <span className="mn-tag">05_kontakt</span>
          <h2 className="mn-contact-title">{contact.title}</h2>
          <p className="mn-contact-lead">{contact.text}</p>
          <a className="mn-contact-mail" href={`mailto:${contactEmail}`}>
            <span className="mn-prompt">mailto:</span>{contactEmail}
            <ArrowUpRight size={22} />
          </a>
        </section>
      </main>

      <footer className="mn-footer">
        <span>© {new Date().getFullYear()} Germo Eismann</span>
        <span>rätseplahendused · automatiseerimine · andmetöö</span>
      </footer>
    </div>
  );
}
