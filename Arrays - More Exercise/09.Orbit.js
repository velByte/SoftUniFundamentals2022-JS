function solve(input) {

    let width = input[0];
    let height = input[1];
    let starX = input[2];
    let starY = input[3];

    let matrix = new Array(width).fill(0).map(() => new Array(height).fill(0));
    matrix[starX][starY] = 1;

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
    //loop through the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            //if the current cell is not the star
            //calculate the distance from the star
            //and set the value of the current cell to the distance
            //from the star
            //if the current cell is the star, skip it
            if (i !== starX || j !== starY) {
                matrix[i][j] = Math.max(Math.abs(i - starX), Math.abs(j - starY)) + 1;
            } 
        }
    }
    printMatrix(matrix);
}



solve([5, 5, 2, 2]);
