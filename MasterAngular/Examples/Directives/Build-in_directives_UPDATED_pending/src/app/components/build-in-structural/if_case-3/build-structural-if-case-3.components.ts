import { Component, Input } from '@angular/core';
import { Item } from '../../../models/item';

@Component({
  imports: [],
  selector: 'build-structural-if-case-3',
  styleUrl: './build-structural-if-case-3.components.css',
  templateUrl: './build-structural-if-case-3.components.html',
})
export class BuildStructuralIfCase3 {
  @Input() ChildcurrentItem!: Item;
}
