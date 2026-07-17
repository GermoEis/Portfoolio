const defaultFields = [
  ["problem", "Probleem"],
  ["simplified", "Mida lahendus lihtsustas"],
  ["role", "Minu roll"],
];

export default function ProjectFacts({ project, fields = defaultFields }) {
  return (
    <dl className="project-story">
      {fields.map(([key, label]) => (
        <div key={key}>
          <dt>{label}</dt>
          <dd>{project[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
