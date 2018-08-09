import { Component, OnInit } from '@angular/core';

import { Expense } from '../models/expense';
import { ExpenseService } from '../services/expense.service';
import { DayExpenses } from '../models/day-expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  dayExpenses: DayExpenses[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(dayExpenses => {
        this.dayExpenses = dayExpenses;
      });
  }

}
