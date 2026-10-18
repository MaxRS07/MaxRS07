import styles from './ExperienceSection.module.css';
import { Experiences } from '@/types/ResumeData';

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Experience</span>
        <h2 className={styles.title}>Where I&apos;ve worked</h2>

        <ol className={styles.timeline}>
          {Experiences.map((exp) => (
            <li key={exp.org + exp.role} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.dates}>{exp.dates}</span>
                <span className={styles.location}>{exp.location}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.role}>
                  {exp.role} <span className={styles.at}>@</span> <span className={styles.org}>{exp.org}</span>
                </h3>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
