import { TileState } from './tilestate'

class SubboardState {
    public tiles: TileState[] = [
        new TileState(), new TileState(), new TileState(),
        new TileState(), new TileState(), new TileState(),
        new TileState(), new TileState(), new TileState()
    ]
}

export {SubboardState}