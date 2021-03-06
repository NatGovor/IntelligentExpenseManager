import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../common-services/auth.service';
import { HelpersService } from '../../common-services/helpers.service';
import { User } from '../../secure-app/models/user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private helpersService: HelpersService
  ) {}

  ngOnInit() {
    let user = this.helpersService.getStorageProperty("user") as User;
    if (user) {
      this.router.navigate(['/user/expenses']);
    }
  }

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
