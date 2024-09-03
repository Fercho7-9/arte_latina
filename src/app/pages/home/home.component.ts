import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';
// import Swiper core and required modules

// install Swiper modules

interface Project {
  alcance: string;
  capturas: string[];
  descripcion: string;
  enlace: string;
  equipoDesarrollo: string;
  id: string;
  portada: string;
  proponente: string;
  tecnologias: string;
  tiempoDesarrollo: string;
  titulo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  list: Project[] = [];
  suscription: Subscription;
  constructor(firebaseService: FirestoreService) {
    this.suscription = firebaseService.getProjects().subscribe((res) => {
      // console.log('los proyectos son', res);
      this.list = res;
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
