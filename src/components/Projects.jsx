import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Venice Hall',
      description:
        'Venice Hall est une salle de réception moderne et élégante, pensée pour accueillir vos événements les plus prestigieux dans la ville de Yaoundé.',
      image: '/img/vh.png',
      tags: ['React js'],
      demoLink:' https://venicehall.onrender.com/',
      codeLink: 'https://github.com/alphadigitalservices237/VeniceHall',
    },
    {
      title: 'Site web responsive de Beverly Hills Construction',
      description:
        'Beverly Hills Construction est une entreprise de BTP basée à Denver, à Douala-Cameroun et à Batié; spécialisée dans la location d’engins de travaux publics',
      image: '/img/bhc.png',
      tags: ['React js', 'Docker', 'VPS'],
      demoLink: 'https://www.beverlyhillsconstructionbtp.com/s',
      codeLink: 'https://github.com/alphadigitalservices237/beverlyhills',
    },
    {
      title: 'LaboTrack',
      description:
        'Ce projet consiste en la conception et le développement d\'une application web de gestion et de suivi des échantillons biologiques stockés dans un laboratoire. L\'application permet l\'enregistrement, la localisation précise et la consultation à distance des échantillons dans une chaîne de froid structurée (frigo, étagère, boîte à 96 positions). Elle offre ainsi une meilleure traçabilité, réduit les erreurs humaines et renforce la sécurité des données grâce à un système d\'authentification et de gestion des rôles.',
      image: '/img/Labotrack.png',
      tags: ['TypeScript', 'MongoDB', 'Node.js'],
      demoLink: 'https://labotrack.onrender.com/',
      codeLink: 'https://github.com/ManuelaMeupia/LaboTrack',
    },
  ];

  return (
    <section id="projects" className="projects reveal">
      <div className="section-header">
        <h2 className="section-title">
          Mes <span className="gradient-ttext" style={{ fontFamily: 'DancingScript' , fontSize: '4rem', color: 'var(--accent)' }}>projets</span>
        </h2>
        <p className="section-subtitle">
          Une sélection de projets personnels et académiques qui montrent
          ma façon de concevoir et construire des applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <article className="project-card" key={i}>
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                {project.demoLink && project.demoLink !== '#' && (
                  <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label="Voir la démo">
                    <FiExternalLink />
                  </a>
                )}
                {project.codeLink && project.codeLink !== '#' && (
                  <a href={project.codeLink} target="_blank" rel="noreferrer" aria-label="Voir le code">
                    <FiGithub />
                  </a>
                )}
              </div>
            </div>

            <div className="project-body">
              <div className="project-top">
                <div className="project-folder">
                  <FiFolder />
                </div>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noreferrer" aria-label="Code">
                    <FiGithub />
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label="Démo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-tags">
                {project.tags.map((tag, j) => (
                  <li key={j}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-more">
        <a
          href="https://github.com/ManuelaMeupia"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          Voir plus sur GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;