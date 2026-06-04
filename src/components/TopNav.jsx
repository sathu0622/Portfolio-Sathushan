import { scrollToSection } from "../hooks/useScrollSpy";
import { LogoMark } from "./BrandLogo";

export const NAV_SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "technologies", label: "TECH" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

export default function TopNav({ activeSection, onNavigate }) {
  const handleNav = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    onNavigate?.();
  };

  return (
    <header className="main-header">
      <a
        href="#home"
        className="brand"
        onClick={(e) => handleNav(e, "home")}
      >
        <span className="brand-icon" style={{ color: "var(--logo-color)" }}>
          {/* <LogoMark size={100} /> */}
        </span>
        {/* <span className="brand-name">Sathushan T.</span> */}
      </a>

      <nav className="nav-pill" aria-label="Section navigation">
        {NAV_SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link${activeSection === id ? " active" : ""}`}
            onClick={(e) => handleNav(e, id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
