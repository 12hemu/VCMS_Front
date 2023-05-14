import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InsurancecompaniesService } from '../shared/insurancecompanies.service';

@Component({
  selector: 'app-register-insurance-companies',
  templateUrl: './register-insurance-companies.component.html',
  styleUrls: ['./register-insurance-companies.component.css']
})
export class RegisterInsuranceCompaniesComponent implements OnInit {

  

  constructor(public obj: InsurancecompaniesService, private router: RouterModule) {}

  ngOnInit():void  {    
    this.obj.getCompany();    
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.registerData = {
        CompanyId:0,
     CompanyName:'',
    CompanyContact:'',
     CompanyAddress:''

        
      };
    }
  }

  onSubmit(form: NgForm) {
    if (this.obj.registerData.CompanyId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.obj.postCompany().subscribe(
      (res) => {
        this.resetForm(form);

        this.obj.getCompany();

        alert('Company Registration Success!!!');
      },

      (err) => {
        console.log(err);

        alert( err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.obj.putCompany().subscribe(
      (res) => {
        this.resetForm();

        this.obj.getCompany();

        alert('Company record Updated!!!');
      },

      (err) => {
        alert('Error!!!' + err);
      }
    );
  }
  del(CompanyId) {
    if (confirm('Do you want to delete the policy ?')) {
      this.obj.delCompany(CompanyId).subscribe(
        (res) => {
          this.obj.getCompany();

          alert('Company Details Deleted!!!');
        },

        (err) => alert('Errror!!!' + err)
      );
    }
  }

}
