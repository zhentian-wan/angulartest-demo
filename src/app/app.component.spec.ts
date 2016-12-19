/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

let fixture, comInstance;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comInstance = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    //let fixture = TestBed.createComponent(AppComponent);
    //let app = fixture.debugElement.componentInstance;
    expect(comInstance).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    //let fixture = TestBed.createComponent(AppComponent);
    //let app = fixture.debugElement.componentInstance;
    expect(comInstance.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    //let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
