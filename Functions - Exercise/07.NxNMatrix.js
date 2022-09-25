function solve(num) {
    let matrix = new Array(num).fill(0).map(() => new Array(num).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }

}