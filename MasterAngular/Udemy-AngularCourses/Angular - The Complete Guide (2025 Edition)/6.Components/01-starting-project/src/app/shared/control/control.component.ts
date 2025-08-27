import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ContentChildren, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  }
})
export class ControlComponent implements AfterContentInit{
  //@HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('Clicked!')
  // }
  @Input({required: true}) label!:string;
  private el = inject(ElementRef)
  @ContentChild('input') private control?:
  ElementRef<HTMLInputElement | HTMLTextAreaElement>

  constructor() {
    afterRender(() => {

    });

    afterNextRender(() => {
      
    });
  }

  ngAfterContentInit(): void {
    
  }

  onClick(){

  }
}
