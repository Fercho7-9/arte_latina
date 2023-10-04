import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';
interface Project {
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
export class ProyectosComponent implements OnDestroy {
  list: Project[] = [];
  suscription: Subscription;
  constructor(firebaseService: FirestoreService) {
    this.suscription = firebaseService.getProjects().subscribe((res) => {
      console.log('los proyectos son', res);
      this.list = res;
    });
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
  readMore(demo: any) {

  }
}
