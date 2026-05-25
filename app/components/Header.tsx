'use client'

// components/Header.ts
import styles from '../styles/Home.module.scss';

const Header = () => {
  function moveScroll(id: string) {
    const target = document.getElementById(id);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className={`${styles.header} sticky top-0 z-50 h-20`}>
      <h1><img src="/images/my_logo.png" /></h1>
      <nav>
        <ul className={styles.navList}>
          <li><button onClick={() => moveScroll("aboutMe")}>About Me</button></li>
          <li><button onClick={() => moveScroll("skills")}>Skills</button></li>
          <li><button onClick={() => moveScroll("projects")}>Projects</button></li>
          {/* <li><a href="#Career">Career</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
