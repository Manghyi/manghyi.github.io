import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Stockfolio Cloud | Frontend Project",
  description:
    "멀티파트 파일 업로드와 클라우드 파일 관리 UX를 구현한 Stockfolio Cloud 프론트엔드 프로젝트.",
};

const techStack = [
  "Next.js 11",
  "React 17",
  "TypeScript",
  "MobX",
  "styled-components",
  "Storybook",
  "Axios",
];

const uploadSteps = [
  {
    number: "01",
    title: "전송 시작",
    detail: "파일명·MIME 타입·크기를 전달해 업로드 정보를 요청",
    code: "startUpload",
  },
  {
    number: "02",
    title: "파일 분할",
    detail: "서버가 제공한 조각별 크기로 Blob을 분할",
    code: "File.slice",
  },
  {
    number: "03",
    title: "병렬 전송",
    detail: "각 업로드 URL에 파일 조각을 전송하고 ETag 수집",
    code: "Promise.all + Axios",
  },
  {
    number: "04",
    title: "전송 완료",
    detail: "파일 ID와 ETag 목록을 전달해 업로드 완료 요청",
    code: "finishUpload",
  },
];

const featureCards = [
  {
    index: "01",
    title: "파일·폴더 탐색",
    description:
      "디렉터리 데이터를 바탕으로 폴더 경로를 이동하고, 파일을 썸네일형 또는 목록형으로 표시했습니다.",
    keywords: ["Directory", "Grid / List", "Sorting"],
  },
  {
    index: "02",
    title: "다중 선택과 일괄 작업",
    description:
      "선택한 파일들을 MobX Store에서 관리하고, 이동·삭제 작업 및 결과에 따른 목록 갱신을 연결했습니다.",
    keywords: ["Selection", "Batch Action", "MobX"],
  },
  {
    index: "03",
    title: "미디어 상세보기",
    description:
      "이미지·동영상을 구분해 뷰어를 표시하고, 파일 정보와 다운로드·공유·이름 변경 기능을 제공했습니다.",
    keywords: ["Media Viewer", "Metadata", "Share"],
  },
  {
    index: "04",
    title: "사용자·공통 인터랙션",
    description:
      "프로필 정보, 저장 용량, 인증 상태, 다단계 확인 모달을 각각의 역할에 맞는 Store와 UI로 구성했습니다.",
    keywords: ["Profile", "Storage", "Modal"],
  },
];

const improvements = [
  {
    title: "부분 실패 응답의 정교한 처리",
    detail:
      "파일 이동·삭제 시 일부 요청만 성공할 수 있으므로, 작업별 성공·실패 상태를 사용자에게 개별적으로 전달하도록 개선할 수 있습니다.",
  },
  {
    title: "비동기 작업과 리소스 정리",
    detail:
      "모달 이벤트 리스너와 Lottie 인스턴스의 정리 흐름을 보완하고, 업로드 오류·취소 이후의 정리 동작을 강화할 수 있습니다.",
  },
  {
    title: "타입 안정성과 책임 분리",
    detail:
      "Storybook 파일에 포함된 실제 서비스 로직을 분리하고, 외부 SDK의 any 타입 및 API 응답 모델을 더 구체화할 수 있습니다.",
  },
];

