import { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80",
//   "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
//  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
//   "https://images.unsplash.com/photo-1555949963-aa79dcee9815?w=1920&q=80",
 // "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
];

export default function BackgroundSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="portfolio-bg" aria-hidden="true">
      {slides.map((src, index) => (
        <div
          key={`image-${index}`}
          className={`bg-slide${index === activeIndex ? " active" : ""}`}
        >
          <img className="bg-image" src={src} alt="Developer background" />
        </div>
      ))}
      <div className="portfolio-bg__overlay" />
    </div>
  );
}
