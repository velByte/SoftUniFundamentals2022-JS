
function solve(arr) {

    let result = [];
    let maxSequence = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            result.push(arr[i]);
        } else {
            result.push(arr[i]);
            if (result.length > maxSequence.length) {
                maxSequence = result;
            }
            console.log(result)
            result = [];
        }
    }
    console.log(maxSequence.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
//   0  1  2  3  4  5  6  7  8  9


