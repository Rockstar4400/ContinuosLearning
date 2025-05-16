import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';

import { LoggerService }  from '../services/logger.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//////////////////
@Component({
  selector: 'app-child',
  template: '<input [(ngModel)]="hero">',
  imports: [FormsModule]
})
export class ChildComponent {
  hero = 'Magneta';
}

//////////////////////
@Component({
  selector: 'after-content',
  templateUrl: './after-content.component.html',
  imports: [CommonModule]
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
  // ...
}

//////////////
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