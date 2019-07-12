import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'textarea[restricted-input] ,input[restricted-input]',
  host: {
    '(input)': 'onInput($event)'
  }
})
export class InputRestrictDirective implements OnInit {

  @Input('restricted-input') exp;

  invalidExp: RegExp;

  constructor(private _el: ElementRef, private ngControl : NgControl) { 
  }

  ngOnInit(){
    this.invalidExp = new RegExp(this.exp, 'g');
  }

  onInput() {
    if(this.ngControl){
      let newVal = this.ngControl.control.value.replace(this.invalidExp, '');
      this.ngControl.control.setValue(newVal);
    }else{
      let newVal = this._el.nativeElement.value.replace(this.invalidExp, '');
      this._el.nativeElement.value = newVal;
    }
  }

}