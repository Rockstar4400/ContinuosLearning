import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoggerService }  from '../services/logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spy-parent',
  templateUrl: './spy.component.html',
  styles: [
     '.parent {background: khaki;}',
     '.heroes {background: LightYellow; padding: 0 8px}'
  ],
  imports: [FormsModule, CommonModule],
  providers:  [LoggerService]
})
export class SpyParentComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- reset --');
    this.heroes = [];
    this.logger.tick();
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/