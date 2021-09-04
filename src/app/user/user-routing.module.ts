import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {BlogComponent} from './blog/blog.component'
import { FoodlistComponent } from './foodlist/foodlist.component';
import { CartComponent } from './cart/cart.component';
import { ScannerComponent } from './scanner/scanner.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'restaurant',
    component:RestaurantComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'foodlist',
    component:FoodlistComponent
  }
  ,
  {
    path:'foodlist/:id',
    component:FoodlistComponent
  }
  ,
  {
    path:'scaner',
    component:ScannerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
