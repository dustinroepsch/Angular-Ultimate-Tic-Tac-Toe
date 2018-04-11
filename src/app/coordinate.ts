class Coordinate {
    constructor(public row: number, public col: number) { }

    public static range(numRows: number, numCols: number): Coordinate[] {
        var coors: Coordinate[] = [];
        for (var row: number = 0; row < numRows; row++) {
            for (var col: number = 0; col < numCols; col++) {
                coors.push(new Coordinate(row, col));
            }
        }
        return coors;
    }
}

export { Coordinate };