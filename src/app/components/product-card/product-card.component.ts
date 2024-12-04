import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  selectedProduct: any = null;

  products = [
    {
      image: '/assets/images/camisas.png',
      title: 'Camisa Neo',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti!',
      price: 15,
    },
    {
      image: '/assets/images/pez.png',
      title: 'Pescado',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perferendis!',
      price: 150,
    },
    {
      image: '/assets/images/mono.png',
      title: 'Mono',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est!',
      price: 150,
    },
  ];

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  clearSelection() {
    this.selectedProduct = null;
  }
}
