import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact reveal">
      <div className="section-header">
        <h2 className="section-title">
          Travaillons <span className="gradient-ttext" style={{ fontFamily: 'DancingScript', fontSize: '4rem', color: 'var(--accent)' }}>ensemble</span>
        </h2>
        <p className="section-subtitle">
          Une question, un projet, une opportunité ? N'hésitez pas à me contacter,
          je réponds rapidement.
        </p>
      </div>

      <div className="contact-info-centered">
        <h3>Parlons de votre projet</h3>
        <p className="contact-info-desc">
          Je suis actuellement à la recherche de nouvelles opportunités
          en développement logiciel. Que ce soit pour un stage, un CDI ou une
          collaboration freelance, je suis ouverte à la discussion.
        </p>

        <ul className="contact-details">
          <li>
            <span className="contact-icon"><FiMail /></span>
            <div>
              <span className="contact-label">Email</span>
              <a href="mailto:manuelameupia4@gmail.com">manuelameupia4@gmail.com</a>
            </div>
          </li>
          <li>
            <span className="contact-icon"><FiPhone /></span>
            <div>
              <span className="contact-label">Téléphone</span>
              <a href="tel:+237678311491">+237 6 78 31 14 91</a>
            </div>
          </li>
          <li>
            <span className="contact-icon"><FiMapPin /></span>
            <div>
              <span className="contact-label">Localisation</span>
              <span>Yaoundé, Cameroun</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;