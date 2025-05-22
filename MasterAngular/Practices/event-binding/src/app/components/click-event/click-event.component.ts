import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'click-event',
  imports: [],
  templateUrl: './click-event.component.html',
  styleUrl: './click-event.component.css'
})
export class ClickEventComponent {
  @Output() clickRequest = new EventEmitter<MouseEvent>();

  click(event?: MouseEvent){
    this.clickRequest.emit(event);
  }
}
