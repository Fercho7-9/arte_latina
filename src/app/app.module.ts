import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Importar componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { EstilosComponent } from './pages/estilos/estilos.component';
import { TiendaOnlineComponent } from './pages/tienda-online/tienda-online.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateComponent } from './pages/create/create.component'; 

// Importar CommonModule y ReactiveFormsModule
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
       // Declarar CreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,      // Necesario para usar *ngIf y otras directivas
    ReactiveFormsModule, // Necesario para formularios reactivos
    AppRoutingModule,
    HttpClientModule,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArtistasComponent,
    EstilosComponent,
    TiendaOnlineComponent,
    ContactosComponent,
    LoginComponent,
    CreateComponent,
  ],
  providers: [],
  bootstrap: [AppModule]
})
export class AppModule { }
