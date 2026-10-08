import { Component, signal } from '@angular/core';
import { AutoFocusDirective } from '../directives/auto_focus.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AutoFocusDirective],
  template: `
    <input type="text" appAutoFocus 
     placeholder="I'm focused on load">
    <!-- <input type="checkbox" 
    [appAutoFocus]="shouldFocus()" 
    placeholder="Conditional"> ??? -->
    <input type="text" 
     appAutoFocus [autoFocusDelay]="3000" 
     placeholder="Delayed">
  `
})
export class LoginComponent {
  shouldFocus = signal(true);
}