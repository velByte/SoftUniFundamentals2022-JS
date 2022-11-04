function solve(arr, num) {
    /* A nested for loop. The first for loop is iterating through the array. The second for loop is
    iterating through the array starting at the next index of the first for loop. The if statement
    is checking if the sum of the two indexes is equal to the number. If it is, it prints the two
    indexes. */
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