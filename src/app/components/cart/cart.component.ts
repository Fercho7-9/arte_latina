import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() isVisible: boolean = false;

  ingresar() {
    this.isVisible = false;
  }
}
