function solve(map, fprces) {

    let matrix = map.map(row => row.split(' ').map(Number));

    let xLength = matrix.length;
    let yLength = matrix[0].length;

    let index = 0;

    while (index < fprces.length) {

        let [cmd, value] = fprces[index].split(' ');
        value = Number(value);

        switch (cmd) {
            case 'breeze':
                breeze(value);
                break;
            case 'gale':
                gale(value);
                break;
            case 'smog':
                smog(value);
                break;
            default:
                break;
        }
        index++;
    }

    if (isPolluted()) {
        let areas = findePollutedAreas();
        console.log("Polluted areas:", areas.join(", "));

    } else {
        console.log("No polluted areas");
    }

    function findePollutedAreas() {
        let areas = [];
        for (let x = 0; x < xLength; x++) {
            for (let y = 0; y < yLength; y++) {
                if (matrix[x][y] >= 50) {
                    areas.push(`[${x}-${y}]`)
                }
            }
        }
        return areas;
    }

    function breeze(index) {
        let row = index;
        for (let i = 0; i < xLength; i++) {
            let temp = matrix[row][i];
            matrix[row][i] = Math.max(0, temp - 15);
        }
    }

    function gale(index) {
        let col = index;

        for (let i = 0; i < yLength; i++) {
            let temp = matrix[i][col];
            matrix[i][col] = Math.max(0, temp - 20)
        }
    }

    function smog(value) {
        for (let x = 0; x < xLength; x++) {
            for (let y = 0; y < yLength; y++) {
                matrix[x][y] += value;
            }
        }
    }

    function isPolluted() {

        for (let x = 0; x < xLength; x++) {
            for (let y = 0; y < yLength; y++) {
                if (matrix[x][y] >= 50) {
                    return true;
                }
            }
        }
        return false;
    }

}

let map = ['5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24']
    ;

let forces = ['smog 11', 'gale 3', 'breeze 1', 'smog 2'];


solve(map, forces);
