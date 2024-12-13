import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css']
})
export class SelectRolComponent {
  selectedRole: string = '';

  constructor(private http: HttpClient) {}

  selectRole(role: string): void {
    this.selectedRole = role;
    console.log('Rol seleccionado:', this.selectedRole);

    // ID del usuario actual (puedes ajustarlo según cómo manejes la autenticación)
    const userId = localStorage.getItem('userId');

    // Enviar la solicitud al servidor para actualizar el rol
    this.http
      .patch('http://localhost:3000/api/users/update-role', { userId, role })
      .subscribe({
        next: (response) => console.log('Rol actualizado:', response),
        error: (error) => console.error('Error al actualizar el rol:', error)
      });
  }
}
