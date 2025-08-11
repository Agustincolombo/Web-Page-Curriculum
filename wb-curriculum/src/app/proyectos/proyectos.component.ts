import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  tecnologias: string[];
  url: string;
}

@Component({
  selector: 'proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.sass'
})
export class Proyectos {
  proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: "E-commerce Platform",
      descripcion: "Plataforma completa de comercio electrónico con gestión de productos, usuarios y pagos",
      icono: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
      tecnologias: ["Angular", "Node.js", "MongoDB", "Stripe"],
      url: "https://github.com/tu-usuario/ecommerce"
    },
    {
      id: 2,
      nombre: "Task Manager App",
      descripcion: "Aplicación de gestión de tareas con interfaz intuitiva y funcionalidades avanzadas",
      icono: "https://cdn-icons-png.flaticon.com/512/1827/1827933.png",
      tecnologias: ["React", "TypeScript", "Firebase"],
      url: "https://github.com/tu-usuario/task-manager"
    },
    {
      id: 3,
      nombre: "Weather Dashboard",
      descripcion: "Dashboard meteorológico con datos en tiempo real y gráficos interactivos",
      icono: "https://cdn-icons-png.flaticon.com/512/3222/3222800.png",
      tecnologias: ["Vue.js", "Chart.js", "OpenWeather API"],
      url: "https://github.com/tu-usuario/weather-dashboard"
    },
    {
      id: 4,
      nombre: "Portfolio Website",
      descripcion: "Sitio web personal con diseño moderno y responsive",
      icono: "https://cdn-icons-png.flaticon.com/512/1239/1239020.png",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "SASS"],
      url: "https://github.com/tu-usuario/portfolio"
    }
  ];

  abrirProyecto(proyecto: Proyecto): void {
    window.open(proyecto.url, '_blank');
  }
}
