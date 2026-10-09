import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/app.service';

@Component({
  imports: [],
  selector: 'receiver-component',
  styleUrl: './receiver.component.css',
  templateUrl: './receiver.component.html',
})
export class ReceiverComponent {
  protected dataService = inject(DataService); 
}
