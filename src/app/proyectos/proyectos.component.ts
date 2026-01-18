import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  private router = inject(Router);

  proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: "Portfolio Personal",
      descripcion: "Portfolio de mi trayectoria profesional completa, abarcando tanto mi experiencia laboral como mis proyectos personales",
      icono: "programmer_icon.svg",
      tecnologias: ["Angular", "Antigravity", "SASS", "TypeScript"],
      url: "#"
    },
    {
      id: 2,
      nombre: "E-commerce Platform",
      descripcion: "Plataforma completa de comercio electrónico con gestión de productos, usuarios y pagos",
      icono: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
      tecnologias: ["Angular", "Node.js", "MongoDB", "Stripe"],
      url: "https://github.com/tu-usuario/ecommerce"
    },
    {
      id: 3,
      nombre: "Task Manager App",
      descripcion: "Aplicación de gestión de tareas con interfaz intuitiva y funcionalidades avanzadas",
      icono: "https://cdn-icons-png.flaticon.com/512/1827/1827933.png",
      tecnologias: ["React", "TypeScript", "Firebase"],
      url: "https://github.com/tu-usuario/task-manager"
    },
    {
      id: 4,
      nombre: "Weather Dashboard",
      descripcion: "Dashboard meteorológico con datos en tiempo real y gráficos interactivos",
      icono: "https://cdn-icons-png.flaticon.com/512/3222/3222800.png",
      tecnologias: ["Vue.js", "Chart.js", "OpenWeather API"],
      url: "https://github.com/tu-usuario/weather-dashboard"
    }
  ];

  abrirProyecto(proyecto: Proyecto): void {
    if (proyecto.id === 1) return;

    // Redirige a la pantalla 404 del sitio para los proyectos de ejemplo
    this.router.navigate(['/proyecto-no-disponible']);
  }
}
