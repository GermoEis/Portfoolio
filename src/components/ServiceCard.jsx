export default function ServiceCard({ icon: Icon, title, children }) {
  return (
    <article className="service-card">
      <div className="service-icon">
        <Icon size={22} strokeWidth={1.7} />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
