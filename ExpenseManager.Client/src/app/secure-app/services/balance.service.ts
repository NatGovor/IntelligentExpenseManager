import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HelpersService } from '../../common-services/helpers.service';
import { User } from '../models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balanceUpdatedSource = new Subject<boolean>();
  balanceUpdated$ = this.balanceUpdatedSource.asObservable();

  private balancesUrl = 'api/balances'; // URL to web api

  constructor(
    private http: HttpClient,
    private helpersService: HelpersService
  ) { }

  updateBalance(state: boolean) {
    this.balanceUpdatedSource.next(state);
  }

  checkBalance(date): Observable<boolean> {
    let user = this.helpersService.getStorageProperty("user") as User;
    const url = `${this.balancesUrl}/${user.id}/${date}`;
    return this.http.get<boolean>(url)
      .pipe(
        tap(result => {
          this.log(`fetched balance`)
        }),
        catchError(this.handleError<any>('checkExpenses'))
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
