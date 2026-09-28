import { Component } from '@angular/core';
import { Item } from './models/item';

import { CustomEventComponent } from './components/custom-event/custom-event.component';
import { TargetEventComponent } from './components/target-event/target-event.component';
import { ClickEventComponent } from './components/click-event/click-event.component';
import { EventDirectiveComponent } from './components/event-directive/event-directive.component';
import { EventHandlingComponent } from './components/event-handling/event-handling.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CustomEventComponent, 
    TargetEventComponent,
    ClickEventComponent,
    EventDirectiveComponent,
    EventHandlingComponent
  ],
})
export class AppComponent {
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

  onClickMe(event: MouseEvent) {
    // Equalizing to the parameter
    this.mouseEventClick = event;

    const evtMsg = event
      ? ' Event target class is ' + 
      (event.target as HTMLElement).className : '';
    alert('Click me.' + evtMsg);
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
