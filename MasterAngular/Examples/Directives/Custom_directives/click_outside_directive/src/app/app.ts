import { Component, signal } from '@angular/core';
import { DropdownComponent } from './components/dropdown.component';

@Component({
  imports: [DropdownComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('click_outside_directive');
}
