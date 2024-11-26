import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

// Importar componentes standalone
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { EstilosComponent } from './pages/estilos/estilos.component';
import { TiendaOnlineComponent } from './pages/tienda-online/tienda-online.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArtistasComponent,
    EstilosComponent,
    TiendaOnlineComponent,
    ContactosComponent,
    LoginComponent,
    HttpClientModule  
  ],
  declarations: [],
  bootstrap: [AppModule], // El componente que se debe bootstrap es AppComponent
})
export class AppModule {}
