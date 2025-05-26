import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  imports: [MessagesComponent, CommonModule, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-example';
}
