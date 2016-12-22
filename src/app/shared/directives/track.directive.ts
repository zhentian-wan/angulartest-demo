import {Directive, HostListener, Input} from '@angular/core';
import {TrackingService} from "../services/tracking.service";

@Directive({
  selector: '[track]'
})
export class TrackDirective {

  @Input() track;

  constructor(private trackingService: TrackingService) { }

  @HostListener('click', ['$event']) onClick(event) {
    this.trackingService.tracking(
      event,
      this.track
    )
  }
}
