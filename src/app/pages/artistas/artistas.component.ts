import { Component } from '@angular/core';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {
  artistas = [
    {
      nombre: 'Carlos Rivera',
      especialidad: 'Pintura Contemporánea',
      bio: 'Artista reconocido por sus obras que exploran la identidad latinoamericana.',
      imagen: '/assets/images/artista1.jpg'
    },
    {
      nombre: 'María González',
      especialidad: 'Escultura',
      bio: 'Sus obras reflejan la fusión entre lo tradicional y lo moderno.',
      imagen: '/assets/images/artista2.jpg'
    },
    {
      nombre: 'Juan Pérez',
      especialidad: 'Arte Digital',
      bio: 'Pionero en la integración de tecnología y arte tradicional.',
      imagen: '/assets/images/artista3.jpg'
    }
  ];
}