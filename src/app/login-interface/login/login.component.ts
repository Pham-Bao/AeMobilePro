import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Tài khoản:', this.username);
    console.log('Mật khẩu:', this.password);

    this.username = '';
    this.password = '';
  }

  navigateToRegister() {
    this.router.navigate(['/signup']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password'])
  }

  loginWithFacebook() {
    console.log('Đăng nhập bằng Facebook');
  }

  loginWithGoogle() {
    console.log('Đăng nhập bằng Gmail');
  }
}
