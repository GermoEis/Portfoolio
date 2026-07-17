import { useEffect, useState } from "react";
import { ArrowUpRight, Check, FileText } from "lucide-react";
import { documentModules } from "../data/documentModules.js";
import ProjectFacts from "./ProjectFacts.jsx";

function moduleFromHash() {
  if (typeof window === "undefined") return documentModules[0].id;
  const id = window.location.hash.slice(1);
  return documentModules.some((module) => module.id === id)
    ? id
    : documentModules[0].id;
}

export default function DocumentSystem() {
  const [activeId, setActiveId] = useState(moduleFromHash);
  const activeModule = documentModules.find((module) => module.id === activeId)
    ?? documentModules[0];

  useEffect(() => {
    const syncModuleWithHash = () => {
      const id = window.location.hash.slice(1);
      if (documentModules.some((module) => module.id === id)) setActiveId(id);
    };

    window.addEventListener("hashchange", syncModuleWithHash);
    return () => window.removeEventListener("hashchange", syncModuleWithHash);
  }, []);

  const selectModule = (id) => {
    setActiveId(id);
  };

  return (
    <article className="document-system">
      <div className="workspace-window">
        <header className="workspace-titlebar">
          <div>
            <span className="workspace-status" aria-hidden="true" />
            <strong>Dokumenditöötlus v1.0</strong>
          </div>
          <span>Ühine käivitus, seadistused ja logid</span>
        </header>

        <div className="workspace-layout">
          <nav className="workspace-nav" aria-label="Dokumenditöötluse moodulid" role="tablist">
            <span className="workspace-nav-label">Moodulid</span>
            {documentModules.map((module) => (
              <button
                id={module.id}
                key={module.id}
                type="button"
                role="tab"
                aria-selected={module.id === activeId}
                aria-controls="module-workspace-panel"
                className={module.id === activeId ? "is-active" : ""}
                style={{ "--module-accent": module.accent }}
                onClick={() => selectModule(module.id)}
              >
                <span className="module-code">{module.shortCode}</span>
                <span>
                  <strong>{module.name}</strong>
                  <small>{module.type}</small>
                </span>
              </button>
            ))}
          </nav>

          <section
            id="module-workspace-panel"
            className="workspace-main"
            role="tabpanel"
            aria-labelledby={activeModule.id}
          >
            <header className="workspace-main-header">
              <div>
                <span className="project-kicker">Päris rakenduse ekraanipilt</span>
                <h3>{activeModule.name}</h3>
              </div>
              <span className="workspace-mode">{activeModule.type}</span>
            </header>
            <figure className="workspace-screenshot">
              <img
                key={activeModule.id}
                src={activeModule.image}
                alt={activeModule.imageAlt}
              />
              <figcaption>{activeModule.caption}</figcaption>
            </figure>
          </section>

          <aside className="workspace-context" aria-label="Näidisdokument ja mooduli tulemus">
            <div className="sample-document-heading">
              <FileText size={18} />
              <div>
                <strong>Anonüümne näidisdokument</strong>
                <span>PDF · 2 lehekülge · fiktiivsed andmed</span>
              </div>
            </div>
            <a
              className="sample-document-preview"
              href="/documents/naidisdokument.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Ava anonüümne näidis-PDF"
            >
              <img
                src="/images/naidisdokument-preview.png"
                alt="Fiktiivse saatekirja esimese lehe eelvaade"
              />
              <span>Ava näidis-PDF <ArrowUpRight size={15} /></span>
            </a>
            <div className="sample-output">
              <span className="workspace-nav-label">Mooduli näidistulemus</span>
              <dl>
                {activeModule.sampleOutput.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        <footer className="workspace-footer">
          <span><Check size={15} /> Näidisandmed</span>
          <span>Aktiivne moodul: {activeModule.name}</span>
        </footer>
      </div>

      <div aria-live="polite">
        <ProjectFacts project={activeModule} className="module-information" />
        <div className="module-technologies">
          <span className="project-kicker">Kasutatud tehnoloogiad</span>
          <div className="tag-list">
            {activeModule.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
