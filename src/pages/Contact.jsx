import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { personal } from "../data/portfolio";



export default function Contact() {
  return (
    <section>
      <p className="section-label">Get In Touch</p>
      <h1 className="page-section-title">Contact Me</h1>
      <p className="page-section-sub">
        Reach out for opportunities, collaborations, or just a chat.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 36,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
            { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
            { icon: MapPin, label: "Location", value: personal.location, href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="content-card" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Icon size={20} style={{ color: "var(--text-primary)", flexShrink: 0 }} />
              <div>
                <p className="contact-label">{label}</p>
                {href ? (
                  <a href={href} className="contact-value" style={{ textDecoration: "none" }}>
                    {value}
                  </a>
                ) : (
                  <p className="contact-value">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div style={{ display: "flex", gap: 10 }}>
            <a href={personal.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>
              <Github size={16} /> GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="content-card">
          <p className="section-label" style={{ marginBottom: 20 }}>
            Send a Message
          </p>
          <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={(e) => e.preventDefault()}>
            {["Name", "Email", "Message"].map((field) => (
              <div key={field}>
                <label className="contact-label" style={{ display: "block", marginBottom: 8 }}>
                  {field}
                </label>
                {field === "Message" ? (
                  <textarea
                    rows={4}
                    placeholder={`Your ${field.toLowerCase()}`}
                    style={inputStyle}
                  />
                ) : (
                  <input type={field === "Email" ? "email" : "text"} placeholder={`Your ${field.toLowerCase()}`} style={inputStyle} />
                )}
              </div>
            ))}
            <button type="submit" className="btn-outline" style={{ justifyContent: "center", width: "100%" }}>
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 14,
  border: "1px solid var(--border)",
  background: "var(--accent-soft)",
  color: "var(--text-primary)",
  fontSize: "0.88rem",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  resize: "vertical",
};
