/**
 * It takes an array as an argument, and returns the index of the first element in the array that has
 * equal sums of elements to the left and right of it, or returns "no" if no such element exists.
 * @param arr - [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]
 * @returns The index of the element that has equal sums of its left and right side.
 */

function solve(arr) {


    let equalSums = (index) => {
        /* Declaring variables. */
        let buff = [];
        let sumLeft = 0;
        let sumRight = 0;
        let isEqual = false;
        /* Taking a slice of the array from the beginning to the index. */
        buff = arr.slice(0, index);
        /* Checking if the array is empty. If it is empty, it will not sum the elements. */
        if (buff.length !== 0) {
            sumLeft = buff.reduce((a, b) => a + b);
        }
        /* Taking a slice of the array from the index + 1 to the end of the array. */
        buff = arr.slice(index + 1, arr.length)
        /* Checking if the array is empty. If it is empty, it will not sum the elements. */
        if (buff.length !== 0) {
            sumRight = buff.reduce((a, b) => a + b);
        }
        /* Checking if the sum of the left side of the array is equal to the sum of the right side of
        the array. */
        isEqual = sumLeft === sumRight
        /* Returning the value of the variable `isEqual`. */
        return isEqual;
    }

    /* Iterating through the array and checking if the function `equalSums` returns true. If it does, it
    returns the index of the element. */
    for (let i = 0; i < arr.length; i++) {
        if (equalSums(i)) return i;
    }

    /* Returning the string "no" if the function `equalSums` returns false. */
    return "no"
}

console.log(solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]))