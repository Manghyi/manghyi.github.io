'use client'

// components/ProjectCard.js
import styles from '../styles/Home.module.scss';
import { useRouter } from "next/navigation";

interface ProjcetType {
  title: string,
  image: string,
  description: string,
  detail?: string,
  start: string,
  end?: string
}

const ProjectCard = ({ project }: { project: ProjcetType }) => {
  const router = useRouter();

  function goMore() {
    if (!project.detail) return;

    router.push(project.detail);
  }

  return (
    <div className={styles.projectCard}>
      <div className={`${styles.projectCardImage} border-1`}>
        <img src={project.image} alt={project.title} />
      </div>
      <h4 title={project.title}>{project.title}</h4>
      <div className={styles.projectCardDescription}>
        <p>{project.description}</p>
      </div>
      <div className="flex">
        <p>기간 :</p>
        <div className="flex ml-2">
          <p>{project.start}</p>
          {project.end ? <p className="ml-1">{` - ${project.end}`}</p> : <></>}
        </div>
      </div>
      {/* <div>
        <button onClick={() => goMore()}>more &gt;</button>
      </div> */}
    </div>
  );
};

export default ProjectCard;