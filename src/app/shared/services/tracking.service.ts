import { Injectable } from '@angular/core';

@Injectable()
export class TrackingService {

  logs = [];
  constructor() { }

  tracking(event, log) {
    this.logs.push({
      event,
      log
    });

    console.log(this.logs)
  }
}
