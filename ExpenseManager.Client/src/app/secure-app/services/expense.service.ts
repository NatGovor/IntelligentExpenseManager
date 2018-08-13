import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Expense } from '../models/expense';
import { DayExpenses } from '../models/day-expenses';
import { HelpersService } from '../../common-services/helpers.service';
import { User } from '../models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesUrl = 'api/expenses'; // URL to web api

  constructor(
    private http: HttpClient,
    private helpersService: HelpersService
  ) { }

  getExpenses(): Observable<DayExpenses[]> {
    let user = this.helpersService.getStorageProperty("user") as User;
    const url = `${this.expensesUrl}/user/${user.id}`;
    return this.http.get<Object>(url)
      .pipe(
        map(expenses => {
          let dayExpenses = [];
          for (var key in expenses) {
            let dayExpense = new DayExpenses();
            dayExpense.date = new Date(key);
            dayExpense.expenses = expenses[key];
            dayExpenses.push(dayExpense);
          }
          return dayExpenses;
        }),
        tap(expenses => {
          this.log(`fetched expenses`)
        }),
        catchError(this.handleError('getExpenses',[]))
      );
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expensesUrl, expense, httpOptions).pipe(
      tap((expense: Expense) => this.log(`added expense w/ id=${expense.id}`)),
      catchError(this.handleError<Expense>('addExpense'))
    );
  }

  deleteExpense(id: string): Observable<Object> {
    const url = `${this.expensesUrl}/${id}`;

    return this.http.delete<null>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted expense id=${id}`)),
      catchError(this.handleError<any>('deleteExpense'))
    );
  }

  private log(message: string) {
    console.log('ExpenseService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

}
