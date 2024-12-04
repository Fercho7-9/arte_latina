import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  currentSlide = 0;
  slides = [
    {
      image: '/assets/images/tigre.png',
      title: 'Michi Miua',
      description: 'Explorando las nuevas tendencias del arte latino'
    },
    {
      image: '/assets/images/manos.png',
      title: 'Hands on Me',
      description: 'Descubre nuevos talentos latinoamericanos'
    },
    {
      image: '/assets/images/doñalupe.png',
      title: 'Doña Lupe',
      description: 'Visita nuestras galerías virtuales'
    }
  ];

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}