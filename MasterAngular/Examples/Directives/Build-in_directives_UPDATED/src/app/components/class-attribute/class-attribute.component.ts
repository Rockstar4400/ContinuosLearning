import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [JsonPipe, FormsModule],
  selector: 'class-attribute',
  styleUrl: './class-attribute.component.css',
  templateUrl: './class-attribute.component.html',
})
export class ClassAttributeComponent {
  @Input() ChildCurrentClasses: Record<string, boolean> = {};
  @Input() ChildSave = true;
  @Input() ChildisUnchanged = true;
  @Input() ChildisSpecial = true;

  setCurrentClasses() {
    // CSS classes: added/removed per current state 
    // of component properties
    this.ChildCurrentClasses = {
      saveable: this.ChildSave,
      modified: !this.ChildisUnchanged,
      special: this.ChildisSpecial,
    };
  }
}
