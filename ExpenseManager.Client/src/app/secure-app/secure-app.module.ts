import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExpensesComponent } from './expenses/expenses.component';
import { SecureAppComponent } from './secure-app.component';

import { SecureAppRoutingModule } from './secure-app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    SecureAppRoutingModule
  ],
  providers: [],
  declarations: [
    SecureAppComponent,
    ExpensesComponent
  ]
})
export class SecureAppModule { }
