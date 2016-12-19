import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OpaqueToken} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HerosService} from "./heros.service";

export const STARWARS_BASE_URL =
  new OpaqueToken('starwar_base');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
