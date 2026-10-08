import { Directive, ElementRef, effect, input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective {
  enabled = input<string>('', { alias: 'appAutoFocus' });
  delay = input<number>(0, { alias: 'autoFocusDelay' });

  constructor(private el: ElementRef<HTMLElement>) {
    effect(() => {
      if (this.enabled()) {
        setTimeout(() => {
          this.el.nativeElement.focus();
        }, this.delay());
      }
    });
  }
}