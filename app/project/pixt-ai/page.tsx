'use client';

import { useEffect } from 'react';
import Header from './Header';
import styles from './Project.module.scss';

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Redux Toolkit',
  'SCSS',
  'PixiJS',
  'Lit',
];

const clips = [
  { title: 'Video Clip', text: '영상 소스의 재생 구간과 Trim 구간을 관리' },
  { title: 'Image Clip', text: '이미지 소스를 지정된 시간 동안 렌더링' },
  { title: 'Audio Clip', text: 'TTS와 BGM을 Timeline에 맞춰 재생' },
  { title: 'Subtitle Clip', text: '자막 텍스트와 스타일을 영상 위에 렌더링' },
  { title: 'Transition', text: 'Scene 사이의 전환 효과를 시간축에 맞춰 적용' },
];

export default function PixtProjectPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Header />

      <main className={styles.project}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>PROJECT 01 · FRONTEND</span>
            <h1>Pixt AI</h1>
            <p className={styles.heroDescription}>
              AI가 생성한 콘텐츠를 바탕으로 영상의 구성부터 편집, 미리보기까지
              하나의 화면에서 처리할 수 있는 AI 영상 제작 서비스입니다.
            </p>

            <div className={styles.heroMeta}>
              <div>
                <span>Period</span>
                <strong>2023.01 — 2023.10</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>Frontend Development</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Editor · Preview Player</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <span>01</span>
            <h2>Project Overview</h2>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <span>01</span>
              <h3>AI 기반 영상 제작</h3>
              <p>
                사용자가 작성하거나 생성한 Script를 기반으로 Scene을 구성하고,
                영상·이미지·음원·자막을 조합해 하나의 영상을 제작합니다.
              </p>
            </div>
            <div className={styles.overviewCard}>
              <span>02</span>
              <h3>Web Editor</h3>
              <p>
                Scene별 콘텐츠와 재생 길이, 자막, 음원, 비율 및 전환 효과를
                편집할 수 있도록 Editor 화면을 구성했습니다.
              </p>
            </div>
            <div className={styles.overviewCard}>
              <span>03</span>
              <h3>Preview Player</h3>
              <p>
                여러 종류의 미디어를 Clip으로 관리하고 하나의 Timeline에서
                합성·재생하기 위해 별도의 Preview Player를 연동했습니다.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.sectionTitle}>
            <span>02</span>
            <h2>Service Flow</h2>
          </div>

          <div className={styles.flow}>
            <div className={styles.flowItem}>
              <strong>Script</strong>
              <span>텍스트 / URL / PDF 등</span>
            </div>
            <i>→</i>
            <div className={styles.flowItem}>
              <strong>AI Content</strong>
              <span>Scene &amp; Content 생성</span>
            </div>
            <i>→</i>
            <div className={styles.flowItem}>
              <strong>Editor</strong>
              <span>미디어 / 자막 / 음원 편집</span>
            </div>
            <i>→</i>
            <div className={styles.flowItem}>
              <strong>Preview</strong>
              <span>Timeline 기반 합성·재생</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <span>03</span>
            <h2>Editor</h2>
          </div>

          <div className={styles.featureLayout}>
            <div className={styles.featureText}>
              <p className={styles.kicker}>SCENE BASED EDITING</p>
              <h3>Scene 단위로 콘텐츠를 구성하고 편집</h3>
              <p>
                Pixt AI의 Editor는 하나의 영상을 여러 Scene으로 나누어 관리합니다.
                각 Scene에는 콘텐츠, TTS, BGM, Subtitle, Transition 등의 정보가
                연결되고, 이 데이터가 Preview Player의 Clip으로 변환됩니다.
              </p>
              <ul className={styles.checkList}>
                <li>영상 / 이미지 콘텐츠 선택</li>
                <li>Scene별 재생 시간 관리</li>
                <li>TTS 및 BGM 설정</li>
                <li>자막 스타일 및 내용 편집</li>
                <li>Scene Transition 설정</li>
              </ul>
            </div>

            <div className={styles.mockEditor} aria-label="Pixt AI editor 구조">
              <div className={styles.mockTop}>
                <span>PIXT AI</span>
                <span>EDITOR</span>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockSide}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.mockCanvas}>
                  <div className={styles.mockVideo}>
                    <span>PREVIEW</span>
                  </div>
                </div>
              </div>
              <div className={styles.timeline}>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.playerSection}`}>
          <div className={styles.sectionTitle}>
            <span>04</span>
            <h2>Preview Player</h2>
          </div>

          <div className={styles.playerIntro}>
            <p className={styles.kicker}>CORE IMPLEMENTATION</p>
            <h3>여러 미디어를 하나의 Timeline으로 합성</h3>
            <p>
              Pixt AI는 별도의 <strong>preview-player</strong> 패키지를 통해
              영상 미리보기를 처리합니다. React에서는 Web Component 기반 Player를
              사용하고, Player 내부에서는 PixiJS Canvas를 렌더링 영역으로 사용합니다.
            </p>
          </div>

          <div className={styles.architecture}>
            <div className={styles.archNode}>
              <strong>Pixt AI Web</strong>
              <span>React / Next.js</span>
            </div>
            <div className={styles.connector}>↓</div>
            <div className={styles.archNode}>
              <strong>PreviewPlayer</strong>
              <span>Web Component</span>
            </div>
            <div className={styles.connector}>↓</div>
            <div className={styles.archNode}>
              <strong>PixiJS Renderer</strong>
              <span>Canvas Rendering</span>
            </div>
            <div className={styles.connector}>↓</div>
            <div className={styles.archChildren}>
              {clips.map((clip) => (
                <div className={styles.clipNode} key={clip.title}>
                  <strong>{clip.title}</strong>
                  <span>{clip.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <span>05</span>
            <h2>Timeline &amp; Synchronization</h2>
          </div>

          <div className={styles.timelineSection}>
            <div>
              <h3>Scene 데이터를 Clip으로 변환</h3>
              <p>
                Preview 화면을 구성할 때 프로젝트의 slides를 순회하면서 각 Scene의
                정보를 Player가 이해할 수 있는 Clip으로 변환합니다.
              </p>
            </div>

            <div className={styles.codeCard}>
              <pre>{`Slide
 ├─ Content       → VideoClip / ImageClip
 ├─ TTS           → AudioClip
 ├─ BGM           → AudioClip
 ├─ Subtitle      → SubtitleClip
 └─ Transition    → Transition

                ↓

          PreviewPlayer Timeline`}</pre>
            </div>
          </div>

          <div className={styles.syncGrid}>
            <article>
              <span>01</span>
              <h3>공통 시간축</h3>
              <p>
                Scene의 startTime과 duration을 기준으로 각 Clip의 재생 구간을
                계산하여 하나의 시간축 위에 배치합니다.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Current Time</h3>
              <p>
                Player의 currentTime을 기준으로 등록된 Clip이 자신의 상태에 맞게
                seek / play / pause하도록 구성되어 있습니다.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Media Control</h3>
              <p>
                Video와 Audio는 각각의 media resource를 사용하지만 Player의 공통
                playback state와 volume, muted, playbackRate를 공유합니다.
              </p>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.sectionTitle}>
            <span>06</span>
            <h2>Technical Points</h2>
          </div>

          <div className={styles.technicalGrid}>
            <article>
              <span>01</span>
              <h3>Video Loop 처리</h3>
              <p>
                Scene보다 원본 영상이 짧고 loop가 활성화된 경우 필요한 길이만큼
                VideoClip을 여러 개 생성하고 Group Clip으로 묶어 재생 구간을 채웁니다.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Trim &amp; Object Fit</h3>
              <p>
                원본 영상의 trim start/end를 유지하면서 Scene의 재생 시간에 맞추고,
                Fit Cover / Contain 효과를 통해 화면 비율에 맞게 렌더링합니다.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Transition</h3>
              <p>
                Scene 사이의 transition duration만큼 시간축을 조정한 뒤 이전 Clip과
                다음 Clip을 연결해 자연스러운 장면 전환을 구성합니다.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Render Texture Group</h3>
              <p>
                여러 ViewClip을 Container에 묶고 RenderTexture로 렌더링하여 하나의
                View처럼 다룰 수 있도록 Group Clip 구조를 사용합니다.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <span>07</span>
            <h2>Tech Stack</h2>
          </div>

          <div className={styles.techList}>
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.retrospective}`}>
          <div className={styles.sectionTitle}>
            <span>08</span>
            <h2>Retrospective</h2>
          </div>
          <div className={styles.retrospectiveContent}>
            <h3>UI를 만드는 것에서 미디어 재생 구조를 이해하는 개발로</h3>
            <p>
              Pixt AI에서는 일반적인 웹 UI뿐 아니라 영상·이미지·음원·자막을
              동일한 시간축에서 다루는 기능을 구현했습니다. 특히 Editor의 Scene
              데이터를 Preview Player의 Clip 구조로 변환하는 과정을 통해 UI와
              실제 미디어 렌더링 사이의 데이터 흐름을 이해하고, 복잡한 기능을
              컴포넌트와 데이터 단위로 나누어 설계하는 경험을 얻었습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
