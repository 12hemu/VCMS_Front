import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicles } from 'src/app/model/vehicles.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  registerUrl = "https://localhost:5001/api/VehicleDetails";

  constructor(public objcHttp:HttpClient) { }

  vehicleList: Vehicles[];
  vehicleData: Vehicles=new Vehicles();
  


  getVehicle() { 
    this.objcHttp.get(this.registerUrl).toPromise().then(res => this.vehicleList = res as Vehicles[] )
  }

  postVehicle() {
    
    console.log(this.vehicleData)
    return this.objcHttp.post(this.registerUrl, this.vehicleData);
  }

  putVehicle() {
    return this.objcHttp.put(this.registerUrl + "/" + this.vehicleData.VehicleId, this.vehicleData)
  }

  delVehicle(VehicleId) {
    return this.objcHttp.delete(this.registerUrl + "/" + VehicleId);
  }
}
