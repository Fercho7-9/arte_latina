import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/firestore.service';

interface NewProject {
  carrera: string;
  descripcion: string;
  tipoProyecto: string;
  titulo: string;
  gp: string
}

@Component({
  selector: 'app-nuevos-proyectos',
  templateUrl: './nuevos-proyectos.component.html',
  styleUrls: ['./nuevos-proyectos.component.css'],
})
export class NuevosProyectosComponent implements OnInit {

  list: NewProject[] = [];
  results: NewProject[] = [];
  resultsByTitle: NewProject[] = [];
  suscription: Subscription;
  titleFilter: string = "";
  listaTipos: string[] = ["Web", "Movil"]
  tipoSeleccionado: string = ""
  listaGp: string[] = ["3.1", "3.2", "3.3"]
  gpSeleccionado: string = ""
  listaCarreras : string[] = [
    "Computación",
    "Contabilidad y Auditoria",
    "Administración de Empresas",
    "Economía",
    "Comunicación",
    "Medicina",
    "Psicología",
    "Derecho",
    "Ingeniería Indusrial",
    "Arquitectura"
  ]
  carreraSeleccionada: string = ""

  constructor(firebaseService: FirestoreService) {
    this.suscription = firebaseService.getNewProjects().subscribe((res) => {
      this.list = res;
      this.results = this.list
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  filter(){
    this.results = this.list
    if(this.titleFilter.length > 0){
      this.results = this.results.filter((newProject: NewProject) => newProject.titulo.includes(this.titleFilter))
    }
    if(this.tipoSeleccionado.length > 0){
      this.results = this.results.filter((newProject: NewProject) => newProject.tipoProyecto === this.tipoSeleccionado )
    }
    if(this.gpSeleccionado.length > 0){
      this.results = this.results.filter((newProject: NewProject) => newProject.gp === this.gpSeleccionado )
    }
    if(this.carreraSeleccionada.length > 0){
      this.results = this.results.filter((newProject: NewProject) => newProject.carrera === this.carreraSeleccionada )
    }
  }
}
