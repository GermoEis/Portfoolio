const options = [
  { id: "editorial", num: "01", label: "Editorial" },
  { id: "grid", num: "02", label: "Ruudustik" },
  { id: "mono", num: "03", label: "Terminal" },
];

export default function DesignSwitcher({ value, onChange }) {
  return (
    <div className="design-switcher" role="group" aria-label="Vali kujundus">
      <span className="design-switcher-label">Kujundus</span>
      <div className="design-switcher-options">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`design-switcher-btn${value === option.id ? " is-active" : ""}`}
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
          >
            <span className="design-switcher-num">{option.num}</span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
