import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Expense } from '../models/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  userId = "5b69aa4c544dfdd27f4e3c71";
  model = new Expense();

  constructor(
    private expenseService: ExpenseService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.model.userId = this.userId;
    this.expenseService.addExpense(this.model)
      .subscribe(expense => {
        this.location.back();
      });
  }

}
