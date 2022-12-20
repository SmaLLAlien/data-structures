import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {ReactiveFormsModule} from "@angular/forms";

export const NUMBER_OF_GRAPHS = new InjectionToken<number>('number of vertex');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NUMBER_OF_GRAPHS, useValue: 5 }],
  bootstrap: [AppComponent]
})
export class AppModule { }
