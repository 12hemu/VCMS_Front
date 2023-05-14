import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoliciesService } from 'src/shared/policies.service';

@Component({
  selector: 'app-register-policy',
  templateUrl: './register-policy.component.html',
  styleUrls: ['./register-policy.component.css']
})
export class RegisterPolicyComponent implements OnInit {
  policiesService: any;

  constructor(public obj: PoliciesService, private router: RouterModule) {}

  ngOnInit():void  {    
    this.obj.getPolicies();    
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.registerData = {
        PolicyId: 0,
        PolicyName: '',
        PolicyAmount: '',        
        StartDate: '2023-05-05T00:00:00',
        ExpiryDate: '2023-05-05T00:00:00',
        VehicleId: 0,
        CompanyId: 0,
      };
    }
  }

  onSubmit(form: NgForm) {
    if (this.obj.registerData.PolicyId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.obj.postPolicies().subscribe(
      (res) => {
        this.resetForm(form);

        this.obj.getPolicies();

        alert('Plan Registration Success!!!');
      },

      (err) => {
        console.log(err);

        alert( err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.obj.putPolicies().subscribe(
      (res) => {
        this.resetForm();

        this.obj.getPolicies();

        alert('Plan record Updated!!!');
      },

      (err) => {
        alert('Error!!!' + err);
      }
    );
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

  
}
