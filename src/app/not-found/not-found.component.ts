import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="not-found-container">
      <div class="content">
        <h1 class="error-code">404</h1>
        <h2 class="title">Página no encontrada</h2>
        <p class="description">
          Lo sentimos, la sección que buscas no existe o se encuentra actualmente en desarrollo.
        </p>
        <a routerLink="/" class="home-button">Volver al Inicio</a>
      </div>
    </div>
  `,
    styles: [`
    .not-found-container
      min-height: 100vh
      display: flex
      align-items: center
      justify-content: center
      background-color: var(--color-bg-body)
      color: var(--color-text-main)
      text-align: center
      padding: 2rem

    .content
      max-width: 600px
      animation: fadeIn 0.5s ease-out

    .error-code
      font-size: 8rem
      font-weight: 700
      color: var(--color-accent)
      margin: 0
      line-height: 1
      text-shadow: 4px 4px 0 rgba(0,0,0,0.2)

    .title
      font-size: 2.5rem
      margin-bottom: 1.5rem
      color: var(--color-text-main)

    .description
      font-size: 1.2rem
      color: var(--color-text-muted)
      margin-bottom: 3rem
      line-height: 1.6

    .home-button
      display: inline-block
      padding: 1rem 2rem
      background: var(--color-accent)
      color: var(--color-bg-body)
      text-decoration: none
      border-radius: 50px
      font-weight: 600
      transition: all 0.3s ease
      box-shadow: 0 4px 15px rgba(0,0,0,0.2)

      &:hover
        transform: translateY(-3px)
        box-shadow: 0 6px 20px rgba(0,0,0,0.3)
        background: var(--color-text-main)
        color: var(--color-bg-body)

    @keyframes fadeIn
      from
        opacity: 0
        transform: translateY(20px)
      to
        opacity: 1
        transform: translateY(0)
  `]
})
export class NotFoundComponent { }
