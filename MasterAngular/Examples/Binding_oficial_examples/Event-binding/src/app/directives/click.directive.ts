import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[myClick]',
})
export class ClickDirective {
  @Output('myClick') clicks = new EventEmitter<string>(); // @Output(Alias)
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('click', () => {
      this.toggle = !this.toggle;
      this.clicks.emit(this.toggle ? 'Click!' : '');
    });
  }
}
