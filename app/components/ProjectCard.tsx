// components/ProjectCard.js
import styles from '../styles/Home.module.css';

interface ProjcetType {
    title: string,
    image: string,
    description: string,
    github?: string,
    liveDemo?: string,
}

const ProjectCard = ({ project }: { project: ProjcetType }) => {
  return (
    <div className={styles.projectCard}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.buttons}>
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;