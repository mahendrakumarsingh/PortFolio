import React, { useEffect, useMemo, useState } from "react";
import "./Hero.css";

function Hero() {
  const roles = useMemo(
    () => ["Full-Stack MERN Developer", "Java & DSA Enthusiast", "Problem Solver"],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 45 : 65;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const next = current.slice(0, Math.max(0, typed.length - 1));
        setTyped(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [isDeleting, roleIndex, roles, typed]);

  return (
    <div className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, my name is</p>
          <h1 className="hero__title hero__title--glow">Mahendra Kumar Singh</h1>
          <h2 className="hero__subtitle hero__subtitle--typing">
            <span className="hero__typingText">{typed}</span>
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
          </h2>
          <p className="hero__description hero__description--strong">
            I build fast, scalable web apps with clean backend logic and beautiful
            user experiences.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png"
            alt="Web Development Illustration"
            className="hero__illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

