import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de componentes de las páginas
import { HomeComponent } from './pages/home/home.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { TiendaOnlineComponent } from './pages/tienda-online/tienda-online.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';

// Definición de rutas
const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta a la página de inicio
  { path: 'artistas', component: ArtistasComponent }, // Ruta a la página de artistas
  { path: 'tienda-online', component: TiendaOnlineComponent }, // Ruta a la tienda en línea
  { path: 'contactos', component: ContactosComponent }, // Ruta a la página de contactos
  { path: 'login', component: LoginComponent }, // Ruta para ingresar artistas

  // Redirección para la raíz del sitio
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 

  // Redirección para rutas no encontradas
  { path: '**', redirectTo: '/home' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración de las rutas principales
  exports: [RouterModule], // Exportación del módulo de rutas
})
export class AppRoutingModule   {}
