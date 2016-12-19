import {TestBed, async, inject} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HerosService} from "./heros.service";
import {By} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {STARWARS_BASE_URL} from "./app.module";

let fixture, comInstance, herosService, element, de;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        HerosService
      ],
      imports: [
        HttpModule
      ]
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement;
    comInstance = fixture.debugElement.componentInstance;
    herosService = fixture.debugElement.injector.get(HerosService);
    element = fixture.nativeElement;      // to access DOM element
  });

  it('should create the app', async(() => {
    expect(comInstance).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(comInstance.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(element.querySelector('h1').textContent).toContain('app works!');
  }));

  it('should able to change the title', async(() => {
    const expected = "Change title";
    comInstance.title = expected;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelector('h1').innerText).toBe(expected);
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe(expected);
    });
  }));

  it('should have HerosService defined', async(() => {
    const expected = herosService.foo();
    const result = "foo";
    expect(expected).toBe(result);
  }));

  it('should be able to get heros from service', async(() => {
    herosService.getHeros()
      .subscribe(()=> {
        fixture.detectChanges();
        fixture.whenStable()
          .then(() => {
            const expected = comInstance.heros.length;
            expect(expected).toBe(82);
          });
      });
  }))
});
