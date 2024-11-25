import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, // Habilita el componente como standalone
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  constructor() { }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
