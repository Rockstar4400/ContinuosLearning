import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'event-handling',
  imports: [],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {
  @Input() item!: Item;

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
