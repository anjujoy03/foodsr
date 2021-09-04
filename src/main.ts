import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('/ngsw-worker.js');
  }
}).catch(err => console.log(err));

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//     .then(function(registration) {
//         console.log("Service Worker Registered", registration);
//     })
//     .catch(function(err) {
//         console.log("Service Worker Failed to Register", err);
//     })
// }
