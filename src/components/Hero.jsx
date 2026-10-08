import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiPhone
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow" />

      <div className="hero-container">
        {/* ===== Colonne texte ===== */}
        <div className="hero-content">
          <h1 className="hero-title">
            Bonjour, je suis <br />
            <span className="gradient-text">Manuela Meupia</span>
          </h1>

          <h2 className="hero-role">Developpeuse Web</h2>

          <p className="hero-desc">
            Je suis une developpeuse web passionnée par la création
            d'applications web modernes et performantes. Je conçois des
            solutions full-stack avec React, Node.js et MongoDB, en portant une
            attention particulière à l'expérience utilisateur et à la qualité
            du code.
          </p>

          {/* ===== Coordonnées directes ===== */}
          <div className="hero-contacts">
            <a href="tel:+237600000000" className="hero-contact-item">
              <span className="hero-contact-icon">
                <FiPhone />
              </span>
              <span className="hero-contact-text">
                <span className="hero-contact-label">Téléphone</span>
                <span className="hero-contact-value">+237 6 78 31 14 91</span>
              </span>
            </a>

            <a
              href="mailto:manuelameupia4@gmail.com"
              className="hero-contact-item"
            >
              <span className="hero-contact-icon">
                <FiMail />
              </span>
              <span className="hero-contact-text">
                <span className="hero-contact-label">Email</span>
                <span className="hero-contact-value">
                  manuelameupia4@gmail.com
                </span>
              </span>
            </a>
          </div>

          {/* ===== CTA ===== */}
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              Voir mes projets <FiArrowRight />
            </a>
            <a href="/CV.pdf" download className="btn-secondary">
              <FiDownload /> Télécharger mon CV
            </a>
          </div>

          {/* ===== Réseaux sociaux ===== */}
          <div className="hero-socials">
            <a
              href="https://github.com/ManuelaMeupia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manuela-meupia-a0655b296"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ===== Colonne photo ===== */}
        <div className="hero-photo">
          <div className="photo-wrapper">
            <img src="/img/profile3.jpg" alt="Manuela Meupia" />
          </div>

          <div className="floating-card card-1">
             Créativité
          </div>

          <div className="floating-card card-2">
             Innovation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;