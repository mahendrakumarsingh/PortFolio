import React from "react";
import "./Resume.css";

const resumeData = `{
  "name": "Mahendra Kumar Singh",
  "title": "Full-Stack Developer",
  "experience": [
    {
      "role": "MERN Stack Developer",
      "duration": "2024 - Present",
      "skills": ["React", "Node.js", "MongoDB"]
    }
  ],
  "education": {
    "degree": "B.Tech ",
    "field": "Computer Science",
    "status": "In Progress"
  },
  "skills": [
    "JavaScript", "React", "Node.js",
    "Express", "MongoDB", "Git",
    "REST APIs", "Java"
  ],
  "languages": ["English", "Hindi"],
  "available": true
}`;

function Resume() {
  return (
    <div className="section">
      <h2 className="section__title">Resume</h2>
      <div className="resume-content">
        <div className="resume-content__text">
          <p className="resume-content__description">
            I'm a passionate Full-Stack Developer with hands-on experience in
            building modern web applications. My focus is on writing clean,
            efficient code and creating seamless user experiences.
          </p>
          <div className="resume-content__highlights">
            <div className="resume-highlight">
              <span className="resume-highlight__number">10+</span>
              <span className="resume-highlight__label">Projects Built</span>
            </div>
            <div className="resume-highlight">
              <span className="resume-highlight__number">6+</span>
              <span className="resume-highlight__label">Technologies</span>
            </div>
            <div className="resume-highlight">
              <span className="resume-highlight__number">1+</span>
              <span className="resume-highlight__label">Years Learning</span>
            </div>
          </div>
          <a
            href="/resume.doc"
            className="btn btn--primary"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
        <div className="resume-content__code">
          <div className="code-block">
            <div className="code-block__header">
              <span className="code-block__dot code-block__dot--red" />
              <span className="code-block__dot code-block__dot--yellow" />
              <span className="code-block__dot code-block__dot--green" />
              <span className="code-block__filename">resume.json</span>
            </div>
            <pre className="code-block__content">
              <code>{resumeData}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

