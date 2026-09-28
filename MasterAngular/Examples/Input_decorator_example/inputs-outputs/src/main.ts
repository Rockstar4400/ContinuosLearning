import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(), // essential for e2e testing
  ]
});

/* Helping source:

https://v17.angular.io/guide/inputs-outputs

*/
