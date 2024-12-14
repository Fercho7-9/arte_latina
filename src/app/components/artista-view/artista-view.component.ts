import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-artista-view',
  templateUrl: './artista-view.component.html',
  styleUrls: ['./artista-view.component.css']
})
export class ArtistaViewComponent {
  nombreArtista: string = 'NOMBRE DEL ARTISTA'; // Nombre del artista (puedes actualizarlo dinámicamente)
  biografia: string = '';
  telefono: string = '';
  correo: string = '';
  redes: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Método para guardar los cambios
  guardarCambios() {
    // Simulando una solicitud HTTP (como si fuera un API que guarda la información del artista)
    const artistaData = {
      nombre: this.nombreArtista,
      biografia: this.biografia,
      telefono: this.telefono,
      correo: this.correo,
      redes: this.redes
    };

    // Realizamos la solicitud POST (aquí es solo un ejemplo, necesitarías un endpoint real)
    this.http.post('https://api.ejemplo.com/artistas', artistaData).subscribe(
      (response) => {
        console.log('Datos guardados:', response);
        // Navegar a otra página después de guardar los cambios
        this.router.navigate(['/artista-dashboard']); // Cambia la ruta según tus necesidades
      },
      (error) => {
        console.error('Error al guardar los datos', error);
      }
    );
  }
}
