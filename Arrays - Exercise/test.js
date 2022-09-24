function solve(input) {

    let fieldSize = Number(input[0]);
    let field = new Array(fieldSize).fill(0);
    let ladybugsIndexes = input[1].split(" ").map(Number);
    let commands = input.slice(2);

    for (let i = 0; i < ladybugsIndexes.length; i++) {
        let index = ladybugsIndexes[i];
        if (index >= 0 && index < field.length) {
            field[index] = 1;
        }
    }

    
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(" ");
        let ladybugIndex = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if (ladybugIndex >= 0 && ladybugIndex < field.length && field[ladybugIndex] == 1) {
            field[ladybugIndex] = 0;
            let newIndex = ladybugIndex;
            if (direction == "right") {
                newIndex += flyLength;
            } else {
                newIndex -= flyLength;
            }
            while (newIndex >= 0 && newIndex < field.length) {
                if (field[newIndex] == 0) {
                    field[newIndex] = 1;
                    break;
                } else {
                    if (direction == "right") {
                        newIndex += flyLength;
                    } else {
                        newIndex -= flyLength;
                    }
                }
            }
        }
    }
    console.log(field.join(" "));
}