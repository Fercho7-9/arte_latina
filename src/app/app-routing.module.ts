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
  { path: 'home', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'artistas', component: ArtistasComponent }, // Ruta para la página de artistas
  { path: 'tienda-online', component: TiendaOnlineComponent }, // Ruta para la tienda en línea
  { path: 'contactos', component: ContactosComponent }, // Ruta para la página de contactos
  { path: 'login', component: LoginComponent }, // Ruta para la página de login

  // Redirección para la raíz del sitio
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 

  // Redirección para rutas no encontradas (debe estar al final siempre)
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restaura la posición del scroll al cambiar de ruta
      anchorScrolling: 'enabled', // Habilita el scroll a anchors en la página
      enableTracing: false, // Cambiar a true para depuración
    }),
  ],
  exports: [RouterModule], // Exporta el módulo de enrutamiento para usar en AppModule
})
export class AppRoutingModule {}
