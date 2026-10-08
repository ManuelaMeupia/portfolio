import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#hero" className="logo">
            Engr.<span>Manuela Meupia</span>
          </a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/ManuelaMeupia"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manuela-meupia-a0655b296?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a href="mailto:manuelameupia4@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Manuela Meupia — Développeuse Full-Stack <FiHeart />
        </p>
      </div>
    </footer>
  );
};

export default Footer;