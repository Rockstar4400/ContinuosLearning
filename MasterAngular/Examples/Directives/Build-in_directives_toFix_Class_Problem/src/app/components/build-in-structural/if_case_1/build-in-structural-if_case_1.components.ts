import { Component } from '@angular/core';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';
import { Input } from '@angular/core';
import { Item } from '../../../models/item';

@Component({
  imports: [ItemDetailComponent],
  selector: 'build-in-structural-if_case_1',
  styleUrl: './build-in-structural-if_case_1.components.css',
  templateUrl: './build-in-structural-if_case_1.components.html',
})
export class BuildInStructuralComponentsIfCase1 {
  @Input() ChildisActive = true;

  item!: Item; // defined to demonstrate template context precedence

  isActiveToggle() {
    this.ChildisActive = !this.ChildisActive;
  }
}
