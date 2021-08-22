import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.youtube.com/channel/UC9FEh04-jfU_d6UJHNF0QKA" target="__blank">
          Al Naheen
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/al_naheen/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/Al-Naheen" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC9FEh04-jfU_d6UJHNF0QKA" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
