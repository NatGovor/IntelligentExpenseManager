import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../secure-app/models/user';
import { AuthResult } from '../unsecure-app/models/auth-result';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'api/auth'; // URL to web api

  constructor(
    private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResult> {
    return this.http.post<Object>(this.authUrl, { 'email': email, 'password': password }, httpOptions).pipe(
      tap((result: AuthResult) => this.log(`authenticate user`)),
      catchError(this.handleError<AuthResult>('authenticate user'))
    );
  }

  private log(message: string) {
    console.log('AuthService: ' + message);
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
