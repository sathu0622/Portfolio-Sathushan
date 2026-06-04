import { Download } from "lucide-react";
import { personal } from "../data/portfolio";
import { useEffect, useState } from "react";

const highlightTech = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
];

const initials = personal.name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const heroTitles = [
  "WEB DEVELOPER",
  "SOFTWARE ENGINEER",
  "FULL STACK DEVELOPER",
];

export default function Home() {
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const pauseTimer = window.setTimeout(() => setPause(false), 1200);
      return () => window.clearTimeout(pauseTimer);
    }

    const currentTitle = heroTitles[activeTitleIndex];
    const nextText = isDeleting
      ? currentTitle.slice(0, text.length - 1)
      : currentTitle.slice(0, text.length + 1);

    const typingSpeed = isDeleting ? 40 : 120;
    const timer = window.setTimeout(() => {
      setText(nextText);

      if (!isDeleting && nextText === currentTitle) {
        setPause(true);
        setIsDeleting(true);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setActiveTitleIndex((prev) => (prev + 1) % heroTitles.length);
      }
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [activeTitleIndex, isDeleting, pause, text]);

  return (
    <section className="hero-grid">
      <div>
        <p className="hero-greeting">Hi there! 👋</p>
        <h1 className="hero-title">Creative Full Stack Developer.</h1>
        <p className="hero-desc">{personal.summary}</p>
        <a href="/resume.pdf" download className="btn-outline">
          <Download size={18} />
          Download CV
        </a>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-ring">
          {personal.photo ? (
            <img
              src={personal.photo}
              alt={personal.name}
              className="hero-photo"
            />
          ) : (
            <div className="hero-photo-fallback" aria-hidden="true">
              {initials}
            </div>
          )}
          <span className="hero-badge">
            {text}
            <span className="hero-badge__cursor" aria-hidden="true">
              |
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
