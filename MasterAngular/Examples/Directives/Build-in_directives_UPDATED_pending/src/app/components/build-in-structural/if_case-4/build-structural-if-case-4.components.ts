import { Component, Input } from '@angular/core';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';

@Component({
  imports: [ItemDetailComponent],
  selector: 'build-structural-if-case-4',
  styleUrl: './build-structural-if-case-4.components.css',
  templateUrl: './build-structural-if-case-4.components.html',
})
export class BuildStructuralIfCase4 {
  @Input() isSpecialChildren? = true;
}
