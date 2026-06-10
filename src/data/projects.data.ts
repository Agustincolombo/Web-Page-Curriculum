import type { Project } from '../models/project.model'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Portfolio Personal',
    description:
      'Portfolio de mi trayectoria profesional completa, abarcando tanto mi experiencia laboral como mis proyectos personales',
    icon: 'programmer_icon.svg',
    technologies: ['Angular', 'Antigravity', 'SASS', 'TypeScript'],
    url: '#',
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description:
      'Plataforma completa de comercio electrónico con gestión de productos, usuarios y pagos',
    icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
    url: 'https://github.com/tu-usuario/ecommerce',
  },
  {
    id: 3,
    name: 'Task Manager App',
    description:
      'Aplicación de gestión de tareas con interfaz intuitiva y funcionalidades avanzadas',
    icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827933.png',
    technologies: ['React', 'TypeScript', 'Firebase'],
    url: 'https://github.com/tu-usuario/task-manager',
  },
  {
    id: 4,
    name: 'Weather Dashboard',
    description:
      'Dashboard meteorológico con datos en tiempo real y gráficos interactivos',
    icon: 'https://cdn-icons-png.flaticon.com/512/3222/3222800.png',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    url: 'https://github.com/tu-usuario/weather-dashboard',
  },
]
