import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServersService } from './services/servers.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ServersService]
})
export class AppComponent {
  title = '01.routing-project';
}
