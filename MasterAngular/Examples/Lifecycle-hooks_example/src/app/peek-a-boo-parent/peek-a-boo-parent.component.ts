import { Component } from '@angular/core';

import { LoggerService } from '../services/logger.service';
import { PeekABooComponent } from './peek-a-boo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styles: ['.parent {background: moccasin}'],
  imports: [PeekABooComponent, CommonModule],
  providers:  [ LoggerService ]
})
export class PeekABooParentComponent {

  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/