import React, { useState } from "react";
import "./TerminalSection.css";

const RESPONSES = {
  help: "Commands: help, about, skills, projects, clear",
  about: "MERN developer focused on clean UX and robust backend APIs.",
  skills: "JS, React, Node, Express, MongoDB, Git, REST",
  projects: "Check out the Projects section above for full case studies."
};

const INITIAL_HISTORY = [
  "portfolio-terminal v1.0",
  "Type `help` to see available commands."
];

function TerminalSection() {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();

    if (cmd === 'clear') {
      setHistory(INITIAL_HISTORY);
    } else {
      const response = RESPONSES[cmd] || `Command not found: ${cmd}`;
      setHistory((prev) => [...prev, `> ${cmd}`, response]);
    }

    setInput("");
  };

  return (
    <div className="section">
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

