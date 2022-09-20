function solve(arr) {

    let max = []

    let isMax = (num, index) => {
        for (let i = index; i < arr.length; i++) {
            if (num < arr[i]) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (isMax(arr[i], i)) {
            if (!max.includes(arr[i])) max.push(arr[i])
        }
    }
    console.log(...max);
}

solve([41, 41, 41, 34, 20])