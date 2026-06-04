import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Section from "./components/Section";
import { scrollToSection } from "./hooks/useScrollSpy";
import Home from "./pages/Home";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="technologies">
          <Technologies />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="portfolio">
          <Projects />
        </Section>
        <Section id="education">
          <Education />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Layout>
    </ThemeProvider>
  );
}
