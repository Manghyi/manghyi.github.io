import type { Metadata } from "next";
import Image from "next/image";
import pixtHome from "./assets/pixt-home.png";
import pixtDetail from "./assets/pixt-detail.png";
import pixtSearch from "./assets/pixt-search.png";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Pixt | Frontend Project",
  description:
    "Yarn Workspaces로 Web과 Auth 서비스를 구성하고 공통 Design System을 적용한 Pixt 영상 콘텐츠 플랫폼 프론트엔드 개발 사례.",
};

const stack = [
  "Next.js 13",
  "React 18",
  "TypeScript 5",
  "Yarn Workspaces",
  "Emotion",
  "MobX",
  "Storybook 7",
  "react-window",
];

const highlights = [
  { number: "02", title: "Service Workspaces", caption: "Web · Auth / 독립 서비스 구조" },
  { number: "02", title: "Design System copies", caption: "각 Workspace 내부의 공통 UI 패키지" },
  { number: "03", title: "Key Engineering Topics", caption: "아키텍처 · 검색 · 상태 연결" },
];

const beforeStack = [
  "Next.js + React 17",
  "styled-components",
  "Atoms / Molecules / Organisms / Templates",
  "서비스 내부의 UI 컴포넌트",
];

const afterStack = [
  "Next.js 13 + React 18",
  "Yarn 3 Workspaces",
  "Emotion + Design System",
  "서비스 로직과 공통 UI 패키지 분리",
];

const responsibilities = [
  {
    number: "01",
    title: "Web",
    role: "Content experience",
    content: "영상 검색·상세보기·작가 페이지·장바구니와 구매 옵션을 담당하는 메인 서비스입니다.",
    tags: ["Search", "Content Detail", "Cart", "Responsive"],
  },
  {
    number: "02",
    title: "Auth",
    role: "Account & creator experience",
    content: "로그인·회원가입·계정 관리·구독 및 결제 화면·콘텐츠 등록과 정산 관련 흐름을 담당합니다.",
    tags: ["Login", "Subscription", "Upload", "Account"],
  },
  {
    number: "03",
    title: "Design System",
    role: "Reusable UI foundation",
    content: "의미 기반 색상과 타이포그래피, Button·Input·Dialog·Chip 등의 공통 컴포넌트를 제공합니다.",
    tags: ["Semantic Tokens", "Variants", "Theme", "Storybook"],
  },
];

const dsComponents = [
  { kind: "BUTTON / VARIANT", title: "BoxButton", body: "Primary, Positive, Negative, Line, Ghost와 크기별 Props를 타입으로 제한" },
  { kind: "INPUT / CONTROL", title: "Form Controls", body: "Input, Radio, CheckBox, Switch 등의 상태와 스타일을 공통 규칙으로 구성" },
  { kind: "OVERLAY / FEEDBACK", title: "Modal & Dialog", body: "서비스에서 반복되는 확인·안내 UI를 공통 컴포넌트로 분리" },
];

const searchSteps = [
  { num: "01", name: "Search API", detail: "검색어·필터와 커서를 전달하고 콘텐츠 목록 요청" },
  { num: "02", name: "Responsive Grid", detail: "AutoSizer의 너비를 기준으로 1~4열 구성" },
  { num: "03", name: "Virtual Rendering", detail: "VariableSizeGrid로 화면에 필요한 셀 중심 렌더링" },
  { num: "04", name: "Load Next Page", detail: "overscanRowStopIndex로 하단 접근을 감지해 다음 커서 요청" },
];

