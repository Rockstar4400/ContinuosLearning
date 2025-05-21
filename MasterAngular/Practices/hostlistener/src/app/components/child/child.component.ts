import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() mouseClicked = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event'])
  onMouseClick(event: MouseEvent) {
    this.mouseClicked.emit(event);
  }
}
