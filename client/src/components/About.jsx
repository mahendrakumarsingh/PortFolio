import React from "react";
import "./About.css";
import profileImg from "../images/profile.png";
import { Reveal } from "./Reveal";

function About() {
  return (
    <div className="section">
      <Reveal><h2 className="section__title">About Me</h2></Reveal>
      <div className="about-content">
        <Reveal delay={0.1} className="about-content__text">
          <p>
            I'm <strong>Mahendra Kumar Singh</strong>, a developer who loves
            understanding how things work behind the scenes. I enjoy solving
            problems using Java, Data Structures, and Full Stack Web Development (MERN).
          </p>
          <p>
            I focus on writing clean logic and building interactive, user-friendly
            applications. What makes me different is my mindset — I don't just
            code to make things run, I learn deeply to understand <em>why</em> they work.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="about-content__image">
          <div className="about-content__image-wrapper">
            {/* Replace src with your actual photo path */}
            <img
              src={profileImg}
              alt="Mahendra Kumar Singh"
              className="about-content__photo"
            />
            <div className="about-content__image-border" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default About;

