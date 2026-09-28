import { Component, signal } from '@angular/core';
import { ClickOutsideDirective } from '../directives/click_outside.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ClickOutsideDirective, CommonModule],
  template: `
    <div class="dropdown" (appClickOutside)="closeDropdown()">
      <button (click)="toggleDropdown()">Menu</button>
      @if (isOpen()) {
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      }
    </div>
  `,
  styles: [`
    .dropdown { position: relative; }
    ul { position: absolute; background: white; border: 1px solid #ccc; }
  `]
})
export class DropdownComponent {
  isOpen = signal(false);

  toggleDropdown() {
    this.isOpen.update(v => !v);
  }

  closeDropdown() {
    this.isOpen.set(false);
  }
}