import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input() appHighLight: string = "yellow";

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.render.setStyle(this.element.nativeElement, 'background-color', this.appHighLight);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.render.removeStyle(this.element.nativeElement, 'background-color');
  }

}
