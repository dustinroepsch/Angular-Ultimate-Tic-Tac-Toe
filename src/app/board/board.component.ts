import { Component, OnInit } from '@angular/core';
import { SubboardState } from '../subboardstate';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  subboardStates: SubboardState[] = [
    new SubboardState(), new SubboardState(), new SubboardState(),
    new SubboardState(), new SubboardState(), new SubboardState(),
    new SubboardState(), new SubboardState(), new SubboardState()
  ]
  ngOnInit() {
  }

}
