import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() inputHandler!: (event: Event) => void;
  
  onInputChange(event: Event) {
    this.inputHandler(event);
  }
}
