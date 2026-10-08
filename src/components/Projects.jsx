import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Venice Hall',
      description:
        'Courte description du projet. Explique le problème résolu, la stack utilisée et ce que tu as appris.',
      image: '/img/vh.png',
      tags: ['React js'],
      demoLink:' https://venicehall.onrender.com/',
      codeLink: 'https://github.com/alphadigitalservices237/VeniceHall',
    },
    {
      title: 'Beverly Hills Construction',
      description:
        'Courte description du projet. Explique le problème résolu, la stack utilisée et ce que tu as appris.',
      image: '/img/bhc.png',
      tags: ['React js, Docker, VPS'],
      demoLink: 'https://www.beverlyhillsconstructionbtp.com/s',
      codeLink: 'https://github.com/alphadigitalservices237/beverlyhills',
    },
    {
      title: 'LaboTrack',
      description:
        'Courte description du projet. Explique le problème résolu, la stack utilisée et ce que tu as appris.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      tags: ['Docker', 'VPS', 'Node.js'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects reveal">
      <div className="section-header">
        <h2 className="section-title">
          Mes <span className="gradient-text" style={{ fontFamily: 'Angelface' , fontSize: '5rem' }}>projets</span>
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