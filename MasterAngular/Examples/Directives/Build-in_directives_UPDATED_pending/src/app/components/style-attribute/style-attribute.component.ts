import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'style-attribute',
  styleUrl: './style-attribute.component.css',
  templateUrl: './style-attribute.component.html',
})
export class StyleAttributeComponent {
  @Input() ChildcurrentStyles: Record<string, string> = {};
  @Input() ChildCanSave = true;
  @Input() ChildisSpecial = true;
  @Input() ChildisUnchanged = true;

setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.ChildcurrentStyles = {
      'font-style': this.ChildCanSave ? 'italic' : 'normal',
      'font-weight': !this.ChildisUnchanged ? 'bold' : 'normal',
      'font-size': this.ChildisSpecial ? '24px' : '12px',
    };
  }

}
