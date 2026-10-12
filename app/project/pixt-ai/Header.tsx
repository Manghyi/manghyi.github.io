'use client'

// components/Header.ts
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from '../styles/Home.module.scss';

const Header = () => {
  const router = useRouter();

  function goHome() {
    router.push('/', {
      scroll: false,
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      })
    })
  }

  return (
    <header className={`${styles.header} sticky top-0 z-50 h-20`}>
      <button onClick={() => goHome()}>
        <h1><img src="/images/my_logo.png" /></h1>
      </button>
      <button onClick={() => router.back()}>
        <p>Back</p>
      </button>
    </header>
  );
};

export default Header;
