import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  handleInput(event: Event) {
    console.log('Input event from child:', event);
  }

  onInput(event: Event) {
    console.log('Input event from parent:', event);
  }
}
