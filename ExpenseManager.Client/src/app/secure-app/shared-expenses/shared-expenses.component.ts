import { Component, OnInit } from '@angular/core';
import { SharedExpense } from '../models/shared-expense';
import { SharedExpenseService } from '../services/shared-expense.service';

@Component({
  selector: 'app-shared-expenses',
  templateUrl: './shared-expenses.component.html',
  styleUrls: ['./shared-expenses.component.css']
})
export class SharedExpensesComponent implements OnInit {
  sharedExpenses: SharedExpense[];

  constructor(private sharedExpenseService: SharedExpenseService) { }

  ngOnInit() {
    this.getSharedExpenses();
  }

  getSharedExpenses(): void {
    this.sharedExpenseService.getSharedExpenses()
      .subscribe(sharedExpenses => {
        this.sharedExpenses = sharedExpenses;
      });
  }

  getPayerName(expense: SharedExpense): string {
    if (expense.userId === expense.payerId) {
      return 'you';
    } else {
      return expense.payerName;
    }
  }

  getDebtText(expense: SharedExpense): string {
    if (expense.userDebt < 0) {
      return "you borrowed";
    } else {
      return "you lent";
    }
  }

  addClass(expense: SharedExpense): string {
    if (expense.userId === expense.payerId) {
        return 'positive';
    } else {
        return 'negative';
    }
  }

}
