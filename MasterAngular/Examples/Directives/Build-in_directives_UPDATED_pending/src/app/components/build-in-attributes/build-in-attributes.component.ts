import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { DataService } from '../../services/data.service';
import { input } from '@angular/core';

@Component({
  imports: [FormsModule],
  selector: 'build-in-attributes',
  styleUrl: './build-in-attributes.component.css',
  templateUrl: './build-in-attributes.component.html',
})
export class BuildInAttributesComponent {

  private dataService = inject(DataService);

  //@Input() ChildCurrentItem!: Item; 
  ChildCurrentItem = input<Item>();

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setUppercaseName(name: string) {
    console.log(name)
    this.dataService.setUppercaseName(name);
  }
}
