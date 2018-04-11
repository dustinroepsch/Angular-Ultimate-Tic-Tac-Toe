import { Component, OnInit } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { Coordinate } from '../coordinate';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public subboardCoors: Coordinate[] = Coordinate.range(3, 3);

  constructor(public gamestateService: GamestateService) { }

  ngOnInit() {
  }

}
