import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  adminlogin = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
submit():void {

if (this.adminlogin.value.username==="Admin"&&this.adminlogin.value.password==="Admin123"){
  alert("Login Successful");
  this.router.navigate(["delete"])
}
else{
  alert("Login  is invalid");
}
}

}
