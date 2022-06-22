import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CompanyPageComponent } from './company-page/company-page.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
