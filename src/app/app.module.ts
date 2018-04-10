import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubboardComponent } from './subboard/subboard.component';

import { MatGridListModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SubboardComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
