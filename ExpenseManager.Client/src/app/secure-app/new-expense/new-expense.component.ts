import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Expense } from '../models/expense';
import { ExpenseService } from '../services/expense.service';
import { BalanceService } from '../services/balance.service';
import { HelpersService } from '../../common-services/helpers.service';
import { User } from '../models/user';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  model = new Expense();

  constructor(
    private expenseService: ExpenseService,
    private balanceService: BalanceService,
    private helpersService: HelpersService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    let user = this.helpersService.getStorageProperty("user") as User;
    this.model.userId = user.id;
    this.expenseService.addExpense(this.model)
      .subscribe(expense => {
        this.balanceService.checkBalance(this.model.date)
          .subscribe(result => {
            console.log(result);
            // if expense belongs to current month => update state of the app
            let currentDate = new Date();
            let expenseDate = new Date(this.model.date);
            if (currentDate.getMonth() == expenseDate.getMonth()) {
              this.balanceService.updateBalance(result);
            }
            this.location.back();
          });
      });
  }

}
