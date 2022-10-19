/**
 * "For each element in the array, check if it's greater than all the elements to the right of it, and
 * if it is, add it to the max array."
 * 
 * The function isMax() is a helper function that checks if a number is greater than all the elements
 * to the right of it.
 * 
 * The function solve() loops through the array, and for each element, it checks if it's greater than
 * all the elements to the right of it. If it is, it adds it to the max array.
 * 
 * The function solve() then prints the max array.
 * 
 * The function solve() has a time complexity of O(n^2) because it has a nested loop.
 * 
 * The function solve() has a space complexity of O(n) because it creates a max array that's the same
 * size as the input array.
 * @param arr - [41, 41, 41, 34, 20]
 */
function solve(arr) {

    let max = []

    /**
     * `isMax` returns `true` if the number passed to it is greater than all the numbers in the array
     * passed to it starting at the index passed to it.
     * @param num - the number we're checking
     * @param index - the index of the current number in the array
     * @returns The function isMax is being returned.
     */
    let isMax = (num, index) => {
        for (let i = index; i < arr.length; i++) {
            if (num < arr[i]) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        /* It's checking if the current number is greater than all the numbers to the right of it. If
        it is, it adds it to the max array. */
        if (isMax(arr[i], i)) {
            if (!max.includes(arr[i])) max.push(arr[i])
        }
    }
    console.log(...max);
}

solve([41, 41, 41, 34, 20])