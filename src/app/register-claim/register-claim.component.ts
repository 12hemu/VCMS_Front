import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClaimsService } from 'src/shared/claims.service';

@Component({
  selector: 'app-register-claim',
  templateUrl: './register-claim.component.html',
  styleUrls: ['./register-claim.component.css']
})
export class RegisterClaimComponent implements OnInit {

  constructor( public obj:ClaimsService,private router: RouterModule) { }  

  ngOnInit():void {this.resetForm() 

  } 

 
 

  resetForm(form?:NgForm){ 

    if(form!=null){ 

      form.form.reset(); 

    } 

    else{ 

      this.obj.claimData={ClaimId:0, 
        VehicleBill:'',

        DriverLicenseNo:'', 

        ClaimDocuments:'', 

        ClaimReason:'', 

       

        ClaimAmount:'', 

        BankBranch:'', 

        BankName:'', 

        BankAccountNo:'', 

        IfscCode:'', 

        ClaimStatus:'', 

       UserId:'', 

        PolicyId:'', 

      

    } 

  } 

} 

 
 

  onSubmit(form:NgForm) 

  { 

    this.obj.postClaims().subscribe(res => { 

      this.obj.getClaims(); 

      alert("Inserted Successfully!!!") 

    }, 

    err => { 

      alert("Not Inserted"+err) 

    }) } 
    
  // fillform(selectedPP)
  // {
  //   this.obj.claimData= Object.assign({},selectedPP);
  // }
  // insertRecord(form:NgForm)
  //   {
  //     this.obj.().subscribe(res=>
  //       {
  //         this.resetForm(form);
  //         this.obj.claimList;
  //         alert('Policy Registration Success!!!');
  //       },
  //       err=>{
  //         console.log(err);

  //         alert('Error!!!'+err);})
  //   }
  // updateRecord(form:NgForm)
  //   {

  //     this.obj.putClaims().subscribe(res=>
  //     {
  //       this.resetForm();
  //       this.obj.claimList;
  //       alert('Claims record Updated!!!');
  //     },
  //     err=>{alert('Error!!!'+err);}
  //     )
  //   }
}
