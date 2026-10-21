import { Component, computed, inject} from '@angular/core';
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
  ChildCurrentItem = input();

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setUppercaseName(name: string) {
    console.log(name)
    //this.dataService.setUppercaseName(name);
  }

  // 1. Receive the object via Signal Input
  userData = input();

  // 2. Derive individual object values safely using computed()
  name = computed(() => this.dataService.currentItem.name);
}
