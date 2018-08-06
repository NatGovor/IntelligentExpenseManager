import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecureAppComponent } from './secure-app.component';
import { ExpensesComponent } from './expenses/expenses.component';

const secureAppRoutes: Routes = [
    {
      path: 'user',
      component: SecureAppComponent,
      children: [
        {
          path: '',
          children: [
            { path: 'expenses', component: ExpensesComponent }
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
