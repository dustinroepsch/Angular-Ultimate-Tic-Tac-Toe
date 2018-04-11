enum TileValue {
    Empty = "-",
    X = "X",
    O = "O"
}

class TileState {
    public value: TileValue = TileValue.Empty;
}

class SubboardState {
    public tileStates: TileState[] = [
        new TileState(), new TileState(), new TileState(),
        new TileState(), new TileState(), new TileState(),
        new TileState(), new TileState(), new TileState()
    ];
}

export {SubboardState};