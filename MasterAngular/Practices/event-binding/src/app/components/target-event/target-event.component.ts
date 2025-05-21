import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'target-event',
  imports: [],
  templateUrl: './target-event.component.html',
  styleUrl: './target-event.component.css'
})
export class TargetEventComponent {
  @Output() saveRequest = new EventEmitter<MouseEvent>();

  save(event?: MouseEvent){
    this.saveRequest.emit(event);
  }
}
