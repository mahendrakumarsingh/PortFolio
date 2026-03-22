import React, { useRef } from "react";
import "./Projects.css";
import { projects } from "../data/projects";
import { Reveal } from "./Reveal";

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 4 degrees rotation for a very subtle, premium tilt
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    // Subtle dynamic shadow opposite to the mouse
    const shadowX = ((x - centerX) / centerX) * -12;
    const shadowY = ((y - centerY) / centerY) * -12;

    card.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY + 15}px 30px rgba(0, 0, 0, 0.15)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    // Smooth transition back to neutral
    card.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
    card.style.boxShadow = ""; // Revert to CSS default
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    // Fast transition for tracking to avoid input lag feeling, but smooth out standard 60fps events
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.1s ease-out";
  };

  return (
    <article 
      ref={cardRef}
      className="projects-grid__card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="projects-grid__image-wrapper">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="projects-grid__image"
        />
      </div>
      <div className="projects-grid__content">
        <h3 className="projects-grid__title">{project.title}</h3>
        <p className="projects-grid__description">{project.description}</p>
        <div className="projects-grid__tech">
          {project.tech.map((t) => (
            <span key={t} className="projects-grid__tech-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="projects-grid__actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="projects-grid__btn projects-grid__btn--primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="projects-grid__btn projects-grid__btn--ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="section">
      <Reveal><h2 className="section__title">Projects</h2></Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={0.1 * index}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Projects;

