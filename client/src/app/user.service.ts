import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import * as config from './config/server.json';
import { isDevMode } from '@angular/core';

import { User } from './user.model';

let addr = (<any>config).live_server;
if (isDevMode()) {
  // dev code
  addr = (<any>config).local_server;
  console.log('development');
} else {
  // production code
  addr = (<any>config).live_server;
  console.log('live');
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authToken: any;
  user: User;

  constructor(private http: HttpClient, private router: Router) { }


  addUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(addr + "/users/userReg/register/", user, {
      headers: headers
    });
  }


}

