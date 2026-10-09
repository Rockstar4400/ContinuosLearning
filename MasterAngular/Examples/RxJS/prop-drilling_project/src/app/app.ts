import { Component, signal } from '@angular/core';
import { DataService } from './services/app.service';
import { inject } from '@angular/core';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';

@Component({
  imports: [SenderComponent, ReceiverComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('prop-drilling_project');

  private dataService = inject(DataService);
}
