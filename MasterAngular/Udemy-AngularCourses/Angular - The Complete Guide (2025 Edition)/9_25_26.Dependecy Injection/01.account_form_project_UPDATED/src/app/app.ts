import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountComponent } from './components/account/account.component';

@Component({
  imports: [
    RouterOutlet, 
    AccountComponent
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('01.account_form_project_UPDATED');
}
