import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects.data'
import type { Project } from '../../models/project.model'
import s from './Proyectos.module.sass'

export function Proyectos() {
  const navigate = useNavigate()

  function abrirProyecto(project: Project) {
    if (project.id === 1) return
    navigate('/proyecto-no-disponible')
  }

  return (
    <section id="proyectos" className={s['proyectos-section']}>
      <div className={s.container}>
        <div className={s['section-header']}>
          <h2 className={s['section-title']}>Mis Proyectos</h2>
          <p className={s['section-subtitle']}>Explora mi trabajo y las tecnologías que he utilizado</p>
        </div>

        <div className={s['projects-grid']}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={s['project-card']}
              onClick={() => abrirProyecto(project)}
            >
              <div className={s['project-icon']}>
                <img src={project.icon} alt={project.name} />
              </div>
              <div className={s['project-info']}>
                <h3 className={s['project-title']}>{project.name}</h3>
                <p className={s['project-description']}>{project.description}</p>
                <div className={s['project-tech']}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={s['tech-tag']}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={s['project-overlay']}>
                <span className={s['ver-proyecto']}>
                  {project.id === 1 ? 'Este proyecto' : 'Ver Proyecto'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
