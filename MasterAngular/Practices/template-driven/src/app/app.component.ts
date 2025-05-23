import { Component } from '@angular/core';
import { ActorFormComponent } from './actor-form/actor-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActorFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven';
}
