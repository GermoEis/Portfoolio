import { useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";

const facts = [
  ["problem", "Probleem"],
  ["simplified", "Mida lahendus lihtsustas"],
  ["role", "Minu roll"],
];

export default function FeaturedProject({ project }) {
  const base = import.meta.env.BASE_URL;
  const gallery = project.gallery ?? [];
  const [active, setActive] = useState(0);
  const current = gallery[active];

  const supportingUrl = project.supportingDocument
    ? `${base}${project.supportingDocument}`
    : null;

  return (
    <article className="featured">
      <div className="featured-gallery">
        <span className="featured-flag">Esiletõstetud töö</span>
        <div className="featured-stage">
          <img
            src={`${base}${current.src}`}
            alt={current.alt}
            loading="lazy"
          />
        </div>
        {gallery.length > 1 ? (
          <div className="featured-thumbs" role="tablist" aria-label={`${project.title} vaated`}>
            {gallery.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`featured-thumb${index === active ? " is-active" : ""}`}
                onClick={() => setActive(index)}
              >
                <img src={`${base}${shot.src}`} alt="" loading="lazy" />
                <span>{shot.label}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="featured-copy">
        <span className="project-kicker">{project.type}</span>
        <h3>{project.title}</h3>
        <dl className="featured-facts">
          {facts.map(([key, label]) => (
            <div key={key}>
              <dt>{label}</dt>
              <dd>{project[key]}</dd>
            </div>
          ))}
        </dl>
        <div className="tag-list" aria-label={`${project.title} tehnoloogiad`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        {supportingUrl ? (
          <div className="project-links">
            <a className="text-link" href={supportingUrl} target="_blank" rel="noreferrer">
              <FileText size={15} /> Ava näidis-PDF <ArrowUpRight size={14} />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
