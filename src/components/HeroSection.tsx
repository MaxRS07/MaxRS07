import Image from 'next/image';
import styles from './HeroSection.module.css';
import Me from '../../public/me.jpeg';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            <span className={styles.pulse} aria-hidden="true" />
            Open to co-op · Jan – Jun 2027
          </span>

          <h1 className={styles.heroTitle}>
            Hi, I&apos;m <span>Max Siebengartner</span>.
          </h1>

          <p className={styles.heroSubtitle}>
            CS student at Northeastern with an AI concentration. I enjoy coding autonomous AI agents, desktop
            automation tools, and full-stack web apps, but I have been experimenting with embedded software and low level systems.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>See my work</a>
            <a href={`${basePath}/resume.pdf`} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Resume
            </a>
            <a href="https://github.com/MaxRS07" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="GitHub">
              <img src="https://cdn.simpleicons.org/github" alt="" width={18} height={18} />
            </a>
            <a href="https://linkedin.com/in/maxsiebengartner" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>

          <dl className={styles.facts}>
            <div><dt>Based in</dt><dd>Boston, MA</dd></div>
            <div><dt>Studying</dt><dd>B.S. CS · &apos;29</dd></div>
            <div><dt>Shipping</dt><dd>Rust · TS · Python</dd></div>
          </dl>
        </div>

        <div className={styles.portraitWrap}>
          <div className={styles.portrait}>
            <Image src={Me} alt="Max Siebengartner" fill priority sizes="320px" className={styles.portraitImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
