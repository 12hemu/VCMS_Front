import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Policies } from 'src/app/model/policies.model';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  registerList: Policies[];
  registerData: Policies=new Policies();
  
 

  constructor(public objcHttp:HttpClient) { }
  registerUrl = "https://localhost:5001/api/PolicyDetails";

   
  getPolicies() { 
    this.objcHttp.get(this.registerUrl).toPromise().then(res => this.registerList = res as Policies[] )
  }

  postPolicies() {
    
    console.log(this.registerData)
    return this.objcHttp.post(this.registerUrl, this.registerData);
  }

  putPolicies() {
    return this.objcHttp.put(this.registerUrl + "/" + this.registerData.PolicyId, this.registerData)
  }

  delPolicies(PolicyId) {
    return this.objcHttp.delete(this.registerUrl + "/" + PolicyId);
  }
  // updateRecord(form:NgForm)
  // {

  //   this.putPolicies().subscribe(res=>
  //   {
  //     // this.resetForm();
  //     this.registerList;
  //     alert('Plan record Updated!!!');
  //   },
  //   err=>{alert('Error!!!'+err);}
  //   )
  // }
  // navigate(): void{
  //   this.router.navigate(['/delete'])
  }


