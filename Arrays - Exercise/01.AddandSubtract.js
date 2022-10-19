/**
 * It takes an array of numbers, adds or subtracts the index of each number to the number itself,
 * depending on whether the number is even or odd, and then returns the sum of the original array and
 * the new array.
 * @param input - [5, 15, 23, 56, 35]
 */
function solve(input) {
    /* Creating an empty array. */
    let newArr = [];

    /* Looping through the array and checking if the number is even or odd. If it is even, it adds the
    index to the number. If it is odd, it subtracts the index from the number. */
    for (let i = 0; i < input.length; i++) {

        if (input[i] % 2 === 0) {
            newArr.push(input[i] + i);
        } else {
            newArr.push(input[i] - i);
        }
    }

    /* Adding the numbers in the array. */
    let sumOrgArr = input.reduce((a, b) => b + a)
    let sumNewArr = newArr.reduce((a, b) => b + a)
    /* Printing the new array, the sum of the original array, and the sum of the new array. */
    console.log(newArr);
    console.log(sumOrgArr);
    console.log(sumNewArr);
}

solve([5, 15, 23, 56, 35])