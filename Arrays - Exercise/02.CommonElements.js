/**
 * It takes two arrays as arguments, compares them and returns the common elements in both arrays.
 * @param arr1 - ["Hey", "hello", 2, 4, "Peter", "e"]
 * @param arr2 - ["Petar", 10, "hey", 4, "hello", "2"]
 */
function solve(arr1, arr2) {

    /* Not doing anything. */
    let length = 0;
    let buff;

    /**
     * Function
     * It takes two arrays, compares them, and returns an object with two properties: an array of the
     * common words, and the number of common words.
     * @param a - array of words from the first string
     * @param b - ["I", "am", "a", "student", "from", "school"]
     * @returns An object with two properties: foundCommonWords and foundCommonWordsCount.
     */
    let result = (a, b) => {
        /* Declaring two variables. */
        let foundCommonWords = [];
        let foundCommonWordsCount = 0;

        /* A for loop that iterates through the array a. If the array b includes the element of array a, it
        pushes the element to the array foundCommonWords and increments the variable foundCommonWordsCount. */
        for (let i = 0; i < a.length; i++) {
            if (b.includes(a[i])) {
                foundCommonWords.push(a[i]);
                foundCommonWordsCount++
            }
        }
        /* It returns an object with two properties: foundCommonWords and foundCommonWordsCount. */
        return {
            foundCommonWords: foundCommonWords,
            foundCommonWordsCount: foundCommonWordsCount
        }
    }

    /* A ternary operator. If the length of the first array is greater than or equal to the length of
    the second array, it calls the function result with the first array as the first argument and
    the second array as the second argument. If the length of the first array is less than the
    length of the second array, it calls the function result with the second array as the first
    argument and the first array as the second argument. */
    let objRes = arr1.length >= arr2.length ? result(arr1, arr2) : result(arr2, arr1);

    /* It iterates through the array foundCommonWords and prints each element of the array. */
    for (let match of objRes.foundCommonWords) {
        console.log(match);
    }

}

solve(["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"])