import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  imports: [JsonPipe, FormsModule],
  selector: 'class-attribute',
  styleUrl: './class-attribute.component.css',
  templateUrl: './class-attribute.component.html',
})
export class ClassAttributeComponent {
  dataService = inject(DataService);

  ChildCurrentClasses = input<Record<string,boolean>>({});
  ChildSave = input<boolean>(true);
  ChildisUnchanged = input<boolean>(true);
  ChildisSpecial = input<boolean>(true);

}
