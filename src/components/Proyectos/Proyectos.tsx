import { projects } from '../../data/projects.data'
import s from './Proyectos.module.sass'

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function Proyectos() {
  return (
    <section id="proyectos" className={s['proyectos-section']}>
      <div className={s.container}>
        <div className={s['section-header']}>
          <p className={s.eyebrow}>Lo que construí</p>
          <h2 className={s['section-title']}>Proyectos</h2>
          <div className={s.divider} />
        </div>

        <div className={s['projects-grid']}>
          {projects.map((project) => (
            <div key={project.id} className={s['project-card']}>
              <div className={s['card-header']}>
                <h3 className={s['project-title']}>{project.name}</h3>
                <div className={s['card-links']}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s['card-link']}
                      aria-label={`Demo de ${project.name}`}
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s['card-link']}
                      aria-label={`Repositorio de ${project.name}`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                </div>
              </div>

              <p className={s['project-description']}>{project.description}</p>

              <div className={s['project-tech']}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={s['tech-tag']}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
