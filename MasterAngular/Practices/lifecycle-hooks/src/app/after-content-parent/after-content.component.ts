import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';

import { LoggerService }  from '../services/logger.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AfterContentComponent } from './after-content/after-content';

@Component({
  selector: 'app-child',
  template: '<input [(ngModel)]="hero">',
  imports: [FormsModule]
})
export class ChildComponent {
  hero = 'Magneta';
}

@Component({
  selector: 'after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService],
  imports: [ChildComponent, AfterContentComponent, CommonModule]
})
export class AfterContentParentComponent {
  show = true;

  constructor(public logger: LoggerService) {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/