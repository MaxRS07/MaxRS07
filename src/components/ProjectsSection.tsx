import MediaSlider from './MediaSlider';
import styles from './ProjectsSection.module.css';
import { DisplayProjects } from '@/types/ProjectData';
import { Icon } from '@/types/Icons';
import Image from 'next/image';
import openIcon from '../../public/open.svg';

export default function ProjectsSection() {

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Timeline</h2>
        <p className={styles.subtitle}>A look at what I've built</p>
        <div className={styles.timelineContainer}>
          {DisplayProjects.map((project, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineDot} aria-hidden="true" />

              <div className={styles.projectCard}>
                <div className={styles.projectContent}>
                  <div className={styles.projectTopSection}>
                    <div className={styles.projectTextContent}>
                      <div className={styles.projectHeader}>
                        <h3 className={styles.projectTitle}>{project.name}</h3>
                        {project.url &&
                          <a href={project.url} target='_blank'>
                            <Image src={openIcon} alt='' />
                          </a>
                        }
                      </div>
                      <p className={styles.projectDescription}>{project.desc}</p>
                    </div>
                    {project.media &&
                      <div className={styles.projectMedia}>
                        <MediaSlider media={project.media} />
                      </div>
                    }
                  </div>
                  <div className={styles.projectFooter}>
                    <a
                      href={project.github ?? project.gitlab ?? 'https://github.com/MaxRS07'}
                      className={styles.githubLink}
                      target='_blank'
                      rel={project.github ? 'noopener noreferrer' : undefined}
                      aria-label={project.github ? 'View on GitHub' : 'View on GitLab'}
                    >
                      <img
                        src={"https://cdn.simpleicons.org/" + (project.github ? 'github' : 'gitlab')}
                        alt={project.github ? 'GitHub' : 'GitLab'}
                        width={16}
                        height={16}
                      />
                    </a>

                    <span className={styles.divider} aria-hidden="true" />

                    <div className={styles.techTags}>
                      {project.tags.map((tag, i) => (
                        <ProjectIconTag key={i} icon={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectIconTag({ icon }: { icon: Icon }) {
  return (
    <img
      className={styles.techTag}
      src={icon.imgUrl.toString()}
      alt={icon.name}
      title={icon.name}
      loading="lazy"
      width={28}
      height={28}
    />
  );
}
