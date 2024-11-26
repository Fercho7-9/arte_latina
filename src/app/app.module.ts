import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Importar AppComponent y marcarlo como standalone
import { AppComponent } from './app.component';

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
  declarations: [],
  imports: [
    BrowserModule,
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
  ],
  bootstrap: [AppModule], // Bootstrap del componente principal standalone
})
export class AppModule {}
