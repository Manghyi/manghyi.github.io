// components/Header.ts
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><img src="/images/my_logo.png" /></h1>
      <nav>
        <ul className={styles.navList}>
          <li>홈</li>
          <li>프로젝트</li>
          <li>블로그</li>
          <li>연락처</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
