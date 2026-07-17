import { ArrowUpRight, ChevronDown, FileText, Workflow } from "lucide-react";

const detailFields = [
  ["problem", "Probleem"],
  ["role", "Minu roll"],
];

export default function ProjectCard({ project }) {
  const base = import.meta.env.BASE_URL;
  const imageUrl = project.image ? `${base}${project.image}` : null;
  const supportingUrl = project.supportingDocument
    ? `${base}${project.supportingDocument}`
    : null;

  return (
    <article className="project-card">
      {imageUrl ? (
        <div className="project-visual">
          <img src={imageUrl} alt={project.imageAlt} loading="lazy" />
        </div>
      ) : (
        <div className="project-visual is-placeholder" aria-hidden="true">
          <Workflow size={24} strokeWidth={1.5} />
          <span>{project.visualLabel}</span>
        </div>
      )}
      <div className="project-card-copy">
        <span className="project-kicker">{project.type}</span>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.simplified}</p>

        <details className="project-details">
          <summary>
            Probleem ja minu roll <ChevronDown size={15} />
          </summary>
          <dl className="project-story">
            {detailFields.map(([key, label]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{project[key]}</dd>
              </div>
            ))}
          </dl>
        </details>

        <div className="tag-list" aria-label={`${project.title} tehnoloogiad`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        {supportingUrl || project.liveUrl ? (
          <div className="project-links">
            {supportingUrl ? (
              <a className="text-link" href={supportingUrl} target="_blank" rel="noreferrer">
                <FileText size={15} /> Ava näidis-PDF
              </a>
            ) : null}
            {project.liveUrl ? (
              <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                Ava veebileht <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
