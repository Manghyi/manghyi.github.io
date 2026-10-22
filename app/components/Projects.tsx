import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";

/**
 * Existing site: Next.js App Router, CSS Modules with Sass, GitHub Pages static export.
 * Your next.config.ts already sets images.unoptimized = true.
 * The site uses NEXT_PUBLIC_BASE_PATH for images deployed beneath a repository path.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const secondaryProjects = [
  {
    id: "pixt",
    number: "02",
    eyebrow: "VIDEO CONTENT PLATFORM",
    title: "Pixt",
    summary: "영상 탐색 경험과 공통 UI를 연결한 콘텐츠 플랫폼",
    description:
      "Web·Auth를 독립된 Workspace로 구성하고 Design System을 적용했습니다. 검색 목록 가상화와 서비스 간 인증 연결을 구현했습니다.",
    skills: ["Yarn Workspaces", "Design System", "Virtualized Search"],
    technologies: ["Next.js", "Emotion", "MobX"],
    href: "/projects/pixt",
  },
  {
    id: "cloud",
    number: "03",
    eyebrow: "MEDIA CLOUD SERVICE",
    title: "Stockfolio Cloud",
    summary: "대용량 미디어 파일을 저장하고 관리하는 클라우드 서비스",
    description:
      "파일 분할과 병렬 업로드, 진행률 집계 및 취소 처리를 구현하고, 디렉터리 탐색과 파일 공유 흐름을 연결했습니다.",
    skills: ["Multipart Upload", "Progress Management", "File Management"],
    technologies: ["Next.js", "TypeScript", "MobX"],
    href: "/projects/stockfolio-cloud",
  },
] as const;

const additionalProjects = [
  { title: "Editfolio", description: "영상 편집 구독 서비스", category: "Commercial Service" },
  { title: "Omegabox", description: "영화관 서비스 클론", category: "Personal Project" },
  { title: "TOMATO Study Planner", description: "학습 일정 및 할 일 관리", category: "Personal Project" },
  { title: "BookFinder", description: "도서 API 기반 검색 서비스", category: "Personal Project" },
  { title: "Ediya Clone", description: "브랜드 웹사이트 클론", category: "Personal Project" },
  { title: "Miso Clone", description: "홈서비스 웹사이트 클론", category: "Personal Project" },
] as const;

function PixtAIVisual() {
  return (
    <div className={styles.aiVisual} aria-label="Pixt AI 영상 편집 구조를 설명하는 개념도">
      <div className={styles.aiVisualTop}>
        <div className={styles.browserDots} aria-hidden="true"><i /><i /><i /></div>
        <span>PREVIEW PLAYER</span>
        <span className={styles.playback}>00:12 / 00:30</span>
      </div>
      <div className={styles.previewArea}>
        <div className={styles.previewOrb} />
        <span className={styles.previewPlay} aria-hidden="true">▶</span>
        <span className={styles.previewCaption}>Create your story.</span>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timelineNumbers}><span>00:00</span><span>00:10</span><span>00:20</span><span>00:30</span></div>
        <div className={styles.timelineRow}><span>VIDEO</span><i className={styles.clipVideoA} /><i className={styles.clipVideoB} /><i className={styles.clipVideoC} /></div>
        <div className={styles.timelineRow}><span>TEXT</span><i className={styles.clipTextA} /><i className={styles.clipTextB} /></div>
        <div className={styles.timelineRow}><span>AUDIO</span><i className={styles.clipAudio} /></div>
        <div className={styles.timelinePlayhead} aria-hidden="true" />
      </div>
      <span className={styles.visualNote}>Code-based illustration · 실제 서비스 캡처 아님</span>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className={styles.cloudVisual} aria-label="클라우드 파일 업로드 흐름을 설명하는 개념도">
      <div className={styles.cloudSidebar} aria-hidden="true">
        <span className={styles.cloudMark}>S</span>
        <span className={styles.sidebarLine} />
        <span className={styles.sidebarLineShort} />
        <span className={styles.sidebarLine} />
      </div>
      <div className={styles.cloudContent}>
        <div className={styles.cloudToolbar}><span>My Storage</span><b>＋ Upload</b></div>
        <div className={styles.fileGrid} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.uploadBox}>
          <div className={styles.uploadTitle}><span>media_footage.mp4</span><strong>72%</strong></div>
          <div className={styles.uploadTrack}><span /></div>
          <span className={styles.uploadFooter}>Uploading chunks · 3 / 4</span>
        </div>
      </div>
      <span className={styles.cloudVisualNote}>업로드 흐름 개념도</span>
    </div>
  );
}

function SecondaryProjectCard({
  project,
}: {
  project: (typeof secondaryProjects)[number];
}) {
  return (
    <article className={styles.standardCard}>
      <Link href={project.href} className={styles.standardLink} aria-label={`${project.title} 프로젝트 상세 보기`}>
        <div className={`${styles.standardVisual} ${project.id === "pixt" ? styles.pixtVisual : styles.cloudVisualWrap}`}>
          {project.id === "pixt" ? (
            <>
              <Image
                src={`/images/pixt-home.png`}
                alt="Pixt 메인 홈 화면: 영상 카테고리와 콘텐츠 썸네일 그리드"
                fill
                sizes="(max-width: 680px) 100vw, 480px"
                className={styles.pixtScreen}
              />
              <span className={styles.screenLabel}>실제 서비스 화면 · 공식 홍보 자료</span>
            </>
          ) : (
            <CloudVisual />
          )}
        </div>
        <div className={styles.standardBody}>
          <div className={styles.cardMeta}><span>{project.number} / PROJECT</span><span>{project.eyebrow}</span></div>
          <div className={styles.cardTitleRow}>
            <h4>{project.title}</h4>
            <span className={styles.arrowIcon} aria-hidden="true">↗</span>
          </div>
          <p className={styles.standardSummary}>{project.summary}</p>
          <p className={styles.standardDescription}>{project.description}</p>
          <ul className={styles.highlightList} aria-label="핵심 구현">
            {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
          <div className={styles.cardBottom}>
            <div className={styles.techStack}>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
            <span className={styles.viewDetail}>View case study <span aria-hidden="true">↗</span></span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.container}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}><span className={styles.eyebrowLine} /> SELECTED WORKS</p>
            <h3 id="projects-heading">Featured <span>Projects.</span></h3>
          </div>
          <p>서비스 경험부터 프론트엔드 아키텍처까지,<br className={styles.desktopBreak} /> 직접 구현한 주요 프로젝트를 소개합니다.</p>
        </header>

        <article className={styles.featuredCard}>
          <Link href={`/projects/pixt-ai`} className={styles.featuredLink} aria-label="Pixt AI 프로젝트 상세 보기">
            <div className={styles.featuredCopy}>
              <div className={styles.featuredTopline}><span className={styles.featuredIndex}>01 / FEATURED PROJECT</span><span className={styles.featuredCategory}>AI VIDEO EDITOR</span></div>
              <div className={styles.featuredMain}>
                <span className={styles.featuredOverline}>FEATURED CASE STUDY</span>
                <h4>Pixt <em>AI</em></h4>
                <p className={styles.featuredHeadline}>텍스트에서 영상까지,<br />제작 과정을 연결하다.</p>
                <p className={styles.featuredDescription}>대본 입력부터 영상 구성·편집·미리보기까지, Clip 기반 미디어 렌더링과 Timeline 동기화로 영상 제작 경험을 구현했습니다.</p>
                <ul className={styles.featuredHighlights} aria-label="핵심 구현">
                  <li>Timeline Synchronization</li>
                  <li>Preview Player</li>
                  <li>Clip-based Rendering</li>
                </ul>
              </div>
              <div className={styles.featuredBottom}><span>React · TypeScript · PixiJS · Web Component</span><span className={styles.featuredCTA}>Explore project <span aria-hidden="true">↗</span></span></div>
            </div>
            <PixtAIVisual />
          </Link>
        </article>

        <div className={styles.projectGrid}>
          {secondaryProjects.map((project) => <SecondaryProjectCard key={project.id} project={project} />)}
        </div>

        <details className={styles.moreProjects}>
          <summary>
            <span className={styles.moreTitle}><span className={styles.moreDot} /> Additional Projects <small>실무 및 개인 프로젝트</small></span>
            <span className={styles.moreAction}>View more <span aria-hidden="true">＋</span></span>
          </summary>
          <ul className={styles.additionalGrid}>
            {additionalProjects.map((project) => (
              <li key={project.title} className={styles.additionalItem}>
                <span className={styles.additionalCategory}>{project.category}</span>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
