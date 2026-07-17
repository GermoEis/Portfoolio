export default function ServiceCard({ icon: Icon, index, items, title, children }) {
  return (
    <article className="service-card">
      <div className="service-card-heading">
        <div className="service-icon">
          <Icon size={21} strokeWidth={1.7} />
        </div>
        <span>{index}</span>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
