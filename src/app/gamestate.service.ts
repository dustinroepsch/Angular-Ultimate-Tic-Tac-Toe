import { Injectable } from '@angular/core';
import { SubboardState, TileValue } from './subboard.state';
import { Coordinate } from './coordinate';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';

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
    if (this.subgameHasWinner(coordinate)) {
      for (let subboardState of this.subboardStates) {
        subboardState.isActive = true;
      }
    } else {
      for (let subboardState of this.subboardStates) {
        subboardState.isActive = false;
      }
      this.subboardStates[GamestateService.getIndex(coordinate)].isActive = true;
    }
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

  public subgameHasWinner(coordinate: Coordinate): boolean {
    return this.subgameWinner(coordinate) != TileValue.Empty;
  }

  public subgameWinner(coordinate: Coordinate): TileValue {
    var subboard: SubboardState = this.subboardStates[GamestateService.getIndex(coordinate)];
    if (this.rowWinner(subboard) != TileValue.Empty) {
      return this.rowWinner(subboard);
    }

    if (this.colWinner(subboard) != TileValue.Empty) {
      return this.colWinner(subboard);
    }

    if (this.diagWinner(subboard) != TileValue.Empty) {
      return this.diagWinner(subboard);
    }

    return TileValue.Empty;
  }

  public diagWinner(subboard: SubboardState): TileValue {
    if (this.diagWinnerForPlayer(subboard, TileValue.O)) {
      return TileValue.O;
    }
    if (this.diagWinnerForPlayer(subboard, TileValue.X)) {
      return TileValue.X;
    }
    return TileValue.Empty;
  }

  public diagWinnerForPlayer(subboard: SubboardState, playerValue: TileValue): boolean {
    var diagA: Coordinate[] = [
      { row: 0, col: 0 },
      { row: 1, col: 1 },
      { row: 2, col: 2 }
    ];
    var diagB: Coordinate[] = [
      { row: 0, col: 2 },
      { row: 1, col: 1 },
      { row: 2, col: 0 }
    ];
    var diagAwinner: boolean = diagA.map(cor => GamestateService.getIndex(cor))
      .every(index => subboard.tileStates[index].value == playerValue);

    var diagBwinner: boolean = diagB.map(cor => GamestateService.getIndex(cor))
      .every(index => subboard.tileStates[index].value == playerValue);

    return diagAwinner || diagBwinner;
  }

  public rowWinner(subboard: SubboardState): TileValue {
    if (this.rowWinnerForPlayer(subboard, TileValue.X)) {
      return TileValue.X;
    }
    if (this.rowWinnerForPlayer(subboard, TileValue.O)) {
      return TileValue.O;
    }
    return TileValue.Empty;
  }

  public colWinner(subboard: SubboardState): TileValue {
    if (this.colWinnerForPlayer(subboard, TileValue.X)) {
      return TileValue.X;
    }
    if (this.colWinnerForPlayer(subboard, TileValue.O)) {
      return TileValue.O;
    }
    return TileValue.Empty;
  }

  public rowWinnerForPlayer(subboard: SubboardState, playerValue: TileValue): boolean {
    for (var row of [0, 1, 2]) {
      var rowIsWinner: boolean = true;
      for (var col of [0, 1, 2]) {
        if (subboard.tileStates[GamestateService.getIndex({ row: row, col: col })].value != playerValue) {
          rowIsWinner = false;
          break;
        }
      }
      if (rowIsWinner) {
        return true;
      }
    }
    return false;
  }

  public colWinnerForPlayer(subboard: SubboardState, playerValue: TileValue): boolean {
    for (var col of [0, 1, 2]) {
      var colIsWinner: boolean = true;
      for (var row of [0, 1, 2]) {
        if (subboard.tileStates[GamestateService.getIndex({ row: row, col: col })].value != playerValue) {
          colIsWinner = false;
          break;
        }
      }
      if (colIsWinner) {
        return true;
      }
    }
    return false;
  }

}
