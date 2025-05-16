/* tslint:disable:forin */
import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'do-check',
  templateUrl: './do-check.component.html',
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ],
  imports:[CommonModule]
})
export class DoCheckComponent implements DoCheck {
  @Input() hero: Hero = { name: ''};
  @Input() power: string = '';

  changeDetected = false;
  changeLog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;

  ngDoCheck() {

    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
        this.noChangeCount = 0;
    } else {
        // log that hook was called when there was no relevant change.
        let count = this.noChangeCount += 1;
        let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
        if (count === 1) {
          // add new "no change" message
          this.changeLog.push(noChangeMsg);
        } else {
          // update last "no change" message
          this.changeLog[this.changeLog.length - 1] = noChangeMsg;
        }
    }

    this.changeDetected = false;
  }

  reset() {
    this.changeDetected = true;
    this.changeLog = [];
  }
}

@Component({
  selector: 'do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styles: ['.parent {background: Lavender}'],
  imports: [DoCheckComponent, FormsModule]
})
export class DoCheckParentComponent {
  hero: Hero = { name: ''};
  power: string = '';
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView!: DoCheckComponent;

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/