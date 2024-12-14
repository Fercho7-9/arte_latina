import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css'],
})
export class SelectRolComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  selectRole(role: string): void {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      this.errorMessage = 'No se encontró el ID de usuario. Por favor, inicia sesión.';
      return;
    }

    this.userService.updateRole(userId, role).subscribe(
      () => {
        this.successMessage = 'Rol actualizado con éxito.';
        this.errorMessage = null;

        const targetRoute = role === 'usuario' ? '/home' : '/artista-view';
        this.router.navigate([targetRoute]);
      },
      (error) => {
        this.successMessage = null;
        this.errorMessage =
          'Error al actualizar el rol: ' + (error?.message || 'Error desconocido');
      }
    );
  }
}
