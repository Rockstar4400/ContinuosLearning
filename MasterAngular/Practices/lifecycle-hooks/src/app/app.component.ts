import { Component } from '@angular/core';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { LoggerService } from './logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [PeekABooParentComponent],
  providers: [LoggerService]
})
export class AppComponent { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/