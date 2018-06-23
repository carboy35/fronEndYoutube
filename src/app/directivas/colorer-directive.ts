import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[colorer]'

})

export class ColorerDirective{
   constructor(el: ElementRef) {
       el.nativeElement.style.color = 'yellow';
    }

    @Input('colorer') item: string;
  }

