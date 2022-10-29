function solve(input) {
    let bombs = input.pop().split(' '); // ['2,2', '0,1']
    let matrix = input.map(row => row.split(' ').map(Number));

    let xLength = matrix.length;
    let yLength = matrix[0].length;
    let killedBunnies = 0;
    let dealedDamage = 0;
    let index = 0;


    while (index < bombs.length) {

        let [x, y] = bombs[index].split(',').map(Number);
        if (matrix[x][y] > 0) {
            activateBomb(x, y);
        }
        index++;
    }
    loopMatrix();

    function loopMatrix() {

        for (let x = 0; x < xLength; x++) {
            for (let y = 0; y < yLength; y++) {
                if (matrix[x][y] > 0) {
                    killedBunnies++;
                    dealedDamage += matrix[x][y];
                }
            }
        }

    }


    function activateBomb(x, y) {
        killedBunnies++;
        let damage = Number(matrix[x][y]);
        dealedDamage += damage;
        matrix[x][y] = 0;
        dealDamageToAllNeighbours(x, y, damage);
    }

    function dealDamageToAllNeighbours(x, y, damage) {
        let startRow = Math.max(0, x - 1);
        let endRow = Math.min(x + 1, xLength - 1);
        let startCol = Math.max(0, y - 1);
        let endCol = Math.min(y + 1, yLength - 1);

        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (matrix[i][j] > 0) {
                    matrix[i][j] = Math.max(0, matrix[i][j] - damage);
                }
            }
        }
    }
    console.log(dealedDamage);
    console.log(killedBunnies);
}

let input = ['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']
    ;

solve(input);
