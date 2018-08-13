import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../common-services/auth.service';
import { HelpersService } from '../../common-services/helpers.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private helpersService: HelpersService
  ) {}

  login(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
        .subscribe(result => {
          if (result.isSuccess) {
            this.helpersService.setStorageProperty("user", result.user);
            this.router.navigate(['/user/expenses']);
          } else {
            alert('Invalid login or password');
          }
        });
    }
  }
}
