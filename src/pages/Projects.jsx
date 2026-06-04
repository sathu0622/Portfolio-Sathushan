import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio";
import { scrollToProject } from "../hooks/useScrollSpy";

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section>
      <p className="section-label">Portfolio</p>
      <h1 className="page-section-title">Featured Projects</h1>
      <p className="page-section-sub">
        Production-ready and personal builds I&apos;m proud of.
      </p>

      {/* <nav className="project-nav" aria-label="Jump to project">
        {projects.map((p) => (
          <button
            key={p.slug}
            type="button"
            className="project-nav-link"
            onClick={() => scrollToProject(p.slug)}
          >
            {p.title}
          </button>
        ))}
      </nav> */}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-pill${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <article
            key={project.slug}
            id={`project-${project.slug}`}
            className="content-card project-card"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <span style={{ fontSize: "2rem" }}>{project.icon}</span>
              <span className="tag-pill">{project.category}</span>
            </div>
            <h3
              className="font-heading"
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: "0.78rem", color: project.color, marginTop: 4 }}>
              {project.subtitle}
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                marginTop: 12,
              }}
            >
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
              {project.tech.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn project-link-btn--outline"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
