import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadingdirective]',
  inputs: ['Heading', 'SubHeading']
})

  export class HeadingdirectiveDirective implements OnInit {

    @Input() Heading: string;
  @Input() SubHeading: string;

    constructor(private el: ElementRef) {}
    
    ngOnInit() {
       this.el.nativeElement.innerHTML =
       `"${this.Heading}" <br> - ${this.SubHeading}`;
      }

  


}
