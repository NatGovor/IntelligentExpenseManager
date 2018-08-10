import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExpensesComponent } from './expenses/expenses.component';
import { SecureAppComponent } from './secure-app.component';

import { SecureAppRoutingModule } from './secure-app-routing.module';
import { SharedExpensesComponent } from './shared-expenses/shared-expenses.component';
import { DebtsComponent } from './debts/debts.component';
import { ReportsComponent } from './reports/reports.component';
import { MakePositivePipe } from './pipes/make-positive.pipe';

@NgModule({
  imports: [
    BrowserModule,
    SecureAppRoutingModule
  ],
  providers: [],
  declarations: [
    SecureAppComponent,
    ExpensesComponent,
    SharedExpensesComponent,
    DebtsComponent,
    ReportsComponent,
    MakePositivePipe
  ]
})
export class SecureAppModule { }
