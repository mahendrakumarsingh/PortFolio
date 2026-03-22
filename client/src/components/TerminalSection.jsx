import React, { useState } from "react";
import "./TerminalSection.css";

const INITIAL_HISTORY = [
  "portfolio-terminal v1.0",
  "Type `help` to see available commands."
];

function TerminalSection() {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [input, setInput] = useState("");

  const handleNavigation = (sectionId, name) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Briefly highlight the section to confirm interaction
      el.classList.add("section-highlight");
      setTimeout(() => {
        el.classList.remove("section-highlight");
      }, 1500);

      return `Navigating to ${name}...`;
    }
    return `Error: Section '${name}' not found.`;
  };

  const handleResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.docx";
    link.download = "Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return "Downloading resume.docx...";
  };

  const COMMAND_HANDLERS = {
    help: () => "Commands: help, about, skills, projects, contact, resume, clear",
    about: () => handleNavigation("about", "About"),
    skills: () => handleNavigation("skills", "Skills"),
    projects: () => handleNavigation("projects", "Projects"),
    contact: () => handleNavigation("contact", "Contact"),
    resume: () => handleResume(),
    // 'clear' is handled explicitly in handleSubmit to clear state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();

    if (cmd === 'clear') {
      setHistory(INITIAL_HISTORY);
    } else {
      const handler = COMMAND_HANDLERS[cmd];
      const response = handler ? handler() : `Command not found: ${cmd}`;
      setHistory((prev) => [...prev, `> ${cmd}`, response]);
    }

    setInput("");
  };

  return (
    <div className="section" id="terminal">
      <h2 className="section__title">Terminal</h2>
      <div className="terminal">
        <div className="terminal__header">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="terminal__title">dev@portfolio: ~</span>
        </div>
        <div className="terminal__body">
          {history.map((line, idx) => (
            <div key={idx} className="terminal__line">
              {line}
            </div>
          ))}
        </div>
        <form className="terminal__input-row" onSubmit={handleSubmit}>
          <span className="terminal__prompt">$</span>
          <input
            className="terminal__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
}

export default TerminalSection;

