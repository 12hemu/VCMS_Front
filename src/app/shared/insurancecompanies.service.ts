import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InsuranceCompanies } from '../model/insurance-companies.model';

@Injectable({
  providedIn: 'root'
})
export class InsurancecompaniesService {

  registerList: InsuranceCompanies[];
  registerData: InsuranceCompanies=new InsuranceCompanies();
  
 

  constructor(public objcHttp:HttpClient) { }
  registerUrl = "https://localhost:5001/api/InsuranceCompanyDetails";

  


  getCompany() { 
    this.objcHttp.get(this.registerUrl).toPromise().then(res => this.registerList = res as InsuranceCompanies[] )
  }

  postCompany() {
    
    console.log(this.registerData)
    return this.objcHttp.post(this.registerUrl, this.registerData);
  }

  putCompany() {
    return this.objcHttp.put(this.registerUrl + "/" + this.registerData.CompanyId, this.registerData)
  }

  delCompany(CompanyId) {
    return this.objcHttp.delete(this.registerUrl + "/" + CompanyId);
  }
}
