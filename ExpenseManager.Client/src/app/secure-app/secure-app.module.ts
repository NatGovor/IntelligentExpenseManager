import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbdModalContent } from './modals/modal-content';

import { ExpensesComponent } from './expenses/expenses.component';
import { SecureAppComponent } from './secure-app.component';

import { SecureAppRoutingModule } from './secure-app-routing.module';
import { SharedExpensesComponent } from './shared-expenses/shared-expenses.component';
import { DebtsComponent } from './debts/debts.component';
import { ReportsComponent } from './reports/reports.component';
import { MakePositivePipe } from './pipes/make-positive.pipe';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SecureAppRoutingModule
  ],
  providers: [],
  declarations: [
    SecureAppComponent,
    ExpensesComponent,
    SharedExpensesComponent,
    DebtsComponent,
    ReportsComponent,
    MakePositivePipe,
    NewExpenseComponent,
    NgbdModalContent,
    ProfileSettingsComponent
  ],
  entryComponents: [
    NgbdModalContent
  ]
})
export class SecureAppModule { }
