import {
  Component, Input,
  OnChanges, SimpleChanges,
} from '@angular/core';

import { LoggerService }  from '../services/logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}'],
  imports: [CommonModule]
})
export class MyCounterComponent implements OnChanges {
  @Input() counter: number = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {

    // Empty the changeLog whenever counter goes to zero
    // hint: this is a way to respond programmatically to external value changes.
    if (this.counter === 0) {
      this.changeLog = [];
    }

    // A change to `counter` is the only change we care about
    let chng = changes['counter'];
    let cur = chng.currentValue;
    let prev = JSON.stringify(chng.previousValue); // first time is {}; after is integer
    this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }
}

@Component({
  selector: 'counter-parent',
  templateUrl: './counter-parent.component.html',
  styles: ['.parent {background: gold;}'],
  providers: [LoggerService],
  imports: [MyCounterComponent, CommonModule]
})
export class CounterParentComponent {
  value: number = 0;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.value = 0;
    this.logger.tick();
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/