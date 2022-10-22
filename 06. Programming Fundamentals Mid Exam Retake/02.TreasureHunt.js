function solve(input) {

    let index = 0;
    let chestArr = input[index++].split("|");
    let brakeWord = "Yohoho!";
    //Test3
    while (input[index] != brakeWord) {

        let buff = input[index].split(" ");
        let cmd = buff.shift();

        switch (cmd) {
            case "Loot":
                loog(buff);
                break;
            case "Drop":
                drop(buff);
                break;
            case "Steal":
                steal(buff);
                break;
            default:
                break;
        }
        index++;
    }


    let sum = 0;
    let count = chestArr.length;

    chestArr.map(word => {
        sum += word.length;
    })

    let averageGain = (sum / count);




    if (!(chestArr.length === 0)) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }




    function loog(itemArr) {
        // o	Pick up treasure loot along the way. Insert the items at the beginning of the chest. 
        // o	If an item is already contained, don't insert it.
        // itemArr is Array; 

        let itemArrLength = itemArr.length;
        for (let index = 0; index < itemArrLength; index++) {

            let item = itemArr[index];
            if (!inChest(item)) {
                //Insert at the beggining
                chestArr.unshift(item);
            } else {
                //else do nothing 
            }
        }
    }

    function drop(arrIndex) {
        // o	Remove the loot at the given position and add it at the end of the treasure chest. 
        // o	If the index is invalid, skip the command.
        let indexTobeRemoved = Number(arrIndex);
        if (inRange(indexTobeRemoved)) {
            let temp = chestArr.splice(indexTobeRemoved, 1)[0];
            chestArr.push(temp);
        }

    }

    function steal(count) {

        let toBeRemoved = count > chestArr.length ? chestArr.length : count;

        let tempArr = [];

        for (let i = 0; i < toBeRemoved; i++) {
            tempArr.unshift(chestArr.pop());
        }

        console.log(tempArr.join(", "));

    }

    function inRange(index) {
        return index >= 0 && index < chestArr.length;
    }

    function inChest(item) {
        return chestArr.includes(item);
    }

}

let input = (["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);

solve(input)