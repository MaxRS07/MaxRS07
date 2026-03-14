import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.text}>
          I'm a passionate web developer with expertise in modern web technologies.
          I love creating elegant solutions to complex problems and building
          applications that make a difference.
        </p>
        <p className={styles.text}>
          With a strong foundation in React, TypeScript, and Next.js, I strive to
          deliver high-quality, performant, and user-friendly applications.
        </p>
      </div>
    </section>
  );
}
