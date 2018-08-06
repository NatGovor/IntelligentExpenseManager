import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private router: Router) {}

  login(): void {
    if (this.email && this.password) {
      this.router.navigate(['/user/expenses']);
    }
  }
}