const featureCards = [
  {
    index: "01",
    title: "로그인 전후 장바구니 동기화",
    content: "비로그인 사용자는 localStorage에 장바구니를 보관하고, 로그인 이후 서버 장바구니로 병합한 다음 목록을 다시 동기화하도록 구성했습니다.",
    tags: ["MobX", "localStorage", "API Sync"],
  },
  {
    index: "02",
    title: "영상 구매 옵션 UI",
    content: "콘텐츠 상세 페이지에서 라이선스·해상도 선택과 장바구니 담기를 연결하고, 화면 크기에 따라 구매 패널의 표시 방식을 구분했습니다.",
    tags: ["Responsive", "Purchase Options", "Design System"],
  },
  {
    index: "03",
    title: "계정·구독 플로우",
    content: "별도 Auth 서비스에서 회원 인증, 구독 플랜 정보, 청구서 조회, 결제 수단 선택과 구독 요청에 필요한 프론트엔드 흐름을 구성했습니다.",
    tags: ["Authentication", "Subscription", "Axios"],
  },
  {
    index: "04",
    title: "콘텐츠 공급자 관리",
    content: "파일 업로드·상태 확인·메타데이터 수정·검수 요청과 수익·정산 관련 화면을 Auth 서비스 내 기능으로 구성했습니다.",
    tags: ["Upload", "Metadata", "Creator Flow"],
  },
];

const reviewNotes = [
  {
    category: "01 / PACKAGE BOUNDARY",
    title: "공통 코드의 버전 동기화",
    detail: "Web과 Auth Workspace에 Design System 소스가 각각 존재합니다. 현재 공유하는 UI 구현은 대부분 같지만, 장기적으로는 변경 사항의 동기화와 패키지 버전 전략이 중요합니다.",
  },
  {
    category: "02 / SEARCH STATE",
    title: "연속 페이지 요청 제어",
    detail: "검색 목록의 끝을 감지해 다음 페이지를 불러올 때, 로딩 중복 요청 방지와 더 이상 조회할 데이터가 없는 상황을 명시적으로 처리하면 안정성을 높일 수 있습니다.",
  },
  {
    category: "03 / CROSS-SERVICE AUTH",
    title: "서비스 간 인증 전달 보강",
    detail: "Bridge에서 URL 파라미터를 파싱하고 인증 상태를 갱신합니다. 토큰 노출 가능성과 잘못된 경로·파라미터에 대한 예외 처리는 추가 검토가 필요한 부분입니다.",
  },
];

const infiniteCode = `const columnCount = width >= 1680 ? 4
  : width >= 1024 ? 3
  : width >= 429 ? 2 : 1;

const rowCount = Math.ceil(list.length / columnCount);

<Grid
  columnCount={columnCount}
  rowCount={rowCount}
  onItemsRendered={({ overscanRowStopIndex }) =>
    onRenderNext?.(overscanRowStopIndex, rowCount)
  }
/>`;

