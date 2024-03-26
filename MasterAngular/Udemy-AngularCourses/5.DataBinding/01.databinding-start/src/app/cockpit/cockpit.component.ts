import { Component, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output('SCreated') serverCreated = 
  new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('BPCreated') blueprintCreated = 
  new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }
  
}
