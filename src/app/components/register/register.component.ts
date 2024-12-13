import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router // Inyecta el Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        nacionalidad: ['', [Validators.required]],
        rol: ['usuario', [Validators.required]], // Valor predeterminado 'artista'
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      // Usar el servicio para registrar al usuario
      this.userService.register(formData).subscribe(
        (response) => {
          this.successMessage = 'Usuario registrado con éxito.';
          this.errorMessage = null;

          // Redirigir a select-rol después de un registro exitoso
          setTimeout(() => {
            this.router.navigate(['/select-rol']);
          }, 2000); // Retardo opcional para mostrar el mensaje
        },
        (error) => {
          this.successMessage = null;
          this.errorMessage = 'Error al registrar el usuario: ' + error.message;
        }
      );
    } else {
      this.errorMessage = 'Por favor, completa el formulario correctamente.';
    }
  }
}
