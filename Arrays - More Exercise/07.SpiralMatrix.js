function solve(x, y) {

    let matrix = new Array(x).fill(0).map(() => new Array(y).fill(0));
    let counter = 1;
    let startColumn = 0;
    let endColumn = y - 1;
    let startRow = 0;
    let endRow = x - 1;


    function left2right(startColumn, endColumn, startRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
    }

    function top2bottom(startRow, endRow, endColumn) {
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }
    }

    function right2left(endColumn, startColumn, endRow) {
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
    }

    function bottom2top(endRow, startRow, startColumn) {
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }
    }


    while (startColumn <= endColumn && startRow <= endRow) {

        left2right(startColumn, endColumn, startRow);
        startRow++;

        top2bottom(startRow, endRow, endColumn);
        endColumn--;

        right2left(endColumn, startColumn, endRow);
        endRow--;

        bottom2top(endRow, startRow, startColumn);
        startColumn++;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }

}

solve(5, 5)