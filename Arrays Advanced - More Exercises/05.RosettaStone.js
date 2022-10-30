function rosettaStone(input) {
    let decodeder = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let templateMatrixLength = Number(input.shift());
    let templateMatrix = [];
    let messageMatrix = [];
    let decodeMatrix = [];

    function createTemplateMatrix(templateMatrixLength) {
        /* Creating a matrix from the input. */
        /* Result: [
                    [59, 36], 
                    [82, 52]
                    ] */

        for (let i = 1; i <= templateMatrixLength; i++) {
            /* Taking (removing) the first element of the input array at call moment, splitting it by spaces, converting it to
            numbers and pushing it to the templateMatrix array. */
            templateMatrix.push(input.shift().split(" ").map(Number));
        }
    }

    function createMessageMatrix() {
        /* Creating a matrix from the input. */
        /* Result: [
                    [4, 18, 25, 19, 8], 
                    [4, 2, 8, 2, 18],
                    [23, 14, 22, 0, 22],
                    [2, 17, 13, 19, 20],
                    [0, 9, 0, 22, 22]
                    ] */

        for (let row in input) {
            messageMatrix.push(input[row].split(" ").map(Number));
        }
    }

    function getOverlay() {

        let xLength = messageMatrix.length;
        let yLength = messageMatrix[0].length;

        let temp = [];
        for (let x = 0; x < xLength; x++) {
            for (let y = 0; y < yLength; y++) {
                let result = messageMatrix[x][y] + templateMatrix[x % templateMatrix.length][y % templateMatrix[0].length];
                temp.push(decodeder[result % 27]);
            }
        }

        return temp;
    }


    createTemplateMatrix(templateMatrixLength);
    createMessageMatrix();

    let result = getOverlay();

    console.log(result.join(""));
}


let input = ['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
    ;



let input2 = ['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']

    ;
rosettaStone(input);