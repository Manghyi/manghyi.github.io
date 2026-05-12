// pages/index.js
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from "./components/AboutMe";
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import styles from './styles/Home.module.css';

const projects = [
  {
    title: '프로젝트 1',
    description: '이 프로젝트는 ...',
    image: '/project1.jpg',
    github: 'https://github.com/user/repo1',
    liveDemo: 'https://yourdemo1.com',
  },
  {
    title: '프로젝트 2',
    description: '이 프로젝트는 ...',
    image: '/project2.jpg',
    github: 'https://github.com/user/repo2',
    liveDemo: 'https://yourdemo2.com',
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <Hero />
        <AboutMe />
        <div id="Projects" className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>  
      </main>
      <Footer />
    </>
  );
}

export default Home;
