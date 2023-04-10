import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBloqueRedondeado]',
})
export class BloqueRedondeadoDirective {
  constructor(public elementRef: ElementRef, public redender2: Renderer2) {
    const elementoHtml = elementRef.nativeElement;
    redender2.setStyle(elementoHtml, 'border-radius', '100px');
    redender2.setStyle(elementoHtml, 'background-color', 'yellow');
  }
}
