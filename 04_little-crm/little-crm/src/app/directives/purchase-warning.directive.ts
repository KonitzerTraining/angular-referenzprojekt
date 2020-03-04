import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[crmPurchaseWarning]'
})
export class PurchaseWarningDirective implements OnInit {

  @Input() crmPurchaseWarning: number;
  @Input() color: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.el.nativeElement);

    if (this.crmPurchaseWarning < 1000) {
      this.el.nativeElement.classList.add('alert-danger');
    }
  }

}
