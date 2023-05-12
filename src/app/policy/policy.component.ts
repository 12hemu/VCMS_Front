import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoliciesService } from 'src/shared/policies.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent implements OnInit {
  constructor(public obj: PoliciesService) {}

  ngOnInit() {
  
    this.obj.getPolicies();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.registerData = {
        PolicyId: '',
        PolicyName: '',
        PolicyAmount: '',
        StartDate: '',
        ExpiryDate: '',
        VehicleId: '',
        CompanyId: ''
      };
    }
  }

  // onSubmit(form: NgForm) {
  //   this.obj.postPolicies().subscribe(
  //     (res) => {
  //       this.obj.getPolicies();

  //       alert('Inserted Successfully!!!');
  //     },

  //     (err) => {
  //       alert('Not Inserted' + err);
  //     }
  //   );
  // }
  fillform(selected) {
this.obj.registerData=Object.assign({},selected);
}
  

  del(PolicyId) {
    if (confirm('Do you want to delete the policy ?')) {
      this.obj.delPolicies(PolicyId).subscribe(
        (res) => {
          this.obj.getPolicies();

          alert('Policy Deleted!!!');
        },

        (err) => alert('Errror!!!' + err)
      );
    }
  }
  // insertRecord(form:NgForm)
  //   {
  //     this.obj.postPolicies().subscribe(res=>
  //       {
  //         this.resetForm(form);
  //         this.obj.registerList;
  //         alert('Policy Registration Success!!!');
  //       },
  //       err=>{
  //         console.log(err);

  //         alert('Error!!!'+err);})
  //   }
  // updateRecord(form:NgForm)
  //   {

  //     this.obj.putPolicies().subscribe(res=>
  //     {
  //       this.resetForm();
  //       this.obj.registerList;
  //       alert('Policy record Updated!!!');
  //     },
  //     err=>{alert('Error!!!'+err);}
  //     )
  //   }
}
