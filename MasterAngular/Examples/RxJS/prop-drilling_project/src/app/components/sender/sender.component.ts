import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/app.service';

@Component({
  imports: [],
  selector: 'sender-component',
  styleUrl: './sender.component.css',
  templateUrl: './sender.component.html',
})
export class SenderComponent {
  private dataService = inject(DataService);

  changeData() {
    this.dataService.updateData('New Deeply Nested Message!');
  }
}
