import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
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
interface NewProject {
  carrera: string;
  descripcion: string;
  tipoProyecto: string;
  titulo: string;
  gp: string
}
interface Team {
  correo: string;
  carrera: string;
  dependencia: string;
  img: string;
  nombre: string;
  proyectos: string;
  tiempoActividad: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private newProjectCollection: CollectionReference<any>;
  private projectsCollection: CollectionReference<any>;
  private TeamCollection: CollectionReference<any>;

  constructor(afs: Firestore) {
    this.newProjectCollection = collection(afs, 'NewProjects');
    this.projectsCollection = collection(afs, 'Projects');
    this.TeamCollection = collection(afs, 'Team');
  }

  getProjects = (): Observable<Project[]> => {
    return collectionData(this.projectsCollection);
  };
  getNewProjects = (): Observable<NewProject[]> => {
    return collectionData(this.newProjectCollection);
  };
  getTeamCollection = (): Observable<Team[]> => {
    return collectionData(this.TeamCollection);
  };
}
