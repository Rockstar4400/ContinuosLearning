import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';

import { LoggerService }  from '../services/logger.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//////////////////
@Component({
  selector: 'app-child-view',
  templateUrl: '../after-content-parent/app-child-view.html',
  imports: [FormsModule]
})
export class ChildViewComponent {
  hero = 'Magneta';
}

//////////////////////
@Component({
  selector: 'after-view',
  templateUrl: './after-view.component.html',
  imports: [CommonModule, FormsModule,ChildViewComponent]
})
export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
  private prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  comment = '';

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
  // ...
}

//////////////
@Component({
  selector: 'after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService],
  imports: [AfterViewComponent, CommonModule]
})
export class AfterViewParentComponent {
  show = true;

  constructor(public logger: LoggerService) {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/