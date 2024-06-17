import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  forgotPassword() {
    console.log('Tài khoản:', this.email);

    this.email = '';
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
