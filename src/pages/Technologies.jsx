import { skills, skillLevels } from "../data/portfolio";

export default function Technologies() {
  return (
    <section>
      <p className="section-label">Tech Stack</p>
      <h1 className="page-section-title">Technologies I Know</h1>
      <p className="page-section-sub">
        Tools and frameworks I use to build full-stack web applications.
      </p>

      <div className="tech-categories">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="content-card tech-category-card">
            <h3 className="tech-category-title font-heading">{category}</h3>
            <div className="tech-tags">
              {items.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* <p className="section-label" style={{ marginTop: 40 }}>
        Proficiency
      </p>
      <div className="content-card tech-skills-card">
        {skillLevels.map(({ name, level }) => (
          <div key={name} className="skill-bar-row">
            <div className="skill-bar-header">
              <span className="skill-bar-name">{name}</span>
              <span className="skill-bar-pct">{level}%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" style={{ width: `${level}%` }} />
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
