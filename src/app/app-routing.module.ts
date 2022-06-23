import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CompanyPageComponent } from './company-page/company-page.component'
import { TermsConditionsPageComponent } from "./terms-conditions-page/terms-conditions-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyPageComponent },
  { path: 'terms_and_conditions', component: TermsConditionsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
