import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    email: string;
    password: string;

    login(): void {
        console.log("login");
    }
}
