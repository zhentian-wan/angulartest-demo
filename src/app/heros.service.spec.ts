/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {HerosService} from './heros.service';
import {HttpModule, Http, XHRBackend, Response} from "@angular/http";
import {MockBackend} from '@angular/http/testing';

let service, mockbackend;

describe('HerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HerosService,
        MockBackend,
        {provide: XHRBackend, useClass: MockBackend},
      ]
    });
  });

  beforeEach(inject([HerosService, XHRBackend], (_service, _mockbackend) => {
    service = _service;
    mockbackend = _mockbackend;
  }));

  it('should ...', inject([HerosService], (service: HerosService) => {
    expect(service).toBeTruthy();
  }));

  it('should able to get foo from foo()', inject([HerosService], service => {
    const expected = service.foo();
    const result = "foo";
    expect(expected).toBe(result);
  }));

  it('should return mock response of heros', async(service => {
    let response = [
      {name: "R2D2", id: 12},
      {name: "Hero", id: 13}
    ];
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(
        new Response({body: JSON.stringify(response)}));
    });

  }));
});
