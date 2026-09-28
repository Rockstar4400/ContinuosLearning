import { Component, Input } from '@angular/core';
import { ClickDirective } from '../../directives/click.directive';

@Component({
  selector: 'event-directive',
  imports: [ClickDirective],
  templateUrl: './event-directive.component.html',
  styleUrl: './event-directive.component.css'
})
export class EventDirectiveComponent {
  @Input() message: string = '';
}
