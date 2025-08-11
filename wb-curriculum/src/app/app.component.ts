import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Presentacion } from './presentacion/presentacion.component';
import { Proyectos } from './proyectos/proyectos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Presentacion, Proyectos],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'wb-curriculum';

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
    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('.nav-dot');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.id || `section-${index}`;
      }
    });

    // Update navigation dots
    navDots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === 0 && currentSection === '') {
        dot.classList.add('active');
      } else if (currentSection === 'proyectos' && index === 1) {
        dot.classList.add('active');
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
