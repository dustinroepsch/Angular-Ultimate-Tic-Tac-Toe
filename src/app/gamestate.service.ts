import { Injectable } from '@angular/core';
import { SubboardState } from './subboard.state';
import { Coordinate } from './coordinate';

@Injectable()
export class GamestateService {
  private subboardStates: SubboardState[] = [
    new SubboardState(), new SubboardState(), new SubboardState(),
    new SubboardState(), new SubboardState(), new SubboardState(),
    new SubboardState(), new SubboardState(), new SubboardState()
  ];

  constructor() { }

  public getSubboardState(coordinate: Coordinate): SubboardState {
    return this.subboardStates[GamestateService.getIndex(coordinate)];
  }

  public static getIndex(coordinate: Coordinate): number {
    return coordinate.row * 3 + coordinate.col;
  }

}
