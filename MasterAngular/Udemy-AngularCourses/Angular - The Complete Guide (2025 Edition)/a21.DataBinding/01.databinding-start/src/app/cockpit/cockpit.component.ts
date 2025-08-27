import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
  
  @ViewChild('serverContentInput', {static: true}) serverContentInput!: ElementRef;

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  
}
