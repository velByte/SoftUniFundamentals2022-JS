function solve(input) {
    let index = 0;
    let targetsArr = input[index].split(' ').map(Number);
    index++
    let arrayBound = targetsArr.length;
    let shotsOnTarget = 0;

    while (input[index] !== 'End') {

        let shotIndex = Number(input[index]);
        if (isNotAlradiShot(shotIndex) && inRange(shotIndex)) {
            shotHendler(shotIndex);
        }
        index++;
    }

    console.log(`Shot targets: ${shotsOnTarget} -> ${targetsArr.join(' ')}`);

    function shotHendler(index) {

        reduceIncreseAllTargets(index);
        targetsArr[index] = -1;
        shotsOnTarget++;
    }

    function reduceIncreseAllTargets(index) {
        let currenttargetValue = targetsArr[index];
        for (let i = 0; i < arrayBound; i++) {
            if (targetsArr[i] != -1) {
                if (targetsArr[i] > currenttargetValue) {
                    targetsArr[i] -= currenttargetValue;
                } else {
                    targetsArr[i] += currenttargetValue;
                }
            }
        }
    }

    function isNotAlradiShot(index) {
        if (targetsArr[index] == -1) {
            return false;
        }
        return true;
    }

    function inRange(index) {
        if (index >= 0 && index < arrayBound) {
            return true;
        }
        return false;
    }

}

let input = (["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])


solve(input);
