import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { TiendaOnlineComponent } from './pages/tienda-online/tienda-online.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'tienda-online', component: TiendaOnlineComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
