import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';

interface Team {
  correo: string;
  carrera: string;
  dependencia: string;
  img: string;
  nombre: string;
  proyectos: string;
  tiempoActividad: string;
}

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnDestroy {
  list: Team[] = [];
  dependencias: string[] = [];
  suscription: Subscription = new Subscription();
  selectedDep: string | null = null;

  constructor(private firebaseService: FirestoreService) {}

  ngOnInit(): void {
    this.suscription = this.firebaseService.getTeamCollection().subscribe((res) => {
      this.list = res;
      this.dependencias = this.list.map((item) => item.dependencia).filter(this.distinct);
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  getTeamByDependency(dependencia: string): Team[] {
    return this.list.filter((item) => item.dependencia === dependencia);
  }

  distinct(value: string, index: number, self: string[]): boolean {
    return self.indexOf(value) === index;
  }

  // Función para alternar la dependencia seleccionada
  toggleDep(dep: string): void {
    this.selectedDep = this.selectedDep === dep ? null : dep;
  }
}
