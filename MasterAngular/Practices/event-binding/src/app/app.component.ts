import { Component } from '@angular/core';
import { Item } from './models/item';

import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ClickDirective } from './directives/click.directive';
import { TargetEventComponent } from './components/target-event/target-event.component';
import { ClickEventComponent } from './components/click-event/click-event.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ItemDetailComponent, 
    ClickDirective, 
    TargetEventComponent,
    ClickEventComponent
  ],
})
export class AppComponent {
  // Instantiation
  mouseEventData: MouseEvent | null = null;
  mouseEventClick: MouseEvent | null = null;
  currentItem = { name: 'teapot' };
  clickMessage = '';

  onSave(event: MouseEvent) {
    // Equalizing to the parameter
    this.mouseEventData = event;

    const evtMsg = event ? ' Event target is ' + 
    (event.target as HTMLElement).textContent : '';

    alert('Saved.' + evtMsg);

    if (event) {
      event.stopPropagation();
    }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event: MouseEvent) {
    // Equalizing to the parameter
    this.mouseEventClick = event;

    const evtMsg = event
      ? ' Event target class is ' + 
      (event.target as HTMLElement).className : '';
    alert('Click me.' + evtMsg);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
