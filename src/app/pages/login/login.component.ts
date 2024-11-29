import { Router } from '@angular/router';  // Importa el Router para navegación
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule] // Usa HttpClientModule aquí
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}  // Inyectamos el servicio Router
  
  // Método para enviar los datos al servidor
  onSubmit(): void {
    const user = {
      email: this.email,
      password: this.password
    };
    
    this.http.post('http://localhost:3000/login', user)
      .subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          // Aquí puedes manejar la respuesta, como redirigir al usuario después del login exitoso
        },
        error => {
          console.error('Error al enviar los datos:', error);
        }
      );
  }

  // Método para redirigir a la página de registro
  goToCreateAccount(): void {
    this.router.navigate(['/create']);  // Redirige a la ruta '/create'
  }
}
