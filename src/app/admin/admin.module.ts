import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { from } from 'rxjs';
import { HotelsComponent } from './hotels/hotels.component';
import { AddsComponent } from './adds/adds.component';
import { PreminmComponent } from './preminm/preminm.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomersComponent } from './customers/customers.component';
import { MorereportComponent } from './morereport/morereport.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthInterceptorService} from '../_services/auth-interceptor.service';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AccordianComponent } from './accordian/accordian.component'


@NgModule({
  declarations: [  HotelsComponent, AddsComponent, PreminmComponent, ReportsComponent, CustomersComponent, MorereportComponent,  AccordianComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatListModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
],
})
export class AdminModule { }
