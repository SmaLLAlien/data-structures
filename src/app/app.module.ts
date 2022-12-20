import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {ReactiveFormsModule} from "@angular/forms";

export const ARRAY_NUM_ELEMENTS = new InjectionToken<number>('ARRAY_NUM_ELEMENTS');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ARRAY_NUM_ELEMENTS, useValue: 10}],
  bootstrap: [AppComponent]
})
export class AppModule { }
