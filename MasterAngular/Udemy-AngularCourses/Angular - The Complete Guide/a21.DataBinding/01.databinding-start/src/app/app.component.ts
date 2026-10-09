import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ObjServer } from './serverElem.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    CommonModule,
    CockpitComponent,
    ServerElementComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  serverElements = [{type: 'server', name: 'testserver', content: 'just test'},{type: 'server', name: 'testserver', content: 'just test'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

}
