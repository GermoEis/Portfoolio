import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  FileText,
  Moon,
  PanelsTopLeft,
  Sparkles,
  Sun,
  Workflow,
} from "lucide-react";
import {
  base,
  certificateUrl,
  contactEmail,
  siteContent,
} from "./data/content.js";
import { projectsByLanguage } from "./data/projects.js";

const LANGUAGE_KEY = "portfolio-language";
const THEME_KEY = "portfolio-theme";
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function readStoredPreference(key) {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStoredPreference(key, value) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in private browsing or restricted environments.
  }
}

function getInitialLanguage() {
  return readStoredPreference(LANGUAGE_KEY) === "en" ? "en" : "et";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = readStoredPreference(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  if (document.documentElement.dataset.theme) return document.documentElement.dataset.theme;
  return "dark";
}

function ProjectViewer({ project, labels }) {
  const gallery = project.gallery ?? [];
  const [active, setActive] = useState(0);
  const current = gallery[active] ?? {
    src: project.image,
    alt: project.imageAlt,
    label: project.title,
  };

  return (
    <div className="project-viewer">
      <div className="viewer-toolbar">
        <span className="viewer-dots" aria-hidden="true"><i /><i /><i /></span>
        <code>{current.label ?? project.title}</code>
        <span className="viewer-status">{labels.viewerLabel.toLowerCase().replaceAll(" ", "_")}</span>
      </div>
      <div className="viewer-stage">
        <img src={`${base}${current.src}`} alt={current.alt} loading="eager" />
      </div>
      {gallery.length > 1 ? (
        <div className="viewer-tabs" role="tablist" aria-label={`${project.title} — ${labels.viewerLabel}`}>
          {gallery.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {shot.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ProjectMedia({ project, labels }) {
  if (project.image) {
    return (
      <div className="project-media">
        <div className="viewer-toolbar">
          <span className="viewer-dots" aria-hidden="true"><i /><i /><i /></span>
          <code>{project.title.toLowerCase().replaceAll(" ", "-")}</code>
          <span className="viewer-status">{labels.previewLabel.toLowerCase()}</span>
        </div>
        <img src={`${base}${project.image}`} alt={project.imageAlt} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="project-media project-media-placeholder" aria-label={project.visualLabel}>
      <div className="viewer-toolbar">
        <span className="viewer-dots" aria-hidden="true"><i /><i /><i /></span>
        <code>workflow.log</code>
        <span className="viewer-status">{labels.workflowLabel.toLowerCase()}</span>
      </div>
      <div className="workflow-preview" aria-hidden="true">
        {project.visualLabel.split(" → ").map((step, index, steps) => (
          <div className="workflow-preview-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 ? <ArrowRight size={17} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactForm({ copy }) {
  const [status, setStatus] = useState("idle");
  const isSubmitting = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    isSubmitting.current = true;
    setStatus("submitting");

    try {
      if (!FORMSPREE_ENDPOINT) throw new Error("Missing Formspree endpoint");

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Formspree request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      isSubmitting.current = false;
    }
  }

  return (
    <div className="contact-form-panel">
      <h3>{copy.title}</h3>
      <p>{copy.help}</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-field">
          <label htmlFor="contact-name">{copy.name}</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-email">{copy.email}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-message">{copy.message}</label>
          <textarea id="contact-message" name="message" rows="7" required />
        </div>

        <button
          className="button button-primary"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? copy.submitting : copy.submit}
          <ArrowRight size={17} />
        </button>

        <div className="contact-form-feedback" role="status" aria-live="polite" aria-atomic="true">
          {status === "success" ? <p className="is-success">{copy.success}</p> : null}
          {status === "error" ? <p className="is-error" role="alert">{copy.error}</p> : null}
        </div>
      </form>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState("");
  const copy = siteContent[language];
  const projects = projectsByLanguage[language];
  const featured = projects[0];
  const others = projects.slice(1);
  const projectFactLabels = Object.fromEntries(copy.work.facts);
  const serviceIcons = [Workflow, Database, PanelsTopLeft];
  const supportingUrl = featured.supportingDocument
    ? `${base}${featured.supportingDocument}`
    : null;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", copy.meta.description);
    writeStoredPreference(LANGUAGE_KEY, language);
  }, [copy.meta, language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", theme === "dark" ? "#0a1110" : "#f4f3ee");
    }
    writeStoredPreference(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = siteContent.et.nav.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const header = document.querySelector(".site-header");
    let animationFrame = 0;

    function updateActiveSection() {
      const threshold = (header?.getBoundingClientRect().height ?? 0) + 40;
      let current = "";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sectionIds.at(-1) ?? current;
      }

      setActiveSection(current);
    }

    function scheduleUpdate() {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveSection();
      });
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">{copy.controls.skipToContent}</a>
      <header className="site-header">
        <a className="brand" href="#algus" aria-label="Germo Eismann">
          Germo Eismann
          <span>{copy.brandSubtitle}</span>
        </a>
        <nav className="site-nav" aria-label={language === "et" ? "Peamenüü" : "Main navigation"}>
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : undefined}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-controls">
          <div className="language-switch" role="group" aria-label={copy.controls.language}>
            <button
              type="button"
              lang="et"
              aria-label="Eesti keel"
              aria-pressed={language === "et"}
              className={language === "et" ? "is-active" : ""}
              onClick={() => setLanguage("et")}
            >
              EST
            </button>
            <button
              type="button"
              lang="en"
              aria-label="English language"
              aria-pressed={language === "en"}
              className={language === "en" ? "is-active" : ""}
              onClick={() => setLanguage("en")}
            >
              ENG
            </button>
          </div>
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === "dark" ? copy.controls.lightTheme : copy.controls.darkTheme}
            title={theme === "dark" ? copy.controls.lightTheme : copy.controls.darkTheme}
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        <section id="algus" className="hero shell">
          <div className="hero-atmosphere" aria-hidden="true">
            <span className="hero-orbit" />
            <span className="hero-block hero-block-one" />
            <span className="hero-block hero-block-two" />
            <span className="hero-glow" />
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1>{copy.hero.title} <em>{copy.hero.accent}</em></h1>
              <p className="hero-lead">{copy.hero.lead}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#kontakt">
                  {copy.hero.primaryAction} <ArrowRight size={17} />
                </a>
                <a className="button button-secondary" href="#projektid">
                  {copy.hero.secondaryAction}
                </a>
              </div>
              <a className="hero-project-link" href="#featured-project">
                {copy.hero.featuredProjectLink}
              </a>
            </div>
            <aside className="hero-proof" aria-label={copy.hero.eyebrow}>
              <span className="hero-proof-mark" aria-hidden="true"><Workflow size={17} /></span>
              <dl className="hero-meta">
                {copy.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <aside className="hero-trust shell" aria-label={copy.hero.trustLabel}>
          <ul>
            {copy.hero.trust.map((item) => (
              <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </aside>

        <section id="tooviis" className="section shell process-section">
          <header className="section-heading section-heading-split">
            <span className="section-index">{copy.process.index}</span>
            <h2>{copy.process.title}</h2>
            <p>{copy.process.lead}</p>
          </header>
          <ol className="process-grid">
            {copy.process.principles.map((principle, index) => (
              <li key={principle.title}>
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="lahendused" className="section shell services-section">
          <header className="section-heading">
            <span className="section-index">{copy.solutions.index}</span>
            <h2>{copy.solutions.title}</h2>
          </header>
          <div className="service-list">
            {copy.solutions.services.map((service, index) => {
              const ServiceIcon = serviceIcons[index];

              return (
                <article key={service.title} className="service-row">
                  <div className="service-card-top">
                    <span className="service-number">{service.index}</span>
                    <ServiceIcon size={19} aria-hidden="true" />
                  </div>
                  <div className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="python-strip">
            <span className="mono-label">{copy.solutions.pythonLabel}</span>
            <p>{copy.solutions.pythonText}</p>
            <a href={certificateUrl} target="_blank" rel="noreferrer">
              {copy.solutions.certificate} <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section id="projektid" className="section projects-section">
          <div className="shell">
            <header className="section-heading projects-heading">
              <span className="section-index">{copy.work.index}</span>
              <h2>{copy.work.title}</h2>
              <p>{copy.work.lead}</p>
            </header>

            <article id="featured-project" className="featured-project">
              <ProjectViewer project={featured} labels={copy.work} />
              <div className="featured-project-copy">
                <div className="project-title-block">
                  <p className="project-type"><span>{copy.work.featured}</span>{featured.type}</p>
                  <h3>{featured.title}</h3>
                </div>
                <dl className="project-facts">
                  {copy.work.facts.map(([key, label]) => (
                    <div key={key}>
                      <dt>{label}</dt>
                      <dd>{featured[key]}</dd>
                    </div>
                  ))}
                </dl>
                <div className="project-footer">
                  <ul className="tech-list">
                    {featured.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                  {supportingUrl ? (
                    <a className="text-link" href={supportingUrl} target="_blank" rel="noreferrer">
                      <FileText size={15} /> {copy.work.samplePdf} <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>

            <div className="project-grid">
              {others.map((project, index) => (
                <article key={project.title} className="project-item">
                  <ProjectMedia project={project} labels={copy.work} />
                  <div className="project-item-copy">
                    <span className="project-count">0{index + 2}</span>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <dl className="project-card-facts">
                      <div>
                        <dt>{projectFactLabels.problem}</dt>
                        <dd>{project.problem}</dd>
                      </div>
                      <div className="project-card-outcome">
                        <dt><Sparkles size={13} aria-hidden="true" />{projectFactLabels.simplified}</dt>
                        <dd>{project.simplified}</dd>
                      </div>
                    </dl>
                    <div className="project-item-footer">
                      <ul className="tech-list">
                        {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                      </ul>
                      {project.liveUrl ? (
                        <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                          {copy.work.openWebsite} <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="project-cta" aria-labelledby="project-cta-title">
          <div className="shell project-cta-inner">
            <div>
              <h2 id="project-cta-title">{copy.projectCta.title}</h2>
              <p>{copy.projectCta.text}</p>
            </div>
            <a className="button button-primary" href="#kontakt">
              {copy.projectCta.action} <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section id="minust" className="section shell about-section">
          <header className="section-heading">
            <span className="section-index">{copy.about.index}</span>
            <h2>{copy.about.title}</h2>
          </header>
          <div className="about-grid">
            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <ul className="about-principles">
              {copy.about.principles.map((item, index) => (
                <li key={item}><span>0{index + 1}</span>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontakt" className="contact-section">
          <div className="shell contact-inner">
            <div className="contact-copy">
              <span className="section-index">{copy.contact.index}</span>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.text}</p>
              <a className="contact-link" href={`mailto:${contactEmail}`}>
                <span>{contactEmail}</span>
                <ArrowUpRight size={26} />
              </a>
            </div>
            <ContactForm copy={copy.contact.form} />
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Germo Eismann</span>
        <span>{copy.footer}</span>
      </footer>
    </div>
  );
}

export default App;
