import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        © {year} Mahendra Kumar Singh. Built with MERN.
      </p>
    </footer>
  );
}

export default Footer;

