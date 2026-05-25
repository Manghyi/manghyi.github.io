'use client'

import Header from "./Header";
import { useEffect } from "react";
import styles from '../styles/Home.module.scss';

const project = () => {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, []);
  
    return (
        <>
        <Header />
        <main className={styles.home}>
            <div>
                이미지
            </div>
            <h2>프로젝트 이름</h2>
            <div>
                <h3>프로젝트 기간</h3>
                <p>2026.01.01 - 2026.04.01</p>
            </div>
            <div>
                <h3>설명</h3>
                <p>이 프로젝트는...</p>
            </div>
            <div>
                <h3>스펙</h3>
                <ul>
                    <li><p>React</p></li>
                    <li><p>SASS</p></li>
                </ul>
            </div>
        </main>
        </>
        
    );
}

export default project;