import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = 'https://gorest.co.in/public/v2/users';
  options = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer d1430d60f7a5e5510c8a16e83b2afc44c0ff2b9514ea25274a1be7e91386c045',
    }),
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url, this.options)
      .pipe(catchError(this.handleError));
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.url}/${id}`, this.options)
      .pipe(catchError(this.handleError));
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.url, user, this.options)
      .pipe(catchError(this.handleError));
  }

  removeUser(id: number): Observable<User> {
    return this.http
      .delete<User>(`${this.url}/${id}`, this.options)
      .pipe(catchError(this.handleError));
  }

  replaceUser(user: User): Observable<User> {
    return this.http
      .put<User>(`${this.url}/${user.id}`, user, this.options)
      .pipe(catchError(this.handleError));
  }

  editUser(user: User): Observable<User> {
    return this.http
      .patch<User>(`${this.url}/${user.id}`, user, this.options)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      alert(JSON.stringify(error.error));
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
