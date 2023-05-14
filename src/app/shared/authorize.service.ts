import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  constructor(private http: HttpClient, private router: Router) {}
  registerList: Login[];
  registerData: Login = new Login();

  login() {
    return this.http.post(
      'https://localhost:5001/api/Logins/Login',
      this.registerData
    );
  }

  private isTokenExpired(token: string) {
    if (token === null) {
      return true;
    }
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    console.log(expiry);
    return expiry * 1000 < Date.now();
  }
  
  isAuthenticated(): boolean {
    var token1 = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : null;
    if (this.isTokenExpired(token1)) return false;
    return true;
  }
}
