import { Coordinate } from './coordinate';

enum TileValue {
    Empty = "-",
    X = "X",
    O = "O"
}

class TileState {
    constructor(public coordinate: Coordinate) { };
    public value: TileValue = TileValue.Empty;
}

class SubboardState {
    public tileStates: TileState[] = Coordinate.range(3, 3).map(coordinate => new TileState(coordinate));
    public isActive: boolean = true;
}

export { SubboardState, TileValue, TileState };