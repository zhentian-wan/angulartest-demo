import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[clickable]'
})
export class ClickableDirective {
  text: string;
  @HostBinding() get innerText() {
    if(this.text) {
      return this.text;
    }
  }
  @HostListener('click', ['$event']) onClick(event) {
    console.log(event); //MouseEvent
    this.text = event.clientX;
  }
}
