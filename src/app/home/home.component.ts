import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Presentacion } from '../presentacion/presentacion.component';
import { Proyectos } from '../proyectos/proyectos.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, Presentacion, Proyectos],
    template: `
    <div class="main-container">
      <nav class="navigation-dots">
        <div class="nav-dot active" (click)="scrollToSection('inicio')" data-section="inicio"></div>
        <div class="nav-dot" (click)="scrollToSection('sobre-mi')" data-section="sobre-mi"></div>
        <div class="nav-dot" (click)="scrollToSection('proyectos')" data-section="proyectos"></div>
      </nav>
      
      <presentacion></presentacion>
      <proyectos></proyectos>
    </div>
  `
})
export class HomeComponent implements OnInit {

    ngOnInit() {
        this.updateActiveSection();
    }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.updateActiveSection();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateActiveSection();
    }

    private updateActiveSection() {
        // We expect 3 main sections with these IDs
        const sectionIds = ['inicio', 'sobre-mi', 'proyectos'];
        const navDots = document.querySelectorAll('.nav-dot');

        let activeIndex = 0; // Default to first (Inicio)
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Find which section is currently active
        for (let i = 0; i < sectionIds.length; i++) {
            const section = document.getElementById(sectionIds[i]);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activeIndex = i;
                    break;
                }

                if (window.scrollY >= (section.offsetTop - window.innerHeight * 0.3)) {
                    activeIndex = i;
                }
            }
        }

        // Update navigation dots
        navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
