function solve(input) {


    let fieldSize = Number(input[0]);
    /* It creates an array with the length of the first input and fills it with 0. */
    /* Result: [0, 0, 0] */
    let field = new Array(fieldSize).fill(0);
    /* It splits the second input by spaces and converts the strings to numbers. */
    let ladybugsIndexes = input[1].split(" ").map(Number);
    /* It takes the input and slices it from the second element - get all other elements of the array */
    let commands = input.slice(2);

    /* Filling the array with 1s at the indexes that are given in the second input. */
    /* Result: [0, 1, 0] */
    for (let i = 0; i < ladybugsIndexes.length; i++) {
        let index = ladybugsIndexes[i];
        if (index >= 0 && index < field.length) {
            field[index] = 1;
        }
    }

    /* Iterating through the commands array and calling the comandHandler function with the current
    element. */
    for (cmds of commands) {
        comandHandler(cmds)
    }


    function comandHandler(comand) {
        let buff = comand.split(" ");
        let current = Number(buff[0]);
        let way = String(buff[1]);
        let steps = Number(buff[2]);

        if (current >= 0 && current < field.length && field[current] == 1) {
            field[current] = 0;
            moveHendler(current, way, steps);
        }
    }

    function moveHendler(current, way, steps) {
        let newIndex = current;
        if (way == "right") {
            newIndex += steps;
        } else {
            newIndex -= steps;
        }

        if (field[newIndex] == 0 && newIndex >= 0 && newIndex < field.length) {
            field[newIndex] = 1;
            return;
        } else {
            moveHendler(newIndex, way, steps);
        }
    }

    console.log(field.join(" "));
}

solve([3, '0 1',
    '0 right 1',
    '2 right 1']

)