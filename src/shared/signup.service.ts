import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/model/users.model';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  registerUrl = "https://localhost:5001/api/UserDetails";

  constructor(public objcHttp:HttpClient) { }

  registerList: Users[];
  registerData: Users=new Users();
  


  getUsers() { 
    this.objcHttp.get(this.registerUrl).toPromise().then(res => this.registerList = res as Users[] )
  }

  postUsers() {
    
    console.log(this.registerData)
    return this.objcHttp.post(this.registerUrl, this.registerData);
  }

  putUsers() {
    return this.objcHttp.put(this.registerUrl + "/" + this.registerData.UserId, this.registerData)
  }

  delUsers(UserId) {
    return this.objcHttp.delete(this.registerUrl + "/" + UserId);
  }
}