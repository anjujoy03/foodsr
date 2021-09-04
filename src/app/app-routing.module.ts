import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyComponent } from './study/study.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProgressComponent } from './progress/progress.component';





const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },

  {
    path: 'study',
    component:StudyComponent

  },
 
  {
    path:'user',
    loadChildren:() => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'hotel',
    loadChildren:() => import('./hotel/hotel.module').then(m => m.HotelModule)
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
    
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'progress',
    component:ProgressComponent
  },


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
