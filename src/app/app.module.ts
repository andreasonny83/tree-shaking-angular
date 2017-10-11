import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {
//   HeaderModule,
//   ButtonModule,
//   FooterModule,
// } from './not-a-kitchen-sink';

import { KitchenSinkModule } from './kitchen-sink-module';
// import { KitchenSinkModule } from './kitchen-sink';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    KitchenSinkModule,
    // HeaderModule,
    // ButtonModule,
    // FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
