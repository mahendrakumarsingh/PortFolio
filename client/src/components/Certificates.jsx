import React from "react";
import "./Certificates.css";
import { certificates } from "../data/certificates";
import { Reveal } from "./Reveal";

function Certificates() {
    return (
        <div className="section">
            <Reveal><h2 className="section__title">Certificates</h2></Reveal>
            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                  <Reveal key={cert.name} delay={index * 0.1}>
                    <article className="certificates-grid__card">
                        <div className="certificates-grid__icon-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="certificates-grid__icon"
                            >
                                <circle cx="12" cy="8" r="7" />
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                        </div>
                        <div className="certificates-grid__content">
                            <h3 className="certificates-grid__title">{cert.name}</h3>
                            <div className="certificates-grid__actions">
                                <a
                                    href={cert.driveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="certificates-grid__btn certificates-grid__btn--primary"
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
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </article>
                  </Reveal>
                ))}
            </div>
        </div>
    );
}

export default Certificates;