function SectionTitle({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <div className={styles.sectionEyebrow}>
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}

function TechTags({ items }: { items: string[] }) {
  return (
    <div className={styles.tags}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

/**
 * 아래 UI는 실제 서비스의 스크린샷이 아니라, 소스 코드에서 확인한
 * 디렉터리/파일 목록/용량 표시 구조를 시각화한 개념도입니다.
 */
function CloudInterfaceDiagram() {
  return (
    <div className={styles.interfaceVisual}>
      <div className={styles.window}>
        <div className={styles.windowTop}>
          <div className={styles.windowDots} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>Stockfolio Cloud / interface concept</span>
        </div>
        <div className={styles.windowBody}>
          <aside className={styles.mockSidebar}>
            <div className={styles.mockLogo}>
              <span className={styles.mockLogoSymbol}>S</span>
              <strong>Stockfolio</strong>
            </div>
            <div className={`${styles.mockNavRow} ${styles.mockNavActive}`}>
              <span className={styles.mockNavIcon}>▦</span> 내 클라우드
            </div>
            <div className={styles.mockNavRow}>
              <span className={styles.mockNavIcon}>⌑</span> 휴지통
            </div>
            <div className={styles.mockCapacity}>
              <span>Storage usage</span>
              <div className={styles.capacityTrack}>
                <div className={styles.capacityFill} />
              </div>
              <small>Used / Capacity</small>
            </div>
          </aside>
          <div className={styles.mockMain}>
            <div className={styles.mockToolbar}>
              <div>
                <span>Workspace</span>
                <strong>내 클라우드</strong>
              </div>
              <span className={styles.mockUploadButton}>↑ 업로드</span>
            </div>
            <div className={styles.mockListTitle}>
              <span>파일 및 폴더</span>
              <span>▦ &nbsp;☰</span>
            </div>
            <div className={styles.mockFileGrid}>
              <div className={styles.mockFile}>
                <div className={`${styles.mockThumbnail} ${styles.mockPurple}`}>
                  <span>▶</span>
                </div>
                <b>showreel.mp4</b>
                <small>Video</small>
              </div>
              <div className={styles.mockFile}>
                <div className={`${styles.mockThumbnail} ${styles.mockBlue}`}>
                  <span>▧</span>
                </div>
                <b>cover.png</b>
                <small>Image</small>
              </div>
              <div className={styles.mockFile}>
                <div className={`${styles.mockThumbnail} ${styles.mockGray}`}>
                  <span>▤</span>
                </div>
                <b>project</b>
                <small>Folder</small>
              </div>
            </div>
            <div className={styles.mockProgress}>
              <div>
                <strong>File upload</strong>
                <span>chunk progress</span>
              </div>
              <div className={styles.mockProgressTrack}>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.visualNotice}>실제 화면 캡처가 아닌 기능 구성 개념도입니다.</p>
    </div>
  );
}

export default function StockfolioCloudPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="project-title">
        <div className={styles.heroGlowOne} aria-hidden="true" />
        <div className={styles.heroGlowTwo} aria-hidden="true" />
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Portfolio</a>
            <span aria-hidden="true">/</span>
            <span>Stockfolio Cloud</span>
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>FRONTEND PROJECT / CLOUD SERVICE</p>
              <h1 id="project-title">Stockfolio Cloud</h1>
              <p className={styles.heroStatement}>
                큰 파일을 다루는 경험을,
                <br />
                작고 명확한 흐름으로.
              </p>
              <p className={styles.heroDescription}>
                이미지·영상 파일의 업로드부터 탐색, 관리, 공유까지.
                멀티파트 전송과 비동기 상태를 사용자에게 이해하기 쉬운
                인터페이스로 연결한 클라우드 서비스 프론트엔드 프로젝트입니다.
              </p>
              <div className={styles.heroActions}>
                <a href="#challenge" className={styles.primaryLink}>
                  핵심 구현 살펴보기 <span aria-hidden="true">↗</span>
                </a>
                <a href="#overview" className={styles.secondaryLink}>
                  프로젝트 개요 ↓
                </a>
              </div>
              <TechTags items={techStack} />
            </div>
            <CloudInterfaceDiagram />
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <nav className={styles.quickNav} aria-label="프로젝트 섹션 이동">
          <a href="#overview">Overview</a>
          <a href="#challenge">Multipart Upload</a>
          <a href="#file-management">File Management</a>
          <a href="#architecture">Architecture</a>
          <a href="#review">Review</a>
        </nav>

        <section id="overview" className={styles.section}>
          <SectionTitle
            number="01"
            eyebrow="OVERVIEW"
            title="미디어를 저장하는 것을 넘어, 관리하는 경험까지"
            description="사용자가 파일 전송 상태를 파악하고, 업로드한 콘텐츠를 필요한 순간 다시 찾을 수 있도록 화면과 상태 흐름을 구성했습니다."
          />
          <div className={styles.overviewGrid}>
            <div className={styles.overviewNarrative}>
              <h3>프로젝트에서 맡은 일</h3>
              <p>
                클라우드의 파일 목록·상세 화면, 멀티파트 업로드 인터랙션,
                폴더 이동·공유·다운로드 작업, 프로필 및 인증 관련 화면을
                프론트엔드에서 구현했습니다. 각 기능은 API 모듈과 MobX Store,
                재사용 가능한 UI 컴포넌트로 연결했습니다.
              </p>
              <div className={styles.calloutLine}>
                <span>핵심 관점</span>
                <strong>비동기 작업의 복잡성을 사용자의 진행 상태로 번역하기</strong>
              </div>
            </div>
            <dl className={styles.projectFacts}>
              <div>
                <dt>PROJECT</dt>
                <dd>Stockfolio Cloud</dd>
              </div>
              <div>
                <dt>TYPE</dt>
                <dd>미디어 클라우드 서비스</dd>
              </div>
              <div>
                <dt>ROLE</dt>
                <dd>Frontend Development</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>Multipart Upload · File Management · State Architecture</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="challenge" className={`${styles.section} ${styles.challengeSection}`}>
          <SectionTitle
            number="02"
            eyebrow="CORE IMPLEMENTATION"
            title="분할 업로드를 하나의 경험으로 연결하다"
            description="대용량 파일은 전송 과정이 여러 요청으로 나뉩니다. 사용자는 그 복잡한 과정 대신 현재 진행 상태와 취소 여부를 알 수 있어야 합니다."
          />
          <div className={styles.challengeIntro}>
            <div>
              <span className={styles.smallLabel}>PROBLEM</span>
              <h3>하나의 파일, 여러 번의 네트워크 요청</h3>
              <p>
                업로드 시작 요청, 파일 조각 전송, 완료 요청이 분리되어 있습니다.
                이를 사용자 관점에서는 하나의 작업으로 표시해야 했습니다.
              </p>
            </div>
            <div>
              <span className={styles.smallLabel}>APPROACH</span>
              <h3>전송 단계를 나누고 상태는 모으기</h3>
              <p>
                서버에서 수신한 업로드 URL과 조각 크기를 사용해 파일을 분할하고,
                조각별 진행률을 파일 단위 진행 상태로 합산했습니다.
              </p>
            </div>
          </div>
          <ol className={styles.uploadFlow}>
            {uploadSteps.map((step) => (
              <li key={step.number}>
                <div className={styles.flowNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <code>{step.code}</code>
              </li>
            ))}
          </ol>
          <div className={styles.uploadDetailGrid}>
            <article className={styles.darkTechnicalCard}>
              <div className={styles.technicalTop}>
                <span>FILE TRANSFER / KEY LOGIC</span>
                <span>TypeScript</span>
              </div>
              <pre aria-label="멀티파트 업로드 구현 원리를 요약한 코드"><code>{`// 실제 구현의 핵심 흐름을 축약한 예시
const chunk = file.slice(
  pointer,
  pointer + upload.contentLength
);

const result = await sendFile(
  upload,
  file.type,
  chunk,
  onProgress,
  cancelToken
);

// 조각별 ETag를 수집한 뒤 완료 요청
await finishUpload(stockFileId, etags);`}</code></pre>
              <p>업로드 요청 → 전송 → 완료를 독립된 API로 분리했습니다.</p>
            </article>
            <div className={styles.uploadHighlights}>
              <article>
                <span className={styles.highlightIcon}>↗</span>
                <h3>진행률 집계</h3>
                <p>각 조각의 전송 진행률을 집계하고, 업로드 중인 파일별 상태를 화면에 표시했습니다.</p>
              </article>
              <article>
                <span className={styles.highlightIcon}>×</span>
                <h3>전송 취소</h3>
                <p>Axios CancelToken으로 진행 중인 조각 요청을 취소하고 모달 상태를 정리했습니다.</p>
              </article>
              <article>
                <span className={styles.highlightIcon}>✓</span>
                <h3>완료 확인</h3>
                <p>서버가 요구하는 ETag 목록을 모은 뒤 파일별 완료 API를 호출했습니다.</p>
              </article>
            </div>
          </div>
          <p className={styles.sectionFootnote}>
            * 확인된 소스 기준: 병렬 업로드, 진행률 표시, 취소 기능은 구현되어 있으며
            자동 재시도 및 중단 지점 업로드 재개 기능은 확인되지 않았습니다.
          </p>
        </section>

        <section id="file-management" className={styles.section}>
          <SectionTitle
            number="03"
            eyebrow="USER EXPERIENCE"
            title="업로드한 파일을 찾고, 선택하고, 활용하는 흐름"
            description="클라우드의 핵심은 업로드 이후에도 이어집니다. 파일 탐색부터 일괄 관리, 미디어 상세보기와 공유까지 사용 흐름을 연결했습니다."
          />
          <div className={styles.featureGrid}>
            {featureCards.map((card) => (
              <article key={card.index} className={styles.featureCard}>
                <span className={styles.featureNumber}>{card.index}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.featureKeywords}>
                  {card.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className={styles.responsivePanel}>
            <div>
              <span className={styles.smallLabel}>DESKTOP & MOBILE</span>
              <h3>같은 데이터를, 화면 환경에 맞는 상호작용으로</h3>
              <p>
                데스크톱은 사이드 탐색·목록 전환·업로드 작업에 집중하고,
                모바일은 독립된 파일 상세 화면과 간결한 탐색 UI를 사용합니다.
                모바일 업로드는 지원 기능으로 단정하지 않고, 소스에서 확인된
                PC 업로드 안내 동작을 기준으로 설명합니다.
              </p>
            </div>
            <div className={styles.deviceIllustration} aria-label="데스크톱과 모바일의 레이아웃 구성을 설명하는 도식">
              <div className={styles.desktopDevice}>
                <div />
                <div>
                  <i /><i /><i />
                </div>
              </div>
              <div className={styles.mobileDevice}>
                <div />
                <div><i /><i /><i /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className={`${styles.section} ${styles.architectureSection}`}>
          <SectionTitle
            number="04"
            eyebrow="ARCHITECTURE"
            title="화면의 복잡도를 역할별 계층으로 분리하다"
            description="MobX는 공통 상태와 페이지별 상태를 구분하고, UI는 재사용 단위에 따라 구성했습니다. API 요청과 데이터 모델도 별도 모듈로 관리했습니다."
          />
          <div className={styles.architectureGrid}>
            <div className={styles.architectureCard}>
              <h3>MobX Store Structure</h3>
              <div className={styles.rootNode}>RootStore</div>
              <div className={styles.storeConnector} aria-hidden="true" />
              <div className={styles.storeGrid}>
                <span>AuthStore</span>
                <span>UserStore</span>
                <span>CloudStore</span>
                <span>ModalStore</span>
              </div>
              <div className={styles.subStore}>
                <span>CloudStore 내부</span>
                <div>
                  <b>MainPageStore</b>
                  <b>TrashPageStore</b>
                </div>
              </div>
              <p>
                인증·사용자·클라우드·모달의 책임을 분리하고, 메인 화면과 휴지통의
                목록·선택·로딩 상태를 각각 관리했습니다.
              </p>
            </div>
            <div className={styles.architectureCard}>
              <h3>Component Structure</h3>
              <div className={styles.componentLayers}>
                <div><strong>Pages</strong><span>라우팅과 화면 흐름</span></div>
                <div><strong>Layouts</strong><span>공통 화면 레이아웃</span></div>
                <div><strong>Templates</strong><span>서비스 기능별 UI</span></div>
                <div><strong>Modules</strong><span>복합 인터랙션</span></div>
                <div><strong>Elements</strong><span>기본 UI 요소</span></div>
              </div>
              <p>
                공통 스타일 토큰과 Storybook을 활용하고, 페이지에서 필요한
                컴포넌트를 조합하는 방식을 사용했습니다.
              </p>
            </div>
          </div>
          <div className={styles.architectureNote}>
            <strong>설계 포인트</strong>
            <p>
              API의 성공·실패 응답 타입을 구분하고, FileDataModel과 UploadResModel 등
              TypeScript 모델을 공통 사용하여 상태·화면·서버 응답의 연결 기준을 마련했습니다.
            </p>
          </div>
        </section>

        <section id="review" className={styles.section}>
          <SectionTitle
            number="05"
            eyebrow="REVIEW & NEXT STEPS"
            title="구현 경험을 다음 설계의 기준으로"
            description="아래 항목은 개발이 완료된 개선 성과가 아니라, 현재 소스를 다시 검토하며 도출한 리팩터링 과제입니다."
          />
          <div className={styles.reviewGrid}>
            {improvements.map((item, index) => (
              <article key={item.title}>
                <span>IMPROVEMENT 0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className={styles.closingStatement}>
            <p>PROJECT TAKEAWAY</p>
            <h2>
              복잡한 비동기 흐름을 사용자가 이해할 수 있는 인터페이스로 만드는 것.
              <br />
              그것이 이 프로젝트에서 집중한 프론트엔드의 역할입니다.
            </h2>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <span>PROJECT / STOCKFOLIO CLOUD</span>
            <strong>Thank you for reading.</strong>
          </div>
          <a href="/">← 포트폴리오로 돌아가기</a>
        </div>
      </footer>
    </main>
  );
}
