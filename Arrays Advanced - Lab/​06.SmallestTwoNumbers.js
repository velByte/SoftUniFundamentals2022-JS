function solve(input) {

    let result = [];

    function findeMin(arr) {
        return Math.min(...arr);
    }

    function removeAlloccurrences(item, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }


    result.push(findeMin(input));
    input = removeAlloccurrences(result[0], input);
    result.push(findeMin(input));
    console.log(...result);
}

solve([3, 0, 10, 4, 7, 3])