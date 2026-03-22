import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "terminal", label: "Terminal" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Sync theme with local storage on mount
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      // Update scrolled state for glass effect
      setIsScrolled(window.scrollY > 20);

      // Update active section
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
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        Mahendra<span className="navbar__brand-dot">.dev</span>
      </div>

      <div className="navbar__right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
        
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.4rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

