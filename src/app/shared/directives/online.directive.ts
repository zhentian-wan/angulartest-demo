import {Directive, HostBinding} from '@angular/core';
import {OnlineService} from "../services/online.service";

@Directive({
  selector: '[online]'
})
export class OnlineDirective {

  constructor(private onlineService: OnlineService) { }

  @HostBinding('style.color') get styleColor () {
    return !this.onlineService.online ? 'red': 'unset';
  }
  @HostBinding('disabled') get disabled() {
    return !this.onlineService.online;
  }
}
