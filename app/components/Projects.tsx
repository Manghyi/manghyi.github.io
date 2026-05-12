// components/Projects.js
import styles from '../styles/Home.module.css';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Pixt AI',
        description: "Pixt AI 는 AI를 활용해 사용자가 영상화 하고 싶은 대본을 작성하면 해당 대본 대로 영상을 만들어주고 편집할 수 있는 서비스 입니다.",
        image: '/images/pj_logo_300.png',
        detail: "/"
    },
    {
        title: 'Editfolio',
        description: "Editfolio 는 영상 편집 구독 서비스로 복잡하고 어려운 영상 제작을 영상 편집부터 유튜브 채널 관리까지 해주는 서비스입니다.",
        image: '/images/Editfolio.png',
        detail: "/"
    },
    {
        title: 'Stockfolio Cloud',
        description: '스톡 영상 Cloud 서비스 입니다. 스톡 영상 데이터를 저장할 수 있는 서비스 입니다. Cloud 서비스는 Pixt 스톡 영상 플렛폼 서비스와 연동하여 간편하게 등록할 수 있습니다.',
        image: '/images/Stockfolio.png',
        detail: "/"
    },
    {
        title: 'Pixt',
        description: '스톡 영상 플렛폼으로 영상 콘텐츠 제작에 필요한 영상 자료를 제공합니다. 모든 영상은 검수 후 등록 되며 저작권 걱정 없이 사용할 수 있는 영상을 제공합니다.',
        image: '/images/img_logo_236_black.svg',
        detail: "/"
    },
    {
        title: 'Omegabox',
        description: '영화관 브랜드 MegaBox clone 프로젝트입니다.',
        image: '/images/omegabox.png',
        detail: "/"
    },
    {
        title: 'TOMATO Study Planer',
        description: '학습 플래너 TOMATO 입니다. 오늘의 나의 학습 todo를 설정하고 확인할 수 있습니다.',
        image: '/images/img_logo_236_black.svg',
        detail: "/"
    },
    {
        title: 'BookFinder',
        description: '도서 Api 데이터를 받아와 도서 정보를 보여주는 웹 서비스입니다.',
        image: '/images/img_logo_236_black.svg',
        detail: "/"
    },
    {
        title: 'Ediya Clone',
        description: '커피 브랜드 Ediya Clone 프로젝트입니다.',
        image: '/images/ediya.jpg',
        detail: "/"
    },
    {
        title: 'Miso Clone',
        description: '가사 도우미, 이사, 청소 등 홈서비스를 제공하는 브랜드 Miso clone 프로젝트입니다.',
        image: '/images/miso.jpg',
        detail: "/"
    },
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div>
                <h3>Projects</h3>
                <div className={styles.projectsContainer}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;