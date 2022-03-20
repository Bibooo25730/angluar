import { Directive,ElementRef,Input,HostListener,AfterViewInit} from '@angular/core';

@Directive({
  selector: '[HighSytle]',
})
export class HighDirective { 
  @Input() HighSytle:any
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = this.HighSytle;
  }
  // ngAfterViewInit() {
  //   this.el.nativeElement.style.backgroundColor = this.HighSytle;
  // }
  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.backgroundColor = this.HighSytle;
  }
  @HostListener('mouseout') onmouseout() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}