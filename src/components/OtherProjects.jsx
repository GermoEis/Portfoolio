import ProjectFacts from "./ProjectFacts.jsx";

export default function OtherProjects({ projects }) {
  return (
    <div className="other-projects">
      {projects.map((project) => (
        <article className="other-project" key={project.title}>
          <span className="project-kicker">{project.type}</span>
          <h3>{project.title}</h3>
          <ProjectFacts project={project} className="other-project-facts" />
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}
