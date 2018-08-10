import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpenseService } from '../services/expense.service';
import { DayExpenses } from '../models/day-expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  dayExpenses: DayExpenses[];

  constructor(
    private expenseService: ExpenseService,
    private router: Router
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

}
