import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddtrainerComponent } from './addtrainer/addtrainer.component';
import { TeatComponent } from './teat/teat.component';
import { AddenquiryComponent } from './addenquiry/addenquiry.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentDashComponent,
    LoginComponent,
    SignupComponent,
    AddmemberComponent,
    HomepageComponent,
    AddtrainerComponent,
    TeatComponent,
    AddenquiryComponent,
    AboutusComponent,
    ContactusComponent,
    PaymentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
