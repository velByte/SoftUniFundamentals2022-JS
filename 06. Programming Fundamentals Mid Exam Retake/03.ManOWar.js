function solve(input) {

    let pirateShipStatus = input[0].split(">").map(Number);
    let warShipStatus = input[1].split(">").map(Number);
    let maxHealt = Number(input[2]);

    let i = 3;

    while (input[i] != "Retire") {

        let buffArr = input[i].split(" ");
        let cmd = buffArr[0];

        switch (cmd) {
            case "Fire":
                if (fire(Number(buffArr[1]), Number(buffArr[2]))) return;
                break;
            case "Defend":
                if (defend(Number(buffArr[1]), Number(buffArr[2]), Number(buffArr[3]))) return;
                break;
            case "Repair":
                repair(Number(buffArr[1]), Number(buffArr[2]))
                break;
            case "Status":
                status();
                break;

            default:
                break;
        }
        i++;
    }

    function fire(fireIndex, damage) {

        let stop = false;

        let isValid = fireIndex >= 0 && fireIndex < warShipStatus.length;

        if (isValid) {
            warShipStatus[fireIndex] -= damage;
            if (warShipStatus[fireIndex] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                stop = true;
                return stop;
            }
            //Do etwas
        } else {
            //Do nichts 
        }
        return stop;
    }

    function defend(startIndex, endIndex, damage) {
        let isStartValid = startIndex >= 0 && startIndex < pirateShipStatus.length;
        let isEndValid = endIndex > startIndex && endIndex < pirateShipStatus.length;
        let isValid = isStartValid && isEndValid;

        if (isValid) {

            for (let i = startIndex; i <= endIndex; i++) {

                pirateShipStatus[i] -= damage;
                if (pirateShipStatus[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return true;
                }
            }
        }

        return false;
    }

    function repair(repairIndex, gesundcheit) {
        let isValid = repairIndex >= 0 && repairIndex < pirateShipStatus.length;
        if (isValid) {
            let tep = pirateShipStatus[repairIndex] + gesundcheit;
            if (maxHealt <= tep) {
                pirateShipStatus[repairIndex] = maxHealt;
            } else {
                pirateShipStatus[repairIndex] = tep;
            }
        }
    }



    function status() {

        // prints the count of all sections of the pirate ship that need repair soon, 
        // which are all sections that are lower than 20% of the maximum health capacity. 
        // Print the following:
        // "{count} sections need repair."

        let count = 0;
        let limit = maxHealt * 0.2;
        pirateShipStatus.map(section => {
            if (section < limit) {
                count++;
            }
        })
        console.log(`${count} sections need repair.`);

    }


    //"Pirate ship status: {pirateShipSum}
    //Warship status: {warshipSum}"

    console.log(`Pirate ship status: ${pirateShipStatus.reduce((a, b) => a + b)}`);
    console.log(`Warship status: ${warShipStatus.reduce((a, b) => a + b)}`);


}

let input = (["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

solve(input);

// 2 sections need repair.
// Pirate ship status: 135
// Warship status: 205

