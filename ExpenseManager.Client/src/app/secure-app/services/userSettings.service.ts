import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HelpersService } from '../../common-services/helpers.service';
import { User } from '../models/user';
import { UserSettings } from '../models/user-settings';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private userSettingsUrl = 'api/usersettings'; // URL to web api

  constructor(
    private http: HttpClient,
    private helpersService: HelpersService
  ) { }

  getUserSettings(): Observable<UserSettings> {
    let user = this.helpersService.getStorageProperty("user") as User;
    const url = `${this.userSettingsUrl}/${user.id}`;
    return this.http.get<UserSettings>(url)
      .pipe(
        tap(userSettings => {
          this.log(`fetched userSettings`)
        }),
        catchError(this.handleError<any>('getUserSettings',[]))
      );
  }

  updateUserSettings(userSettings: UserSettings): Observable<any> {
    return this.http.put(this.userSettingsUrl, userSettings, httpOptions).pipe(
      tap(_ => this.log(`updated userSettings id=${userSettings.userId}`)),
      catchError(this.handleError<any>('updateUserSettings'))
    )
  }

  private log(message: string) {
    console.log('UserSettingsService: ' + message);
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
