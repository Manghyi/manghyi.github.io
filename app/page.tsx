// pages/index.js
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from './components/Footer';
import styles from './styles/Home.module.scss';


const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default Home;
