import { stats, personal } from "../data/portfolio";

const details = [
  { key: "Name", value: personal.name },
  // { key: "Nationality", value: "Sri Lankan" },
  { key: "Phone", value: personal.phone },
  { key: "Email", value: personal.email },
  { key: "Experience", value: "1+ years" },
  // { key: "Freelance", value: "Available" },
  { key: "GitHub", value: "sathu0622" },
  { key: "Language", value: "English, Tamil, Sinhala" },
];

const firstName = personal.name.split(" ")[0];

export default function About() {
  return (
    <section>
      <div className="about-grid">
        <div>
          <div className="about-name-block">
            <span className="about-ghost" aria-hidden="true">
              {firstName}
            </span>
            <h1 className="about-name">{personal.name}</h1>
            <p className="about-tagline">Your Web Experts</p>
          </div>

          {stats.slice(0, 3).map((s) => (
            <div key={s.label} className="stat-box">
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="about-divider" aria-hidden="true" />

        <div>
          <p className="about-bio">
            I&apos;m a passionate <strong>{personal.title}</strong> with{" "}
            <strong>one year of professional experience</strong> building production-grade web applications. I work across the MERN stack, React, Next.js, Java, and Spring Boot - turning ideas into polished digital products for real clients.
          </p>
          <p className="about-bio" style={{ marginTop: 16 }}>
            Currently pursuing a BSc (Hons) in Information Technology at SLIIT, I combine
            academic rigor with hands-on delivery in agile remote teams. From enterprise CRM
            dashboards to full-stack job portals, I care about clean code, scalable
            architecture, and interfaces that feel as good as they work.
          </p>

          <div className="details-list">
            {details.map(({ key, value }) => (
              <div key={key} className="detail-row">
                <span className="detail-key">{key}</span>
                <span className="detail-sep">:</span>
                <span className="detail-val">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
