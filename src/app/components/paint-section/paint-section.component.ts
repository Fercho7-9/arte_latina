import { Component } from '@angular/core';

@Component({
  selector: 'app-paint-section',
  templateUrl: './paint-section.component.html',
  styleUrls: ['./paint-section.component.css'],
})
export class PaintSectionComponent {
  selectedPaint: any = null;
  paints = [
    {
      image: '/assets/images/plastica.png',
      title: 'Pintura Plástica',
      description: 'Ideal para interiores y exteriores, resistente y versátil.',
      type: 'Pintura Plástica',
    },
    {
      image: '/assets/images/acrilica.png',
      title: 'Pintura Acrílica',
      description: 'Perfecta para arte y manualidades, colores vibrantes.',
      type: 'Pintura Acrílica',
    },
    {
      image: '/assets/images/spray.png',
      title: 'Pintura en Spray',
      description: 'Fácil de usar, ideal para proyectos de bricolaje.',
      type: 'Pintura en Spray',
    },
    {
      image: '/assets/images/laca.png',
      title: 'Pintura Laca',
      description: 'Acabados brillantes, resistente a desgaste.',
      type: 'Pintura Laca',
    },
  ];

  selectPaint(paint: any) {
    this.selectedPaint = paint;
  }
  

  clearSelection() {
    this.selectedPaint = null;
  }
}
