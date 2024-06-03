import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
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
export class EquipoComponent implements OnDestroy, AfterViewInit {
  list: Team[] = [];
  dependencias: string[] = [];
  suscription: Subscription = new Subscription();
  selectedDep: string | null = null;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

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

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAutomatically();
    }, 3000); // Desplazar automáticamente después de 3 segundos
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

  scrollAutomatically(): void {
    const scrollContainer = this.scrollContainer.nativeElement as HTMLElement;
    let scrollAmount = 1;
    setInterval(() => {
      scrollContainer.scrollLeft += scrollAmount;
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) || scrollAmount < 0) {
        scrollAmount = -scrollAmount;
      }
    }, 50); // Ajusta la velocidad del scroll según sea necesario (50ms = 20fps)
  }
}


