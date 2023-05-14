import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { ClaimsComponent } from './claims/claims.component';
import { RegisterClaimComponent } from './register-claim/register-claim.component';
import { RegisterPolicyComponent } from './policy/register-policy/register-policy.component';
import { RegisterVehiclesComponent } from './register-vehicles/register-vehicles.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RegisterInsuranceCompaniesComponent } from './register-insurance-companies/register-insurance-companies.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent, canActivate:[AuthGuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userdetails',component:UserDetailsComponent},
  {path:'registerpolicy',component:RegisterPolicyComponent, canActivate:[AuthGuardGuard]},
  {path:'policy',component:PolicyComponent, canActivate:[AuthGuardGuard]},
  {path:'registerclaim',component:RegisterClaimComponent},
  {path:'claims',component:ClaimsComponent},
  {path:'registervehicles',component:RegisterVehiclesComponent},
  {path:'vehicles',component:VehiclesComponent, canActivate:[AuthGuardGuard]},
  {path:'registerinsurancecompanies',component:RegisterInsuranceCompaniesComponent},
  {path:'insurancecompanies',component:InsuranceCompaniesComponent, canActivate:[AuthGuardGuard]},
  {path:'adminlogin',component:AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
