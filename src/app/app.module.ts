import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

import { environment } from '../environments/environment';
import { FootbarMobileComponent } from './footbar-mobile/footbar-mobile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StudyComponent } from './study/study.component';
import {AdminModule} from './admin/admin.module';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './_services/auth-interceptor.service';
import { ProgressComponent } from './progress/progress.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule ,SwRegistrationOptions} from '@angular/service-worker';
import {HotelModule}  from './hotel/hotel.module';
import{UserModule} from './user/user.module';
import {DataserviceService} from './dataservice.service';






@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FootbarMobileComponent,
    LoginComponent,
    StudyComponent,
    AdminloginComponent,
    ProgressComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    HotelModule,
    UserModule,

    NgbModule,
    ServiceWorkerModule.register('~service-worker.js'),
      // ServiceWorkerModule.register('ngsw-worker.js', {
      //   enabled: environment.production,
      //   // Register the ServiceWorker as soon as the app is stable
      //   // or after 30 seconds (whichever comes first).
      //   registrationStrategy: 'registerWhenStable:30000'
      // })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true ,}
    ,
    DataserviceService,
    {
    provide: SwRegistrationOptions,
    useFactory: () => ({ enabled: environment.production }),
  },

],
  bootstrap: [AppComponent],
  exports:[FootbarMobileComponent]

})
export class AppModule { }
