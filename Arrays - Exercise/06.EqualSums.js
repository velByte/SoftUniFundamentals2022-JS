
function solve(arr) {


    let equalSums = (index) => {
        let buff = [];
        let sumLeft = 0;
        let sumRight = 0;
        let isEqual = false;
        buff = arr.slice(0, index);
        if (buff.length !== 0) {
            sumLeft = buff.reduce((a, b) => a + b);
        }
        buff = arr.slice(index + 1, arr.length)
        if (buff.length !== 0) {
            sumRight = buff.reduce((a, b) => a + b);
        }
        isEqual = sumLeft === sumRight
        return isEqual;
    }

    for (let i = 0; i < arr.length; i++) {
        if (equalSums(i)) return i;
    }

    return "no"
}

const t0 = performance.now();
console.log(solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]))
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);