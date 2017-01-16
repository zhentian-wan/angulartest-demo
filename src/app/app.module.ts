import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OpaqueToken} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HerosService} from "./heros.service";
import {TextDirective} from './shared/directives/text.directive';
import {GetInputDirective} from './shared/directives/get-input.directive';
import {ClickableDirective} from './shared/directives/clickable.directive';
import {TrackDirective} from './shared/directives/track.directive';
import {TrackingService} from "./shared/services/tracking.service";
import {OnlineDirective} from './shared/directives/online.directive';
import {OnlineService} from "./shared/services/online.service";
import {BasicComponent} from './basic/basic.component';
import { StructureDirective } from './shared/directives/structure.directive';
import {ThreeDirective} from "./shared/directives/sturcutre2.directive";

export const STARWARS_BASE_URL =
  new OpaqueToken('starwar_base');

@NgModule({
  declarations: [
    AppComponent,
    TextDirective,
    GetInputDirective,
    ClickableDirective,
    TrackDirective,
    OnlineDirective,
    BasicComponent,
    StructureDirective,
    ThreeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HerosService,
    TrackingService,
    OnlineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
