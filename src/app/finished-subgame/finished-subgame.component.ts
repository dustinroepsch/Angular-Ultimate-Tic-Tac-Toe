import { Component, OnInit, Input } from '@angular/core';
import { TileValue } from '../subboard.state';

@Component({
  selector: 'app-finished-subgame',
  templateUrl: './finished-subgame.component.html',
  styleUrls: ['./finished-subgame.component.css']
})
export class FinishedSubgameComponent implements OnInit {
  
  @Input() winner: TileValue;

  constructor() { }

  ngOnInit() {
  }

}
