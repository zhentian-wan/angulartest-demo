import {Directive, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[getInput]'
})
export class GetInputDirective {

  @Input('getInput') input;
  @HostBinding() get innerText() {
    if(this.input) {
      return this.input;
    }
  }
  constructor() {

  }

}
