function solve(input) {
    let index = 0;
    let turns = 0;
    let sequence = input[index++].split(" ");
    let matchingElementCount = sequence.length / 2;

    while (input[index] != "end") {

        let buff = input[index].split(" ");
        let indexA = buff[0];
        let indexB = buff[1];
        turns++;
        inputHandler(indexA, indexB);

        if (isFinished()) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
        index++;
    }

    if (!isFinished()) {
        console.log("Sorry you lose :(");
        console.log(...sequence);
    }

    function inputHandler(indexA, indexB) {
        if (checkIfCheating(indexA, indexB)) {
            addPenalty(turns);
        } else {
            if (isMatching(indexA, indexB)) {
                let element = sequence[indexA];
                remove(element);
                matchingElementCount--;
                console.log(`Congrats! You have found matching elements - ${element}!`);
            } else {
                console.log("Try again!");
            }
        }
    }

    function isFinished() {
        return matchingElementCount === 0;
    }

    function isMatching(indexA, indexB) {
        return sequence[indexA] === sequence[indexB]
    }

    function remove(element) {
        sequence = sequence.filter(item => item != element)
    }

    function checkIfCheating(indexA, indexB) {
        let sequenceLength = sequence.length;
        if (indexA < 0 || indexA >= sequenceLength) return true;
        if (indexB < 0 || indexB >= sequenceLength) return true;
        if (indexA === indexB) return true;
        return false;
    }

    function addPenalty(turns) {
        let indexOfMiddle = Math.floor(sequence.length / 2);
        let penatlyElement = `-${turns}a`
        sequence.splice(indexOfMiddle, 0, penatlyElement);
        sequence.splice(indexOfMiddle + 1, 0, penatlyElement);
        matchingElementCount++;
        console.log("Invalid input! Adding additional elements to the board");
    }
}


solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"

]
)