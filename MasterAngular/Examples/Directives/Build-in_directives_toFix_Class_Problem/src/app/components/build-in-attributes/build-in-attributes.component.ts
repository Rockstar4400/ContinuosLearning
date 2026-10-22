import { Component, computed, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { input } from '@angular/core';
import { item } from '../../models/model-item';

@Component({
  imports: [FormsModule],
  selector: 'build-in-attributes',
  styleUrl: './build-in-attributes.component.css',
  templateUrl: './build-in-attributes.component.html',
})
export class BuildInAttributesComponent {
  private dataService = inject(DataService);
  ChildCurrentItem = input<item>();
  
}
