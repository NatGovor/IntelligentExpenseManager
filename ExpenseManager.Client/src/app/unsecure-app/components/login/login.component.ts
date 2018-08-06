import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    email: string;
    password: string;
}
