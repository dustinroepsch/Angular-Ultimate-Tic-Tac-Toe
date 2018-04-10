import { Component, OnInit } from '@angular/core';
import { TileState } from '../tilestate';

@Component({
  selector: 'app-subboard',
  templateUrl: './subboard.component.html',
  styleUrls: ['./subboard.component.css']
})
export class SubboardComponent implements OnInit {

  tiles: TileState[] = [
    TileState.Empty, TileState.Empty, TileState.Empty,
    TileState.Empty, TileState.Empty, TileState.Empty,
    TileState.Empty, TileState.Empty, TileState.Empty
  ]

  constructor() { }

  ngOnInit() {
  }

}
