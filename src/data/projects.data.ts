import type { Project } from '../models/project.model'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Portfolio Personal',
    description:
      'Portfolio de trayectoria profesional completa, abarcando experiencia laboral y proyectos personales.',
    technologies: ['React', 'Vite', 'SASS', 'TypeScript'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Agustincolombo',
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description:
      'Plataforma de comercio electrónico con gestión de productos, usuarios y pagos integrados.',
    technologies: ['C#', '.NET', 'SQL Server', 'Azure'],
    repoUrl: 'https://github.com/Agustincolombo',
  },
  {
    id: 3,
    name: 'Task Manager App',
    description:
      'Aplicación de gestión de tareas con interfaz intuitiva y sincronización en tiempo real.',
    technologies: ['React', 'TypeScript', 'Firebase'],
    repoUrl: 'https://github.com/Agustincolombo',
  },
  {
    id: 4,
    name: 'Weather Dashboard',
    description:
      'Dashboard meteorológico con datos en tiempo real y visualización de pronósticos por región.',
    technologies: ['Vue.js', 'Chart.js', 'REST API'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Agustincolombo',
  },
]
