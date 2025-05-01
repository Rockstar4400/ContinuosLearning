import {Component} from '@angular/core';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [JsonPipe,FormsModule],
})
export class AppComponent {
  title = 'homes';
}
