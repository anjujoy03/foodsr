import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  updateSubscription:any;

   constructor(public updates: SwUpdate) {
    }

    public checkForUpdates(): void {
        this.updateSubscription = this.updates.available.subscribe(event => this.promptUser());

        if (this.updates.isEnabled) {
            // Required to enable updates on Windows and ios.
            this.updates.activateUpdate();

            interval(60 * 60 * 1000).subscribe(() => {
                this.updates.checkForUpdate().then(() => {
                    // console.log('checking for updates');
                });
            });

        }

        // Important: on Safari (ios) Heroku doesn't auto redirect links to their https which allows the installation of the pwa like usual
        // but it deactivates the swUpdate. So make sure to open your pwa on safari like so: https://example.com then (install/add to home)
    }

    promptUser(): void {
        this.updates.activateUpdate().then(() => {
            window.location.reload();
        });
    }
}
