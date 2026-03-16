'use client';

import styles from './ContactSection.module.css';
import Image from 'next/image';
import linkedinIcon from '../../public/linkedin.png';
import Me from '../../public/me.jpeg';
import { sendMessage } from '@/lib/mail';

const socials = [
  { name: 'GitHub', url: 'https://github.com/MaxRS07', icon: 'https://cdn.simpleicons.org/github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/maxsiebengartner', img: linkedinIcon },
  { name: 'Instagram', url: 'https://instagram.com/maxsiebengartner', icon: 'https://cdn.simpleicons.org/instagram' },
];

export default function ContactSection() {
  const handleSendMessage = async () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;
    if (await sendMessage(name, email, message)) {
      (document.getElementById("name") as HTMLInputElement).value = '';
      (document.getElementById("email") as HTMLInputElement).value = '';
      (document.getElementById("message") as HTMLTextAreaElement).value = '';
    }
  }
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>Have a project in mind or just want to say hi?</p>

        <div className={styles.layout}>
          {/* Left: portrait + social icons */}
          <div className={styles.left}>
            <div className={styles.portrait}>
              <Image src={Me} alt="Max Siebengartner" fill className={styles.portraitImg} />
            </div>

            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  className={styles.socialLink} aria-label={s.name}>
                  {s.icon
                    ? <img src={s.icon} alt={s.name} width={20} height={20} />
                    : s.img && <Image src={s.img} alt={s.name} width={20} height={20} />
                  }
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.right}>
            <div className={styles.formCard}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="your@email.com" className={styles.input} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea id="message" placeholder="What's on your mind?" rows={6} className={styles.textarea} />
              </div>
              <div className={styles.formFooter}>
                <span className={styles.formNote}>I'll get back to you within a day or two.</span>
                <button type="button" className={styles.submitBtn} onClick={handleSendMessage}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
