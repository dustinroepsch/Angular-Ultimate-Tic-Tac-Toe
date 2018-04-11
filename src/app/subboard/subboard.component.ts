import { Component, OnInit, Input } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { SubboardState } from '../subboard.state';
import { Coordinate } from '../coordinate';

@Component({
  selector: 'app-subboard',
  templateUrl: './subboard.component.html',
  styleUrls: ['./subboard.component.css']
})
export class SubboardComponent implements OnInit {
  @Input() coordinate: Coordinate;

  private subboardState: SubboardState;

  constructor(private gamestateService: GamestateService) { }

  ngOnInit() {
    this.subboardState = this.gamestateService.getSubboardState(this.coordinate);
  }

}
