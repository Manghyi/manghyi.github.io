// components/Header.ts
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><img src="/images/my_logo.png" /></h1>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#AboutMe" >About Me</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Skills">Skills</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
