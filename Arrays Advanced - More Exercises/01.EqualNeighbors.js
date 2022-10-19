function solve(input) {

    let xLength = input.length;
    let yLength = input[0].length;


    for (let x = 0; x < xLength; x++) {
        for (let y = 0; y < yLength; y++) {
            console.log("x:", x, "y:", y, " [", input[x][y], "]");
        }
    }

    function checkNeighbors(x, y) {
        let xInBound = (x - 1 >= 0) && (x + 1 <= xLength);
        console.log(xInBound);
    };

    console.log(input);
    checkNeighbors(3, 2)
}




solve([["2", "3", "4", "7", "0"],
["4", "0", "5", "3", "4"],
["2", "3", "5", "4", "2"],
["9", "8", "7", "5", "4"]])