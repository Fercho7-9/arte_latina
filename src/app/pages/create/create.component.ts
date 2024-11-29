import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule]  // Agrega CommonModule aquí
})
export class CreateComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  news: boolean = false;
  terms: boolean = false;
  successMessage: string = ''; // Mensaje de éxito

  constructor(private http: HttpClient, private router: Router) {}

  // Método para enviar los datos al servidor
  onSubmit(): void {
    if (this.email && this.username && this.password && this.terms) {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password
      };

      // Enviar los datos al servidor
      this.http.post('http://localhost:3000/register', user)
        .subscribe(
          response => {
            console.log('Registro exitoso', response);
            this.successMessage = 'Cuenta creada con éxito. Redirigiendo al login...'; // Mensaje de éxito
            this.router.navigate(['/login']); // Redirigir al login después del registro
          },
          error => {
            console.error('Error al enviar los datos:', error);
          }
        );
    } else {
      console.log('Formulario inválido');
    }
  }
}
