import { FiAward, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Licence Professionnelle en Génie Logiciel (bacc + 4)',
      school: 'The ICT University of Cameroon',
      period: '2025 – 2026',
      location: 'Yaoundé-Cameroun',
      description:
        'Formation avancée en génie logiciel : architecture, développement full-stack, gestion de projet et bonnes pratiques.',
    },
    {
      degree: 'BTS en Gestion des Systèmes d\'Information (bacc + 2)',
      school: 'Institut Supérieur Azimut de Commerce, de Technologie et de Santé (INSA) ',
      period: '2024',
      location: 'Yaoundé-Cameroun',
      description:
        "Fondamentaux de l'informatique, algorithmique, bases de données, développement web, réseau, sécurité et maintenance.",
    },
    {
      degree: 'Baccalauréat D ',
      school: 'Institut Polyvalent Bilingue la Sophia',
      period: '2022',
      location: 'Yaoundé-Cameroun',
      description:
        "Série de l'enseignement secondaire général axée principalement sur les sciences de la vie et de la terre (SVT), la biologie, la chimie et les mathématiques.",
    },
  ];

  const experiences = [
    {
      role: 'Stage en Sécurité & Maintenance Informatique',
      company: 'Venice Hall',
      period: '2026 (6 mois)',
      location: 'Yaoundé-Cameroun',
      description:
        "Sécurisation d'infrastructures, maintenance préventive et corrective, gestion des systèmes et support utilisateur.",
    },
    {
      role: 'Ingénieure Logicielle',
      company: 'Alpha Digital Services',
      period: '2025-2026',
      location: 'Yaoundé-Cameroun',
      description:
        "Développement d'applications web full-stack avec React, Node.js et MongoDB. Collaboration en équipe agile et déploiement sur VPS.",
    },
    {
      role: "Stage d'apprentissage",
      company: 'Alpha Digital Services',
      period: '2024-2025',
      location: 'Yaoundé-Cameroun',
      description:
        'Apprentissage des bonnes pratiques de développement, participation à des projets clients et initiation au DevOps (Docker, VPS).',
    },
    {
      role: 'Stage académique',
      company: 'Agritechnologic Africa',
      period: '2023 (3 mois)',
      location: 'Yaoundé-Cameroun',
      description:
        "Développement de solutions web pour le secteur agricole. Découverte des problématiques métier et du travail en équipe projet.",
    },
  ];

  return (
    <section id="education" className="education reveal">
      <div className="section-header">
        <h2 className="section-title">
          Mon{' '}
          <span
            className="gradient-ttext"
            style={{ fontFamily: 'DancingScript', fontSize: '4rem', color: 'var(--accent)' }}
          >
            parcours
          </span>
        </h2>
        <p className="section-subtitle">
          Formations et expériences qui ont construit mon profil d'ingénieure
          logicielle.
        </p>
      </div>

      <div className="parcours-block">
        <div className="parcours-heading">
          <div className="parcours-icon">
            <FiAward />
          </div>
          <h3>Formations</h3>
        </div>

        <div className="parcours-list">
          {education.map((item, i) => (
            <article className="parcours-card" key={i}>
              <div className="parcours-card-top">
                <span className="parcours-period">
                  <FiCalendar /> {item.period}
                </span>
                <span className="parcours-loc">
                  <FiMapPin /> {item.location}
                </span>
              </div>

              <h4 className="parcours-title">{item.degree}</h4>
              <p className="parcours-org">{item.school}</p>
              <p className="parcours-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="parcours-block">
        <div className="parcours-heading">
          <div className="parcours-icon">
            <FiBriefcase />
          </div>
          <h3>Expériences</h3>
        </div>

        <div className="parcours-list">
          {experiences.map((item, i) => (
            <article className="parcours-card" key={i}>
              <div className="parcours-card-top">
                <span className="parcours-period">
                  <FiCalendar /> {item.period}
                </span>
                <span className="parcours-loc">
                  <FiMapPin /> {item.location}
                </span>
              </div>

              <h4 className="parcours-title">{item.role}</h4>
              <p className="parcours-org">{item.company}</p>
              <p className="parcours-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;