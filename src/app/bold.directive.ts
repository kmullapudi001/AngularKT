import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[boldHover]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BoldHoverDirective {
  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  onMouseEnter() {

    this.element.style.fontWeight = 'bold';
  }
  onMouseLeave() {
    this.element.style.fontWeight = 'normal';
  }
}
