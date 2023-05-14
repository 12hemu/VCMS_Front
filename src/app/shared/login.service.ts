import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  registerList: Login[];
  registerData: Login= new Login;

  constructor(public objcHttp:HttpClient) { }
  registerUrl="https://localhost:5001/api/Logins/login"

  getLogin() { 
    this.objcHttp.get(this.registerUrl).toPromise().then(res => this.registerList = res as Login[] )
  }

  postLogin() {
    
    console.log(this.registerData)
    return this.objcHttp.post(this.registerUrl, this.registerData);
  }
  
 
}
