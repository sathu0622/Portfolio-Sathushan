import { useEffect, useState } from "react";
import { Sun, Moon, ArrowUp } from "lucide-react";
import ProfileSidebar from "./ProfileSidebar";
import TopNav, { NAV_SECTIONS } from "./TopNav";
import BackgroundSlideshow from "./BackgroundSlideshow";
import { useTheme } from "../context/ThemeContext";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeSection = useScrollSpy(sectionIds, 140);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <BackgroundSlideshow />

      <div className="portfolio-shell">
        <div className="portfolio-grid">
          <ProfileSidebar />

          <div className="ui-card main-panel">
            <TopNav activeSection={activeSection} />
            <div className="main-content">{children}</div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`back-top${showBackTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
