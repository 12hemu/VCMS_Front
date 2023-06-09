import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/shared/signup.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public obj:SignupService) { }

  ngOnInit() {this.resetForm()
    this.obj.getUsers();
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.obj.registerData={UserId:0,UserName:'',UserAge:0,UserAddress:'',UserState:'',UserCountry:'',UserEmail:'',UserContact:'',LicenceNo:'',UserPassword:''}
    }
  }

  onSubmit(form:NgForm){
    this.obj.postUsers().subscribe(res => {
      this.obj.getUsers();
      alert("Inserted Successfully!!!")
    },
    err => {
      alert("Not Inserted"+err)
    })
  }

}