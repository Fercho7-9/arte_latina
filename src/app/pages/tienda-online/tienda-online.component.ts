import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda-online',
  templateUrl: './tienda-online.component.html',
  styleUrls: ['./tienda-online.component.css']
})
export class TiendaOnlineComponent {
  productos = [
    {
      id: 1,
      nombre: 'Pintura Abstracta',
      artista: 'Carlos Rivera',
      precio: 299.99,
      imagen: '/assets/images/producto1.jpg'
    },
    {
      id: 2,
      nombre: 'Escultura Moderna',
      artista: 'María González',
      precio: 499.99,
      imagen: '/assets/images/producto2.jpg'
    },
    {
      id: 3,
      nombre: 'Arte Digital',
      artista: 'Juan Pérez',
      precio: 199.99,
      imagen: '/assets/images/producto3.jpg'
    }
  ];

  agregarAlCarrito(producto: any) {
    console.log('Producto agregado:', producto);
    // Add cart logic here
  }
}