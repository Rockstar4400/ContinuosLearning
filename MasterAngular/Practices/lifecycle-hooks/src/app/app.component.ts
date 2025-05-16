import { Component } from '@angular/core';
import { PeekABooParentComponent } from '../app/peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyParentComponent } from '../app/sky-component/spy.component';
import { LoggerService } from '../app/services/logger.service';
import { OnChangesParentComponent } from './on-change-parent/on-changes-parent.component';
import { DoCheckParentComponent } from './do-check-parent/do-check.component';
import { AfterViewParentComponent } from '../app/after-view-parent/after-view.component';
import { AfterContentParentComponent } from '../app/after-content-parent/after-content.component';
import { CounterParentComponent } from './counter-parent/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    PeekABooParentComponent,
    SpyParentComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
    AfterViewParentComponent,
    AfterContentParentComponent,
    CounterParentComponent
  ],
  providers: [LoggerService],
})
export class AppComponent {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/