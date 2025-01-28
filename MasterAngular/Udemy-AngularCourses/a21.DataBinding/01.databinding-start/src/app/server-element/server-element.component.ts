import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ObjServer } from '../serverElem.model';


@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  @Input('srvElement') element = ObjServer;

}
