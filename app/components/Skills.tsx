
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface RelatedProject {
  name: string;
  href: string;
}

interface SkillGroup {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  experience: string;
  projects: RelatedProject[];
}

const skillsData: SkillGroup[] = [
  {
    id: "01",
    category: "FRONTEND DEVELOPMENT",
    title: "서비스 경험을 구현하는 UI",
    description:
      "사용자 흐름을 고려한 화면 구성과 반응형 인터랙션을 구현합니다.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "SCSS",
      "Tailwind CSS",
    ],
    experience:
      "Pixt의 콘텐츠 검색·상세 화면과 Pixt AI의 영상 제작 인터페이스를 구현했습니다.",
    projects: [
      { name: "Pixt", href: "/projects/pixt" },
      { name: "Pixt AI", href: "/projects/pixt-ai" },
    ],
  },
  {
    id: "02",
    category: "UI ARCHITECTURE",
    title: "재사용 가능한 UI 구조 설계",
    description:
      "서비스 로직과 공통 UI를 분리하고 일관된 디자인 체계를 구축합니다.",
    technologies: [
      "Yarn Workspaces",
      "Design System",
      "Emotion",
      "styled-components",
      "Storybook",
    ],
    experience:
      "Pixt의 Web·Auth에 공통 Design System을 적용하고, 디자인 토큰과 재사용 컴포넌트를 구성했습니다.",
    projects: [
      { name: "Pixt", href: "/projects/pixt" },
    ],
  },
  {
    id: "03",
    category: "STATE & DATA FLOW",
    title: "복잡한 상태와 비동기 흐름 관리",
    description:
      "클라이언트 상태와 서버 데이터를 연결하고 작업 진행 상태를 관리합니다.",
    technologies: [
      "MobX",
      "Redux",
      "Axios",
      "REST API",
      "Multipart Upload",
    ],
    experience:
      "로그인 전후 장바구니 동기화, 파일 분할 업로드, 전송 진행률 및 취소 흐름을 구현했습니다.",
    projects: [
      { name: "Pixt", href: "/projects/pixt" },
      {
        name: "Stockfolio Cloud",
        href: "/projects/stockfolio-cloud",
      },
    ],
  },
  {
    id: "04",
    category: "MEDIA & PERFORMANCE",
    title: "미디어 처리와 렌더링 최적화",
    description:
      "복잡한 미디어 인터랙션을 구현하고 콘텐츠 목록 렌더링을 효율적으로 관리합니다.",
    technologies: [
      "PixiJS",
      "Web Components",
      "react-window",
      "HLS.js",
      "Timeline",
    ],
    experience:
      "Pixt AI의 Clip 기반 미리보기와 Timeline 동기화, Pixt의 가상화 무한 스크롤을 구현했습니다.",
    projects: [
      { name: "Pixt AI", href: "/projects/pixt-ai" },
      { name: "Pixt", href: "/projects/pixt" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-heading"
    >
      <div>
        <header className={styles.skillsHeading}>
          <div>
            <p className={styles.skillsEyebrow}>
              <span aria-hidden="true" />
              TECHNICAL EXPERTISE
            </p>
            <h3 id="skills-heading">
              Skills <span>& Experience.</span>
            </h3>
          </div>

          <p className={styles.skillsHeadingDescription}>
            기술을 나열하는 것보다,
            <br />
            실제 서비스에서의 활용 경험을 보여줍니다.
          </p>
        </header>

        <div className={styles.skillsIntro}>
          <div>
            <span className={styles.skillsIntroLabel}>
              ENGINEERING APPROACH
            </span>
            <h4>
              서비스를 이해하고,
              <br />
              <span>경험을 구현합니다.</span>
            </h4>
            <p>
              영상 제작, 콘텐츠 탐색, 클라우드 파일 관리 등
              다양한 서비스에서 UI 설계부터 상태 관리,
              복잡한 인터랙션 구현까지 경험했습니다.
            </p>
          </div>

          <ul className={styles.skillsKeywords}>
            <li>Service Development</li>
            <li>UI Architecture</li>
            <li>Interactive Experience</li>
          </ul>
        </div>

        <ul className={styles.skillsGrid}>
          {skillsData.map((skill) => (
            <li key={skill.id} className={styles.skillsCard}>
              <article>
                <div className={styles.skillsCardTop}>
                  <span>{skill.category}</span>
                  <span>{skill.id}</span>
                </div>

                <div className={styles.skillsCardMain}>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>

                <ul className={styles.skillsTechList}>
                  {skill.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className={styles.skillsExperience}>
                  <span>APPLIED EXPERIENCE</span>
                  <p>{skill.experience}</p>
                </div>

                <div className={styles.skillsRelated}>
                  <span>Related Projects</span>
                  <div>
                    {skill.projects.map((project) => (
                      <Link
                        key={project.href}
                        href={project.href}
                      >
                        {project.name}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
