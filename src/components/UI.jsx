// src/components/UI.jsx — Reusable UI primitives

export function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-10">
      <span className="section-label block mb-3">{label}</span>
      <h2
        className="text-4xl font-bold leading-tight"
        className="font-heading"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function StatCard({ value, label }) {
  return (
    <div
      className="card p-5 text-center"
      style={{ borderColor: "var(--border)" }}
    >
      <p
        className="text-4xl font-bold"
        className="font-heading"
        style={{ color: "var(--accent)" }}
      >
        {value}
      </p>
      <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "var(--text-secondary)" }}>
        {label}
      </p>
    </div>
  );
}

export function TagBadge({ text, color }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
      style={{
        background: color ? `${color}15` : "rgba(232,255,62,0.08)",
        border: `1px solid ${color ? `${color}30` : "rgba(232,255,62,0.2)"}`,
        color: color || "var(--accent)",
      }}
    >
      {text}
    </span>
  );
}

export function SkillBar({ name, level }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {name}
        </span>
        <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function PageWrapper({ children }) {
  return (
    <div className="p-8 md:p-12 max-w-5xl mx-auto animate-fade-up">
      {children}
    </div>
  );
}
