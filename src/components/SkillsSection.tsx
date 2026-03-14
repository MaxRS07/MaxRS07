import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 80 },
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={"justify-center " + styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
