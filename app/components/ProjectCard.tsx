// components/ProjectCard.js
import styles from '../styles/Home.module.scss';

interface ProjcetType {
  title: string,
  image: string,
  description: string,
  detail?: string,
}

const ProjectCard = ({ project }: { project: ProjcetType }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImage}>
        <img src={project.image} alt={project.title} />
      </div>
      <h4 title={project.title}>{project.title}</h4>
      <div className={styles.projectCardDescription}>
        <p>{project.description}</p>
      </div>
      <div>
        <a href={project.detail}>more &gt;</a>
      </div>
    </div>
  );
};

export default ProjectCard;