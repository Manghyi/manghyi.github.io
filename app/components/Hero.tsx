// components/Hero.js
import styles from '../styles/Home.module.scss';


const Hero = () => {
  return (
    <section className={styles.hero} style={{
      backgroundImage: `url(/images/hero_img.png)`,
    }}>
      <h2 className={styles.heroTitle}>
        {`< 송치원 >`}
      </h2>
      <h3 className={styles.heroSubTitle}>
        사이를 잇는 프론트엔드 개발자
      </h3>
      <div className={styles.heroDivider}>
        {`/////////////////////////////////////`}
      </div>
      <div className={styles.heroMessage}>
        <p>안녕하세요.</p>
        <p>사람과 사람, 사람과 서비스를 잇는 프론트엔드 개발자</p>
        <p>송치원입니다.</p>
      </div>
    </section>
  );
};

export default Hero;