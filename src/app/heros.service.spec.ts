/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HerosService } from './heros.service';
import {HttpModule} from "@angular/http";

let service;

describe('HerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        HerosService
      ]
    });
  });

  beforeEach(inject([HerosService], s => {
    service = s;
  }));

  it('should ...', inject([HerosService], (service: HerosService) => {
    expect(service).toBeTruthy();
  }));

  it('should able to get foo from foo()', inject([HerosService], service => {
    const expected = service.foo();
    const result = "foo";
    expect(expected).toBe(result);
  }));

  it('should able to get heros from api', async(() => {
    service.getHeros()
      .subscribe(( heros )=> {
        expect(heros.length).toEqual(82);
      })
  }))
});
