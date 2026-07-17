import { useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
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

function FeaturedGallery({ project }) {
  const gallery = project.gallery ?? [];
  const [active, setActive] = useState(0);
  const current = gallery[active] ?? { src: project.image, alt: project.imageAlt };

  return (
    <div className="ed-featured-media">
      <div className="ed-stage">
        <img src={`${base}${current.src}`} alt={current.alt} loading="lazy" />
      </div>
      {gallery.length > 1 ? (
        <div className="ed-filmstrip" role="tablist" aria-label={`${project.title} vaated`}>
          {gallery.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`ed-frame${index === active ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              <img src={`${base}${shot.src}`} alt="" loading="lazy" />
              <span>{shot.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function EditorialDesign() {
  const featured = projects[0];
  const others = projects.slice(1);
  const supportingUrl = featured.supportingDocument
    ? `${base}${featured.supportingDocument}`
    : null;

  return (
    <div className="ed">
      <header className="ed-header">
        <a className="ed-brand" href="#algus">
          Germo Eismann
          <span>arendus · automatiseerimine</span>
        </a>
        <nav className="ed-nav" aria-label="Peamenüü">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="algus" className="ed-hero">
          <p className="ed-eyebrow">{hero.eyebrow}</p>
          <h1 className="ed-display">
            Rätseplahendused tööprotsesside <em>lihtsustamiseks.</em>
          </h1>
          <div className="ed-hero-grid">
            <p className="ed-lead">{hero.lead}</p>
            <dl className="ed-hero-meta">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="ed-hero-actions">
            <a className="ed-button" href="#kontakt">
              Räägi oma vajadusest <ArrowUpRight size={16} />
            </a>
            <a className="ed-textlink" href="#projektid">Vaata tehtud töid</a>
          </div>
        </section>

        <section id="tooviis" className="ed-section ed-approach">
          <div className="ed-section-head">
            <span className="ed-index">01 — Kuidas ma töötan</span>
            <h2 className="ed-heading">Neli põhimõtet, mille järgi lahenduse ehitan.</h2>
            <p className="ed-section-lead">
              Ma ei alusta tehnoloogiast, vaid probleemist. Hea lahendus ei pea tegema
              kõike — see peab eemaldama tüütuima käsitöö ja jätma otsustamist vajavad
              kohad nähtavaks.
            </p>
          </div>
          <ol className="ed-principles">
            {approachPrinciples.map((principle, index) => (
              <li key={principle.title}>
                <span className="ed-principle-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="lahendused" className="ed-section ed-services">
          <div className="ed-section-head">
            <span className="ed-index">02 — Milliseid lahendusi teen</span>
            <h2 className="ed-heading">Kolm valdkonda, üks eesmärk: vähem käsitööd.</h2>
          </div>
          <div className="ed-service-list">
            {services.map((service) => (
              <article key={service.title} className="ed-service">
                <span className="ed-service-num">{service.index}</span>
                <div className="ed-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ul className="ed-service-tags">
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="ed-python">
            <span>Python praktiliste tööriistade loomiseks.</span> Kasutan Pythonit
            automatiseerimiseks, andmetöötluseks ja tööriistade loomiseks.
            <a href={certificateUrl} target="_blank" rel="noreferrer">
              Vaata sertifikaati <ArrowUpRight size={14} />
            </a>
          </p>
        </section>

        <section id="projektid" className="ed-section ed-projects">
          <div className="ed-section-head">
            <span className="ed-index">03 — Valik tehtud lahendusi</span>
            <h2 className="ed-heading">Probleem, lihtsustus ja tulemus.</h2>
          </div>

          <article className="ed-featured">
            <FeaturedGallery project={featured} />
            <div className="ed-featured-copy">
              <span className="ed-flag">Esiletõstetud töö</span>
              <p className="ed-project-type">{featured.type}</p>
              <h3>{featured.title}</h3>
              <dl className="ed-facts">
                {featuredFacts.map(([key, label]) => (
                  <div key={key}>
                    <dt>{label}</dt>
                    <dd>{featured[key]}</dd>
                  </div>
                ))}
              </dl>
              <ul className="ed-tags">
                {featured.technologies.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
              {supportingUrl ? (
                <a className="ed-textlink" href={supportingUrl} target="_blank" rel="noreferrer">
                  <FileText size={15} /> Ava näidis-PDF <ArrowUpRight size={14} />
                </a>
              ) : null}
            </div>
          </article>

          <div className="ed-others">
            {others.map((project, index) => (
              <article key={project.title} className={`ed-other${index % 2 ? " is-flipped" : ""}`}>
                <div className="ed-other-media">
                  {project.image ? (
                    <img src={`${base}${project.image}`} alt={project.imageAlt} loading="lazy" />
                  ) : (
                    <div className="ed-other-placeholder" aria-hidden="true">
                      <code>{project.visualLabel}</code>
                    </div>
                  )}
                </div>
                <div className="ed-other-copy">
                  <p className="ed-project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="ed-other-summary">{project.simplified}</p>
                  <ul className="ed-tags">
                    {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                  {project.liveUrl ? (
                    <a className="ed-textlink" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Ava veebileht <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="minust" className="ed-section ed-about">
          <div className="ed-section-head">
            <span className="ed-index">04 — Minust</span>
            <h2 className="ed-heading">{about.title}</h2>
          </div>
          <div className="ed-about-grid">
            <div className="ed-about-copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="ed-about-principles">
              {about.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontakt" className="ed-section ed-contact">
          <span className="ed-index">05 — Kontakt</span>
          <h2 className="ed-contact-title">{contact.title}</h2>
          <p className="ed-contact-lead">{contact.text}</p>
          <a className="ed-contact-mail" href={`mailto:${contactEmail}`}>
            {contactEmail} <ArrowUpRight size={28} />
          </a>
        </section>
      </main>

      <footer className="ed-footer">
        <span>© {new Date().getFullYear()} Germo Eismann</span>
        <span>Rätseplahendused · automatiseerimine · andmetöö</span>
      </footer>
    </div>
  );
}
