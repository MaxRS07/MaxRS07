import styles from './AboutSection.module.css';
import { Coursework } from '@/types/ResumeData';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>About</span>
          <h2 className={styles.title}>I like understanding how things work all the way down.</h2>
          <p className={styles.text}>
            I&apos;m a computer science student at Northeastern&apos;s Khoury College, concentrating in
            artificial intelligence. I spent my first year at the Oakland, CA campus, where I built
            back-end infrastructure for an Oak Ridge National Laboratory research team, and spent this
            past summer in Hong Kong designing fintech products at Hyperlayer.
          </p>
          <p className={styles.text}>
            Outside of class I&apos;m usually building something: right now that&apos;s a RISC-V operating
            system in Rust, before that agentic testing tools, hackathon projects, and desktop apps.
            I&apos;m looking for a <strong>January – June 2027 co-op</strong> in software, systems, or AI engineering.
          </p>
        </div>

        <aside className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon} aria-hidden="true">🎓</span>
            <div>
              <h3 className={styles.cardTitle}>Northeastern University</h3>
              <p className={styles.cardSub}>Khoury College of Computer Sciences</p>
            </div>
          </div>
          <dl className={styles.cardList}>
            <div><dt>Degree</dt><dd>B.S. Computer Science</dd></div>
            <div><dt>Concentration</dt><dd>Artificial Intelligence</dd></div>
            <div><dt>Graduation</dt><dd>Expected April 2029</dd></div>
          </dl>
          <p className={styles.courseLabel}>Coursework</p>
          <ul className={styles.courses}>
            {Coursework.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
