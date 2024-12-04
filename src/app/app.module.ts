import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { EstilosComponent } from './pages/estilos/estilos.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { TiendaOnlineComponent } from './pages/tienda-online/tienda-online.component';

// Components
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaintSectionComponent } from './components/paint-section/paint-section.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ArtistaSectionComponent } from './components/artista-section/artista-section.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstilosComponent,
    ArtistasComponent,
    ContactosComponent,
    TiendaOnlineComponent,
    CarruselComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProductCardComponent,
    PaintSectionComponent,
    ArtistaSectionComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }