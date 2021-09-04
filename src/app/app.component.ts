import { ApplicationRef, Component, Injectable,OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { interval,Observable } from 'rxjs';
import {DataserviceService} from './dataservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restaurant';
  constructor(private data:DataserviceService,private applicationRef:ApplicationRef){
     
      // this.updateClient();
      // this.checkUpdate();
  }


  ngOnInit() {
     this.data.checkForUpdates();
         this.applicationRef.isStable.subscribe((s) => { // #1
      if (s) { // #2
        setInterval((t:any)=> { console.log('Ping')}, 500);
      } // #3
    });

    this.applicationRef.isStable.subscribe(t => {
      console.log('App stable: ' + t);
    // this.pushSubscription();
  });
  }
  // checkUpdate() {
  //   this.appRef.isStable.subscribe((isStable) => {
  //     if (isStable) {
  //       const timeInterval = interval(8 * 60 * 60 * 1000);

  //       timeInterval.subscribe(() => {
  //         this.update.checkForUpdate().then(() => console.log('checked'));
  //         console.log('update checked');
  //       });
  //     }
  //   });
  // }

  // updateClient() {
  //   if (!this.update.isEnabled) {
  //     console.log('Not Enabled');
  //     return;
  //   }
  //   this.update.available.subscribe((event) => {
  //     console.log(`current`, event.current, `available `, event.available);
  //     if (confirm('update available for the app please conform')) {
  //       this.update.activateUpdate().then(() => location.reload());
  //     }
  //   });

  //   this.update.activated.subscribe((event) => {
  //     console.log(`current`, event.previous, `available `, event.current);
  //   });
  // }

  // pushSubscription() {
  //   if (!this.swPush.isEnabled) {
  //     console.log('Notification is not enabled');
  //     return;
  //   }

   
  // }
}