function SectionTitle({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.sectionIndex}>
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className={styles.tags}>
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

/** 회사 홍보 자료로 공개된 과거 Pixt 홈 화면. Workspace 전환 후 캡처로 해석하지 않습니다. */
function HeroScreenshot() {
  return (
    <figure className={styles.heroScreenshot}>
      <div className={styles.heroScreenshotFrame}>
        <div className={styles.heroScreenshotBar}>
          <span className={styles.heroScreenshotDots} aria-hidden="true"><i /><i /><i /></span>
          <span>PIXT / ORIGINAL SERVICE UI</span>
          <span aria-hidden="true">↗</span>
        </div>
        <Image
          src={pixtHome}
          alt="Pixt 메인 홈 화면. 도시 배경의 메인 배너 아래로 한국 영상 콘텐츠 썸네일이 그리드로 나열된 화면"
          priority
          sizes="(max-width: 920px) 100vw, 55vw"
          className={styles.heroScreenshotImage}
          unoptimized
        />
      </div>
      <figcaption>회사 공식 홍보 자료 · 당시 Pixt 메인 화면</figcaption>
    </figure>
  );
}

const actualServiceScreens = [
  {
    id: "01",
    image: pixtHome,
    label: "HOME",
    title: "메인 홈 화면",
    description: "검색 진입점과 영상 추천 영역, 카테고리별 콘텐츠를 탐색할 수 있는 서비스 첫 화면입니다.",
    alt: "Pixt 홈 화면의 도시 배너와 여러 개의 영상 썸네일 그리드",
  },
  {
    id: "02",
    image: pixtDetail,
    label: "CONTENT DETAIL",
    title: "영상 상세 페이지",
    description: "영상 미리보기와 길이·해상도·프레임레이트 등 메타데이터, 연관 영상 추천 영역을 보여줍니다.",
    alt: "파란 공중전화기의 영상 미리보기, 영상 정보 패널, 연관 영상 추천 목록이 있는 Pixt 상세 페이지",
  },
  {
    id: "03",
    image: pixtSearch,
    label: "SEARCH RESULTS",
    title: "검색 결과 페이지",
    description: "‘방송’ 검색 결과를 다열 영상 썸네일 목록으로 표시하는 탐색 화면입니다.",
    alt: "방송 키워드 검색 결과를 여러 열의 영상 썸네일로 보여주는 Pixt 검색 화면",
  },
];

function ServiceScreens() {
  return (
    <div className={styles.screenshotGrid}>
      {actualServiceScreens.map((screen) => (
        <figure className={styles.screenshotCard} key={screen.id}>
          <div className={styles.screenshotImageShell}>
            <Image
              src={screen.image}
              alt={screen.alt}
              sizes="(max-width: 680px) 100vw, (max-width: 1024px) 92vw, 62vw"
              className={styles.screenshotImage}
              unoptimized
            />
          </div>
          <figcaption className={styles.screenshotCaption}>
            <div className={styles.screenshotCaptionMeta}><span>{screen.id} / {screen.label}</span><strong>{screen.title}</strong></div>
            <p>{screen.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className={styles.archDiagram}>
      <div className={styles.archHeading}><span>PIX T PLATFORM</span><span>Two service workspaces</span></div>
      <div className={styles.archColumns}>
        <div className={styles.archWorkspace}>
          <div className={styles.archWorkspaceTitle}><span className={styles.archBullet} /> WEB WORKSPACE</div>
          <div className={styles.archApp}><strong>web</strong><span>검색 · 영상 상세 · 장바구니</span><small>Next.js 13 / MobX</small></div>
          <div className={styles.archVertical} />
          <div className={styles.archDs}><b>design-system</b><span>Emotion · BaseTheme · UI</span></div>
        </div>
        <div className={styles.archWorkspace}>
          <div className={styles.archWorkspaceTitle}><span className={styles.archBullet} /> AUTH WORKSPACE</div>
          <div className={styles.archApp}><strong>auth</strong><span>로그인 · 구독 · 공급자 관리</span><small>Next.js 13 / MobX</small></div>
          <div className={styles.archVertical} />
          <div className={styles.archDs}><b>design-system</b><span>Emotion · BaseTheme · UI</span></div>
        </div>
      </div>
      <div className={styles.archFootnote}>
        <span className={styles.connectionIcon}>↔</span>
        <p>독립된 두 Workspace에서 거의 동일한 Design System 소스를 각각 관리하고, 각 서비스가 해당 패키지를 참조합니다.</p>
      </div>
    </div>
  );
}

export default function PixtProjectPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="pixt-title">
        <div className={styles.heroGlowA} aria-hidden="true" />
        <div className={styles.heroGlowB} aria-hidden="true" />
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Portfolio</a><span>/</span><span>Projects</span><span>/</span><strong>Pixt</strong>
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.heroKicker}><span /> FRONTEND PROJECT / VIDEO PLATFORM</div>
              <h1 id="pixt-title">Pixt<span className={styles.titleDot}>.</span></h1>
              <p className={styles.heroStatement}>서비스의 경험은 연결하고,<br /><em>구현의 책임은 분리하다.</em></p>
              <p className={styles.heroDescription}>
                영상 콘텐츠를 탐색하고 구매하는 Web, 사용자·구독·콘텐츠 공급자를 담당하는 Auth,
                그리고 두 서비스의 UI 경험을 일관되게 만드는 Design System.
                Workspace 전환과 실제 서비스 기능 구현 과정을 정리했습니다.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#architecture">아키텍처 살펴보기 <span aria-hidden="true">↗</span></a>
                <a className={styles.secondaryAction} href="#engineering">핵심 구현 ↓</a>
              </div>
              <TagList items={stack} />
            </div>
            <HeroScreenshot />
          </div>
        </div>
      </section>

      <div className={styles.quickNav} aria-label="Section navigation">
        <div className={styles.container}>
          <a href="#overview">Overview</a>
          <a href="#screens">Screens</a>
          <a href="#evolution">Before & After</a>
          <a href="#architecture">Architecture</a>
          <a href="#design-system">Design System</a>
          <a href="#engineering">Engineering</a>
          <a href="#experience">Experience</a>
          <a href="#review">Review</a>
        </div>
      </div>

      <section className={`${styles.section} ${styles.overviewSection}`} id="overview">
        <div className={styles.container}>
          <SectionTitle index="01" label="PROJECT OVERVIEW" title="하나의 플랫폼, 서로 다른 역할" description="공통 UI는 재사용하고, 서비스별 비즈니스 로직은 각 프로젝트의 맥락에 맞게 구성했습니다." />
          <div className={styles.overviewGrid}>
            <div className={styles.overviewIntro}>
              <p className={styles.overviewQuote}>“복잡한 서비스일수록<br />공통 요소와 고유한 역할을<br /><span>명확히 구분해야 한다.</span>”</p>
              <p className={styles.overviewNarrative}>Pixt는 영상 콘텐츠를 찾고 구매하는 사용자와 콘텐츠를 공급·관리하는 사용자가 만나는 플랫폼입니다. 프로젝트가 확장되면서 기존 Web 코드베이스에서 공통 UI를 분리하고, Web과 Auth 서비스를 별도 Workspace로 구성한 변경을 살펴볼 수 있습니다.</p>
            </div>
            <div className={styles.overviewFacts}>
              <div><span>PROJECT</span><strong>Pixt — Video Content Platform</strong></div>
              <div><span>FOCUS</span><strong>Workspace / Design System / Service UX</strong></div>
              <div><span>SERVICES</span><strong>Web · Auth</strong></div>
              <div><span>FRONTEND</span><strong>Next.js · React · TypeScript · MobX</strong></div>
              <div><span>WORK SCOPE</span><strong>코드로 확인된 프론트엔드 구현 중심</strong></div>
            </div>
          </div>
          <div className={styles.highlightStrip}>
            {highlights.map((item) => (
              <div key={item.title} className={styles.highlightItem}>
                <div className={styles.highlightNumber}>{item.number}</div>
                <strong>{item.title}</strong>
                <span>{item.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.screenshotSection}`} id="screens" aria-label="실제 서비스 화면">
        <div className={styles.container}>
          <SectionTitle
            index="02"
            label="ACTUAL SERVICE SCREENS"
            title="실제 화면으로 보는 Pixt"
            description="회사 공식 홍보 자료의 화면 세 장을 홈·상세·검색 순서로 배치했습니다. 당시 공개된 서비스 화면으로, 이후 Workspace 전환 버전과 동일하다고 단정하지 않습니다."
          />
          <ServiceScreens />
          <p className={styles.screenshotSource}>
            이미지 출처: <a href="https://m.blog.naver.com/stockfolio/222858633223" target="_blank" rel="noopener noreferrer">스톡폴리오 공식 네이버 블로그 <span aria-hidden="true">↗</span></a>
            <span> · 화면 이미지는 코드 분석을 위한 참고 자료이며 개발 과정 및 성능 수치의 증거로 사용하지 않습니다.</span>
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.evolutionSection}`} id="evolution">
        <div className={styles.container}>
          <SectionTitle index="03" label="ARCHITECTURAL EVOLUTION" title="Web 단일 구조에서 Workspace로" description="변경 전후 소스에 확인되는 기술과 컴포넌트 구성을 비교했습니다. 이전 코드의 기능을 모두 이전했다고 단정하지 않습니다." />
          <div className={styles.evolutionGrid}>
            <article className={styles.evolutionCard}>
              <div className={styles.evolutionTop}><span>BEFORE</span><span>Legacy Web</span></div>
              <div className={styles.beforeIllust} aria-hidden="true"><span>WEB</span><div><i>Page</i><i>UI</i><i>State</i><i>API</i></div></div>
              <h3>서비스 안에 함께 있던 UI</h3>
              <p>Atoms·Molecules·Organisms·Templates로 구성된 컴포넌트와 서비스 로직이 Web 프로젝트 내부에서 관리됐습니다.</p>
              <ul>{beforeStack.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <div className={styles.transitionArrow} aria-hidden="true"><span>→</span><small>WORKSPACE<br />TRANSITION</small></div>
            <article className={`${styles.evolutionCard} ${styles.evolutionAfter}`}>
              <div className={styles.evolutionTop}><span>AFTER</span><span>Separated Workspaces</span></div>
              <div className={styles.afterIllust} aria-hidden="true"><div>WEB</div><span>+</span><div>DESIGN SYSTEM</div></div>
              <h3>공통 UI와 서비스 기능 분리</h3>
              <p>Web과 Auth가 각각의 Workspace에서 Design System을 의존성으로 참조하고, 서비스별 로직을 독립적으로 구성했습니다.</p>
              <ul>{afterStack.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <div className={styles.evolutionNote}><b>설계의 핵심</b><p>기존 컴포넌트를 단순히 폴더 이동한 것이 아니라, 공통 디자인 토큰과 재사용 UI를 별도 패키지로 관리하고 Web·Auth 양쪽에서 활용하는 구조입니다.</p></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.architectureSection}`} id="architecture">
        <div className={styles.container}>
          <SectionTitle index="04" label="SERVICE ARCHITECTURE" title="두 개의 Workspace, 일관된 UI" description="메인 Web과 Auth는 별도 프로젝트이고, 각 Workspace 안에서 Design System 패키지를 참조합니다." />
          <ArchitectureDiagram />
          <div className={styles.responsibilityGrid}>
            {responsibilities.map((item) => (
              <article className={styles.responsibilityCard} key={item.title}>
                <span className={styles.responsibilityNo}>{item.number} / {item.role}</span>
                <h3>{item.title}</h3><p>{item.content}</p>
                <TagList items={item.tags} />
              </article>
            ))}
          </div>
          <div className={styles.sourceNote}>두 Design System 압축본을 파일 내용으로 비교한 결과, 531개 파일 가운데 529개가 동일했습니다. 이는 동일한 소스 기반을 의미하며, 중앙 패키지 자동 동기화까지 의미하지는 않습니다.</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dsSection}`} id="design-system">
        <div className={styles.container}>
          <SectionTitle index="05" label="REUSABLE DESIGN SYSTEM" title="반복되는 UI를 하나의 규칙으로" description="Primitive Palette와 Semantic Palette를 분리하고, 공통 Theme와 컴포넌트 Props를 통해 UI 상태를 일관되게 표현했습니다." />
          <div className={styles.tokensGrid}>
            <div className={styles.tokenPalette}>
              <div className={styles.tokenEyebrow}>01 / COLOR SYSTEM</div>
              <h3>의미 기반 디자인 토큰</h3>
              <p>색상 자체가 아니라 ‘텍스트’, ‘배경’, ‘활성’, ‘오류’ 등 사용 목적을 중심으로 토큰을 정의합니다.</p>
              <div className={styles.colorChips}><span /><span /><span /><span /><span /><span /></div>
              <div className={styles.tokenMappings}>
                <div><span>Primitive</span><strong>Purple · Blue · Red · Gray</strong></div>
                <div><span>Semantic</span><strong>Text · Fill · Line · Icon</strong></div>
                <div><span>Theme</span><strong>Light / Dark</strong></div>
              </div>
            </div>
            <div className={styles.tokenPreview}>
              <div className={styles.previewTop}><span>02 / COMPONENT SYSTEM</span><strong>Variants & States</strong></div>
              <div className={styles.previewButtons}><span>Primary Button</span><span>Line Button</span><span>Disabled</span></div>
              <div className={styles.previewInput}><span>Search content</span><i>⌕</i></div>
              <div className={styles.previewChips}><span>All</span><span>Video</span><span>Image</span><span>Motion</span></div>
              <div className={styles.previewType}><strong>Typography scale</strong><span>Display / Title / Label / Paragraph</span></div>
              <p className={styles.mockNotice}>컴포넌트 구성 방식의 개념 표현입니다.</p>
            </div>
          </div>
          <div className={styles.dsGrid}>
            {dsComponents.map((item) => (
              <article key={item.title}>
                <span>{item.kind}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className={styles.dsNote}><strong>실제 적용 근거</strong><span>Web과 Auth의 <code>_app.tsx</code>가 Design System의 <code>BaseTheme</code>을 사용하고, 화면 컴포넌트들이 <code>design-system/src/...</code> 경로로 공통 UI를 불러옵니다.</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.engineeringSection}`} id="engineering">
        <div className={styles.container}>
          <SectionTitle index="06" label="ENGINEERING / SEARCH" title="많은 영상도 가볍게 탐색하도록" description="전체 영상 카드 렌더링을 한 번에 수행하지 않도록 가상 그리드와 커서 기반 추가 요청을 조합했습니다." />
          <div className={styles.engineeringLead}>
            <div><span>CHALLENGE</span><h3>목록이 길어질수록 부담이 커지는 검색 화면</h3><p>영상 콘텐츠 검색은 썸네일 카드가 누적되는 인터페이스입니다. 화면 크기에 따라 배치가 달라지고, 사용자는 스크롤하면서 계속 새로운 콘텐츠를 탐색합니다.</p></div>
            <div><span>APPROACH</span><h3>렌더링 범위와 데이터 요청 시점을 분리</h3><p><code>AutoSizer</code>로 가용 너비를 측정하고, <code>VariableSizeGrid</code>로 셀을 구성합니다. 렌더링된 행 범위를 이용해 다음 커서 데이터를 요청합니다.</p></div>
          </div>
          <ol className={styles.searchSteps}>
            {searchSteps.map((step) => (
              <li key={step.num}><span>{step.num}</span><h3>{step.name}</h3><p>{step.detail}</p></li>
            ))}
          </ol>
          <div className={styles.codeAndInsight}>
            <div className={styles.codePanel}>
              <div className={styles.codeHeader}><span className={styles.codeDots}><i/><i/><i/></span><strong>InfiniteList / implementation excerpt</strong></div>
              <pre><code>{infiniteCode}</code></pre>
              <p>실제 핵심 처리 흐름을 읽기 쉽게 축약한 예시입니다.</p>
            </div>
            <div className={styles.insightPanel}>
              <span>IMPLEMENTATION POINTS</span>
              <h3>화면과 데이터의 경계를 명확하게</h3>
              <ul>
                <li>뷰포트에 맞춰 <b>1~4열</b>을 선택</li>
                <li>셀 크기를 기준으로 <b>행 개수 계산</b></li>
                <li>스크롤된 범위를 확인해 <b>추가 요청 조건 판단</b></li>
                <li>검색 결과의 <b>next 커서</b>를 이용해 목록 확장</li>
              </ul>
              <p>실제 렌더링 시간이나 메모리 사용량의 개선 수치는 측정 자료가 없어 기재하지 않았습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bridgeSection}`} id="bridge">
        <div className={styles.container}>
          <SectionTitle index="07" label="CROSS-SERVICE FLOW" title="서비스가 달라도 사용자 흐름은 이어지도록" description="Web과 Auth의 경계를 넘는 로그인 이동, 사용자 정보 재조회, 장바구니 동기화 흐름을 연결했습니다." />
          <div className={styles.bridgeFlow}>
            <div><span>01 / WEB</span><strong>로그인 필요</strong><small>영상 탐색 · 장바구니</small></div>
            <span className={styles.bridgeArrow} aria-hidden="true">→</span>
            <div><span>02 / AUTH</span><strong>로그인 처리</strong><small>별도 Auth 서비스</small></div>
            <span className={styles.bridgeArrow} aria-hidden="true">→</span>
            <div><span>03 / BRIDGE</span><strong>상태 복원</strong><small>토큰 · 유저 · 장바구니</small></div>
            <span className={styles.bridgeArrow} aria-hidden="true">→</span>
            <div><span>04 / WEB</span><strong>요청 화면 이동</strong><small>기존 사용자 흐름 복귀</small></div>
          </div>
          <div className={styles.bridgeDetails}>
            <div><span className={styles.miniAccent}>STATE MANAGEMENT</span><h3>로그인 전후 장바구니</h3><p>비로그인 장바구니는 브라우저에 저장하고, 로그인 후 <code>rebaseUserCartList()</code>로 서버에 반영한 다음 최신 목록을 조회합니다. 성공하면 기존 로컬 저장값을 제거합니다.</p></div>
            <div><span className={styles.miniAccent}>SERVICE INTEGRATION</span><h3>Web과 Auth 사이의 Bridge</h3><p>Web의 Bridge는 전달된 인증 정보를 반영하고 <code>setUser()</code>, <code>setCartList()</code>를 실행한 뒤 목적지로 이동합니다. Auth에도 Bridge 페이지가 있어 경로를 처리합니다.</p></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.experienceSection}`} id="experience">
        <div className={styles.container}>
          <SectionTitle index="08" label="SERVICE EXPERIENCE" title="공통 UI 위에 쌓은 서비스 경험" description="영상 소비자와 콘텐츠 공급자의 다른 업무 흐름을 각 서비스에 맞는 인터페이스로 구현했습니다." />
          <div className={styles.featureGrid}>
            {featureCards.map((item) => (
              <article key={item.index} className={styles.featureCard}>
                <span className={styles.featureIndex}>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <TagList items={item.tags}/>
              </article>
            ))}
          </div>
          <div className={styles.implementationCaveat}><strong>구현 범위 안내</strong><p>결제·구독 관련 화면과 API 연동은 확인되지만, 일부 카드 등록 모달 및 성공 페이지 연결은 제공된 소스에서 완성 여부를 확인할 수 없습니다. 백엔드 인증·결제 처리나 Docker 설정을 개인 구현 성과로 주장하지 않습니다.</p></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reviewSection}`} id="review">
        <div className={styles.container}>
          <SectionTitle index="09" label="ENGINEERING REVIEW" title="확장할수록 중요해지는 경계와 안정성" description="소스를 다시 검토하면서 확인한 개선 과제를 현재 구현과 구분하여 정리했습니다." />
          <div className={styles.reviewGrid}>
            {reviewNotes.map((item) => (
              <article key={item.title}><span>{item.category}</span><h3>{item.title}</h3><p>{item.detail}</p></article>
            ))}
          </div>
          <div className={styles.closing}>
            <span>PROJECT TAKEAWAY</span>
            <h2>일관된 UI는 함께 사용하고,<br />서로 다른 서비스의 문제는 각자의 구조 안에서 해결했습니다.</h2>
            <p>Pixt에서 확인되는 핵심은 단순히 페이지를 구현하는 것을 넘어, 공통 컴포넌트와 서비스 전용 기능을 구분하고 검색·인증·장바구니 같은 실제 사용 흐름을 연결한 경험입니다.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div><span>FRONTEND PROJECT</span><strong>Pixt — Video Content Platform</strong></div>
          <a href="/">← 포트폴리오로 돌아가기</a>
        </div>
      </footer>
    </main>
  );
}
