import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claims } from 'src/app/model/claims.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  registerUrl = "https://localhost:5001/api/ClaimDetails";

  constructor(public objcHttp:HttpClient) { }

  claimList: Claims[];
  claimData: Claims=new Claims();
  


  getClaims() { 
    this.objcHttp.get(this.registerUrl).toPromise().then(res => this.claimList = res as Claims[] )
  }

  postClaims() {
    
    console.log(this.claimData)
    return this.objcHttp.post(this.registerUrl, this.claimData);
  }

  putClaims() {
    return this.objcHttp.put(this.registerUrl + "/" + this.claimData.UserId, this.claimData)
  }

  delClaims(ClaimId) {
    return this.objcHttp.delete(this.registerUrl + "/" + ClaimId);
  }
}
