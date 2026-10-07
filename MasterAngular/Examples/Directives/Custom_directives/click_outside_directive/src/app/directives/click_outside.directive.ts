import { Directive, ElementRef, effect, inject } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { fromEvent, filter, map } from 'rxjs';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef);

  clickOutside = outputFromObservable(
    fromEvent<MouseEvent>(document, 'click').pipe(
      filter(event => {
        const clickedInside = this.elementRef.nativeElement.contains(event.target);
        return !clickedInside;
      }),
      map(() => undefined)
    )
  );
}