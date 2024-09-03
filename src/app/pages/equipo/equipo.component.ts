import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  DependenciaUnidad,
  FirestoreService,
  PeriodoCard,
} from 'src/app/firestore.service';

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
  styleUrls: ['./equipo.component.css'],
})
export class EquipoComponent implements OnInit, AfterViewInit {
  list: Team[] = [];
  dependencias: string[] = [];
  dependenciasData: DependenciaUnidad[] = [];
  selectedDep: string | null = null;
  periodosData!: PeriodoCard[];
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private firebaseService: FirestoreService) {}

  ngOnInit(): void {
    this.firebaseService.getTeamCollection().subscribe((res) => {
      this.list = res;
      this.dependencias = this.list
        .map((item) => item.dependencia)
        .filter(this.distinct);

      this.firebaseService.getDependenciasUnidades().subscribe((res) => {
        console.log(res);
        //  want to order the data by this.dependencias and compare with res.id
        this.dependenciasData = res.sort((a, b) => {
          return (
            this.dependencias.indexOf(a.id) - this.dependencias.indexOf(b.id)
          );
        });
      });
    });

    this.firebaseService.getOnlyPeriodosWithOutTeam().subscribe((res) => {
      this.periodosData = res;
      console.log(this.periodosData);
    });
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
      if (
        scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth ||
        scrollAmount < 0
      ) {
        scrollAmount = -scrollAmount;
      }
    }, 50); // Ajusta la velocidad del scroll según sea necesario (50ms = 20fps)
  }

  // equipo.component.ts
  findPortada(id: any): any {
    const periodo = this.periodosData.find((periodo) => periodo.id === id);
    return periodo!.portada;
  }
}
