function solve(input) {

    let index = 0;
    let arrLength = Number(input[index++])
    let positionArr = input[index++].split(" ");
    let comandsArr = input.slice(index, input.length)

    let field = new Array(arrLength).fill(0);

    for (let position of positionArr) {
        field[position] = 1;
    }

    console.log(field);
    for (let cmd of comandsArr) {
        let buff = cmd.split(" ");
        commandHandler(Number(buff[0]), buff[1], Number(buff[2]))
        console.log(buff[0], buff[1], buff[2], field);
    }

    function commandHandler(initPos, action, flyLength) {
        // field[initPos] = 0;
        if (field[0] != 1 || (initPos < 0) || (initPos >= arrLength)) return null;
        console.log("Init Position: ", initPos);
        let nextPosition = action == "right" ? initPos + flyLength : initPos - flyLength;
        console.log("nextPosition", nextPosition);
        if (nextPosition >= arrLength || arrLength < 0) return null;
        if (field[nextPosition] == 1) {
            console.log("Test");
            field[initPos] = 0;
            commandHandler(nextPosition, action, flyLength);
        } else {
            field[initPos] = 0;
            field[nextPosition] = 1;
        }

    }

}

solve([3, '0 1', '0 right 1', '2 right 1'])