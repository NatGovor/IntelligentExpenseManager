import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SharedExpense } from '../models/shared-expense';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SharedExpenseService {
  private expensesUrl = 'api/sharedexpenses'; // URL to web api

  constructor(
    private http: HttpClient) { }

  getSharedExpenses(): Observable<SharedExpense[]> {
    let userId = "5b69aa4c544dfdd27f4e3c70";
    const url = `${this.expensesUrl}/${userId}`;
    return this.http.get<SharedExpense[]>(url)
      .pipe(
        tap(expenses => this.log(`fetched sharedExpenses`)),
        catchError(this.handleError('getSharedExpenses',[]))
      );
  }

  private log(message: string) {
    console.log('SharedExpenseService: ' + message);
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
