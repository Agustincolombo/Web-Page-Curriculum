import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Proyectos } from '../app/proyectos/proyectos.component'
import { Presentacion } from '../app/presentacion/presentacion.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Proyectos, Presentacion],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
}
