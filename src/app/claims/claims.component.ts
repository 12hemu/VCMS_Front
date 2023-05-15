import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClaimsService } from 'src/shared/claims.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  constructor(public obj: ClaimsService) {}

  ngOnInit() {this.obj.getClaims();}
  
    
  

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.claimData = {
        ClaimId: 0,
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
      };
    }
  }
  fillform(selectedPP)
  {
    this.obj.claimData= Object.assign({},selectedPP);
  }

  
  
  

  del(ClaimId) {
    if (confirm('Do you want to delete the policy ?')) {
      this.obj.delClaims(ClaimId).subscribe(
        (res) => {
          this.obj.getClaims();

          alert('Claim Rejected!!!');
        },

        (err) => alert('Errror!!!' + err)
      );
    }
  }
  accept()

  {

    this.obj.postClaims().subscribe(res => {

      this.obj.getClaims();

      alert("Accepted!!!")

    },

    err => {

      alert("Not Inserted"+err)

    })

   

  }
  // insertRecord(form:NgForm)
  //   {
  //     this.obj.postClaims().subscribe(res=>
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
