import React, { useState, useEffect } from "react";
import "./Navbar.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "terminal", label: "Terminal" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__brand">
        Mahendra<span className="navbar__brand-dot">.dev</span>
      </div>
      <nav className="navbar__links">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`navbar__link ${activeSection === s.id ? "active" : ""}`}
            onClick={() => scrollToSection(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;

