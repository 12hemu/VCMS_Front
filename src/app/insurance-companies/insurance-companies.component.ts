import { Component, OnInit } from '@angular/core';
import { InsurancecompaniesService } from '../shared/insurancecompanies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.css']
})
export class InsuranceCompaniesComponent implements OnInit {

  constructor(public obj: InsurancecompaniesService) {}

  ngOnInit() {
  
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
  

  del(Companyd) {
    if (confirm('Do you want to delete the company ?')) {
      this.obj.delCompany(Companyd).subscribe(
        (res) => {
          this.obj.getCompany();

          alert('Company Deleted!!!');
        },

        (err) => alert('Errror!!!' + err)
      );
    }
  }

}
