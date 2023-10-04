import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor() {
    const secciones = document.querySelectorAll("section");
    console.log(secciones);
  }

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    const bar_item = document.getElementById(`item-${elementId}`);
    const items = document.querySelectorAll("items");

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    bar_item?.classList.add('activo');

  }
}
