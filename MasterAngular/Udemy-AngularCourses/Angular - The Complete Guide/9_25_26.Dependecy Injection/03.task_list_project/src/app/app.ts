import { Component, signal } from '@angular/core';
import { TasksComponent } from './components/tasks.component';

@Component({
  imports: [TasksComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('03.task_list_project_UPDATE');
}
