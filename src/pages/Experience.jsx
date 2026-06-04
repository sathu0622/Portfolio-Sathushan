import { Calendar, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section>
      <p className="section-label">Work History</p>
      <h1 className="page-section-title">Experience</h1>
      <p className="page-section-sub">
        Professional roles and internships that shaped my skills.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {experience.map((job, i) => (
          <article key={i} className="content-card">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {job.role}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: 4 }}>
                  {job.company}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.8rem", color: "var(--text-muted)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Calendar size={13} /> {job.period}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPin size={13} /> {job.location}
                </span>
              </div>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {job.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                  }}
                >
                  <span className="timeline-dot" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
