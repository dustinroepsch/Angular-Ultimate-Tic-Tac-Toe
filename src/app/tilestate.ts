enum State {
    Empty = "",
    X = "X",
    O = "O"
}

class TileState {
    currentState: State = State.Empty
}

export { TileState }