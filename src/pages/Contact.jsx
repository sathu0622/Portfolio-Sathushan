import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { personal } from "../data/portfolio";
import { submitContactForm } from "../api/contact";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const result = await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        subject: `Portfolio inquiry from ${form.name.trim() || "visitor"}`,
      });
      setStatus("success");
      setFeedback(result.message || "Message sent successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  };

  const isSubmitting = status === "submitting";

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
          <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={handleSubmit} noValidate>
            <div>
              <label className="contact-label" style={{ display: "block", marginBottom: 8 }} htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={updateField("name")}
                placeholder="Your name"
                style={inputStyle}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="contact-label" style={{ display: "block", marginBottom: 8 }} htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={updateField("email")}
                placeholder="Your email"
                style={inputStyle}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="contact-label" style={{ display: "block", marginBottom: 8 }} htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={updateField("message")}
                placeholder="Your message"
                style={inputStyle}
                disabled={isSubmitting}
              />
            </div>

            {feedback ? (
              <p
                role="status"
                style={{
                  margin: 0,
                  fontSize: "0.85rem",
                  color: status === "success" ? "#22c55e" : "#ef4444",
                }}
              >
                {feedback}
              </p>
            ) : null}

            <button
              type="submit"
              className="btn-outline"
              style={{ justifyContent: "center", width: "100%" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
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
