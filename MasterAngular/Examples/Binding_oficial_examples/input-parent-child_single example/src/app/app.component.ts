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
  inputValue = ''
  handleInput(event: Event) {
    console.log('Input event from child:', event);
  }

  onInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value
    console.log('Input event from parent:', event);
  }
}
