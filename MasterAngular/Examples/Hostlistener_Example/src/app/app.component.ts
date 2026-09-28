import { Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mouseEventData: MouseEvent | null = null;

  handleMouseClick(event: MouseEvent) {
    this.mouseEventData = event;
    console.log('Mouse event from child:', event);
  }
}
