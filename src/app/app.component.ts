import { Component } from '@angular/core';
import { CartComponent } from '../app/components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Referencia al componente cart
  cart: CartComponent;

  constructor() {
    this.cart = new CartComponent();
  }
}
