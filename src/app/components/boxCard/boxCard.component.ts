import { Component, AfterViewInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'box-card',
  templateUrl: './boxCard.component.html',
  styleUrls: ['./boxCard.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class BoxCard implements AfterViewInit {
  isModalOpen = false;
  flip: string = 'inactive';

  @Input() alcance = '';
  @Input() capturas: string[] = [];
  @Input() descripcion = '';
  @Input() enlace = '';
  @Input() equipoDesarrollo = '';
  @Input() portada = '';
  @Input() proponente = '';
  @Input() tecnologias = '';
  @Input() tiempoDesarrollo = '';
  @Input() titulo = '';
  showMenu: boolean = false;

  constructor() { }
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
  ngAfterViewInit() {

  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}

