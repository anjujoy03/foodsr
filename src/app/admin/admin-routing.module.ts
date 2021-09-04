import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AccordianComponent } from './accordian/accordian.component';
import { AddsComponent } from './adds/adds.component';
import { CustomersComponent } from './customers/customers.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MorereportComponent } from './morereport/morereport.component';
import { PreminmComponent } from './preminm/preminm.component';
import { ReportsComponent } from './reports/reports.component';




const routes: Routes = [

 
  {
    path:'customer',
    component:CustomersComponent
  },
  {
    path:'morereport',
    component:MorereportComponent
  },
  {
    path:'hotels',
    component:HotelsComponent
  },
  {
    path:'adds',
    component:AddsComponent
  },
  {
    path:'premium',
    component:PreminmComponent
  },
  {
    path:'report',
    component:ReportsComponent
  },
  {
    path:'aaccordian',
    component:AccordianComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
