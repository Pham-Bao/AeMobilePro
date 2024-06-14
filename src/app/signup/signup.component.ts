import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  signup() {
    if(this.password != this.confirmPassword) {
      console.error('Mật khẩu không giống nhau');
      return;
    }

    console.log('Họ tên:', this.username);
    console.log('Email:', this.email);
    console.log('Số điện thoại', this.phone);
    console.log('Password:', this.password);

    this.username = '';
    this.email = '';
    this.phone = '';
    this.password = '';
    this.confirmPassword = '';

  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
