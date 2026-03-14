import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to My Portfolio</h1>
        <p className={styles.heroSubtitle}>
          Building beautiful and functional web experiences
        </p>
      </div>
    </section>
  );
}
