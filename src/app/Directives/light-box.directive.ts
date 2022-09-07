import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{

  // @Input() highLightColor:string="yellow";
  @Input('LightBox') highLightColor:string="yellow";
  @Input('defaultColor') defaultColor:string="darkblue";

  // private elemRef;
  constructor(private elemRef:ElementRef) {

   }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }



  @HostListener('mouseover') onMouseOver()
   {
    this.elemRef.nativeElement.style.border = `2px solid ${this.highLightColor}`;
   }

   @HostListener('mouseout') onMouseOut()
   {
    this.elemRef.nativeElement.style.border = "2px solid darkblue";
   }

}
