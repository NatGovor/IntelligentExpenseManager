import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpenseService } from '../services/expense.service';
import { DayExpenses } from '../models/day-expenses';
import { Expense } from '../models/expense';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  dayExpenses: DayExpenses[];

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private balanceService: BalanceService
  ) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(dayExpenses => {
        this.dayExpenses = dayExpenses;
      });
  }

  gotoNewExpense() {
    this.router.navigate(['/user/new-expense']);
  }

  deleteExpense(expense: Expense, index: number) {
    this.dayExpenses[index].expenses = this.dayExpenses[index].expenses.filter(e => e !== expense);
    if (this.dayExpenses[index].expenses.length == 0) {
      this.dayExpenses.splice(index,1);
    }
    this.expenseService.deleteExpense(expense.id).subscribe(_ => {
      this.balanceService.checkBalance(expense.date)
          .subscribe(result => {
            console.log(result);
            // if expense belongs to current month => update state of the app
            let currentDate = new Date();
            let expenseDate = new Date(expense.date);
            if (currentDate.getMonth() == expenseDate.getMonth()) {
              this.balanceService.updateBalance(result);
            }
          });
    });
  }

}
