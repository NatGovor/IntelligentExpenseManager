import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureAppComponent } from './secure-app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SharedExpensesComponent } from './shared-expenses/shared-expenses.component';
import { DebtsComponent } from './debts/debts.component';
import { ReportsComponent } from './reports/reports.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

const secureAppRoutes: Routes = [
    {
      path: 'user',
      component: SecureAppComponent,
      children: [
        {
          path: '',
          children: [
            { path: 'expenses', component: ExpensesComponent },
            { path: 'shared-expenses', component: SharedExpensesComponent },
            { path: 'debts', component: DebtsComponent },
            { path: 'reports', component: ReportsComponent },
            { path: 'new-expense', component: NewExpenseComponent },
            { path: 'profile-settings', component: ProfileSettingsComponent }
          ]
        }
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(secureAppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecureAppRoutingModule {}
