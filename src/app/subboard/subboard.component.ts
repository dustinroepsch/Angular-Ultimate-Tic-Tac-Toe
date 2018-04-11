import { Component, OnInit, Input } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { SubboardState, TileValue, TileState } from '../subboard.state';
import { Coordinate } from '../coordinate';

@Component({
  selector: 'app-subboard',
  templateUrl: './subboard.component.html',
  styleUrls: ['./subboard.component.css']
})
export class SubboardComponent implements OnInit {
  @Input() coordinate: Coordinate;

  public subboardState: SubboardState;

  constructor(private gamestateService: GamestateService) { }

  ngOnInit() {
    this.subboardState = this.gamestateService.getSubboardState(this.coordinate);
  }

  tileClicked(tile: TileState): void {
    tile.value = TileValue.X;
    this.gamestateService.setActiveSubboard(tile.coordinate);
  }

  tileIsDisabled(tile: TileState): boolean {
    return !this.subboardState.isActive || tile.value != TileValue.Empty;
  }

}
