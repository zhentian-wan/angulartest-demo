import {Component, OnInit} from '@angular/core';
import {HerosService} from "./heros.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'app works!';
  heros;
  constructor(private service: HerosService) {
    this.service.getHeros()
      .subscribe(hs => this.heros = hs);
  }
}
