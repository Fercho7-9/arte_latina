import { Component } from '@angular/core';

@Component({
  selector: 'app-artista-section',
  templateUrl: './artista-section.component.html',
  styleUrls: ['./artista-section.component.css'],
})
export class ArtistaSectionComponent {
  artists = [
    {
      image: '/assets/images/ed.png',
      name: 'Eddy Fernando Ordoñez',
      description:
        'Artista visual especializado en murales y arte urbano con un estilo único.',
      city: 'Loja',
      contact: '123-456-789',
      email: 'eddyordoñez@example.com',
    },
    {
      image: '/assets/images/mz.png',
      name: 'Marco Zuñiga',
      description:
        'Experto en ilustración digital y diseño gráfico contemporáneo.',
      city: 'Quito',
      contact: '234-567-890',
      email: 'mariaperez@example.com',
    },
    {
      image: '/assets/images/maluma.png',
      name: 'Maluma',
      description:
        'Fotógrafo con enfoque en paisajes y retratos creativos.',
      city: 'Guayaquil',
      contact: '345-678-901',
      email: 'carlosjimenez@example.com',
    },
    {
      image: '/assets/images/feid.png',
      name: 'Ferchoxx',
      description:
        'Escultor que trabaja con materiales reciclados para crear arte sostenible.',
      city: 'Cuenca',
      contact: '456-789-012',
      email: 'anagomez@example.com',
    },
  ];
}
