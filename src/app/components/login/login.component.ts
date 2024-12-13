  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent {
    loginForm: FormGroup;
    showPassword: boolean = false;  // Variable para controlar la visibilidad de la contraseña

    constructor(private fb: FormBuilder, private router: Router) {
      // Inicialización del formulario reactivo
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

    // Método que se ejecuta cuando se envía el formulario
    onSubmit() {
      if (this.loginForm.valid) {
        console.log('Formulario enviado:', this.loginForm.value);
        // Lógica de inicio de sesión aquí
      }
    }

    // Redirige al login con Google
    loginWithGoogle() {
      window.location.href = 'http://localhost:5000/api/auth/google'; // Aquí se redirige al backend de Google Auth
    }

    // Alterna la visibilidad de la contraseña
    togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;  // Cambia el valor de showPassword
    }
  }
