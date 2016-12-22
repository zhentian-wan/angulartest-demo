import { Injectable } from '@angular/core';

@Injectable()
export class OnlineService {

  online: boolean = true;
  constructor() {
    setInterval(() => {

      this.online = Math.random() > 0.5;
      console.log("this.online", this.online)
    }, 1000);
  }

}
