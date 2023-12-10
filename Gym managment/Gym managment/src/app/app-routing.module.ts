import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddtrainerComponent } from './addtrainer/addtrainer.component';
import { TeatComponent } from './teat/teat.component';
import { AddenquiryComponent } from './addenquiry/addenquiry.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  },
  {
   path: 'login', component: LoginComponent 
  },
 {
   path: 'signup', component: SignupComponent 
 }, 
 {
  path:'home' , component: HomepageComponent
},
 {
  path:'addmember' , component: AddmemberComponent
},
{
  path:'addtrainer' , component: AddtrainerComponent
},
{
  path:'addenquiry' , component: AddenquiryComponent
},
{
  path:'aboutus' , component: AboutusComponent
},
{
  path:'contactus' , component: ContactusComponent
},
{
  path:'payment' , component: PaymentComponent
},

{
  path:'test' , component: TeatComponent
},
{
  path:'restaurent' , component: RestaurentDashComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
