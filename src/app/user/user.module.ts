import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import {RestaurantComponent} from './restaurant/restaurant.component'
import { from } from 'rxjs';
import { BlogComponent } from './blog/blog.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SnackBarService} from '../snack-bar.service';
import { ScannerComponent } from './scanner/scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { environment } from 'src/environments/environment';






@NgModule({
  declarations: [
    HomeComponent,
    RestaurantComponent,
    BlogComponent,
    FoodlistComponent,
    CartComponent,
    ScannerComponent
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatSnackBarModule,
    ZXingScannerModule,
  
  
  ],
  exports: [RouterModule],
  providers:[SnackBarService]
 
})
export class UserModule { }
