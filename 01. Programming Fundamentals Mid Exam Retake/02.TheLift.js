function solve(input) {
    let peopleWaiting = Number(input[0]);
    let liftState = input[1].split(" ");

    for (let i = 0; i < liftState.length; i++) {
        while (!isWagonFull(liftState[i])) {
            if (peopleWaiting > 0) {
                peopleWaiting--;
                liftState[i]++;
            } else {
                break
            }
        }
    }


    if (peopleWaiting <= 0 && !isLifftFull(liftState)) {
        console.log("The lift has empty spots!");
        console.log(...liftState)
    } else if (peopleWaiting > 0 && isLifftFull(liftState)) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(...liftState);
    } else {
        console.log(...liftState);
    }

    function isLifftFull(lift) {
        for (let i = 0; i < lift.length; i++) {
            if (!(isWagonFull(lift[i]))) {
                return false;
            }
        }
        return true;
    }

    function isWagonFull(wagon) {
        return wagon >= 4;
    }

}


solve(
    [
        "20",
        "0 2 0"
    ]

)