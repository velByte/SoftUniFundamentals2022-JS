function solve(input) {

    let index = 0;
    let initEnergie = Number(input[index++]);
    let countWonBattles = 0;
    let isWin = true;

    while (input[index] !== 'End of battle') {

        let distance = Number(input[index++]);
        if (isEnergieEnough(distance)) {
            countWonBattles++;
            initEnergie -= distance;
            if (countWonBattles % 3 === 0) {
                initEnergie += countWonBattles;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${countWonBattles} won battles and ${initEnergie} energy`);
            isWin = false;
            break;
        }
    }
    isWin ? console.log(`Won battles: ${countWonBattles}. Energy left: ${initEnergie}`) : '';
    function isEnergieEnough(distance) {
        if (initEnergie >= distance) {
            return true;
        }
        return false;
    }


}

let input = (["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);


solve(input); 