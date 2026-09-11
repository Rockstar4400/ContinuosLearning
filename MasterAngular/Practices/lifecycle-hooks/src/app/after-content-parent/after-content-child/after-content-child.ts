import { Component } from '@angular/core';

import {  }  from '../../services/logger.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: '<input [(ngModel)]="hero">',
  imports: [FormsModule]
})
export class ChildComponent {
  hero = 'Magneta';
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/