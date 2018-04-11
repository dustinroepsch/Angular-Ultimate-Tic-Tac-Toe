import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubboardComponent } from './subboard/subboard.component';

import { MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { BoardComponent } from './board/board.component';

import {GamestateService} from './gamestate.service';
import { FinishedSubgameComponent } from './finished-subgame/finished-subgame.component';

@NgModule({
  declarations: [
    AppComponent,
    SubboardComponent,
    BoardComponent,
    FinishedSubgameComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [GamestateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
