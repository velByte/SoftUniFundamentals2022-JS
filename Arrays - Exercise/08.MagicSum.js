function solve(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] + arr[k] === num) {
                console.log(`${arr[i]} ${arr[k]}`);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23],
    8
)