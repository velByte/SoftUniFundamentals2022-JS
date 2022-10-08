/**
 * If the index of the current element is even, add the two elements together and push the result to
 * the new array, otherwise, concatenate the two elements and push the result to the new array.
 * @param arr1 - ["5", "15", "23", "56", "35"]
 * @param arr2 - ["17", "22", "87", "36", "11"]
 */
function solve(arr1, arr2) {

    /* Creating a new array. */
    let newArr = [];

   /* A for loop that iterates through the elements of the two arrays. */
    for (let i = 0; i < arr1.length; i++) {
        /* Checking if the index of the current element is even. */
        if (i % 2 === 0) {
            /* Adding the two elements together and pushing the result to the new array. */
            newArr.push(Number(arr1[i]) + Number(arr2[i]))
        } else {
            /* Concatenating the two elements and pushing the result to the new array. */
            newArr.push(arr1[i] + arr2[i])
        }
        /* Adding a dash between the elements of the new array. */
        if (i < arr1.length - 1) newArr.push("-")
    }
    console.log(...newArr)
}

solve(["5", "15", "23", "56", "35"],
    ["17", "22", "87", "36", "11"])