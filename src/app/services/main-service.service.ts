import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

import { UserDetails } from './userDetails';

const url = '/addUser';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  userDetails: UserDetails = {
    name: "",
    email: "",
    msg: "",
    phone: "",
    org: "",
    captcha: false
  };

  constructor(private http: HttpClient) { }

  addUser(userdetails: UserDetails): Observable<UserDetails> {
    return this.http.post<any>(url, userdetails)
      .pipe(
        catchError(this.handleError)
      );
  }

  setUserDetails(propName, value) {
    this.userDetails[propName] = value;
  }

  getUserDetail() {
    return this.userDetails;
  }

  handleError(error) {
    let message = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      message = `Error: ${error.error.message}`;
    } else {
      if (error.status !== 200) {
        console.log('error', error);
        message = `Error Code: ${error.status}\nMessage: ${error.message}\nMessage: ${error.error}`;
        window.alert(message);
        return throwError(message);
      } else {
        message = `User Added Sucessfully!!`;
        window.alert(message);
        return;
      }

    }
  }
}