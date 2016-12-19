import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HerosService {

  heros;
  api: string = "https://starwars-json-server-ewtdxbyfdz.now.sh";

  constructor(private http: Http) {
  }

  foo() {
    return "foo";
  }

  getHeros() {
    return this.http.get(`${this.api}/people`)
      .map(res => res.json())
      .do(heros => this.heros = heros);
  }

}
