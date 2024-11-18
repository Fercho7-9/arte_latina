import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { NuevosProyectosComponent } from './pages/nuevos-proyectos/nuevos-proyectos.component';
import { AcademyComponent } from './academy/academy.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectLayoutComponent } from './pages/project-layout/project-layout.component';
import { AdmiComponent } from './pages/admi/admi.component'; // Importa tu componente

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  // { path: 'nuevos-proyectos', component: NuevosProyectosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/:idProject', component: ProjectLayoutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'academia-ascendere', component: AcademyComponent },
  { path: 'recursos', component: ResourcesComponent },
  { path: 'admi', component: AdmiComponent }, // Agrega esta línea para tu componente Admi
  { path: '**', redirectTo: '' }, // Redirección a Home para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
