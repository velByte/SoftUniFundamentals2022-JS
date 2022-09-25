function diagonalAttack(matrix) {

    let matrixRows = matrix.map(row => row.split(' ').map(Number));
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let isEqual = true;

    for (let i = 0; i < matrixRows.length; i++) {
        leftDiagonal += matrixRows[i][i];
        rightDiagonal += matrixRows[i][matrixRows.length - 1 - i];
    }

    if (leftDiagonal !== rightDiagonal) {
        isEqual = false;
    }


    if (isEqual) {
        for (let i = 0; i < matrixRows.length; i++) {
            for (let j = 0; j < matrixRows.length; j++) {
                if (i !== j && j !== matrixRows.length - 1 - i) {
                    matrixRows[i][j] = leftDiagonal;
                }
            }
        }
    }

    for (let i = 0; i < matrixRows.length; i++) {
        console.log(matrixRows[i].join(' '));
    }
}



diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);