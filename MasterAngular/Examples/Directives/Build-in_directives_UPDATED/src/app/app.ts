import { Component, Input, OnInit, signal } from '@angular/core';
import { Item } from './models/item';
import { FormsModule } from '@angular/forms';
import { ItemDetailComponent } 
from './components/item-detail/item-detail.component';
import { JsonPipe } from '@angular/common';
import { ItemSwitchComponents } 
from './components/switch/item-switch.component';
import { BuildInAttributesComponent } from './components/build-in-attributes/build-in-attributes.component';
import { ClassAttributeComponent } from './components/class-attribute/class-attribute.component';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [
    FormsModule,
    ItemDetailComponent,
    JsonPipe,
    ItemSwitchComponents,
    BuildInAttributesComponent,
    ClassAttributeComponent
]
})
export class App implements OnInit{
  protected readonly title = signal('Build-in_directives_UPDATED');

  currentItem!: Item;

  canSave = true;
  isSpecial = true;
  isUnchanged = true;

  isActive = true;
  nullCustomer: string | null = null;

  currentCustomer = {
    name: 'Laura',
  };

  item!: Item; // defined to demonstrate template context precedence
  items: Item[] = [];

  // trackBy change counting
  itemsNoTrackByCount = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  currentClasses: Record<string, boolean> = {};

  currentStyles: Record<string, string> = {};

  ngOnInit() {
    this.resetItems();
    //this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
  }

 
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }

  resetItems() {
    this.items = Item.items.map((item) => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  resetList() {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }

  changeIds() {
    this.items.forEach((i) => (i.id += 1 * this.itemIdIncrement));
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }
  trackByItems(index: number, item: Item): number {
    return item.id;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

}
