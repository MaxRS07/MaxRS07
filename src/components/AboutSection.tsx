import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.text} style={{ textAlign: "center" }}>
          I’m a computer science student at Northeastern University, concentrating in AI/ML development, currently spending my first year at the Oakland, CA campus. In my free time, I enjoy building small side projects, including web and iOS apps, game mods, and experimenting with model fine-tuning on Kaggle (see below!). Feel free to check out my repositories and reach out for questions!
        </p>
      </div>
    </section>
  );
}
