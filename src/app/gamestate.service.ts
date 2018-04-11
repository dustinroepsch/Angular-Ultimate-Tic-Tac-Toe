import { Injectable } from '@angular/core';
import { SubboardState, TileValue } from './subboard.state';
import { Coordinate } from './coordinate';

@Injectable()
export class GamestateService {
  private subboardStates: SubboardState[] = [
    new SubboardState(), new SubboardState(), new SubboardState(),
    new SubboardState(), new SubboardState(), new SubboardState(),
    new SubboardState(), new SubboardState(), new SubboardState()
  ];

  private isPlayerXTurn: boolean = true;

  constructor() { }

  public getSubboardState(coordinate: Coordinate): SubboardState {
    return this.subboardStates[GamestateService.getIndex(coordinate)];
  }

  public static getIndex(coordinate: Coordinate): number {
    return coordinate.row * 3 + coordinate.col;
  }

  public setActiveSubboard(coordinate: Coordinate): void {
    for (let subboardState of this.subboardStates) {
      subboardState.isActive = false;
    }
    this.subboardStates[GamestateService.getIndex(coordinate)].isActive = true;
  }

  public endTurn(): void {
    this.isPlayerXTurn = !this.isPlayerXTurn;
  }

  public currentPlayerValue(): TileValue {
    if (this.isPlayerXTurn) {
      return TileValue.X;
    } else {
      return TileValue.O;
    }
  }

}
