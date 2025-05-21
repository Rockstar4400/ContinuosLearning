import { Component } from '@angular/core';
import { Item } from './models/item';

import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ClickDirective } from './click.directive';
import { TargetEventComponent } from './components/target-event/target-event.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ItemDetailComponent, 
    ClickDirective, 
    TargetEventComponent,
  ],
})
export class AppComponent {
  mouseEventData: MouseEvent | null = null;
  currentItem = { name: 'teapot' };
  clickMessage = '';

  onSave(event: MouseEvent) {
    this.mouseEventData = event;
    const evtMsg = event
      ? ' Event target is ' + (event.target as HTMLElement).textContent
      : '';
    alert('Saved.' + evtMsg);
    if (event) {
      event.stopPropagation();
    }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target class is ' + (event.target as HTMLElement).className
      : '';
    alert('Click me.' + evtMsg);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
