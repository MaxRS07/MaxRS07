import MediaSlider from './MediaSlider';
import styles from './ProjectsSection.module.css';
import { DisplayProject, DisplayProjects, FeaturedProject, OtherProjects } from '@/types/ProjectData';
import { Icon } from '@/types/Icons';
import { ProjectTags } from '@/types/ProjectTags';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Projects</span>
        <h2 className={styles.title}>Things I&apos;ve built</h2>

        <FeaturedCard project={FeaturedProject} />

        <div className={styles.grid}>
          {DisplayProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <h3 className={styles.moreTitle}>More from GitHub</h3>
        <div className={styles.moreGrid}>
          {OtherProjects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={styles.moreCard}>
              <div className={styles.moreHeader}>
                <span className={styles.moreName}>{p.name}</span>
                <span className={styles.moreArrow} aria-hidden="true">↗</span>
              </div>
              <p className={styles.moreDesc}>{p.desc}</p>
              <span className={styles.moreLang}>{p.lang}</span>
            </a>
          ))}
        </div>

        <a href="https://github.com/MaxRS07?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.allLink}>
          All repositories on GitHub
        </a>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: DisplayProject }) {
  return (
    <article className={styles.featured}>
      <div className={styles.featuredText}>
        <div className={styles.featuredLabel}>
          <span className={styles.star} aria-hidden="true">★</span> Featured · {project.date}
        </div>
        <h3 className={styles.featuredTitle}>{project.name}</h3>
        <p className={styles.projectDescription}>{project.desc}</p>
        <TagRow tags={project.tags} />
        <ProjectLinks project={project} />
      </div>

      <div className={styles.featuredTerm} aria-label="Max OS highlights">
        <div className={styles.termBar}>
          <span /><span /><span />
          <code>qemu-system-riscv64</code>
        </div>
        <ul className={styles.termBody}>
          {project.highlights?.map((h) => (
            <li key={h}><span className={styles.termOk}>[ ok ]</span> {h}</li>
          ))}
          <li className={styles.termCursor}><span className={styles.termPrompt}>max_os $</span> <span className={styles.caret} /></li>
        </ul>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: DisplayProject }) {
  return (
    <article className={styles.projectCard}>
      {project.media && (
        <div className={styles.projectMedia}>
          <MediaSlider media={project.media} />
        </div>
      )}
      <div className={styles.projectBody}>
        <div className={styles.projectMeta}>
          {project.date && <span>{project.date}</span>}
          {project.date && project.context && <span aria-hidden="true">·</span>}
          {project.context && <span className={styles.context}>{project.context}</span>}
        </div>
        <h3 className={styles.projectTitle}>{project.name}</h3>
        <p className={styles.projectDescription}>{project.desc}</p>
        <TagRow tags={project.tags} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function TagRow({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className={styles.projectTags}>
      {tags.map((tag) => {
        const tagStyle = ProjectTags[tag];
        return (
          <span key={tag} className={`${tagStyle?.className || ""} px-2 py-0.5 rounded-full`}>
            {tagStyle?.name || tag}
          </span>
        );
      })}
    </div>
  );
}

function ProjectLinks({ project }: { project: DisplayProject }) {
  const repo = project.github ?? project.gitlab;
  return (
    <div className={styles.projectFooter}>
      <div className={styles.techTags}>
        {project.icons.map((icon) => (
          <ProjectIconTag key={icon.name} icon={icon} />
        ))}
      </div>
      <div className={styles.links}>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            Live ↗
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            <img
              src={"https://cdn.simpleicons.org/" + (project.github ? 'github' : 'gitlab')}
              alt=""
              width={14}
              height={14}
              className={project.github ? styles.monoIcon : undefined}
            />
            Code
          </a>
        )}
      </div>
    </div>
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
