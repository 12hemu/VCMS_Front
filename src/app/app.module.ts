import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './claims/claims.component';
import { PolicyComponent } from './policy/policy.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterClaimComponent } from './register-claim/register-claim.component';
import { RegisterPolicyComponent } from './policy/register-policy/register-policy.component';
import { RegisterVehiclesComponent } from './register-vehicles/register-vehicles.component';
import { RegisterInsuranceCompaniesComponent } from './register-insurance-companies/register-insurance-companies.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavComponent,
    LoginComponent,
    AdminLoginComponent,
    HomeComponent,
    ClaimsComponent,
    PolicyComponent,
    InsuranceCompaniesComponent,
    VehiclesComponent,
    ContactComponent,
    RegisterPolicyComponent,
    AboutComponent,
    RegisterClaimComponent,
    RegisterVehiclesComponent,
    RegisterInsuranceCompaniesComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
