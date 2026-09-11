import { Component } from '@angular/core';
import { PeekABooParentComponent } from '../app/peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyParentComponent } from '../app/sky-component/spy.component';
import { LoggerService } from '../app/services/logger.service';
import { OnChangesParentComponent } from './on-change-parent/on-changes-parent.component';
import { DoCheckParentComponent } from './do-check-parent/do-check.component';
import { CounterParentComponent } from './counter-parent/counter.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    PeekABooParentComponent,
    SpyParentComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
    AfterContentParentComponent,
    CounterParentComponent,
    AfterViewParentComponent
  ],
  providers: [LoggerService],
})
export class AppComponent {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/