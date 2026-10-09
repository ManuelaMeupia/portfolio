import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiLinux,
  SiPostman,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import { TbBrandAdobePhotoshop  } from "react-icons/tb";
import { FiCode, FiDatabase, FiTool, FiLayout } from 'react-icons/fi';
import { VscVscode } from 'react-icons/vsc';
import '../styles/Skills.css';

const Skills = () => {
  const categories = [
    {
      title: 'Interfaces',
      icon: <FiCode />,
      color: '#61dafb',
      skills: [
        { name: 'React JS', icon: <SiReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss /> },
      ],
    },
    {
      title: 'Logique & données',
      icon: <FiDatabase />,
      color: '#68a063',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'Visual Basic', icon: <FiCode /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'UML', icon: <FiCode /> },
        { name: 'MERISE', icon: <FiCode /> },
      ],
    },
    {
      title: 'Outils',
      icon: <FiTool />,
      color: '#4db33d',
      skills: [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'VPS / Linux', icon: <SiLinux /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'VS Code', icon: <VscVscode /> },
      ],
    },
    {
      title: 'Design',
      icon: <FiLayout />,
      color: '#2496ed',
      skills: [
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Photoshop', icon: <TbBrandAdobePhotoshop  /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills reveal">
      <div className="section-header">
        <h2 className="section-title">
          Mes <span className="gradient-ttext" style={{ fontFamily: 'DancingScript' , fontSize: '4rem', color: 'var(--accent)' }}>compétences</span>
        </h2>
        <p className="section-subtitle">
          Les technologies et outils que j'utilise au quotidien pour concevoir
          des applications complètes, du frontend à la mise en production.
        </p>
      </div>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div className="skill-card" key={i} style={{ '--cat-color': cat.color }}>
            <div className="skill-card-header">
              <div className="skill-icon-wrapper">{cat.icon}</div>
              <h3>{cat.title}</h3>
            </div>

            <ul className="skill-list">
              {cat.skills.map((skill, j) => (
                <li key={j}>
                  <span className="skill-tag-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;