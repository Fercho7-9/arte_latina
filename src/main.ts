import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // Importa las rutas configuradas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configuración de rutas
  ],
}).catch((err) => console.error(err));
