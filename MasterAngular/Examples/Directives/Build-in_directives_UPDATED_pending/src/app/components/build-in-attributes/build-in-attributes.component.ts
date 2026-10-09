import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';

@Component({
  imports: [FormsModule],
  selector: 'build-in-attributes',
  styleUrl: './build-in-attributes.component.css',
  templateUrl: './build-in-attributes.component.html',
})
export class BuildInAttributesComponent {

  @Input() ChildCurrentitem!: Item; 

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setUppercaseName(name: string) {
    this.ChildCurrentitem.name = name.toUpperCase();
  }
}
