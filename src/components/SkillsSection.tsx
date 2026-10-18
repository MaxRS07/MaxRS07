import styles from './SkillsSection.module.css';
import { SkillGroups } from '@/types/ResumeData';

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Skills</span>
        <h2 className={styles.title}>What I work with</h2>
        <div className={styles.skillsGrid}>
          {SkillGroups.map((group) => (
            <div key={group.title} className={styles.skillCard}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.chips}>
                {group.skills.map((skill) => (
                  <li key={skill.name} className={styles.chip}>
                    <img src={skill.imgUrl.toString()} alt="" width={16} height={16} loading="lazy" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
