import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../models/item';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';

@Component({
  imports: [ItemDetailComponent],
  selector: 'for-component',
  styleUrl: './for.component.css',
  templateUrl: './for.component.html',
})
export class ForComponent {
  @Input() itemsCurrentChild: Item[] = [];
  currentItem!: Item;
  item!: Item; // defined to demonstrate template context precedence
  
  // trackBy change counting
  itemsNoTrackByCount = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  ngOnInit(): void {
    this.resetItems();
  }
  resetItems() {
    this.itemsCurrentChild = Item.items.map((item) => item.clone());
    this.currentItem = this.itemsCurrentChild[0];
    this.item = this.currentItem;
  }

  resetList() {
    //this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }

  changeIds() {
    this.itemsCurrentChild.forEach((i) => (i.id += 1 * this.itemIdIncrement));
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  clearTrackByCounts() {
    //this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }
}
