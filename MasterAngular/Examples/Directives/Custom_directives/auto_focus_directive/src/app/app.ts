import { Component, signal } from '@angular/core';
import { LoginComponent } from './components/login.component';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [LoginComponent],
})
export class App {
  protected readonly title = signal('auto_focus_directive');
}
