import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EstilosComponent } from './pages/estilos/estilos.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { TiendaOnlineComponent } from './pages/tienda-online/tienda-online.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaintSectionComponent } from './components/paint-section/paint-section.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ArtistaSectionComponent } from './components/artista-section/artista-section.component';
import { CartComponent } from './components/cart/cart.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estilos', component: EstilosComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'tienda', component: TiendaOnlineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'paint-section',component:PaintSectionComponent},
  {path: 'product-card',component:ProductCardComponent},
  {path: 'artista-section',component:ArtistaSectionComponent},
  {path: 'cart',component:CartComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }