import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule

// Importa los componentes standalone
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Marca AppComponent como standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,      // Importa RouterModule para usar router-outlet
    NavbarComponent,   // Importa NavbarComponent
    FooterComponent    // Importa FooterComponent
  ]
})
export class AppComponent {
  title = 'arte_latino';
}
