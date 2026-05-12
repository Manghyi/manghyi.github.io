// components/AboutMe.js
import styles from '../styles/Home.module.scss';

const AboutMe = () => {
    return (
        <section id="aboutMe" className={styles.aboutMe}>
            <div>
                <h3>About Me</h3>
                <div className={styles.aboutMeMain}>
                    <div>
                        <div>
                            <p>

                                <img src={"/icons/name.fa083cfb.svg"} />
                            </p>
                        </div>
                        <div>
                            <p>이름</p>
                            <p>송 치원</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>

                                <img src={"/icons/birthdate.5bfe2a95.svg"} />
                            </p>
                        </div>
                        <div>
                            <p>생년월일</p>
                            <p>93.6.18</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>

                                <img src={"/icons/location.665eb728.svg"} />
                            </p>
                        </div>
                        <div>
                            <p>주소</p>
                            <p>서울특별시 강남구</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>

                                <img src={"/icons/phone.0b0f8955.svg"} />
                            </p>
                        </div>
                        <div>
                            <p>연락처</p>
                            <p>010-4161-5195</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>

                                <img src={"/icons/email.f8008661.svg"} />
                            </p>
                        </div>
                        <div>
                            <p>이메일</p>
                            <p>scw618@naver.com</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>

                                <img src={"/icons/education.svg"} />
                            </p>
                        </div>
                        <div>
                            <p>학력</p>
                            <p>
                                연세대학교 미래캠퍼스
                                <br />
                                (디지털 아트학)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;