import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Item } from '../../models/item';

@Component({
  standalone: true,
  selector: 'item-detail',
  styleUrls: ['./item-detail.component.css'],
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent {
  @Output() deleteRequest = new EventEmitter<Item>();
  @Input() item!: Item;
  @Input() prefix = '';
  itemImageUrl = 'assets/teapot.svg';
  lineThrough = '';
  displayNone = '';

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
