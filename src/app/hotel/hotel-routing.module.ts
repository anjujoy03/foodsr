import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { FoodComponent } from './food/food.component';
import { OrderComponent } from './order/order.component';
import { SpecialfoodComponent } from './specialfood/specialfood.component';
import { CategoryComponent } from './category/category.component';
import { HotheaderComponent } from './_layouts/hotheader/hotheader.component';
import { SitelayoutComponent } from './_layouts/sitelayout/sitelayout.component';
import { HomeComponent } from './home/home.component';
import { FoodstatusComponent } from './foodstatus/foodstatus.component';
import { HotelreportComponent } from './hotelreport/hotelreport.component';

const routes: Routes = [
  {
    path:'',
    component:SitelayoutComponent
    
  },

  {
    path:'food',
    component:FoodComponent
  },
  {
    path:'specialfood',
    component:SpecialfoodComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'hotheader',
    component:HotheaderComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'foodstatus',
    component:FoodstatusComponent
  },
  {
    path:'HOTELREPORT',
    component:HotelreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
