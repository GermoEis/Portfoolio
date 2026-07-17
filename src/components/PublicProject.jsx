import { ArrowUpRight, Radio } from "lucide-react";
import ProjectFacts from "./ProjectFacts.jsx";

export default function PublicProject({ project }) {
  return (
    <article className="public-project">
      <a
        className="public-project-shot"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Ava Räim Ruudus veebileht"
      >
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </a>
      <div className="public-project-copy">
        <span className="live-label"><Radio size={15} /> Reaalselt kasutuses</span>
        <span className="project-kicker">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ProjectFacts project={project} className="project-facts" />
        <div className="tag-list">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
          Ava veebileht <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}
