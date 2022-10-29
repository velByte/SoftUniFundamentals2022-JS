function solve(input) {

    let xLength = input.length;
    let yLength = input[0].length;
    let foundEqualNeighborsCount = 0;
    let foundNeigborsIndex = [];

    for (let x = 0; x < xLength; x++) {
        for (let y = 0; y < yLength; y++) {
            if (checkRight(x, y)) foundEqualNeighborsCount++;
            if (checkDown(x, y)) foundEqualNeighborsCount++;
        }
    }

    function checkRight(x, y) {
        if (neighborInRange(x, y + 1)) {
            return input[x][y] == input[x][y + 1];
        } else {
            return false;
        }
    }

    function checkDown(x, y) {
        if (neighborInRange(x + 1, y)) {
            return input[x][y] == input[x + 1][y]
        }
    }

    function neighborInRange(x, y) {
        return ((x >= 0 && x < xLength) && (y >= 0 && y < yLength));
    };

    console.log(foundEqualNeighborsCount);
}




solve([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
)