import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeService } from '../shared/authorize.service';



 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(public obj:AuthorizeService, private http:HttpClient, private router: Router){}
  
  ngOnInit(){
    // this.initForm();
     
    
    
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.registerData = {
        UserName:'',
        Password:'',
        Token:''
      };
    }
  }
  // initForm(){
  //   this.formGroup=new FormGroup({
  //     UserName:new FormControl("",[Validators.required]),
  //     Password:new FormControl("",[Validators.required])
  //   })
  // }  


  loginProcess(form: NgForm){
    // if(this.formGroup.valid){
      this.obj.login().subscribe(result=>{
        this.resetForm(form);
        localStorage.setItem("token",result['Token']);
        if(result['Token'] != null){         
          alert("Login Successful");
        } else {
          alert("Login is unsuccessful");
        }
                
        this.router.navigate(['/'])
        
      });

    
  }

  


  //constructor(
    // private fb: FormBuilder,
    // private auth: AuthorizeService,
    // public http: HttpClient,
    // private router: Router
  //) {}

  // ngOnInit(): void {
  //   this.loginForm = this.fb.group({
  //     UserName: ['', Validators.required],
  //     Password: ['', Validators.required],
  //   });    
  // }

  // onLogin() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //     this.auth.logIn(this.loginForm.value).subscribe({
  //       next: (res) => {
  //         this.http.get<any>("http://localhost:14703/api/Users").subscribe(res => {
  //             const user=res.find((a:any)=>{
  //               return a.UserEmail=== this.loginForm.value.UserEmail && a.UserPassword===this.loginForm.value.UserPassword});
              
  //           })
  //         alert('Login Successful' + 'success');
  //         console.log(res.UserName);
  //         localStorage.setItem('UserId', res.UserName);
  //         console.log(localStorage.getItem('UserId'));
  //         this.loginForm.reset();
  //         this.auth.storeToken(res.token);
  //         this.router.navigate(['/category']);
  //       },
  //       error: (err) => {
  //         alert('Invalid Credentials' + alert);
  //       },
  //     });
  //   } else {
  //     alert('Unsuccessful!!');
  //   }
  // }


  // userLogin(data:any){
  //   console.warn(data)
  //   this.authService.login(data);
  // }
}