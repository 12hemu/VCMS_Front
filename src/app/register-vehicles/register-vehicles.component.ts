import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleService } from 'src/shared/vehicle.service';

@Component({
  selector: 'app-register-vehicles',
  templateUrl: './register-vehicles.component.html',
  styleUrls: ['./register-vehicles.component.css']
})
export class RegisterVehiclesComponent implements OnInit {

  constructor( public obj:VehicleService,private router: RouterModule) { }  

  ngOnInit():void {this.resetForm() 

  } 

 
 

  resetForm(form?:NgForm){ 

    if(form!=null){ 

      form.form.reset(); 

    } 

    else{ 

      this.obj.vehicleData={
        VehicleId:0,
        VehicleType:'',
         VehicleModel:'',
         VehicleNo:'',
         
         VehiclePurchasedDate:'yyyy-MM-dd', 
         VehiclePrice:0.0,
         FuelType:'',
        UserId :0
      

    } 

  } 

}

onSubmit(form: NgForm) {
  if (this.obj.vehicleData.VehicleId == 0) {
    this.insertRecord(form);
  } else {
    this.updateRecord(form);
  }
} 

  insertRecord(form:NgForm) 
 { 
    this.obj.postVehicle().subscribe(res => { 

      this.obj.getVehicle(); 

      alert("Inserted Successfully!!!") 

    }, 

    err => { 

      alert("Not Inserted"+err) 

    })
   } 
    updateRecord(form: NgForm) {
      this.obj.putVehicle().subscribe(
        (res) => {
          this.resetForm();
  
          this.obj.getVehicle();
  
          alert('Vehicle record Updated!!!');
        },
  
        (err) => {
          alert('Error!!!' + err);
        }
      );
    }

}
