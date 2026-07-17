import { ArrowUpRight, ChevronDown, FileText, Workflow } from "lucide-react";
import ProjectFacts from "./ProjectFacts.jsx";

const compactFields = [
  ["problem", "Probleem"],
  ["role", "Minu roll"],
];

export default function ProjectCard({ project, featured = false, compact = false }) {
  const imageUrl = project.image
    ? `${import.meta.env.BASE_URL}${project.image}`
    : null;
  const supportingUrl = project.supportingDocument
    ? `${import.meta.env.BASE_URL}${project.supportingDocument}`
    : null;

  return (
    <article className={`project-card${featured ? " is-featured" : ""}${compact ? " is-compact" : ""}`}>
      {imageUrl ? (
        <div className="project-visual">
          <img src={imageUrl} alt={project.imageAlt} loading="lazy" />
        </div>
      ) : (
        <div className="project-visual project-visual-placeholder" aria-hidden="true">
          <Workflow size={28} strokeWidth={1.5} />
          <span>{project.visualLabel}</span>
        </div>
      )}
      <div className="project-card-copy">
        <span className="project-kicker">{project.type}</span>
        <h3>{project.title}</h3>

        {compact ? (
          <>
            <p className="project-summary">{project.simplified}</p>
            <details className="project-details">
              <summary>
                Probleem ja minu roll <ChevronDown size={16} />
              </summary>
              <ProjectFacts project={project} fields={compactFields} />
            </details>
          </>
        ) : (
          <ProjectFacts project={project} />
        )}

        <div className="tag-list" aria-label={`${project.title} tehnoloogiad`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-links">
          {supportingUrl ? (
            <a className="text-link" href={supportingUrl} target="_blank" rel="noreferrer">
              <FileText size={16} /> Ava näidis-PDF
            </a>
          ) : null}
          {project.liveUrl ? (
            <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Ava veebileht <ArrowUpRight size={17} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
