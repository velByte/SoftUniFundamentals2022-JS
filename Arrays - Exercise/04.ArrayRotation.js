/**
 * The function takes an array and a number as arguments, and rotates the array to the left by the
 * number of times specified by the second argument.
 * @param arr - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @param num - 2
 */
function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        /* Taking the first element of the array and pushing it to the end of the array. */
        arr.push(arr.shift())
    }
    console.log(...arr)
}

solve([51, 47, 32, 61, 21], 2)