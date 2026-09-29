import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { UnlessDirective } 
from './custom_directives/unless.directive';
import { BetterHighlightDirective } 
from './custom_directives/better-highlight.directive';
import { BasicHighlightDirective } 
from './custom_directives/basic-highlight.directive';

@Component({
  imports: [
    NgClass, NgStyle,
    UnlessDirective, BasicHighlightDirective,
    BetterHighlightDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('custom_directives_updated');
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;
}
