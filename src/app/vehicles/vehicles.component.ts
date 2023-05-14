import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/shared/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(public obj: VehicleService) {}

  ngOnInit() {
  
    this.obj.getVehicle();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    } else {
      this.obj.vehicleData = {
        VehicleId:0,
        VehicleType:'',
         VehicleModel:'',
         VehicleNo:'',
         
         VehiclePurchasedDate:'yyyy-mm-dd', 
         VehiclePrice:0.0,
         FuelType:'',
        UserId :0
        
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
this.obj.vehicleData=Object.assign({},selected);
}
  

  del(VehicleId) {
    if (confirm('Do you want to delete the vehicle ?')) {
      this.obj.delVehicle(VehicleId).subscribe(
        (res) => {
          this.obj.getVehicle();

          alert('Vehicle Deleted!!!');
        },

        (err) => alert('Errror!!!' + err)
      );
    }
  }
  
}
