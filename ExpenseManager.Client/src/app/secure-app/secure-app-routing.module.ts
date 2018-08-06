import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureAppComponent } from './secure-app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SharedExpensesComponent } from './shared-expenses/shared-expenses.component';
import { DebtsComponent } from './debts/debts.component';
import { ReportsComponent } from './reports/reports.component';

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
            { path: 'reports', component: ReportsComponent }
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
