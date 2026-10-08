import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  standalone: true,
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
})

export class ItemDetailComponent {
  // decorate the property with @Input()
  @Input() item = ''; 
}
