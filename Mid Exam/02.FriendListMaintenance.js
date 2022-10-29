function solve(input) {
    let index = 0;
    let collection = input[index++].split(", ");

    let blocklistedCount = 0;
    let lostCount = 0;

    while (input[index] != "Report") {

        let buff = input[index].split(" ");
        let cmd = buff[0];

        switch (cmd) {
            case "Blacklist":
                blacklist(buff[1]);
                break;
            case "Error":
                error(Number(buff[1]));
                break;
            case "Change":
                change(Number(buff[1]), buff[2]);
                break;
            default:
                break;
        }

        index++;
    }

    report();


    function blacklist(name) {

        if (collection.includes(name)) {
            blocklistedCount++;
            let nameIndex = collection.indexOf(name);
            collection[nameIndex] = "Blacklisted";
            console.log(`${name} was blacklisted.`);
        } else {
            console.log(`${name} was not found.`);
        }
    }

    function error(errorIndex) {
        if (isValidIndex(errorIndex)
            && collection[errorIndex] != "Blacklisted"
            && collection[errorIndex] != "Lost") {
            lostCount++;
            let name = collection[errorIndex];

            collection[errorIndex] = "Lost";
            console.log(`${name} was lost due to an error.`);
        }
    }

    function change(changeIndex, newName) {
        if (isValidIndex(changeIndex)) {
            let currentName = collection[changeIndex];
            collection[changeIndex] = newName;
            console.log(`${currentName} changed his username to ${newName}.`);
        }
    }

    function report() {
        console.log(`Blacklisted names: ${blocklistedCount}`);
        console.log(`Lost names: ${lostCount}`);
        console.log(...collection);
    }

    function isValidIndex(i) {
        return i >= 0 && i < collection.length;
    }

}

let input = (["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])

    ;

solve(input);



// o	"{name} was blacklisted."
// o	"{name} was not found."
// o	"{name} was lost due to an error."
// o	"{current name} changed his username to {new name}."
// o	"Blacklisted names: {number of blacklisted names}"
// o	"Lost names: {number of lost names}"
