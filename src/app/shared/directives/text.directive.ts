import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[myText]'
})
export class TextDirective {

  @HostBinding() innerText;
  constructor() {
    this.innerText = "I am text directive!"
  }
}
