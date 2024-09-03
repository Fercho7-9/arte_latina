import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { register } from 'swiper/element/bundle';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxCard } from './components/boxCard/boxCard.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { NuevosProyectosComponent } from './pages/nuevos-proyectos/nuevos-proyectos.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { BoxCardTeam } from './components/box-card-team/box-card-team.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademyComponent } from './academy/academy.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectLayoutComponent } from './pages/project-layout/project-layout.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    MainLayoutComponent,
    NavbarComponent,
    AboutComponent,
    ProyectosComponent,
    ScrollTopComponent,
    SidebarComponent,
    EquipoComponent,
    BoxCard,
    NuevosProyectosComponent,
    BoxCardTeam,
    AcademyComponent,
    ResourcesComponent,
    ProjectLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
