import styles from "../styles/Home.module.css";

interface SkillType {
    name: string;
    icon: string;
    list: string[];
}

const skillsData: SkillType[] = [
    {
        name: "Laguages",
        icon: "/icons/laguage.png",
        list: ["Javascript", "Typescript"],
    },
    {
        name: "Fontend",
        icon: "/icons/frontend.png",
        list: [
            "Next.js/React", 
            "React-Query", 
            "React-Saga", 
            "Scss", 
            "styled-components", 
            "emotion css", 
            "Tailwind css", 
            "Chakra UI", 
            "antdsign",
            "Storybook", 
        ],
    }
]

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <h3>Skills</h3>
            <ul className={styles.skillsContainer}>
                {skillsData.map(skill => (
                    <li key={skill.name} className={styles.skillCategory}>
                        <div>
                            <p>
                                <img src={skill.icon} />
                            </p>
                            <p>{skill.name}</p>
                        </div>
                        <ul className={styles.skillItemList}>
                            {
                                skill.list.map(item => (
                                    <li key={item}>
                                        <p>{item}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;