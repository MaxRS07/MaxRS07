import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to My Portfolio</h1>
      </div>
    </section>
  );
}
