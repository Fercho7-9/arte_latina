import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  gp: string;
}
interface Team {
  id: string;
  correo: string;
  carrera: string;
  dependencia: string;
  img: string;
  nombre: string;
  proyectos: string;
  tiempoActividad: string;
}
export interface DependenciaUnidad {
  id: string;
  idElementHTML: string;
  description: string;
  periodos: string[];
}
export interface PeriodoCard {
  id: string;
  portada: string;
}
export interface Periodo {
  id: string;
  portada: string;
  team: string[];
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  getProjects(): Observable<Project[]> {
    return this.afs.collection<Project>('Projects').valueChanges();
  }
  getNewProjects(): Observable<NewProject[]> {
    return this.afs.collection<NewProject>('NewProjects').valueChanges();
  }
  getTeamCollection(): Observable<Team[]> {
    return this.afs
      .collection<Team>('Team')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }

  getProjectsByID(id: string): Observable<Project | undefined> {
    return this.afs.collection('Projects').doc<Project>(id).valueChanges();
  }

  getDependenciasUnidades(): Observable<DependenciaUnidad[]> {
    return this.afs
      .collection<DependenciaUnidad>('Dependencias')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }

  getOnlyPeriodosWithOutTeam(): Observable<PeriodoCard[]> {
    return this.afs
      .collection<Periodo>('Periodos')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { portada: data.portada, id };
          })
        )
      );
  }
  getPeriodoByID(id: string): Observable<Periodo | undefined> {
    return this.afs.collection('Periodos').doc<Periodo>(id).valueChanges();
  }
}
