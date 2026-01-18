import { Component } from '@angular/core';

@Component({
  selector: 'presentacion',
  standalone: true,
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.sass'
})
export class Presentacion {
  //datos personales
  public name: string = "Agustín Colombo"
  public profession: string = "Desarrollador de software"
  public aboutMe: string =
    `Soy un desarrollador de software con 3 años de experiencia en una variedad de proyectos,
    siempre enfocado en el crecimiento como profesional y la aplicación práctica de todo lo aprendido a lo largo de mi carrera.
    Me encantan los desafíos y siempre doy lo mejor de mí para poder ofrecer las mejores soluciones.
    Valoro mucho el trabajo en equipo y lo que aporta en mi formación.`
}
