import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/shared/signup.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(public obj: SignupService) {}

  ngOnInit() {
  
    this.obj.getUsers();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.registerData = {
        UserId:0 ,
      UserName:'',
      UserPassword:'',
      UserAge:'',
      UserAddress:'',
      UserState:'',
      UserCountry:'',
      UserEmail:'',
      UserContact:'',
      LicenceNo:'', 

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
  

  del(UserId) {
    if (confirm('Do you want to delete the User ?')) {
      this.obj.delUsers(UserId).subscribe(
        (res) => {
          this.obj.getUsers();

          alert('User Deleted!!!');
        },

        (err) => alert('Errror!!!' + err)
      );
    }
  }
  updateRecord(form: NgForm) {
    this.obj.putUsers().subscribe(
      (res) => {
        this.resetForm();

        this.obj.getUsers();

        alert('User record Updated!!!');
      },

      (err) => {
        alert('Error!!!' + err);
      }
    );
  }
  
}
