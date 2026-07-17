const fields = [
  ["problem", "Probleem"],
  ["solution", "Lahendus"],
  ["role", "Minu roll"],
  ["result", "Tulemus"],
];

export default function ProjectFacts({ project, className = "" }) {
  return (
    <dl className={`project-story ${className}`.trim()}>
      {fields.map(([key, label]) => (
        <div key={key}>
          <dt>{label}</dt>
          <dd>{project[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
