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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'registerpolicy',component:RegisterPolicyComponent},
  {path:'policy',component:PolicyComponent},
  {path:'registerclaim',component:RegisterClaimComponent},
  {path:'claims',component:ClaimsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
