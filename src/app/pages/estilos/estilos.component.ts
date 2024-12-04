import { Component } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent {
  estilos = [
    {
      nombre: 'Arte Contemporáneo',
      descripcion: 'Expresiones artísticas actuales que reflejan la sociedad moderna.',
      imagen: '/assets/images/contemporaneo.jpg'
    },
    {
      nombre: 'Arte Abstracto',
      descripcion: 'Formas y colores que trascienden la representación figurativa.',
      imagen: '/assets/images/abstracto.jpg'
    },
    {
      nombre: 'Arte Popular',
      descripcion: 'Tradiciones y costumbres expresadas a través del arte.',
      imagen: '/assets/images/popular.jpg'
    }
  ];
}