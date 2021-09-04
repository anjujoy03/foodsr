import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { FoodComponent } from './food/food.component';
import { SpecialfoodComponent } from './specialfood/specialfood.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordianComponent } from './accordian/accordian.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CategoryComponent } from './category/category.component';
import { MatInputModule} from "@angular/material/input";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatSortModule} from "@angular/material/sort";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatTableModule} from "@angular/material/table";
import { HotheaderComponent } from './_layouts/hotheader/hotheader.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SitelayoutComponent } from './_layouts/sitelayout/sitelayout.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FoodstatusComponent } from './foodstatus/foodstatus.component';
import { HotelreportComponent } from './hotelreport/hotelreport.component';
import { ChartsModule } from 'ng2-charts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';





@NgModule({
  declarations: [
    FoodComponent,
    SpecialfoodComponent,
    OrderComponent,
    AccordianComponent,
    CategoryComponent,
    HomeComponent,
    FoodstatusComponent,
    HotelreportComponent,
    HotheaderComponent,
     SitelayoutComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    NgbModule,
    ChartsModule,
    MatSlideToggleModule
  ],
  exports: [
    MatToolbarModule,
  ]
})
export class HotelModule { }
