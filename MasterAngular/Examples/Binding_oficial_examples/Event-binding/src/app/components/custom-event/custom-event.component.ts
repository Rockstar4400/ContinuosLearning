import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Item } from '../../models/item';

@Component({
  standalone: true,
  selector: 'custom-event',
  styleUrls: ['./custom-event.component.css'],
  templateUrl: './custom-event.component.html',
})
export class CustomEventComponent {
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
