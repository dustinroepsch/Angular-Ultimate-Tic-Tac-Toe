import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubboardComponent } from './subboard/subboard.component';

import { MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    SubboardComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
