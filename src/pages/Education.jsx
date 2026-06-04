import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "../data/portfolio";

const extras = [
  { title: "St John Ambulance Cadet Leader", org: "Hindu College", year: "2019/2020", award: "Best Cadet 2019" },
  { title: "Secretary — Students' Welfare Society", org: "Hindu College", year: "2019", award: null },
  { title: "Editor — Tamil Union", org: "Hindu College", year: "2019", award: null },
  { title: "Asst. Secretary — Mathematics Union", org: "Hindu College", year: "2019", award: null },
];

export default function Education() {
  return (
    <section>
      <p className="section-label">Academic Background</p>
      <h1 className="page-section-title">Education</h1>
      <p className="page-section-sub">My academic journey and extracurricular achievements.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 2 }}>
        {education.map((edu, i) => (
          <article key={i} className="content-card" style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
            <div
              style={{
                padding: 12,
                borderRadius: 14,
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <GraduationCap size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <h3
                className="font-heading"
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {edu.degree}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: 4 }}>
                {edu.specialization}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 4 }}>
                {edu.institution}
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 10, alignItems: "center", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <Calendar size={12} /> {edu.period}
                </span>
                <span className="tag-pill">{edu.status}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* <p className="section-label">Extra-Curricular</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 14,
          marginTop: 12,
        }}
      >
        {extras.map((e, i) => (
          <article key={i} className="content-card">
            <h4 className="font-heading" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
              {e.title}
            </h4>
            <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 6 }}>
              {e.org} · {e.year}
            </p>
            {e.award && (
              <p style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: "0.78rem", color: "var(--text-primary)" }}>
                <Award size={12} /> {e.award}
              </p>
            )}
          </article>
        ))}
      </div> */}
    </section>
  );
}
