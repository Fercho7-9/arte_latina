import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';
export interface Project {
  alcance: string;
  capturas: string[];
  descripcion: string;
  enlace: string;
  equipoDesarrollo: string;
  portada: string;
  proponente: string;
  tecnologias: string;
  tiempoDesarrollo: string;
  titulo: string;
  id: string;
}
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  list: Project[] = [];
  constructor(
    private firebaseService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firebaseService.getProjects().subscribe((res) => {
      this.list = res;
    });
  }

  readMore(id: string) {
    this.router.navigate(['/proyectos', this.encodeID(id)]);
  }

  private encodeID(id: string): string {
    return btoa(id);
  }
}
